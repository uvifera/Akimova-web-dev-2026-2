const dishes = [
    {
        keyword: "cesar",
        name: "Салат Цезарь",
        price: 350,
        category: 'salad',
        value: "300 гр",
        image: "png/cesar.jpg",
        kind: "meat"
    },

    {
        keyword: "greek",
        name: "Греческий салат",
        price: 300,
        category: 'salad',
        value: "300 гр",
        image: "png/greek.jpg",
        kind: "vegetarian"

    },

    {
        keyword: "nisuaz",
        name: "Салат Нисуаз",
        price: 550,
        category: 'salad',
        value: "300 гр",
        image: "png/nisuaz.jpg",
        kind: "vegan"
    },

    {
        keyword: "diet",
        name: "Диетический",
        price: 400,
        category: 'salad',
        value: "250 гр",
        image: "png/diet.jpg",
        kind: "meat"
    },

    {
        keyword: "oliv",
        name: "Оливье",
        price: 200,
        category: 'salad',
        value: "250 гр",
        image: "png/oliv.jpg",
        kind: "meat"
    },

    {
        keyword: "veg",
        name: "Овощной салат",
        price: 150,
        category: 'salad',
        value: "250 гр",
        image: "png/veg.jpg",
        kind: "vegan"
    },

    {
        keyword: "avocadosnd",
        name: "Авокадо-тост",
        price: 300,
        category: 'sand',
        value: "200 гр",
        image: "png/avocadosnd.jpg",
        kind: "vegetarian"
    },

    {
        keyword: "beigl",
        name: "Бейгл",
        price: 250,
        category: 'sand',
        value: "200 гр",
        image: "png/beigl.jpg",
        kind: "meat"
    },

    {
        keyword: "turkeysnd",
        name: "Сэндвич с индейкой",
        price: 350,
        category: 'sand',
        value: "200 гр",
        image: "png/turkeysnd.jpg",
        kind: "meat"
    },

    {
        keyword: "doner1",
        name: "Донер",
        price: 330,
        category: 'sand',
        value: "400 гр",
        image: "png/doner1.jpg",
        kind: "meat"
    },

    {
        keyword: "nashos",
        name: "Начос",
        price: 400,
        category: 'sand',
        value: "300 гр",
        image: "png/nashos.jpg",
        kind: "vegan"
    },

    {
        keyword: "sosege",
        name: "Сосиска в тесте",
        price: 90,
        category: 'sand',
        value: "150 гр",
        image: "png/sosege.jpg",
        kind: "meat"
    },

    {
        keyword: "chisecake",
        name: "Чизкейк",
        price: 320,
        category: 'dessert',
        value: "150 гр",
        image: "png/chisecake.jpg",
        kind: "meat"
    },

    {
        keyword: "cinomonroll",
        name: "Булочка с корицей",
        price: 250,
        category: 'dessert',
        value: "150 гр",
        image: "png/cinomonroll.jpg",
        kind: "vegetarian"
    },

    {
        keyword: "vafel",
        name: "Вафля",
        price: 120,
        category: 'dessert',
        value: "150 гр",
        image: "png/vafel.jpg",
        kind: "vegetarian"
    },

    {
        keyword: "pavlova",
        name: "Павлова",
        price: 250,
        category: 'dessert',
        value: "200 гр",
        image: "png/pavlova.jpg",
        kind: "meat"
    },

    {
        keyword: "trifle",
        name: "Трайфл",
        price: 350,
        category: 'dessert',
        value: "250 гр",
        image: "png/trifle.jpg",
        kind: "vegetarian"
    },

    {
        keyword: "macarun",
        name: "Макарунс",
        price: 120,
        category: 'dessert',
        value: "70 гр",
        image: "png/macarun.jpg",
        kind: "vegan"
    },

    {
        keyword: "bubbletea",
        name: "Бабл-ти",
        price: 450,
        category: 'drink',
        value: "350 мл",
        image: "png/bubbletea.jpg",
        kind: "lactose"
    },

    {
        keyword: "cherrycoke",
        name: "Вишнёвая кола",
        price: 200,
        category: 'drink',
        value: "300 мл",
        image: "png/cherrycoke.jpg",
        kind: "nolac"
    },

    {
        keyword: "fanta",
        name: "Фанта",
        price: 450,
        category: 'drink',
        value: "350 мл",
        image: "png/fanta.jpg",
        kind: "nolac"
    },

    {
        keyword: "glintv",
        name: "Глинтвейн",
        price: 200,
        category: 'drink',
        value: "350 мл",
        image: "png/glintv.jpg",
        kind: "nolac"
    },

    {
        keyword: "milksh",
        name: "Клубничный милкшейк",
        price: 300,
        category: 'drink',
        value: "400 мл",
        image: "png/milksh.jpg",
        kind: "lactose"
    },

    {
        keyword: "mochito",
        name: "Мохито",
        price: 200,
        category: 'drink',
        value: "250 мл",
        image: "png/mochito.jpg",
        kind: "nolac"
    },

    {
    keyword: "maccheese",
    name: "Макароны с сыром",
    price: 320,
    category: 'hotmeal',
    value: "300 гр",
    image: "png/maccheese.jpg",
    kind: "vegetarian"
},

{
    keyword: "borsh",
    name: "Борщ",
    price: 280,
    category: 'hotmeal',
    value: "400 мл",
    image: "png/borsh.jpg",
    kind: "meat"
},

{
    keyword: "cremsup",
    name: "Крем-суп",
    price: 300,
    category: 'hotmeal',
    value: "350 мл",
    image: "png/cremsup.jpg",
    kind: "vegan"
},

{
    keyword: "gulash",
    name: "Гуляш",
    price: 420,
    category: 'hotmeal',
    value: "350 гр",
    image: "png/gulash.jpg",
    kind: "meat"
},

{
    keyword: "lapsha",
    name: "Куриная лапша",
    price: 250,
    category: 'hotmeal',
    value: "400 мл",
    image: "png/lapsha.jpg",
    kind: "meat"
},

{
    keyword: "lasania",
    name: "Лазанья",
    price: 350,
    category: 'hotmeal',
    value: "300 гр",
    image: "png/lasania.jpg",
    kind: "meat"
}

]