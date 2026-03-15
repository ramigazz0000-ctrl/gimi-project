// cart.js

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
    }

    getItems() {
        return this.items;
    }

    clearCart() {
        this.items = [];
    }

    // Functionality to generate WhatsApp order summary
    generateWhatsAppOrder() {
        const orderSummary = this.items.map(item => `Item: ${item.name}, Price: ${item.price}`).join('\n');
        const totalAmount = this.items.reduce((total, item) => total + item.price, 0);
        const message = `Order Summary:\n${orderSummary}\nTotal: ${totalAmount}`;

        // Encode the message for URL
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedMessage}`;
        return whatsappUrl;
    }
}

// Example usage:
const cart = new ShoppingCart();
cart.addItem({id: 1, name: 'Product 1', price: 10});
cart.addItem({id: 2, name: 'Product 2', price: 20});

console.log(cart.generateWhatsAppOrder());
