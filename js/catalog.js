// Initialize product grid
function initializeProductGrid() {
    const productGrids = document.querySelectorAll('.product-grid');
    
    productGrids.forEach(grid => {
      const category = grid.closest('.category-section').id;
      const categoryProducts = products.filter(p => p.category === category);
      
      grid.innerHTML = categoryProducts.map(product => `
        <div class="product-card" data-product-id="${product.id}">
          <img src="${product.images[0]}" alt="${product.name}">
          <div class="product-card-content">
            <h3>${product.name}</h3>
            <p>Colección: ${product.collection}</p>
            <p>Autor: ${product.author}</p>
            <button class="view-details-btn">Ver Detalles</button>
          </div>
        </div>
      `).join('');
    });
  }
  
  
  // Modal functionality
  const modal = document.getElementById('product-modal');
  const closeModal = document.querySelector('.close-modal');
  
  function openProductModal(product) {
    const modalContent = modal.querySelector('.product-info');
    modalContent.innerHTML = `
      <h2>${product.name}</h2>
      <div class="product-details">
        <p><strong>Colección:</strong> ${product.collection}</p>
        <p><strong>Autor:</strong> ${product.author}</p>
        <p><strong>Fecha:</strong> ${product.date}</p>
        <p><strong>Descripción:</strong> ${product.description}</p>
        ${product.modelMeasurements ? `
          <div class="measurements">
            <h3>Medidas del Modelo</h3>
            <p>Altura: ${product.modelMeasurements.height} cm</p>
            <p>Busto: ${product.modelMeasurements.bust} cm</p>
          </div>
        ` : ''}
        ${product.size ? `<p><strong>Talla:</strong> ${product.size}</p>` : ''}
      </div>
    `;
  
    // Initialize product gallery Swiper
    new Swiper('.product-gallery', {
      slidesPerGroup: 4,
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  
    modal.classList.add('active');
  }
  
  // Event listeners
  document.addEventListener('DOMContentLoaded', () => {
    initializeProductGrid();
  
    // Product click handlers
    document.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('click', () => {
        const productId = card.dataset.productId;
        const product = products.find(p => p.id === productId);
        if (product) {
          openProductModal(product);
        }
      });
    });
  });
  
  closeModal?.addEventListener('click', () => {
    modal?.classList.remove('active');
  });
  
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });