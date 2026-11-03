/**
 * PORTFOLIO DATA HUB - TRƯỜNG THPT EA H'LEO
 * Bố cục 2 Cột: Cột trái (Tác giả + Các lớp học) | Cột phải (Công cụ + Kho học liệu)
 */

const PORTFOLIO_DATA = {
  // Cấu hình bảo mật Admin (Thầy có thể đổi trong giao diện hoặc đổi trực tiếp tại đây)
  adminPin: "admin123",

  // Cấu hình Banner 1920 x 250 (Một bên logo, một bên banner nhỏ)
  banner: {
    logoImage: "assets/images/header-logo.png",
    subBannerImage: "assets/images/sub-banner.png",
    heightDesktop: 250,
    widthMax: 1920
  },

  // Thông tin tác giả & Giáo viên
  profile: {
    fullName: "Thầy Hoàng Ngọc Tuyên",
    school: "Trường THPT Ea H'leo",
    dept: "Sở Giáo dục và Đào tạo Đắk Lắk",
    address: "31 Điện Biên Phủ, Thị trấn Ea Drăng, Huyện Ea H'leo, Tỉnh Đắk Lắk",
    role: "Giáo viên Tin học • Phụ trách Chuyển đổi số & STEM",
    bio: "Chào mừng quý thầy cô, phụ huynh và các em học sinh! Trang thông tin tổng hợp các giải pháp công nghệ giáo dục, các lớp đào tạo kỹ năng số và kho học liệu STEM thực hành.",
    avatar: "assets/images/teacher-avatar.svg",
    contacts: {
      phone: "0912.345.xxx",
      phoneCall: "tel:0912345678",
      zalo: "https://zalo.me",
      facebook: "https://facebook.com",
      youtube: "https://youtube.com",
      tiktok: "https://tiktok.com",
      email: "hoangtuyen.eahleo@gmail.com",
      schoolWeb: "http://c3eahleo.daklak.edu.vn"
    }
  },

  // Danh sách các lớp học đang tổ chức (Cột trái)
  classes: [
    {
      id: "class-digital-skills",
      title: "Lớp Kỹ Năng Số & Tin Học Ứng Dụng",
      badge: "Kỹ năng số",
      badgeColor: "emerald",
      image: "assets/images/class-digital-skills.png",
      target: "Học sinh THCS & THPT",
      highlights: [
        "Làm chủ Word, Excel, PowerPoint chuẩn học thuật và thi chứng chỉ",
        "Khai thác công cụ AI (Gemini, ChatGPT) hỗ trợ giải bài tập & tự học",
        "Thiết kế đồ họa Canva, dựng video ngắn thuyết trình chuyên nghiệp",
        "Kỹ năng an toàn thông tin & văn hóa ứng xử trên không gian mạng"
      ],
      schedule: "Tối Thứ 3 - Thứ 5 hoặc Chiều Thứ 7",
      status: "Đang tuyển sinh",
      registerLink: "https://zalo.me"
    },
    {
      id: "class-stem-arduino",
      title: "Lớp STEM Robotics & Lập Trình Arduino",
      badge: "STEM Cơ bản",
      badgeColor: "amber",
      image: "assets/images/class-stem-arduino.png",
      target: "Học sinh yêu thích lắp ráp & phần cứng",
      highlights: [
        "Làm quen mạch vi điều khiển Arduino Uno R3, breadboard & linh kiện",
        "Lập trình điều khiển đèn LED, còi báo, động cơ Servo và cảm biến",
        "Tự tay chế tạo dự án: Đèn giao thông, thùng rác thông minh, xe tránh vật cản",
        "Rèn luyện tư duy thuật toán logic và giải quyết vấn đề thực tế"
      ],
      schedule: "Chiều Thứ 7 & Sáng Chủ Nhật",
      status: "Đang tuyển sinh",
      registerLink: "https://zalo.me"
    },
    {
      id: "class-stem-esp32",
      title: "Lớp STEM IoT & Lập Trình ESP32 Nâng Cao",
      badge: "STEM Nâng cao",
      badgeColor: "blue",
      image: "assets/images/class-stem-esp32.svg",
      target: "Học sinh định hướng KHKT & Công nghệ",
      highlights: [
        "Lập trình vi điều khiển ESP32 hỗ trợ kết nối Wi-Fi & Bluetooth",
        "Điều khiển thiết bị qua Internet, kết nối App di động và Web Dashboard",
        "Xây dựng trạm quan trắc thời tiết, hệ thống tưới cây tự động (Smart Farm)",
        "Hỗ trợ hướng dẫn đề tài tham gia Cuộc thi Khoa học Kỹ thuật (KHKT)"
      ],
      schedule: "Chiều Chủ Nhật hàng tuần",
      status: "Đang tuyển sinh",
      registerLink: "https://zalo.me"
    }
  ],

  // 6 Hệ thống đã triển khai (Nhóm trên cột phải - Tối ưu hình ảnh, ngắn gọn)
  systems: [
    {
      id: "ne-nep",
      title: "Hệ Thống Quản Lý Nề Nếp & Thi Đua",
      badge: "Đang vận hành",
      badgeColor: "red",
      image: "assets/images/dashboard-school.png",
      features: [
        "Chấm điểm thi đua trực tuyến thời gian thực (Real-time)",
        "Tự động tính bảng xếp hạng tuần/tháng từng khối lớp 10, 11, 12",
        "Quét mã QR học sinh, ghi nhận vi phạm kèm ảnh minh chứng",
        "Xuất báo cáo tổng kết thi đua PDF/Excel chuẩn Bộ GD&ĐT"
      ],
      demoLink: "https://script.google.com/macros/s/AKfycbxLKgD3-0YyeMnq00ZdT1j8o5wv0VqAI6W0uVsuaYWbBTZbgaVKMh3Y7qiQPn7fUWDN/exec",
      registerLink: "https://zalo.me",
      demoAccount: { user: "admin", pass: "nenhiep@2026" }
    },
    {
      id: "xep-lich-thi-2-2",
      title: "Xếp Lịch Thi Thử Tốt Nghiệp (2 + 2)",
      badge: "Thuật toán AI",
      badgeColor: "amber",
      image: "assets/images/exam-schedule.svg",
      features: [
        "Giải bài toán phân ca thi chống trùng lịch 100% môn tự chọn",
        "Tối ưu số phòng thi tối thiểu, tiết kiệm giám thị coi thi",
        "Đánh số báo danh tự động, cân đối sĩ số chuẩn 24 thí sinh/phòng",
        "Xuất file Word & Excel 1-click: DS phòng thi, phiếu thu bài"
      ],
      demoLink: "https://script.google.com/macros/s/AKfycbz_xeplich22_sample/exec",
      registerLink: "https://zalo.me",
      demoAccount: { user: "khaothi", pass: "khaothi@2+2" }
    },
    {
      id: "aura-exam-online",
      title: "Trợ Lý Tạo Đề Thi & Khảo Thí Online (Aura)",
      badge: "Khảo thí AI",
      badgeColor: "blue",
      image: "assets/images/thi-thu-aura.png",
      features: [
        "Soạn ma trận đặc tả đề kiểm tra chuẩn GDPT 2018",
        "Trộn tự động 4 - 8 mã đề, hoán vị câu hỏi và đáp án thông minh",
        "Bảo toàn nguyên vẹn công thức Toán KaTeX và hình vẽ kỹ thuật",
        "Phòng thi trực tuyến giám sát chống chuyển tab và gian lận"
      ],
      demoLink: "https://script.google.com/macros/s/AKfycbz_aura_sample/exec",
      registerLink: "https://zalo.me",
      demoAccount: { user: "teacher_tin", pass: "aura@exam2026" }
    },
    {
      id: "ho-so-giao-an-5512",
      title: "Trợ Lý Hồ Sơ Giáo Án Điện Tử (Chuẩn 5512)",
      badge: "Chuẩn Bộ GD",
      badgeColor: "emerald",
      image: "assets/images/hoso-giao-an.svg",
      features: [
        "Tự động xuất Phụ lục 1, 2, 3, 4 chuẩn Công văn 5512/BGDĐT",
        "Kho kế hoạch bài dạy môn Tin học 10, 11, 12 chuẩn mục tiêu phẩm chất",
        "Đồng bộ hai chiều trực tiếp với thư mục Google Drive của tổ",
        "Ký duyệt giáo án số nội bộ và nhận xét chuyên môn trực tuyến"
      ],
      demoLink: "https://script.google.com/macros/s/AKfycbz_hoso5512_sample/exec",
      registerLink: "https://zalo.me",
      demoAccount: { user: "totruong_tin", pass: "hoso@5512" }
    },
    {
      id: "diem-danh-hoc-phi",
      title: "Điểm Danh & Tính Học Phí Lớp Dạy Thêm",
      badge: "Tự động hóa",
      badgeColor: "red",
      image: "assets/images/diem-danh-stem.png",
      features: [
        "Điểm danh học sinh bằng quét mã QR thẻ hoặc 1 chạm di động",
        "Tự động tính học phí theo đúng số buổi thực tế (trừ nghỉ phép)",
        "Gửi thông báo điểm danh và báo cáo học phí qua Zalo phụ huynh",
        "Tự động sinh phiếu báo kèm mã QR chuyển khoản VietQR"
      ],
      demoLink: "https://script.google.com/macros/s/AKfycbz_diemdanh_sample/exec",
      registerLink: "https://zalo.me",
      demoAccount: { user: "admin_class", pass: "hocphi@2026" }
    },
    {
      id: "mo-hinh-3d-arduino",
      title: "Mô Hình 3D Trực Quan Dạy Học STEM",
      badge: "WebGL 3D",
      badgeColor: "blue",
      image: "assets/images/model-3d.svg",
      features: [
        "Xoay 360 độ board mạch Arduino Uno, cảm biến, pin và linh kiện",
        "Mô phỏng nối dây ảo trực tiếp trên web không cần cài phần mềm",
        "Mô phỏng tháo lắp phần cứng máy tính PC cho học sinh lớp 10, 11",
        "Trợ lý AI giải thích công dụng từng chân GPIO và nguyên lý mạch"
      ],
      demoLink: "https://script.google.com/macros/s/AKfycbz_3d_arduino_sample/exec",
      registerLink: "https://zalo.me",
      demoAccount: { user: "Mở trực tiếp", pass: "Không cần tài khoản" }
    }
  ],

  // Kho học liệu số & Dự án STEM thực hành (Nhóm dưới cột phải - Có ảnh minh họa)
  studentLibrary: [
    {
      id: "lib-traffic-light",
      category: "Module 1: Arduino Cơ Bản",
      badge: "Arduino C++",
      image: "assets/images/lib-traffic-light.svg",
      title: "Dự Án: Đèn Giao Thông Thông Minh & Nút Bấm Người Đi Bộ",
      description: "Ứng dụng ngắt phần cứng (Interrupt) và thuật toán phân luồng giao thông ưu tiên người đi bộ qua đường an toàn.",
      hardware: ["Arduino Uno R3", "3x LED (Đỏ, Vàng, Xanh)", "3x Điện trở 220Ω", "1x Nút bấm", "Breadboard"],
      wiringGuide: "LED Đỏ -> Pin 11 | LED Vàng -> Pin 12 | LED Xanh -> Pin 13 | Nút bấm -> Pin 2 (Interrupt 0)",
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
  attachInterrupt(digitalPinToInterrupt(buttonPin), requestCrossing, FALLING);
}

void loop() {
  if (pedestrianRequest) {
    handlePedestrian();
    pedestrianRequest = false;
  }
  setLights(LOW, LOW, HIGH); delay(5000); // Xanh
  setLights(LOW, HIGH, LOW); delay(2000); // Vàng
  setLights(HIGH, LOW, LOW); delay(5000); // Đỏ
}

void setLights(int r, int y, int g) {
  digitalWrite(redPin, r);
  digitalWrite(yellowPin, y);
  digitalWrite(greenPin, g);
}

void requestCrossing() {
  pedestrianRequest = true;
}

void handlePedestrian() {
  setLights(LOW, HIGH, LOW); delay(1500);
  setLights(HIGH, LOW, LOW); delay(6000); // Cho người đi bộ qua
}`
    },
    {
      id: "lib-smart-trash-bin",
      category: "Module 2: Động Cơ & Cảm Biến",
      badge: "Arduino + Servo",
      image: "assets/images/lib-smart-trash.svg",
      title: "Dự Án: Thùng Rác Thông Minh Tự Mở Nắp (HC-SR04 + Servo)",
      description: "Đo khoảng cách bàn tay tiếp cận dưới 20cm, tự động điều khiển Servo quay góc 90 độ mở nắp và tự đóng sau 3 giây.",
      hardware: ["Arduino Nano/Uno", "Cảm biến siêu âm HC-SR04", "Động cơ Servo SG90", "Nguồn 5V"],
      wiringGuide: "HC-SR04 VCC->5V, GND->GND, Trig->Pin 9, Echo->Pin 10 | Servo Signal->Pin 6",
      diagramImage: "assets/images/circuit-arduino.svg",
      codeSnippet: `// THÙNG RÁC THÔNG MINH - THPT EA H'LEO
#include <Servo.h>

const int trigPin = 9;
const int echoPin = 10;
const int servoPin = 6;
Servo lidServo;

long getDistance() {
  digitalWrite(trigPin, LOW); delayMicroseconds(2);
  digitalWrite(trigPin, HIGH); delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  return pulseIn(echoPin, HIGH) * 0.034 / 2;
}

void setup() {
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  lidServo.attach(servoPin);
  lidServo.write(0);
}

void loop() {
  long d = getDistance();
  if (d > 0 && d < 20) {
    lidServo.write(90); delay(3000);
    lidServo.write(0); delay(1000);
  }
  delay(150);
}`
    },
    {
      id: "lib-esp32-iot",
      category: "Module 3: Internet of Things",
      badge: "ESP32 IoT",
      image: "assets/images/lib-esp32-weather.svg",
      title: "Dự Án: Trạm Quan Trắc Nhiệt Độ - Độ Ẩm Môi Trường ESP32",
      description: "Đo nhiệt độ, độ ẩm phòng học và phát sóng Wi-Fi Web Server để xem thông số trực tiếp trên điện thoại học sinh.",
      hardware: ["Board ESP32 NodeMCU", "Cảm biến DHT11", "Màn hình OLED I2C", "Cáp micro USB"],
      wiringGuide: "DHT11 Data->GPIO 4 | OLED SDA->GPIO 21, SCL->GPIO 22 | VCC->3.3V, GND->GND",
      diagramImage: "assets/images/circuit-arduino.svg",
      codeSnippet: `// ESP32 WEATHER STATION - THPT EA H'LEO
#include <WiFi.h>
#include <WebServer.h>
#include <DHT.h>

#define DHTPIN 4
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);
WebServer server(80);

void handleRoot() {
  float t = dht.readTemperature();
  float h = dht.readHumidity();
  String s = "<h1>TRẠM THỜI TIẾT STEM EA H'LEO</h1>";
  s += "<p>Nhiet do: " + String(t, 1) + " C</p>";
  s += "<p>Do am: " + String(h, 1) + " %</p>";
  server.send(200, "text/html", s);
}

void setup() {
  dht.begin();
  WiFi.begin("THPT_EAHLEO_WIFI", "Password@2026");
  while (WiFi.status() != WL_CONNECTED) delay(500);
  server.on("/", handleRoot);
  server.begin();
}

void loop() {
  server.handleClient();
}`
    },
    {
      id: "lib-python-cv-ai",
      category: "Module 4: Trí Tuệ Nhân Tạo (AI)",
      badge: "Python OpenCV",
      image: "assets/images/lib-python-ai.svg",
      title: "Dự Án: Ứng Dụng AI Thị Giác Máy Tính Nhận Diện Cử Chỉ Tay",
      description: "Chuyên đề Tin học AI: Sử dụng MediaPipe định vị 21 khớp bàn tay và điều khiển ứng dụng không cần chuột chạm.",
      hardware: ["Máy tính có Webcam", "Python 3.10+", "Thư viện: opencv-python, mediapipe"],
      wiringGuide: "Chạy trực tiếp trên máy vi tính phòng máy trường THPT Ea H'leo",
      diagramImage: "assets/images/circuit-arduino.svg",
      codeSnippet: `# NHẬN DIỆN CỬ CHỈ TAY BẰNG AI - THPT EA H'LEO
import cv2
import mediapipe as mp

mp_hands = mp.solutions.hands
hands = mp_hands.Hands(max_num_hands=1)
mp_draw = mp.solutions.drawing_utils
cap = cv2.VideoCapture(0)

while cap.isOpened():
    success, img = cap.read()
    if not success: break
    img = cv2.flip(img, 1)
    res = hands.process(cv2.cvtColor(img, cv2.COLOR_BGR2RGB))
    if res.multi_hand_landmarks:
        for lms in res.multi_hand_landmarks:
            mp_draw.draw_landmarks(img, lms, mp_hands.HAND_CONNECTIONS)
            cv2.putText(img, "AI Hand Track: OK", (20, 50),
                        cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 200, 0), 2)
    cv2.imshow("AI Vision - THPT Ea H'leo", img)
    if cv2.waitKey(1) & 0xFF == ord('q'): break
cap.release()
cv2.destroyAllWindows()`
    }
  ]
};
