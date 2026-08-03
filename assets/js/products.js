/* ========================================
   ZINA - Luxury Jewelry E-Commerce
   products.js - Product management
   ======================================== */

/**
 * Products Manager
 * Handles product listing, filtering, and CRUD operations
 */
const Products = {
  /**
   * Get all products
   */
  getAll() {
    return Storage.get(Storage.KEYS.PRODUCTS) || [];
  },

  /**
   * Get product by ID
   */
  getById(id) {
    const products = this.getAll();
    return products.find(p => p.id === parseInt(id));
  },

  /**
   * Get products by category
   */
  getByCategory(category) {
    const products = this.getAll();
    if (!category || category === 'all') {
      return products;
    }
    return products.filter(p => p.category === category);
  },

  /**
   * Search products by name
   */
  search(query) {
    const products = this.getAll();
    if (!query) return products;
    
    const lowerQuery = query.toLowerCase();
    return products.filter(p => 
      p.name.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery)
    );
  },

  /**
   * Filter products
   */
  filter(category = 'all', searchQuery = '') {
    let products = this.getAll();

    // Filter by category
    if (category && category !== 'all') {
      products = products.filter(p => p.category === category);
    }

    // Filter by search query
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      products = products.filter(p =>
        p.name.toLowerCase().includes(lowerQuery) ||
        p.description.toLowerCase().includes(lowerQuery)
      );
    }

    return products;
  },

  /**
   * Create new product (Admin)
   */
  create(productData) {
    const products = this.getAll();
    const newProduct = {
      id: Storage.generateId(Storage.KEYS.PRODUCTS),
      name: productData.name,
      price: parseFloat(productData.price),
      category: productData.category,
      description: productData.description,
      image: productData.image 
    };

    products.push(newProduct);
    Storage.set(Storage.KEYS.PRODUCTS, products);
    return { success: true, product: newProduct };
  },

  /**
   * Update product (Admin)
   */
  update(id, productData) {
    const products = this.getAll();
    const index = products.findIndex(p => p.id === parseInt(id));

    if (index === -1) {
      return { success: false, message: 'Product not found' };
    }

    products[index] = {
      ...products[index],
      name: productData.name,
      price: parseFloat(productData.price),
      category: productData.category,
      description: productData.description,
      image: productData.image || products[index].image
    };

    Storage.set(Storage.KEYS.PRODUCTS, products);
    return { success: true, product: products[index] };
  },

  /**
   * Delete product (Admin)
   */
  delete(id) {
    let products = this.getAll();
    const initialLength = products.length;
    products = products.filter(p => p.id !== parseInt(id));

    if (products.length === initialLength) {
      return { success: false, message: 'Product not found' };
    }

    Storage.set(Storage.KEYS.PRODUCTS, products);
    return { success: true };
  },

  /**
   * Render product card HTML (Premium Version)
   */
  renderCard(product) {
    const user = (typeof Auth !== 'undefined') ? Auth.getCurrentUser() : null;
    const isWish = (typeof Wishlist !== 'undefined') && Wishlist.has(product.id);
    const showHeart = !user || user.role === 'client';

    return `
      <div class="group cursor-pointer bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-primary/5 hover:border-primary/20" 
           onclick="window.location.href='/product.html?id=${product.id}'">
        <div class="relative aspect-[4/5] overflow-hidden">
          <img src="${product.image}" alt="${product.name}" 
               class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110">
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
          
          ${showHeart ? `
          <button id="wishlist-btn-${product.id}" onclick="event.stopPropagation(); Wishlist.toggle(${product.id})" 
                  class="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 backdrop-blur-md text-zinc-400 hover:text-red-500 shadow-md transition-all duration-300 z-20 hover:scale-110">
            <span class="material-icons-outlined text-lg ${isWish ? 'text-red-500' : ''}">${isWish ? 'favorite' : 'favorite_border'}</span>
          </button>
          ` : ''}

          <div class="absolute bottom-4 left-4 right-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <button class="w-full bg-white/90 backdrop-blur-md text-zina-black text-[10px] font-bold py-3 uppercase tracking-[0.2em] rounded-full shadow-lg">
              Voir les détails
            </button>
          </div>
        </div>
        
        <div class="p-6 space-y-2">
          <span class="text-[9px] font-extrabold text-primary uppercase tracking-[0.2em] opacity-60">
            ${product.category}
          </span>
          <h3 class="font-serif text-lg text-zina-black dark:text-zina-ivory leading-tight truncate">
            ${product.name}
          </h3>
          <div class="flex items-center justify-between pt-2">
            <span class="text-sm font-bold text-zina-black dark:text-zina-ivory">
              ${Cart.formatPrice(product.price)}
            </span>
            <span class="material-icons-outlined text-primary text-lg opacity-0 group-hover:opacity-100 transition-opacity">
              add_circle_outline
            </span>
          </div>
        </div>
      </div>
    `;
  },

  /**
   * Render products grid
   */
  renderGrid(products, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (products.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
          <p style="font-size: 1.25rem; color: var(--color-taupe);">No products found</p>
        </div>
      `;
      return;
    }

    container.innerHTML = products.map(p => this.renderCard(p)).join('');
  }
};

/**
 * Categories Manager
 */
const Categories = {
  /**
   * Get all categories
   */
  getAll() {
    return Storage.get(Storage.KEYS.CATEGORIES) || [];
  },

  /**
   * Get category by slug
   */
  getBySlug(slug) {
    const categories = this.getAll();
    return categories.find(c => c.slug === slug);
  }
};