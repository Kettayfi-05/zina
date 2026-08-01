/* ========================================
   ZINA - Luxury Jewelry E-Commerce
   storage.js - LocalStorage data management
   ======================================== */

/**
 * Storage Manager
 * Handles all localStorage operations and initial data seeding
 */
const Storage = {
  // Storage keys
  KEYS: {
    USERS: 'zina_users',
    PRODUCTS: 'zina_products',
    CATEGORIES: 'zina_categories',
    CART: 'zina_cart',
    ORDERS: 'zina_orders',
    MESSAGES: 'zina_messages',
    CURRENT_USER: 'zina_current_user'
  },

  /**
   * Initialize storage with seed data
   */
  init() {
    // Seed users if not exists
    if (!this.get(this.KEYS.USERS)) {
      this.set(this.KEYS.USERS, this.getSeedUsers());
    }

    // Seed categories if not exists
    if (!this.get(this.KEYS.CATEGORIES)) {
      this.set(this.KEYS.CATEGORIES, this.getSeedCategories());
    }

    // Seed products if not exists
    if (!this.get(this.KEYS.PRODUCTS)) {
      this.set(this.KEYS.PRODUCTS, this.getSeedProducts());
    }

    // Initialize empty collections
    if (!this.get(this.KEYS.ORDERS)) {
      this.set(this.KEYS.ORDERS, []);
    }

    if (!this.get(this.KEYS.MESSAGES)) {
      this.set(this.KEYS.MESSAGES, []);
    }
  },

  /**
   * Get data from localStorage
   */
  get(key) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error reading from storage:', error);
      return null;
    }
  },

  /**
   * Set data to localStorage
   */
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error('Error writing to storage:', error);
      return false;
    }
  },

  /**
   * Remove data from localStorage
   */
  remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Error removing from storage:', error);
      return false;
    }
  },

  /**
   * Clear all storage
   */
  clear() {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error('Error clearing storage:', error);
      return false;
    }
  },

  /**
   * Seed users data
   */
  getSeedUsers() {
    return [
      {
        id: 1,
        name: 'Admin User',
        email: 'admin@zina.com',
        password: 'admin123', // In production, this should be hashed
        role: 'admin'
      },
      {
        id: 2,
        name: 'Client User',
        email: 'client@zina.com',
        password: 'client123',
        role: 'client'
      }
    ];
  },

  /**
   * Seed categories data
   */
  getSeedCategories() {
    return [
      { id: 1, name: 'Bagues', slug: 'bagues' },
      { id: 2, name: 'Colliers', slug: 'colliers' },
      { id: 3, name: 'Boucles', slug: 'boucles' },
      { id: 4, name: 'Bracelets', slug: 'bracelets' },
      { id: 5, name: 'Ensembles', slug: 'ensembles' },
      { id: 6, name: 'Beldi', slug: 'beldi' }
    ];
  },

  /**
   * Seed products data
   */
  getSeedProducts() {
    return [
      {
        id: 1,
        name: 'Luna d’Or',
        price: 1300,
        category: 'bagues',
        description: 'Bague fine au design minimaliste, inspirée de la lune, idéale pour un style chic et discret.',
        image: 'assets/images/products/bague1.jfif'
      },
        {
        id: 2,
        name: 'Zayna Élégance',
        price: 2300,
        category: 'bagues',
        description: 'Bague raffinée ornée d’un éclat central, parfaite pour sublimer les tenues quotidiennes.',
        image: 'assets/images/products/bague2.jfif'
      },
            {
        id: 3,
        name: 'Saphira Royale',
        price: 1200,
        category: 'bagues',
        description: 'Bague luxueuse au charme noble, conçue pour les occasions spéciales.',
        image: 'assets/images/products/bague3.jfif'
      },
            {
        id: 4,
        name: 'Amara Glow',
        price: 900,
        category: 'bagues',
        description: 'Une bague moderne aux lignes douces qui illumine la main avec finesse.',
        image: 'assets/images/products/bague4.jfif'
      },
            {
        id: 5,
        name: 'Éclipse Fine',
        price: 540,
        category: 'bagues',
        description: 'Bague contemporaine au design audacieux, symbole de mystère et d’élégance.',
        image: 'assets/images/products/bague5.jfif'
      },
            {
        id: 6,
        name: 'Alya Prestige',
        price: 3400,
        category: 'bagues',
        description: 'Une bague délicate au style intemporel, idéale comme cadeau précieux.',
        image: 'assets/images/products/bague6.jfif'
      },
            {
        id: 7,
        name: 'Perla Chic',
        price: 1000,
        category: 'bagues',
        description: 'Bague féminine ornée d’une perle élégante, douce et romantique.',
        image: 'assets/images/products/bague7.jfif'
      },
            {
        id: 8,
        name: 'Nour Essence',
        price: 2600,
        category: 'bagues',
        description: 'Une création lumineuse qui reflète la beauté et la simplicité.',
        image: 'assets/images/products/bague8.jfif'
      },
            {
        id: 9,
        name: 'Solaria',
        price: 1280,
        category: 'bagues',
        description: 'Bague au fini lisse et soyeux, inspirée du luxe discret.',
        image: 'assets/images/products/bague9.jfif'
      },
            {
        id: 10,
        name: 'Mélissa Fine',
        price: 2000,
        category: 'bagues',
        description: 'Bague légère et moderne, parfaite pour un look naturel et élégant.',
        image: 'assets/images/products/bague10.jfif'
      },
            {
        id: 11,
        name: 'Velours d’Or',
        price: 2400,
        category: 'bagues',
        description: 'Bague rayonnante qui évoque la chaleur et l’éclat du soleil.',
        image: 'assets/images/products/bague11.jfif'
      },

                  {
        id: 14,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'beldi',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/beldi2.jfif'
      },
                  {
        id: 15,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'beldi',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/beldi3.jfif'
      },
                  {
        id: 16,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'beldi',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/beldi4.jfif'
      },
                  {
        id: 17,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'beldi',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/beldi5.jfif'
      },            {
        id: 18,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'beldi',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/beldi6.jfif'
      },            {
        id: 19,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'beldi',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/beldi7.jfif'
      },            {
        id: 20,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'beldi',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/beldi8.jfif'
      },            {
        id: 21,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'beldi',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/beldi9.jfif'
      }, 
      {
        id: 22,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'boucles',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/boucle1.jfif'
      }, 
      {
        id: 23,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'boucles',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/boucle2.jfif'
      }, 
      {
        id: 24,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'boucles',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/boucle3.jfif'
      }, 
      {
        id: 25,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'boucles',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/boucle4.jfif'
      }, 
      {
        id: 26,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'boucles',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/boucle5.jfif'
      }, 
      {
        id: 27,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'boucles',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/boucle6.jfif'
      }, 
      {
        id: 28,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'boucles',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/boucle7.jfif'
      }, 
      {
        id: 29,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'boucles',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/boucle8.jfif'
      }, 
      {
        id: 30,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'boucles',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/boucle9.jfif'
      }, 
      {
        id: 31,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'boucles',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/boucle10.jfif'
      }, 
      {
        id: 32,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'boucles',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/boucle11.jfif'
      }, 
            {
        id: 33,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'bracelets',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/bracelet1.jfif'
      },
            {
        id: 34,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'bracelets',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/bracelet2.jfif'
      },
            {
        id: 35,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'bracelets',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/bracelet3.jfif'
      },
            {
        id: 36,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'bracelets',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/bracelet4.jfif'
      },
            {
        id: 37,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'bracelets',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/bracelet5.jfif'
      },
            {
        id: 38,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'bracelets',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/bracelet6.jfif'
      },
            {
        id: 39,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'bracelets',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/bracelet7.jfif'
      },
            {
        id: 40,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'bracelets',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/bracelet8.jfif'
      },
            {
        id: 41,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'bracelets',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/bracelet9.jfif'
      },
            {
        id: 42,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'bracelets',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/bracelet10.jfif'
      },
            {
        id: 43,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'bracelets',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/bracelet11.jfif'
      },
        {
        id: 44,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'colliers',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/collier1.jfif'
      },
        {
        id: 45,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'colliers',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/collier2.jfif'
      },
        {
        id: 46,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'colliers',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/collier3.jfif'
      },
        {
        id: 47,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'colliers',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/collier4.jfif'
      },
        {
        id: 48,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'colliers',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/collier5.jfif'
      },
        {
        id: 49,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'colliers',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/collier6.jfif'
      },
        {
        id: 50,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'colliers',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/collier7.jfif'
      },
        {
        id: 51,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'colliers',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/collier8.jfif'
      },
        {
        id: 52,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'colliers',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/collier9.jfif'
      },
    {
        id: 53,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'colliers',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/collier10.jfif'
      },
    {
        id: 54,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'colliers',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/collier11.jfif'
      },
          {
        id: 55,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'ensembles',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/ensemble1.jfif'
      },
          {
        id: 56,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'ensembles',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/ensemble2.jfif'
      },
          {
        id: 57,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'ensembles',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/ensemble3.jfif'
      },
          {
        id: 58,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'ensembles',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/ensemble4.jfif'
      },
          {
        id: 59,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'ensembles',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/ensemble5.jfif'
      },
          {
        id: 60,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'ensembles',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/ensemble6.jfif'
      },
          {
        id: 61,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'ensembles',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/ensemble7.jfif'
      },
          {
        id: 62,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'ensembles',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/ensemble8.jfif'
      },
          {
        id: 63,
        name: 'Diamond Solitaire Ring',
        price: 2500,
        category: 'ensembles',
        description: 'Exquisite 18k gold ring featuring a brilliant-cut diamond. Timeless elegance for your special moments.',
        image: 'assets/images/products/ensemble9.jfif'
      },

    ];
  },

  /**
   * Generate unique ID
   */
  generateId(collection) {
    const items = this.get(collection) || [];
    return items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;
  }
};

// Initialize storage when script loads
Storage.init();