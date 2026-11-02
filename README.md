# CỔNG TIỆN ÍCH & CHUYỂN ĐỔI SỐ GIÁO DỤC - THPT EA H'LEO

> Trang web cá nhân tổng hợp các hệ thống quản trị trường học, trợ lý giáo viên và thư viện học tập STEM dành cho học sinh.
> **Thiết kế theo chuẩn giao diện Hệ thống Quản lý Nề nếp**: Font chữ Outfit + Inter, hiệu ứng Dark Glassmorphism, ánh sáng viền vàng Gold & xanh ngọc Emerald, sẵn sàng xuất bản trên **GitHub Pages**.

---

## 🌟 CÁC HỆ THỐNG ĐÃ TÍCH HỢP TRÊN TRANG

1. **Quản Lý Nề Nếp Nhà Trường (Ea H'leo Discipline Hub)**
   - Chấm điểm thi đua thời gian thực, bảng xếp hạng tự động, quét mã QR vi phạm, xuất báo cáo PDF/Excel chuẩn Bộ GD&ĐT.
2. **Xếp Lịch Thi Thử Tốt Nghiệp THPT (Phương án 2 + 2)**
   - Thuật toán giải bài toán chống trùng ca thi 2 môn tự chọn, tối ưu hóa số phòng thi và giám thị, in danh sách phòng thi và phiếu thu bài 1-click.
3. **Trợ Lý Tạo Đề Thi & Khảo Thí Online (Aura Exam Hub)**
   - Xây dựng ma trận đặc tả đề thi, trộn 4-8 mã đề thông minh, phòng thi trực tuyến chống gian lận, tự động chấm điểm và phân tích phổ điểm.
4. **Trợ Lý Hồ Sơ Giáo Án Điện Tử (Chuẩn CV 5512)**
   - Quản lý kế hoạch bài dạy (KHBD), tự động sinh Phụ lục 1, 2, 3, 4 chuẩn biểu mẫu Công văn 5512/BGDĐT, ký duyệt số và đồng bộ Google Drive.
5. **Điểm Danh & Tính Học Phí Lớp Dạy Thêm**
   - Quét mã QR điểm danh, tự động tính học phí theo số buổi thực học, thông báo tự động cho phụ huynh qua Zalo, xuất hóa đơn VietQR.
6. **Mô Hình 3D Trực Quan Trong Dạy Học STEM**
   - Không gian mô phỏng 3D WebGL xoay 360 độ mạch Arduino, cảm biến và lắp ráp phần cứng máy tính trực tiếp trên trình duyệt.
7. **Thư Viện Học Tập Dành Cho Học Sinh (Mục đặc biệt)**
   - Mã nguồn tham khảo (Arduino C++, Python AI, ESP32 IoT).
   - Sơ đồ nối dây vi điều khiển và mạch điện tử tương tác.
   - Trình xem code trực quan với nút **1-click Copy** và phóng to sơ đồ nối dây.

---

## 🚀 HƯỚNG DẪN TRIỂN KHAI LÊN GITHUB PAGES (MIỄN PHÍ 100%)

Trang web này được xây dựng hoàn toàn bằng **HTML/CSS/JS thuần tĩnh**, không cần cài đặt NodeJS hay build phức tạp, chỉ cần đẩy lên GitHub là chạy ngay lập tức.

### Cách 1: Sử dụng GitHub Web (Nhanh nhất - Không cần cài Git)

1. Đăng nhập tài khoản [GitHub](https://github.com) của thầy/cô.
2. Bấm nút **New repository** (Tạo kho lưu trữ mới):
   - Đặt tên Repository, ví dụ: `giao-duc-thpt-eahleo` hoặc `<username>.github.io`.
   - Chọn chế độ: **Public**.
   - Bấm **Create repository**.
3. Tại trang repository vừa tạo, bấm **Add file** -> **Upload files**:
   - Kéo toàn bộ các file và thư mục trong thư mục này (`index.html`, `assets/`, `.nojekyll`, `README.md`) thả vào ô upload.
   - Bấm **Commit changes**.
4. Bật GitHub Pages:
   - Vào tab **Settings** của repository -> Menu bên trái chọn **Pages**.
   - Tại mục **Build and deployment** -> **Branch**:
     - Chọn nhánh: `main` (hoặc `master`).
     - Thư mục: `/ (root)`.
     - Bấm **Save**.
5. Sau 1 phút, GitHub sẽ cấp cho thầy/cô link trang web có dạng:
   👉 `https://<ten-tai-khoan>.github.io/giao-duc-thpt-eahleo/`

---

### Cách 2: Sử dụng dòng lệnh Git (hoặc chạy file `deploy_github.bat`)

Mở terminal tại thư mục này và gõ:

```bash
git init
git add .
git commit -m "Khoi tao cong tien ich chuyen doi so THPT Ea H'leo"
git branch -M main
git remote add origin https://github.com/<ten-tai-khoan>/<ten-repo>.git
git push -u origin main
```

---

## 🛠️ HƯỚNG DẪN TÙY CHỈNH DỮ LIỆU (`assets/js/data.js`)

Toàn bộ thông tin trên trang web được tổ chức tách biệt tại file `assets/js/data.js`. Thầy/cô chỉ cần mở file này bằng Notepad hoặc VS Code để chỉnh sửa:

1. **Thông tin cá nhân (Profile)**:
   - Sửa họ tên, trường học, tiểu sử, số điện thoại, link Zalo, Facebook, GitHub tại mục `profile`.
2. **Link trải nghiệm các hệ thống (`demoLink`)**:
   - Thay thế các đường dẫn Web App Google Apps Script của thầy vào thuộc tính `demoLink` của từng hệ thống.
3. **Tài khoản và mật khẩu demo (`credentials`)**:
   - Thêm hoặc sửa các tài khoản mẫu tại mảng `credentials` của từng công cụ. Trang web sẽ tự động sinh bảng tài khoản kèm nút sao chép 1 chạm.
4. **Bổ sung bài tập, mã nguồn cho học sinh (`studentLibrary`)**:
   - Thêm bài mới vào mảng `studentLibrary` với cú pháp mã nguồn C++/Python và hướng dẫn nối dây.

---

## 🎨 THÔNG SỐ GIAO DIỆN CHUẨN NỀ NẾP

- **Typography**: Google Fonts `Outfit` (Tiêu đề hiện đại) + `Inter` (Nội dung) + `JetBrains Mono` (Mã nguồn).
- **Màu sắc chủ đạo**:
  - Nền không gian số: Dark Gradient `#070b14` ➔ `#0b1120` ➔ `#111827`.
  - Ánh sáng điểm nhấn: Hoàng kim Gold `#f5d061`, Ngọc lục bảo Emerald `#10b981`, Xanh công nghệ Sky `#0ea5e9`.
- **Hiệu ứng**: Dark Glassmorphism làm mờ nền 16px, hiệu ứng đổ bóng phát sáng neon (Glow shadows), viền phản chiếu ánh sáng khi rê chuột.
