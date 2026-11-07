function updateCheckoutPanel() {
    const panel = document.getElementById('checkout-panel');
    if (!panel) return;

    const order = getOrder();
    const sumEl = document.getElementById('checkout-sum');
    const link = document.getElementById('checkout-link');

    if (isOrderEmpty(order)) {
        panel.hidden = true;
        return;
    }
    panel.hidden = false;

    let total = 0;
    if (typeof dishes !== 'undefined') {
        for (const cat of ORDER_CATEGORIES) {
            if (order[cat]) {
                const dish = dishes.find(d => d.keyword === order[cat]);
                if (dish) total += dish.price;
            }
        }
    }
    if (sumEl) sumEl.textContent = total;

    if (link) {
        link.classList.toggle('disabled', !isValidCombo(order));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const wait = setInterval(() => {
        if (typeof dishes !== 'undefined' && dishes.length) {
            clearInterval(wait);
            updateCheckoutPanel();
        }
    }, 100);
});

const STORAGE_KEY = 'foodConstructOrder';

const ORDER_CATEGORIES = ['salad', 'sand', 'dessert', 'hotmeal', 'drink'];

function getOrder() {
    const empty = { salad: null, sand: null, dessert: null, hotmeal: null, drink: null };
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return empty;
        const parsed = JSON.parse(raw);

        const result = { ...empty };
        for (const cat of ORDER_CATEGORIES) {
            if (parsed && typeof parsed[cat] === 'string') {
                result[cat] = parsed[cat];
            }
        }
        return result;
    } catch (e) {
        console.error('Ошибка чтения заказа из localStorage:', e);
        return empty;
    }
}

function saveOrder(order) {
    try {
        const toStore = {};
        for (const cat of ORDER_CATEGORIES) {
            if (order[cat]) toStore[cat] = order[cat];
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(toStore));
    } catch (e) {
        console.error('Ошибка сохранения заказа в localStorage:', e);
    }
}

function removeFromOrder(category) {
    const order = getOrder();
    order[category] = null;
    saveOrder(order);
    return order;
}


function clearOrder() {
    localStorage.removeItem(STORAGE_KEY);
}


function isOrderEmpty(order) {
    return ORDER_CATEGORIES.every(cat => !order[cat]);
}


function isValidCombo(order) {
    const has = cat => Boolean(order[cat]);
    const combos = [
        () => has('salad') && has('hotmeal') && has('sand') && has('drink'),
        () => has('hotmeal') && has('sand') && has('drink'),
        () => has('salad') && has('hotmeal') && has('drink'),
        () => has('salad') && has('sand') && has('drink'),
        () => has('sand') && has('drink'),
        () => has('dessert') && !has('salad') && !has('hotmeal') && !has('sand') && !has('drink'),
    ];
    return combos.some(check => check());
}