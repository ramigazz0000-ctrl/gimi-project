function generateProductCard(product) {
    const t = translations[currentLang];
    
    let priceHtml = '';
    if (product.oldPrice && product.isDealOfDay) {
        priceHtml = `
            <div class="product-price deal">
                <span class="old-price">${product.oldPrice} ${t.currency}</span>
                <span class="current-price">${product.price} ${t.currency}</span>
            </div>
        `;
    } else {
        priceHtml = `
            <div class="product-price">
                <span class="current-price">${product.price} ${t.currency}</span>
            </div>
        `;
    }

    return `
        <div class="product-card">
            ${product.isDealOfDay ? `<div class="badge deal-badge">${t.dealOfDay}</div>` : ''}
            <div class="product-image-wrap">
                <img src="${product.image}" alt="${product.name[currentLang]}" class="product-image" loading="lazy">
            </div>
            <div class="product-details">
                <h3 class="product-title">${product.name[currentLang]}</h3>
                ${priceHtml}
                
                <div class="product-badges">
                    <span class="badge feature-badge">${t.homeDelivery}</span>
                    <span class="badge feature-badge">${t.cashOnDelivery}</span>
                </div>
                
                <div class="product-meta">
                    <span class="product-id">${t.productNumber} <strong>${product.id}</strong></span>
                </div>
                
                <button class="btn btn-wa order-btn" onclick="orderViaWhatsApp(${product.id}, '${product.name[currentLang].replace(/'/g, "\\'")}', ${product.price})">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.81 11.81 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z"/>
                    </svg>
                    ${t.orderNow}
                </button>
            </div>
        </div>
    `;
}

function renderProducts() {
    const t = translations[currentLang];
    
    // Render Deal of the Day
    const dealContainer = document.getElementById('deal-of-day-container');
    if (dealContainer) {
        const deals = productsData.filter(p => p.isDealOfDay);
        if (deals.length > 0) {
            dealContainer.innerHTML = deals.map(generateProductCard).join('');
            document.getElementById('deal-section').style.display = 'block';
        } else {
            document.getElementById('deal-section').style.display = 'none';
        }
    }

    // Render Popular Products
    const popularContainer = document.getElementById('popular-products-container');
    if (popularContainer) {
        const populars = productsData.filter(p => p.isPopular && !p.isDealOfDay);
        popularContainer.innerHTML = populars.map(generateProductCard).join('');
    }

    // Render All Products
    const allContainer = document.getElementById('all-products-container');
    if (allContainer) {
        allContainer.innerHTML = productsData.map(generateProductCard).join('');
    }
}

function orderViaWhatsApp(productId, productName, price) {
    const t = translations[currentLang];
    // Example tailored message for the merchant
    const message = `مرحباً، أريد طلب هذا المنتج:
المنتج: ${productName}
رقم المنتج: ${productId}
السعر: ${price} ${t.currency}
`;
    // Using default Arabic encoding since the merchant speaks Arabic locally
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Open WhatsApp URL
    window.open(whatsappUrl, '_blank');
}

// Initial render handled safely by i18n triggers
