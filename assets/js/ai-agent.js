/* ========================================
   ZINA - Luxury Jewelry E-Commerce
   ai-agent.js - AI Virtual Concierge Widget
   ======================================== */

const AIAgent = {
  isOpen: false,
  chatHistory: [],

  init() {
    this.createWidget();
    this.bindEvents();
    this.addWelcomeMessage();
  },

  createWidget() {
    // Check if widget already exists
    if (document.getElementById('zina-ai-widget')) return;

    const container = document.createElement('div');
    container.id = 'zina-ai-widget';
    container.className = 'fixed bottom-6 right-6 z-[9999] font-sans';

    // HTML Structure
    container.innerHTML = `
      <!-- Trigger Button -->
      <button id="zina-ai-trigger" class="w-14 h-14 rounded-full bg-gradient-to-tr from-primary to-[#d8b673] text-white shadow-2xl flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300 relative group border border-white/20">
        <span class="material-icons-outlined text-2xl" id="zina-ai-trigger-icon">smart_toy</span>
        <span class="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
        <span class="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
      </button>

      <!-- Chat Panel -->
      <div id="zina-ai-panel" class="absolute bottom-16 right-0 w-[360px] h-[520px] bg-white/90 backdrop-blur-xl border border-primary/20 rounded-3xl shadow-2xl overflow-hidden flex flex-col opacity-0 translate-y-10 pointer-events-none">
        <!-- Header -->
        <div class="bg-gradient-to-r from-primary to-[#d8b673] p-4 text-white flex items-center justify-between shadow-md">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <span class="material-icons-outlined text-lg">face</span>
            </div>
            <div>
              <h4 class="font-bold text-sm tracking-wide">ZINA Concierge</h4>
              <p class="text-[9px] opacity-75 uppercase tracking-widest">Conseiller virtuel</p>
            </div>
          </div>
          <button id="zina-ai-close" class="hover:bg-white/10 p-1 rounded-full transition-colors cursor-pointer">
            <span class="material-icons-outlined text-lg">close</span>
          </button>
        </div>

        <!-- Chat History -->
        <div id="zina-ai-messages" class="flex-grow p-4 overflow-y-auto space-y-4 bg-[#FAF9F6]/50">
          <!-- Messages will be injected here -->
        </div>

        <!-- Suggestions Chips -->
        <div id="zina-ai-suggestions" class="px-4 py-2 border-t border-primary/5 flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-none bg-[#FAF9F6]/30">
          <!-- Chips injected dynamically -->
        </div>

        <!-- Input Bar -->
        <form id="zina-ai-form" class="p-3 border-t border-primary/10 bg-white flex items-center gap-2">
          <input
            id="zina-ai-input"
            type="text"
            placeholder="Écrivez votre message..."
            class="flex-grow bg-zinc-50 border border-zinc-200 focus:outline-none focus:border-primary px-4 py-2.5 rounded-full text-xs transition-colors focus:ring-0"
            required
            autocomplete="off"
          />
          <button type="submit" class="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/95 transition-colors cursor-pointer">
            <span class="material-icons-outlined text-sm">send</span>
          </button>
        </form>
      </div>
    `;

    document.body.appendChild(container);

    // Add transition classes after initial paint to prevent flash transition on load
    setTimeout(() => {
      const panel = document.getElementById('zina-ai-panel');
      if (panel) panel.classList.add('transition-all', 'duration-500');
    }, 100);

    // CSS styling to hide scrollbars for suggestions
    const style = document.createElement('style');
    style.innerHTML = `
      .scrollbar-none::-webkit-scrollbar { display: none; }
      .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
    `;
    document.head.appendChild(style);
  },

  bindEvents() {
    const trigger = document.getElementById('zina-ai-trigger');
    const panel = document.getElementById('zina-ai-panel');
    const close = document.getElementById('zina-ai-close');
    const form = document.getElementById('zina-ai-form');
    const triggerIcon = document.getElementById('zina-ai-trigger-icon');

    trigger.onclick = () => {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        panel.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
        triggerIcon.textContent = 'chat';
      } else {
        panel.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
        triggerIcon.textContent = 'smart_toy';
      }
    };

    close.onclick = () => {
      this.isOpen = false;
      panel.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
      triggerIcon.textContent = 'smart_toy';
    };

    form.onsubmit = (e) => {
      e.preventDefault();
      const input = document.getElementById('zina-ai-input');
      const text = input.value.trim();
      if (!text) return;

      this.addMessage(text, 'user');
      input.value = '';

      // Simulate thinking and reply
      setTimeout(() => {
        this.generateReply(text);
      }, 600);
    };
  },

  addMessage(text, sender, products = []) {
    const container = document.getElementById('zina-ai-messages');
    if (!container) return;

    const wrapper = document.createElement('div');
    wrapper.className = `flex ${sender === 'user' ? 'justify-end' : 'justify-start'}`;

    let productsHtml = '';
    if (products.length > 0) {
      productsHtml = `
        <div class="grid grid-cols-1 gap-2 mt-2 pt-2 border-t border-primary/10">
          ${products.map(p => `
            <a href="/product.html?id=${p.id}" class="flex items-center gap-3 bg-white p-2 rounded-xl border border-primary/10 hover:border-primary/30 transition-all group">
              <img src="${p.image}" class="w-10 h-10 object-cover rounded-lg bg-zinc-100" />
              <div class="flex-grow min-w-0">
                <p class="text-[11px] font-bold truncate group-hover:text-primary transition-colors text-zina-black">${p.name}</p>
                <p class="text-[10px] text-zinc-500">${typeof Cart !== 'undefined' ? Cart.formatPrice(p.price) : p.price + ' Dhs'}</p>
              </div>
              <span class="material-icons-outlined text-xs text-zinc-300 group-hover:text-primary transition-colors mr-1">arrow_forward</span>
            </a>
          `).join('')}
        </div>
      `;
    }

    const bubble = document.createElement('div');
    bubble.className = `max-w-[80%] rounded-2xl px-4 py-2.5 text-xs shadow-sm leading-relaxed ${
      sender === 'user'
        ? 'bg-primary text-white rounded-br-none'
        : 'bg-white border border-primary/10 text-zina-black rounded-bl-none'
    }`;
    bubble.innerHTML = `
      <p>${text}</p>
      ${productsHtml}
    `;

    wrapper.appendChild(bubble);
    container.appendChild(wrapper);

    // Auto scroll to bottom
    container.scrollTop = container.scrollHeight;
  },

  addWelcomeMessage() {
    const config = typeof Storage !== 'undefined' ? Storage.get('zina_ai_config') : null;
    const greeting = config && config.greeting ? config.greeting : "Bienvenue chez **ZINA**. Je suis votre Concierge virtuel. Comment puis-je vous accompagner dans votre sélection aujourd'hui ?";
    this.addMessage(greeting, 'agent');
    this.renderSuggestions([
      { label: '🎁 Trouver un cadeau', value: 'cadeau' },
      { label: '💍 Voir les bagues', value: 'bagues' },
      { label: '✨ Collection Beldi', value: 'beldi' },
      { label: '🧼 Entretien des bijoux', value: 'entretien' }
    ]);
  },

  renderSuggestions(chips) {
    const container = document.getElementById('zina-ai-suggestions');
    if (!container) return;

    container.innerHTML = chips.map(chip => `
      <button
        onclick="AIAgent.handleSuggestionClick('${chip.value}', '${chip.label}')"
        class="bg-white/80 hover:bg-primary/10 hover:text-primary text-[10px] border border-primary/10 px-3 py-1.5 rounded-full transition-all cursor-pointer font-medium text-zina-black"
      >
        ${chip.label}
      </button>
    `).join('');
  },

  handleSuggestionClick(value, label) {
    this.addMessage(label, 'user');
    
    setTimeout(() => {
      this.generateReply(value);
    }, 500);
  },

  generateReply(query) {
    query = query.toLowerCase();

    // 0. Check custom training rules from admin
    const config = typeof Storage !== 'undefined' ? Storage.get('zina_ai_config') : null;
    if (config && config.rules) {
      for (const rule of config.rules) {
        if (query.includes(rule.keyword.toLowerCase())) {
          this.addMessage(rule.response, 'agent');
          this.resetToMainSuggestions();
          return;
        }
      }
    }

    // Default lists of products if needed
    const allProducts = typeof Products !== 'undefined' ? Products.getAll() : [];

    // 1. Gift Recommendation Flow
    if (query === 'cadeau' || query.includes('cadeau') || query.includes('offrir')) {
      this.addMessage(
        "C'est une excellente idée, un bijou ZINA est le plus précieux des présents. Pour quel budget souhaitez-vous faire plaisir ?",
        'agent'
      );
      this.renderSuggestions([
        { label: '💸 Moins de 1500 Dhs', value: 'budget_low' },
        { label: '💎 1500 à 4000 Dhs', value: 'budget_med' },
        { label: '👑 Plus de 4000 Dhs', value: 'budget_high' }
      ]);
      return;
    }

    // 1.1 Budgets
    if (query.startsWith('budget_')) {
      let filtered = [];
      let budgetLabel = '';
      if (query === 'budget_low') {
        filtered = allProducts.filter(p => p.price < 1500);
        budgetLabel = 'à moins de 1500 Dhs';
      } else if (query === 'budget_med') {
        filtered = allProducts.filter(p => p.price >= 1500 && p.price <= 4000);
        budgetLabel = 'entre 1500 et 4000 Dhs';
      } else if (query === 'budget_high') {
        filtered = allProducts.filter(p => p.price > 4000);
        budgetLabel = 'au-dessus de 4000 Dhs';
      }

      const selection = filtered.slice(0, 3);
      if (selection.length > 0) {
        this.addMessage(
          `Voici notre sélection de créations exclusives ${budgetLabel} :`,
          'agent',
          selection
        );
      } else {
        this.addMessage(
          "Désolé, nous n'avons pas d'articles correspondant exactement à ce budget actuellement. Explorez notre collection générale !",
          'agent'
        );
      }
      this.resetToMainSuggestions();
      return;
    }

    // 2. Categories
    const categories = ['bagues', 'colliers', 'boucles', 'bracelets', 'ensembles', 'beldi'];
    for (const cat of categories) {
      if (query.includes(cat) || query === cat) {
        const filtered = allProducts.filter(p => p.category === cat).slice(0, 3);
        if (filtered.length > 0) {
          const catLabel = cat.charAt(0).toUpperCase() + cat.slice(1);
          this.addMessage(
            `Voici nos créations les plus appréciées dans la catégorie **${catLabel}** :`,
            'agent',
            filtered
          );
        } else {
          this.addMessage(
            `Nous avons de sublimes créations dans la catégorie ${cat}. Vous pouvez les découvrir sur notre boutique !`,
            'agent'
          );
        }
        this.resetToMainSuggestions();
        return;
      }
    }

    // 3. Jewelry Care
    if (query === 'entretien' || query.includes('entretien') || query.includes('nettoyer') || query.includes('laver')) {
      this.addMessage(
        "Pour préserver l'éclat éternel de vos créations ZINA :<br><br>" +
        "1. Évitez le contact direct avec le parfum, l'eau salée et le chlore.<br>" +
        "2. Nettoyez délicatement avec un chiffon doux légèrement humidifié.<br>" +
        "3. Rangez votre bijou dans son écrin d'origine pour éviter les rayures.",
        'agent'
      );
      this.resetToMainSuggestions();
      return;
    }

    // 4. Shipping / Delivery
    if (query.includes('livraison') || query.includes('livrer') || query.includes('envoi')) {
      this.addMessage(
        "ZINA assure la livraison sécurisée dans tout le Maroc. Elle est **gratuite pour toute commande supérieure à 1500 Dhs**. " +
        "Les délais de livraison varient de 2 à 4 jours ouvrés.",
        'agent'
      );
      this.resetToMainSuggestions();
      return;
    }

    // 5. Returns
    if (query.includes('retour') || query.includes('echanger') || query.includes('rembourser')) {
      this.addMessage(
        "Vous disposez d'un délai de **14 jours** après réception pour nous retourner un bijou non porté dans son écrin d'origine afin d'effectuer un échange ou d'obtenir un remboursement.",
        'agent'
      );
      this.resetToMainSuggestions();
      return;
    }

    // 6. Generic jewelry question or greeting
    if (query.includes('bonjour') || query.includes('salut') || query.includes('hey')) {
      this.addMessage(
        "Bonjour ! Je suis ravi de vous assister. Recherchez-vous une création en particulier ?",
        'agent'
      );
      this.resetToMainSuggestions();
      return;
    }

    // Search query fallback
    const matchedProducts = allProducts.filter(p => 
      p.name.toLowerCase().includes(query) || 
      p.description.toLowerCase().includes(query)
    ).slice(0, 3);

    if (matchedProducts.length > 0) {
      this.addMessage(
        `J'ai trouvé ces créations en recherchant "${query}" :`,
        'agent',
        matchedProducts
      );
    } else {
      this.addMessage(
        "Je ne suis pas sûr de bien comprendre, ou l'article n'est pas répertorié. Vous pouvez explorer toutes nos collections en naviguant sur notre boutique ou me demander conseil pour un cadeau.",
        'agent'
      );
    }
    this.resetToMainSuggestions();
  },

  resetToMainSuggestions() {
    this.renderSuggestions([
      { label: '🎁 Trouver un cadeau', value: 'cadeau' },
      { label: '💍 Bagues', value: 'bagues' },
      { label: '✨ Collection Beldi', value: 'beldi' },
      { label: '🧼 Entretien des bijoux', value: 'entretien' }
    ]);
  }
};

// Auto initialize when loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => AIAgent.init());
} else {
  AIAgent.init();
}
