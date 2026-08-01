/* ========================================
   ZINA - Luxury Jewelry E-Commerce
   cart.js - Shopping cart management
   ======================================== */

/**
 * Cart Manager
 * Handles shopping cart operations
 */
const Cart = {
  /**
   * Get current cart items
   */
  getItems() {
    return Storage.get(Storage.KEYS.CART) || [];
  },

  /**
   * Add item to cart
   */
  addItem(productId, quantity = 1) {
    const products = Storage.get(Storage.KEYS.PRODUCTS) || [];
    const product = products.find(p => p.id === productId);

    if (!product) {
      return { success: false, message: 'Produit non trouvé' };
    }

    const cart = this.getItems();
    const existingItem = cart.find(item => item.productId === productId);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        productId,
        quantity,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category
      });
    }

    Storage.set(Storage.KEYS.CART, cart);
    this.updateCartBadge();
    
    return { success: true, message: 'Ajouter au panier' };
  },

  /**
   * Remove item from cart
   */
  removeItem(productId) {
    let cart = this.getItems();
    cart = cart.filter(item => item.productId !== productId);
    Storage.set(Storage.KEYS.CART, cart);
    this.updateCartBadge();
    return { success: true };
  },

  /**
   * Update item quantity
   */
  updateQuantity(productId, quantity) {
    const cart = this.getItems();
    const item = cart.find(item => item.productId === productId);

    if (item) {
      if (quantity <= 0) {
        return this.removeItem(productId);
      }
      item.quantity = quantity;
      Storage.set(Storage.KEYS.CART, cart);
      this.updateCartBadge();
      return { success: true };
    }

    return { success: false, message: 'Produit non trouvé dans le panier' };
  },

  /**
   * Clear entire cart
   */
  clear() {
    Storage.remove(Storage.KEYS.CART);
    this.updateCartBadge();
  },

  /**
   * Get cart total
   */
  getTotal() {
    const cart = this.getItems();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  },

  /**
   * Get cart item count
   */
  getItemCount() {
    const cart = this.getItems();
    return cart.reduce((count, item) => count + item.quantity, 0);
  },

  /**
   * Update cart badge in navbar
   */
  updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    const count = this.getItemCount();
    
    if (badge) {
      if (count > 0) {
        badge.textContent = count;
        badge.style.display = 'flex';
      } else {
        badge.style.display = 'none';
      }
    }
  },

  /**
   * Format price to currency
   */
  formatPrice(price) {
    return new Intl.NumberFormat('fr-MA', {
        minimumFractionDigits: 2
    }).format(price) + " DH";
  }
};