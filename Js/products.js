// Insert products dynamically into Swiper
const swiperWrapper = document.getElementById('swiper-wrapper');

shuffle(productJson);

productJson.forEach(product => {
  const slide = document.createElement('div');
  slide.classList.add('swiper-slide');
  
  // Create the slide content
  let imagesHtml = '';
  product.images.forEach(image => {
    imagesHtml += `<img src="${image}" alt="${product.title}" class="product-image">`;
  });

  let firstImage = product.images[0];
  slide.innerHTML = ` 
    <div class="product-info">
      <img src="${firstImage}" alt="${product.title}" class="product-image">
      <h4 class="product-title">${product.title}</h4>
      <p class="product-collection">${product.collection}</p>
      <p class="product-author"><strong>Autor:</strong> ${product.author}</p>
      <a href="product-details.html?id=${product.id}" class="details-btn">Detalles</a>
    <div>
  `;

  swiperWrapper.appendChild(slide);
});

  
// Initialize Swiper if on homepage
const productSlider = document.querySelector('.swiper');
if (productSlider) {
  new Swiper('.swiper', {
    slidesPerView: 1,
    slidesPerGroup: 4,
    spaceBetween: 20,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    }
  });
}

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}