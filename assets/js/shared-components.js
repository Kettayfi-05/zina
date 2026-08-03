/* ========================================
   ZINA - shared-components.js
   ======================================== */

const SharedComponents = {
  getHeader() {
    return `
<header class="fixed top-0 left-0 w-full z-50 bg-[#F8F6F2]/80 backdrop-blur-md border-b border-primary/10">
  <div class="max-w-[1600px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
    <div class="flex-1 flex items-center">
      <button id="mobile-menu-btn" class="icon-btn -ml-2 animate-fade-in" aria-label="Menu">
        <span class="material-icons-outlined text-[28px]">menu</span>
      </button>
    </div>
    <div class="flex-1 flex justify-center items-center">
      <a href="/index.html" class="inline-flex items-center justify-center py-2">
        <img src="/assets/images/branding/zinalogo.png" alt="Zina Logo" class="h-12 md:h-16 w-auto">
      </a>
    </div>
    <div class="flex-1 flex items-center justify-end space-x-3 md:space-x-5">
      <a href="/shop.html" class="hidden sm:block text-xs font-bold tracking-[0.18em] uppercase hover:text-primary transition-colors mr-2 text-zina-black">
        Collection
      </a>
      <!-- Dark mode toggle removed -->
      <div class="relative" id="auth-dropdown-wrapper">
        <button id="auth-dropdown-btn" class="icon-btn" aria-label="Compte">
          <span class="material-icons-outlined text-[24px]">person</span>
        </button>
        <div id="auth-dropdown" class="dropdown-menu" style="width: 240px;"></div>
      </div>

      <!-- Notifications Bell Icon -->
      <div class="relative" id="notifications-dropdown-wrapper" style="display: none;">
        <button id="notifications-btn" class="icon-btn relative" aria-label="Notifications">
          <span class="material-icons-outlined text-[24px]">notifications</span>
          <span id="notifications-badge" class="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-primary rounded-full text-white text-[9px] flex items-center justify-center font-black shadow-sm" style="display:none;">0</span>
        </button>
        <div id="notifications-dropdown" class="dropdown-menu w-[320px] max-h-[400px] overflow-y-auto"></div>
      </div>

      <a href="/cart.html" id="cart-btn" class="icon-btn relative" aria-label="Panier">
        <span class="material-icons-outlined text-[24px]">shopping_bag</span>
        <span id="cart-badge" class="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-primary rounded-full text-white text-[9px] flex items-center justify-center font-black shadow-sm" style="display:none;">0</span>
      </a>
    </div>
  </div>
</header>
<div class="h-20"></div>

<!-- MENU LATÉRAL -->
<div id="mobile-menu" class="fixed inset-0 z-[60] hidden">
  <div id="menu-overlay" class="absolute inset-0 bg-black/5 backdrop-blur-[2px]"></div>
  <aside id="menu-panel" class="absolute left-0 top-0 h-full w-[280px] bg-white/95 dark:bg-background-dark/95 backdrop-blur-xl shadow-2xl border-r border-primary/5 -translate-x-full transition-transform duration-300 ease-out flex flex-col">
    <div class="p-6 flex items-center justify-between border-b border-primary/5">
      <span class="text-xs font-bold tracking-[0.2em] uppercase text-primary">Navigation</span>
      <button id="close-menu-btn" class="p-2"><span class="material-icons-outlined text-2xl">close</span></button>
    </div>
    <nav class="flex-grow p-6 overflow-y-auto">
      <div class="flex flex-col items-start space-y-4">
        <a href="/index.html" class="zina-menu-link-vertical text-base">ACCUEIL</a>
        <a href="/shop.html" class="zina-menu-link-vertical text-base">LA COLLECTION</a>
        <div class="pt-6 pb-1"><span class="text-[10px] font-bold tracking-[0.2em] uppercase opacity-45">Catégories</span></div>
        <a href="/shop.html?category=bagues" class="zina-menu-link-vertical pl-3 text-sm">Bagues</a>
        <a href="/shop.html?category=colliers" class="zina-menu-link-vertical pl-3 text-sm">Colliers</a>
        <a href="/shop.html?category=boucles" class="zina-menu-link-vertical pl-3 text-sm">Boucles d'oreilles</a>
        <a href="/shop.html?category=bracelets" class="zina-menu-link-vertical pl-3 text-sm">Bracelets</a>
        <a href="/shop.html?category=beldi" class="zina-menu-link-vertical pl-3 text-sm">Beldi</a>
        <a href="/shop.html?category=ensembles" class="zina-menu-link-vertical pl-3 text-sm">Ensembles</a>
        <div class="w-full border-t border-primary/5 my-6 pt-6">
          <a href="/contact.html" class="zina-menu-link-vertical text-base">CONTACT</a>
        </div>
      </div>
    </nav>
  </aside>
</div>

<style>
  .zina-menu-link-vertical { display: block !important; width: 100%; text-align: left; padding: 12px 0; font-size: 0.95rem; font-weight: 600; letter-spacing: 0.1em; color: var(--color-black); transition: all 0.2s ease; text-decoration: none; }
  .dark .zina-menu-link-vertical { color: #F8F6F2; }
  .zina-menu-link-vertical:hover { color: var(--color-gold); transform: translateX(10px); }
</style>
`;
  },

  getFooter() {
    return `
<footer class="bg-[#0B0907] text-zina-ivory pt-20 pb-12 border-t border-primary/25 relative overflow-hidden">
  <!-- Subtle decorative glow -->
  <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

  <div class="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
      
      <!-- Col 1: Maison ZINA -->
      <div class="space-y-6">
        <a href="/index.html" class="inline-block">
          <img src="/assets/images/branding/zinalogo.png" alt="Zina Logo" class="h-16 w-auto brightness-0 invert opacity-90">
        </a>
        <p class="text-zinc-300 text-sm font-normal leading-relaxed max-w-xs">
          Créations joaillières d'exception façonnées à la main. L'élégance intemporelle alliée à l'éclat de l'or massif 18 carats et de pierres d'exception.
        </p>
        <div class="flex items-center gap-4 pt-2">
          <a href="https://instagram.com" target="_blank" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary transition-all duration-300">
            <span class="material-icons-outlined text-lg">camera_alt</span>
          </a>
          <a href="#" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary transition-all duration-300">
            <span class="material-icons-outlined text-lg">share</span>
          </a>
          <a href="mailto:contactzina@gmail.com" class="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary transition-all duration-300">
            <span class="material-icons-outlined text-lg">email</span>
          </a>
        </div>
      </div>

      <!-- Col 2: Collections -->
      <div class="space-y-5">
        <h4 class="text-sm font-bold uppercase tracking-[0.18em] text-primary">Collections</h4>
        <ul class="space-y-3.5 text-sm font-normal text-zinc-400">
          <li><a href="/shop.html?category=bagues" class="hover:text-primary transition-colors">Bagues</a></li>
          <li><a href="/shop.html?category=colliers" class="hover:text-primary transition-colors">Colliers</a></li>
          <li><a href="/shop.html?category=boucles" class="hover:text-primary transition-colors">Boucles d'oreilles</a></li>
          <li><a href="/shop.html?category=bracelets" class="hover:text-primary transition-colors">Bracelets</a></li>
          <li><a href="/shop.html?category=beldi" class="hover:text-primary transition-colors">Collection Beldi</a></li>
        </ul>
      </div>

      <!-- Col 3: Maison & Services -->
      <div class="space-y-5">
        <h4 class="text-sm font-bold uppercase tracking-[0.18em] text-primary">Maison & Services</h4>
        <ul class="space-y-3.5 text-sm font-normal text-zinc-400">
          <li><a href="/contact.html" class="hover:text-primary transition-colors">Contactez-nous</a></li>
          <li><a href="#" onclick="event.preventDefault(); if(typeof AIAgent !== 'undefined') { AIAgent.isOpen = true; document.getElementById('zina-ai-panel').classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none'); }" class="hover:text-primary transition-colors">Concierge Virtuel</a></li>
          <li><a href="#" onclick="event.preventDefault(); SharedComponents.showInfoModal('size_guide')" class="hover:text-primary transition-colors">Guide des tailles</a></li>
          <li><a href="#" onclick="event.preventDefault(); SharedComponents.showInfoModal('care_tips')" class="hover:text-primary transition-colors">Conseils d'entretien</a></li>
          <li><a href="#" onclick="event.preventDefault(); SharedComponents.showInfoModal('shipping_returns')" class="hover:text-primary transition-colors">Livraisons & Retours</a></li>
        </ul>
      </div>

      <!-- Col 4: Boutique & Contact -->
      <div class="space-y-5">
        <h4 class="text-sm font-bold uppercase tracking-[0.18em] text-primary">Boutique & Contact</h4>
        <ul class="space-y-4 text-sm font-normal text-zinc-400">
          <li class="flex items-center gap-3">
            <span class="material-icons-outlined text-lg text-primary">phone</span>
            <span>+212 600 000 000</span>
          </li>
          <li class="flex items-center gap-3">
            <span class="material-icons-outlined text-lg text-primary">email</span>
            <span>contactzina@gmail.com</span>
          </li>
        </ul>
      </div>

    </div>

    <!-- Divider -->
    <div class="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-widest uppercase text-zinc-500 font-light">
      <p>© 2026 ZINA Jewelry. Tous droits réservés. Éclat Éternel.</p>
      <div class="flex items-center gap-6">
        <a href="#" class="hover:text-primary transition-colors">Conditions Générales</a>
        <a href="#" class="hover:text-primary transition-colors">Politique de Confidentialité</a>
      </div>
    </div>
  </div>
</footer>
`;
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
    
    const user = (typeof Auth !== 'undefined') ? Auth.getCurrentUser() : null;
    const cartBtn = document.getElementById("cart-btn");
    if (cartBtn) {
      if (user && user.role === 'admin') {
        cartBtn.style.display = 'none';
      } else {
        cartBtn.style.display = '';
      }
    }

    if (user) {
      dropdown.innerHTML = `
        <div class="px-5 py-4 border-b border-primary/10 bg-primary/5">
          <p class="text-[10px] font-bold tracking-[0.15em] uppercase text-zinc-400 mb-1">Compte</p>
          <p class="text-sm font-bold text-zina-black truncate">${user.name}</p>
        </div>
        <div class="py-1">
          <a href="/profile.html" class="flex items-center gap-3 py-3 px-5 hover:bg-primary/5 hover:text-primary transition-colors text-zinc-700 text-sm font-medium">
            <span class="material-icons-outlined text-lg">person</span>
            <span>Mon profil</span>
          </a>
          ${user.role === "client" ? `
          <a href="/wishlist.html" class="flex items-center gap-3 py-3 px-5 hover:bg-primary/5 hover:text-primary transition-colors text-zinc-700 text-sm font-medium">
            <span class="material-icons-outlined text-lg">favorite_border</span>
            <span>Mes favoris</span>
          </a>` : ""}
          ${user.role === "admin" ? `
          <a href="/admin/dashboard.html" class="flex items-center gap-3 py-3 px-5 hover:bg-primary/5 hover:text-primary transition-colors text-zinc-700 font-bold text-primary">
            <span class="material-icons-outlined text-lg">dashboard</span>
            <span>Tableau de bord</span>
          </a>
          <a href="/admin/chatbot.html" class="flex items-center gap-3 py-3 px-5 hover:bg-primary/5 hover:text-primary transition-colors text-zinc-700 font-bold text-primary">
            <span class="material-icons-outlined text-lg">psychology</span>
            <span>Entraîner le Bot</span>
          </a>` : ""}
          <div class="border-t border-primary/10 my-1 pt-1">
            <button id="logout-btn" class="w-full flex items-center gap-3 py-3 px-5 text-left text-red-500 hover:bg-red-50/50 transition-colors">
              <span class="material-icons-outlined text-lg">logout</span>
              <span class="text-sm font-medium">Déconnexion</span>
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
  },

  initNotificationEvents() {
    const btn = document.getElementById("notifications-btn");
    const dropdown = document.getElementById("notifications-dropdown");
    const wrapper = document.getElementById("notifications-dropdown-wrapper");

    if (btn && dropdown) {
      btn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        this.updateNotificationsUI();
        dropdown.classList.toggle("active");
      };
      
      document.addEventListener("click", (e) => {
        if (wrapper && !wrapper.contains(e.target)) {
          dropdown.classList.remove("active");
        }
      });
    }

    // Écouter les événements globaux
    window.addEventListener('zina_new_notification', () => this.updateNotificationsUI());
    window.addEventListener('zina_notifications_updated', () => this.updateNotificationsUI());
    
    this.updateNotificationsUI();
  },

  updateNotificationsUI() {
    const btnWrapper = document.getElementById("notifications-dropdown-wrapper");
    const badge = document.getElementById("notifications-badge");
    const dropdown = document.getElementById("notifications-dropdown");

    if (typeof Auth === 'undefined' || typeof Notifications === 'undefined') {
      if (btnWrapper) btnWrapper.style.display = 'none';
      return;
    }

    const user = Auth.getCurrentUser();
    if (!user) {
      if (btnWrapper) btnWrapper.style.display = 'none';
      return;
    }

    if (btnWrapper) btnWrapper.style.display = 'block';

    const unreadCount = Notifications.getUnreadCount(user);
    if (badge) {
      if (unreadCount > 0) {
        badge.textContent = unreadCount;
        badge.style.display = 'flex';
      } else {
        badge.style.display = 'none';
      }
    }

    if (!dropdown) return;

    const notifs = Notifications.getForUser(user);

    let html = `
      <div class="px-4 py-3 border-b border-primary/10 bg-primary/5 flex items-center justify-between sticky top-0 bg-white z-10">
        <span class="text-[10px] font-bold tracking-[0.2em] uppercase opacity-60">Notifications</span>
        ${unreadCount > 0 ? `
          <button onclick="event.stopPropagation(); Notifications.markAllAsRead(Auth.getCurrentUser())" class="text-[9px] font-bold text-primary uppercase hover:underline">Tout lire</button>
        ` : ''}
      </div>
      <div class="divide-y divide-primary/5">
    `;

    if (notifs.length === 0) {
      html += `
        <div class="p-6 text-center text-xs text-zinc-400">
          <span class="material-icons-outlined text-lg block mb-1">notifications_off</span>
          Aucune notification
        </div>
      `;
    } else {
      html += notifs.map(n => {
        let icon = 'info';
        let colorClass = 'text-blue-500 bg-blue-50';
        if (n.type === 'success') { icon = 'check_circle'; colorClass = 'text-emerald-500 bg-emerald-50'; }
        else if (n.type === 'warning') { icon = 'warning'; colorClass = 'text-amber-500 bg-amber-50'; }
        else if (n.type === 'order') { icon = 'shopping_bag'; colorClass = 'text-primary bg-primary/5'; }
        else if (n.type === 'message') { icon = 'email'; colorClass = 'text-purple-500 bg-purple-50'; }

        return `
          <div onclick="event.stopPropagation(); Notifications.markAsRead(${n.id})" class="p-4 flex gap-3 hover:bg-primary/5 transition-colors cursor-pointer ${!n.read ? 'bg-primary/[0.02] font-semibold' : 'opacity-70'}">
            <div class="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${colorClass}">
              <span class="material-icons-outlined text-sm">${icon}</span>
            </div>
            <div class="flex-grow space-y-1">
              <p class="text-xs text-zina-black dark:text-zina-ivory leading-snug">${n.title}</p>
              <p class="text-[11px] text-zinc-400 font-light leading-normal">${n.message}</p>
              <p class="text-[9px] text-zinc-300 font-light">${Notifications.formatDate(n.date)}</p>
            </div>
            ${!n.read ? `
              <div class="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-1.5"></div>
            ` : ''}
          </div>
        `;
      }).join('');
    }

    html += `</div>`;
    dropdown.innerHTML = html;
  },

  showInfoModal(type) {
    const existing = document.getElementById('zina-info-modal');
    if (existing) existing.remove();

    let title = '';
    let content = '';

    if (type === 'size_guide') {
      title = "Guide des Tailles";
      content = `
        <div class="space-y-6 text-sm text-zina-black">
          <p class="text-zinc-500 font-light">Trouvez la taille idéale pour vos créations ZINA. Mesurez la circonférence de votre doigt en millimètres pour les bagues.</p>
          <div class="border border-primary/10 rounded-2xl overflow-hidden bg-zinc-50/50">
            <table class="w-full text-left text-xs border-collapse">
              <thead>
                <tr class="bg-primary/5 text-primary border-b border-primary/10 font-bold">
                  <th class="p-3">Taille ZINA</th>
                  <th class="p-3">Circonférence (mm)</th>
                  <th class="p-3">Diamètre (mm)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-primary/5">
                <tr><td class="p-3 font-semibold">50</td><td class="p-3 font-light text-zinc-600">50 mm</td><td class="p-3 font-light text-zinc-600">15.9 mm</td></tr>
                <tr><td class="p-3 font-semibold">52</td><td class="p-3 font-light text-zinc-600">52 mm</td><td class="p-3 font-light text-zinc-600">16.5 mm</td></tr>
                <tr><td class="p-3 font-semibold">54</td><td class="p-3 font-light text-zinc-600">54 mm</td><td class="p-3 font-light text-zinc-600">17.2 mm</td></tr>
                <tr><td class="p-3 font-semibold">56</td><td class="p-3 font-light text-zinc-600">56 mm</td><td class="p-3 font-light text-zinc-600">17.8 mm</td></tr>
                <tr><td class="p-3 font-semibold">58</td><td class="p-3 font-light text-zinc-600">58 mm</td><td class="p-3 font-light text-zinc-600">18.5 mm</td></tr>
                <tr><td class="p-3 font-semibold">60</td><td class="p-3 font-light text-zinc-600">60 mm</td><td class="p-3 font-light text-zinc-600">19.1 mm</td></tr>
              </tbody>
            </table>
          </div>
          <div class="space-y-2 pt-2 border-t border-primary/5">
            <h5 class="font-bold text-xs uppercase tracking-wider text-primary">Colliers & Sautoirs</h5>
            <p class="text-zinc-500 font-light leading-relaxed">Nos colliers mesurent généralement de 40 cm à 45 cm de long avec un anneau de réglage. Les sautoirs mesurent 80 cm.</p>
          </div>
        </div>
      `;
    } else if (type === 'care_tips') {
      title = "Conseils d'Entretien";
      content = `
        <div class="space-y-4 text-sm font-light leading-relaxed text-zinc-600 text-zina-black">
          <p class="text-zinc-500">Chaque bijou ZINA est une création précieuse nécessitant un soin particulier pour conserver son éclat éternel.</p>
          <div class="flex gap-4 items-start pt-2">
            <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0"><span class="material-icons-outlined text-sm">water_drop</span></div>
            <div>
              <h5 class="font-semibold text-xs text-zina-black uppercase tracking-wider mb-1">Éviter l'humidité</h5>
              <p class="text-zinc-500 text-xs">Retirez vos bijoux avant de vous baigner (mer, piscine), de faire du sport ou d'utiliser des produits chimiques (parfums, cosmétiques).</p>
            </div>
          </div>
          <div class="flex gap-4 items-start">
            <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0"><span class="material-icons-outlined text-sm">clean_hands</span></div>
            <div>
              <h5 class="font-semibold text-xs text-zina-black uppercase tracking-wider mb-1">Nettoyage doux</h5>
              <p class="text-zinc-500 text-xs">Nettoyez délicatement vos pièces en or 18 carats avec une chamoisine douce ou un chiffon légèrement humidifié à l'eau tiède.</p>
            </div>
          </div>
          <div class="flex gap-4 items-start">
            <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0"><span class="material-icons-outlined text-sm">inventory_2</span></div>
            <div>
              <h5 class="font-semibold text-xs text-zina-black uppercase tracking-wider mb-1">Rangement protecteur</h5>
              <p class="text-zinc-500 text-xs">Conservez chaque création individuellement dans son écrin ZINA d'origine pour éviter tout frottement ou rayure.</p>
            </div>
          </div>
        </div>
      `;
    } else if (type === 'shipping_returns') {
      title = "Livraisons & Retours";
      content = `
        <div class="space-y-6 text-sm text-zina-black">
          <div class="space-y-2">
            <h5 class="font-bold text-xs uppercase tracking-wider text-primary flex items-center gap-2">
              <span class="material-icons-outlined text-sm">local_shipping</span>
              Livraison sécurisée
            </h5>
            <p class="text-zinc-500 font-light leading-relaxed">
              ZINA assure une livraison sécurisée partout au Maroc. Elle est **gratuite pour toute commande supérieure à 1500 Dhs** (sinon 50 Dhs). Les délais de livraison sont de 2 à 4 jours ouvrés.
            </p>
          </div>
          <div class="space-y-2 pt-4 border-t border-primary/5">
            <h5 class="font-bold text-xs uppercase tracking-wider text-primary flex items-center gap-2">
              <span class="material-icons-outlined text-sm">replay</span>
              Retours & Échanges
            </h5>
            <p class="text-zinc-500 font-light leading-relaxed">
              Vous bénéficiez d'un délai de **14 jours** après la réception de votre commande pour demander un échange ou un remboursement. Le bijou doit être retourné neuf, non porté et dans son emballage d'origine.
            </p>
          </div>
        </div>
      `;
    }

    const modal = document.createElement('div');
    modal.id = 'zina-info-modal';
    modal.className = 'fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-opacity duration-300';
    modal.innerHTML = `
      <div class="bg-white/95 backdrop-blur-xl border border-primary/20 rounded-3xl p-8 max-w-lg w-full shadow-2xl relative transform scale-95 opacity-0 transition-all duration-300" id="zina-info-modal-panel">
        <button onclick="document.getElementById('zina-info-modal').remove()" class="absolute top-6 right-6 text-zinc-400 hover:text-primary transition-colors cursor-pointer">
          <span class="material-icons-outlined text-xl">close</span>
        </button>
        <h3 class="text-2xl serif-text text-zina-black border-b border-primary/10 pb-4 mb-6">${title}</h3>
        ${content}
      </div>
    `;

    document.body.appendChild(modal);

    setTimeout(() => {
      const panel = document.getElementById('zina-info-modal-panel');
      if (panel) {
        panel.classList.remove('scale-95', 'opacity-0');
        panel.classList.add('scale-100', 'opacity-100');
      }
    }, 10);

    modal.onclick = (e) => {
      if (e.target === modal) modal.remove();
    };
  }
};

(function() {
  // Injecter les scripts nécessaires dynamiquement avec callback
  const injectScript = (src, callback) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (!existing) {
      const s = document.createElement('script');
      s.src = src;
      s.async = false;
      if (callback) s.onload = callback;
      document.head.appendChild(s);
    } else if (callback) {
      // Si déjà présent, on s'assure qu'il est chargé
      if (typeof Notifications !== 'undefined' && src.includes('notifications.js')) {
        callback();
      } else {
        existing.addEventListener('load', callback);
      }
    }
  };

  const init = () => {
    const h = document.getElementById("header-container");
    if (h) { 
      h.innerHTML = SharedComponents.getHeader(); 
      SharedComponents.initHeaderEvents(); 
      
      // Initialiser les notifications dès que le fichier est chargé
      injectScript('/assets/js/notifications.js', () => {
        SharedComponents.initNotificationEvents();
      });
      
      injectScript('/assets/js/wishlist.js');
      injectScript('/assets/js/ai-agent.js');
    }
    const f = document.getElementById("footer-container");
    if (f) f.innerHTML = SharedComponents.getFooter();
  };
  
  if (document.readyState === "loading") { 
    document.addEventListener("DOMContentLoaded", init); 
  } else { 
    init(); 
  }
})();
