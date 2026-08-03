# ZINA - Luxury Jewelry E-Commerce Platform

ZINA est une plateforme d'e-commerce haut de gamme dédiée à la joaillerie et aux bijoux de luxe. Le projet combine un design épuré, des micro-animations interactives et une simulation complète de base de données persistante côté client.

---

## 🌟 Fonctionnalités Clés

### 🛒 Espace Client (Public)
*   **Accueil & Vitrine (`index.html`) :** Section Hero immersive, carrousels de collections phares et réassurance de marque.
*   **Boutique & Catalogue (`shop.html`) :** Navigation intuitive par catégories (Bagues, Colliers, Boucles d'oreilles, Bracelets).
*   **Fiches Produits (`product.html`) :** Rendu dynamique des fiches, description des matières, gestion des avis clients et boutons d'ajout au panier.
*   **Panier de luxe (`cart.html`) :** Refonte esthétique haut de gamme avec contrôles fluides des quantités et indicateurs de sécurité.
*   **Mon Profil (`profile.html`) :** Formulaire personnel unifié pour l'édition du nom complet et changement de mot de passe sécurisé.

### 🛡️ Espace Administration (`/admin/*`)
*   **Tableau de Bord (`dashboard.html`) :** Vue globale sur les statistiques réelles (chiffre d'affaires cumulé, produits en stock, volume de commandes).
*   **Gestion du Catalogue (`products.html`) :** Outil complet de création, d'édition et de suppression (CRUD) des bijoux.
*   **Suivi des Commandes (`orders.html`) :** Tableau de gestion des statuts de livraison (En attente, En cours de traitement, Livrée, Annulée).
*   **Gestion des Clients (`clients.html`) :** Annuaire des comptes enregistrés, recherche multicritères et bascule instantanée des rôles (Admin/Client).
*   **Modération des Avis (`reviews.html`) :** Filtrage et validation manuelle des commentaires clients avant diffusion sur les fiches publiques.
*   **Système de Notifications (`notifications.html`) :** Outil de diffusion d'alertes en temps réel ciblées (par client, aux admins, ou à tous les utilisateurs).
*   **Entraînement du Bot de Support (`chatbot.html`) :** Console d'édition des réponses du chatbot d'assistance client.

---

## 🛠️ Stack Technique

*   **Structure :** HTML5 Sémantique
*   **Design & Styles :** Tailwind CSS (via CDN) & Vanilla CSS (`base.css`, `components.css`, `pages.css`)
*   **Logique :** JavaScript Natif (ES6+)
*   **Base de Données & Persistance :** Simulation complète via l'API **LocalStorage** du navigateur avec initialisation de données tests réalistes.

---

## 🔑 Comptes de Test

Pour explorer les deux profils d'utilisateurs sur la plateforme :

| Rôle | Adresse E-mail | Mot de passe |
| :--- | :--- | :--- |
| **Administrateur** | `admin@zina.com` | `admin123` |
| **Client** | `client@zina.com` | `client123` |

---

## 🚀 Installation & Lancement

Le projet fonctionne de manière autonome sans dépendances complexes.

1.  **Cloner le dossier du projet** sur votre machine.
2.  **Lancer un serveur web local** pour éviter les restrictions de protocole CORS sur certains navigateurs.
    *   *Option 1 (VS Code) :* Installer l'extension **Live Server** et cliquer sur "Go Live".
    *   *Option 2 (Terminal) :* Exécuter la commande suivante à la racine :
        ```bash
        npx serve
        ```
3.  Ouvrez l'adresse indiquée (ex: `http://localhost:3000` ou `http://127.0.0.1:5500`) dans votre navigateur.
