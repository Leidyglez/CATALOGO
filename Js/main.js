// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const lastProductContainer = document.getElementById('last-products-container')

menuToggle?.addEventListener('click', () => {
  navMenu?.classList.toggle('active');
});

// Last Products
function createProductElement() {


  lastProducts = getLastFourByCreationDate(productJson);
  
  lastProducts.forEach(product => {
    const productInfoElement = document.createElement('a');
    productInfoElement.classList.add('product-info');
    productInfoElement.href = `product-details.html?id=${product.id}`
    const firstImage = product.images[0];

    productInfoElement.innerHTML = `
      <img src="${firstImage}" alt="${product.title}" class="product-image">
      <h4 class="product-title">${product.title}</h4>
      <p class="product-collection">${product.collection}</p>
      <p class="product-author"><strong>Autor:</strong> ${product.author}</p>
    `; 
    lastProductContainer.appendChild(productInfoElement);
  });

}


function getLastFourByCreationDate(items) {
  if (!Array.isArray(items)) {
      throw new Error("Input must be an array");
  }
  return items
      .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date descending
      .slice(0, 4); // Get the top 4
}

createProductElement();
