// Selección de elementos del DOM
const container = document.getElementById('products-container');
const productNotFoundElement = document.getElementById('products-not-found');

/**
 * Obtiene el valor de un parámetro específico en el query string de la URL.
 * @param {string} param - Nombre del parámetro.
 * @returns {string|null} - Valor del parámetro o null si no existe.
 */
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

/**
 * Encuentra una colección en el JSON según su ID.
 * @param {string} collectionId - ID de la colección.
 * @returns {Object|null} - Objeto de la colección o null si no existe.
 */
function findCollectionById(collectionId) {
  return categoriesJson.find(category => category.collectionId == collectionId);
}

/**
 * Filtra productos por el ID de la colección.
 * @param {string} collectionId - ID de la colección.
 * @returns {Array} - Lista de productos pertenecientes a la colección.
 */
function filterProductsByCollectionId(collectionId) {
  return productJson.filter(product => product.collectionId === collectionId);
}

/**
 * Division del arreglo en trozos de un tamaño específico.
 * @param {Array} array - Arreglo a dividir.
 * @param {number} size - Tamaño de cada trozo.
 * @returns {Array} - Arreglo de trozos.
 */
function chunkArray(array, size) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

/**
 * Crea un elemento HTML para un producto.
 * @param {Object} product - Objeto del producto.
 * @returns {HTMLElement} - Elemento DOM del producto.
 */
function createProductElement(product) {
  const productInfoElement = document.createElement('div');
  productInfoElement.classList.add('product-info');

  const firstImage = product.images[0];

  productInfoElement.innerHTML = `
    <img src="${firstImage}" alt="${product.title}" class="product-image">
    <h4 class="product-title">${product.title}</h4>
    <p class="product-collection">${product.collection}</p>
    <p class="product-author"><strong>Autor:</strong> ${product.author}</p>
    <a href="product-details.html?id=${product.id}" class="details-btn">Detalles</a>
  `;

  return productInfoElement;
}

/**
 * Muestra los productos de una página específica.
 * @param {Array} products - Lista de productos por páginas.
 * @param {number} page - Número de página (comienza en 0).
 */
function displayProductsByPage(products, page) {
  container.innerHTML = ""; // Limpia el contenedor
  const currentPageProducts = products[page]; // Obtiene los productos de la página actual
  currentPageProducts.forEach(product => {
    const productElement = createProductElement(product);
    container.appendChild(productElement);
  });
}

/**
 * Crea botones de paginación con flechas y controla la navegación.
 * @param {Array} paginatedProducts - Lista de productos paginados.
 */
function setupPagination(paginatedProducts) {
  const paginationContainer = document.createElement("div");
  paginationContainer.classList.add("pagination");

  const pagesPerGroup = 2; // Número de páginas visibles por grupo
  let currentGroupStart = 0; // Índice del inicio del grupo actual

  /**
   * Renderiza los botones de paginación para el grupo actual.
   */
  function renderPaginationButtons() {
    paginationContainer.innerHTML = ""; // Limpia el contenedor de botones

    // Botón "Anterior" (solo si no estamos en el primer grupo)
    if (currentGroupStart > 0) {
      const prevButton = document.createElement("button");
      prevButton.textContent = "<";
      prevButton.classList.add("page-btn");
      prevButton.addEventListener("click", () => {
        currentGroupStart -= pagesPerGroup;
        renderPaginationButtons();
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

    // Botón "Siguiente" (solo si hay más páginas después del grupo actual)
    if (currentGroupStart + pagesPerGroup < paginatedProducts.length) {
      const nextButton = document.createElement("button");
      nextButton.textContent = ">";
      nextButton.classList.add("page-btn");
      nextButton.addEventListener("click", () => {
        currentGroupStart += pagesPerGroup;
        renderPaginationButtons();
      });
      paginationContainer.appendChild(nextButton);
    }
  }

  renderPaginationButtons(); // Renderiza la paginación inicial
  container.after(paginationContainer); // Agrega la paginación debajo del contenedor de productos
}

/**
 * Actualiza la información de la categoría en la interfaz.
 * @param {Object|null} category - Objeto de la categoría (o null si no existe).
 */
function updateCategoryInfo(category) {
  const categoryTitleText = document.getElementById("category-title-text");
  const categoryIcon = document.getElementById("category-icon");
  const categoryDescription = document.getElementById("category-description");

  if (category) {
    // Actualiza la información si la categoría existe
    categoryTitleText.textContent = category.title;
    categoryIcon.src = category.image;
    categoryIcon.alt = `${category.title} Icon`;
    categoryDescription.textContent = category.description;
  } else {
    // Muestra mensaje genérico si no se encuentra la categoría
    categoryIcon.remove();
    categoryTitleText.textContent = "Categoría no encontrada";
  }
}

// Lógica principal
function initialize() {
  const collectionId = getQueryParam("collection"); // Obtiene el ID de la colección
  const collection = findCollectionById(collectionId); // Encuentra la colección correspondiente
  updateCategoryInfo(collection); // Actualiza la información de la categoría

  const productsOfCategory = filterProductsByCollectionId(collectionId); // Filtra los productos por la colección

  if (productsOfCategory.length === 0) {
    productNotFoundElement.classList.remove('d-none');
  } else {
    const productsPerPage = 10; // Número de productos por página
    const paginatedProducts = chunkArray(productsOfCategory, productsPerPage); // Divide los productos en páginas

    displayProductsByPage(paginatedProducts, 0); // Muestra la primera página
    setupPagination(paginatedProducts); // Configura la paginación
  }
}
initialize();