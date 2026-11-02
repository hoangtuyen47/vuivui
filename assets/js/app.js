/**
 * APP LOGIC & INTERACTION
 * Xử lý render động, bộ lọc chuyên mục, tìm kiếm, modal tài khoản & code viewer
 */

let activeCategory = 'all';
let currentSearchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
  initProfileData();
  renderCategories();
  renderSystems();
  renderStudentLibrary();
  setupEventListeners();
  lucide.createIcons();
});

// 1. Render Thông tin cá nhân Profile
function initProfileData() {
  const p = PORTFOLIO_DATA.profile;
  if (!p) return;

  // Name & Role
  const nameEl = document.getElementById('profile-name');
  if (nameEl) nameEl.textContent = p.fullName;

  const roleEl = document.getElementById('profile-role');
  if (roleEl) roleEl.textContent = p.role;

  const schoolEl = document.getElementById('profile-school');
  if (schoolEl) schoolEl.textContent = `${p.school} • ${p.province}`;

  const bioEl = document.getElementById('profile-bio');
  if (bioEl) bioEl.textContent = p.bio;

  // Stats
  const statSystems = document.getElementById('stat-systems');
  if (statSystems) statSystems.textContent = p.stats.systemsCount;

  const statStudents = document.getElementById('stat-students');
  if (statStudents) statStudents.textContent = p.stats.studentsTrained;

  const statResources = document.getElementById('stat-resources');
  if (statResources) statResources.textContent = p.stats.resourcesCount;

  // Skills chips
  const skillsContainer = document.getElementById('profile-skills');
  if (skillsContainer && p.skills) {
    skillsContainer.innerHTML = p.skills.map(skill => `
      <span class="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-dark-700/80 text-gold-400 border border-gold-500/20">
        # ${escapeHtml(skill)}
      </span>
    `).join('');
  }

  // Social links
  if (p.contacts) {
    setLinkHref('link-zalo', p.contacts.zalo);
    setLinkHref('link-facebook', p.contacts.facebook);
    setLinkHref('link-github', p.contacts.github);
    setLinkHref('link-email', `mailto:${p.contacts.email}`);
  }
}

function setLinkHref(elementId, url) {
  const el = document.getElementById(elementId);
  if (el && url) el.href = url;
}

// 2. Render Danh mục (Categories)
function renderCategories() {
  const catNav = document.getElementById('category-nav');
  if (!catNav) return;

  catNav.innerHTML = PORTFOLIO_DATA.categories.map(cat => {
    const isActive = cat.id === activeCategory;
    const activeClass = isActive
      ? 'bg-gold-500/15 text-gold-400 border-gold-500/40 shadow-xs'
      : 'text-slate-300 hover:text-white hover:bg-white/5 border-transparent';

    return `
      <button 
        onclick="selectCategory('${cat.id}')"
        class="cat-btn w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-heading font-medium flex items-center justify-between border transition-all ${activeClass}"
        data-cat="${cat.id}">
        <span class="flex items-center gap-2.5">
          <i data-lucide="${cat.icon}" class="w-4 h-4 text-gold-400"></i>
          <span>${escapeHtml(cat.name)}</span>
        </span>
        <span class="text-[11px] opacity-60 font-mono">
          ${getCategoryCount(cat.id)}
        </span>
      </button>
    `;
  }).join('');
}

function getCategoryCount(catId) {
  if (catId === 'all') return PORTFOLIO_DATA.systems.length + PORTFOLIO_DATA.studentLibrary.length;
  if (catId === 'library') return PORTFOLIO_DATA.studentLibrary.length;
  return PORTFOLIO_DATA.systems.filter(s => s.categoryId === catId).length;
}

function selectCategory(catId) {
  activeCategory = catId;
  renderCategories();
  renderSystems();
  renderStudentLibrary();
  lucide.createIcons();

  // Scroll to section on mobile
  if (window.innerWidth < 1024) {
    const target = document.getElementById(catId === 'library' ? 'student-library-section' : 'systems-section');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  }
}

// 3. Render 6 Hệ thống đã xây dựng
function renderSystems() {
  const container = document.getElementById('systems-container');
  const countEl = document.getElementById('systems-count-badge');
  if (!container) return;

  let filtered = PORTFOLIO_DATA.systems;

  // Filter by category
  if (activeCategory !== 'all' && activeCategory !== 'library') {
    filtered = filtered.filter(s => s.categoryId === activeCategory);
  }

  // Filter by search query
  if (currentSearchQuery.trim() !== '') {
    const q = currentSearchQuery.toLowerCase();
    filtered = filtered.filter(s => 
      s.title.toLowerCase().includes(q) ||
      s.subtitle.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.features.some(f => f.toLowerCase().includes(q))
    );
  }

  if (countEl) {
    countEl.textContent = `${filtered.length} hệ thống`;
  }

  // Hide systems section if only library category is selected
  const systemsSection = document.getElementById('systems-section');
  if (systemsSection) {
    if (activeCategory === 'library') {
      systemsSection.classList.add('hidden');
    } else {
      systemsSection.classList.remove('hidden');
    }
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center glass-card rounded-2xl p-8 border border-white/10">
        <i data-lucide="search-x" class="w-12 h-12 text-slate-500 mx-auto mb-3"></i>
        <h4 class="text-base font-heading font-bold text-slate-300">Không tìm thấy công cụ phù hợp</h4>
        <p class="text-xs text-slate-400 mt-1">Hãy thử tìm với từ khóa khác như: nề nếp, thi cử, 3D, giáo án, học phí...</p>
        <button onclick="resetFilters()" class="mt-4 px-4 py-2 bg-gold-500/20 hover:bg-gold-500/30 text-gold-300 text-xs font-bold rounded-xl border border-gold-500/30 transition-all">
          Xem lại tất cả công cụ
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(sys => {
    const badgeColorClass = getBadgeColorClasses(sys.badgeColor);
    return `
      <div class="glass-card-interactive rounded-2xl overflow-hidden flex flex-col group border border-white/10 hover:border-gold-500/40 transition-all duration-300">
        <!-- Media / Mockup Header -->
        <div class="tool-media-wrapper relative border-b border-white/10 bg-dark-900/80">
          <img src="${sys.image}" alt="${escapeHtml(sys.title)}" loading="lazy" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-black/30"></div>
          
          <!-- Category & Status Badges -->
          <div class="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
            <span class="px-2.5 py-1 text-[11px] font-bold rounded-lg ${badgeColorClass} backdrop-blur-md shadow-sm">
              ${escapeHtml(sys.badge)}
            </span>
            <span class="px-2.5 py-1 text-[10px] font-semibold rounded-lg bg-dark-900/90 text-slate-300 border border-white/10 backdrop-blur-md flex items-center gap-1.5">
              <span class="pulse-dot"></span> Đang hoạt động
            </span>
          </div>

          <!-- Bottom Title overlay -->
          <div class="absolute bottom-3 left-3 right-3 pointer-events-none">
            <p class="text-[11px] font-bold text-gold-400 tracking-wide uppercase">${getCategoryName(sys.categoryId)}</p>
            <h3 class="font-heading font-extrabold text-base sm:text-lg text-white leading-snug drop-shadow-md">
              ${escapeHtml(sys.title)}
            </h3>
          </div>
        </div>

        <!-- Body Content -->
        <div class="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
          <div class="space-y-3">
            <p class="text-xs text-slate-300 leading-relaxed">
              ${escapeHtml(sys.description)}
            </p>

            <!-- Key Features Checklist -->
            <div class="space-y-1.5 pt-2 border-t border-white/5">
              <h5 class="text-[11px] font-heading font-bold text-gold-400/90 uppercase tracking-wider flex items-center gap-1.5">
                <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-gold-400"></i> Các chức năng cốt lõi:
              </h5>
              <ul class="space-y-1.5 text-xs text-slate-300">
                ${sys.features.slice(0, 3).map(feat => `
                  <li class="flex items-start gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 flex-shrink-0"></span>
                    <span class="leading-tight text-slate-300">${escapeHtml(feat)}</span>
                  </li>
                `).join('')}
                ${sys.features.length > 3 ? `
                  <li class="text-[11px] text-slate-400 italic">
                    + Và ${sys.features.length - 3} chức năng chuyên sâu khác...
                  </li>
                ` : ''}
              </ul>
            </div>
          </div>

          <!-- Card Actions (Link trải nghiệm & Tài khoản test) -->
          <div class="pt-3 border-t border-white/10 flex flex-col sm:flex-row gap-2">
            <button 
              onclick="openToolDetailModal('${sys.id}')"
              class="flex-1 px-3.5 py-2.5 rounded-xl bg-gold-500/15 hover:bg-gold-500/25 text-gold-300 border border-gold-500/30 font-heading font-bold text-xs sm:text-[13px] flex items-center justify-center gap-2 transition-all shadow-xs">
              <i data-lucide="key-round" class="w-4 h-4 text-gold-400"></i>
              <span>Tài khoản & Hướng dẫn</span>
            </button>

            <a 
              href="${sys.demoLink}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex-1 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-gold-500 to-amber-500 hover:from-gold-400 hover:to-amber-400 text-dark-900 font-heading font-extrabold text-xs sm:text-[13px] flex items-center justify-center gap-1.5 transition-all shadow-glow-gold">
              <span>Trải nghiệm ngay</span>
              <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// 4. Render Thư viện học sinh (Student Library)
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
      item.description.toLowerCase().includes(q) ||
      item.hardware.some(h => h.toLowerCase().includes(q))
    );
  }

  if (countEl) {
    countEl.textContent = `${items.length} tài nguyên STEM`;
  }

  // Hide library if specific non-library category is selected
  const libSection = document.getElementById('student-library-section');
  if (libSection) {
    if (activeCategory !== 'all' && activeCategory !== 'library') {
      libSection.classList.add('hidden');
    } else {
      libSection.classList.remove('hidden');
    }
  }

  if (items.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-10 text-center glass-card rounded-2xl p-6 border border-white/10">
        <p class="text-xs text-slate-400">Không tìm thấy mã nguồn hoặc sơ đồ nào phù hợp với từ khóa.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(item => `
    <div class="glass-card-interactive rounded-2xl p-5 border border-white/10 flex flex-col justify-between space-y-4 hover:border-sky-500/40">
      <div class="space-y-3">
        <div class="flex items-center justify-between gap-2">
          <span class="px-2.5 py-0.5 text-[11px] font-bold rounded-lg bg-sky-500/15 text-sky-300 border border-sky-500/30">
            ${escapeHtml(item.badge)}
          </span>
          <span class="text-[11px] text-slate-400 font-mono">
            Mức độ: <strong class="text-gold-400">${escapeHtml(item.difficulty)}</strong>
          </span>
        </div>

        <h4 class="font-heading font-bold text-sm sm:text-base text-white leading-snug">
          ${escapeHtml(item.title)}
        </h4>

        <p class="text-xs text-slate-300 leading-relaxed">
          ${escapeHtml(item.description)}
        </p>

        <!-- Hardware Components Preview -->
        <div class="bg-dark-900/60 rounded-xl p-3 border border-white/5 space-y-1.5">
          <p class="text-[11px] font-heading font-bold text-slate-400 uppercase tracking-wide flex items-center gap-1.5">
            <i data-lucide="layers" class="w-3.5 h-3.5 text-sky-400"></i> Linh kiện & Yêu cầu:
          </p>
          <div class="flex flex-wrap gap-1.5">
            ${item.hardware.map(h => `
              <span class="px-2 py-0.5 text-[10px] rounded-md bg-dark-700 text-slate-200 border border-white/5">
                ${escapeHtml(h)}
              </span>
            `).join('')}
          </div>
        </div>

        <div class="text-[11px] text-slate-400 leading-snug">
          <strong class="text-emerald-400">⚡ Sơ đồ:</strong> ${escapeHtml(item.wiringGuide)}
        </div>
      </div>

      <!-- Actions: Xem code & Sơ đồ nối dây -->
      <div class="pt-3 border-t border-white/10 flex items-center gap-2">
        <button 
          onclick="openCodeViewerModal('${item.id}')"
          class="flex-1 px-3 py-2 rounded-xl bg-sky-500/15 hover:bg-sky-500/25 text-sky-300 border border-sky-500/30 text-xs font-heading font-bold flex items-center justify-center gap-1.5 transition-all">
          <i data-lucide="code-2" class="w-3.5 h-3.5"></i>
          <span>Xem mã nguồn & Copy</span>
        </button>

        <button 
          onclick="openDiagramModal('${item.id}')"
          class="px-3 py-2 rounded-xl bg-dark-700 hover:bg-dark-600 text-slate-200 border border-white/10 text-xs font-heading font-semibold flex items-center justify-center gap-1.5 transition-all"
          title="Xem sơ đồ nối dây phóng to">
          <i data-lucide="network" class="w-3.5 h-3.5 text-gold-400"></i>
          <span class="hidden sm:inline">Sơ đồ mạch</span>
        </button>
      </div>
    </div>
  `).join('');
}

// 5. Tool Detail & Demo Credentials Modal
function openToolDetailModal(toolId) {
  const tool = PORTFOLIO_DATA.systems.find(s => s.id === toolId);
  if (!tool) return;

  const modal = document.getElementById('tool-detail-modal');
  const modalContent = document.getElementById('tool-modal-content');
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <!-- Modal Header -->
    <div class="p-5 sm:p-6 border-b border-white/10 flex items-start justify-between gap-4">
      <div class="flex items-center gap-3.5">
        <div class="w-12 h-12 rounded-2xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center flex-shrink-0 text-gold-400 shadow-glow-gold">
          <i data-lucide="shield-check" class="w-6 h-6"></i>
        </div>
        <div>
          <span class="px-2.5 py-0.5 text-[10px] font-bold rounded-md bg-gold-500/20 text-gold-300 border border-gold-500/30 uppercase tracking-wide">
            ${getCategoryName(tool.categoryId)}
          </span>
          <h3 class="text-lg sm:text-xl font-heading font-extrabold text-white leading-snug mt-1">
            ${escapeHtml(tool.title)}
          </h3>
          <p class="text-xs text-slate-400">${escapeHtml(tool.subtitle)}</p>
        </div>
      </div>
      <button onclick="closeModal('tool-detail-modal')" class="p-1.5 text-slate-400 hover:text-white rounded-xl hover:bg-white/10 transition-colors">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
    </div>

    <!-- Modal Body -->
    <div class="p-5 sm:p-6 space-y-6 max-h-[70vh] overflow-y-auto">
      <!-- Full Description -->
      <div class="space-y-2">
        <h5 class="text-xs font-heading font-bold text-gold-400 uppercase tracking-wider flex items-center gap-1.5">
          <i data-lucide="info" class="w-4 h-4"></i> Giới thiệu giải pháp
        </h5>
        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed bg-dark-900/60 p-3.5 rounded-xl border border-white/5">
          ${escapeHtml(tool.description)}
        </p>
      </div>

      <!-- Credentials Box with 1-Click Copy -->
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <h5 class="text-xs font-heading font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <i data-lucide="key" class="w-4 h-4 text-emerald-400"></i> Tài khoản & Mật khẩu trải nghiệm
          </h5>
          <span class="text-[11px] text-slate-400 italic">Bấm vào ô để sao chép nhanh</span>
        </div>

        <div class="space-y-2.5">
          ${tool.credentials.map((cred, idx) => `
            <div class="bg-dark-900/90 rounded-xl p-3.5 border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div class="space-y-1">
                <span class="px-2 py-0.5 text-[10px] font-bold rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  ${escapeHtml(cred.role)}
                </span>
                <p class="text-[11px] text-slate-400 mt-1">${escapeHtml(cred.note)}</p>
              </div>

              <div class="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                <!-- Username button -->
                <button 
                  onclick="copyToClipboard('${escapeJs(cred.username)}', 'Đã sao chép Tên đăng nhập!')"
                  class="px-3 py-1.5 bg-dark-700 hover:bg-dark-600 rounded-lg border border-white/10 text-xs font-mono text-gold-300 flex items-center gap-1.5 transition-colors group"
                  title="Sao chép tên đăng nhập">
                  <span class="text-[10px] text-slate-400 font-sans">User:</span>
                  <span class="font-bold">${escapeHtml(cred.username)}</span>
                  <i data-lucide="copy" class="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 text-gold-400"></i>
                </button>

                <!-- Password button -->
                <button 
                  onclick="copyToClipboard('${escapeJs(cred.password)}', 'Đã sao chép Mật khẩu!')"
                  class="px-3 py-1.5 bg-dark-700 hover:bg-dark-600 rounded-lg border border-white/10 text-xs font-mono text-emerald-300 flex items-center gap-1.5 transition-colors group"
                  title="Sao chép mật khẩu">
                  <span class="text-[10px] text-slate-400 font-sans">Pass:</span>
                  <span class="font-bold">${escapeHtml(cred.password)}</span>
                  <i data-lucide="copy" class="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 text-emerald-400"></i>
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- All Features List -->
      <div class="space-y-2">
        <h5 class="text-xs font-heading font-bold text-gold-400 uppercase tracking-wider flex items-center gap-1.5">
          <i data-lucide="list-checks" class="w-4 h-4"></i> Danh sách chức năng đầy đủ
        </h5>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${tool.features.map(f => `
            <div class="p-2.5 rounded-xl bg-dark-900/50 border border-white/5 flex items-start gap-2 text-xs text-slate-300">
              <i data-lucide="check" class="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5"></i>
              <span>${escapeHtml(f)}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Modal Footer -->
    <div class="p-4 sm:p-5 border-t border-white/10 bg-dark-900/80 flex items-center justify-between gap-3">
      <span class="text-xs text-slate-400 hidden sm:inline">Phát triển bởi Thầy Nguyễn Văn Cường</span>
      <div class="flex items-center gap-2 w-full sm:w-auto">
        <button 
          onclick="closeModal('tool-detail-modal')"
          class="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-dark-700 hover:bg-dark-600 text-slate-300 text-xs font-heading font-bold transition-all">
          Đóng
        </button>
        <a 
          href="${tool.demoLink}" 
          target="_blank" 
          rel="noopener noreferrer"
          class="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-gradient-to-r from-gold-500 to-amber-500 hover:from-gold-400 hover:to-amber-400 text-dark-900 font-heading font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-glow-gold">
          <span>Mở trang trải nghiệm</span>
          <i data-lucide="external-link" class="w-4 h-4"></i>
        </a>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  lucide.createIcons();
}

// 6. Code Viewer Modal for Students
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

// 7. Diagram Modal
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

// 8. Event Listeners & Search
function setupEventListeners() {
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      renderSystems();
      renderStudentLibrary();
      lucide.createIcons();
    });
  }

  // Close modals on clicking outside or Esc key
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
        if (e.target === modal) {
          closeModal(id);
        }
      });
    }
  });
}

function resetFilters() {
  activeCategory = 'all';
  currentSearchQuery = '';
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  renderCategories();
  renderSystems();
  renderStudentLibrary();
  lucide.createIcons();
}

// 9. Toast Notification & Copy to Clipboard
function copyToClipboard(text, successMessage) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(successMessage || 'Đã sao chép vào bộ nhớ tạm!');
  }).catch(() => {
    // Fallback
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
    <i data-lucide="check-circle" class="w-4 h-4 text-emerald-400 flex-shrink-0"></i>
    <span class="font-medium">${escapeHtml(message)}</span>
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
  }, 2500);
}

// Helpers
function getCategoryName(catId) {
  const cat = PORTFOLIO_DATA.categories.find(c => c.id === catId);
  return cat ? cat.name : 'Công cụ giáo dục';
}

function getBadgeColorClasses(color) {
  switch (color) {
    case 'gold': return 'badge-gold';
    case 'emerald': return 'badge-emerald';
    case 'sky': return 'badge-sky';
    case 'purple': return 'badge-purple';
    default: return 'badge-gold';
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
