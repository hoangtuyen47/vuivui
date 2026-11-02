/**
 * PORTFOLIO DATA HUB
 * Dữ liệu cấu hình hệ thống, thông tin cá nhân và thư viện học tập cho học sinh
 * Thầy cô có thể dễ dàng sửa đổi link, tài khoản demo và bổ sung dự án tại đây
 */

const PORTFOLIO_DATA = {
  // Thông tin cá nhân & Giới thiệu
  profile: {
    fullName: "Thầy Giáo Nguyễn Văn Cường", // Có thể tùy chỉnh tên thầy
    school: "Trường THPT Ea H'leo",
    province: "Đắk Lắk",
    role: "Giáo viên Tin học & Chuyên gia STEM - Chuyển đổi số Giáo dục",
    bio: "Chào mừng các thầy cô, đồng nghiệp và các em học sinh! Đây là trang tổng hợp các hệ thống phần mềm, công cụ trợ lý chuyển đổi số và thư viện mã nguồn thực hành STEM được tôi nghiên cứu, xây dựng và đưa vào ứng dụng thực tế trong giảng dạy và quản lý trường học.",
    avatar: "assets/images/teacher-avatar.svg",
    stats: {
      systemsCount: 6,
      studentsTrained: "1,200+",
      resourcesCount: "45+",
      uptime: "99.9%"
    },
    contacts: {
      phone: "0900.000.xxx",
      email: "cuongit.eadleo@gmail.com",
      github: "https://github.com",
      zalo: "https://zalo.me",
      facebook: "https://facebook.com"
    },
    skills: [
      "Chuyển đổi số GD",
      "Lập trình STEM & Robotics",
      "Google Apps Script & WebApp",
      "Mô phỏng 3D WebGL",
      "Khảo thí & Tạo đề thi Online",
      "Quản lý Nề nếp & Thi đua"
    ]
  },

  // Danh mục chuyên mục
  categories: [
    { id: "all", name: "Tất cả công cụ", icon: "layout-grid" },
    { id: "management", name: "Quản lý & Khảo thí", icon: "shield-check" },
    { id: "teaching", name: "Giảng dạy & STEM 3D", icon: "cpu" },
    { id: "utility", name: "Tiện ích giáo viên", icon: "file-check" },
    { id: "library", name: "Thư viện học sinh", icon: "code" }
  ],

  // 6 Hệ thống đã xây dựng
  systems: [
    {
      id: "ne-nep",
      categoryId: "management",
      title: "Hệ Thống Quản Lý Nề Nếp Học Sinh",
      subtitle: "Trường THPT Ea H'leo - Năm học 2026 - 2027",
      badge: "Đang vận hành",
      badgeColor: "emerald",
      image: "assets/images/dashboard-school.png",
      description: "Nền tảng số hóa toàn diện công tác quản lý nề nếp, thi đua và kỷ luật học sinh toàn trường với cơ chế chấm điểm thời gian thực và bảng xếp hạng tự động.",
      features: [
        "Chấm điểm thi đua trực tuyến theo thời gian thực (Real-time Dashboard)",
        "Bảng xếp hạng tuần, tháng, học kỳ tự động phân theo từng khối lớp",
        "Phân quyền 5 cấp: Ban Giám Hiệu, Đoàn Trường, Giám Thị, GVCN, Đội Cờ Đỏ",
        "Tích hợp quét mã QR học sinh, ghi nhận vi phạm kèm ảnh minh chứng",
        "Xuất báo cáo tổng kết thi đua, biên bản vi phạm định dạng PDF & Excel chuẩn Bộ GD&ĐT",
        "Tối ưu hóa chạy mượt mà trên di động (PWA), hỗ trợ ghim màn hình chính"
      ],
      demoLink: "https://script.google.com/macros/s/AKfycbz_nenep_sample/exec",
      githubRepo: "https://github.com",
      credentials: [
        { role: "Ban Giám Hiệu / Quản trị", username: "admin", password: "nenhiep@2026", note: "Toàn quyền quản trị, phê duyệt & xuất báo cáo" },
        { role: "Giáo viên chủ nhiệm (GVCN)", username: "gvcn12a1", password: "gvcn@123", note: "Theo dõi lớp chủ nhiệm, phản ánh vi phạm" },
        { role: "Đội Cờ Đỏ / Giám thị", username: "codo01", password: "codo@2026", note: "Chấm điểm trực tiếp giờ truy bài & nề nếp" }
      ]
    },

    {
      id: "xep-lich-thi-2-2",
      categoryId: "management",
      title: "Xếp Lịch Thi Thử Tốt Nghiệp THPT (2 + 2)",
      subtitle: "Thuật toán ghép ca thi tự chọn chuẩn Quy chế mới Bộ GD&ĐT",
      badge: "Thuật toán AI",
      badgeColor: "gold",
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
      githubRepo: "https://github.com",
      credentials: [
        { role: "Cán bộ Khảo thí / BGH", username: "khaothi", password: "khaothi@2+2", note: "Nhập danh sách thí sinh & chạy xếp lịch" },
        { role: "Khách trải nghiệm", username: "guest", password: "guest@2026", note: "Xem thử lịch thi và xuất kết quả mẫu" }
      ]
    },

    {
      id: "aura-exam-online",
      categoryId: "management",
      title: "Trợ Lý Tạo Đề Thi & Khảo Thí Online (Aura Exam)",
      subtitle: "Hệ thống soạn đề ma trận đặc tả & phòng thi trực tuyến thông minh",
      badge: "AI Exam Hub",
      badgeColor: "sky",
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
      githubRepo: "https://github.com",
      credentials: [
        { role: "Giáo viên ra đề", username: "teacher_tin", password: "aura@exam2026", note: "Tạo đề, cấu hình ma trận và mở phòng thi" },
        { role: "Học sinh thi thử", username: "hocsinh_test", password: "123456", note: "Vào phòng thi làm bài trắc nghiệm trực tiếp" }
      ]
    },

    {
      id: "ho-so-giao-an-5512",
      categoryId: "utility",
      title: "Trợ Lý Hồ Sơ Giáo Án Điện Tử (Chuẩn CV 5512)",
      subtitle: "Số hóa kế hoạch bài dạy, phân phối chương trình & phụ lục 1-4",
      badge: "Chuẩn Bộ GD",
      badgeColor: "purple",
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
      githubRepo: "https://github.com",
      credentials: [
        { role: "Tổ trưởng chuyên môn", username: "totruong_tin", password: "hoso@5512", note: "Kiểm tra và phê duyệt hồ sơ giáo án" },
        { role: "Giáo viên bộ môn", username: "giaovien01", password: "gv@5512", note: "Soạn thảo và cập nhật kế hoạch bài dạy" }
      ]
    },

    {
      id: "diem-danh-hoc-phi",
      categoryId: "utility",
      title: "Điểm Danh & Tính Học Phí Lớp Dạy Thêm",
      subtitle: "Giải pháp tự động đối soát học phí & thông báo phụ huynh",
      badge: "Tự động hóa",
      badgeColor: "emerald",
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
      githubRepo: "https://github.com",
      credentials: [
        { role: "Quản trị viên / Giáo viên", username: "admin_class", password: "hocphi@2026", note: "Quản lý sĩ số, quét mã và xuất công nợ" },
        { role: "Trợ giảng", username: "trogiang", password: "tg@123", note: "Hỗ trợ điểm danh và soát sĩ số lớp" }
      ]
    },

    {
      id: "mo-hinh-3d-arduino",
      categoryId: "teaching",
      title: "Mô Hình 3D Trực Quan Trong Dạy Học STEM",
      subtitle: "Không gian mô phỏng mạch điện tử, Arduino & lắp ráp phần cứng 360°",
      badge: "WebGL 3D Interactive",
      badgeColor: "gold",
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
      githubRepo: "https://github.com",
      credentials: [
        { role: "Trải nghiệm tự do", username: "Không cần đăng nhập", password: "Mở trực tiếp trên web", note: "Mọi học sinh và giáo viên đều có thể tương tác ngay" }
      ]
    }
  ],

  // Thư viện học tập cho học sinh
  studentLibrary: [
    {
      id: "lib-traffic-light",
      category: "Arduino & STEM Robotics",
      badge: "Arduino C++",
      title: "Mạch Đèn Giao Thông Thông Minh & Nút Bấm Người Đi Bộ",
      description: "Dự án STEM cơ bản kết hợp đèn LED 3 màu (Đỏ, Vàng, Xanh) và nút bấm ngắt ưu tiên cho người đi bộ qua đường.",
      difficulty: "Cơ bản",
      hardware: ["Arduino Uno R3", "3x Đèn LED (Đỏ, Vàng, Xanh)", "3x Điện trở 220 Ohm", "1x Nút bấm Push Button", "Breadboard & Dây cắm"],
      wiringGuide: "LED Đỏ -> Pin 11 | LED Vàng -> Pin 12 | LED Xanh -> Pin 13 | Nút bấm -> Pin 2 (INPUT_PULLUP)",
      diagramImage: "assets/images/circuit-arduino.svg",
      codeSnippet: `// ==========================================
// DỰ ÁN STEM: ĐÈN GIAO THÔNG THÔNG MINH
// Giáo viên hướng dẫn: Thầy Nguyễn Văn Cường
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
  // Chuyển sang vàng rồi sang đỏ cho xe dừng lại
  setLights(LOW, HIGH, LOW);
  delay(1500);
  setLights(HIGH, LOW, LOW);
  delay(6000); // 6 giây cho người đi bộ qua đường an toàn
}`
    },

    {
      id: "lib-smart-trash-bin",
      category: "Arduino & STEM Robotics",
      badge: "Arduino + Servo",
      title: "Thùng Rác Thông Minh Tự Mở Nắp (Cảm Biến Siêu Âm HC-SR04 + Servo SG90)",
      description: "Khi người dùng đưa tay lại gần dưới 20cm, thùng rác tự động quay Servo 90 độ để mở nắp và tự đóng lại sau 3 giây.",
      difficulty: "Trung bình",
      hardware: ["Arduino Nano / Uno", "Cảm biến khoảng cách HC-SR04", "Động cơ Servo SG90", "Nguồn pin 5V"],
      wiringGuide: "HC-SR04 VCC -> 5V | GND -> GND | Trig -> Pin 9 | Echo -> Pin 10 | Servo Signal -> Pin 6",
      diagramImage: "assets/images/circuit-arduino.svg",
      codeSnippet: `// ====================================================
// THÙNG RÁC THÔNG MINH TỰ ĐỘNG - STEM ARDUINO
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
  Serial.print("Distance: ");
  Serial.println(distance);
  
  if (distance > 0 && distance < 20) {
    // Phát hiện tay trong phạm vi 20cm -> Mở nắp
    lidServo.write(90);
    delay(3000); // Giữ mở 3 giây
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
      title: "Trạm Quan Trắc Nhiệt Độ - Độ Ẩm Không Khí ESP32 + DHT11 Gửi Dữ Liệu Lên Web",
      description: "Đo nhiệt độ môi trường học tập, kết nối Wi-Fi trường học và hiển thị thông số thời gian thực trên Web Dashboard.",
      difficulty: "Nâng cao",
      hardware: ["Board ESP32 NodeMCU", "Cảm biến nhiệt độ DHT11", "Màn hình OLED 0.96 inch I2C", "Cáp micro USB"],
      wiringGuide: "DHT11 Data -> GPIO 4 | OLED SDA -> GPIO 21 | OLED SCL -> GPIO 22",
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
  html += "<body style='font-family:Arial;text-align:center;background:#0b1120;color:#fff;'>";
  html += "<h1>TRẠM QUAN TRẮC MÔI TRƯỜNG THPT EA H'LEO</h1>";
  html += "<div style='display:inline-block;padding:20px;border-radius:15px;background:#1e293b;'>";
  html += "<h2>Nhiệt độ: <span style='color:#facc15;'>" + String(temp, 1) + " °C</span></h2>";
  html += "<h2>Độ ẩm: <span style='color:#38bdf8;'>" + String(hum, 1) + " %</span></h2>";
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
  Serial.println("\nWiFi connected! IP address: ");
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
      title: "Ứng Dụng AI Thị Giác Máy Tính: Nhận Diện Cử Chỉ Tay Điều Khiển Máy Tính",
      description: "Chuyên đề Tin học 11 - 12: Sử dụng thư viện MediaPipe và OpenCV để đếm số ngón tay và điều khiển âm lượng bằng cử chỉ.",
      difficulty: "Chuyên đề AI",
      hardware: ["Máy tính có Webcam", "Môi trường Python 3.10+", "Cài đặt thư viện: pip install opencv-python mediapipe"],
      wiringGuide: "Không yêu cầu phần cứng mạch - Chạy trực tiếp trên máy tính thực hành",
      diagramImage: "assets/images/circuit-arduino.svg",
      codeSnippet: `# ====================================================
# DỰ ÁN STEM TIN HỌC: NHẬN DIỆN CỬ CHỈ BÀN TAY (AI)
# Giáo viên hướng dẫn: Thầy Nguyễn Văn Cường
# ====================================================
import cv2
import mediapipe as mp

mp_hands = mp.solutions.hands
mp_draw = mp.solutions.drawing_utils

hands = mp_hands.Hands(max_num_hands=1, min_detection_confidence=0.7)
cap = cv2.VideoCapture(0)

print("Học sinh THPT Ea H'leo - Bấm phím 'q' trên bàn phím để thoát chương trình.")

while cap.isOpened():
    success, img = cap.read()
    if not success:
        break
        
    img = cv2.flip(img, 1) # Lật ảnh gương
    rgb_img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    results = hands.process(rgb_img)
    
    if results.multi_hand_landmarks:
        for hand_lms in results.multi_hand_landmarks:
            mp_draw.draw_landmarks(img, hand_lms, mp_hands.HAND_CONNECTIONS)
            
            # Đếm tọa độ đầu ngón tay cái & ngón trỏ
            thumb_tip = hand_lms.landmark[4]
            index_tip = hand_lms.landmark[8]
            cv2.putText(img, "Hand Detected: OK", (20, 50), 
                        cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
            
    cv2.imshow("Nhan Dien Cu Chi Ban Tay - THPT Ea H'leo", img)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()`
    }
  ]
};
