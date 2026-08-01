/* ========================================
   ZINA - Admin Functions
   admin.js
   ======================================== */

const Admin = {
  showProductForm(product = null) {
    const form = document.getElementById('product-form');
    if (!form) return;

    if (product) {
      form.querySelector('[name="name"]').value = product.name;
      form.querySelector('[name="price"]').value = product.price;
      form.querySelector('[name="category"]').value = product.category;
      form.querySelector('[name="description"]').value = product.description;
      form.querySelector('[name="image"]').value = product.image;
      form.dataset.productId = product.id;
    } else {
      form.reset();
      delete form.dataset.productId;
    }
  },

  renderProductsTable(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const products = Products.getAll();

    container.innerHTML = products.length === 0 ? '<p>No products</p>' : `
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${products.map(p => `
            <tr>
              <td>${p.id}</td>
              <td><img src="${p.image}" style="width:50px;height:50px;object-fit:cover;"></td>
              <td>${p.name}</td>
              <td>${p.category}</td>
              <td>${Cart.formatPrice(p.price)}</td>
              <td>
                <button class="btn-small btn-secondary" onclick="Admin.editProduct(${p.id})">Edit</button>
                <button class="btn-small btn-danger" onclick="Admin.deleteProduct(${p.id})">Delete</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  },

  editProduct(id) {
    const product = Products.getById(id);
    this.showProductForm(product);
    window.scrollTo(0, 0);
  },

  deleteProduct(id) {
    if (!confirm('Delete this product?')) return;
    Products.delete(id);
    App.showAlert('Product deleted', 'success');
    this.renderProductsTable('products-table');
  },

  renderOrdersList(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const orders = Orders.getAll().sort((a, b) => new Date(b.date) - new Date(a.date));
    container.innerHTML = orders.length === 0 ? '<p>No orders</p>' : 
      orders.map(order => Orders.renderOrderCard(order)).join('');
  },

  renderMessagesList(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const messages = Messages.getAll();
    container.innerHTML = messages.length === 0 ? '<p>No messages</p>' : `
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${messages.map(m => `
            <tr style="${!m.read ? 'background:#fffbeb;' : ''}">
              <td>${Orders.formatDate(m.date)}</td>
              <td>${m.name}</td>
              <td>${m.email}</td>
              <td>${m.subject}</td>
              <td>
                <button class="btn-small btn-secondary" onclick="Admin.viewMessage(${m.id})">View</button>
                <button class="btn-small btn-danger" onclick="Admin.deleteMessage(${m.id})">Delete</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  },

  viewMessage(id) {
    const message = Messages.getAll().find(m => m.id === id);
    if (!message) return;

    Messages.markAsRead(id);
    alert(`From: ${message.name} (${message.email})

Subject: ${message.subject}

${message.message}`);
    this.renderMessagesList('messages-list');
  },

  deleteMessage(id) {
    if (!confirm('Delete this message?')) return;
    Messages.delete(id);
    App.showAlert('Message deleted', 'success');
    this.renderMessagesList('messages-list');
  }
};