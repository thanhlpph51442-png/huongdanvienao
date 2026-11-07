/**
 * HƯỚNG DẪN VIÊN ẢO – KHÁM PHÁ DI SẢN VIỆT NAM
 * App Controller & Interactive Tour Guide Engine
 */

// Application State
const AppState = {
    currentSite: null,
    searchQuery: "",
    selectedProvince: "Tất cả",
    selectedCategory: "Tất cả",
    
    // Audio Player State
    tts: {
        synth: window.speechSynthesis || null,
        utterance: null,
        isPlaying: false,
        isPaused: false,
        rate: 1.0,
        voice: null,
        availableVoices: [],
        paragraphs: [],
        currentParagraphIndex: 0,
        activeSiteId: null
    },
    
    // QR Scanner State
    scanner: {
        html5QrCode: null,
        isScanning: false,
        cameraId: null
    },
    
    // Leaflet Map State
    map: null,
    markers: []
};

// Initialize Application on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

function initApp() {
    initVoices();
    initRouter();
    renderProvincesFilter();
    renderCategoriesFilter();
    renderSitesList();
    renderFeaturedCarousel();
    initLeafletMap();
    initEvents();
    renderScannerTestBadges();
    
    // Handle initial URL hash
    handleRoute(window.location.hash || "#home");
}

/* ==========================================================================
   1. ROUTING & VIEW NAVIGATION
   ========================================================================== */
function initRouter() {
    window.addEventListener("hashchange", () => {
        handleRoute(window.location.hash || "#home");
    });
}

function handleRoute(hash) {
    // Reset active nav items
    document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.remove("text-amber-500", "font-bold", "border-b-2", "border-amber-500");
    });

    // Close mobile menu if open
    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
    }

    if (hash.startsWith("#site/")) {
        const siteId = hash.replace("#site/", "").trim();
        showSiteDetail(siteId);
        return;
    }

    // Hide detail view
    const detailView = document.getElementById("view-site-detail");
    if (detailView) detailView.classList.add("hidden");

    // Hide all main views
    const views = ["view-home", "view-explore", "view-map", "view-scanner", "view-about"];
    views.forEach(v => {
        const el = document.getElementById(v);
        if (el) el.classList.add("hidden");
    });

    // Stop QR camera if leaving scanner
    if (AppState.scanner.isScanning && hash !== "#scanner") {
        stopQRScanner();
    }

    // Show targeted view
    switch (hash) {
        case "#explore":
            document.getElementById("view-explore")?.classList.remove("hidden");
            highlightNavLink("nav-explore");
            window.scrollTo({ top: 0, behavior: "smooth" });
            break;
        case "#map":
            document.getElementById("view-map")?.classList.remove("hidden");
            highlightNavLink("nav-map");
            setTimeout(() => {
                if (AppState.map) AppState.map.invalidateSize();
            }, 250);
            window.scrollTo({ top: 0, behavior: "smooth" });
            break;
        case "#scanner":
            document.getElementById("view-scanner")?.classList.remove("hidden");
            highlightNavLink("nav-scanner");
            window.scrollTo({ top: 0, behavior: "smooth" });
            break;
        case "#about":
            document.getElementById("view-about")?.classList.remove("hidden");
            highlightNavLink("nav-about");
            window.scrollTo({ top: 0, behavior: "smooth" });
            break;
        case "#home":
        default:
            document.getElementById("view-home")?.classList.remove("hidden");
            highlightNavLink("nav-home");
            window.scrollTo({ top: 0, behavior: "smooth" });
            break;
    }
}

function highlightNavLink(id) {
    const desktopEl = document.getElementById(id);
    const mobileEl = document.getElementById(`m-${id}`);
    if (desktopEl) desktopEl.classList.add("text-amber-500", "font-bold", "border-b-2", "border-amber-500");
    if (mobileEl) mobileEl.classList.add("text-amber-500", "font-bold");
}

function navigateTo(hash) {
    window.location.hash = hash;
}

/* ==========================================================================
   2. TEXT-TO-SPEECH (TTS) AUDIO VIRTUAL TOUR GUIDE
   ========================================================================== */
function initVoices() {
    if (!AppState.tts.synth) {
        console.warn("Trình duyệt không hỗ trợ Web Speech Synthesis API.");
        return;
    }

    const loadVoices = () => {
        AppState.tts.availableVoices = AppState.tts.synth.getVoices();
        // Tìm giọng tiếng Việt (vi-VN hoặc có chứa chữ Vietnam/Vietnamese/HoaiMy/Linh/An)
        const viVoice = AppState.tts.availableVoices.find(v => 
            v.lang.toLowerCase().includes("vi") || 
            v.name.toLowerCase().includes("vietnam") || 
            v.name.toLowerCase().includes("vietnamese")
        );
        AppState.tts.voice = viVoice || AppState.tts.availableVoices[0];
    };

    loadVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = loadVoices;
    }
}

function playNarration(siteId) {
    const site = HERITAGE_SITES.find(s => s.id === siteId);
    if (!site) return;

    // If currently paused on the same site, resume
    if (AppState.tts.isPlaying && AppState.tts.isPaused && AppState.tts.activeSiteId === siteId) {
        resumeNarration();
        return;
    }

    // Stop any existing speech
    stopNarration();

    AppState.tts.activeSiteId = siteId;
    AppState.tts.isPlaying = true;
    AppState.tts.isPaused = false;
    AppState.tts.currentParagraphIndex = 0;

    // Split text into paragraphs
    AppState.tts.paragraphs = site.narrationScript
        .split("\n\n")
        .map(p => p.trim())
        .filter(p => p.length > 0);

    // Update Floating Audio UI
    showFloatingAudioBar(site);
    updateAudioControlsState();

    // Start speaking paragraphs sequentially
    speakNextParagraph();
}

function speakNextParagraph() {
    if (!AppState.tts.isPlaying || AppState.tts.isPaused) return;

    if (AppState.tts.currentParagraphIndex >= AppState.tts.paragraphs.length) {
        // Finished all paragraphs
        stopNarration();
        return;
    }

    const textToSpeak = AppState.tts.paragraphs[AppState.tts.currentParagraphIndex];

    // Highlight current paragraph in site detail view if open
    highlightReadingParagraph(AppState.tts.currentParagraphIndex);

    // Update progress
    const progressPercent = Math.round(((AppState.tts.currentParagraphIndex + 1) / AppState.tts.paragraphs.length) * 100);
    const progressBar = document.getElementById("audio-progress-bar");
    if (progressBar) progressBar.style.width = `${progressPercent}%`;

    const progressText = document.getElementById("audio-progress-text");
    if (progressText) progressText.textContent = `Đoạn ${AppState.tts.currentParagraphIndex + 1}/${AppState.tts.paragraphs.length}`;

    if (!AppState.tts.synth) {
        // Fallback simulation for browsers without TTS
        console.log("Mô phỏng phát âm thanh:", textToSpeak);
        setTimeout(() => {
            if (AppState.tts.isPlaying && !AppState.tts.isPaused) {
                AppState.tts.currentParagraphIndex++;
                speakNextParagraph();
            }
        }, 4000);
        return;
    }

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = "vi-VN";
    utterance.rate = AppState.tts.rate;
    if (AppState.tts.voice) {
        utterance.voice = AppState.tts.voice;
    }

    utterance.onend = () => {
        if (AppState.tts.isPlaying && !AppState.tts.isPaused) {
            AppState.tts.currentParagraphIndex++;
            speakNextParagraph();
        }
    };

    utterance.onerror = (e) => {
        console.error("Lỗi SpeechSynthesis:", e);
        if (AppState.tts.isPlaying && !AppState.tts.isPaused) {
            AppState.tts.currentParagraphIndex++;
            speakNextParagraph();
        }
    };

    AppState.tts.utterance = utterance;
    AppState.tts.synth.speak(utterance);
}

function pauseNarration() {
    if (!AppState.tts.isPlaying || AppState.tts.isPaused) return;
    
    if (AppState.tts.synth) {
        AppState.tts.synth.pause();
    }
    AppState.tts.isPaused = true;
    updateAudioControlsState();
}

function resumeNarration() {
    if (!AppState.tts.isPlaying || !AppState.tts.isPaused) return;

    if (AppState.tts.synth) {
        AppState.tts.synth.resume();
    }
    AppState.tts.isPaused = false;
    updateAudioControlsState();
}

function stopNarration() {
    if (AppState.tts.synth) {
        AppState.tts.synth.cancel();
    }
    AppState.tts.isPlaying = false;
    AppState.tts.isPaused = false;
    AppState.tts.currentParagraphIndex = 0;
    
    // Remove highlights
    document.querySelectorAll(".narration-paragraph").forEach(p => {
        p.classList.remove("reading-active");
    });

    hideFloatingAudioBar();
    updateAudioControlsState();
}

function setPlaybackSpeed(rate) {
    AppState.tts.rate = rate;
    
    // Update button styling
    document.querySelectorAll(".btn-speed").forEach(btn => {
        if (parseFloat(btn.dataset.speed) === rate) {
            btn.classList.add("bg-amber-500", "text-black", "font-bold");
            btn.classList.remove("bg-slate-700", "text-white");
        } else {
            btn.classList.remove("bg-amber-500", "text-black", "font-bold");
            btn.classList.add("bg-slate-700", "text-white");
        }
    });

    // If currently speaking, restart current chunk with new rate
    if (AppState.tts.isPlaying && !AppState.tts.isPaused && AppState.tts.synth) {
        AppState.tts.synth.cancel();
        speakNextParagraph();
    }
}

function highlightReadingParagraph(index) {
    const paragraphs = document.querySelectorAll(".narration-paragraph");
    paragraphs.forEach((p, idx) => {
        if (idx === index) {
            p.classList.add("reading-active");
            // Scroll gently into view if offscreen
            p.scrollIntoView({ behavior: "smooth", block: "nearest" });
        } else {
            p.classList.remove("reading-active");
        }
    });
}

function showFloatingAudioBar(site) {
    const bar = document.getElementById("floating-audio-bar");
    if (!bar) return;

    bar.classList.remove("hidden-bar");
    const titleEl = document.getElementById("audio-site-title");
    const subEl = document.getElementById("audio-site-sub");
    const thumbEl = document.getElementById("audio-site-thumb");

    if (titleEl) titleEl.textContent = site.name;
    if (subEl) subEl.textContent = site.province + " • " + site.category;
    if (thumbEl) thumbEl.src = site.thumbnail;
}

function hideFloatingAudioBar() {
    const bar = document.getElementById("floating-audio-bar");
    if (bar) bar.classList.add("hidden-bar");
}

function updateAudioControlsState() {
    const playPauseBtn = document.getElementById("btn-audio-play-pause");
    const waveVisualizer = document.getElementById("audio-wave-bars");

    if (playPauseBtn) {
        if (AppState.tts.isPlaying && !AppState.tts.isPaused) {
            playPauseBtn.innerHTML = '<i class="fa-solid fa-pause text-lg"></i>';
            playPauseBtn.title = "Tạm dừng";
        } else {
            playPauseBtn.innerHTML = '<i class="fa-solid fa-play text-lg ml-0.5"></i>';
            playPauseBtn.title = "Tiếp tục nghe";
        }
    }

    if (waveVisualizer) {
        if (AppState.tts.isPlaying && !AppState.tts.isPaused) {
            waveVisualizer.classList.remove("paused");
        } else {
            waveVisualizer.classList.add("paused");
        }
    }

    // Detail page main play button sync
    const detailPlayBtn = document.getElementById("detail-btn-play");
    if (detailPlayBtn) {
        if (AppState.tts.isPlaying && !AppState.tts.isPaused) {
            detailPlayBtn.innerHTML = '<i class="fa-solid fa-pause mr-2"></i> Tạm dừng thuyết minh';
            detailPlayBtn.classList.replace("bg-amber-600", "bg-amber-700");
        } else if (AppState.tts.isPaused) {
            detailPlayBtn.innerHTML = '<i class="fa-solid fa-play mr-2"></i> Tiếp tục thuyết minh';
            detailPlayBtn.classList.replace("bg-amber-700", "bg-amber-600");
        } else {
            detailPlayBtn.innerHTML = '<i class="fa-solid fa-headphones mr-2"></i> Nghe thuyết minh tự động';
            detailPlayBtn.classList.add("bg-amber-600");
        }
    }
}

/* ==========================================================================
   3. QR CODE SCANNER (CAMERA & IMAGE UPLOAD & SAMPLE BADGES)
   ========================================================================== */
function initQRScanner() {
    if (AppState.scanner.isScanning) return;

    const qrReaderDiv = document.getElementById("qr-reader");
    if (!qrReaderDiv) return;

    qrReaderDiv.innerHTML = "";
    document.getElementById("qr-scan-status").textContent = "Đang khởi động camera quét mã QR...";
    document.getElementById("qr-scan-status").className = "text-amber-500 font-medium animate-pulse";

    try {
        AppState.scanner.html5QrCode = new Html5Qrcode("qr-reader");
        const config = { fps: 10, qrbox: { width: 250, height: 250 } };

        AppState.scanner.html5QrCode.start(
            { facingMode: "environment" },
            config,
            (decodedText) => {
                // On QR scan success
                handleScannedQRCode(decodedText);
            },
            () => {
                // Scan failure callback ignored to avoid noise
            }
        ).then(() => {
            AppState.scanner.isScanning = true;
            document.getElementById("btn-toggle-camera").innerHTML = '<i class="fa-solid fa-camera-slash mr-2"></i> Tắt camera';
            document.getElementById("qr-scan-status").textContent = "Hướng camera vào mã QR tại di tích để nhận diện tự động";
            document.getElementById("qr-scan-status").className = "text-emerald-500 font-medium";
        }).catch((err) => {
            console.warn("Không mở được camera tự động:", err);
            document.getElementById("qr-scan-status").innerHTML = 
                '<span class="text-rose-400">Không thể truy cập camera. Vui lòng cấp quyền hoặc tải ảnh mã QR bên dưới, hoặc chọn mã QR mẫu.</span>';
        });
    } catch (e) {
        console.error("Lỗi khởi tạo Html5Qrcode:", e);
        document.getElementById("qr-scan-status").textContent = "Trình duyệt không hỗ trợ camera trực tiếp.";
    }
}

function stopQRScanner() {
    if (AppState.scanner.html5QrCode && AppState.scanner.isScanning) {
        AppState.scanner.html5QrCode.stop().then(() => {
            AppState.scanner.isScanning = false;
            document.getElementById("btn-toggle-camera").innerHTML = '<i class="fa-solid fa-camera mr-2"></i> Bật camera quét mã';
            document.getElementById("qr-scan-status").textContent = "Camera đã tắt. Nhấn nút để bật lại.";
            document.getElementById("qr-scan-status").className = "text-slate-400";
        }).catch(err => console.error("Lỗi dừng camera:", err));
    }
}

function handleScannedQRCode(text) {
    console.log("Mã QR quét được:", text);
    
    // Parse text to find site ID
    let matchedSite = null;

    // Check exact id or slug
    matchedSite = HERITAGE_SITES.find(s => s.id === text || s.slug === text);

    // Check url hash like #site/van-mieu
    if (!matchedSite && text.includes("#site/")) {
        const idFromHash = text.split("#site/")[1].split("?")[0].trim();
        matchedSite = HERITAGE_SITES.find(s => s.id === idFromHash || s.slug === idFromHash);
    }

    // Check query parameter like ?site=van-mieu
    if (!matchedSite && text.includes("site=")) {
        const urlParams = new URLSearchParams(text.includes("?") ? text.split("?")[1] : text);
        const siteParam = urlParams.get("site");
        matchedSite = HERITAGE_SITES.find(s => s.id === siteParam || s.slug === siteParam);
    }

    // Loose match site name
    if (!matchedSite) {
        matchedSite = HERITAGE_SITES.find(s => text.toLowerCase().includes(s.name.toLowerCase()));
    }

    if (matchedSite) {
        // Stop camera
        stopQRScanner();

        // Show toast or status
        showToast(`Đã nhận diện: ${matchedSite.name}`, "success");

        // Navigate to site detail
        navigateTo(`#site/${matchedSite.id}`);

        // Automatically prompt audio guide
        setTimeout(() => {
            playNarration(matchedSite.id);
        }, 600);
    } else {
        showToast("Không tìm thấy di tích tương ứng với mã QR này: " + text, "warning");
    }
}

function handleQRFileUpload(file) {
    if (!file) return;

    const html5QrCode = new Html5Qrcode("qr-reader-file-temp");
    html5QrCode.scanFile(file, true)
        .then(decodedText => {
            handleScannedQRCode(decodedText);
        })
        .catch(err => {
            console.error("Lỗi đọc mã QR từ ảnh:", err);
            showToast("Không tìm thấy mã QR hợp lệ trong ảnh tải lên.", "error");
        });
}

function renderScannerTestBadges() {
    const container = document.getElementById("scanner-sample-badges");
    if (!container) return;

    container.innerHTML = HERITAGE_SITES.slice(0, 6).map(site => `
        <button onclick="handleScannedQRCode('${site.id}')" 
                class="flex items-center gap-3 p-3 bg-slate-800/80 hover:bg-amber-900/40 border border-slate-700 hover:border-amber-500/50 rounded-xl transition text-left group">
            <div class="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition">
                <i class="fa-solid fa-qrcode text-lg"></i>
            </div>
            <div class="overflow-hidden">
                <div class="font-semibold text-sm text-slate-200 group-hover:text-amber-400 truncate">${site.name}</div>
                <div class="text-xs text-slate-400">${site.province}</div>
            </div>
        </button>
    `).join("");
}

/* ==========================================================================
   4. SITE DETAILS VIEW & GENERATE QR MODAL
   ========================================================================== */
function showSiteDetail(siteId) {
    const site = HERITAGE_SITES.find(s => s.id === siteId);
    if (!site) {
        showToast("Không tìm thấy thông tin di tích!", "error");
        navigateTo("#explore");
        return;
    }

    AppState.currentSite = site;

    // Hide all views, display detail
    const views = ["view-home", "view-explore", "view-map", "view-scanner", "view-about"];
    views.forEach(v => document.getElementById(v)?.classList.add("hidden"));
    
    const detailView = document.getElementById("view-site-detail");
    if (!detailView) return;
    detailView.classList.remove("hidden");

    // Populate data
    document.getElementById("detail-title").textContent = site.name;
    document.getElementById("detail-subtitle").textContent = site.subtitle;
    document.getElementById("detail-province").textContent = site.province;
    document.getElementById("detail-address").textContent = site.address;
    document.getElementById("detail-hero-img").src = site.thumbnail;
    document.getElementById("detail-summary").textContent = site.summary;
    document.getElementById("detail-history").textContent = site.history;
    document.getElementById("detail-architecture").textContent = site.architecture;
    document.getElementById("detail-cultural-value").textContent = site.culturalValue;

    // Badges
    const badgeCategory = document.getElementById("detail-badge-category");
    if (badgeCategory) {
        badgeCategory.textContent = site.category;
        badgeCategory.className = "heritage-badge " + (site.category.includes("UNESCO") ? "badge-unesco" : "badge-special");
    }

    const badgeUnesco = document.getElementById("detail-badge-unesco");
    if (badgeUnesco) {
        badgeUnesco.textContent = site.unescoStatus;
    }

    // Historical Events Timeline
    const timelineContainer = document.getElementById("detail-timeline");
    if (timelineContainer) {
        timelineContainer.innerHTML = site.historicalEvents.map((evt, idx) => `
            <div class="relative pl-6 pb-6 border-l-2 border-amber-400/40 last:border-transparent last:pb-0">
                <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amber-500 border-2 border-white shadow"></div>
                <div class="text-sm font-bold text-amber-700 bg-amber-50 inline-block px-2 py-0.5 rounded border border-amber-200 mb-1">
                    ${evt.year}
                </div>
                <p class="text-slate-700 text-sm leading-relaxed">${evt.event}</p>
            </div>
        `).join("");
    }

    // Visiting Info
    document.getElementById("detail-open-hours").textContent = site.visitingInfo.openHours;
    document.getElementById("detail-ticket-price").textContent = site.visitingInfo.ticketPrice;
    document.getElementById("detail-dress-code").textContent = site.visitingInfo.dressCode;
    document.getElementById("detail-amenities").textContent = site.visitingInfo.amenities;

    // References
    const refContainer = document.getElementById("detail-references");
    if (refContainer) {
        refContainer.innerHTML = site.references.map(ref => `
            <li class="flex items-start gap-2 text-xs text-slate-600">
                <i class="fa-solid fa-bookmark text-amber-600 mt-0.5"></i>
                <span>${ref}</span>
            </li>
        `).join("");
    }

    // Narration Script Rendering with interactive paragraphs
    const narrationContainer = document.getElementById("detail-narration-script");
    if (narrationContainer) {
        const paragraphs = site.narrationScript.split("\n\n").map(p => p.trim()).filter(p => p.length > 0);
        narrationContainer.innerHTML = paragraphs.map((p, idx) => `
            <div class="narration-paragraph text-slate-800" data-index="${idx}">
                ${p}
            </div>
        `).join("");
    }

    // Photo Gallery
    const galleryContainer = document.getElementById("detail-gallery");
    if (galleryContainer) {
        galleryContainer.innerHTML = site.gallery.map(img => `
            <div class="rounded-xl overflow-hidden shadow border border-amber-200/50 group h-48">
                <img src="${img}" alt="${site.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500 cursor-pointer" onclick="window.open('${img}', '_blank')">
            </div>
        `).join("");
    }

    // Update main play button state
    updateAudioControlsState();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function openSiteQRModal() {
    if (!AppState.currentSite) return;
    const site = AppState.currentSite;

    const modal = document.getElementById("qr-modal");
    if (!modal) return;

    document.getElementById("modal-site-name").textContent = site.name;
    document.getElementById("modal-site-sub").textContent = site.province + " • " + site.category;
    
    // Clear previous QR
    const qrTarget = document.getElementById("modal-qrcode-target");
    qrTarget.innerHTML = "";

    // Generate real QR code pointing to this site's deep link
    const siteUrl = `${window.location.origin}${window.location.pathname}#site/${site.id}`;
    
    // Use QRCode.js library
    if (typeof QRCode !== "undefined") {
        new QRCode(qrTarget, {
            text: siteUrl,
            width: 220,
            height: 220,
            colorDark: "#1a2b4c",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    } else {
        // Fallback image using QR API
        qrTarget.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(siteUrl)}" alt="QR Code" class="mx-auto rounded shadow" />`;
    }

    modal.classList.remove("hidden");
}

function closeSiteQRModal() {
    const modal = document.getElementById("qr-modal");
    if (modal) modal.classList.add("hidden");
}

/* ==========================================================================
   5. LIST, SEARCH & FILTER BY PROVINCE
   ========================================================================== */
function renderProvincesFilter() {
    const container = document.getElementById("province-filter-bar");
    if (!container) return;

    container.innerHTML = PROVINCES.map(prov => `
        <button onclick="setProvinceFilter('${prov}')" 
                class="province-btn px-4 py-2 rounded-full text-xs md:text-sm font-medium transition whitespace-nowrap 
                ${AppState.selectedProvince === prov ? 'bg-amber-600 text-white shadow-md' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'}">
            ${prov}
        </button>
    `).join("");
}

function renderCategoriesFilter() {
    const container = document.getElementById("category-filter-bar");
    if (!container) return;

    container.innerHTML = CATEGORIES.map(cat => `
        <button onclick="setCategoryFilter('${cat}')" 
                class="category-btn px-3 py-1.5 rounded-lg text-xs font-medium transition 
                ${AppState.selectedCategory === cat ? 'bg-slate-900 text-amber-400' : 'bg-white text-slate-600 border border-slate-200 hover:border-amber-400'}">
            ${cat}
        </button>
    `).join("");
}

function setProvinceFilter(province) {
    AppState.selectedProvince = province;
    renderProvincesFilter();
    renderSitesList();

    // Also sync Leaflet map markers
    filterMapByProvince(province);
}

function setCategoryFilter(category) {
    AppState.selectedCategory = category;
    renderCategoriesFilter();
    renderSitesList();
}

function handleSearch(query) {
    AppState.searchQuery = query.toLowerCase().trim();
    renderSitesList();
}

function getFilteredSites() {
    return HERITAGE_SITES.filter(site => {
        const matchProvince = (AppState.selectedProvince === "Tất cả") || (site.province === AppState.selectedProvince);
        const matchCategory = (AppState.selectedCategory === "Tất cả") || (site.category === AppState.selectedCategory);
        const matchQuery = !AppState.searchQuery || 
            site.name.toLowerCase().includes(AppState.searchQuery) ||
            site.province.toLowerCase().includes(AppState.searchQuery) ||
            site.summary.toLowerCase().includes(AppState.searchQuery) ||
            site.address.toLowerCase().includes(AppState.searchQuery);

        return matchProvince && matchCategory && matchQuery;
    });
}

function renderSitesList() {
    const container = document.getElementById("sites-grid-container");
    const countEl = document.getElementById("sites-count-label");
    if (!container) return;

    const filtered = getFilteredSites();
    if (countEl) {
        countEl.textContent = `Hiển thị ${filtered.length} trên tổng số ${HERITAGE_SITES.length} di tích`;
    }

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="col-span-full py-16 text-center">
                <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center text-2xl">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <h4 class="text-lg font-bold text-slate-800">Không tìm thấy di tích phù hợp</h4>
                <p class="text-sm text-slate-500 mt-1">Vui lòng thử tìm kiếm với từ khóa khác hoặc bỏ bớt tiêu chí lọc.</p>
                <button onclick="resetFilters()" class="mt-4 px-4 py-2 bg-amber-600 text-white text-sm font-medium rounded-lg hover:bg-amber-700 transition">
                    Xóa tất cả bộ lọc
                </button>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(site => `
        <div class="heritage-card rounded-2xl overflow-hidden flex flex-col group">
            <div class="relative h-56 overflow-hidden bg-slate-900">
                <img src="${site.thumbnail}" alt="${site.name}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div class="absolute top-3 left-3">
                    <span class="heritage-badge ${site.category.includes("UNESCO") ? "badge-unesco" : "badge-special"}">
                        ${site.category.includes("UNESCO") ? '<i class="fa-solid fa-award"></i>' : '<i class="fa-solid fa-landmark"></i>'}
                        ${site.province}
                    </span>
                </div>
                <div class="absolute bottom-3 left-3 right-3 text-white">
                    <h3 class="text-lg font-bold leading-snug drop-shadow group-hover:text-amber-400 transition">${site.name}</h3>
                </div>
            </div>

            <div class="p-5 flex-1 flex flex-col justify-between bg-white">
                <div>
                    <p class="text-slate-600 text-sm line-clamp-3 leading-relaxed mb-4">
                        ${site.summary}
                    </p>
                    <div class="flex items-center gap-2 text-xs text-slate-500 mb-4">
                        <i class="fa-solid fa-location-dot text-amber-600 shrink-0"></i>
                        <span class="truncate">${site.address}</span>
                    </div>
                </div>

                <div class="pt-4 border-t border-stone-100 flex items-center justify-between gap-2">
                    <button onclick="navigateTo('#site/${site.id}')" 
                            class="flex-1 py-2.5 px-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition shadow-sm">
                        <i class="fa-solid fa-circle-info"></i>
                        <span>Chi tiết di tích</span>
                    </button>
                    <button onclick="playNarration('${site.id}')" 
                            class="p-2.5 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 rounded-xl text-xs font-semibold flex items-center justify-center transition"
                            title="Nghe thuyết minh ngay">
                        <i class="fa-solid fa-volume-high text-sm"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join("");
}

function resetFilters() {
    AppState.searchQuery = "";
    AppState.selectedProvince = "Tất cả";
    AppState.selectedCategory = "Tất cả";
    
    const searchInputs = document.querySelectorAll(".input-search");
    searchInputs.forEach(input => input.value = "");

    renderProvincesFilter();
    renderCategoriesFilter();
    renderSitesList();
}

function renderFeaturedCarousel() {
    const container = document.getElementById("featured-sites-row");
    if (!container) return;

    container.innerHTML = HERITAGE_SITES.slice(0, 4).map(site => `
        <div onclick="navigateTo('#site/${site.id}')" 
             class="min-w-[280px] md:min-w-[320px] rounded-2xl overflow-hidden relative cursor-pointer group shadow-lg">
            <div class="h-80 w-full overflow-hidden bg-slate-900">
                <img src="${site.thumbnail}" alt="${site.name}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>
            </div>
            <div class="absolute top-4 left-4">
                <span class="heritage-badge badge-special shadow">${site.province}</span>
            </div>
            <div class="absolute bottom-4 left-4 right-4 text-white">
                <h4 class="text-xl font-bold mb-1 group-hover:text-amber-400 transition">${site.name}</h4>
                <p class="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-3">${site.subtitle}</p>
                <div class="flex items-center justify-between text-xs font-medium text-amber-400">
                    <span>Khám phá ngay &rarr;</span>
                    <span class="bg-white/20 backdrop-blur px-2 py-0.5 rounded text-[11px] text-white">
                        <i class="fa-solid fa-headphones mr-1"></i> Có thuyết minh
                    </span>
                </div>
            </div>
        </div>
    `).join("");
}

/* ==========================================================================
   6. INTERACTIVE LEAFLET HERITAGE MAP
   ========================================================================== */
function initLeafletMap() {
    const mapContainer = document.getElementById("leaflet-heritage-map");
    if (!mapContainer || typeof L === "undefined") return;

    // Center map roughly at Danang (center of Vietnam)
    AppState.map = L.map("leaflet-heritage-map", {
        center: [16.2, 107.5],
        zoom: 6,
        scrollWheelZoom: false
    });

    // Elegant CartoDB Voyager or OpenStreetMap tiles
    L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
        attribution: '&copy; <a href="https://carto.com/">CARTO</a>, &copy; OpenStreetMap contributors',
        maxZoom: 18
    }).addTo(AppState.map);

    // Custom Icon Generator
    const createCustomIcon = (site) => {
        return L.divIcon({
            className: "custom-leaflet-marker",
            html: `<i class="fa-solid ${site.category.includes("UNESCO") ? "fa-landmark-flag" : "fa-monument"} text-sm"></i>`,
            iconSize: [36, 36],
            iconAnchor: [18, 18],
            popupAnchor: [0, -20]
        });
    };

    // Add Markers for all sites
    AppState.markers = [];
    HERITAGE_SITES.forEach(site => {
        const marker = L.marker(site.coordinates, { icon: createCustomIcon(site) }).addTo(AppState.map);
        
        const popupContent = `
            <div style="width: 240px; font-family: inherit;">
                <div style="height: 120px; overflow: hidden; position: relative;">
                    <img src="${site.thumbnail}" style="width: 100%; height: 100%; object-fit: cover;" alt="${site.name}">
                    <span style="position: absolute; top: 6px; left: 6px; background: #0f1d32; color: #f4e5be; font-size: 10px; padding: 2px 6px; border-radius: 4px; font-weight: bold;">
                        ${site.province}
                    </span>
                </div>
                <div style="padding: 10px;">
                    <h4 style="margin: 0 0 4px; font-size: 14px; font-weight: bold; color: #1a2b4c;">${site.name}</h4>
                    <p style="margin: 0 0 8px; font-size: 11px; color: #64748b; line-height: 1.4;">${site.category}</p>
                    <div style="display: flex; gap: 6px;">
                        <button onclick="navigateTo('#site/${site.id}')" style="flex: 1; padding: 6px; background: #c5a059; color: white; border: none; border-radius: 6px; font-size: 11px; font-weight: bold; cursor: pointer;">
                            Xem thông tin
                        </button>
                        <button onclick="playNarration('${site.id}')" style="padding: 6px 10px; background: #0f1d32; color: #f4e5be; border: none; border-radius: 6px; font-size: 11px; cursor: pointer;" title="Nghe thuyết minh">
                            <i class="fa-solid fa-headphones"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        marker.bindPopup(popupContent);
        marker.siteData = site;
        AppState.markers.push(marker);
    });
}

function filterMapByProvince(province) {
    if (!AppState.map || !AppState.markers.length) return;

    if (province === "Tất cả") {
        AppState.map.setView([16.2, 107.5], 6);
        AppState.markers.forEach(m => m.addTo(AppState.map));
    } else {
        const provinceMarkers = AppState.markers.filter(m => m.siteData.province === province);
        if (provinceMarkers.length > 0) {
            const firstCoord = provinceMarkers[0].getLatLng();
            AppState.map.setView(firstCoord, 12, { animate: true });
            provinceMarkers[0].openPopup();
        }
    }
}

function locateUserAndNearestSite() {
    if (!navigator.geolocation) {
        showToast("Trình duyệt của bạn không hỗ trợ định vị GPS.", "warning");
        return;
    }

    showToast("Đang xác định tọa độ GPS của bạn...", "info");

    navigator.geolocation.getCurrentPosition(
        (pos) => {
            const userLat = pos.coords.latitude;
            const userLng = pos.coords.longitude;

            if (AppState.map) {
                // Add user marker
                const userIcon = L.divIcon({
                    className: "custom-leaflet-marker",
                    html: '<i class="fa-solid fa-person text-base text-rose-400"></i>',
                    iconSize: [36, 36]
                });
                L.marker([userLat, userLng], { icon: userIcon }).addTo(AppState.map)
                    .bindPopup("<strong>Vị trí của bạn</strong>").openPopup();

                AppState.map.setView([userLat, userLng], 11);
            }

            // Find nearest site
            let nearest = null;
            let minDistance = Infinity;

            HERITAGE_SITES.forEach(site => {
                const dist = calculateHaversineDistance(userLat, userLng, site.coordinates[0], site.coordinates[1]);
                if (dist < minDistance) {
                    minDistance = dist;
                    nearest = site;
                }
            });

            if (nearest) {
                showToast(`Di tích gần bạn nhất: ${nearest.name} (~${minDistance.toFixed(1)} km)`, "success");
            }
        },
        (err) => {
            console.error(err);
            showToast("Không thể lấy vị trí GPS. Vui lòng cho phép quyền truy cập vị trí.", "error");
        }
    );
}

// Haversine formula to compute distance in km
function calculateHaversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

/* ==========================================================================
   7. EVENT LISTENERS & UI HELPERS
   ========================================================================== */
function initEvents() {
    // Search input handlers
    const searchInputs = document.querySelectorAll(".input-search");
    searchInputs.forEach(input => {
        input.addEventListener("input", (e) => handleSearch(e.target.value));
    });

    // Mobile Hamburger Menu
    const hamburgerBtn = document.getElementById("btn-hamburger");
    const mobileMenu = document.getElementById("mobile-menu");
    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });
    }

    // Audio Play/Pause Button in floating bar
    const floatingPlayBtn = document.getElementById("btn-audio-play-pause");
    if (floatingPlayBtn) {
        floatingPlayBtn.addEventListener("click", () => {
            if (!AppState.tts.isPlaying) {
                if (AppState.tts.activeSiteId) {
                    playNarration(AppState.tts.activeSiteId);
                } else if (AppState.currentSite) {
                    playNarration(AppState.currentSite.id);
                }
            } else if (AppState.tts.isPaused) {
                resumeNarration();
            } else {
                pauseNarration();
            }
        });
    }

    // Audio Stop Button
    const floatingStopBtn = document.getElementById("btn-audio-stop");
    if (floatingStopBtn) {
        floatingStopBtn.addEventListener("click", stopNarration);
    }

    // Speed Controls
    document.querySelectorAll(".btn-speed").forEach(btn => {
        btn.addEventListener("click", () => {
            const speed = parseFloat(btn.dataset.speed);
            setPlaybackSpeed(speed);
        });
    });

    // Detail Play Button
    const detailPlayBtn = document.getElementById("detail-btn-play");
    if (detailPlayBtn) {
        detailPlayBtn.addEventListener("click", () => {
            if (AppState.currentSite) {
                if (AppState.tts.isPlaying && !AppState.tts.isPaused) {
                    pauseNarration();
                } else if (AppState.tts.isPaused) {
                    resumeNarration();
                } else {
                    playNarration(AppState.currentSite.id);
                }
            }
        });
    }

    // QR Camera Toggle in Scanner View
    const cameraToggleBtn = document.getElementById("btn-toggle-camera");
    if (cameraToggleBtn) {
        cameraToggleBtn.addEventListener("click", () => {
            if (AppState.scanner.isScanning) {
                stopQRScanner();
            } else {
                initQRScanner();
            }
        });
    }

    // File input QR scan
    const qrFileInput = document.getElementById("qr-file-input");
    if (qrFileInput) {
        qrFileInput.addEventListener("change", (e) => {
            if (e.target.files && e.target.files[0]) {
                handleQRFileUpload(e.target.files[0]);
            }
        });
    }
}

// Toast notification helper
function showToast(message, type = "info") {
    const toast = document.createElement("div");
    const colors = {
        success: "bg-emerald-600 text-white",
        error: "bg-rose-600 text-white",
        warning: "bg-amber-600 text-white",
        info: "bg-slate-800 text-white"
    };

    toast.className = `fixed top-5 right-5 z-[2000] px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 text-sm font-medium transition-all transform duration-300 translate-y-[-20px] opacity-0 ${colors[type] || colors.info}`;
    
    let icon = "fa-circle-info";
    if (type === "success") icon = "fa-circle-check";
    if (type === "error") icon = "fa-triangle-exclamation";
    if (type === "warning") icon = "fa-circle-exclamation";

    toast.innerHTML = `<i class="fa-solid ${icon}"></i><span>${message}</span>`;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.remove("translate-y-[-20px]", "opacity-0");
    }, 10);

    setTimeout(() => {
        toast.classList.add("translate-y-[-20px]", "opacity-0");
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

