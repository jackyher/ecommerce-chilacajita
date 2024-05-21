document.addEventListener("DOMContentLoaded", function() {
    const cartItemsContainer = document.getElementById('cart-items');

    function loadCart() {
        let cart = localStorage.getItem('cart');
        cart = cart ? JSON.parse(cart) : [];

        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="text-center">El carrito está vacío.</p>';
            return;
        }

        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item', 'list-group-item');
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>Precio: ${item.price}</p>
                </div>
                <div class="cart-item-quantity">
                    <span>Cantidad: ${item.quantity}</span>
                </div>
            `;

            cartItemsContainer.appendChild(itemElement);
        });
    }

    document.getElementById('empty-cart').addEventListener('click', function() {
        localStorage.removeItem('cart');
        loadCart();
    });

    loadCart();
});
