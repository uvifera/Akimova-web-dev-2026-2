const order = { salad: null, sand: null, dessert: null, hotmeal: null, drink: null };

function Basket(){
    let total = 0;
    const containers = {
        salad: document.querySelector('#saladOrd'),
        sand: document.querySelector('#sandOrd'),
        dessert: document.querySelector('#dessertOrd'),
        hotmeal: document.querySelector('#hotmealOrd'),
        drink: document.querySelector('#drinkOrd')
    };
    
    const hiddenInputs = {
        salad: document.querySelector('#saladInput'),
        sand: document.querySelector('#sandInput'),
        dessert: document.querySelector('#dessertInput'),
        hotmeal: document.querySelector('#hotmealInput'),
        drink: document.querySelector('#drinkInput')
    };

    for (const Ord in order){
        const box = containers[Ord];
        if (!box) continue;
        box.innerHTML = '';
        const keyword = order[Ord];
        const dish = keyword && typeof dishes !== 'undefined'
            ? dishes.find(d => d.keyword === keyword)
            : null;
        if (dish) {
            box.textContent = dish.name + ' - ' + dish.price + " руб.";
            total += dish.price;
            if (hiddenInputs[Ord]) hiddenInputs[Ord].value = keyword;
        } else {
            box.textContent = "Блюдо не выбрано";
            if (hiddenInputs[Ord]) hiddenInputs[Ord].value = '';
        }
    }
    const sumEl = document.querySelector('#sumOrd');
    if (sumEl) sumEl.textContent = "Стоимость: " + total + 'р.';
}

document.addEventListener('click', (event) => {
    const button = event.target.closest('.button');
    if (!button || button.textContent.trim() !== 'Добавить') return;   
    const card = button.closest('.foodbl');
    if (!card) return;
    const keyword = card.dataset.dish;
    const dish = dishes.find(d => d.keyword === keyword);
    if (!dish) return;

    order[dish.category] = keyword;
    if (typeof saveOrder === 'function') saveOrder(order);   
    Basket();
    if (typeof updateCheckoutPanel === 'function') updateCheckoutPanel();
});

(function initOrder(){
    if (typeof getOrder === 'function') {
        const saved = getOrder();
        for (const cat in order) order[cat] = saved[cat] || null;
    }
})();