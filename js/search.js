// Product Search Functionality

function searchProducts(products, query) {
    return products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );
}

// Example usage:
const products = [
    { name: 'Product 1', description: 'Description 1' },
    { name: 'Product 2', description: 'Description 2' },
];

const searchQuery = 'product';
const results = searchProducts(products, searchQuery);
console.log(results);