/**
 * PORTFOLIO DATA HUB - TRƯỜNG THPT EA H'LEO
 * Phối màu & Cấu trúc đồng bộ với Cổng thông tin điện tử Trường THPT Ea H'leo
 * Tông màu: Nền trắng, điểm nhấn đỏ cờ truyền thống (#c82333 / #8e1818)
 */

const PORTFOLIO_DATA = {
  // Thông tin tác giả & Giáo viên
  profile: {
    fullName: "Thầy Hoàng Ngọc Tuyên",
    school: "Trường THPT Ea H'leo",
    dept: "Sở Giáo dục và Đào tạo Đắk Lắk",
    address: "31 Điện Biên Phủ, Thị trấn Ea Drăng, Huyện Ea H'leo, Tỉnh Đắk Lắk",
    role: "Giáo viên Tin học • Phụ trách Chuyển đổi số & STEM",
    bio: "Chào mừng quý thầy cô, phụ huynh và các em học sinh! Trang thông tin được xây dựng nhằm tổng hợp các giải pháp chuyển đổi số, hệ thống phần mềm hỗ trợ quản lý giáo dục và kho học liệu STEM thực hành.",
    avatar: "assets/images/teacher-avatar.svg",
    stats: {
      systemsCount: 6,
      studentsTrained: "1,200+",
      resourcesCount: "45+",
      uptime: "99.9%"
    },
    contacts: {
      phone: "0912.345.xxx",
      email: "hoangtuyen.eahleo@gmail.com",
      github: "https://github.com/hoangtuyen47",
      zalo: "https://zalo.me",
      facebook: "https://facebook.com",
      schoolWeb: "http://c3eahleo.daklak.edu.vn"
    },
    skills: [
      "Quản trị hệ thống giáo dục",
      "Google Apps Script & WebApp",
      "Lập trình Vi điều khiển & STEM",
      "Khảo thí & Trộn đề thi GDPT 2018",
      "Mô phỏng 3D WebGL",
      "Kế hoạch bài dạy CV 5512"
    ]
  },

  // Bình luận & Đánh giá tích cực từ đồng nghiệp, BGH, phụ huynh, học sinh
  reviews: [
    {
      author: "Thầy Phó Hiệu Trưởng",
      role: "Ban Giám Hiệu THPT Ea H'leo",
      comment: "Hệ thống Quản lý nề nếp và Xếp lịch thi 2+2 giúp nhà trường tiết kiệm hàng chục giờ xử lý thủ công mỗi kỳ thi. Dữ liệu chuẩn xác, minh bạch và xuất báo cáo rất nhanh chóng.",
      stars: 5,
      date: "Tuần 8 - HK1"
    },
    {
      author: "Cô Nguyễn Thị Mai",
      role: "Giáo viên Chủ nhiệm Khối 12",
      comment: "Nhờ có ứng dụng theo dõi nề nếp và điểm danh, tôi nắm bắt tức thì tình hình chuyên cần của các em học sinh, việc gửi thông báo tới phụ huynh cũng vô cùng thuận tiện.",
      stars: 5,
      date: "Tháng 10/2026"
    },
    {
      author: "Bác Trần Đình Hùng",
      role: "Trưởng ban ĐDCM Học sinh",
      comment: "Hệ thống điểm danh và thông báo học phí tự động qua Zalo kèm mã VietQR rất rõ ràng, chi tiết từng buổi học. Phụ huynh chúng tôi hoàn toàn an tâm và đánh giá rất cao.",
      stars: 5,
      date: "Tháng 9/2026"
    },
    {
      author: "Em Lê Minh Khôi",
      role: "Học sinh 11A1 (Giải Nhì KHKT Tỉnh)",
      comment: "Nhờ kho mã nguồn Arduino và hướng dẫn sơ đồ nối dây của thầy Tuyên, nhóm em đã tự tin lập trình và hoàn thiện mô hình trạm quan trắc thông minh đạt giải cấp tỉnh.",
      stars: 5,
      date: "Kỳ thi KHKT 2026"
    }
  ],

  // Danh mục phân hệ
  categories: [
    { id: "all", name: "Tất cả công cụ", icon: "layout-grid" },
    { id: "management", name: "Quản lý & Khảo thí", icon: "shield-check" },
    { id: "teaching", name: "Giảng dạy & STEM 3D", icon: "cpu" },
    { id: "utility", name: "Tiện ích giáo viên", icon: "file-check" },
    { id: "library", name: "Học liệu học sinh", icon: "book-open" }
  ],

  // 6 Hệ thống hỗ trợ dạy học & Quản trị
  systems: [
    {
      id: "ne-nep",
      categoryId: "management",
      title: "Hệ Thống Quản Lý Nề Nếp & Thi Đua",
      subtitle: "Trường THPT Ea H'leo - Năm học 2026 - 2027",
      badge: "Đang vận hành",
      badgeColor: "red",
      image: "assets/images/dashboard-school.png",
      description: "Nền tảng số hóa toàn diện công tác quản lý nề nếp, thi đua và kỷ luật học sinh toàn trường với cơ chế chấm điểm thời gian thực và bảng xếp hạng tuần/tháng tự động.",
      features: [
        "Chấm điểm thi đua trực tuyến theo thời gian thực (Real-time Dashboard)",
        "Bảng xếp hạng tuần, tháng, học kỳ tự động phân theo từng khối lớp 10, 11, 12",
        "Phân quyền 5 cấp: Ban Giám Hiệu, Đoàn Trường, Ban Giám Thị, GVCN, Đội Cờ Đỏ",
        "Tích hợp quét mã QR học sinh, ghi nhận vi phạm kèm ảnh minh chứng",
        "Xuất báo cáo tổng kết thi đua, biên bản vi phạm định dạng PDF & Excel chuẩn Bộ GD&ĐT",
        "Tối ưu hóa chạy mượt mà trên di động (PWA), hỗ trợ ghim màn hình chính"
      ],
      demoLink: "https://script.google.com/macros/s/AKfycbxLKgD3-0YyeMnq00ZdT1j8o5wv0VqAI6W0uVsuaYWbBTZbgaVKMh3Y7qiQPn7fUWDN/exec",
      credentials: [
        { role: "Ban Giám Hiệu / Quản trị", username: "admin", password: "nenhiep@2026", note: "Toàn quyền quản trị, phê duyệt & xuất báo cáo" },
        { role: "Giáo viên chủ nhiệm (GVCN)", username: "gvcn11a2", password: "gvcn@123", note: "Theo dõi lớp chủ nhiệm, phản ánh vi phạm" },
        { role: "Đội Cờ Đỏ / Giám thị", username: "codo01", password: "codo@2026", note: "Chấm điểm trực tiếp giờ truy bài & nề nếp" }
      ]
    },

    {
      id: "xep-lich-thi-2-2",
      categoryId: "management",
      title: "Xếp Lịch Thi Thử Tốt Nghiệp (2 + 2)",
      subtitle: "Thuật toán ghép ca thi tự chọn chuẩn Quy chế mới Bộ GD&ĐT",
      badge: "Thuật toán AI",
      badgeColor: "amber",
      image: "assets/images/exam-schedule.svg",
      description: "Giải pháp giải quyết bài toán phức tạp xếp lịch thi tốt nghiệp phương án mới (2 môn bắt buộc: Toán, Văn + 2 môn tự chọn), tự động loại trừ trùng ca và tối ưu phòng thi.",
      features: [
        "Thuật toán giải bài toán phân ca thi chống trùng lịch 100% cho thí sinh",
        "Tự động tính toán số phòng thi tối thiểu, tiết kiệm tối đa giám thị coi thi",
        "Đánh số báo danh (SBD) thông minh, cân đối sĩ số chuẩn 24 thí sinh/phòng",
        "Xuất file Word (.doc) và Excel (.xlsx) chuẩn form mẫu Bộ Giáo dục: Danh sách phòng thi, Danh sách dán cửa phòng, Danh sách thu bài",
        "Hỗ trợ cấu hình tùy chỉnh môn thi, phân ban KHTN, KHXH hoặc môn tổ hợp tự do",
        "Xử lý dữ liệu lớn lên tới hàng nghìn học sinh chỉ trong vài giây"
      ],
      demoLink: "https://script.google.com/macros/s/AKfycbz_xeplich22_sample/exec",
      credentials: [
        { role: "Cán bộ Khảo thí / BGH", username: "khaothi", password: "khaothi@2+2", note: "Nhập danh sách thí sinh & chạy xếp lịch" },
        { role: "Khách trải nghiệm", username: "guest", password: "guest@2026", note: "Xem thử lịch thi và xuất kết quả mẫu" }
      ]
    },

    {
      id: "aura-exam-online",
      categoryId: "management",
      title: "Trợ Lý Tạo Đề Thi & Khảo Thí Online (Aura)",
      subtitle: "Hệ thống soạn đề ma trận đặc tả & phòng thi trực tuyến thông minh",
      badge: "Khảo thí thông minh",
      badgeColor: "blue",
      image: "assets/images/thi-thu-aura.png",
      description: "Hệ thống khảo thí thông minh hỗ trợ giáo viên xây dựng ma trận đặc tả đề kiểm tra định kỳ, tự động trộn đề đa mã và tổ chức kiểm tra trực tuyến chống gian lận.",
      features: [
        "Xây dựng ma trận đặc tả đề thi chuẩn chương trình GDPT 2018",
        "Tự động trộn 4 - 8 mã đề, hoán vị câu hỏi và phương án A, B, C, D thông minh",
        "Bảo toàn 100% công thức toán học KaTeX/LaTeX, mã nguồn lập trình và hình vẽ kỹ thuật",
        "Phòng thi trực tuyến với tính năng cảnh báo chuyển tab, khóa màn hình chống gian lận",
        "Hệ thống tự động chấm điểm bài làm và thống kê phân tích phổ điểm trực quan",
        "Xuất đề thi Word kèm bảng đáp án và lời giải chi tiết phục vụ in ấn"
      ],
      demoLink: "https://script.google.com/macros/s/AKfycbz_aura_sample/exec",
      credentials: [
        { role: "Giáo viên ra đề", username: "teacher_tin", password: "aura@exam2026", note: "Tạo đề, cấu hình ma trận và mở phòng thi" },
        { role: "Học sinh thi thử", username: "hocsinh_test", password: "123456", note: "Vào phòng thi làm bài trắc nghiệm trực tiếp" }
      ]
    },

    {
      id: "ho-so-giao-an-5512",
      categoryId: "utility",
      title: "Trợ Lý Hồ Sơ Giáo Án Điện Tử (Chuẩn 5512)",
      subtitle: "Số hóa kế hoạch bài dạy, phân phối chương trình & phụ lục 1-4",
      badge: "Chuẩn Bộ GD",
      badgeColor: "emerald",
      image: "assets/images/hoso-giao-an.svg",
      description: "Công cụ hỗ trợ giáo viên tự động hóa việc xây dựng hồ sơ chuyên môn, kế hoạch giáo dục và kế hoạch bài dạy (KHBD) theo quy định Công văn 5512/BGDĐT.",
      features: [
        "Quản lý và xuất tự động Phụ lục 1, 2, 3, 4 chuẩn biểu mẫu Công văn 5512",
        "Kho kế hoạch bài dạy môn Tin học 10, 11, 12 định hướng ứng dụng và Khoa học máy tính",
        "Tự động tích hợp mục tiêu phẩm chất, năng lực và chuỗi hoạt động học theo tiến trình",
        "Đồng bộ hai chiều trực tiếp với thư mục Google Drive của tổ chuyên môn",
        "Hỗ trợ quy trình trình duyệt giáo án số, ký số nội bộ và nhận xét trực tuyến",
        "Tìm kiếm nhanh bài dạy theo tuần học, chủ đề hoặc tiết phân phối chương trình"
      ],
      demoLink: "https://script.google.com/macros/s/AKfycbz_hoso5512_sample/exec",
      credentials: [
        { role: "Tổ trưởng chuyên môn", username: "totruong_tin", password: "hoso@5512", note: "Kiểm tra và phê duyệt hồ sơ giáo án" },
        { role: "Giáo viên bộ môn", username: "giaovien01", password: "gv@5512", note: "Soạn thảo và cập nhật kế hoạch bài dạy" }
      ]
    },

    {
      id: "diem-danh-hoc-phi",
      categoryId: "utility",
      title: "Điểm Danh & Tính Học Phí Lớp Dạy Thêm",
      subtitle: "Giải pháp tự động đối soát học phí & thông báo phụ huynh qua Zalo",
      badge: "Tự động hóa",
      badgeColor: "red",
      image: "assets/images/diem-danh-stem.png",
      description: "Ứng dụng thông minh hỗ trợ quản lý các lớp học thêm, lớp Kỹ năng số và STEM với tính năng điểm danh QR code và tự động tính học phí chính xác theo số buổi thực tế.",
      features: [
        "Điểm danh học sinh bằng quét mã QR thẻ hoặc thao tác 1 chạm trên smartphone",
        "Tự động tính học phí theo đúng số buổi thực học (tự trừ ngày nghỉ có phép)",
        "Gửi thông báo điểm danh và báo cáo học tập định kỳ tới phụ huynh qua Zalo",
        "Quản lý minh bạch danh sách thu học phí, công nợ và quỹ học liệu",
        "Tự động sinh phiếu báo học phí kèm mã QR chuyển khoản ngân hàng (VietQR)",
        "Xuất báo cáo tổng kết theo tháng định dạng Excel và PDF gửi phụ huynh"
      ],
      demoLink: "https://script.google.com/macros/s/AKfycbz_diemdanh_sample/exec",
      credentials: [
        { role: "Quản trị viên / Giáo viên", username: "admin_class", password: "hocphi@2026", note: "Quản lý sĩ số, quét mã và xuất công nợ" },
        { role: "Trợ giảng", username: "trogiang", password: "tg@123", note: "Hỗ trợ điểm danh và soát sĩ số lớp" }
      ]
    },

    {
      id: "mo-hinh-3d-arduino",
      categoryId: "teaching",
      title: "Mô Hình 3D Trực Quan Trong Dạy Học STEM",
      subtitle: "Không gian mô phỏng mạch điện tử, Arduino & tháo lắp PC 360°",
      badge: "WebGL 3D Interactive",
      badgeColor: "blue",
      image: "assets/images/model-3d.svg",
      description: "Phòng thí nghiệm ảo 3D trực tiếp trên trình duyệt web, giúp học sinh quan sát, xoay 360 độ và thực hành nối dây linh kiện Arduino, cảm biến và lắp ráp phần cứng máy tính.",
      features: [
        "Mô hình 3D tương tác chân thực (Arduino Uno, Breadboard, Pin 18650, Sensor)",
        "Tính năng xoay 360 độ, zoom cận cảnh từng chân linh kiện điện tử",
        "Chế độ mô phỏng nối dây ảo (Virtual Wiring) với hướng dẫn trực quan từng chân",
        "Mô phỏng tháo lắp thùng máy tính (PC Assembly) cho học sinh khối 10 & 11",
        "Tích hợp trợ lý AI gợi ý cách nối chân và kiểm tra lỗi ngắn mạch trực tuyến",
        "Chạy hoàn toàn trên trình duyệt thông qua Three.js/WebGL, không cần cài đặt phần mềm nặng"
      ],
      demoLink: "https://script.google.com/macros/s/AKfycbz_3d_arduino_sample/exec",
      credentials: [
        { role: "Trải nghiệm tự do", username: "Không cần tài khoản", password: "Mở trực tiếp trên web", note: "Mọi học sinh và giáo viên đều có thể tương tác ngay" }
      ]
    }
  ],

  // Kho học liệu học sinh (Dự án, Code, Sơ đồ nối dây, Tài liệu tự học)
  studentLibrary: [
    {
      id: "lib-traffic-light",
      category: "Arduino & STEM",
      badge: "Arduino C++",
      title: "Mạch Đèn Giao Thông Thông Minh & Nút Bấm Người Đi Bộ",
      description: "Mạch điện tử STEM điều khiển đèn tín hiệu 3 màu và nút bấm ưu tiên người đi bộ qua đường an toàn.",
      difficulty: "Cơ bản",
      hardware: ["Arduino Uno R3", "3x Đèn LED (Đỏ, Vàng, Xanh)", "3x Điện trở 220Ω", "1x Nút bấm Push Button", "Breadboard"],
      wiringGuide: "LED Đỏ -> Pin 11 | LED Vàng -> Pin 12 | LED Xanh -> Pin 13 | Nút bấm -> Pin 2 (INPUT_PULLUP)",
      diagramImage: "assets/images/circuit-arduino.svg",
      codeSnippet: `// ==========================================
// DỰ ÁN STEM: ĐÈN GIAO THÔNG THÔNG MINH
// Giáo viên hướng dẫn: Thầy Hoàng Ngọc Tuyên
// Trường THPT Ea H'leo
// ==========================================

const int redPin = 11;
const int yellowPin = 12;
const int greenPin = 13;
const int buttonPin = 2;

volatile bool pedestrianRequest = false;

void setup() {
  pinMode(redPin, OUTPUT);
  pinMode(yellowPin, OUTPUT);
  pinMode(greenPin, OUTPUT);
  pinMode(buttonPin, INPUT_PULLUP);
  
  // Gắn ngắt khi người đi bộ bấm nút
  attachInterrupt(digitalPinToInterrupt(buttonPin), requestPedestrian, FALLING);
  Serial.begin(9600);
}

void loop() {
  if (pedestrianRequest) {
    handlePedestrianCrossing();
    pedestrianRequest = false;
  }
  
  // Chu trình giao thông bình thường
  setLights(LOW, LOW, HIGH); // Đèn xanh bật
  smartDelay(5000);
  
  setLights(LOW, HIGH, LOW); // Đèn vàng bật
  smartDelay(2000);
  
  setLights(HIGH, LOW, LOW); // Đèn đỏ bật
  smartDelay(5000);
}

void setLights(int red, int yellow, int green) {
  digitalWrite(redPin, red);
  digitalWrite(yellowPin, yellow);
  digitalWrite(greenPin, green);
}

void smartDelay(int ms) {
  for (int i = 0; i < ms / 100; i++) {
    if (pedestrianRequest) return;
    delay(100);
  }
}

void requestPedestrian() {
  pedestrianRequest = true;
}

void handlePedestrianCrossing() {
  setLights(LOW, HIGH, LOW);
  delay(1500);
  setLights(HIGH, LOW, LOW);
  delay(6000); // 6 giây cho người đi bộ qua đường an toàn
}`
    },

    {
      id: "lib-smart-trash-bin",
      category: "Arduino & STEM",
      badge: "Arduino + Servo",
      title: "Thùng Rác Thông Minh Tự Mở Nắp (HC-SR04 + SG90)",
      description: "Ứng dụng cảm biến khoảng cách siêu âm phát hiện tay dưới 20cm để tự động mở nắp thùng rác bằng Servo.",
      difficulty: "Trung bình",
      hardware: ["Arduino Uno / Nano", "Cảm biến khoảng cách HC-SR04", "Động cơ Servo SG90", "Nguồn 5V"],
      wiringGuide: "HC-SR04 VCC -> 5V | GND -> GND | Trig -> Pin 9 | Echo -> Pin 10 | Servo Signal -> Pin 6",
      diagramImage: "assets/images/circuit-arduino.svg",
      codeSnippet: `// ====================================================
// THÙNG RÁC THÔNG MINH TỰ ĐỘNG - THPT EA H'LEO
// ====================================================
#include <Servo.h>

const int trigPin = 9;
const int echoPin = 10;
const int servoPin = 6;

Servo lidServo;

long getDistance() {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  long duration = pulseIn(echoPin, HIGH);
  return duration * 0.034 / 2; // Khoảng cách cm
}

void setup() {
  Serial.begin(9600);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  
  lidServo.attach(servoPin);
  lidServo.write(0); // Nắp đóng ban đầu (0 độ)
}

void loop() {
  long distance = getDistance();
  Serial.print("Khoảng cách: ");
  Serial.println(distance);
  
  if (distance > 0 && distance < 20) {
    lidServo.write(90); // Mở nắp 90 độ
    delay(3000);        // Chờ 3 giây
    lidServo.write(0);  // Đóng lại
    delay(1000);
  }
  delay(150);
}`
    },

    {
      id: "lib-esp32-iot",
      category: "IoT & Lập Trình Nhúng",
      badge: "ESP32 IoT",
      title: "Trạm Quan Trắc Nhiệt Độ - Độ Ẩm Không Khí ESP32 + DHT11",
      description: "Đo nhiệt độ, độ ẩm phòng học và kết nối Wi-Fi trường học để hiển thị thông số thời gian thực lên Web.",
      difficulty: "Nâng cao",
      hardware: ["Board ESP32 NodeMCU", "Cảm biến nhiệt ẩm DHT11", "Màn hình OLED 0.96 inch I2C", "Cáp micro USB"],
      wiringGuide: "DHT11 Data -> GPIO 4 | OLED SDA -> GPIO 21 | OLED SCL -> GPIO 22 | VCC -> 3.3V | GND -> GND",
      diagramImage: "assets/images/circuit-arduino.svg",
      codeSnippet: `// ====================================================
// ESP32 IOT WEATHER STATION - THPT EA H'LEO
// ====================================================
#include <WiFi.h>
#include <WebServer.h>
#include <DHT.h>

#define DHTPIN 4
#define DHTTYPE DHT11

const char* ssid = "THPT_EAHLEO_WIFI";
const char* password = "Password@2026";

DHT dht(DHTPIN, DHTTYPE);
WebServer server(80);

void handleRoot() {
  float temp = dht.readTemperature();
  float hum = dht.readHumidity();
  
  String html = "<html><head><meta charset='utf-8'><title>Trạm Quan Trắc STEM</title></head>";
  html += "<body style='font-family:Arial;text-align:center;background:#f8fafc;color:#1e293b;'>";
  html += "<h2 style='color:#c82333;'>TRẠM QUAN TRẮC MÔI TRƯỜNG THPT EA H'LEO</h2>";
  html += "<div style='display:inline-block;padding:24px;border-radius:12px;background:#ffffff;box-shadow:0 4px 6px rgba(0,0,0,0.1);'>";
  html += "<h3>Nhiệt độ: <span style='color:#e53e3e;'>" + String(temp, 1) + " °C</span></h3>";
  html += "<h3>Độ ẩm: <span style='color:#3182ce;'>" + String(hum, 1) + " %</span></h3>";
  html += "</div></body></html>";
  
  server.send(200, "text/html", html);
}

void setup() {
  Serial.begin(115200);
  dht.begin();
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nWiFi Connected! IP: ");
  Serial.println(WiFi.localIP());
  
  server.on("/", handleRoot);
  server.begin();
}

void loop() {
  server.handleClient();
}`
    },

    {
      id: "lib-python-cv-ai",
      category: "Lập trình Python & AI",
      badge: "Python OpenCV",
      title: "Ứng Dụng AI Thị Giác Máy Tính: Nhận Diện Cử Chỉ Tay",
      description: "Chuyên đề Tin học 11 - 12: Sử dụng thư viện MediaPipe và OpenCV để đếm số ngón tay và điều khiển ứng dụng.",
      difficulty: "Chuyên đề AI",
      hardware: ["Máy tính có Webcam", "Python 3.10+", "Cài đặt: pip install opencv-python mediapipe"],
      wiringGuide: "Chạy trực tiếp trên máy vi tính phòng máy trường THPT Ea H'leo",
      diagramImage: "assets/images/circuit-arduino.svg",
      codeSnippet: `# ====================================================
# DỰ ÁN STEM TIN HỌC: NHẬN DIỆN CỬ CHỈ BÀN TAY (AI)
# Giáo viên hướng dẫn: Thầy Hoàng Ngọc Tuyên
# ====================================================
import cv2
import mediapipe as mp

mp_hands = mp.solutions.hands
mp_draw = mp.solutions.drawing_utils

hands = mp_hands.Hands(max_num_hands=1, min_detection_confidence=0.7)
cap = cv2.VideoCapture(0)

print("Học sinh THPT Ea H'leo - Bấm 'q' trên bàn phím để dừng chương trình.")

while cap.isOpened():
    success, img = cap.read()
    if not success:
        break
        
    img = cv2.flip(img, 1)
    rgb_img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    results = hands.process(rgb_img)
    
    if results.multi_hand_landmarks:
        for hand_lms in results.multi_hand_landmarks:
            mp_draw.draw_landmarks(img, hand_lms, mp_hands.HAND_CONNECTIONS)
            cv2.putText(img, "Nhan dien tay: OK", (20, 50), 
                        cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 180, 0), 2)
            
    cv2.imshow("Nhan Dien Cu Chi Ban Tay - THPT Ea H'leo", img)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()`
    }
  ]
};
