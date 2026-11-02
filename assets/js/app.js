/**
 * APP LOGIC: TRƯỜNG THPT EA H'LEO
 * Bố cục 3 cột: Cột trái (Thông tin & Đánh giá) | Cột giữa (Hệ thống dạy học) | Cột phải (Kho học liệu học sinh)
 */

let activeCategory = 'all';
let currentSearchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
  initCurrentDate();
  renderLeftColumn();
  renderCategories();
  renderSystems();
  renderStudentLibrary();
  setupEventListeners();
  lucide.createIcons();
});

// 1. Hiển thị ngày tháng hiện tại chuẩn Cổng thông tin (Thứ Hai, dd/mm/yyyy)
function initCurrentDate() {
  const dateEl = document.getElementById('current-date-text');
  if (!dateEl) return;

  const now = new Date();
  const days = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
  const dayName = days[now.getDay()];
  const dd = String(now.getDate()).padStart(2, '0');
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const yyyy = now.getFullYear();

  dateEl.textContent = `${dayName}, ${dd}/${mm}/${yyyy}`;
}

// 2. Render Cột trái (Thông tin giáo viên, Đánh giá tích cực, Kỹ năng)
function renderLeftColumn() {
  const p = PORTFOLIO_DATA.profile;
  if (!p) return;

  // Profile
  const nameEl = document.getElementById('profile-name');
  if (nameEl) nameEl.textContent = p.fullName;

  const roleEl = document.getElementById('profile-role');
  if (roleEl) roleEl.textContent = p.role;

  const schoolEl = document.getElementById('profile-school');
  if (schoolEl) schoolEl.textContent = p.school;

  const bioEl = document.getElementById('profile-bio');
  if (bioEl) bioEl.textContent = p.bio;

  // Stats
  const statSys = document.getElementById('stat-systems');
  if (statSys) statSys.textContent = p.stats.systemsCount;

  const statStu = document.getElementById('stat-students');
  if (statStu) statStu.textContent = p.stats.studentsTrained;

  const statRes = document.getElementById('stat-resources');
  if (statRes) statRes.textContent = p.stats.resourcesCount;

  // Social / Contact Links
  setLinkHref('link-zalo', p.contacts.zalo);
  setLinkHref('link-facebook', p.contacts.facebook);
  setLinkHref('link-github', p.contacts.github);
  setLinkHref('link-email', `mailto:${p.contacts.email}`);
  setLinkHref('link-school', p.contacts.schoolWeb);

  // Skills
  const skillsContainer = document.getElementById('profile-skills');
  if (skillsContainer && p.skills) {
    skillsContainer.innerHTML = p.skills.map(s => `
      <span class="px-2 py-0.5 text-[11px] font-medium rounded-md bg-slate-100 text-slate-700 border border-slate-200">
        ${escapeHtml(s)}
      </span>
    `).join('');
  }

  // Render Reviews / Testimonials (Bình luận tích cực)
  const reviewsContainer = document.getElementById('reviews-container');
  if (reviewsContainer && PORTFOLIO_DATA.reviews) {
    reviewsContainer.innerHTML = PORTFOLIO_DATA.reviews.map(r => `
      <div class="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs space-y-1.5 hover:bg-red-50/40 hover:border-red-200 transition-colors">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-1.5">
            <span class="w-6 h-6 rounded-full bg-red-100 text-red-700 font-bold flex items-center justify-center text-[10px]">
              ${r.author.charAt(0)}
            </span>
            <div>
              <p class="font-bold text-slate-800 leading-tight">${escapeHtml(r.author)}</p>
              <p class="text-[10px] text-slate-500">${escapeHtml(r.role)}</p>
            </div>
          </div>
          <div class="flex text-amber-500 text-[10px]">
            ${'★'.repeat(r.stars)}
          </div>
        </div>
        <p class="text-slate-600 text-[11.5px] italic leading-relaxed">
          "${escapeHtml(r.comment)}"
        </p>
      </div>
    `).join('');
  }
}

function setLinkHref(elementId, url) {
  const el = document.getElementById(elementId);
  if (el && url) el.href = url;
}

// 3. Render Thanh lọc phân hệ
function renderCategories() {
  const navEl = document.getElementById('category-filter-nav');
  if (!navEl) return;

  navEl.innerHTML = PORTFOLIO_DATA.categories.map(c => {
    const isActive = c.id === activeCategory;
    const activeClass = isActive
      ? 'bg-red-700 text-white shadow-xs font-bold'
      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200';

    return `
      <button 
        onclick="selectCategory('${c.id}')"
        class="px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${activeClass}">
        <i data-lucide="${c.icon}" class="w-3.5 h-3.5"></i>
        <span>${escapeHtml(c.name)}</span>
        <span class="text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-red-900/60 text-white' : 'bg-slate-100 text-slate-600'}">
          ${getCategoryCount(c.id)}
        </span>
      </button>
    `;
  }).join('');
}

function getCategoryCount(catId) {
  if (catId === 'all') return PORTFOLIO_DATA.systems.length;
  if (catId === 'library') return PORTFOLIO_DATA.studentLibrary.length;
  return PORTFOLIO_DATA.systems.filter(s => s.categoryId === catId).length;
}

function selectCategory(catId) {
  activeCategory = catId;
  renderCategories();
  renderSystems();
  lucide.createIcons();

  if (catId === 'library') {
    const rightCol = document.getElementById('student-library-column');
    if (rightCol) {
      rightCol.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

// 4. Render Cột Giữa: 6 Hệ thống hỗ trợ dạy học & Quản trị
function renderSystems() {
  const container = document.getElementById('systems-container');
  const countEl = document.getElementById('systems-count-badge');
  if (!container) return;

  let filtered = PORTFOLIO_DATA.systems;

  // Filter category
  if (activeCategory !== 'all' && activeCategory !== 'library') {
    filtered = filtered.filter(s => s.categoryId === activeCategory);
  }

  // Filter search query
  if (currentSearchQuery.trim() !== '') {
    const q = currentSearchQuery.toLowerCase();
    filtered = filtered.filter(s => 
      s.title.toLowerCase().includes(q) ||
      s.subtitle.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.features.some(f => f.toLowerCase().includes(q))
    );
  }

  if (countEl) countEl.textContent = `${filtered.length} hệ thống`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center p-6 bg-white rounded-xl border border-slate-200">
        <i data-lucide="search-x" class="w-10 h-10 text-slate-400 mx-auto mb-2"></i>
        <p class="font-bold text-slate-700 text-sm">Không tìm thấy công cụ phù hợp</p>
        <p class="text-xs text-slate-500 mt-1">Vui lòng thử tìm với từ khóa khác (ví dụ: nề nếp, thi cử, 3D...)</p>
        <button onclick="resetFilters()" class="mt-3 px-3 py-1.5 bg-red-600 text-white text-xs font-semibold rounded-lg hover:bg-red-700 transition-colors">
          Xem lại tất cả công cụ
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(sys => {
    const badgeClass = getBadgeClass(sys.badgeColor);
    return `
      <div class="portal-card-interactive flex flex-col justify-between overflow-hidden group">
        <!-- Thumbnail -->
        <div class="tool-thumb-wrapper">
          <img src="${sys.image}" alt="${escapeHtml(sys.title)}" loading="lazy" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          
          <div class="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
            <span class="px-2 py-0.5 text-[10.5px] font-bold rounded ${badgeClass}">
              ${escapeHtml(sys.badge)}
            </span>
            <span class="px-2 py-0.5 text-[10px] font-semibold rounded bg-white/95 text-slate-700 shadow-xs flex items-center gap-1">
              <span class="w-2 h-2 rounded-full bg-emerald-500"></span> Trực tuyến
            </span>
          </div>

          <div class="absolute bottom-2.5 left-3 right-3 text-white">
            <p class="text-[10px] font-bold uppercase tracking-wider text-amber-300 drop-shadow-sm">${getCategoryName(sys.categoryId)}</p>
            <h4 class="font-bold text-sm sm:text-base leading-snug drop-shadow-md text-white line-clamp-1">
              ${escapeHtml(sys.title)}
            </h4>
          </div>
        </div>

        <!-- Body -->
        <div class="p-4 flex-1 flex flex-col justify-between space-y-3">
          <div class="space-y-2">
            <p class="text-xs text-slate-600 line-clamp-2 leading-relaxed">
              ${escapeHtml(sys.description)}
            </p>

            <div class="space-y-1 pt-1.5 border-t border-slate-100">
              <p class="text-[10.5px] font-bold text-slate-700 uppercase flex items-center gap-1">
                <i data-lucide="check-circle" class="w-3.5 h-3.5 text-emerald-600"></i> Tính năng nổi bật:
              </p>
              <ul class="text-[11.5px] text-slate-600 space-y-1">
                ${sys.features.slice(0, 3).map(f => `
                  <li class="flex items-start gap-1.5">
                    <span class="text-red-600 font-bold">•</span>
                    <span class="line-clamp-1">${escapeHtml(f)}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>

          <!-- Buttons -->
          <div class="pt-2.5 border-t border-slate-100 flex items-center gap-2">
            <button 
              onclick="openToolDetailModal('${sys.id}')"
              class="flex-1 py-2 px-2.5 rounded-lg btn-secondary-light text-xs flex items-center justify-center gap-1">
              <i data-lucide="key" class="w-3.5 h-3.5 text-red-600"></i>
              <span>Tài khoản demo</span>
            </button>

            <a 
              href="${sys.demoLink}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex-1 py-2 px-2.5 rounded-lg btn-primary-red text-xs flex items-center justify-center gap-1">
              <span>Trải nghiệm</span>
              <i data-lucide="external-link" class="w-3 h-3"></i>
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// 5. Render Cột Phải: Kho học liệu học sinh (Dự án, Code, Sơ đồ, Tài liệu)
function renderStudentLibrary() {
  const container = document.getElementById('student-library-container');
  const countEl = document.getElementById('library-count-badge');
  if (!container) return;

  let items = PORTFOLIO_DATA.studentLibrary;

  if (currentSearchQuery.trim() !== '') {
    const q = currentSearchQuery.toLowerCase();
    items = items.filter(item => 
      item.title.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q)
    );
  }

  if (countEl) countEl.textContent = `${items.length} bài học`;

  container.innerHTML = items.map(item => `
    <div class="p-3.5 rounded-xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-sm transition-all space-y-2.5">
      <div class="flex items-center justify-between gap-2">
        <span class="px-2 py-0.5 text-[10px] font-bold rounded bg-sky-50 text-sky-800 border border-sky-200">
          ${escapeHtml(item.badge)}
        </span>
        <span class="text-[10px] text-slate-500">Mức độ: <strong class="text-red-700">${escapeHtml(item.difficulty)}</strong></span>
      </div>

      <h5 class="font-bold text-xs sm:text-sm text-slate-800 leading-snug">
        ${escapeHtml(item.title)}
      </h5>

      <p class="text-[11.5px] text-slate-600 line-clamp-2 leading-relaxed">
        ${escapeHtml(item.description)}
      </p>

      <div class="p-2 rounded bg-slate-50 text-[10.5px] text-slate-600 border border-slate-100">
        <span class="font-bold text-slate-700">⚡ Nối dây:</span> ${escapeHtml(item.wiringGuide)}
      </div>

      <div class="flex items-center gap-2 pt-1">
        <button 
          onclick="openCodeViewerModal('${item.id}')"
          class="flex-1 py-1.5 px-2 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 rounded-lg text-xs font-semibold flex items-center justify-center gap-1 transition-colors">
          <i data-lucide="code" class="w-3.5 h-3.5"></i>
          <span>Mã nguồn & Copy</span>
        </button>

        <button 
          onclick="openDiagramModal('${item.id}')"
          class="py-1.5 px-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold flex items-center justify-center gap-1 transition-colors"
          title="Xem sơ đồ nối chân">
          <i data-lucide="network" class="w-3.5 h-3.5 text-sky-600"></i>
          <span>Sơ đồ</span>
        </button>
      </div>
    </div>
  `).join('');
}

// 6. Modal Tool Detail (Tài khoản demo với 1-click copy)
function openToolDetailModal(toolId) {
  const tool = PORTFOLIO_DATA.systems.find(s => s.id === toolId);
  if (!tool) return;

  const modal = document.getElementById('tool-detail-modal');
  const modalContent = document.getElementById('tool-modal-content');
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <!-- Header -->
    <div class="p-4 sm:p-5 border-b border-slate-200 flex items-start justify-between gap-3 bg-red-800 text-white">
      <div>
        <span class="px-2 py-0.5 text-[10px] font-bold rounded bg-white/20 text-white uppercase tracking-wider">
          ${getCategoryName(tool.categoryId)}
        </span>
        <h3 class="text-base sm:text-lg font-bold text-white mt-1 leading-snug">
          ${escapeHtml(tool.title)}
        </h3>
        <p class="text-xs text-red-100">${escapeHtml(tool.subtitle)}</p>
      </div>
      <button onclick="closeModal('tool-detail-modal')" class="p-1.5 text-red-200 hover:text-white rounded-lg hover:bg-white/10 transition-colors">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
    </div>

    <!-- Body -->
    <div class="p-4 sm:p-5 space-y-4 max-h-[70vh] overflow-y-auto bg-slate-50 text-slate-700">
      <!-- Description -->
      <div class="space-y-1.5 bg-white p-3 rounded-lg border border-slate-200">
        <h5 class="text-xs font-bold text-red-700 uppercase flex items-center gap-1.5">
          <i data-lucide="info" class="w-4 h-4"></i> Giới thiệu giải pháp
        </h5>
        <p class="text-xs text-slate-600 leading-relaxed">
          ${escapeHtml(tool.description)}
        </p>
      </div>

      <!-- Credentials Box -->
      <div class="space-y-2">
        <div class="flex items-center justify-between">
          <h5 class="text-xs font-bold text-slate-800 uppercase flex items-center gap-1.5">
            <i data-lucide="key" class="w-4 h-4 text-red-600"></i> Tài khoản trải nghiệm hệ thống
          </h5>
          <span class="text-[11px] text-slate-500 italic">Nhấp vào ô để sao chép nhanh</span>
        </div>

        <div class="space-y-2">
          ${tool.credentials.map(c => `
            <div class="p-3 bg-white rounded-lg border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-red-300 transition-colors">
              <div>
                <span class="font-bold text-xs text-slate-800">${escapeHtml(c.role)}</span>
                <p class="text-[11px] text-slate-500">${escapeHtml(c.note)}</p>
              </div>

              <div class="flex items-center gap-2">
                <button 
                  onclick="copyToClipboard('${escapeJs(c.username)}', 'Đã sao chép Tên đăng nhập!')"
                  class="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded border border-slate-200 text-xs font-mono text-slate-800 flex items-center gap-1.5 transition-colors"
                  title="Sao chép tên đăng nhập">
                  <span class="text-[10px] text-slate-500 font-sans">User:</span>
                  <span class="font-bold">${escapeHtml(c.username)}</span>
                  <i data-lucide="copy" class="w-3.5 h-3.5 text-slate-400"></i>
                </button>

                <button 
                  onclick="copyToClipboard('${escapeJs(c.password)}', 'Đã sao chép Mật khẩu!')"
                  class="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded border border-slate-200 text-xs font-mono text-red-700 flex items-center gap-1.5 transition-colors"
                  title="Sao chép mật khẩu">
                  <span class="text-[10px] text-slate-500 font-sans">Pass:</span>
                  <span class="font-bold">${escapeHtml(c.password)}</span>
                  <i data-lucide="copy" class="w-3.5 h-3.5 text-slate-400"></i>
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Features -->
      <div class="bg-white p-3 rounded-lg border border-slate-200 space-y-1.5">
        <h5 class="text-xs font-bold text-slate-800 uppercase flex items-center gap-1.5">
          <i data-lucide="list" class="w-4 h-4 text-red-600"></i> Các tính năng chính
        </h5>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600">
          ${tool.features.map(f => `
            <div class="flex items-start gap-1.5">
              <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5"></i>
              <span>${escapeHtml(f)}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="p-3 sm:p-4 bg-white border-t border-slate-200 flex items-center justify-between">
      <span class="text-xs text-slate-500 hidden sm:inline">Trường THPT Ea H'leo</span>
      <div class="flex items-center gap-2 w-full sm:w-auto">
        <button onclick="closeModal('tool-detail-modal')" class="flex-1 sm:flex-initial px-3.5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors">
          Đóng
        </button>
        <a 
          href="${tool.demoLink}" 
          target="_blank" 
          rel="noopener noreferrer"
          class="flex-1 sm:flex-initial px-4 py-2 rounded-lg btn-primary-red text-xs font-bold flex items-center justify-center gap-1.5">
          <span>Mở trang trải nghiệm</span>
          <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
        </a>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  lucide.createIcons();
}

// 7. Code Viewer Modal
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

// 8. Diagram Modal
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

// 9. Event Listeners & Search
function setupEventListeners() {
  const searchInput = document.getElementById('top-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      renderSystems();
      renderStudentLibrary();
      lucide.createIcons();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal('tool-detail-modal');
      closeModal('code-modal');
      closeModal('diagram-modal');
    }
  });

  ['tool-detail-modal', 'code-modal', 'diagram-modal'].forEach(id => {
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
  renderStudentLibrary();
  lucide.createIcons();
}

// 10. Copy to clipboard & Toast
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

// Helpers
function getCategoryName(catId) {
  const cat = PORTFOLIO_DATA.categories.find(c => c.id === catId);
  return cat ? cat.name : 'Công cụ giáo dục';
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
