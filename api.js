
// Select API message div
let api = document.querySelector(".api");

// Select product list div
let productList = document.querySelector(".product-list");

// Display Loading message
api.innerHTML = "Loading...";

// Fetch API data
fetch("https://fakestoreapi.com/products")

.then(function(response) {

    return response.json();

})

.then(function(products) {

    // Display success message
    api.innerHTML = "API Data Successfully Loaded!";

    // Display first 5 products
    products.slice(0, 5).forEach(function(product) {

        // Create card div
        let card = document.createElement("div");

        card.className = "card";

        // Display product details
        card.innerHTML = `

            <h2>
                ID: ${product.id} -
                ${product.title.slice(0, 50)}
            </h2>

            <div>
                <img src="${product.image}" width="200px">
            </div>

            <p class="price">
                Price: $${product.price}
            </p>

            <h3>
                Category: ${product.category}
            </h3>

            <p>
                ${product.description.slice(0, 100)}
            </p>

        `;

        // Add card to webpage
        productList.appendChild(card);

        // Display title in console
        console.log(product.title);

    });

})

.catch(function(error) {

    // Display error message
    api.innerHTML = "API Error: " + error.message;

    api.className = "api error";

    console.log(error);

})

.finally(function() {

    console.log("API request completed");

    api.innerHTML += "<br>API request completed";

});
