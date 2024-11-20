/* Details */
const products = [
    {
      category: "urbano",
      name: "Estilo Urbano Moderno",
      author: "Autor 1",
      collection: "Colección Primavera 2024",
      date: "Marzo 2024",
      description: "Un estilo urbano elegante y cómodo.",
      modelSize: "Altura: 170 cm, Busto: 85 cm",
      clothingSize: "Talla M",
      imageUrl: "Clothes/1.jpeg"
    }
  ];
  
  function displayProducts(category) {
    const catalog = document.getElementById("catalog");
    catalog.innerHTML = "";
  
    products
      .filter(product => category === "all" || product.category === category)
      .forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
  
        productCard.innerHTML = `
          <div class="product-image-container">
            <img src="${product.imageUrl}" class="product-image" alt="${product.name}">
          </div>
          <div class="product-info">
            <h2>${product.name}</h2>
            <p><strong>Autor:</strong> ${product.author}</p>
            <p><strong>Colección:</strong> ${product.collection}</p>
            <p><strong>Fecha:</strong> ${product.date}</p>
            <p>${product.description}</p>
            <p><strong>Medidas de la modelo:</strong> ${product.modelSize}</p>
            <p><strong>Medidas del vestuario:</strong> ${product.clothingSize}</p>
          </div>
        `;
  
        catalog.appendChild(productCard);
  
        const productImage = productCard.querySelector(".product-image");
        productImage.addEventListener("click", () => {
          productImage.classList.toggle("zoomed");
        });
      });
  }
  
  document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const category = e.target.getAttribute("data-category");
      displayProducts(category);
    });
  });
  
  displayProducts("all");

  var productGallerySwiper = new Swiper('.product-gallery', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
  });


