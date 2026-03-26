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

displayProducts(products) {
    const productContainer = document.getElementById('product-container');

    const featuredProducts = products.filter(product => product.fields.featured);