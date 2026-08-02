/* ========================================
   ZINA - Luxury Jewelry E-Commerce
   orders.js - Order management
   ======================================== */

/**
 * Orders Manager
 * Handles order creation and management
 */
const Orders = {
  /**
   * Get all orders
   */
  getAll() {
    return Storage.get(Storage.KEYS.ORDERS) || [];
  },

  /**
   * Get orders by user ID
   */
  getByUserId(userId) {
    const orders = this.getAll();
    return orders.filter(o => o.userId === userId);
  },

  /**
   * Get order by ID
   */
  getById(id) {
    const orders = this.getAll();
    return orders.find(o => o.id === parseInt(id));
  },

  /**
   * Create new order
   */
  create(orderData) {
    const user = Auth.getCurrentUser();
    if (!user) {
      return { success: false, message: 'Client non authentifié' };
    }

    const cart = Cart.getItems();
    if (cart.length === 0) {
      return { success: false, message: 'Le panier est vide' };
    }

    const orders = this.getAll();
    const newOrder = {
      id: Storage.generateId(Storage.KEYS.ORDERS),
      userId: user.id,
      userName: user.name,
      userEmail: user.email,
      items: cart,
      total: Cart.getTotal(),
      status: 'pending',
      date: new Date().toISOString(),
      shipping: {
        fullName: orderData.fullName,
        address: orderData.address,
        city: orderData.city,
        postalCode: orderData.postalCode,
        country: orderData.country,
        phone: orderData.phone
      }
    };

    orders.push(newOrder);
    Storage.set(Storage.KEYS.ORDERS, orders);

    // Créer les notifications
    if (typeof Notifications !== 'undefined') {
      // Pour le client
      Notifications.add(
        'Commande validée',
        `Votre commande #${newOrder.id} d'un montant de ${Cart.formatPrice(newOrder.total)} a été enregistrée avec succès.`,
        'success',
        'client',
        user.id
      );
      // Pour l'admin
      Notifications.add(
        'Nouvelle commande reçue',
        `Le client ${user.name} a passé la commande #${newOrder.id} pour un montant de ${Cart.formatPrice(newOrder.total)}.`,
        'order',
        'admin'
      );
    }

    // Clear cart after order
    Cart.clear();

    return { success: true, order: newOrder };
  },

  /**
   * Update order status (Admin)
   */
  updateStatus(id, status) {
    const orders = this.getAll();
    const order = orders.find(o => o.id === parseInt(id));

    if (!order) {
      return { success: false, message: 'Order not found' };
    }

    order.status = status;
    Storage.set(Storage.KEYS.ORDERS, orders);

    // Créer la notification pour le client
    if (typeof Notifications !== 'undefined') {
      let label = status;
      if (status === 'pending') label = 'en attente';
      else if (status === 'processing') label = 'en cours de préparation';
      else if (status === 'completed') label = 'terminée (livrée)';
      else if (status === 'cancelled') label = 'annulée';

      Notifications.add(
        `Statut de commande mis à jour`,
        `Le statut de votre commande #${order.id} est désormais : ${label}.`,
        status === 'completed' ? 'success' : status === 'cancelled' ? 'warning' : 'info',
        'client',
        order.userId
      );
    }

    return { success: true, order };
  },

  /**
   * Get orders statistics (Admin)
   */
  getStats() {
    const orders = this.getAll();
    
    return {
      total: orders.length,
      pending: orders.filter(o => o.status === 'pending').length,
      processing: orders.filter(o => o.status === 'processing').length,
      completed: orders.filter(o => o.status === 'completed').length,
      revenue: orders
        .filter(o => o.status === 'completed')
        .reduce((sum, o) => sum + o.total, 0)
    };
  },

  /**
   * Format order date
   */
  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  },

  /**
   * Render order card
   */
  renderOrderCard(order) {
    return `
      <div class="order-card">
        <div class="order-header">
          <div>
            <div class="order-id">Order #${order.id}</div>
            <div style="color: var(--color-taupe); font-size: 0.9rem;">
              ${this.formatDate(order.date)}
            </div>
          </div>
          <span class="order-status status-${order.status}">${order.status}</span>
        </div>
        <div class="order-details">
          <div>
            <strong>Customer:</strong> ${order.userName}<br>
            <strong>Email:</strong> ${order.userEmail}<br>
            <strong>Items:</strong>
            <ul class="order-items-list">
              ${order.items.map(item => `
                <li>${item.name} x ${item.quantity} - ${Cart.formatPrice(item.price * item.quantity)}</li>
              `).join('')}
            </ul>
          </div>
          <div class="order-info">
            <div><strong>Shipping:</strong></div>
            <div style="color: var(--color-taupe); font-size: 0.9rem; margin-bottom: 1rem;">
              ${order.shipping.fullName}<br>
              ${order.shipping.address}<br>
              ${order.shipping.city}, ${order.shipping.postalCode}<br>
              ${order.shipping.country}
            </div>
            <div class="order-total">${Cart.formatPrice(order.total)}</div>
          </div>
        </div>
      </div>
    `;
  }
};

/**
 * Messages Manager
 * Handles contact form messages
 */
const Messages = {
  /**
   * Get all messages
   */
  getAll() {
    return Storage.get(Storage.KEYS.MESSAGES) || [];
  },

  /**
   * Create new message
   */
  create(messageData) {
    const messages = this.getAll();
    const newMessage = {
      id: Storage.generateId(Storage.KEYS.MESSAGES),
      name: messageData.name,
      email: messageData.email,
      subject: messageData.subject || 'Contact Form',
      message: messageData.message,
      date: new Date().toISOString(),
      read: false
    };

    messages.push(newMessage);
    Storage.set(Storage.KEYS.MESSAGES, messages);

    // Créer la notification pour l'admin
    if (typeof Notifications !== 'undefined') {
      Notifications.add(
        'Nouveau message de contact',
        `Vous avez reçu un nouveau message de la part de ${newMessage.name} (${newMessage.email}) au sujet de : "${newMessage.subject}".`,
        'message',
        'admin'
      );
    }

    return { success: true, message: newMessage };
  },

  /**
   * Mark message as read
   */
  markAsRead(id) {
    const messages = this.getAll();
    const message = messages.find(m => m.id === parseInt(id));

    if (message) {
      message.read = true;
      Storage.set(Storage.KEYS.MESSAGES, messages);
      return { success: true };
    }

    return { success: false };
  },

  /**
   * Delete message
   */
  delete(id) {
    let messages = this.getAll();
    messages = messages.filter(m => m.id !== parseInt(id));
    Storage.set(Storage.KEYS.MESSAGES, messages);
    return { success: true };
  },

  /**
   * Get unread count
   */
  getUnreadCount() {
    const messages = this.getAll();
    return messages.filter(m => !m.read).length;
  }
};