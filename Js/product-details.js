function generateProductHTML(product) {
    const { id, title, author, matricula, collection, date, description, images } = product;

    // Find or create the `product-main` section
    let productSection = document.querySelector(".product-main");
    if (!productSection) {
        productSection = document.createElement("section");
        productSection.classList.add("product-main");
    }

    // Clear the section to avoid duplicate content
    productSection.innerHTML = "";

    // Card Section
    const card = document.createElement("div");
    card.classList.add("card");

    const viewerIcon = document.createElement("div");
    viewerIcon.classList.add("viewer-icon");
    viewerIcon.innerHTML = `<i class='bx bx-street-view'></i>`;
    card.appendChild(viewerIcon);

    // Adding images dynamically from JSON
    images.forEach((imageSrc, index) => {
        const span = document.createElement("span");
        span.style.setProperty("--i", index);

        const img = document.createElement("img");
        img.src = imageSrc;
        img.alt = `Product view ${index + 1}`;

        card.appendChild(span);
        card.appendChild(img);
    });

    productSection.appendChild(card);

    // Product Details Section
    const productDetails = document.createElement("div");
    productDetails.classList.add("product-details");

    const titleElement = document.createElement("h2");
    titleElement.textContent = title;

    const authorElement = document.createElement("p");
    authorElement.innerHTML = `<strong>Autor:</strong> ${author}`;

    const matriculaElement = document.createElement("p");
    matriculaElement.innerHTML = `<strong>Matricula:</strong> ${matricula}`;

    const collectionElement = document.createElement("p");
    collectionElement.innerHTML = `<strong>Colección:</strong> ${collection}`;

    const dateElement = document.createElement("p");
    dateElement.innerHTML = `<strong>Fecha:</strong> ${date}`;

    productDetails.appendChild(titleElement);
    productDetails.appendChild(authorElement);
    productDetails.appendChild(matriculaElement);
    productDetails.appendChild(collectionElement);
    productDetails.appendChild(dateElement);

    // Description Section
    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("container-description");

    const titleDescription = document.createElement("div");
    titleDescription.classList.add("title-description");
    titleDescription.innerHTML = `
      <h4>Descripción</h4>
      <i id="description-icon" class='bx bx-chevron-down'></i>
    `;

    const textDescription = document.createElement("div");
    textDescription.classList.add("text-description");
    textDescription.innerHTML = `
      <p>${description.text}</p>
      <p><strong>Materiales:</strong> ${description.materials}</p>
      <p><strong>Medidas:</strong> ${description.dimensions}</p>
      <p><strong>Medidas del modelo:</strong> ${description.modelMeasurements}</p>
    `;

    descriptionContainer.appendChild(titleDescription);
    descriptionContainer.appendChild(textDescription);
    productDetails.appendChild(descriptionContainer);

    productSection.appendChild(productDetails);

    // Append the updated section to the DOM (replace existing or append to body)
    const container = document.querySelector("body"); // Change this selector to target a specific container
    if (!document.querySelector(".product-main")) {
        container.appendChild(productSection);
    }

    // Toggle description visibility
    const descriptionIcon = document.getElementById("description-icon");
    titleDescription.addEventListener("click", () => {
        textDescription.classList.toggle("d-none");
        descriptionIcon.classList.toggle("bx-chevron-down");
        descriptionIcon.classList.toggle("bx-chevron-up");
    });
}

initiliazeProductDetails();

function initiliazeProductDetails(){

    const productId = getProductIdFromQueryString();

    if (productId) {
    
        var product = productJson.find(s => s.id === productId);
    
        if (!product) {
            console.log("Product not found in array");
            return;
        } 

        removeHideButton();
        generateProductHTML(product);

    } else {
        console.log("No product ID found in the query string.");
    }
}

function removeHideButton() {
    var productNotFoundElement = document.querySelector('.product-not-found');
    if (productNotFoundElement)
        productNotFoundElement.classList.add('d-none');
}

function getProductIdFromQueryString() {
    // Get the query string from the URL
    const queryString = window.location.search;

    // Parse the query string
    const urlParams = new URLSearchParams(queryString);

    // Get the 'id' parameter from the query string
    const productId = urlParams.get("id");

    return productId; // Returns the id, or null if it doesn't exist
}