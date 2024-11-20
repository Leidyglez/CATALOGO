// Selección de elementos del DOM
const container = document.getElementById('products-container');
const productNotFoundElement = document.getElementById('products-not-found');

/** Obtiene el valor de un parámetro específico en el query string de la URL.
 @param {string} param 
 @returns {string|null} 
*/ 
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

/** Encuentra una colección en el JSON según su ID.
@param {string} collectionId 
@returns {Object|null} 
*/
function findCollectionById(collectionId) {
  return categoriesJson.find(category => category.collectionId == collectionId);
}

/**Filtra productos por el ID de la colección.
 @param {string} collectionId 
 @returns {Array} 
*/
function filterProductsByCollectionId(collectionId) {
  return productJson.filter(product => product.collectionId === collectionId);
}

/** Division del arreglo en trozos de un tamaño específico.
 @param {Array} array 
 @param {number} size 
 @returns {Array} 
*/
function chunkArray(array, size) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

/** Se crea un elemento HTML para un producto.
 @param {Object} product 
 @returns {HTMLElement} 
*/
function createProductElement(product) {
  const productInfoElement = document.createElement('a');
  productInfoElement.classList.add('product-info');
  productInfoElement.href = `product-details.html?id=${product.id}`;
  
  const firstImage = product.images[0];

  productInfoElement.innerHTML = `
    <img src="${firstImage}" alt="${product.title}" class="product-image">
    <h4 class="product-title">${product.title}</h4>
    <p class="product-collection">${product.collection}</p>
    <p class="product-author"><strong>Autor:</strong> ${product.author}</p>
  `;

  return productInfoElement;
}

/** Muestra los productos de una página específica.
 @param {Array} products 
 @param {number} page 
*/
function displayProductsByPage(products, page) {
  container.innerHTML = ""; 
  const currentPageProducts = products[page]; 
  currentPageProducts.forEach(product => {
    const productElement = createProductElement(product);
    container.appendChild(productElement);
  });
}

/** Crea botones de paginación con flechas y controla la navegación.
 @param {Array} paginatedProducts 
*/
function setupPagination(paginatedProducts) {
  const paginationContainer = document.createElement("div");
  paginationContainer.classList.add("pagination");

  const pagesPerGroup = 2; 
  let currentGroupStart = 0; 

  //Renderiza los botones de paginación para el grupo actual.
   
  function renderPaginationButtons() {
    paginationContainer.innerHTML = ""; 

    // Botón "Anterior" 
    if (currentGroupStart > 0) {
      const prevButton = document.createElement("button");
      prevButton.textContent = "<";
      prevButton.classList.add("page-btn");
      prevButton.addEventListener("click", () => {
        currentGroupStart -= pagesPerGroup;
        renderPaginationButtons();
        displayProductsByPage(paginatedProducts, currentGroupStart); 
        highlightActiveButton(currentGroupStart); 
      });
      paginationContainer.appendChild(prevButton);
    }

    // Botones de páginas del grupo actual
    for (
      let i = currentGroupStart;
      i < Math.min(currentGroupStart + pagesPerGroup, paginatedProducts.length);
      i++
    ) {
      const button = document.createElement("button");
      button.textContent = i + 1;
      button.classList.add("page-btn");

      // Evento para cambiar de página
      button.addEventListener("click", () => {
        document.querySelectorAll('.page-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        displayProductsByPage(paginatedProducts, i);
      });

      paginationContainer.appendChild(button);
    }

    // Botón "Siguiente" 
    if (currentGroupStart + pagesPerGroup < paginatedProducts.length) {
      const nextButton = document.createElement("button");
      nextButton.textContent = ">";
      nextButton.classList.add("page-btn");
      nextButton.addEventListener("click", () => {
        currentGroupStart += pagesPerGroup;
        renderPaginationButtons();
        displayProductsByPage(paginatedProducts, currentGroupStart); 
        highlightActiveButton(currentGroupStart); 

      });
      paginationContainer.appendChild(nextButton);
    }
  }
  /** Destaca el botón activo en la paginación.
  @param {number} pageIndex 
   */
  function highlightActiveButton(pageIndex) {
    const buttons = paginationContainer.querySelectorAll(".page-btn");
    buttons.forEach(btn => btn.classList.remove("active"));
    const activeButton = Array.from(buttons).find(btn => parseInt(btn.textContent) === pageIndex + 1);
    if (activeButton) {
      activeButton.classList.add("active");
    }
  }

  renderPaginationButtons(); 
  container.after(paginationContainer); 
  
  displayProductsByPage(paginatedProducts, 0);
  highlightActiveButton(0);
}


/** Actualiza la información de la categoría en la interfaz.
@param {Object|null} category 
*/
function updateCategoryInfo(category) {
  const categoryTitleText = document.getElementById("category-title-text");
  const categoryIcon = document.getElementById("category-icon");
  const categoryDescription = document.getElementById("category-description");

  if (category) {
    categoryTitleText.textContent = category.title;
    categoryIcon.src = category.image;
    categoryIcon.alt = `${category.title} Icon`;
    categoryDescription.textContent = category.description;
  } else {
    categoryIcon.remove();
    categoryTitleText.textContent = "Categoría no encontrada";
  }
}

// Lógica principal
function initialize() {
  const collectionId = getQueryParam("collection"); 
  const collection = findCollectionById(collectionId); 
  updateCategoryInfo(collection); 

  const productsOfCategory = filterProductsByCollectionId(collectionId); 

  if (productsOfCategory.length === 0) {
    productNotFoundElement.classList.remove('d-none');
  } else {
    const productsPerPage = 10; 
    const paginatedProducts = chunkArray(productsOfCategory, productsPerPage); // Divide los productos en páginas

    displayProductsByPage(paginatedProducts, 0); 
    setupPagination(paginatedProducts); 
  }
}
initialize(); 