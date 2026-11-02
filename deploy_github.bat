@echo off
chcp 65001 >nul
echo ========================================================
echo   CÔNG CỤ TỰ ĐỘNG ĐẨY CODE LÊN GITHUB PAGES
echo   Hệ Thống Tiện Ích Giáo Dục - THPT Ea H'leo
echo ========================================================
echo.

set /p REPO_URL="Nhập đường dẫn GitHub Repository (ví dụ: https://github.com/username/ten-repo.git): "

if "%REPO_URL%"=="" (
    echo [LỖI] Bạn chưa nhập link GitHub repository!
    pause
    exit /b
)

echo.
echo [1/4] Khởi tạo kho lưu trữ Git...
git init
git checkout -B main

echo [2/4] Thêm toàn bộ mã nguồn và tệp tĩnh...
git add .

echo [3/4] Tạo bản ghi chú Commit...
git commit -m "Cập nhật cổng tiện ích giáo dục THPT Ea H'leo - %date% %time%"

echo [4/4] Đẩy mã nguồn lên GitHub...
git remote remove origin 2>nul
git remote add origin %REPO_URL%
git push -u origin main --force

echo.
echo ========================================================
echo   HOÀN TẤT ĐẨY MÃ NGUỒN LÊN GITHUB!
echo   Bây giờ bạn chỉ cần vào Repository -> Settings -> Pages
echo   Chọn nhánh 'main' và thư mục '/ (root)' rồi bấm Save!
echo ========================================================
echo.
pause
