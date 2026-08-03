/* ========================================
   ZINA - Luxury Jewelry E-Commerce
   wishlist.js - Client wishlist management
   ======================================== */

const Wishlist = {
  /**
   * Get all wishlist items (product IDs)
   */
  getAll() {
    return Storage.get(Storage.KEYS.WISHLIST) || [];
  },

  /**
   * Check if product is in wishlist
   */
  has(productId) {
    const list = this.getAll();
    return list.includes(parseInt(productId));
  },

  /**
   * Toggle product in wishlist
   */
  toggle(productId) {
    const user = Auth.getCurrentUser();
    if (!user) {
      alert('Veuillez vous connecter pour gérer vos favoris.');
      window.location.href = '/auth/login.html';
      return false;
    }
    
    if (user.role !== 'client') {
      alert('Seuls les clients peuvent utiliser les favoris.');
      return false;
    }

    let list = this.getAll();
    const id = parseInt(productId);
    const index = list.indexOf(id);
    let added = false;

    if (index === -1) {
      list.push(id);
      added = true;
    } else {
      list.splice(index, 1);
    }

    Storage.set(Storage.KEYS.WISHLIST, list);

    // Update all matching heart icons on the page
    const buttons = document.querySelectorAll(`[id^="wishlist-btn-${id}"]`);
    buttons.forEach(btn => {
      const icon = btn.querySelector('.material-icons-outlined');
      if (icon) {
        if (added) {
          icon.textContent = 'favorite';
          icon.classList.add('text-red-500');
        } else {
          icon.textContent = 'favorite_border';
          icon.classList.remove('text-red-500');
        }
      }
    });

    // Custom event to notify other scripts (e.g. wishlist.html)
    window.dispatchEvent(new CustomEvent('zina_wishlist_updated', {
      detail: { productId: id, added: added }
    }));

    return added;
  }
};
