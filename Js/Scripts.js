function toggleDropdown(event) {
  event.preventDefault();
  const dropdownMenu = event.target.nextElementSibling;
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

document.addEventListener('DOMContentLoaded', () => {
const dropdown = document.querySelector('.dropdown');


const catalogLink = document.querySelector('.dropdown-menu li a[href="Urbano.html"]');

dropdown.addEventListener('mouseleave', () => {
  const dropdownMenu = dropdown.querySelector('.dropdown-menu');
  dropdownMenu.style.display = 'none';
});


catalogLink.addEventListener('click', (event) => {
  event.preventDefault(); 
  window.location.href = 'Urbano.html';
});

// Muestra el menú desplegable cuando el puntero está encima de "Portales en Línea"
dropdown.addEventListener('mouseenter', () => {
  const dropdownMenu = dropdown.querySelector('.dropdown-menu');
  dropdownMenu.style.display = 'block';
});
});

const btnLeft = document.querySelector(".btn-left"),
btnRight = document.querySelector(".btn-right"),
slider = document.querySelector("#slider"),
sliderSection = document.querySelectorAll(".slider-section");

btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())

setInterval(moveToRight, 3000);

let operacion = 0;
let counter = 0;
let widthImg = 100 / sliderSection.length;

function moveToRight (){
if (counter >= sliderSection.length - 1){
counter =0;
} else {
counter++;
}
updateSlider();
}

function moveToLeft (){

if (counter < 0 ) {
counter = sliderSection.length-1;
operacion = widthImg * (sliderSection.length-1);
} else{
counter--;
}
updateSlider();
}

function updateSlider() {
let operacion = widthImg * counter;  // Calculamos el valor de translate en porcentaje
slider.style.transform = `translateX(-${operacion}%)`;  // Desplaza el slider
}

// Script to handle smooth scrolling and redirect to category pages 
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});

// Function to redirect to category pages
function goToCategory(category) {
    window.location.href = category + '.html'; // Redirect to individual category page
}


function loadBlogPosts() {
  const blogSection = document.querySelector(".blog-posts");
  blogSection.innerHTML += `
    <div class="blog-post">
      <h3>Tendencias de Moda 2024</h3>
      <p>Explora las tendencias de moda más destacadas del año.</p>
    </div>
    <div class="blog-post">
      <h3>Cómo cuidar tu vestuario de diseñador</h3>
      <p>Consejos prácticos para mantener tus prendas en óptimas condiciones.</p>
    </div>
  `;
}

loadBlogPosts();
function toggleDropdown(event) {
  event.preventDefault();
  const dropdownMenu = event.target.nextElementSibling;
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

