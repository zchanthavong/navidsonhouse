const products = [
    { id: 1,
        name: 'Lighting',
        price: 25.00,
        desc: 'Need a flashlights, helmet, LED, or lantern? We have you covered.',
        img: 'sfys-light.jpg',
        colors: ['Black', 'Red', 'Blue'],
        sizes: ['Flashlight', 'Helmet Light', 'LED', 'Lantern'],
        quantities: [1, 2, 3, 4, 5] },
    { id: 2,
        name: 'Tent',
        price: 56.00,
        desc: 'A good place to rest and/or protect yourself from the elements.',
        img: 'sfys-tent.jpg',
        colors: ['Gray', 'Navy', 'Camo'],
        sizes: ['2-Person', '4-Person', '6-Person', '8-Person'],
        quantities: [1, 2, 3, 4, 5] },
    { id: 3,
        name: 'Mattress',
        price: 80.00,
        desc:'A slight improvement to the cold, hard floor.',
        img:'sfys-matress.jpg',
        colors: ['White', 'Grey', 'Black'],
        sizes: ['One Size (Twin)'],
        quantities: [1, 2, 3, 4, 5] },
    { id: 4,
        name: 'Fire Kit',
        price: 5.00,
        desc:'Like campfires in a tin can, simply light it up.',
        img:'sfys-fire.jpg',
        colors: ['Red'],
        sizes: ['Standard'],
        quantities: [1, 2, 3, 4, 5] },
    { id: 5, name: 'Rations',
        price: 74.00,
        desc:'Tastes slightly better than a boiled potato.',
        img:'sfys-ration.jpg',
        colors: ['One Color'],
        sizes: ['12 Packs', '24 Packs'],
        quantities: [1, 2, 3, 4, 5] },
	{ id: 6,
        name: 'Med Kit',
        price: 45.99,
        desc:'Everything needed to heal injuries big and small.',
        img:'sfys-medkit.jpg',
        colors: ['Red', 'Blue'],
        sizes: ['Compact', 'Comprehensive'],
        quantities:[1, 2, 3, 4, 5] },
	{ id: 7,
        name: 'Journal',
        price: 14.99,
        desc:'A blank book for writing purposes.',
        img:'sfys-journal.jpg',
        colors: ['Red', 'Blue', 'Yellow', 'Purple', 'Orange', 'Green', 'White', 'Black'],
        sizes: ['100 Pages', '200 pages', '300 Pages'],
        quantities:[1, 2, 3, 4, 5] },
	{ id: 8, name: 'Shotgun (FOR BEARS)',
        price: 599.99,
        desc:'In between a rock and hard place? Get out of there in a jiffy.',
        img:'sfys-gun.jpg',
        colors: ['Black'],
        sizes: ['Birdshot', 'Buckshot', 'Slugs', 'Kitchen Sink'],
        quantities:[1, 2, 3, 4, 5] }
];

function getCart() {
    const cartText = localStorage.getItem('cart');
    return cartText ? JSON.parse(cartText) : [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function findProduct(productId) {
    return products.find(p => p.id === productId);
}

function getCartTotal(cart) {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function buildSelect(options, id, selectedValue) {
    let html = `<select id="${id}">`;
    options.forEach(opt => {
        const selected = String(opt) === String(selectedValue) ? 'selected' : '';
        html += `<option value="${opt}" ${selected}>${opt}</option>`;
    });
    return html + '</select>';
}

function buildCartSelect(options, selectedValue, index, fieldName) {
    let html = `<select onchange="changeOption(${index}, '${fieldName}', this.value)">`;
    options.forEach(opt => {
        const selected = String(opt) === String(selectedValue) ? 'selected' : '';
        html += `<option value="${opt}" ${selected}>${opt}</option>`;
    });
    return html + '</select>';
}