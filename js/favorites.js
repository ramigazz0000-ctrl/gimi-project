// favorites.js

// Array to hold favorite products
let favorites = [];

// Function to add a product to favorites
function addFavorite(product) {
    if (!favorites.includes(product)) {
        favorites.push(product);
        console.log(`${product} added to favorites`);
    } else {
        console.log(`${product} is already in favorites`);
    }
}

// Function to remove a product from favorites
function removeFavorite(product) {
    const index = favorites.indexOf(product);
    if (index > -1) {
        favorites.splice(index, 1);
        console.log(`${product} removed from favorites`);
    } else {
        console.log(`${product} is not in favorites`);
    }
}

// Function to list all favorite products
function listFavorites() {
    return favorites;
}

// Example usage:
// addFavorite('Product 1');
// removeFavorite('Product 1');
// console.log(listFavorites());
