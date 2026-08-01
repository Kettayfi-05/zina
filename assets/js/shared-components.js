/* ========================================
   ZINA - shared-components.js
   ======================================== */

const SharedComponents = {
  getHeader() {
    return `
<header class="fixed top-0 left-0 w-full z-50 bg-background-light/40 backdrop-blur-md border-b border-primary/10">
  <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
    <div class="flex-1 flex items-center">
      <button id="mobile-menu-btn" class="p-2 -ml-2 hover:text-primary transition-colors" aria-label="Menu">
        <span class="material-icons-outlined text-2xl">menu</span>
      </button>
    </div>
    <div class="flex-1 flex justify-center items-center">
      <a href="/index.html" class="inline-flex items-center justify-center">
        <img src="/assets/images/branding/zinalogo.png" alt="Zina Logo" class="h-14 md:h-20 w-auto">
      </a>
    </div>
    <div class="flex-1 flex items-center justify-end space-x-2 md:space-x-4">
      <a href="/shop.html" class="hidden sm:block text-[10px] font-bold tracking-[0.2em] uppercase hover:text-primary transition-colors mr-2">
        Collection
      </a>
      <button onclick="toggleDarkMode()" class="p-2 hover:text-primary transition-colors">
        <span class="material-icons-outlined text-[20px] dark:hidden">dark_mode</span>
        <span class="material-icons-outlined text-[20px] hidden dark:block">light_mode</span>
      </button>
      <div class="relative" id="auth-dropdown-wrapper">
        <button id="auth-dropdown-btn" class="p-2 hover:text-primary transition-colors">
          <span class="material-icons-outlined text-[20px]">person</span>
        </button>
        <div id="auth-dropdown" class="dropdown-menu"></div>
      </div>
      <a href="/cart.html" class="p-2 relative hover:text-primary transition-colors">
        <span class="material-icons-outlined text-[20px]">shopping_bag</span>
        <span id="cart-badge" class="absolute top-1 right-1 w-4 h-4 bg-primary rounded-full text-white text-[9px] flex items-center justify-center font-bold" style="display:none;">0</span>
      </a>
    </div>
  </div>
</header>
<div class="h-20"></div>

<!-- MENU LATÉRAL -->
<div id="mobile-menu" class="fixed inset-0 z-[60] hidden">
  <div id="menu-overlay" class="absolute inset-0 bg-black/5 backdrop-blur-[2px]"></div>
  <aside id="menu-panel" class="absolute left-0 top-0 h-full w-[250px] bg-white/60 dark:bg-background-dark/60 backdrop-blur-xl shadow-2xl border-r border-primary/5 -translate-x-full transition-transform duration-300 ease-out flex flex-col">
    <div class="p-6 flex items-center justify-between border-b border-primary/5">
      <span class="text-[10px] font-bold tracking-[0.3em] uppercase text-primary">Navigation</span>
      <button id="close-menu-btn" class="p-2"><span class="material-icons-outlined text-xl">close</span></button>
    </div>
    <nav class="flex-grow p-6 overflow-y-auto">
      <div class="flex flex-col items-start space-y-4">
        <a href="/index.html" class="zina-menu-link-vertical">ACCUEIL</a>
        <a href="/shop.html" class="zina-menu-link-vertical">LA COLLECTION</a>
        <div class="pt-6 pb-1"><span class="text-[9px] font-bold tracking-[0.2em] uppercase opacity-40">Catégories</span></div>
        <a href="/shop.html?category=bagues" class="zina-menu-link-vertical pl-2 text-sm">Bagues</a>
        <a href="/shop.html?category=colliers" class="zina-menu-link-vertical pl-2 text-sm">Colliers</a>
        <a href="/shop.html?category=boucles" class="zina-menu-link-vertical pl-2 text-sm">Boucles d'oreilles</a>
        <a href="/shop.html?category=bracelets" class="zina-menu-link-vertical pl-2 text-sm">Bracelets</a>
        <a href="/shop.html?category=beldi" class="zina-menu-link-vertical pl-2 text-sm">Beldi</a>
        <a href="/shop.html?category=ensembles" class="zina-menu-link-vertical pl-2 text-sm">Ensembles</a>
        <div class="w-full border-t border-primary/5 my-6 pt-6">
          <a href="/contact.html" class="zina-menu-link-vertical">CONTACT</a>
        </div>
      </div>
    </nav>
  </aside>
</div>

<style>
  .zina-menu-link-vertical { display: block !important; width: 100%; text-align: left; padding: 12px 0; font-size: 0.9rem; font-weight: 600; letter-spacing: 0.1em; color: var(--color-black); transition: all 0.2s ease; text-decoration: none; }
  .dark .zina-menu-link-vertical { color: #F8F6F2; }
  .zina-menu-link-vertical:hover { color: var(--color-gold); transform: translateX(10px); }
</style>
`;
  },

  getFooter() {
    return `<footer class="bg-zina-black text-zina-ivory py-16 border-t border-primary/10">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <p class="text-[10px] tracking-[0.3em] uppercase opacity-40">© 2024 Zina Jewelry - Éclat Éternel</p>
      </div>
    </footer>`;
  },

  initHeaderEvents() {
    const btn = document.getElementById("mobile-menu-btn");
    const menu = document.getElementById("mobile-menu");
    const panel = document.getElementById("menu-panel");
    const overlay = document.getElementById("menu-overlay");
    const closeBtn = document.getElementById("close-menu-btn");

    const openMenu = () => { menu.classList.remove("hidden"); setTimeout(() => panel.classList.remove("-translate-x-full"), 10); };
    const closeMenu = () => { panel.classList.add("-translate-x-full"); setTimeout(() => menu.classList.add("hidden"), 300); };

    btn?.addEventListener("click", openMenu);
    closeBtn?.addEventListener("click", closeMenu);
    overlay?.addEventListener("click", closeMenu);

    const authBtn = document.getElementById("auth-dropdown-btn");
    const authDD = document.getElementById("auth-dropdown");
    const authWrap = document.getElementById("auth-dropdown-wrapper");

    if (authBtn && authDD) {
      authBtn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        // Rafraîchir les liens juste avant d'ouvrir pour être sûr
        this.renderAuthLinks();
        
        authDD.classList.toggle("active");
      };
      
      document.addEventListener("click", (e) => {
        if (authWrap && !authWrap.contains(e.target)) {
          authDD.classList.remove("active");
        }
      });
    }

    // Premier essai au chargement
    this.renderAuthLinks();
  },

  renderAuthLinks() {
    const dropdown = document.getElementById("auth-dropdown");
    if (!dropdown) return;

    // Si Auth n'est pas encore chargé, on affiche quand même les liens par défaut
    // au lieu de laisser le menu vide.
    if (typeof Auth === 'undefined') {
      dropdown.innerHTML = `
        <a href="/auth/login.html" class="dropdown-item">Se connecter</a>
        <a href="/auth/register.html" class="dropdown-item">S'inscrire</a>
      `;
      return;
    }
    
    const user = Auth.getCurrentUser();
    if (user) {
      dropdown.innerHTML = `
        <div class="px-6 py-4 border-b border-primary/10 bg-primary/5">
          <p class="text-[9px] font-black tracking-[0.2em] uppercase opacity-40 mb-1">Compte</p>
          <p class="text-sm font-bold truncate">${user.name}</p>
        </div>
        <div class="py-2">
          <a href="/profile.html" class="dropdown-item flex items-center gap-3 py-3 px-6 hover:bg-primary/5 transition-colors">
            <span class="material-icons-outlined text-sm">person</span>
            <span>Mon profil</span>
          </a>
          ${user.role === "admin" ? `
          <a href="/admin/dashboard.html" class="dropdown-item flex items-center gap-3 py-3 px-6 hover:bg-primary/5 transition-colors font-bold text-primary">
            <span class="material-icons-outlined text-sm">dashboard</span>
            <span>Tableau de bord</span>
          </a>` : ""}
          <div class="border-t border-primary/5 mt-2 pt-2">
            <button id="logout-btn" class="w-full flex items-center gap-3 py-3 px-6 text-left text-red-500 hover:bg-red-50 transition-colors">
              <span class="material-icons-outlined text-sm">logout</span>
              <span class="font-bold uppercase tracking-widest text-[10px]">Déconnexion</span>
            </button>
          </div>
        </div>
      `;
      document.getElementById("logout-btn")?.addEventListener("click", () => { Auth.logout(); window.location.reload(); });
    } else {
      dropdown.innerHTML = `
        <a href="/auth/login.html" class="dropdown-item">Se connecter</a>
        <a href="/auth/register.html" class="dropdown-item">S'inscrire</a>
      `;
    }
  }
};

(function() {
  const init = () => {
    const h = document.getElementById("header-container");
    if (h) { h.innerHTML = SharedComponents.getHeader(); SharedComponents.initHeaderEvents(); }
    const f = document.getElementById("footer-container");
    if (f) f.innerHTML = SharedComponents.getFooter();
  };
  if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", init); } else { init(); }
})();
