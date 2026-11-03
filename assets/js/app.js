/**
 * APP LOGIC: THẦY HOÀNG NGỌC TUYÊN - PORTFOLIO & KHO HỌC LIỆU STEM
 * Bố cục 2 Cột: Cột trái (Tác giả + Các lớp học) | Cột phải (Công cụ + Kho học liệu)
 * Tính năng mở rộng: Bảng Quản Trị Admin thêm mới công cụ, lớp học, học liệu & xuất file data.js
 */

let currentSearchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
  // Load any local customizations from localStorage if available
  loadLocalAdminData();
  renderProfile();
  renderClasses();
  renderSystems();
  renderStudentLibrary();
  setupEventListeners();
  lucide.createIcons();
});

// 1. Render Thông tin tác giả & Các nút liên hệ Zalo, FB, YT, TikTok (Cột trái)
function renderProfile() {
  const p = PORTFOLIO_DATA.profile;
  if (!p) return;

  const nameEl = document.getElementById('profile-name');
  if (nameEl) nameEl.textContent = p.fullName;

  const roleEl = document.getElementById('profile-role');
  if (roleEl) roleEl.textContent = p.role;

  const schoolEl = document.getElementById('profile-school');
  if (schoolEl) schoolEl.textContent = p.title || p.role || 'Chuyên gia Chuyển đổi số & Đào tạo STEM';

  const bioEl = document.getElementById('profile-bio');
  if (bioEl) bioEl.textContent = p.bio;

  // Contacts
  setLinkHref('link-zalo', p.contacts.zalo);
  setLinkHref('link-facebook', p.contacts.facebook);
  setLinkHref('link-youtube', p.contacts.youtube);
  setLinkHref('link-tiktok', p.contacts.tiktok);
  setLinkHref('link-phone', p.contacts.phoneCall || `tel:${p.contacts.phone}`);
  setLinkHref('link-school', p.contacts.portfolioWeb || './');
}

function setLinkHref(elementId, url) {
  const el = document.getElementById(elementId);
  if (el && url) el.href = url;
}

// 2. Render Các lớp học đang tổ chức (Cột trái)
function renderClasses() {
  const container = document.getElementById('classes-container');
  if (!container || !PORTFOLIO_DATA.classes) return;

  container.innerHTML = PORTFOLIO_DATA.classes.map(cls => `
    <div class="portal-card bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs hover:border-red-300 transition-all flex flex-col justify-between">
      <!-- Thumbnail -->
      <div class="h-36 bg-slate-100 overflow-hidden relative border-b border-slate-100">
        <img src="${cls.image}" alt="${escapeHtml(cls.title)}" class="w-full h-full object-cover">
        <span class="absolute top-2 left-2 px-2 py-0.5 text-[10px] font-bold rounded ${getBadgeClass(cls.badgeColor)} shadow-xs">
          ${escapeHtml(cls.badge)}
        </span>
        <span class="absolute top-2 right-2 px-2 py-0.5 text-[9.5px] font-semibold rounded bg-white text-emerald-700 shadow-xs flex items-center gap-1 border border-emerald-200">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> ${escapeHtml(cls.status)}
        </span>
      </div>

      <!-- Content -->
      <div class="p-3.5 space-y-2.5">
        <div>
          <h4 class="font-bold text-slate-900 text-xs sm:text-sm leading-snug">
            ${escapeHtml(cls.title)}
          </h4>
          <p class="text-[11px] text-red-700 font-semibold mt-0.5">
            🎯 Đối tượng: ${escapeHtml(cls.target)}
          </p>
        </div>

        <ul class="text-[11px] text-slate-600 space-y-1 bg-slate-50 p-2 rounded-lg border border-slate-100">
          ${cls.highlights.map(h => `
            <li class="flex items-start gap-1.5">
              <span class="text-red-600 font-bold">•</span>
              <span class="line-clamp-1">${escapeHtml(h)}</span>
            </li>
          `).join('')}
        </ul>

        <div class="pt-1 flex items-center justify-between border-t border-slate-100">
          <span class="text-[10px] text-slate-500 italic">📅 ${escapeHtml(cls.schedule)}</span>
          <a 
            href="${cls.registerLink || 'https://zalo.me'}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="px-2.5 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold transition-colors shadow-xs flex items-center gap-1">
            <span>Đăng ký học</span>
            <i data-lucide="arrow-right" class="w-3 h-3"></i>
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

// 3. Render Nhóm Trên Cột Phải: Các công cụ đã triển khai (Đi thẳng vào công cụ, ảnh to đẹp)
function renderSystems() {
  const container = document.getElementById('systems-container');
  if (!container) return;

  let filtered = PORTFOLIO_DATA.systems;

  if (currentSearchQuery.trim() !== '') {
    const q = currentSearchQuery.toLowerCase();
    filtered = filtered.filter(s => 
      s.title.toLowerCase().includes(q) ||
      s.features.some(f => f.toLowerCase().includes(q))
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-10 text-center p-6 bg-white rounded-xl border border-slate-200">
        <i data-lucide="search-x" class="w-8 h-8 text-slate-400 mx-auto mb-2"></i>
        <p class="font-bold text-slate-800 text-sm">Không tìm thấy công cụ phù hợp</p>
        <button onclick="resetFilters()" class="mt-2.5 px-3 py-1.5 bg-red-600 text-white text-xs font-semibold rounded-lg hover:bg-red-700 transition-colors">
          Xem tất cả công cụ
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(sys => {
    const badgeClass = getBadgeClass(sys.badgeColor);
    return `
      <div class="portal-card-interactive bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col justify-between shadow-xs hover:border-red-300 transition-all group">
        <!-- Large Thumbnail -->
        <div class="h-44 sm:h-48 bg-slate-100 relative overflow-hidden border-b border-slate-100">
          <img src="${sys.image}" alt="${escapeHtml(sys.title)}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
          <div class="absolute top-2.5 left-2.5">
            <span class="px-2 py-0.5 text-[10.5px] font-bold rounded ${badgeClass} shadow-xs">
              ${escapeHtml(sys.badge)}
            </span>
          </div>
          <div class="absolute top-2.5 right-2.5">
            <span class="px-2 py-0.5 text-[10px] font-semibold rounded bg-white/95 text-slate-700 shadow-xs flex items-center gap-1 border border-slate-200">
              <span class="w-2 h-2 rounded-full bg-emerald-500"></span> Sẵn sàng
            </span>
          </div>
        </div>

        <!-- Body: Concise Title & Bullet Features -->
        <div class="p-4 flex-1 flex flex-col justify-between space-y-3">
          <div class="space-y-2">
            <h4 class="font-bold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-red-700 transition-colors">
              ${escapeHtml(sys.title)}
            </h4>

            <!-- Bullet features only -->
            <ul class="text-xs text-slate-700 space-y-1.5 pt-1">
              ${sys.features.map(f => `
                <li class="flex items-start gap-2">
                  <i data-lucide="check" class="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5"></i>
                  <span class="line-clamp-1">${escapeHtml(f)}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- 2 Buttons: Trải nghiệm + Đăng ký dùng -->
          <div class="pt-3 border-t border-slate-100 flex items-center gap-2">
            <a 
              href="${sys.demoLink}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex-1 py-2 px-3 rounded-lg btn-primary-red text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs">
              <span>Trải nghiệm</span>
              <i data-lucide="external-link" class="w-3 h-3"></i>
            </a>

            <a 
              href="${sys.registerLink || 'https://zalo.me'}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex-1 py-2 px-3 rounded-lg btn-secondary-light text-xs font-bold flex items-center justify-center gap-1.5">
              <i data-lucide="file-check" class="w-3.5 h-3.5 text-red-600"></i>
              <span>Đăng ký dùng</span>
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// 4. Render Nhóm Dưới Cột Phải: Kho học liệu số với các dự án (Có hình ảnh minh họa to đẹp)
function renderStudentLibrary() {
  const container = document.getElementById('student-library-container');
  if (!container || !PORTFOLIO_DATA.studentLibrary) return;

  container.innerHTML = PORTFOLIO_DATA.studentLibrary.map(item => `
    <div class="portal-card-interactive bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs hover:border-red-300 transition-all flex flex-col justify-between group">
      <!-- Large Illustration Thumbnail -->
      <div class="h-44 sm:h-48 bg-slate-100 relative overflow-hidden border-b border-slate-100">
        <img src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
        <div class="absolute top-2.5 left-2.5">
          <span class="px-2.5 py-0.5 text-[10.5px] font-bold rounded bg-red-600 text-white shadow-xs">
            ${escapeHtml(item.category)}
          </span>
        </div>
        <div class="absolute top-2.5 right-2.5">
          <span class="px-2 py-0.5 text-[10px] font-semibold rounded bg-white text-slate-700 shadow-xs border border-slate-200">
            ${escapeHtml(item.badge)}
          </span>
        </div>
      </div>

      <!-- Content -->
      <div class="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div class="space-y-1.5">
          <h5 class="font-bold text-sm sm:text-base text-slate-900 leading-snug group-hover:text-red-700 transition-colors">
            ${escapeHtml(item.title)}
          </h5>
          <p class="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            ${escapeHtml(item.description)}
          </p>

          <!-- Sơ đồ nối dây & Linh kiện tóm tắt -->
          <div class="p-2 rounded-lg bg-slate-50 border border-slate-200 text-xs space-y-0.5">
            <p class="text-slate-800 font-semibold flex items-center gap-1">
              <i data-lucide="cpu" class="w-3.5 h-3.5 text-red-600"></i>
              <span>Nối chân linh kiện:</span>
            </p>
            <p class="text-[11px] text-slate-600 font-mono line-clamp-1">
              ${escapeHtml(item.wiringGuide)}
            </p>
          </div>
        </div>

        <!-- 2 Nút: Mã nguồn & Sơ đồ -->
        <div class="flex items-center gap-2 pt-2 border-t border-slate-100">
          <button 
            onclick="openCodeViewerModal('${item.id}')"
            class="flex-1 py-2 px-2.5 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors">
            <i data-lucide="code" class="w-3.5 h-3.5"></i>
            <span>Mã nguồn &amp; Copy</span>
          </button>

          <button 
            onclick="openDiagramModal('${item.id}')"
            class="flex-1 py-2 px-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors">
            <i data-lucide="network" class="w-3.5 h-3.5 text-sky-600"></i>
            <span>Sơ đồ mạch</span>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// 5. Code Viewer Modal
function openCodeViewerModal(itemId) {
  const item = PORTFOLIO_DATA.studentLibrary.find(i => i.id === itemId);
  if (!item) return;

  const modal = document.getElementById('code-modal');
  const titleEl = document.getElementById('code-modal-title');
  const codeEl = document.getElementById('code-modal-snippet');
  const badgeEl = document.getElementById('code-modal-badge');
  const copyBtn = document.getElementById('code-modal-copy-btn');
  if (!modal || !codeEl) return;

  if (titleEl) titleEl.textContent = item.title;
  if (badgeEl) badgeEl.textContent = item.badge;
  codeEl.textContent = item.codeSnippet;

  if (copyBtn) {
    copyBtn.onclick = () => {
      copyToClipboard(item.codeSnippet, 'Đã sao chép toàn bộ mã nguồn vào clipboard!');
    };
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  lucide.createIcons();
}

// 6. Diagram Modal
function openDiagramModal(itemId) {
  const item = PORTFOLIO_DATA.studentLibrary.find(i => i.id === itemId);
  if (!item) return;

  const modal = document.getElementById('diagram-modal');
  const imgEl = document.getElementById('diagram-modal-img');
  const titleEl = document.getElementById('diagram-modal-title');
  const guideEl = document.getElementById('diagram-modal-guide');
  if (!modal || !imgEl) return;

  imgEl.src = item.diagramImage;
  if (titleEl) titleEl.textContent = item.title;
  if (guideEl) guideEl.textContent = item.wiringGuide;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  lucide.createIcons();
}

// 7. BẢNG QUẢN TRỊ ADMIN (Thêm Lớp Học / Thêm Công Cụ / Thêm Học Liệu / Đổi Mật Khẩu & Xuất file data.js)
function getAdminPin() {
  return localStorage.getItem('THAY_TUYEN_ADMIN_PIN') || localStorage.getItem('THPT_EAHLEO_ADMIN_PIN') || PORTFOLIO_DATA.adminPin || 'admin123';
}

function openAdminLogin() {
  const currentPin = getAdminPin();
  const pass = prompt('🔑 Nhập mã PIN Quản Trị Viên:');
  if (pass === null) return;
  if (pass === currentPin || (currentPin === 'admin123' && pass === 'admin')) {
    openAdminPanel();
  } else {
    alert('❌ Mã PIN không đúng! Vui lòng thử lại.');
  }
}

function openAdminPanel() {
  const modal = document.getElementById('admin-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  switchAdminTab('tab-add-system');
  lucide.createIcons();
}

function switchAdminTab(tabId) {
  ['tab-add-system', 'tab-add-class', 'tab-add-library', 'tab-change-pin'].forEach(id => {
    const el = document.getElementById(id);
    const btn = document.getElementById('btn-' + id);
    if (el) el.classList.toggle('hidden', id !== tabId);
    if (btn) {
      if (id === tabId) {
        btn.className = 'px-4 py-2 rounded-lg bg-red-600 text-white font-bold text-xs shadow-xs whitespace-nowrap flex items-center gap-1.5';
      } else {
        btn.className = 'px-4 py-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold text-xs whitespace-nowrap flex items-center gap-1.5';
      }
    }
  });
  lucide.createIcons();
}

function submitNewSystem(e) {
  e.preventDefault();
  const title = document.getElementById('admin-sys-title').value.trim();
  const badge = document.getElementById('admin-sys-badge').value.trim() || 'Mới';
  const image = document.getElementById('admin-sys-image').value.trim() || 'assets/images/dashboard-school.png';
  const featuresText = document.getElementById('admin-sys-features').value.trim();
  const demoLink = document.getElementById('admin-sys-demo').value.trim() || '#';
  const registerLink = document.getElementById('admin-sys-reg').value.trim() || 'https://zalo.me';

  if (!title) return alert('Vui lòng nhập tên công cụ!');

  const features = featuresText ? featuresText.split('\n').filter(f => f.trim() !== '') : ['Hệ thống công nghệ giáo dục'];

  const newSys = {
    id: 'sys-' + Date.now(),
    title,
    badge,
    badgeColor: 'red',
    image,
    features,
    demoLink,
    registerLink,
    demoAccount: { user: 'admin', pass: '123456' }
  };

  PORTFOLIO_DATA.systems.unshift(newSys);
  saveLocalAdminData();
  renderSystems();
  lucide.createIcons();
  showToast('✅ Đã thêm công cụ mới thành công!');
  closeModal('admin-modal');
}

function submitNewClass(e) {
  e.preventDefault();
  const title = document.getElementById('admin-cls-title').value.trim();
  const badge = document.getElementById('admin-cls-badge').value.trim() || 'Tuyển sinh';
  const image = document.getElementById('admin-cls-image').value.trim() || 'assets/images/class-digital-skills.png';
  const target = document.getElementById('admin-cls-target').value.trim() || 'Học sinh';
  const highlightsText = document.getElementById('admin-cls-highlights').value.trim();
  const schedule = document.getElementById('admin-cls-schedule').value.trim() || 'Lịch linh hoạt';
  const registerLink = document.getElementById('admin-cls-reg').value.trim() || 'https://zalo.me';

  if (!title) return alert('Vui lòng nhập tên lớp học!');

  const highlights = highlightsText ? highlightsText.split('\n').filter(h => h.trim() !== '') : ['Chương trình học thực tế'];

  const newCls = {
    id: 'cls-' + Date.now(),
    title,
    badge,
    badgeColor: 'emerald',
    image,
    target,
    highlights,
    schedule,
    status: 'Đang tuyển sinh',
    registerLink
  };

  PORTFOLIO_DATA.classes.unshift(newCls);
  saveLocalAdminData();
  renderClasses();
  lucide.createIcons();
  showToast('✅ Đã thêm lớp học mới thành công!');
  closeModal('admin-modal');
}

function submitNewLibrary(e) {
  e.preventDefault();
  const title = document.getElementById('admin-lib-title').value.trim();
  const category = document.getElementById('admin-lib-cat').value.trim() || 'Module STEM';
  const badge = document.getElementById('admin-lib-badge').value.trim() || 'Code';
  const image = document.getElementById('admin-lib-image').value.trim() || 'assets/images/lib-traffic-light.svg';
  const description = document.getElementById('admin-lib-desc').value.trim() || 'Dự án thực hành STEM';
  const wiringGuide = document.getElementById('admin-lib-wiring').value.trim() || 'Xem sơ đồ chi tiết';
  const codeSnippet = document.getElementById('admin-lib-code').value.trim() || '// Code mẫu';

  if (!title) return alert('Vui lòng nhập tên dự án!');

  const newItem = {
    id: 'lib-' + Date.now(),
    category,
    badge,
    image,
    title,
    description,
    hardware: ['Mạch vi điều khiển'],
    wiringGuide,
    diagramImage: 'assets/images/circuit-arduino.svg',
    codeSnippet
  };

  PORTFOLIO_DATA.studentLibrary.unshift(newItem);
  saveLocalAdminData();
  renderStudentLibrary();
  lucide.createIcons();
  showToast('✅ Đã thêm dự án học liệu mới thành công!');
  closeModal('admin-modal');
}

// Xử lý đổi mật khẩu / PIN Admin
function submitChangePin(e) {
  e.preventDefault();
  const currentInput = document.getElementById('admin-current-pin').value.trim();
  const newPin = document.getElementById('admin-new-pin').value.trim();
  const confirmPin = document.getElementById('admin-confirm-pin').value.trim();

  const realPin = getAdminPin();
  if (currentInput !== realPin && !(realPin === 'admin123' && currentInput === 'admin')) {
    return alert('❌ Mật khẩu hiện tại không chính xác!');
  }

  if (!newPin || newPin.length < 4) {
    return alert('❌ Mật khẩu mới phải có ít nhất 4 ký tự!');
  }

  if (newPin !== confirmPin) {
    return alert('❌ Mật khẩu mới và mật khẩu xác nhận không trùng khớp!');
  }

  // Cập nhật mật khẩu mới vào state & localStorage
  PORTFOLIO_DATA.adminPin = newPin;
  localStorage.setItem('THAY_TUYEN_ADMIN_PIN', newPin);
  saveLocalAdminData();

  // Reset form inputs
  document.getElementById('admin-current-pin').value = '';
  document.getElementById('admin-new-pin').value = '';
  document.getElementById('admin-confirm-pin').value = '';

  showToast('🔒 Đã đổi mật khẩu Admin thành công!');
  alert('✅ Đổi mật khẩu Admin thành công!\n\nQuan trọng: Hãy bấm nút "Xuất file data.js Cập Nhật" ở góc dưới bảng quản trị và tải lên GitHub để mật khẩu này được áp dụng vĩnh viễn trên mọi thiết bị!');
}

// Xuất file data.js 1-Click để Thầy tải về và up lên GitHub
function exportDataJsFile() {
  PORTFOLIO_DATA.adminPin = getAdminPin();
  const content = '/**\n * PORTFOLIO DATA HUB - THẦY HOÀNG NGỌC TUYÊN\n * Cập nhật tự động từ Bảng Quản Trị Admin\n */\n\nconst PORTFOLIO_DATA = ' + JSON.stringify(PORTFOLIO_DATA, null, 2) + ';\n';
  const blob = new Blob([content], { type: 'application/javascript;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'data.js';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('📥 Đã tải file data.js! Hãy kéo thả vào GitHub để cập nhật web!');
}

function saveLocalAdminData() {
  try {
    PORTFOLIO_DATA.adminPin = getAdminPin();
    localStorage.setItem('THAY_TUYEN_PORTFOLIO_DATA', JSON.stringify(PORTFOLIO_DATA));
  } catch (e) {}
}

function loadLocalAdminData() {
  try {
    const savedPin = localStorage.getItem('THAY_TUYEN_ADMIN_PIN') || localStorage.getItem('THPT_EAHLEO_ADMIN_PIN');
    if (savedPin) {
      PORTFOLIO_DATA.adminPin = savedPin;
    }
    const saved = localStorage.getItem('THAY_TUYEN_PORTFOLIO_DATA') || localStorage.getItem('THPT_EAHLEO_PORTFOLIO_DATA');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.systems && parsed.classes && parsed.studentLibrary) {
        Object.assign(PORTFOLIO_DATA, parsed);
        if (parsed.adminPin) {
          PORTFOLIO_DATA.adminPin = parsed.adminPin;
          localStorage.setItem('THAY_TUYEN_ADMIN_PIN', parsed.adminPin);
        }
      }
    }
  } catch (e) {}
}

function resetAdminData() {
  if (confirm('Bạn có chắc chắn muốn đặt lại dữ liệu và mật khẩu về mặc định gốc?')) {
    localStorage.removeItem('THAY_TUYEN_PORTFOLIO_DATA');
    localStorage.removeItem('THAY_TUYEN_ADMIN_PIN');
    localStorage.removeItem('THPT_EAHLEO_PORTFOLIO_DATA');
    localStorage.removeItem('THPT_EAHLEO_ADMIN_PIN');
    location.reload();
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// 8. Event Listeners & Search
function setupEventListeners() {
  const searchInput = document.getElementById('top-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      renderSystems();
      lucide.createIcons();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal('code-modal');
      closeModal('diagram-modal');
      closeModal('admin-modal');
    }
  });

  ['code-modal', 'diagram-modal', 'admin-modal'].forEach(id => {
    const modal = document.getElementById(id);
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(id);
      });
    }
  });
}

function resetFilters() {
  currentSearchQuery = '';
  const searchInput = document.getElementById('top-search-input');
  if (searchInput) searchInput.value = '';
  renderSystems();
  lucide.createIcons();
}

function copyToClipboard(text, successMessage) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(successMessage || 'Đã sao chép vào bộ nhớ tạm!');
  }).catch(() => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast(successMessage || 'Đã sao chép vào bộ nhớ tạm!');
  });
}

function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-item';
  toast.innerHTML = `
    <i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0"></i>
    <span>${escapeHtml(message)}</span>
  `;

  container.appendChild(toast);
  lucide.createIcons({ root: toast });

  setTimeout(() => {
    toast.style.transition = 'all 0.3s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 2200);
}

function getBadgeClass(color) {
  switch (color) {
    case 'red': return 'badge-red';
    case 'amber': return 'badge-amber';
    case 'blue': return 'badge-blue';
    case 'emerald': return 'badge-emerald';
    default: return 'badge-red';
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeJs(str) {
  if (!str) return '';
  return String(str).replace(/'/g, "\\'").replace(/"/g, '\\"');
}
