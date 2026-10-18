function createCard(dish) {
    const card = document.createElement('div');
    card.className = 'foodbl';
    card.dataset.dish = dish.keyword;

    const imageDish = document.createElement('img');
    imageDish.src = dish.image;
    imageDish.alt = dish.name;

    const priceDish = document.createElement('p');
    priceDish.className = 'price';
    priceDish.textContent = dish.price + 'руб.';

    const valueDish = document.createElement('p');
    valueDish.className = 'value';
    valueDish.textContent = dish.value;

    const nameDish = document.createElement('p');
    nameDish.className = 'name';
    nameDish.textContent = dish.name;

    const buttonDish = document.createElement('button');
    buttonDish.className = 'button';
    buttonDish.type = 'button';
    buttonDish.textContent = 'Добавить';

    card.append(imageDish, nameDish, valueDish, priceDish, buttonDish);
    return card;
}

function putDishes(){
    const containers= document.querySelectorAll('.food_container');

    for (const container of containers) {
        const category = container.dataset.category;

        const filteredDishes = dishes.filter(dish => dish.category === category);
        filteredDishes.sort((a, b) => a.name.localeCompare(b.name, 'ru'));

        for (const dish of filteredDishes){
            const card = createCard(dish);
            container.append(card);
        }       
    }
}

putDishes();