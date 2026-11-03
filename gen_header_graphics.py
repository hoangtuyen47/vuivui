"""Script to generate header-logo.svg and sub-banner.svg for the 1920x250 header banner."""
import os

images_dir = r"C:\Users\Admin\.gemini\antigravity\scratch\teacher_portfolio_hub\assets\images"
os.makedirs(images_dir, exist_ok=True)

header_logo_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 180" width="100%" height="100%">
  <defs>
    <filter id="logo-drop" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.35"/>
    </filter>
    <linearGradient id="gold-text-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="50%" stop-color="#fde047"/>
      <stop offset="100%" stop-color="#facc15"/>
    </linearGradient>
    <linearGradient id="crest-bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#0369a1"/>
    </linearGradient>
    <linearGradient id="crest-rim-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#b91c1c"/>
      <stop offset="100%" stop-color="#881337"/>
    </linearGradient>
  </defs>

  <!-- Left: Official School Crest (140x140) -->
  <g transform="translate(15, 20)" filter="url(#logo-drop)">
    <!-- Outer White Ring -->
    <circle cx="70" cy="70" r="68" fill="#ffffff" stroke="url(#crest-rim-grad)" stroke-width="5"/>
    <circle cx="70" cy="70" r="59" fill="none" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3 2"/>
    
    <!-- Inner Blue Disc -->
    <circle cx="70" cy="70" r="47" fill="url(#crest-bg-grad)"/>
    
    <!-- Open Book Symbol -->
    <path d="M 70,80 Q 56,71 37,73 Q 37,90 70,98 Q 103,90 103,73 Q 84,71 70,80 Z" fill="#ffffff"/>
    <path d="M 70,80 L 70,98" stroke="#0284c7" stroke-width="1.5"/>
    <line x1="43" y1="78" x2="66" y2="82" stroke="#cbd5e1" stroke-width="1"/>
    <line x1="43" y1="84" x2="66" y2="88" stroke="#cbd5e1" stroke-width="1"/>
    <line x1="74" y1="82" x2="97" y2="78" stroke="#cbd5e1" stroke-width="1"/>
    <line x1="74" y1="88" x2="97" y2="84" stroke="#cbd5e1" stroke-width="1"/>
    
    <!-- Flaming Torch of Knowledge -->
    <polygon points="70,36 66,58 74,58" fill="#facc15" stroke="#ca8a04" stroke-width="1"/>
    <path d="M 70,28 Q 78,38 74,48 Q 70,42 68,49 Q 63,41 70,28 Z" fill="#ef4444"/>
    <path d="M 70,33 Q 74,40 72,46 Q 70,42 70,33 Z" fill="#fde047"/>

    <!-- School Circular Typography -->
    <path id="crest-text-path" d="M 22,70 A 48,48 0 0,1 118,70" fill="none"/>
    <text font-family="'Be Vietnam Pro', Arial, sans-serif" font-size="8.5" font-weight="900" fill="#b91c1c" letter-spacing="1.2">
      <textPath href="#crest-text-path" startOffset="50%" text-anchor="middle">THPT EA H'LEO</textPath>
    </text>
  </g>

  <!-- Right: Header Titles & Slogan -->
  <g transform="translate(175, 42)" filter="url(#logo-drop)">
    <!-- Sub-header -->
    <text x="0" y="16" font-family="'Be Vietnam Pro', Arial, sans-serif" font-size="13" font-weight="700" fill="url(#gold-text-grad)" letter-spacing="1.5">
      SỞ GIÁO DỤC VÀ ĐÀO TẠO ĐẮK LẮK
    </text>
    
    <!-- Main School Name -->
    <text x="0" y="55" font-family="'Be Vietnam Pro', Arial, sans-serif" font-size="31" font-weight="900" fill="#ffffff" letter-spacing="0.5">
      TRƯỜNG THPT EA H'LEO
    </text>
    
    <!-- Pill Badge -->
    <g transform="translate(0, 72)">
      <rect x="0" y="0" width="370" height="28" rx="14" fill="rgba(0, 0, 0, 0.25)" stroke="rgba(255, 255, 255, 0.28)" stroke-width="1"/>
      <circle cx="14" cy="14" r="4.5" fill="#22c55e"/>
      <text x="27" y="18.5" font-family="'Be Vietnam Pro', Arial, sans-serif" font-size="11.5" font-weight="700" fill="#ffffff" letter-spacing="0.3">
        CỔNG TIỆN ÍCH CHUYỂN ĐỔI SỐ &amp; KHO HỌC LIỆU STEM
      </text>
    </g>
  </g>
</svg>"""

sub_banner_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 180" width="100%" height="100%">
  <defs>
    <filter id="sub-glow" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.3"/>
    </filter>
    <linearGradient id="card-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(255, 255, 255, 0.16)"/>
      <stop offset="100%" stop-color="rgba(255, 255, 255, 0.05)"/>
    </linearGradient>
    <linearGradient id="accent-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#0284c7"/>
    </linearGradient>
    <linearGradient id="accent-yellow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fde047"/>
      <stop offset="100%" stop-color="#eab308"/>
    </linearGradient>
  </defs>

  <!-- Modern Tech / STEM Illustration Card on Right -->
  <g transform="translate(10, 15)" filter="url(#sub-glow)">
    <!-- Translucent Frosted Glass Card -->
    <rect x="0" y="0" width="600" height="150" rx="16" fill="url(#card-grad)" stroke="rgba(255, 255, 255, 0.28)" stroke-width="1.2"/>
    
    <!-- Left of sub-banner: Decorative Tech Graphic (AI Brain / Circuit / Robot) -->
    <g transform="translate(25, 25)">
      <!-- Outer Hexagon / Chip frame -->
      <polygon points="50,5 95,28 95,74 50,97 5,74 5,28" fill="rgba(15, 23, 42, 0.45)" stroke="url(#accent-cyan)" stroke-width="2"/>
      <!-- Inner Glowing Core -->
      <circle cx="50" cy="51" r="22" fill="url(#accent-cyan)" opacity="0.85"/>
      <circle cx="50" cy="51" r="14" fill="#ffffff"/>
      <!-- Microcontroller pin lines -->
      <line x1="50" y1="5" x2="50" y2="-5" stroke="#38bdf8" stroke-width="2"/>
      <line x1="95" y1="28" x2="105" y2="23" stroke="#38bdf8" stroke-width="2"/>
      <line x1="95" y1="74" x2="105" y2="79" stroke="#38bdf8" stroke-width="2"/>
      <line x1="50" y1="97" x2="50" y2="107" stroke="#38bdf8" stroke-width="2"/>
      <line x1="5" y1="74" x2="-5" y2="79" stroke="#38bdf8" stroke-width="2"/>
      <line x1="5" y1="28" x2="-5" y2="23" stroke="#38bdf8" stroke-width="2"/>
      <!-- Small Sparkles -->
      <circle cx="-5" cy="23" r="3" fill="#fde047"/>
      <circle cx="105" cy="23" r="3" fill="#fde047"/>
      <circle cx="50" cy="-5" r="3" fill="#38bdf8"/>
    </g>

    <!-- Center/Right text in sub-banner -->
    <g transform="translate(150, 28)">
      <!-- Badge tags -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="85" height="22" rx="6" fill="#0284c7" fill-opacity="0.9"/>
        <text x="42.5" y="15" font-family="'Be Vietnam Pro', Arial, sans-serif" font-size="10.5" font-weight="800" fill="#ffffff" text-anchor="middle">
          AI &amp; STEM
        </text>
      </g>
      <g transform="translate(93, 0)">
        <rect x="0" y="0" width="115" height="22" rx="6" fill="#16a34a" fill-opacity="0.9"/>
        <text x="57.5" y="15" font-family="'Be Vietnam Pro', Arial, sans-serif" font-size="10.5" font-weight="800" fill="#ffffff" text-anchor="middle">
          EDTECH 4.0
        </text>
      </g>
      <g transform="translate(216, 0)">
        <rect x="0" y="0" width="95" height="22" rx="6" fill="#d97706" fill-opacity="0.9"/>
        <text x="47.5" y="15" font-family="'Be Vietnam Pro', Arial, sans-serif" font-size="10.5" font-weight="800" fill="#ffffff" text-anchor="middle">
          2026 - 2027
        </text>
      </g>

      <!-- Slogan Headline -->
      <text x="0" y="48" font-family="'Be Vietnam Pro', Arial, sans-serif" font-size="18" font-weight="900" fill="#ffffff" letter-spacing="0.5">
        CÔNG NGHỆ DẪN LỐI • SÁNG TẠO TƯƠNG LAI
      </text>

      <!-- Subline description -->
      <text x="0" y="70" font-family="'Be Vietnam Pro', Arial, sans-serif" font-size="12" font-weight="500" fill="rgba(255, 255, 255, 0.9)">
        Kho giải pháp quản trị giáo dục, thi trực tuyến &amp; học liệu lập trình
      </text>
      <text x="0" y="88" font-family="'Be Vietnam Pro', Arial, sans-serif" font-size="11.5" font-weight="700" fill="url(#accent-yellow)">
        Phát triển bởi Thầy Hoàng Ngọc Tuyên • THPT Ea H'leo
      </text>
    </g>
  </g>
</svg>"""

with open(os.path.join(images_dir, "header-logo.svg"), "w", encoding="utf-8") as f:
    f.write(header_logo_svg)

with open(os.path.join(images_dir, "sub-banner.svg"), "w", encoding="utf-8") as f:
    f.write(sub_banner_svg)

print("Created header-logo.svg and sub-banner.svg successfully!")
