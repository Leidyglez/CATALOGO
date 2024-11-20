var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4, 
    spaceBetween: 20, 
    slidesPerGroup: 4,
    centeredSlides: false,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      }
  });

  function verDetalles() {
    window.location.href = 'Product-details.html'; // Cambia esto según la URL de tu página de detalles
  }

