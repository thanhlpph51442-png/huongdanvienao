/**
 * Dữ liệu các điểm di tích lịch sử và văn hóa Việt Nam
 * Nguồn tham khảo: Cục Di sản Văn hóa (Bộ VHTTDL), Trung tâm Bảo tồn Di tích Cố đô Huế,
 * Ban Quản lý Di tích Văn Miếu - Quốc Tử Giám, Hoàng thành Thăng Long, UNESCO Heritage Centre.
 */

const HERITAGE_SITES = [
    {
        id: "van-mieu",
        slug: "van-mieu-quoc-tu-giam",
        name: "Văn Miếu – Quốc Tử Giám",
        subtitle: "Trường Đại học đầu tiên của Việt Nam & Biểu tượng của nền văn hiến Thăng Long",
        category: "Di tích Quốc gia đặc biệt",
        unescoStatus: "82 Bia Tiến sĩ được UNESCO công nhận là Di sản Tư liệu Thế giới",
        province: "Hà Nội",
        region: "Miền Bắc",
        address: "58 Phố Quốc Tử Giám, Phường Văn Miếu, Quận Đống Đa, Hà Nội",
        coordinates: [21.0293, 105.8360],
        thumbnail: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80"
        ],
        summary: "Văn Miếu – Quốc Tử Giám được khởi dựng từ năm 1070 dưới triều vua Lý Thánh Tông. Đây là trường đại học đầu tiên của Việt Nam, nơi đào tạo hàng ngàn bậc hiền tài cống hiến cho đất nước suốt thời phong kiến Lý, Trần, Hậu Lê.",
        
        history: "Năm 1070 (tháng 8 âm lịch), vua Lý Thánh Tông cho xây dựng Văn Miếu để thờ Khổng Tử, Chu Công và các bậc hiền triết Nho học. Năm 1076, vua Lý Nhân Tông cho lập Quốc Tử Giám kề bên, ban đầu dành riêng cho con vua và các bậc đại thần, sau mở rộng cho con em thường dân có tài năng xuất chúng trên khắp cả nước. Năm 1484, vua Lê Thánh Tông ban lệnh khởi xướng lệ khắc bia Tiến sĩ nhằm tôn vinh đạo học và hiền tài đất nước.",
        
        historicalEvents: [
            { year: "1070", event: "Vua Lý Thánh Tông cho xây dựng Văn Miếu thờ Chu Công, Khổng Tử." },
            { year: "1076", event: "Vua Lý Nhân Tông mở trường Quốc Tử Giám kề bên Văn Miếu – khởi đầu nền đại học quốc gia." },
            { year: "1253", event: "Vua Trần Thái Tông đổi Quốc Tử Giám thành Quốc học viện, mở rộng đón nhận con em bình dân ưu tú." },
            { year: "1484", event: "Vua Lê Thánh Tông bắt đầu cho dựng các tấm bia Tiến sĩ đầu tiên ghi danh các khoa thi từ năm 1442." },
            { year: "1805", event: "Tổng trấn Bắc Thành Nguyễn Văn Thành cho khởi công xây dựng Khuê Văn Các mang biểu tượng văn khí Thăng Long." },
            { year: "2010", event: "82 bia đá Tiến sĩ tại Văn Miếu được UNESCO ghi danh vào Ký ức Tư liệu Thế giới." }
        ],
        
        architecture: "Quần thể di tích được xây dựng theo trục Bắc - Nam đăng đối, chia thành 5 lớp không gian nối tiếp nhau qua các cổng truyền thống: Cổng Tam quan, Khuê Văn Các uy nghiêm hướng ra giếng Thiên Quang thanh tịnh; Vườn Bia Tiến sĩ với 82 tấm bia đặt trên lưng rùa đá xanh; Khu Đại Thành với Đại Bái Đường cổ kính; và Đền Khải Thánh (Khu Thái Học) - nơi tôn vinh Chu Văn An cùng các vị tiền bối sư biểu.",
        
        culturalValue: "Văn Miếu – Quốc Tử Giám là chứng tích lịch sử biểu tượng cho tinh thần hiếu học, trọng dụng nhân tài 'Hiền tài là nguyên khí quốc gia'. Nơi đây là cội nguồn của nền học thuật Nho giáo Việt Nam, lưu giữ những giá trị nhân văn cao quý về sự học và phẩm chất người trí thức.",
        
        visitingInfo: {
            openHours: "08:00 – 17:00 (Mở cửa tất cả các ngày trong tuần, kể cả Lễ, Tết)",
            ticketPrice: "Người lớn: 70.000 VNĐ | Học sinh, sinh viên (có thẻ): 35.000 VNĐ | Trẻ em dưới 15 tuổi & người khuyết tật nặng: Miễn phí",
            dressCode: "Trang phục lịch sự, kín đáo (áo có tay, quần/váy dài quá đầu gối). Không đội mũ nón trong khu vực nội điện thờ phụng.",
            amenities: "Thuyết minh tự động, quầy lưu niệm văn hóa, wifi miễn phí, gửi đồ, bãi đỗ xe đối diện phố Văn Miếu."
        },
        
        references: [
            "Trung tâm Hoạt động Văn hóa Khoa học Văn Miếu – Quốc Tử Giám (vanmieu.gov.vn)",
            "Cục Di sản Văn hóa – Bộ Văn hóa, Thể thao và Du lịch (disanvanhoa.gov.vn)",
            "Hồ sơ Di sản Tư liệu Thế giới: 82 Bia Tiến sĩ Văn Miếu – UNESCO (unesco.org)"
        ],
        
        narrationScript: `Chào mừng quý khách đến với Văn Miếu – Quốc Tử Giám, di tích quốc gia đặc biệt và là cái nôi của nền đại học đầu tiên tại Việt Nam.

Nơi đây lưu giữ hơn chín trăm năm lịch sử hiếu học và trọng dụng nhân tài của dân tộc. Vào mùa thu năm 1070, vua Lý Thánh Tông đã cho khởi dựng Văn Miếu để tôn vinh sự học và đạo Nho. Đến năm 1076, vua Lý Nhân Tông cho lập tiếp Quốc Tử Giám, mở ra trang sử giáo dục rực rỡ của đất nước.

Bước qua cổng Tam Quan cổ kính, quý khách sẽ chiêm ngưỡng Khuê Văn Các – một tuyệt tác kiến trúc gỗ với gác chuông biểu trưng cho chòm sao Khuê tỏa sáng văn khí đất Thăng Long. Phía trước là giếng Thiên Quang trong xanh như tấm gương soi rọi tâm hồn người học sĩ.

Đặc biệt, hai bên giếng là 82 tấm bia đá Tiến sĩ đặt trên lưng rùa đá uy nghiêm, được UNESCO vinh danh là Di sản Tư liệu Thế giới. Mỗi tấm bia không chỉ khắc ghi tên tuổi của hơn một nghìn ba trăm nhà trí thức xuất chúng, mà còn nhắc nhở muôn đời sau lời răn bất hủ: 'Hiền tài là nguyên khí của quốc gia'.

Mời quý khách cùng thong thả bước qua khu Đại Thành và nhà Thái Học, nơi thờ người thầy mẫu mực Chu Văn An, để cảm nhận trọn vẹn hào khí văn hiến ngàn năm giữa lòng thủ đô Hà Nội.`
    },
    {
        id: "hoang-thanh",
        slug: "hoang-thanh-thang-long",
        name: "Hoàng thành Thăng Long",
        subtitle: "Trung tâm quyền lực chính trị liên tục suốt 13 thế kỷ của các triều đại phong kiến Việt Nam",
        category: "Di sản Văn hóa Thế giới UNESCO",
        unescoStatus: "Được UNESCO công nhận là Di sản Văn hóa Thế giới năm 2010",
        province: "Hà Nội",
        region: "Miền Bắc",
        address: "19C Hoàng Diệu, Phường Điện Biên, Quận Ba Đình, Hà Nội",
        coordinates: [21.0345, 105.8407],
        thumbnail: "https://images.unsplash.com/photo-1590253232537-b18470691230?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1590253232537-b18470691230?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80"
        ],
        summary: "Hoàng thành Thăng Long là quần thể di tích lịch sử gắn liền với lịch sử kinh thành Thăng Long - Hà Nội bắt đầu từ thời kỳ tiền Thăng Long (thế kỷ VII) qua thời Đinh - Tiền Lê, phát triển mạnh mẽ dưới thời Lý, Trần, Lê và thành Hà Nội dưới triều Nguyễn.",
        
        history: "Năm 1010, sau khi dời đô từ Hoa Lư về Đại La và nhìn thấy rồng vàng bay lên, vua Lý Thái Tổ đổi tên thành Thăng Long và cho khởi công xây dựng Kinh thành. Trải qua các thời kỳ Lý, Trần, Lê, Mạc và Nguyễn, đây luôn là trung tâm quyền lực chính trị tối cao của nước Đại Việt suốt hơn nghìn năm lịch sử.",
        
        historicalEvents: [
            { year: "1010", event: "Vua Lý Thái Tổ ban Chiếu dời đô và cho xây dựng Hoàng thành Thăng Long." },
            { year: "1054", event: "Vua Lý Thánh Tông đổi quốc hiệu sang Đại Việt, mở rộng cung điện trong hoàng thành." },
            { year: "1428", event: "Lê Lợi lên ngôi Hoàng đế tại điện Kính Thiên sau chiến thắng quân Minh, định đô tại Thăng Long." },
            { year: "1805", event: "Triều Nguyễn xây dựng Cột Cờ Hà Nội (Kỳ Đài) sừng sững bên ngoài thành cổ." },
            { year: "2002", event: "Khai quật khảo cổ học quy mô lớn tại 18 Hoàng Diệu, phát lộ hàng triệu di vật của 13 thế kỷ." },
            { year: "2010", event: "UNESCO chính thức vinh danh Khu trung tâm Hoàng thành Thăng Long là Di sản Văn hóa Thế giới." }
        ],
        
        architecture: "Khu di tích nổi bật với Đoan Môn – cổng chính phía nam của Cấm thành xây bằng gạch vồ thời Lê; nền điện Kính Thiên với đôi rồng đá nguyên khối thời Lê sơ tuyệt mỹ; Hậu Lâu cổ kính; Bắc Môn với vết đạn pháo Pháp năm 1882; và khu khảo cổ học 18 Hoàng Diệu với các tầng văn hóa chồng xếp liên tục qua các thời kỳ lịch sử.",
        
        culturalValue: "Hoàng thành Thăng Long minh chứng cho sự giao thoa văn hóa Đông Á và Đông Nam Á, phản ánh quá trình dựng nước và giữ nước bền bỉ của dân tộc Việt Nam với bề dày lịch sử kéo dài hơn 13 thế kỷ không hề gián đoạn.",
        
        visitingInfo: {
            openHours: "08:00 – 17:00 các ngày trong tuần (Trừ thứ Hai đóng cửa bảo trì)",
            ticketPrice: "Người lớn: 70.000 VNĐ | Học sinh, sinh viên, người cao tuổi: 35.000 VNĐ | Trẻ em dưới 15 tuổi: Miễn phí",
            dressCode: "Trang phục lịch sự, trang nhã. Không mang vũ khí, chất cháy nổ và không dẫm đạp lên các hiện vật khảo cổ.",
            amenities: "Xe điện nội khu, tour đêm Giải mã Hoàng thành, thuyết minh viên, quầy giải khát, cửa hàng quà tặng di sản."
        },
        
        references: [
            "Trung tâm Bảo tồn Di sản Thăng Long – Hà Nội (hoangthanhthanglong.vn)",
            "Ủy ban Quốc gia UNESCO Việt Nam",
            "Cục Di sản Văn hóa – Bộ Văn hóa, Thể thao và Du lịch"
        ],
        
        narrationScript: `Chào mừng quý khách đang có mặt tại Hoàng thành Thăng Long – trái tim lịch sử của thủ đô ngàn năm văn hiến.

Hơn một nghìn năm trước, vào mùa thu năm 1010, vua Lý Thái Tổ đã ban Chiếu dời đô từ Hoa Lư về đây, đặt nền móng cho kinh đô Thăng Long trường tồn. Nơi quý khách đang đứng chính là trung tâm quyền lực chính trị liên tục suốt mười ba thế kỷ của các triều đại Lý, Trần, Lê, Mạc và Nguyễn.

Hãy phóng tầm mắt ngắm nhìn Đoan Môn sừng sững với ba tầng cổng cuốn vòm, nơi xưa kia chỉ dành cho Hoàng đế và các hoàng thân ngự giá. Đi sâu vào bên trong, quý khách sẽ bắt gặp thềm điện Kính Thiên với đôi rồng đá uốn lượn tuyệt mỹ thời Lê Sơ – một kiệt tác điêu khắc đá cổ của dân tộc.

Phía đối diện tại số 18 Hoàng Diệu, các nhà khảo cổ đã tìm thấy hàng vạn di vật quý giá minh chứng cho các tầng văn hóa đan xen từ thời Đại La, Đinh, Tiền Lê đến thời Nguyễn. 

Năm 2010, UNESCO đã công nhận Hoàng thành Thăng Long là Di sản Văn hóa Thế giới, khẳng định giá trị lịch sử vô giá và niềm tự hào của muôn triệu người con đất Việt.`
    },
    {
        id: "ho-guom",
        slug: "ho-guom-den-ngoc-son",
        name: "Hồ Gươm & Đền Ngọc Sơn",
        subtitle: "Trái tim lịch sử giữa lòng Thủ đô với huyền tích Trả Gươm thần thiêng liêng",
        category: "Di tích Lịch sử & Danh lam thắng cảnh Quốc gia đặc biệt",
        unescoStatus: "Xếp hạng Di tích Quốc gia đặc biệt năm 2013",
        province: "Hà Nội",
        region: "Miền Bắc",
        address: "Khu vực trung tâm Quận Hoàn Kiếm, Thành phố Hà Nội",
        coordinates: [21.0307, 105.8524],
        thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=80"
        ],
        summary: "Hồ Gươm (Hồ Hoàn Kiếm) cùng Đền Ngọc Sơn, Cầu Thê Húc, Tháp Bút, Đài Nghiên và Tháp Rùa là biểu tượng văn hóa tâm linh bất hủ của người Hà Nội, gắn liền với truyền thuyết vua Lê Lợi hoàn trả gươm báu Thuận Thiên cho Rùa Vàng.",
        
        history: "Trước thế kỷ XV, hồ có tên là hồ Lục Thủy bởi màu nước quanh năm xanh biếc. Vào thế kỷ XV, sau khi kháng chiến chống quân Minh thắng lợi, vua Lê Thái Tổ dạo thuyền trên hồ thì Rùa Vàng nổi lên đòi gươm thần, nhà vua trao gươm báu và đổi tên hồ thành hồ Hoàn Kiếm. Thế kỷ XIX, Đền Ngọc Sơn được xây dựng trên đảo Ngọc, phối thờ thần Văn Xương Đế Quân và Đức Thánh Trần Hưng Đạo.",
        
        historicalEvents: [
            { year: "1428", event: "Vua Lê Lợi đăng quang và hoàn trả gươm thần Thuận Thiên cho Kim Quy trên hồ." },
            { year: "1843", event: "Hội Hướng Thiện khởi dựng đền Ngọc Sơn trên đảo Ngọc." },
            { year: "1865", event: "Đại danh sĩ Phương Đình Nguyễn Văn Siêu trùng tu đền, xây Tháp Bút, Đài Nghiên và Cầu Thê Húc." },
            { year: "1886", event: "Tháp Rùa được xây dựng giữa hồ trên gò Rùa, hòa quyện với phong cảnh hồ Gươm." },
            { year: "2013", event: "Thủ tướng Chính phủ ký quyết định xếp hạng Hồ Hoàn Kiếm và Đền Ngọc Sơn là Di tích Quốc gia đặc biệt." }
        ],
        
        architecture: "Tổng thể di tích là bức tranh thủy mặc sống động gồm: Tháp Bút khắc ba chữ 'Tả Thanh Thiên' (Viết lên trời xanh); Đài Nghiên hình nghiên mực bằng đá; Cầu Thê Húc màu đỏ son hình con tôm cong cong dẫn vào Đền Ngọc Sơn; và Tháp Rùa bốn tầng rêu phong soi bóng giữa mặt nước biếc.",
        
        culturalValue: "Hồ Gươm là biểu tượng khát vọng hòa bình của dân tộc Việt Nam: cất gươm chiến trận khi đất nước thái bình để chăm lo văn hiến. Đây cũng là không gian sinh hoạt cộng đồng, giao lưu văn hóa nghệ thuật của người dân Thủ đô và du khách bốn phương.",
        
        visitingInfo: {
            openHours: "Khuôn viên hồ: Mở tự do 24/7. Đền Ngọc Sơn: Mở cửa 07:00 – 18:00 hàng ngày (Thứ 6 đến Chủ Nhật mở đến 22:00 cùng tuyến phố đi bộ)",
            ticketPrice: "Đi dạo quanh hồ: Miễn phí | Vé vào Đền Ngọc Sơn: 50.000 VNĐ/người lớn | Sinh viên: 25.000 VNĐ | Trẻ em dưới 15 tuổi: Miễn phí",
            dressCode: "Lịch sự khi vào Đền Ngọc Sơn. Giữ gìn vệ sinh chung, không bẻ cành bái hoa ven hồ.",
            amenities: "Không gian đi bộ cuối tuần, xe điện du lịch, quầy kem Tràng Tiền, ghế đá nghỉ ngơi quanh hồ."
        },
        
        references: [
            "Ban Quản lý Di tích Tháp Bút – Đền Ngọc Sơn (hoankiem.hanoi.gov.vn)",
            "Đại Việt Sử Ký Toàn Thư – Viện Khoa học Xã hội Việt Nam",
            "Cục Di sản Văn hóa (disanvanhoa.gov.vn)"
        ],
        
        narrationScript: `Kính chào quý khách! Quý khách đang đứng bên bờ Hồ Gươm, danh thắng thiêng liêng và là trái tim của Thủ đô Hà Nội.

Nước hồ quanh năm mang màu xanh lục thủy kỳ ảo. Gắn liền với nơi này là một truyền thuyết hào hùng: Sau khi lãnh đạo nghĩa quân Lam Sơn quét sạch giặc Minh xâm lược, vua Lê Thái Tổ du thuyền trên hồ, thần Kim Quy hiện lên xin lại gươm báu Thuận Thiên. Nhà vua rút gươm trao trả, từ đó hồ mang tên Hoàn Kiếm – biểu tượng cho tinh thần chuộng hòa bình sâu sắc của dân tộc ta.

Nhìn sang phía đông hồ, quý khách sẽ thấy Tháp Bút sừng sững viết ba chữ 'Tả Thanh Thiên' – nghĩa là viết lên trời xanh, kế bên là Đài Nghiên bằng đá. Chiếc cầu Thê Húc uốn cong màu đỏ thắm như dải lụa mềm dẫn lối vào Đền Ngọc Sơn cổ kính giữa đảo Ngọc.

Giữa mặt hồ phẳng lặng, Tháp Rùa bốn tầng trầm mặc soi bóng thời gian. Hãy hít thở bầu không khí trong lành, ngắm những rặng liễu rủ ven hồ và cảm nhận nhịp sống êm đềm nhưng ngập tràn thi ca của đất Tràng An.`
    },
    {
        id: "co-do-hue",
        slug: "quan-the-di-tich-co-do-hue",
        name: "Cố đô Huế – Đại Nội",
        subtitle: "Kinh đô cuối cùng của các triều đại phong kiến Việt Nam – Di sản Thế giới UNESCO",
        category: "Di sản Văn hóa Thế giới UNESCO",
        unescoStatus: "Di sản Văn hóa Thế giới đầu tiên của Việt Nam được UNESCO vinh danh năm 1993",
        province: "Thừa Thiên Huế",
        region: "Miền Trung",
        address: "Đường 23/8, Phường Thuận Hòa, Thành phố Huế, Tỉnh Thừa Thiên Huế",
        coordinates: [16.4698, 107.5786],
        thumbnail: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80"
        ],
        summary: "Quần thể di tích Cố đô Huế là trung tâm chính trị, văn hóa, quân sự của triều Nguyễn từ năm 1802 đến 1945. Nổi bật là Hoàng thành và Tử Cấm thành với hệ thống cung điện, lăng tẩm hoàng gia tráng lệ bên dòng sông Hương thơ mộng.",
        
        history: "Năm 1802, vua Gia Long thống nhất đất nước và chọn Huế làm kinh đô triều Nguyễn. Năm 1805, Kinh thành Huế được khởi công xây dựng kết hợp hài hòa giữa nguyên lý phong thủy phương Đông và kiến trúc phòng thủ kiểu Vauban phương Tây. Triều Nguyễn trải qua 13 đời vua với nhiều công trình kiến trúc cung đình quy mô đồ sộ và kho tàng Nhã nhạc cung đình đặc sắc.",
        
        historicalEvents: [
            { year: "1802", event: "Nguyễn Ánh lên ngôi lập ra triều Nguyễn, lấy niên hiệu Gia Long và định đô tại Huế." },
            { year: "1805", event: "Khởi công xây dựng Kinh thành Huế theo quy hoạch đồ sộ bậc nhất phương Nam." },
            { year: "1833", event: "Vua Minh Mạng hoàn thành việc xây dựng Ngọ Môn và Điện Thái Hòa tráng lệ." },
            { year: "1945", event: "Vua Bảo Đại thoái vị tại lầu Ngũ Phụng, trao ấn kiếm cho phái đoàn chính phủ Cách mạng lâm thời." },
            { year: "1993", event: "UNESCO vinh danh Quần thể Di tích Cố đô Huế là Di sản Văn hóa Thế giới đầu tiên của Việt Nam." },
            { year: "2003", event: "Nhã nhạc Cung đình Huế được UNESCO công nhận là Kiệt tác Di sản Phi vật thể của nhân loại." }
        ],
        
        architecture: "Đại Nội Huế gồm hai phần chính: Hoàng thành (nơi đặt các cơ quan triều đình) và Tử Cấm thành (nơi ở của vua và hoàng gia). Các công trình tiêu biểu gồm: Ngọ Môn lộng lẫy với lầu Ngũ Phụng; Điện Thái Hòa mái lợp ngói hoàng lưu ly dát rồng vàng; Thế Miếu thờ các vị vua Nguyễn; Cửu Đỉnh đúc bằng đồng tượng trưng cho sự vững bền của non sông; và hệ thống lăng tẩm hoàng gia tinh tế.",
        
        culturalValue: "Cố đô Huế là mẫu mực đỉnh cao của kiến trúc cung đình phong kiến Á Đông hòa quyện tuyệt đối với cảnh quan thiên nhiên. Nơi đây gìn giữ kho tàng đồ sộ về âm nhạc cung đình, mỹ thuật chạm khắc, nghi lễ hoàng gia và ẩm thực cung đình trứ danh.",
        
        visitingInfo: {
            openHours: "Mùa hè: 06:30 – 17:30 | Mùa đông: 07:00 – 17:00 hàng ngày",
            ticketPrice: "Vé tham quan Hoàng Cung (Đại Nội): 200.000 VNĐ/người lớn | Trẻ em (7-12 tuổi): 40.000 VNĐ | Combo các điểm lăng tẩm: 420.000 VNĐ - 530.000 VNĐ",
            dressCode: "Ăn mặc lịch thiệp, kín đáo khi vào các điện thờ (Thế Miếu, Triệu Miếu, Điện Thái Hòa).",
            amenities: "Thuê trang phục cung đình chụp ảnh, xe điện, biểu diễn Nhã nhạc Cung đình tại Nhà hát Duyệt Thị Đường, dịch vụ thuyết minh đa ngôn ngữ."
        },
        
        references: [
            "Trung tâm Bảo tồn Di tích Cố đô Huế (hueworldheritage.org.vn)",
            "Hồ sơ Di sản Thế giới – UNESCO (whc.unesco.org/en/list/678)",
            "Cục Di sản Văn hóa Việt Nam"
        ],
        
        narrationScript: `Chào mừng quý khách đến với Đại Nội Huế – trái tim của Cố đô Huế, di sản văn hóa thế giới đầu tiên của Việt Nam được UNESCO vinh danh năm 1993.

Trong suốt một trăm bốn mươi ba năm, từ năm 1802 đến năm 1945, mảnh đất bên bờ sông Hương này là nơi mười ba vị vua triều Nguyễn đã trị vì non sông gấm vóc.

Trước mắt quý khách là Ngọ Môn – cổng chính phía nam của Hoàng thành. Phía trên Ngọ Môn là lầu Ngũ Phụng với kết cấu gỗ lim tinh xảo và mái lợp ngói lưu ly óng ả. Đây chính là nơi từng diễn ra các lễ đăng quang, duyệt binh và là nơi vua Bảo Đại đọc Tuyên ngôn thoái vị năm 1945, chấm dứt thời kỳ phong kiến Việt Nam.

Bước qua cầu Trung Đạo bắc qua hồ Thái Dịch, quý khách sẽ tiến vào Điện Thái Hòa – nơi thiết triều tôn nghiêm với ngai vàng dát vàng óng ánh đặt uy nghiêm giữa 80 cột gỗ lim chạm trổ rồng mây.

Bên cạnh kiến trúc cung điện tráng lệ, Huế còn tự hào với Cửu Đỉnh đúc bằng đồng nguyên khối và di sản Nhã nhạc Cung đình vang vọng hồn cốt dân tộc. Xin mời quý khách cùng lắng lòng để hòa mình vào vẻ đẹp cổ kính, trầm mặc của kinh đô xưa.`
    },
    {
        id: "hoi-an",
        slug: "pho-co-hoi-an",
        name: "Phố cổ Hội An",
        subtitle: "Đô thị cổ thương cảng quốc tế thế kỷ 16-17 được bảo tồn gần như nguyên vẹn",
        category: "Di sản Văn hóa Thế giới UNESCO",
        unescoStatus: "Được UNESCO công nhận là Di sản Văn hóa Thế giới năm 1999",
        province: "Quảng Nam",
        region: "Miền Trung",
        address: "Thành phố Hội An, Tỉnh Quảng Nam (Bên bờ hạ lưu sông Thu Bồn)",
        coordinates: [15.8801, 108.3380],
        thumbnail: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1508873696983-2df5703bc398?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80"
        ],
        summary: "Đô thị cổ Hội An là một điển hình đặc biệt về cảng thị truyền thống châu Á thế kỷ 16 – 17 được bảo tồn nguyên vẹn. Với những ngôi nhà cổ tường vàng mái ngói âm dương, giàn hoa giấy rực rỡ và những chiếc lồng đèn lung linh bên sông Hoài.",
        
        history: "Vào thế kỷ 16 và 17, dưới sự khuyến khích ngoại thương của các chúa Nguyễn Đàng Trong, Hội An nhanh chóng trở thành một trong những thương cảng quốc tế sầm uất nhất Đông Nam Á, nơi hội tụ của thương nhân Nhật Bản, Trung Hoa, Hà Lan, Bồ Đào Nha. Nhờ địa thế sông Thu Bồn ít bị tàn phá bởi chiến tranh, cấu trúc đô thị cổ gần như giữ được trọn vẹn diện mạo ban đầu cho đến ngày nay.",
        
        historicalEvents: [
            { year: "1590", event: "Thương nhân Nhật Bản chung tay xây dựng Chùa Cầu (Lai Viễn Kiều) nối liền hai bờ người Nhật và người Hoa." },
            { year: "1630", event: "Thời kỳ cực thịnh của thương cảng Faifo (Hội An) trên bản đồ hàng hải quốc tế thế giới." },
            { year: "1985", event: "Các nhà khoa học Việt Nam và quốc tế tổ chức hội thảo đầu tiên đánh giá giá trị đặc biệt của phố cổ." },
            { year: "1999", event: "UNESCO chính thức ghi danh Đô thị cổ Hội An vào Danh mục Di sản Văn hóa Thế giới." },
            { year: "2024", event: "Hoàn thành dự án tu bổ toàn diện Chùa Cầu – biểu tượng trường tồn của tình hữu nghị Việt – Nhật." }
        ],
        
        architecture: "Kiến trúc Hội An nổi bật với kiểu nhà phố hình ống lợp ngói âm dương, khung gỗ lim chịu lực, tường sơn vàng hoàng yến đặc trưng. Công trình tiêu biểu gồm: Chùa Cầu bắc qua lạch nước nhỏ với mái ngói cổ kính; các hội quán Phúc Kiến, Triều Châu, Quảng Đông lộng lẫy chạm khắc rồng phượng; và các nhà cổ Tân Ký, Phùng Hưng trường tồn qua hàng trăm mùa lũ.",
        
        culturalValue: "Hội An là bảo tàng sống về kiến trúc và lối sống đô thị. Di sản nơi đây không chỉ là gạch ngói mà còn là nét văn hóa ẩm thực đậm đà (Cao lầu, Mì Quảng), nghề làm lồng đèn, lễ hội Đêm rằm phố cổ và lối sống mộc mạc, hào sảng, hiếu khách của người dân phố Hội.",
        
        visitingInfo: {
            openHours: "Tự do dạo phố 24/7. Các điểm di tích có thu vé: 07:30 – 21:30 hàng ngày. Phố đi bộ cấm xe máy từ 09:00 - 11:00 và 15:00 - 21:30.",
            ticketPrice: "Khách nội địa: 80.000 VNĐ/vé (tham quan 3 điểm di tích tùy chọn) | Khách quốc tế: 120.000 VNĐ/vé (tham quan 5 điểm di tích)",
            dressCode: "Lịch sự khi viếng thăm chùa, hội quán cổ. Khuyên dùng giày bệt hoặc dép để thuận tiện đi bộ dọc các con phố lát đá.",
            amenities: "Đi thuyền thả hoa đăng trên sông Hoài, may đo áo dài lấy ngay, lớp học làm lồng đèn, xe đạp công cộng."
        },
        
        references: [
            "Trung tâm Quản lý Bảo tồn Di sản Văn hóa Hội An (hoianheritage.net)",
            "Ủy ban Nhân dân Thành phố Hội An (quangnam.gov.vn)",
            "UNESCO World Heritage Centre – Historic Town of Hoi An"
        ],
        
        narrationScript: `Chào mừng quý khách đến với Đô thị cổ Hội An, di sản văn hóa thế giới được mệnh danh là 'bảo tàng sống' bên dòng sông Hoài thơ mộng.

Hơn bốn trăm năm trước, nơi đây từng là một trong những thương cảng sầm uất nhất châu Á với tên gọi Faifo. Tàu buôn từ Nhật Bản, Trung Hoa, Bồ Đào Nha, Hà Lan vượt biển cập bến, tạo nên sự hòa quyện văn hóa Đông – Tây vô cùng độc đáo.

Biểu tượng bất hủ của Hội An chính là Chùa Cầu – cây cầu ngói bằng gỗ cổ kính bắc qua dòng lạch nhỏ do thương nhân Nhật Bản khởi dựng từ cuối thế kỷ 16. Đầu cầu có tượng hai chú chó và hai chú khỉ bằng gỗ canh giữ bình an cho cư dân.

Khi tản bộ qua những con đường rực sắc hoa giấy, quý khách sẽ say đắm trước những bức tường quét vôi vàng đặc trưng, những nếp nhà lợp ngói âm dương rêu phong như nhà cổ Tấn Ký, Phùng Hưng, hay Hội quán Phúc Kiến tráng lệ.

Và khi hoàng hôn buông xuống, hàng ngàn chiếc đèn lồng đủ sắc màu thắp sáng lung linh, phản chiếu trên mặt nước sông Hoài bồng bềnh hoa đăng. Hãy thả lỏng tâm hồn để cảm nhận trọn vẹn nhịp sống bình yên của phố Hội.`
    },
    {
        id: "cu-chi",
        slug: "dia-dao-cu-chi",
        name: "Địa đạo Củ Chi",
        subtitle: "Kỳ quan nghệ thuật quân sự độc nhất vô nhị trong lòng đất – Đất thép thành đồng",
        category: "Di tích Lịch sử Quốc gia đặc biệt",
        unescoStatus: "Đang trong tiến trình đệ trình hồ sơ Di sản Thế giới UNESCO",
        province: "TP. Hồ Chí Minh",
        region: "Miền Nam",
        address: "Đường tỉnh lộ 15, Ấp Phú Hiệp, Xã Phú Mỹ Hưng, Huyện Củ Chi, TP. Hồ Chí Minh",
        coordinates: [11.1405, 106.4632],
        thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1508873696983-2df5703bc398?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80"
        ],
        summary: "Địa đạo Củ Chi là một hệ thống phòng thủ ngầm sâu trong lòng đất dài hơn 250 km, gồm 3 tầng liên hoàn được quân và dân Củ Chi đào hoàn toàn bằng tay và công cụ thô sơ trong thời kỳ kháng chiến cứu nước.",
        
        history: "Hệ thống địa đạo bắt đầu được đào từ năm 1946 trong thời kỳ kháng chiến chống Pháp tại hai xã Tân Phú Trung và Phước Vĩnh An. Bước sang kháng chiến chống Mỹ, quân dân Củ Chi đã phát triển hệ thống này thành một mạng lưới mê cung ngầm khổng lồ, nối liền các ấp xã, trở thành căn cứ địa cách mạng kiên cường, nơi quân đội và nhân dân sống, chiến đấu bất chấp mưa bom bão đạn.",
        
        historicalEvents: [
            { year: "1946", event: "Bắt đầu đào những đoạn hầm hào ngầm sơ khai đầu tiên để cất giấu tài liệu và cán bộ." },
            { year: "1960", event: "Địa đạo được mở rộng quy mô lớn, kết nối liên hoàn thành hệ thống phòng thủ 'làng ngầm'." },
            { year: "1966", event: "Quân dân Củ Chi bẻ gãy chiến dịch Crimp quy mô 8.000 lính của quân đối phương." },
            { year: "1967", event: "Chiến dịch Cedar Falls dội hàng ngàn tấn bom đạn nhưng vẫn không thể phá vỡ hệ thống địa đạo kiên cố." },
            { year: "1979", event: "Bộ Văn hóa - Thông tin xếp hạng Địa đạo Củ Chi là Di tích Lịch sử Quốc gia." },
            { year: "2015", event: "Thủ tướng Chính phủ công nhận Địa đạo Củ Chi là Di tích Quốc gia đặc biệt." }
        ],
        
        architecture: "Địa đạo gồm 3 tầng ngầm sâu từ 3m đến 12m so với mặt đất. Bên trong lòng đất là cả một thành phố thu nhỏ gồm: phòng họp chỉ huy, bệnh xá dã chiến, xưởng chế tạo vũ khí, kho dự trữ lương thực, phòng học và đặc biệt là hệ thống Bếp Hoàng Cầm giấu khói tài tình cùng các lỗ thông hơi ngụy trang hình tổ mối.",
        
        culturalValue: "Địa đạo Củ Chi thể hiện đỉnh cao ý chí kiên cường, lòng dũng cảm phi thường và trí tuệ sáng tạo của nhân dân Việt Nam. Nơi đây được bạn bè quốc tế ca ngợi là một trong những kỳ quan ngầm kỳ diệu nhất thế giới.",
        
        visitingInfo: {
            openHours: "07:30 – 17:00 tất cả các ngày trong tuần (Khu di tích Bến Dược và Bến Đình)",
            ticketPrice: "Khách Việt Nam: 35.000 VNĐ/người | Khách quốc tế: 130.000 VNĐ/người (Bao gồm phí thuyết minh hướng dẫn viên ngầm)",
            dressCode: "Trang phục năng động, thoáng mát, mang giày thể thao. Khách có tiền sử huyết áp cao hoặc sợ không gian hẹp nên cân nhắc khi chui hầm sâu.",
            amenities: "Thưởng thức khoai mì chấm muối mè (đặc sản địa đạo), khu bắn súng thể thao quốc phòng, chiếu phim tư liệu lịch sử."
        },
        
        references: [
            "Khu di tích Lịch sử Địa đạo Củ Chi (cuchitunnel.org.vn)",
            "Sở Văn hóa và Thể thao Thành phố Hồ Chí Minh",
            "Cục Di sản Văn hóa – Bộ VHTTDL (disanvanhoa.gov.vn)"
        ],
        
        narrationScript: `Chào mừng quý khách đến với Địa đạo Củ Chi – mảnh đất huyền thoại được phong tặng danh hiệu cao quý 'Đất thép thành đồng'.

Trong thời kỳ kháng chiến khốc liệt, quân và dân Củ Chi đã làm nên một kỳ tích quân sự có một không hai trên thế giới: Dùng những chiếc cuốc và chiếc xẻng thô sơ, đào hơn 250 cây số đường hầm đan xen chằng chịt sâu trong lòng đất bazan.

Hệ thống địa đạo được chia làm ba tầng liên hoàn: Tầng một cách mặt đất 3 mét chịu được đạn pháo; tầng hai sâu 6 mét chống được bom hạng nặng; và tầng ba sâu đến 12 mét hoàn toàn an toàn trước bom khoan.

Dưới lòng đất tối tăm, các chiến sĩ và đồng bào đã biến nơi đây thành một căn cứ kháng chiến hoàn chỉnh với phòng họp, phòng mổ cứu thương, trường học, kho quân nhu và bếp Hoàng Cầm huyền thoại có khả năng làm tản khói bay là là trên mặt đất để máy bay địch không thể phát hiện.

Trải nghiệm cúi mình chui qua những khúc hầm hẹp, quý khách sẽ càng thêm khâm phục ý chí sắt đá, lòng yêu nước nồng nàn và tinh thần bất khuất của dân tộc Việt Nam anh hùng.`
    },
    {
        id: "dinh-doc-lap",
        slug: "dinh-doc-lap-thong-nhat",
        name: "Dinh Độc Lập",
        subtitle: "Di tích lịch sử chứng kiến thời khắc lịch sử ngày 30/4/1975 thống nhất non sông",
        category: "Di tích Lịch sử Quốc gia đặc biệt",
        unescoStatus: "Xếp hạng Di tích Quốc gia đặc biệt năm 2009",
        province: "TP. Hồ Chí Minh",
        region: "Miền Nam",
        address: "135 Nam Kỳ Khởi Nghĩa, Phường Bến Thành, Quận 1, TP. Hồ Chí Minh",
        coordinates: [10.7769, 106.6953],
        thumbnail: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80"
        ],
        summary: "Dinh Độc Lập (nay còn gọi là Hội trường Thống Nhất) là công trình kiến trúc hiện đại tiêu biểu kết hợp triết lý phương Đông của kiến trúc sư Ngô Viết Thụ. Nơi đây đánh dấu mốc son chói lọi kết thúc chiến tranh giải phóng miền Nam, thống nhất đất nước.",
        
        history: "Năm 1868, thực dân Pháp khởi công xây dựng Dinh Norodom. Sau năm 1954, công trình được đổi tên thành Dinh Độc Lập. Năm 1962, sau khi dinh cũ bị ném bom hư hại, chính quyền đã cho khởi công xây dựng lại theo đồ án thiết kế của kiến trúc sư tài danh Ngô Viết Thụ (người từng đoạt Giải khôi nguyên La Mã danh giá) và khánh thành vào năm 1966.",
        
        historicalEvents: [
            { year: "1868", event: "Khởi công xây Dinh Thống đốc Nam Kỳ (Dinh Norodom) thời kỳ Pháp thuộc." },
            { year: "1962", event: "Bắt đầu xây dựng lại Dinh Độc Lập theo thiết kế hiện đại của KTS Ngô Viết Thụ." },
            { year: "1966", event: "Khánh thành Dinh Độc Lập với quy mô hơn 100 phòng chức năng hiện đại." },
            { year: "1975", event: "Trưa ngày 30/4/1975, xe tăng số 390 và 843 húc đổ cổng chính, cờ cách mạng tung bay trên nóc dinh, non sông thu về một mối." },
            { year: "2009", event: "Chính phủ xếp hạng Dinh Độc Lập là Di tích Quốc gia đặc biệt đầu tiên của TP. Hồ Chí Minh." }
        ],
        
        architecture: "Kiến trúc dinh mô phỏng các chữ Hán mang ý nghĩa cát tường: mặt bằng tổng thể mang hình chữ CÁT (may mắn), tiền diện hình chữ KHẨU (giáo dục lời nói), cột rèm hoa đá hình chữ TRÚC (thanh cao kiên định). Dinh gồm 3 tầng chính, 2 gác lửng, tầng thượng và tầng hầm kiên cố chịu được bom pháo hạng nặng với trung tâm tác chiến hiện đại.",
        
        culturalValue: "Dinh Độc Lập là biểu tượng của tinh thần hòa giải, hòa hợp dân tộc và niềm kiêu hãnh chiến thắng. Công trình cũng là đỉnh cao của kiến trúc hiện đại nhiệt đới hóa thế kỷ 20 tại Việt Nam.",
        
        visitingInfo: {
            openHours: "Sáng: 08:00 – 11:30 | Chiều: 13:00 – 16:30 hàng ngày",
            ticketPrice: "Tham quan Tòa nhà chính: 40.000 VNĐ/người lớn | Sinh viên: 20.000 VNĐ | Trẻ em: 10.000 VNĐ | Combo tòa nhà và Nhà trưng bày: 65.000 VNĐ",
            dressCode: "Trang phục lịch sự, chỉnh tề. Không mang hành lý cồng kềnh, chất dễ cháy vào bên trong dinh.",
            amenities: "Vườn cây cổ thụ xanh mát, xe điện ngắm cảnh, phòng chiếu phim lịch sử, quán cà phê trong khuôn viên."
        },
        
        references: [
            "Hội trường Thống Nhất – Ban Quản lý Di tích Dinh Độc Lập (dinhdoclap.gov.vn)",
            "Bảo tàng Lịch sử Quốc gia",
            "Cục Di sản Văn hóa Việt Nam"
        ],
        
        narrationScript: `Kính chào quý khách đang hiện diện trước Dinh Độc Lập – biểu tượng lịch sử kiêu hùng giữa trung tâm Thành phố Hồ Chí Minh.

Được kiến trúc sư tài ba Ngô Viết Thụ thiết kế, tòa dinh thự là sự kết tinh tài tình giữa kiến trúc hiện đại phương Tây và triết lý phong thủy phương Đông. Nhìn từ trên cao, toàn bộ mặt bằng dinh tạo thành chữ 'Cát' – tượng trưng cho sự tốt lành và may mắn cho quốc gia.

Nơi đây lưu giữ hơn một trăm căn phòng khang trang với các chức năng khánh tiết, hội đàm ngoại giao, phòng làm việc của Tổng thống, cùng hệ thống hầm ngầm tác chiến kiên cố dưới lòng đất.

Vào lúc 11 giờ 30 phút ngày 30 tháng 4 năm 1975 lịch sử, hai chiếc xe tăng mang số hiệu 843 và 390 của Quân Giải phóng đã húc đổ cánh cổng sắt uy nghiêm này. Lá cờ Mặt trận Dân tộc Giải phóng miền Nam Việt Nam kiêu hãnh tung bay trên nóc Dinh, khép lại ba mươi năm chiến tranh gian khổ và mở ra kỷ nguyên hòa bình, độc lập trọn vẹn cho Tổ quốc.

Mời quý khách cùng bước vào bên trong để tận mắt chiêm ngưỡng những chứng tích lịch sử vô giá của dân tộc.`
    },
    {
        id: "trang-an",
        slug: "quan-the-danh-thang-trang-an",
        name: "Quần thể danh thắng Tràng An",
        subtitle: "Di sản thế giới kép đầu tiên và duy nhất tại Đông Nam Á về cả Văn hóa và Thiên nhiên",
        category: "Di sản Thế giới Hỗn hợp UNESCO",
        unescoStatus: "Được UNESCO công nhận là Di sản Văn hóa và Thiên nhiên Thế giới năm 2014",
        province: "Ninh Bình",
        region: "Miền Bắc",
        address: "Huyện Hoa Lư, Gia Viễn và Thành phố Ninh Bình, Tỉnh Ninh Bình",
        coordinates: [20.2506, 105.9048],
        thumbnail: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=80"
        ],
        summary: "Tràng An là một cảnh quan karst nhiệt đới kỳ vĩ với những tháp đá vôi dựng đứng soi bóng xuống dòng sông xanh ngắt uốn lượn qua hàng chục hang động huyền ảo, gắn liền với kinh đô Hoa Lư ngàn năm lịch sử của triều Đinh, Tiền Lê.",
        
        history: "Năm 968, sau khi dẹp loạn 12 sứ quân, Đinh Bộ Lĩnh lên ngôi Hoàng đế (Đinh Tiên Hoàng) và chọn Hoa Lư làm kinh đô Đại Cồ Việt. Với địa thế non nước trùng điệp hiểm trở, Tràng An trở thành tuyến phòng thủ quân sự tự nhiên vững chãi, gắn liền với trang sử mở nền độc lập của ba triều đại Đinh, Tiền Lê và thời kỳ đầu nhà Lý.",
        
        historicalEvents: [
            { year: "968", event: "Đinh Bộ Lĩnh định đô tại Hoa Lư, đặt nền tảng căn cứ quân sự Tràng An." },
            { year: "981", event: "Lê Hoàn chiến thắng quân Tống xâm lược lần thứ nhất, củng cố kinh đô Hoa Lư." },
            { year: "1010", event: "Lý Thái Tổ dời đô từ Hoa Lư về Thăng Long, Tràng An trở thành Cố đô linh thiêng." },
            { year: "2014", event: "UNESCO vinh danh Tràng An là Di sản Thế giới hỗn hợp (Văn hóa và Thiên nhiên) đầu tiên của Đông Nam Á." }
        ],
        
        architecture: "Cảnh quan Tràng An là sự hòa quyện tuyệt vời giữa các ngọn núi đá vôi tháp karst nguyên sơ, hệ thống sông suối ngầm nối các thung lũng nước ngập quanh năm, đền Trần linh từ thờ thần Quý Minh, đền Suối Tiên và Hang Ba Giọt, Hang Sáng, Hang Tối lung linh thạch nhũ.",
        
        culturalValue: "Tràng An lưu giữ các bằng chứng khảo cổ học về sự thích ứng của con người tiền sử với những biến đổi môi trường và khí hậu suốt hơn 30.000 năm, đồng thời là trung tâm văn hóa Phật giáo và tâm linh sâu sắc của dân tộc.",
        
        visitingInfo: {
            openHours: "07:00 – 17:00 hàng ngày (kể cả Lễ, Tết)",
            ticketPrice: "Vé thuyền tham quan: 250.000 VNĐ/người lớn (Tuyến 1, Tuyến 2 hoặc Tuyến 3) | Trẻ em 1m - 1.3m: 120.000 VNĐ | Dưới 1m: Miễn phí",
            dressCode: "Trang phục thoải mái, mang nón mũ che nắng, áo phao bắt buộc khi ngồi thuyền gỗ suốt hành trình.",
            amenities: "Bến thuyền hiện đại, bãi đỗ xe lớn, nhà hàng ẩm thực dê núi Ninh Bình, dịch vụ chụp ảnh lưu niệm."
        },
        
        references: [
            "Ban Quản lý Quần thể Danh thắng Tràng An (trangan.vn)",
            "Sở Du lịch Tỉnh Ninh Bình",
            "Hồ sơ Di sản Thế giới UNESCO – Trang An Landscape Complex"
        ],
        
        narrationScript: `Chào mừng quý khách đến với Quần thể danh thắng Tràng An – di sản thế giới kép đầu tiên và duy nhất tại Đông Nam Á được UNESCO công nhận.

Ngồi trên những chiếc thuyền nan mộc mạc, quý khách sẽ được lướt nhẹ trên dòng sông xanh biếc như ngọc bích, len lỏi qua những vách núi đá vôi kỳ vĩ dựng đứng giữa trời mây. Nơi đây từng là tuyến phòng thủ quân sự tự nhiên hiểm yếu của kinh đô Hoa Lư thế kỷ thứ mười dưới thời vua Đinh Tiên Hoàng và vua Lê Đại Hành.

Tràng An có hàng chục hang động tự nhiên xuyên thủy tuyệt đẹp như Hang Tối, Hang Sáng, Hang Nấu Rượu, với những nhũ đá lấp lánh như dát ngọc buông rủ từ trần hang.

Giữa non xanh nước biếc, quý khách sẽ ghé thăm các ngôi đền cổ kính như Đền Trần, Phủ Khống để thắp nén hương tưởng nhớ các bậc tiền nhân đã có công dựng cõi sơn hà. Hãy lắng nghe tiếng mái chèo khua nước êm đềm và cảm nhận vẻ đẹp thoát tục của chốn 'Hạ Long trên cạn'.`
    },
    {
        id: "my-son",
        slug: "thanh-dia-my-son",
        name: "Thánh địa Mỹ Sơn",
        subtitle: "Quần thể đền tháp Chăm Pa huyền bí – Đỉnh cao nghệ thuật kiến trúc Ấn Độ giáo",
        category: "Di sản Văn hóa Thế giới UNESCO",
        unescoStatus: "Được UNESCO công nhận là Di sản Văn hóa Thế giới năm 1999",
        province: "Quảng Nam",
        region: "Miền Trung",
        address: "Xã Duy Phú, Huyện Duy Xuyên, Tỉnh Quảng Nam",
        coordinates: [15.7649, 108.1246],
        thumbnail: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80"
        ],
        summary: "Thánh địa Mỹ Sơn nằm lọt thỏm giữa thung lũng núi Chúa hùng vĩ, là trung tâm tôn giáo và tín ngưỡng linh thiêng của vương quốc cổ Chăm Pa từ thế kỷ IV đến thế kỷ XIII, lưu giữ hơn 70 công trình đền tháp bằng gạch nung bí ẩn.",
        
        history: "Mỹ Sơn được xây dựng từ cuối thế kỷ IV dưới thời vua Bhadravarman I để thờ thần Siva – vị thần tối cao của Ấn Độ giáo bảo trợ cho vương triều. Suốt gần 10 thế kỷ, các triều vua Chăm Pa liên tục xây cất thêm các đền tháp nguy nga để cúng tế thần linh và an táng tro cốt hoàng gia. Năm 1898, học giả người Pháp M. C. Paris đã phát hiện lại quần thể di tích bí ẩn này giữa rừng già.",
        
        historicalEvents: [
            { year: "Thế kỷ IV", event: "Vua Bhadravarman I cho dựng ngôi đền gỗ đầu tiên thờ thần Siva." },
            { year: "Thế kỷ VII", event: "Bắt đầu thời kỳ xây dựng hàng loạt đền tháp gạch nung rực rỡ dưới thời vua Sambhuvarman." },
            { year: "1898", event: "Nhà khảo cổ học Pháp phát hiện lại Mỹ Sơn bị lãng quên trong rừng nguyên sinh." },
            { year: "1999", event: "UNESCO công nhận Khu đền tháp Mỹ Sơn là Di sản Văn hóa Thế giới." }
        ],
        
        architecture: "Các ngôi tháp Chăm Pa được xây dựng bằng gạch nung đỏ thắm, gắn kết liền mạch mà không hề lộ dấu vữa vôi – một bí ẩn công nghệ xây dựng đỉnh cao mà các nhà khoa học vẫn đang giải mã. Thân tháp được chạm khắc tinh xảo các hình tượng nữ thần Apsara múa lượn, thần hộ pháp Dvarapala và hoa văn dây leo sống động.",
        
        culturalValue: "Mỹ Sơn là minh chứng lịch sử duy nhất về một nền văn minh đã biến mất ở Đông Nam Á, phản ánh sự giao thoa rực rỡ giữa văn hóa bản địa Chăm Pa và triết học tôn giáo Ấn Độ cổ đại.",
        
        visitingInfo: {
            openHours: "06:30 – 17:30 tất cả các ngày trong năm",
            ticketPrice: "Khách nội địa: 100.000 VNĐ/vé | Khách quốc tế: 150.000 VNĐ/vé (Bao gồm xe điện trung chuyển và xem biểu diễn múa Chăm)",
            dressCode: "Trang phục lịch sự, kín đáo (áo có tay, quần dài qua đầu gối) khi bước vào các cụm tháp thiêng.",
            amenities: "Xe điện đưa đón từ cổng vào thung lũng, biểu diễn múa Shiva và kèn Saranai truyền thống, bảo tàng trưng bày hiện vật điêu khắc Chăm."
        },
        
        references: [
            "Ban Quản lý Di sản Văn hóa Mỹ Sơn (mysonsanctuary.com.vn)",
            "Viện Viễn Đông Bác Cổ (EFEO)",
            "UNESCO World Heritage Centre – My Son Sanctuary"
        ],
        
        narrationScript: `Chào mừng quý khách đang đặt chân đến Thánh địa Mỹ Sơn – thung lũng linh thiêng giữa lòng núi rừng Quảng Nam hùng vĩ.

Trải qua gần một nghìn năm, từ thế kỷ thứ tư đến thế kỷ thứ mười ba, nơi đây là trung tâm tín ngưỡng hoàng gia của vương quốc Chăm Pa cổ kính, nơi các bậc đế vương đến hành lễ dâng cúng thần Siva – đấng sáng tạo và hủy diệt trong Ấn Độ giáo.

Điểm kỳ diệu bậc nhất tại Mỹ Sơn chính là kỹ thuật xây dựng những ngọn tháp gạch đỏ: Những viên gạch nung được kết dính khít khao đến mức một mũi dao cũng không thể lách qua, không hề nhìn thấy bất kỳ dấu vết của vữa hay chất kết dính thông thường. Hàng trăm năm dãi dầu sương gió, màu gạch vẫn đỏ au rực rỡ.

Trên vách tháp, quý khách sẽ say đắm trước những bức phù điêu vũ nữ Apsara với đường cong uyển chuyển, đôi bàn tay mềm mại như múa và nụ cười thần bí vượt thời gian.

Xin mời quý khách cùng lắng nghe điệu kèn Saranai và tiếng trống Paranưng vang vọng giữa thung lũng thiêng, cảm nhận chiều sâu huyền hoặc của một nền văn minh rực rỡ trong dòng chảy lịch sử Việt Nam.`
    },
    {
        id: "ha-long",
        slug: "vinh-ha-long",
        name: "Vịnh Hạ Long",
        subtitle: "Kỳ quan Thiên nhiên Thế giới với hàng nghìn hòn đảo đá vôi kỳ vĩ và truyền thuyết Rồng mẹ giáng trần",
        category: "Di sản Thiên nhiên Thế giới UNESCO & Kỳ quan Thiên nhiên Mới",
        unescoStatus: "Được UNESCO công nhận 2 lần vào năm 1994 (Cảnh quan) và 2000 (Địa chất – Địa mạo)",
        province: "Quảng Ninh",
        region: "Miền Bắc",
        address: "Thành phố Hạ Long, Tỉnh Quảng Ninh",
        coordinates: [20.9101, 107.1839],
        thumbnail: "https://images.unsplash.com/photo-1508873696983-2df5703bc398?auto=format&fit=crop&w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1508873696983-2df5703bc398?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=1200&q=80"
        ],
        summary: "Vịnh Hạ Long là một kiệt tác thiên nhiên vô song với gần 2.000 hòn đảo đá vôi muôn hình vạn trạng nhô lên từ làn nước biển xanh ngọc lục bảo. Nơi đây gắn liền với truyền thuyết đàn rồng thần đáp xuống phun châu nhả ngọc chặn giặc ngoại xâm bảo vệ bờ cõi nước Việt.",
        
        history: "Theo truyền thuyết dân gian, khi người Việt mới lập nước bị giặc ngoại xâm phương Bắc tràn vào theo đường biển, Ngọc Hoàng sai Rồng Mẹ mang theo đàn Rồng Con giáng trần giúp đánh giặc. Rồng phun vô số châu ngọc, thoắt biến thành hàng ngàn đảo đá dựng lên thành lũy vững chãi làm đắm thuyền giặc. Nơi Rồng Mẹ đáp xuống gọi là Hạ Long, nơi Rồng Con đáp xuống gọi là Bái Tử Long.",
        
        historicalEvents: [
            { year: "1288", event: "Trận Bạch Đằng lừng lẫy của Hưng Đạo Đại Vương Trần Quốc Tuấn gắn liền với sông nước Hạ Long." },
            { year: "1962", event: "Bộ Văn hóa - Thông tin xếp hạng Vịnh Hạ Long là Di tích Danh thắng cấp Quốc gia." },
            { year: "1994", event: "UNESCO vinh danh Vịnh Hạ Long là Di sản Thiên nhiên Thế giới về giá trị thẩm mỹ cảnh quan." },
            { year: "2000", event: "UNESCO vinh danh lần thứ hai về giá trị địa chất – địa mạo học toàn cầu." },
            { year: "2011", event: "Được tổ chức New7Wonders bầu chọn là 1 trong 7 Kỳ quan Thiên nhiên Mới của Thế giới." }
        ],
        
        architecture: "Hạ Long là sự kiến tạo kỳ vĩ của thiên nhiên suốt hơn 500 triệu năm. Các hòn đảo mang hình thù sống động: Hòn Trống Mái (biểu tượng du lịch Việt Nam), Hòn Đỉnh Hương (in trên tờ tiền 200.000 đồng), Hòn Con Cóc; cùng hệ thống hang động tráng lệ như Hang Sửng Sốt, Động Thiên Cung, Hang Đầu Gỗ.",
        
        culturalValue: "Vịnh Hạ Long không chỉ là bảo tàng địa chất sống động của trái đất mà còn là cái nôi của các nền văn hóa tiền sử cổ đại như Soi Nhụ, Cái Bèo, Hạ Long, thể hiện sự gắn bó ngàn đời giữa con người Việt Nam và biển cả quê hương.",
        
        visitingInfo: {
            openHours: "Cảng tàu khách quốc tế Tuần Châu & Hạ Long: Mở cửa đón khách từ 06:30 – 18:30 hàng ngày",
            ticketPrice: "Vé thắng cảnh: 250.000 VNĐ – 290.000 VNĐ/tuyến (chưa bao gồm vé tàu du thuyền)",
            dressCode: "Trang phục du lịch biển thoải mái, kính mát, kem chống nắng và mang giày đế mềm chống trơn trượt khi tham quan hang động.",
            amenities: "Du thuyền nghỉ đêm cao cấp, chèo thuyền kayak, thủy phi cơ ngắm cảnh từ trên cao, bơi lội tại bãi biển Ti Tốp."
        },
        
        references: [
            "Ban Quản lý Vịnh Hạ Long (halongbay.com.vn)",
            "Sở Du lịch Tỉnh Quảng Ninh",
            "UNESCO World Heritage Centre – Ha Long Bay"
        ],
        
        narrationScript: `Chào mừng quý khách đến với Vịnh Hạ Long – kỳ quan thiên nhiên thế giới hai lần được UNESCO vinh danh và là niềm tự hào rạng ngời của đất nước Việt Nam.

Trước mắt quý khách là một bức tranh thủy mặc khổng lồ với gần hai nghìn hòn đảo đá vôi nhấp nhô trên mặt biển biếc xanh màu ngọc bích. Truyền thuyết kể rằng, thuở xưa khi đất nước bị giặc biển tấn công, Ngọc Hoàng đã phái đàn Rồng xuống giúp người Việt. Những viên ngọc châu báu mà Rồng phun ra đã hóa thành muôn trùng hòn đảo đá, nhấn chìm chiến thuyền giặc. Nơi Rồng Mẹ hạ cánh chở che bờ cõi chính là Hạ Long ngày nay.

Mỗi hòn đảo nơi đây đều mang một hình hài kỳ thú: Kia là Hòn Đỉnh Hương sừng sững như chiếc lư hương dâng lên trời đất; đằng xa là Hòn Trống Mái quấn quýt bên nhau như biểu tượng của tình yêu thủy chung son sắt.

Bước vào lòng các hang động như Hang Sửng Sốt hay Động Thiên Cung, quý khách sẽ ngỡ ngàng trước những rừng măng đá, nhũ đá muôn hình lung linh dưới ánh đèn.

Xin mời quý khách cùng buông mình giữa làn gió biển lồng lộng, tận hưởng kiệt tác thiên nhiên ban tặng cho non sông nước Việt.`
    }
];

// Danh sách tỉnh thành để lọc
const PROVINCES = [
    "Tất cả",
    "Hà Nội",
    "Ninh Bình",
    "Quảng Ninh",
    "Thừa Thiên Huế",
    "Quảng Nam",
    "TP. Hồ Chí Minh"
];

// Danh mục di sản để lọc
const CATEGORIES = [
    "Tất cả",
    "Di sản Văn hóa Thế giới UNESCO",
    "Di sản Thiên nhiên Thế giới UNESCO",
    "Di sản Thế giới Hỗn hợp UNESCO",
    "Di tích Quốc gia đặc biệt"
];

