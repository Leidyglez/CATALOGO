const container = document.getElementById('category-container');

categoriesJson.forEach(category => {
    
    const categoryElement = document.createElement('a');
    categoryElement.classList.add('category-card');
     
    // Dynamically create the category card using innerHTML
    categoryElement.innerHTML = `
    <a href="/productos.html?collection=${category.collectionId}" class="category-card">
    <img src="${category.image}" alt="${category.title}">
    <div class="category-content">
        <h3>${category.title}</h3>
        <p>${category.description}</p>
    </div>
    </a>
    `;

    container.appendChild(categoryElement);
});
  