/* ========================================
   ZINA - Luxury Jewelry E-Commerce
   app.js - Main application initialization
   ======================================== */

/**
 * Main App Object
 * Handles global initialization and common functions
 */
const App = {
  /**
   * Initialize application
   */
  init() {
    // Initialize storage on first load
    Storage.init();

    // Update cart badge
    Cart.updateCartBadge();

    // Set active nav link
    this.setActiveNavLink();

    // Add mobile menu toggle if exists
    this.initMobileMenu();
  },

  /**
   * Set active navigation link based on current page
   */
  setActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
      const linkPath = new URL(link.href).pathname;
      if (linkPath === currentPath) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  },

  /**
   * Initialize mobile menu (if needed)
   */
  initMobileMenu() {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const nav = document.querySelector('nav');

    if (menuToggle && nav) {
      menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
      });
    }
  },

  /**
   * Show notification/alert
   */
  showAlert(message, type = 'info') {
    // Remove existing alerts
    const existingAlert = document.querySelector('.zina-alert');
    if (existingAlert) {
      existingAlert.remove();
    }

    // Create new alert
    const alert = document.createElement('div');
    alert.className = `zina-alert alert-${type}`;
    alert.innerHTML = `
      <div class="flex items-center gap-3">
        <span class="material-icons-outlined text-xl">
          ${type === 'success' ? 'check_circle' : type === 'error' ? 'error' : 'info'}
        </span>
        <p class="font-medium">${message}</p>
      </div>
    `;

    document.body.appendChild(alert);

    // Auto-remove after 4 seconds
    setTimeout(() => {
      alert.style.opacity = '0';
      alert.style.transform = 'translateY(-20px)';
      setTimeout(() => alert.remove(), 500);
    }, 4000);
  },

  /**
   * Confirm dialog
   */
  confirm(message) {
    return window.confirm(message);
  },

  /**
   * Scroll to top
   */
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  /**
   * Get URL parameter
   */
  getUrlParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  },

  /**
   * Navigate to page
   */
  navigate(url) {
    window.location.href = url;
  },

  /**
   * Format currency
   */
  formatPrice(price) {
    return Cart.formatPrice(price);
  }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
};
// Dark mode logic removed
