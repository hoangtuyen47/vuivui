/**
 * APP LOGIC: TRƯỜNG THPT EA H'LEO
 * Bố cục 2 Cột: Cột trái (Tác giả + Các lớp học) | Cột phải (Công cụ + Kho học liệu)
 */

let activeCategory = 'all';
let currentSearchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
  renderProfile();
  renderClasses();
  renderCategories();
  renderSystems();
  renderStudentLibrary();
  setupEventListeners();
  lucide.createIcons();
});

// 1. Render Thông tin tác giả (Cột trái)
function renderProfile() {
  const p = PORTFOLIO_DATA.profile;
  if (!p) return;

  const nameEl = document.getElementById('profile-name');
  if (nameEl) nameEl.textContent = p.fullName;

  const roleEl = document.getElementById('profile-role');
  if (roleEl) roleEl.textContent = p.role;

  const schoolEl = document.getElementById('profile-school');
  if (schoolEl) schoolEl.textContent = `${p.school} • ${p.dept}`;

  const bioEl = document.getElementById('profile-bio');
  if (bioEl) bioEl.textContent = p.bio;

  // Contacts
  setLinkHref('link-zalo', p.contacts.zalo);
  setLinkHref('link-facebook', p.contacts.facebook);
  setLinkHref('link-github', p.contacts.github);
  setLinkHref('link-email', `mailto:${p.contacts.email}`);
  setLinkHref('link-school', p.contacts.schoolWeb);
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
          <button 
            onclick="openClassRegisterModal('${cls.id}')"
            class="px-2.5 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold transition-colors shadow-xs flex items-center gap-1">
            <span>Đăng ký học</span>
            <i data-lucide="arrow-right" class="w-3 h-3"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// 3. Render Thanh lọc phân hệ
function renderCategories() {
  const navEl = document.getElementById('category-filter-nav');
  if (!navEl) return;

  navEl.innerHTML = PORTFOLIO_DATA.categories.map(c => {
    const isActive = c.id === activeCategory;
    const activeClass = isActive
      ? 'bg-red-600 text-white shadow-xs font-bold'
      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200';

    return `
      <button 
        onclick="selectCategory('${c.id}')"
        class="px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${activeClass}">
        <i data-lucide="${c.icon}" class="w-3.5 h-3.5"></i>
        <span>${escapeHtml(c.name)}</span>
        <span class="text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-red-800 text-white' : 'bg-slate-100 text-slate-600'}">
          ${getCategoryCount(c.id)}
        </span>
      </button>
    `;
  }).join('');
}

function getCategoryCount(catId) {
  if (catId === 'all') return PORTFOLIO_DATA.systems.length;
  return PORTFOLIO_DATA.systems.filter(s => s.categoryId === catId).length;
}

function selectCategory(catId) {
  activeCategory = catId;
  renderCategories();
  renderSystems();
  lucide.createIcons();
}

// 4. Render Nhóm Trên Cột Phải: Các công cụ đã triển khai (Hình ảnh to, bớt chữ, tính năng chính)
function renderSystems() {
  const container = document.getElementById('systems-container');
  if (!container) return;

  let filtered = PORTFOLIO_DATA.systems;

  if (activeCategory !== 'all') {
    filtered = filtered.filter(s => s.categoryId === activeCategory);
  }

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
              <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
            </a>

            <button 
              onclick="openRegisterToolModal('${sys.id}')"
              class="flex-1 py-2 px-3 rounded-lg btn-secondary-light text-xs font-bold flex items-center justify-center gap-1.5">
              <i data-lucide="file-check" class="w-3.5 h-3.5 text-red-600"></i>
              <span>Đăng ký dùng</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// 5. Render Nhóm Dưới Cột Phải: Kho học liệu số với các dự án (Sơ đồ mạch - Code - Kiến thức)
function renderStudentLibrary() {
  const container = document.getElementById('student-library-container');
  if (!container || !PORTFOLIO_DATA.studentLibrary) return;

  container.innerHTML = PORTFOLIO_DATA.studentLibrary.map(item => `
    <div class="p-4 rounded-xl bg-white border border-slate-200 hover:border-red-300 shadow-xs hover:shadow-sm transition-all space-y-3">
      <div class="flex items-center justify-between gap-2 border-b border-slate-100 pb-2">
        <span class="px-2.5 py-0.5 text-[11px] font-bold rounded bg-red-50 text-red-700 border border-red-200">
          ${escapeHtml(item.category)}
        </span>
        <span class="text-[11px] text-slate-500 font-mono">
          Ngôn ngữ: <strong class="text-slate-800">${escapeHtml(item.badge)}</strong>
        </span>
      </div>

      <div>
        <h5 class="font-bold text-sm sm:text-base text-slate-900 leading-snug">
          ${escapeHtml(item.title)}
        </h5>
        <p class="text-xs text-slate-600 mt-1 leading-relaxed">
          ${escapeHtml(item.description)}
        </p>
      </div>

      <!-- Sơ đồ nối dây & Linh kiện tóm tắt -->
      <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs space-y-1">
        <p class="text-slate-800 font-semibold flex items-center gap-1.5">
          <i data-lucide="cpu" class="w-3.5 h-3.5 text-red-600"></i>
          <span>Sơ đồ mạch &amp; Linh kiện:</span>
        </p>
        <p class="text-[11.5px] text-slate-600 font-mono">
          ${escapeHtml(item.wiringGuide)}
        </p>
      </div>

      <!-- Nút hành động học sinh -->
      <div class="flex items-center gap-2 pt-1">
        <button 
          onclick="openCodeViewerModal('${item.id}')"
          class="flex-1 py-2 px-3 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors">
          <i data-lucide="code" class="w-3.5 h-3.5"></i>
          <span>Xem mã nguồn &amp; Copy</span>
        </button>

        <button 
          onclick="openDiagramModal('${item.id}')"
          class="flex-1 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors">
          <i data-lucide="network" class="w-3.5 h-3.5 text-sky-600"></i>
          <span>Xem sơ đồ mạch 3D</span>
        </button>
      </div>
    </div>
  `).join('');
}

// 6. Modal Đăng Ký Sử Dụng Công Cụ
function openRegisterToolModal(toolId) {
  const tool = PORTFOLIO_DATA.systems.find(s => s.id === toolId);
  if (!tool) return;

  const modal = document.getElementById('register-tool-modal');
  const modalContent = document.getElementById('register-modal-content');
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <!-- Header -->
    <div class="p-4 sm:p-5 border-b border-slate-200 flex items-start justify-between gap-3 bg-red-700 text-white">
      <div>
        <span class="px-2 py-0.5 text-[10px] font-bold rounded bg-white/20 text-white uppercase">
          Đăng ký sử dụng & Chuyển giao
        </span>
        <h3 class="text-base sm:text-lg font-bold text-white mt-1 leading-snug">
          ${escapeHtml(tool.title)}
        </h3>
      </div>
      <button onclick="closeModal('register-tool-modal')" class="p-1 text-red-200 hover:text-white rounded-lg hover:bg-white/10 transition-colors">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
    </div>

    <!-- Body -->
    <div class="p-4 sm:p-5 space-y-4 max-h-[70vh] overflow-y-auto bg-white text-slate-800">
      <div class="p-3 bg-red-50/60 rounded-xl border border-red-200 space-y-1">
        <p class="font-bold text-red-800 text-xs">
          📋 Hướng dẫn nhận quyền sử dụng hoặc chuyển giao cho nhà trường:
        </p>
        <p class="text-xs text-slate-700 leading-relaxed">
          Hệ thống được phát triển nhằm hỗ trợ miễn phí công tác quản lý giáo dục. Quý thầy cô, Ban Giám Hiệu hoặc giáo viên bộ môn có nhu cầu triển khai vui lòng liên hệ trực tiếp với Thầy Hoàng Ngọc Tuyên để được cấp tài khoản quản trị và nhân bản hệ thống.
        </p>
      </div>

      <!-- Demo Account Box -->
      <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
        <p class="text-xs font-bold text-slate-900 uppercase">Tài khoản trải nghiệm nhanh:</p>
        <div class="flex items-center gap-2 flex-wrap">
          <button 
            onclick="copyToClipboard('${escapeJs(tool.demoAccount.user)}', 'Đã copy tài khoản!')"
            class="px-2.5 py-1 bg-white rounded border border-slate-200 text-xs font-mono text-slate-800 flex items-center gap-1.5 shadow-xs">
            <span class="text-slate-400 font-sans">User:</span>
            <span class="font-bold">${escapeHtml(tool.demoAccount.user)}</span>
            <i data-lucide="copy" class="w-3 h-3 text-slate-400"></i>
          </button>

          <button 
            onclick="copyToClipboard('${escapeJs(tool.demoAccount.pass)}', 'Đã copy mật khẩu!')"
            class="px-2.5 py-1 bg-white rounded border border-slate-200 text-xs font-mono text-red-700 flex items-center gap-1.5 shadow-xs">
            <span class="text-slate-400 font-sans">Pass:</span>
            <span class="font-bold">${escapeHtml(tool.demoAccount.pass)}</span>
            <i data-lucide="copy" class="w-3 h-3 text-slate-400"></i>
          </button>
        </div>
      </div>

      <!-- Contact direct -->
      <div class="p-3 bg-emerald-50/70 rounded-xl border border-emerald-200 space-y-2">
        <p class="text-xs font-bold text-emerald-900">Liên hệ hỗ trợ kỹ thuật &amp; Chuyển giao:</p>
        <div class="text-xs text-slate-700 space-y-1">
          <p>• <strong>Thầy Hoàng Ngọc Tuyên</strong> - Trường THPT Ea H'leo, Đắk Lắk</p>
          <p>• <strong>Điện thoại / Zalo:</strong> 0912.345.xxx</p>
          <p>• <strong>Email:</strong> hoangtuyen.eahleo@gmail.com</p>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="p-3 sm:p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
      <button onclick="closeModal('register-tool-modal')" class="px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold transition-colors">
        Đóng
      </button>
      <a 
        href="https://zalo.me" 
        target="_blank" 
        class="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs">
        <i data-lucide="message-circle" class="w-3.5 h-3.5"></i>
        <span>Nhắn tin qua Zalo</span>
      </a>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  lucide.createIcons();
}

// 7. Modal Đăng Ký Lớp Học
function openClassRegisterModal(classId) {
  const cls = PORTFOLIO_DATA.classes.find(c => c.id === classId);
  if (!cls) return;

  const modal = document.getElementById('register-tool-modal');
  const modalContent = document.getElementById('register-modal-content');
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="p-4 sm:p-5 border-b border-slate-200 flex items-start justify-between gap-3 bg-red-700 text-white">
      <div>
        <span class="px-2 py-0.5 text-[10px] font-bold rounded bg-white/20 text-white uppercase">
          Tư vấn &amp; Đăng ký tham gia
        </span>
        <h3 class="text-base sm:text-lg font-bold text-white mt-1 leading-snug">
          ${escapeHtml(cls.title)}
        </h3>
      </div>
      <button onclick="closeModal('register-tool-modal')" class="p-1 text-red-200 hover:text-white rounded-lg hover:bg-white/10 transition-colors">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
    </div>

    <div class="p-4 sm:p-5 space-y-3 bg-white text-slate-800 text-xs">
      <p class="text-slate-700 leading-relaxed">
        Quý phụ huynh và các em học sinh có nhu cầu tham gia khóa học xin vui lòng liên hệ trực tiếp với Thầy Hoàng Ngọc Tuyên để được xếp lịch và nhận tài liệu chuẩn bị.
      </p>
      <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
        <p>• <strong>Đối tượng:</strong> ${escapeHtml(cls.target)}</p>
        <p>• <strong>Lịch học:</strong> ${escapeHtml(cls.schedule)}</p>
        <p>• <strong>Địa điểm:</strong> Phòng Tin học &amp; STEM Trường THPT Ea H'leo</p>
      </div>
    </div>

    <div class="p-3 sm:p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
      <button onclick="closeModal('register-tool-modal')" class="px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold transition-colors">
        Đóng
      </button>
      <a 
        href="https://zalo.me" 
        target="_blank" 
        class="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs">
        <i data-lucide="message-circle" class="w-3.5 h-3.5"></i>
        <span>Nhắn Zalo đăng ký ngay</span>
      </a>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  lucide.createIcons();
}

// 8. Code Viewer Modal
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

// 9. Diagram Modal
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

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// 10. Event Listeners & Search
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
      closeModal('register-tool-modal');
      closeModal('code-modal');
      closeModal('diagram-modal');
    }
  });

  ['register-tool-modal', 'code-modal', 'diagram-modal'].forEach(id => {
    const modal = document.getElementById(id);
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(id);
      });
    }
  });
}

function resetFilters() {
  activeCategory = 'all';
  currentSearchQuery = '';
  const searchInput = document.getElementById('top-search-input');
  if (searchInput) searchInput.value = '';
  renderCategories();
  renderSystems();
  lucide.createIcons();
}

// 11. Copy to clipboard & Toast
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
