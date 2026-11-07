# HƯỚNG DẪN VIÊN ẢO – KHÁM PHÁ DI SẢN VIỆT NAM

> **Slogan:** *“Chạm vào lịch sử – Khám phá di sản”*

---

## 🌟 Giới thiệu Dự án

**HƯỚNG DẪN VIÊN ẢO** là nền tảng web ứng dụng công nghệ du lịch thông minh, giúp du khách trong và ngoài nước tự do tham quan, tìm hiểu chiều sâu lịch sử, kiến trúc và văn hóa của các di tích lịch sử, danh lam thắng cảnh Việt Nam ngay trên điện thoại di động mà **không cần hướng dẫn viên trực tiếp**.

---

## 🚀 Các Tính Năng Nổi Bật

### 1. Thuyết Minh Đọc Thành Tiếng (Text-to-Speech)
- **Giọng đọc tiếng Việt tự nhiên** thông qua Web Speech API.
- Bộ điều khiển đa năng: **Phát (▶)**, **Tạm dừng (⏸)**, **Tiếp tục (⏯)**, **Dừng (⏹)**.
- **Tùy chỉnh tốc độ đọc:** `0.8x`, `1.0x`, `1.25x`.
- **Thanh Audio nổi (Floating Audio Player):** Du khách có thể thoải mái cuộn trang, xem hình ảnh và tản bộ trong di tích mà bài thuyết minh vẫn tiếp tục phát.
- **Highlight văn bản trực quan:** Tự động làm nổi bật câu/đoạn đang đọc và cuộn theo tiến trình.
- Hiệu ứng sóng âm thanh (**Waveform visualizer**) sinh động khi phát.

### 2. Quét Mã QR Thông Minh Tại Điểm Di Tích
- **Quét trực tiếp qua Camera điện thoại** sử dụng thư viện `html5-qrcode`.
- **Quét từ tệp ảnh** lưu trong điện thoại hoặc máy tính.
- **Nhận diện tức thì:** Khi quét mã QR dán tại cổng di tích, hệ thống tự động nhận diện và mở ngay trang thông tin chi tiết của di tích đó và bắt đầu phát bài thuyết minh.
- **Bộ thẻ mã QR mẫu:** Cho phép người dùng thử nghiệm tính năng quét chỉ với 1 cú click ngay cả khi máy tính không có camera.
- **Tạo & In mã QR di tích:** Mỗi điểm di tích có công cụ tạo mã QR sắc nét, sẵn sàng để ban quản lý di tích in ấn và dán tại quầy vé hoặc bia chỉ dẫn.

### 3. Trang Thông Tin Di Tích Toàn Diện & Chuẩn Xác
Mỗi điểm di tích bao gồm:
- **Tên di tích & Xếp hạng:** Di tích Quốc gia đặc biệt, Di sản Thế giới UNESCO.
- **Hình ảnh chất lượng cao & Gallery ảnh thực tế.**
- **Địa chỉ chi tiết & Tọa độ bản đồ GPS.**
- **Lịch sử hình thành & Bối cảnh xây dựng.**
- **Niên biểu lịch sử (Timeline):** Các mốc năm quan trọng và sự kiện nổi bật.
- **Kiến trúc & Nét văn hóa đặc trưng:** Phân tích chi tiết nghệ thuật xây dựng, chạm khắc.
- **Giá trị lịch sử & Văn hóa nhân văn.**
- **Thông tin tham quan thực tế:** Giờ mở cửa, giá vé, lưu ý trang phục, tiện ích dịch vụ.
- **Nguồn tham khảo đáng tin cậy:** Cục Di sản Văn hóa (Bộ VHTTDL), UNESCO World Heritage Centre, Trung tâm Bảo tồn Cố đô Huế, BQL Di tích Văn Miếu...

### 4. Bản Đồ Di Tích Số & Định Vị GPS
- Tích hợp **Leaflet.js** với giao diện cổ điển, định vị chính xác tọa độ các di tích trên khắp dải đất hình chữ S.
- Nhấp vào từng điểm ghim để xem hình ảnh thu nhỏ, tóm tắt và nút mở thuyết minh nhanh.
- **Tính năng "Tìm di tích gần tôi nhất":** Tự động tính toán khoảng cách theo công thức Haversine dựa trên GPS của người dùng.

### 5. Tìm Kiếm & Bộ Lọc Đa Tiêu Chí
- Tìm kiếm theo từ khóa: Tên di tích, tỉnh thành, thời kỳ lịch sử.
- Lọc theo **Tỉnh / Thành phố:** Hà Nội, Ninh Bình, Quảng Ninh, Thừa Thiên Huế, Quảng Nam, TP. Hồ Chí Minh...
- Lọc theo **Danh mục di sản:** Di sản Thế giới UNESCO, Di tích Quốc gia đặc biệt...

---

## 🏛️ Danh Sách Các Di Tích Đã Tích Hợp

1. **Văn Miếu – Quốc Tử Giám** *(Hà Nội)* – Trường đại học đầu tiên của Việt Nam & 82 Bia Tiến sĩ UNESCO.
2. **Hoàng thành Thăng Long** *(Hà Nội)* – Trung tâm quyền lực 13 thế kỷ, Di sản Văn hóa Thế giới.
3. **Hồ Gươm & Đền Ngọc Sơn** *(Hà Nội)* – Huyền tích gươm thần và biểu tượng hòa hiếu Thăng Long.
4. **Cố đô Huế – Đại Nội** *(Thừa Thiên Huế)* – Kinh đô triều Nguyễn, Di sản Thế giới đầu tiên của Việt Nam.
5. **Phố cổ Hội An** *(Quảng Nam)* – Thương cảng quốc tế thế kỷ 16–17 được bảo tồn nguyên vẹn.
6. **Địa đạo Củ Chi** *(TP. Hồ Chí Minh)* – Kỳ quan quân sự trong lòng đất, "Đất thép thành đồng".
7. **Dinh Độc Lập** *(TP. Hồ Chí Minh)* – Chứng tích ngày non sông thu về một mối 30/4/1975.
8. **Quần thể danh thắng Tràng An** *(Ninh Bình)* – Di sản thế giới kép Văn hóa & Thiên nhiên độc nhất Đông Nam Á.
9. **Thánh địa Mỹ Sơn** *(Quảng Nam)* – Thung lũng đền tháp Chăm Pa huyền bí.
10. **Vịnh Hạ Long** *(Quảng Ninh)* – Kỳ quan thiên nhiên thế giới với gần 2.000 đảo đá vôi kỳ vĩ.

---

## 🎨 Thiết Kế & Trải Nghiệm Người Dùng (UI/UX)

- **Bảng màu di sản:**
  - **Vàng đồng / Hoàng kim (`#c5a059`):** Tôn vinh nét cổ kính, trang trọng.
  - **Nâu cổ điển (`#4a2e18`):** Sắc màu của gỗ lim, đất phù sa và thời gian.
  - **Xanh hoàng gia (`#0f1d32`):** Chiều sâu lịch sử và sự trang nghiêm.
  - **Trắng ngà / Giấy dó cổ (`#fdfbf7`):** Nền đọc êm dịu cho mắt khi đi ngoài trời nắng.
- **Phong cách:** Trang trọng, tôn vinh hồn cốt văn hóa dân tộc.
- **Responsive 100%:** Hoạt động mượt mà trên Mobile (iOS/Android), Máy tính bảng và Máy tính để bàn.

---

## 💻 Hướng Dẫn Khởi Chạy Website

Website được thiết kế hoàn toàn theo tiêu chuẩn web hiện đại, **không cần cài đặt môi trường hay cài đặt thư viện phức tạp**.

### Cách 1: Mở trực tiếp bằng trình duyệt
1. Nhấp đúp chuột vào tệp `index.html` trong thư mục `c:\Tuan1`.
2. Trình duyệt (Chrome, Edge, Safari, Firefox) sẽ mở website ngay lập tức với đầy đủ tính năng.

### Cách 2: Triển khai lên Web Hosting
Bạn có thể đưa toàn bộ thư mục này lên GitHub Pages, Vercel, Netlify hoặc bất kỳ hosting tĩnh nào với cấu hình 0-step (chỉ cần tải thư mục lên là chạy ngay).

---

## 📂 Cấu Trúc Thư Mục

```
c:\Tuan1\
│
├── index.html          # Trang chủ và giao diện ứng dụng Single Page App
├── css/
│   └── style.css       # Hiệu ứng di sản, sóng âm thanh, bản đồ, player
├── js/
│   ├── data.js         # Cơ sở dữ liệu 10 di tích lịch sử, kịch bản thuyết minh
│   └── app.js          # Bộ máy giọng đọc TTS, quét mã QR, bản đồ Leaflet, bộ lọc
└── README.md           # Tài liệu hướng dẫn sử dụng và giới thiệu dự án
```

