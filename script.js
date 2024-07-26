document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: 'baju rajut',
            image: 'images/produk1.jpg',
            price: 'Rp100.000'
        },
        {
            name: 'baju keren ',
            image: 'images/produk2.jpg',
            price: 'Rp200.000'
        }
    ];
    
    const productsSection = document.getElementById('products');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.price}</p>
            <button onclick="checkout('${product.name}')">Beli Sekarang</button>
        `;
        productsSection.appendChild(productDiv);
    });
});

function checkout(productName) {
    const phoneNumber = '6287810906123'; // Ganti dengan nomor WhatsApp-mu
    const message = `Saya ingin membeli ${productName}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`);
}
