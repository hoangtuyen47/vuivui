/**
 * PORTFOLIO DATA HUB - THẦY HOÀNG NGỌC TUYÊN
 * Website Cá Nhân: Giải Pháp Giáo Dục Số, Đào Tạo Kỹ Năng & Kho Học Liệu STEM
 * Cập nhật cấu trúc kho học liệu chuẩn theo giáo trình thực tế năm học 2026 - 2027
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

  // Thông tin tác giả & Giáo viên (Cá nhân Thầy Hoàng Ngọc Tuyên)
  profile: {
    fullName: "Thầy Hoàng Ngọc Tuyên",
    title: "Chuyên Gia Chuyển Đổi Số & Đào Tạo STEM",
    role: "Giáo viên Tin học • Giảng viên Kỹ năng số & STEM Robotics",
    bio: "Chào mừng quý thầy cô, phụ huynh và các em học sinh! Trang thông tin cá nhân tổng hợp các giải pháp công nghệ giáo dục, khóa đào tạo kỹ năng số và kho học liệu STEM thực hành.",
    avatar: "assets/images/teacher-avatar.svg",
    contacts: {
      phone: "0912.345.xxx",
      phoneCall: "tel:0912345678",
      zalo: "https://zalo.me",
      facebook: "https://facebook.com",
      youtube: "https://youtube.com",
      tiktok: "https://tiktok.com",
      email: "hoangtuyen.tech@gmail.com",
      location: "Đắk Lắk, Việt Nam"
    }
  },

  // Danh sách các khóa học đang tổ chức (Cột trái - Chuẩn theo giáo trình thực tế)
  classes: [
    {
      id: "class-digital-skills",
      title: "Lớp Kỹ Năng Số & Công Nghệ AI Ứng Dụng",
      badge: "Kỹ năng số",
      badgeColor: "emerald",
      image: "assets/images/class-digital-skills.png",
      target: "Học sinh THCS & THPT",
      highlights: [
        "Thám tử AI: Dạy máy học Teachable Machine nhận diện đồ vật và phân tích dữ liệu",
        "Bộ công cụ Google Workspace (Drive, Docs, Sheets) chuẩn hóa quy trình khoa học",
        "Đóng vai Kỹ sư phần mềm: Tự làm App POS bán hàng & Tra cứu bệnh án bằng Apps Script",
        "Thiết kế đồ họa Canva & Dựng trailer video ngắn thuyết trình sản phẩm"
      ],
      schedule: "Tối Thứ 3 - Thứ 5 hoặc Chiều Thứ 7",
      status: "Đang tuyển sinh",
      registerLink: "https://zalo.me"
    },
    {
      id: "class-stem-arduino",
      title: "Lớp STEM Robotics & Nhập Môn Điện Tử L298N",
      badge: "STEM Cơ bản",
      badgeColor: "amber",
      image: "assets/images/class-stem-arduino.png",
      target: "Học sinh yêu thích lắp ráp & mạch điện tử",
      highlights: [
        "Mô hình trực quan 'Ngôn ngữ của điện': Làm chủ Volt, Ampe, Watt và nguồn pin an toàn",
        "Kỹ thuật điều khiển mạch cầu H L298N & điều xung tốc độ PWM cho động cơ",
        "Tư duy lập trình C++ tinh gọn: Kỹ thuật đóng gói hàm (Function) có tham số dễ hiểu",
        "Tự tay chế tạo xe robot tự hành tránh vật cản kết hợp cảm biến siêu âm HC-SR04"
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
      target: "Học sinh định hướng KHKT & Lập trình IoT",
      highlights: [
        "Lập trình vi điều khiển ESP32 đa nhân kết nối Wi-Fi & Bluetooth tốc độ cao",
        "Đồng bộ dữ liệu hai chiều Cloud Firebase (chế độ Tự động & Chỉnh tay thời gian thực)",
        "Tự thiết kế Web Dashboard & Xuất bản trang điều khiển lên Internet bằng GitHub Pages",
        "Hệ thống âm thanh số I2S (MAX98357A) phát nhạc trực tuyến & Hướng dẫn đề tài KHKT"
      ],
      schedule: "Chiều Chủ Nhật hàng tuần",
      status: "Đang tuyển sinh",
      registerLink: "https://zalo.me"
    }
  ],

  // 6 Hệ thống công nghệ đã triển khai (Nhóm trên cột phải - Tối ưu hình ảnh, ngắn gọn)
  systems: [
    {
      id: "ne-nep",
      title: "Hệ Thống Quản Lý Nề Nếp & Thi Đua Học Đường",
      badge: "Đang vận hành",
      badgeColor: "red",
      image: "assets/images/dashboard-school.png",
      features: [
        "Chấm điểm thi đua trực tuyến thời gian thực (Real-time)",
        "Tự động tính bảng xếp hạng tuần/tháng từng khối lớp học",
        "Quét mã QR học sinh, ghi nhận vi phạm kèm ảnh minh chứng",
        "Xuất báo cáo tổng kết thi đua PDF/Excel chuẩn hóa"
      ],
      demoLink: "https://script.google.com/macros/s/AKfycbxLKgD3-0YyeMnq00ZdT1j8o5wv0VqAI6W0uVsuaYWbBTZbgaVKMh3Y7qiQPn7fUWDN/exec",
      registerLink: "https://zalo.me",
      demoAccount: { user: "admin", pass: "nenhiep@2026" }
    },
    {
      id: "xep-lich-thi-2-2",
      title: "Xếp Lịch Thi Thử Tốt Nghiệp (Phương Án 2 + 2)",
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
      title: "Trợ Lý Tạo Đề Thi & Khảo Thí Trực Tuyến (Aura)",
      badge: "Khảo thí AI",
      badgeColor: "blue",
      image: "assets/images/thi-thu-aura.png",
      features: [
        "Soạn ma trận đặc tả đề kiểm tra chuẩn quy cách giáo dục",
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
        "Xoay 360 độ board mạch Arduino Uno, ESP32, cảm biến và linh kiện",
        "Mô phỏng nối dây ảo trực tiếp trên web không cần cài phần mềm",
        "Mô phỏng tháo lắp phần cứng máy tính PC trực quan",
        "Trợ lý AI giải thích công dụng từng chân GPIO và nguyên lý mạch"
      ],
      demoLink: "https://script.google.com/macros/s/AKfycbz_3d_arduino_sample/exec",
      registerLink: "https://zalo.me",
      demoAccount: { user: "Mở trực tiếp", pass: "Không cần tài khoản" }
    }
  ],

  // Kho học liệu số & Dự án STEM thực hành (Chuẩn theo giáo trình 2026 - 2027)
  studentLibrary: [
    {
      id: "lib-teachable-ai-ambassador",
      category: "Module 1: Trí Tuệ Nhân Tạo (AI)",
      badge: "Teachable Machine",
      image: "assets/images/lib-teachable-ai.svg",
      title: "Dự Án: Mô Hình AI 'Đại Sứ Xanh' Phân Loại Rác Thông Minh",
      description: "Huấn luyện mô hình học máy (Machine Learning) nhận diện rác thải (nhựa, giấy, kim loại) qua webcam và tự động ghi nhật ký kiểm thử vào Google Sheets.",
      hardware: ["Máy tính có Webcam", "Google Teachable Machine", "Google Drive & Sheets"],
      wiringGuide: "Khai thác API Teachable Machine trên nền tảng Web không cần cài đặt",
      diagramImage: "assets/images/circuit-arduino.svg",
      codeSnippet: `// ==========================================
// DỰ ÁN AI: ĐẠI SỨ XANH - PHÂN LOẠI RÁC
// Tác giả: Thầy Hoàng Ngọc Tuyên
// ==========================================

const URL = "https://teachablemachine.withgoogle.com/models/YOUR_MODEL_ID/";
let model, webcam, labelContainer, maxPredictions;

async function initAI() {
  const modelURL = URL + "model.json";
  const metadataURL = URL + "metadata.json";

  model = await tmImage.load(modelURL, metadataURL);
  maxPredictions = model.getTotalClasses();

  // Khởi động Webcam
  webcam = new tmImage.Webcam(320, 240, true);
  await webcam.setup();
  await webcam.play();
  window.requestAnimationFrame(loopAI);
}

async function loopAI() {
  webcam.update();
  await predict();
  window.requestAnimationFrame(loopAI);
}

async function predict() {
  const prediction = await model.predict(webcam.canvas);
  for (let i = 0; i < maxPredictions; i++) {
    const classPrediction = 
      prediction[i].className + ": " + (prediction[i].probability * 100).toFixed(1) + "%";
    console.log(classPrediction);
  }
}`
    },
    {
      id: "lib-l298n-motor-control",
      category: "Module 2: Điện Tử & Động Cơ",
      badge: "L298N & C++",
      image: "assets/images/lib-l298n-motor.svg",
      title: "Dự Án: Điều Khiển Động Cơ Cầu H L298N & Tư Duy Đóng Gói Hàm",
      description: "Làm chủ 'ngôn ngữ của điện' (Volt, Ampe, Watt), điều xung PWM điều khiển tốc độ và đóng gói hàm di chuyển (tiến, lùi, quay) không dùng vòng lặp phức tạp.",
      hardware: ["Vi điều khiển Arduino/ESP32", "Module Cầu H L298N", "2x Động cơ giảm tốc vàng DC", "Nguồn Pin 18650 7.4V"],
      wiringGuide: "L298N: ENA->D5, IN1->D6, IN2->D7, IN3->D8, IN4->D9, ENB->D10 | VIN->Pin (+), GND->Pin (-)",
      diagramImage: "assets/images/circuit-arduino.svg",
      codeSnippet: `// ==========================================
// ĐIỀU KHIỂN CẦU H L298N & ĐÓNG GÓI HÀM C++
// Tác giả: Thầy Hoàng Ngọc Tuyên
// ==========================================
#include <Arduino.h>

const int IN1 = 6;
const int IN2 = 7;
const int IN3 = 8;
const int IN4 = 9;

// 1. Hàm xe chạy tiến
void diTien(int tocDo) {
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);
}

// 2. Hàm xe quay phải
void ranhPhai() {
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, HIGH);
}

// 3. Hàm dừng xe an toàn
void dungXe() {
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, LOW);
}

void setup() {
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
  pinMode(IN3, OUTPUT);
  pinMode(IN4, OUTPUT);
}

void loop() {
  diTien(200);   delay(2000); // Chạy tiến 2s
  ranhPhai();    delay(800);  // Rẽ phải 0.8s
  dungXe();      delay(1500); // Nghỉ 1.5s
}`
    },
    {
      id: "lib-esp32-weather-lcd",
      category: "Module 3: Cảm Biến & Tự Động Hóa",
      badge: "ESP32 + LCD I2C",
      image: "assets/images/lib-esp32-weather.svg",
      title: "Dự Án: Trạm Đo Nhiệt Độ - Độ Ẩm LCD I2C & Báo Cháy Khẩn Cấp",
      description: "Đọc dữ liệu thời gian thực từ cảm biến DHT11 xuất ra màn hình LCD 1602 giao tiếp I2C; tự động kích hoạt còi báo động khi cảm biến lửa phát hiện nguy cơ.",
      hardware: ["Board ESP32 NodeMCU", "Cảm biến DHT11", "Màn hình LCD 1602 kèm Module I2C", "Cảm biến lửa Flame Sensor", "Còi Buzzer"],
      wiringGuide: "DHT11->GPIO 4 | LCD SDA->GPIO 21, SCL->GPIO 22 | Cảm biến lửa DO->GPIO 15 | Buzzer->GPIO 2",
      diagramImage: "assets/images/circuit-arduino.svg",
      codeSnippet: `// ==========================================
// TRẠM QUAN TRẮC MÔI TRƯỜNG & BÁO CHÁY ESP32
// Tác giả: Thầy Hoàng Ngọc Tuyên
// ==========================================
#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <DHT.h>

#define DHTPIN 4
#define DHTTYPE DHT11
#define FLAME_PIN 15
#define BUZZER_PIN 2

LiquidCrystal_I2C lcd(0x27, 16, 2);
DHT dht(DHTPIN, DHTTYPE);

void setup() {
  lcd.init();
  lcd.backlight();
  dht.begin();
  pinMode(FLAME_PIN, INPUT);
  pinMode(BUZZER_PIN, OUTPUT);
}

void loop() {
  float temp = dht.readTemperature();
  float hum = dht.readHumidity();
  bool hasFire = (digitalRead(FLAME_PIN) == LOW);

  // Hiển thị thông số lên LCD
  lcd.setCursor(0, 0);
  lcd.print("Nhiet do: "); lcd.print(temp, 1); lcd.print("C");
  lcd.setCursor(0, 1);
  lcd.print("Do am:    "); lcd.print(hum, 0); lcd.print("% ");

  // Xử lý báo cháy
  if (hasFire) {
    digitalWrite(BUZZER_PIN, HIGH);
    lcd.setCursor(12, 1); lcd.print("CHAY");
  } else {
    digitalWrite(BUZZER_PIN, LOW);
  }
  delay(1000);
}`
    },
    {
      id: "lib-i2s-audio-esp32",
      category: "Module 4: Âm Thanh Số & IoT",
      badge: "I2S Audio DAC",
      image: "assets/images/lib-i2s-audio.svg",
      title: "Dự Án: Máy Phát Nhạc & Thông Báo Giọng Nói Số Qua Internet (I2S DAC)",
      description: "Ứng dụng giao thức I2S kết hợp bộ giải mã DAC MAX98357A và vi điều khiển ESP32 để phát file nhạc MP3 chất lượng cao trực tiếp từ URL Internet.",
      hardware: ["ESP32 NodeMCU", "Module DAC MAX98357A", "Loa 4Ω 3W", "Cáp micro USB", "Nguồn 5V"],
      wiringGuide: "MAX98357A: LRC->GPIO 25, BCLK->GPIO 26, DIN->GPIO 22, GND->GND, VIN->5V",
      diagramImage: "assets/images/circuit-arduino.svg",
      codeSnippet: `// ==========================================
// HỆ THỐNG ÂM THANH SỐ I2S ESP32 (MAX98357A)
// Tác giả: Thầy Hoàng Ngọc Tuyên
// Thư viện: schreibfaul1/ESP32-audioI2S
// ==========================================
#include <WiFi.h>
#include "Audio.h"

// Định nghĩa chân I2S
#define I2S_DOUT 22
#define I2S_BCLK 26
#define I2S_LRC  25

Audio audio;

void setup() {
  Serial.begin(115200);
  WiFi.begin("YOUR_WIFI_SSID", "YOUR_WIFI_PASS");
  while (WiFi.status() != WL_CONNECTED) delay(500);

  // Cấu hình chân I2S và âm lượng (0-21)
  audio.setPinout(I2S_BCLK, I2S_LRC, I2S_DOUT);
  audio.setVolume(15);

  // Phát file âm thanh trực tuyến
  audio.connecttohost("https://example.com/audio/thong-bao-stem.mp3");
}

void loop() {
  audio.loop();
}`
    },
    {
      id: "lib-smart-trash-servo",
      category: "Module 5: Cơ Điện Tử Thực Hành",
      badge: "HC-SR04 + Servo",
      image: "assets/images/lib-smart-trash.svg",
      title: "Dự Án: Thùng Rác Thông Minh Tự Mở Nắp (HC-SR04 & Động Cơ Servo)",
      description: "Đo khoảng cách bàn tay tiếp cận dưới 20cm bằng sóng siêu âm, tự động điều khiển Servo góc 90 độ mở nắp và tự đóng nhẹ nhàng sau 3 giây.",
      hardware: ["Arduino Nano/Uno", "Cảm biến siêu âm HC-SR04", "Động cơ Servo SG90", "Nguồn 5V"],
      wiringGuide: "HC-SR04: VCC->5V, GND->GND, Trig->Pin 9, Echo->Pin 10 | Servo Signal->Pin 6",
      diagramImage: "assets/images/circuit-arduino.svg",
      codeSnippet: `// ==========================================
// THÙNG RÁC THÔNG MINH TỰ ĐỘNG MỞ NẮP
// Tác giả: Thầy Hoàng Ngọc Tuyên
// ==========================================
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
  lidServo.write(0); // Đóng nắp ban đầu
}

void loop() {
  long d = getDistance();
  // Nếu phát hiện tay gần dưới 20cm
  if (d > 0 && d < 20) {
    lidServo.write(90);  // Mở nắp
    delay(3000);         // Giữ mở 3 giây
    lidServo.write(0);   // Đóng lại
    delay(1000);
  }
  delay(150);
}`
    },
    {
      id: "lib-traffic-light-system",
      category: "Module 6: Thuật Toán & Hệ Thống",
      badge: "Arduino C++",
      image: "assets/images/lib-traffic-light.svg",
      title: "Dự Án: Đèn Giao Thông Thông Minh & Nút Bấm Người Đi Bộ",
      description: "Ứng dụng ngắt phần cứng (Hardware Interrupt) và thuật toán phân luồng giao thông ưu tiên người đi bộ qua đường an toàn.",
      hardware: ["Arduino Uno R3", "3x LED (Đỏ, Vàng, Xanh)", "3x Điện trở 220Ω", "1x Nút bấm", "Breadboard"],
      wiringGuide: "LED Đỏ -> Pin 11 | LED Vàng -> Pin 12 | LED Xanh -> Pin 13 | Nút bấm -> Pin 2 (Interrupt 0)",
      diagramImage: "assets/images/circuit-arduino.svg",
      codeSnippet: `// ==========================================
// DỰ ÁN STEM: ĐÈN GIAO THÔNG THÔNG MINH
// Tác giả: Thầy Hoàng Ngọc Tuyên
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
  setLights(HIGH, LOW, LOW); delay(6000); // Cho người đi bộ qua đường an toàn
}`
    }
  ]
};
