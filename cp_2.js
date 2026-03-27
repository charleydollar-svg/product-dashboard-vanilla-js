function fetchProductsThen() {
    fetch(apiURL = 'https://www.course-api.com/javascript-store-products')
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok ' + response.statusText);
            return response.json();
        })
        .then(products => {
            console.log(products);
            products.forEach(product => console.log(product.fields.name));
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
}

async function fetchProductsAsync() {
    try {
        const response = await fetch(apiURL = 'https://www.course-api.com/javascript-store-products');
        if (!response.ok) throw new Error('Network response was not ok ' + response.statusText);
        const products = await response.json();
        displayProducts(products);
    }
    catch (error) {
        console.error('Error fetching products:', error);
    }
}

function displayProducts(products) {
    const productContainer = document.getElementById('product-container');

    const featuredProducts = products.slice(0, 5); // Get the first 5 products
    featuredProducts.forEach(product => {
        const { name, price, image } = product.fields;
        const imageUrl = image[0].url;
        const formattedPrice = (price / 100).toFixed(2); // Convert price from cents to dollars
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${imageUrl}" alt="${name}">
            <h2>${name}</h2>
            <p>$${formattedPrice}</p>
        `;
        productContainer.appendChild(productElement);
    });
}

function handleError(error) {
    console.error('Error fetching products:', error);
}

fetchProductsThen();
fetchProductsAsync();