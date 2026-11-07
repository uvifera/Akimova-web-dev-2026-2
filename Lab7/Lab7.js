let dishes = [];

const JSONBIN_BIN_ID = '6aedffb8ffd5d16053ac9724';
const JSONBIN_API_KEY = '$2a$10$c8lnMNgbXHVdbTUhUQQg9.qlptMMYV8spXl4MTam3XjdvxMU3xz5C';

const API_URL = `https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}/latest`;

async function loadDishes() {
    try {
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'X-Master-Key': JSONBIN_API_KEY,
                'X-Bin-Meta': 'false' 
            }
        });

        const data = await response.json();

        const rawDishes = Array.isArray(data) ? data : (data.record || []);

        dishes = rawDishes.map(dish => ({
            keyword:  dish.keyword,
            name:     dish.name,
            price:    dish.price,
            category: dish.category,
            value:    dish.value,
            image:    dish.image,
            kind:     dish.kind
        }));

        putDishes();
    } catch (err) {
        console.error('Не удалось загрузить блюда с JSONBin.io:', err);
    }
}

loadDishes();