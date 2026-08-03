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
    CURRENT_USER: 'zina_current_user',
    AI_CONFIG: 'zina_ai_config',
    REVIEWS: 'zina_reviews',
    WISHLIST: 'zina_wishlist',
    RECENTLY_VIEWED: 'zina_recently_viewed'
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

    // Seed AI config if not exists
    if (!this.get(this.KEYS.AI_CONFIG)) {
      this.set(this.KEYS.AI_CONFIG, this.getSeedAIConfig());
    }

    // Seed reviews if not exists
    if (!this.get(this.KEYS.REVIEWS)) {
      this.set(this.KEYS.REVIEWS, this.getSeedReviews());
    }

    // Seed orders if not exists or empty
    const existingOrders = this.get(this.KEYS.ORDERS);
    if (!existingOrders || existingOrders.length === 0) {
      this.set(this.KEYS.ORDERS, this.getSeedOrders());
    }

    if (!this.get(this.KEYS.MESSAGES)) {
      this.set(this.KEYS.MESSAGES, []);
    }

    if (!this.get(this.KEYS.WISHLIST)) {
      this.set(this.KEYS.WISHLIST, []);
    }

    if (!this.get(this.KEYS.RECENTLY_VIEWED)) {
      this.set(this.KEYS.RECENTLY_VIEWED, []);
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
   * Seed AI Config data
   */
  getSeedAIConfig() {
    return {
      greeting: "Bienvenue chez **ZINA**. Je suis votre Concierge virtuel. Comment puis-je vous accompagner dans votre sélection aujourd'hui ?",
      rules: [
        {
          id: 1,
          keyword: "garantie",
          response: "Toutes nos créations ZINA sont garanties 2 ans. Cette garantie couvre tout défaut de fabrication."
        },
        {
          id: 2,
          keyword: "matière",
          response: "Nous utilisons exclusivement de l'or massif 18 carats (jaune, blanc ou rose) et des perles de culture ou diamants naturels rigoureusement sélectionnés."
        },
        {
          id: 3,
          keyword: "taille",
          response: "Pour choisir votre taille de bague, vous pouvez utiliser notre guide de mesure en ligne ou nous rendre visite en boutique à Casablanca."
        }
      ]
    };
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
        price: 180,
        category: 'bagues',
        description: 'Bague fine au design minimaliste, inspirée de la lune, idéale pour un style chic et discret.',
        image: 'assets/images/products/bague1.jfif'
      },
      {
        id: 2,
        name: 'Zayna Élégance',
        price: 250,
        category: 'bagues',
        description: 'Bague raffinée ornée d’un éclat central, parfaite pour sublimer les tenues quotidiennes.',
        image: 'assets/images/products/bague2.jfif'
      },
      {
        id: 3,
        name: 'Saphira Royale',
        price: 320,
        category: 'bagues',
        description: 'Bague luxueuse au charme noble, conçue pour les occasions spéciales.',
        image: 'assets/images/products/bague3.jfif'
      },
      {
        id: 4,
        name: 'Amara Glow',
        price: 210,
        category: 'bagues',
        description: 'Une bague moderne aux lignes douces qui illumine la main avec finesse.',
        image: 'assets/images/products/bague4.jfif'
      },
      {
        id: 5,
        name: 'Éclipse Fine',
        price: 190,
        category: 'bagues',
        description: 'Bague contemporaine au design audacieux, symbole de mystère et d’élégance.',
        image: 'assets/images/products/bague5.jfif'
      },
      {
        id: 6,
        name: 'Alya Prestige',
        price: 340,
        category: 'bagues',
        description: 'Une bague délicate au style intemporel, idéale comme cadeau précieux.',
        image: 'assets/images/products/bague6.jfif'
      },
      
      {
        id: 7,
        name: 'Perla Chic',
        price: 160,
        category: 'bagues',
        description: 'Bague féminine ornée d’une perle élégante, douce et romantique.',
        image: 'assets/images/products/bague7.jfif'
      },
      {
        id: 8,
        name: 'Nour Essence',
        price: 280,
        category: 'bagues',
        description: 'Une création lumineuse qui reflète la beauté et la simplicité.',
        image: 'assets/images/products/bague8.jfif'
      },
      {
        id: 9,
        name: 'Solaria',
        price: 220,
        category: 'bagues',
        description: 'Bague au fini lisse et soyeux, inspirée du luxe discret.',
        image: 'assets/images/products/bague9.jfif'
      },
      {
        id: 10,
        name: 'Mélissa Fine',
        price: 200,
        category: 'bagues',
        description: 'Bague légère et moderne, parfaite pour un look naturel et élégant.',
        image: 'assets/images/products/bague10.jfif'
      },
      {
        id: 11,
        name: 'Velours d’Or',
        price: 240,
        category: 'bagues',
        description: 'Bague rayonnante qui évoque la chaleur et l’éclat du soleil.',
        image: 'assets/images/products/bague11.jfif'
      },
      {
        id: 14,
        name: 'Créoles Beldi Or',
        price: 290,
        category: 'beldi',
        description: 'Créoles traditionnelles ciselées en or jaune 18 carats, inspirées des motifs ancestraux.',
        image: 'assets/images/products/beldi2.jfif'
      },
      {
        id: 15,
        name: 'Bracelet Fassi Ciselé',
        price: 380,
        category: 'beldi',
        description: 'Un jonc majestueux orné de gravures géométriques faites à la main par nos maîtres artisans.',
        image: 'assets/images/products/beldi3.jfif'
      },
      {
        id: 16,
        name: 'Bague Khmissa Protectrice',
        price: 260,
        category: 'beldi',
        description: 'Bague finement travaillée représentant la main de Fatma, symbole de protection et de raffinement.',
        image: 'assets/images/products/beldi4.jfif'
      },
      {
        id: 17,
        name: 'Pendentif Étoile d\'Atlas',
        price: 310,
        category: 'beldi',
        description: 'Sautoir en or sculpté représentant l\'art de la joaillerie traditionnelle marocaine.',
        image: 'assets/images/products/beldi5.jfif'
      },
      {
        id: 18,
        name: 'Bague Dôme Impérial',
        price: 270,
        category: 'beldi',
        description: 'Bague en dôme travaillé en filigrane d\'or, une pièce maîtresse au charme royal.',
        image: 'assets/images/products/beldi6.jfif'
      },
      {
        id: 19,
        name: 'Collier Tajine d\'Or',
        price: 350,
        category: 'beldi',
        description: 'Pendentif en or ciselé d\'une finesse extrême, évoquant le luxe et l\'héritage beldi.',
        image: 'assets/images/products/beldi7.jfif'
      },
      {
        id: 20,
        name: 'Boucles Gouttes de Rose',
        price: 280,
        category: 'beldi',
        description: 'Pendantes en or jaune habillées de motifs floraux traditionnels pour une allure noble.',
        image: 'assets/images/products/beldi8.jfif'
      },
      {
        id: 21,
        name: 'Chevalière Beldi Moderne',
        price: 330,
        category: 'beldi',
        description: 'Une réinterprétation moderne de la chevalière marocaine en or massif 18 carats.',
        image: 'assets/images/products/beldi9.jfif'
      },
      {
        id: 22,
        name: 'Puces Célestes',
        price: 150,
        category: 'boucles',
        description: 'Puces d\'oreilles discrètes et brillantes en or 18 carats, idéales pour un éclat au quotidien.',
        image: 'assets/images/products/boucle1.jfif'
      },
      {
        id: 23,
        name: 'Créoles Éclipse',
        price: 230,
        category: 'boucles',
        description: 'Créoles modernes au fini martelé reflétant la lumière de manière unique.',
        image: 'assets/images/products/boucle2.jfif'
      },
      {
        id: 24,
        name: 'Pendantes Cascade',
        price: 290,
        category: 'boucles',
        description: 'Boucles d\'oreilles pendantes aux mailles fluides qui épousent gracieusement les mouvements.',
        image: 'assets/images/products/boucle3.jfif'
      },
      {
        id: 25,
        name: 'Boucles Perles Impériales',
        price: 340,
        category: 'boucles',
        description: 'Alliance magnifique de l\'or jaune 18 carats et de perles de culture blanches sélectionnées.',
        image: 'assets/images/products/boucle4.jfif'
      },
      {
        id: 26,
        name: 'Puces Diamant Solitaire',
        price: 360,
        category: 'boucles',
        description: 'Une paire de puces intemporelle ornée de diamants taille brillant pour une brillance éternelle.',
        image: 'assets/images/products/boucle5.jfif'
      },
      {
        id: 27,
        name: 'Créoles Tressées Or',
        price: 240,
        category: 'boucles',
        description: 'Créoles au design de tresse torsadée, parfaites pour apporter du relief à votre style.',
        image: 'assets/images/products/boucle6.jfif'
      },
      {
        id: 28,
        name: 'Boucles Pendantes Aura',
        price: 270,
        category: 'boucles',
        description: 'Pendantes géométriques au style art déco pour une allure résolument moderne.',
        image: 'assets/images/products/boucle7.jfif'
      },
      {
        id: 29,
        name: 'Boucles Pampilles Lumineuses',
        price: 220,
        category: 'boucles',
        description: 'De jolies pampilles dorées qui dansent à chacun de vos pas.',
        image: 'assets/images/products/boucle8.jfif'
      },
      {
        id: 30,
        name: 'Puces Coeur d\'Or',
        price: 160,
        category: 'boucles',
        description: 'Petites puces en forme de coeur, un cadeau délicat et romantique.',
        image: 'assets/images/products/boucle9.jfif'
      },
      {
        id: 31,
        name: 'Créoles Fines Infini',
        price: 190,
        category: 'boucles',
        description: 'Créoles ultra-fines au fini poli miroir pour une élégance minimaliste.',
        image: 'assets/images/products/boucle10.jfif'
      },
      {
        id: 32,
        name: 'Boucles Émeraude Drop',
        price: 390,
        category: 'boucles',
        description: 'Somptueuses boucles ornées de deux émeraudes poires suspendues à un fil d\'or.',
        image: 'assets/images/products/boucle11.jfif'
      },
      {
        id: 33,
        name: 'Jonc Minimaliste Aura',
        price: 260,
        category: 'bracelets',
        description: 'Un jonc épuré et rigide en or jaune poli, à porter seul ou en accumulation.',
        image: 'assets/images/products/bracelet1.jfif'
      },
      {
        id: 34,
        name: 'Bracelet Chaîne Céleste',
        price: 180,
        category: 'bracelets',
        description: 'Chaîne fine en or ornée de petits disques dorés qui scintillent au poignet.',
        image: 'assets/images/products/bracelet2.jfif'
      },
      {
        id: 35,
        name: 'Jonc Ciselé Zina',
        price: 320,
        category: 'bracelets',
        description: 'Jonc rigide gravé à la main, exprimant la quintessence du savoir-faire ZINA.',
        image: 'assets/images/products/bracelet3.jfif'
      },
      {
        id: 36,
        name: 'Bracelet Perle d\'Orient',
        price: 250,
        category: 'bracelets',
        description: 'Bracelet double chaîne en or agrémenté d\'une perle d\'eau douce naturelle.',
        image: 'assets/images/products/bracelet4.jfif'
      },
      {
        id: 37,
        name: 'Gourmette Royale',
        price: 370,
        category: 'bracelets',
        description: 'Gourmette aux maillons larges et polis, affirmant un style audacieux et prestigieux.',
        image: 'assets/images/products/bracelet5.jfif'
      },
      {
        id: 38,
        name: 'Bracelet Lien d\'Amour',
        price: 220,
        category: 'bracelets',
        description: 'Un cordon de mailles d\'or entrelacées, symbole d\'un attachement éternel.',
        image: 'assets/images/products/bracelet6.jfif'
      },
      {
        id: 39,
        name: 'Jonc Torsadé Impérial',
        price: 310,
        category: 'bracelets',
        description: 'Jonc ouvert torsadé aux extrémités sculptées, inspiré de l\'antiquité méditerranéenne.',
        image: 'assets/images/products/bracelet7.jfif'
      },
      {
        id: 40,
        name: 'Bracelet Multi-rangs Étoilé',
        price: 280,
        category: 'bracelets',
        description: 'Trois rangs de chaînes fines en or habillés de petites étoiles étincelantes.',
        image: 'assets/images/products/bracelet8.jfif'
      },
      {
        id: 41,
        name: 'Jonc Martelé Doré',
        price: 260,
        category: 'bracelets',
        description: 'Jonc moderne à l\'aspect brut martelé à la main, capturant l\'essence de la matière.',
        image: 'assets/images/products/bracelet9.jfif'
      },
      {
        id: 42,
        name: 'Bracelet Diamant String',
        price: 340,
        category: 'bracelets',
        description: 'Chaîne d\'une finesse extrême sertie d\'un unique diamant taille brillant sur clos.',
        image: 'assets/images/products/bracelet10.jfif'
      },
      {
        id: 43,
        name: 'Bracelet Gourmette Signature',
        price: 330,
        category: 'bracelets',
        description: 'Une gourmette classique réinventée avec un fermoir invisible gravé Zina.',
        image: 'assets/images/products/bracelet11.jfif'
      },
      {
        id: 44,
        name: 'Collier Solitaire Luna',
        price: 290,
        category: 'colliers',
        description: 'Une chaîne en or délicate mettant en valeur un superbe diamant solitaire.',
        image: 'assets/images/products/collier1.jfif'
      },
      {
        id: 45,
        name: 'Pendentif Médaille Soleil',
        price: 260,
        category: 'colliers',
        description: 'Médaille gravée d\'un soleil rayonnant, symbole de chaleur, d\'énergie et de vie.',
        image: 'assets/images/products/collier2.jfif'
      },
      {
        id: 46,
        name: 'Sautoir Cristal Doré',
        price: 340,
        category: 'colliers',
        description: 'Sautoir alternant mailles d\'or et petites perles de cristal de roche taillées.',
        image: 'assets/images/products/collier3.jfif'
      },
      {
        id: 47,
        name: 'Collier Double Rang Céleste',
        price: 280,
        category: 'colliers',
        description: 'Collier à deux rangs de chaînes asymétriques pour un effet de superposition parfait.',
        image: 'assets/images/products/collier4.jfif'
      },
      {
        id: 48,
        name: 'Pendentif Khmissa Fine',
        price: 230,
        category: 'colliers',
        description: 'Pendentif khmissa stylisé et ajouré en or jaune 18 carats.',
        image: 'assets/images/products/collier5.jfif'
      },
      {
        id: 49,
        name: 'Collier Mailles Tressées',
        price: 360,
        category: 'colliers',
        description: 'Un collier ras-du-cou en maille tressée souple qui épousent gracieusement les mouvements.',
        image: 'assets/images/products/collier6.jfif'
      },
      {
        id: 50,
        name: 'Collier Poire Rubis',
        price: 380,
        category: 'colliers',
        description: 'Splendide rubis taillé en poire monté sur une monture fine en or jaune.',
        image: 'assets/images/products/collier7.jfif'
      },
      {
        id: 51,
        name: 'Pendentif Larme d\'Or',
        price: 240,
        category: 'colliers',
        description: 'Une goutte d\'or lisse et pleine suspendue à une chaîne ajustable.',
        image: 'assets/images/products/collier8.jfif'
      },
      {
        id: 52,
        name: 'Collier Cascade de Diamants',
        price: 400,
        category: 'colliers',
        description: 'Collier de prestige pavé de petits diamants scintillants sur son arc central.',
        image: 'assets/images/products/collier9.jfif'
      },
      {
        id: 53,
        name: 'Collier Trèfle de Chance',
        price: 250,
        category: 'colliers',
        description: 'Pendentif en forme de trèfle à quatre feuilles, porte-bonheur élégant en or poli.',
        image: 'assets/images/products/collier10.jfif'
      },
      {
        id: 54,
        name: 'Collier Initiales Custom',
        price: 270,
        category: 'colliers',
        description: 'Personnalisez votre histoire avec ce collier délicat orné de la lettre de votre choix.',
        image: 'assets/images/products/collier11.jfif'
      },
      {
        id: 55,
        name: 'Parure Divine Éclipse',
        price: 390,
        category: 'ensembles',
        description: 'Un ensemble majestueux composé du collier et de la bague Éclipse assortis en or 18 carats.',
        image: 'assets/images/products/ensemble1.jfif'
      },
      {
        id: 56,
        name: 'Duo Perles Célestes',
        price: 360,
        category: 'ensembles',
        description: 'Ensemble comprenant un collier pendentif perle et les boucles d\'oreilles perles assorties.',
        image: 'assets/images/products/ensemble2.jfif'
      },
      {
        id: 57,
        name: 'Parure Beldi Royale',
        price: 400,
        category: 'ensembles',
        description: 'Une parure d\'exception : collier plastron et bracelet manchette ciselés à la main.',
        image: 'assets/images/products/ensemble3.jfif'
      },
      {
        id: 58,
        name: 'Trio Diamants Pureté',
        price: 400,
        category: 'ensembles',
        description: 'L\'alliance suprême : bague, collier et puces d\'oreilles sertis de diamants assortis.',
        image: 'assets/images/products/ensemble4.jfif'
      },
      {
        id: 59,
        name: 'Ensemble Aura Or',
        price: 350,
        category: 'ensembles',
        description: 'Duo composé d\'un jonc rigide et d\'une bague martelée de la collection Aura.',
        image: 'assets/images/products/ensemble5.jfif'
      },
      {
        id: 60,
        name: 'Parure Émeraude Impériale',
        price: 400,
        category: 'ensembles',
        description: 'Parure de haute joaillerie mariant l\'éclat des émeraudes de Colombie et de l\'or jaune 18 carats.',
        image: 'assets/images/products/ensemble6.jfif'
      },
      {
        id: 61,
        name: 'Duo Chaînes Solaires',
        price: 320,
        category: 'ensembles',
        description: 'Un ensemble décontracté chic associant le bracelet et le collier chaînes solaires.',
        image: 'assets/images/products/ensemble7.jfif'
      },
      {
        id: 62,
        name: 'Parure Cascade Dorée',
        price: 390,
        category: 'ensembles',
        description: 'Ensemble fluide composé d\'un collier cascade et de boucles d\'oreilles pendantes assorties.',
        image: 'assets/images/products/ensemble8.jfif'
      },
      {
        id: 63,
        name: 'Trio Cœurs Entrelacés',
        price: 380,
        category: 'ensembles',
        description: 'Un ensemble romantique complet : bague, bracelet et boucles d\'oreilles cœurs en or jaune.',
        image: 'assets/images/products/ensemble9.jfif'
      }
    ];
  },

  getSeedReviews() {
    return [
      {
        id: 1,
        productId: 1,
        productName: 'Luna d’Or',
        userName: 'Amina R.',
        rating: 5,
        comment: 'Très belle bague, livraison rapide et service impeccable !',
        date: '2026-07-28T14:32:00.000Z',
        approved: true
      },
      {
        id: 2,
        productId: 14,
        productName: 'Créoles Beldi Or',
        userName: 'Youssef B.',
        rating: 4,
        comment: 'Magnifiques créoles de style traditionnel marocain, très bel éclat.',
        date: '2026-07-30T10:15:00.000Z',
        approved: true
      },
      {
        id: 3,
        productId: 3,
        productName: 'Saphira Royale',
        userName: 'Laila K.',
        rating: 5,
        comment: 'Superbe design, elle fait son effet. Très satisfaite.',
        date: '2026-08-01T18:20:00.000Z',
        approved: false
      }
    ];
  },

  getSeedOrders() {
    return [
      {
        id: 1001,
        userId: 2,
        userName: 'Amina R.',
        userEmail: 'amina.r@gmail.com',
        items: [
          {
            productId: 1,
            name: 'Luna d’Or',
            price: 180,
            quantity: 1,
            image: '/assets/images/products/bague1.jfif',
            category: 'bagues'
          },
          {
            productId: 14,
            name: 'Créoles Beldi Or',
            price: 280,
            quantity: 1,
            image: '/assets/images/products/boucle1.jfif',
            category: 'boucles'
          }
        ],
        total: 460,
        status: 'completed',
        date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
        shipping: {
          fullName: 'Amina R.',
          address: '32 Boulevard d\'Anfa, Appt 5',
          city: 'Casablanca',
          postalCode: '20000',
          country: 'Maroc',
          phone: '+212 611 111 111'
        }
      },
      {
        id: 1002,
        userId: 3,
        userName: 'Youssef B.',
        userEmail: 'youssef.b@gmail.com',
        items: [
          {
            productId: 3,
            name: 'Saphira Royale',
            price: 350,
            quantity: 1,
            image: '/assets/images/products/bague3.jfif',
            category: 'bagues'
          }
        ],
        total: 350,
        status: 'completed',
        date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
        shipping: {
          fullName: 'Youssef B.',
          address: '15 Avenue de France',
          city: 'Rabat',
          postalCode: '10000',
          country: 'Maroc',
          phone: '+212 622 222 222'
        }
      },
      {
        id: 1003,
        userId: 4,
        userName: 'Laila K.',
        userEmail: 'laila.k@gmail.com',
        items: [
          {
            productId: 4,
            name: 'Bague Étoile Scintillante',
            price: 190,
            quantity: 2,
            image: '/assets/images/products/bague4.jfif',
            category: 'bagues'
          }
        ],
        total: 380,
        status: 'processing',
        date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        shipping: {
          fullName: 'Laila K.',
          address: 'Résidence El Minzah, Hivernage',
          city: 'Marrakech',
          postalCode: '40000',
          country: 'Maroc',
          phone: '+212 633 333 333'
        }
      },
      {
        id: 1004,
        userId: 2,
        userName: 'Client User',
        userEmail: 'client@zina.com',
        items: [
          {
            productId: 1,
            name: 'Luna d’Or',
            price: 180,
            quantity: 1,
            image: '/assets/images/products/bague1.jfif',
            category: 'bagues'
          }
        ],
        total: 180,
        status: 'pending',
        date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
        shipping: {
          fullName: 'Client User',
          address: 'Rue de Libye, Bourgogne',
          city: 'Casablanca',
          postalCode: '20100',
          country: 'Maroc',
          phone: '+212 644 444 444'
        }
      },
      {
        id: 1005,
        userId: 5,
        userName: 'Karim A.',
        userEmail: 'karim.a@gmail.com',
        items: [
          {
            productId: 14,
            name: 'Créoles Beldi Or',
            price: 280,
            quantity: 1,
            image: '/assets/images/products/boucle1.jfif',
            category: 'boucles'
          },
          {
            productId: 2,
            name: 'Bague Solitaire Céleste',
            price: 250,
            quantity: 1,
            image: '/assets/images/products/bague2.jfif',
            category: 'bagues'
          }
        ],
        total: 530,
        status: 'pending',
        date: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
        shipping: {
          fullName: 'Karim A.',
          address: '4 Boulevard Pasteur',
          city: 'Tanger',
          postalCode: '90000',
          country: 'Maroc',
          phone: '+212 655 555 555'
        }
      }
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