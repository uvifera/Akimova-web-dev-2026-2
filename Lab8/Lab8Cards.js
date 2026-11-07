document.addEventListener('DOMContentLoaded', () => {
    const wait = setInterval(() => {
        if (typeof dishes !== 'undefined' && dishes.length) {
            clearInterval(wait);
            renderOrderCards();
            renderBasket();
        }
    }, 100);
});

function renderOrderCards() {
    const container = document.getElementById('cart-container');
    if (!container) return;
    container.innerHTML = '';

    const order = getOrder();
    const emptyMsg = document.getElementById('empty-message');
    const found = [];

    for (const cat of ['salad', 'hotmeal', 'sand', 'dessert', 'drink']) {
        if (!order[cat]) continue;
        const dish = dishes.find(d => d.keyword === order[cat]);
        if (dish) found.push(dish);
    }

    if (found.length === 0) {
        if (emptyMsg) {
            emptyMsg.style.display = '';
            emptyMsg.innerHTML = "Ничего не выбрано";}
        return;
    }
    if (emptyMsg) emptyMsg.style.display = 'none';

    for (const dish of found) {
        const card = createCard(dish);       
        const btn = card.querySelector('.button');
        btn.textContent = 'Удалить';
        btn.addEventListener('click', () => {
            removeFromOrder(dish.category);  
            renderOrderCards();
            renderBasket();                  
        });
        container.append(card);
    }
}

function renderBasket() {
    if (typeof order !== 'undefined' && typeof getOrder === 'function') {
        const saved = getOrder();
        for (const cat in order) order[cat] = saved[cat] || null;
        if (typeof Basket === 'function') Basket();
    }
}