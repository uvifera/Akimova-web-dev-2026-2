const order = {
    salad: null,
    sand: null,
    dessert: null
};

function Basket(){

    let total = 0;

    const containers = {
        salad: document.querySelector('#saladOrd'),
        sand: document.querySelector('#sandOrd'),
        dessert: document.querySelector('#dessertOrd')
    };

    const hiddenInputs = {
        salad: document.querySelector('#saladInput'),
        sand: document.querySelector('#sandInput'),
        dessert: document.querySelector('#dessertInput')
    };

    for (const Ord in order){
        const box = containers[Ord];
        box.innerHTML = '';

        const keyword = order[Ord];
        if (keyword) {
            const dish = dishes.find(d => d.keyword === keyword);
            box.textContent = dish.name + ' - ' + dish.price + " руб."; 
            total +=dish.price;

            hiddenInputs[Ord].value = keyword;   
        } else {
            box.textContent = "Блюдо не выбрано";
            hiddenInputs[Ord].value = ''; 
        }
    }

    document.querySelector('#sumOrd').textContent = "Стоимость: " +  total + 'р.';


};

document.addEventListener('click', (event) => {
    const button = event.target.closest('.button');

    const card = button.closest('.foodbl');
    const keyword = card.dataset.dish;
    const dish = dishes.find(d => d.keyword === keyword);

    order[dish.category] = keyword;
    Basket();

}); 

Basket();