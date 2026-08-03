/* ========================================
   ZINA - auth.js
   ======================================== */

const Auth = {
  /**
   * Log in a user
   */
  login(email, password) {
    const users = Storage.get(Storage.KEYS.USERS) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      const userSession = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      };
      Storage.set(Storage.KEYS.CURRENT_USER, userSession);
      return { success: true, user: userSession };
    }

    return { success: false, message: 'Email ou mot de passe incorrect.' };
  },

  /**
   * Register a new user
   */
  register(name, email, password) {
    const users = Storage.get(Storage.KEYS.USERS) || [];

    if (users.find(u => u.email === email)) {
      return { success: false, message: 'Cet email est déjà utilisé.' };
    }

    const newUser = {
      id: Storage.generateId(Storage.KEYS.USERS),
      name,
      email,
      password,
      role: 'client'
    };

    users.push(newUser);
    Storage.set(Storage.KEYS.USERS, users);

    // Auto login
    return this.login(email, password);
  },

  /**
   * Log out current user
   */
  logout() {
    Storage.remove(Storage.KEYS.CURRENT_USER);
  },

  /**
   * Check if any user is logged in
   */
  isLoggedIn() {
    return !!Storage.get(Storage.KEYS.CURRENT_USER);
  },

  /**
   * Get current user data
   */
  getCurrentUser() {
    return Storage.get(Storage.KEYS.CURRENT_USER);
  },

  /**
   * Check if current user is admin
   */
  isAdmin() {
    const user = this.getCurrentUser();
    return user && user.role === 'admin';
  },

  /**
   * Redirect to login if user is not an admin
   */
  requireAdmin() {
    if (!this.isAdmin()) {
      window.location.href = '/auth/login.html';
    }
  }
};