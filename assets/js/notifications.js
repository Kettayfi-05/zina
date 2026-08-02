/* ========================================
   ZINA - Luxury Jewelry E-Commerce
   notifications.js - Notification management
   ======================================== */

const Notifications = {
  KEY: 'zina_notifications',

  /**
   * Get all notifications from localStorage
   */
  getAll() {
    try {
      const data = localStorage.getItem(this.KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Error reading notifications:', e);
      return [];
    }
  },

  /**
   * Set notifications to localStorage
   */
  setAll(notifications) {
    try {
      localStorage.setItem(this.KEY, JSON.stringify(notifications));
      return true;
    } catch (e) {
      console.error('Error writing notifications:', e);
      return false;
    }
  },

  /**
   * Add a new notification
   */
  add(title, message, type = 'info', recipientRole = 'all', userId = null) {
    const notifications = this.getAll();
    const newNotification = {
      id: notifications.length > 0 ? Math.max(...notifications.map(n => n.id)) + 1 : 1,
      title,
      message,
      type,
      recipientRole,
      userId,
      read: false,
      date: new Date().toISOString()
    };
    notifications.push(newNotification);
    this.setAll(notifications);

    // Dispatch custom event to notify components (like Header)
    window.dispatchEvent(new CustomEvent('zina_new_notification', { detail: newNotification }));
    return newNotification;
  },

  /**
   * Get notifications visible to a specific user
   */
  getForUser(user) {
    if (!user) return [];
    const all = this.getAll();
    
    // Sort by date descending (newest first)
    return all.filter(n => {
      if (user.role === 'admin') {
        return n.recipientRole === 'admin' || n.recipientRole === 'all';
      } else {
        // Client
        return n.recipientRole === 'all' || 
               (n.recipientRole === 'client' && (n.userId === null || n.userId === user.id));
      }
    }).sort((a, b) => new Date(b.date) - new Date(a.date));
  },

  /**
   * Get unread notifications count for a user
   */
  getUnreadCount(user) {
    if (!user) return 0;
    return this.getForUser(user).filter(n => !n.read).length;
  },

  /**
   * Mark a single notification as read
   */
  markAsRead(id) {
    const notifications = this.getAll();
    const notification = notifications.find(n => n.id === parseInt(id));
    if (notification) {
      notification.read = true;
      this.setAll(notifications);
      window.dispatchEvent(new CustomEvent('zina_notifications_updated'));
      return true;
    }
    return false;
  },

  /**
   * Mark all notifications as read for a user
   */
  markAllAsRead(user) {
    if (!user) return false;
    const notifications = this.getAll();
    let updated = false;

    notifications.forEach(n => {
      if (!n.read) {
        if (user.role === 'admin' && (n.recipientRole === 'admin' || n.recipientRole === 'all')) {
          n.read = true;
          updated = true;
        } else if (user.role === 'client' && (n.recipientRole === 'all' || (n.recipientRole === 'client' && (n.userId === null || n.userId === user.id)))) {
          n.read = true;
          updated = true;
        }
      }
    });

    if (updated) {
      this.setAll(notifications);
      window.dispatchEvent(new CustomEvent('zina_notifications_updated'));
      return true;
    }
    return false;
  },

  /**
   * Helper to format date relative or short
   */
  formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);

    if (diffMins < 1) return "À l'instant";
    if (diffMins < 60) return `Il y a ${diffMins} min`;
    if (diffHours < 24) return `Il y a ${diffHours} h`;
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
  }
};
