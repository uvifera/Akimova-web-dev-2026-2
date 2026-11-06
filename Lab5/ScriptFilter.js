const filterButtons = document.querySelectorAll('.filter');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        const kind = button.dataset.kind;
        const isAlreadyActive = button.classList.contains('active');

        document.querySelectorAll(`.filter[data-category="${category}"]`)
            .forEach(btn => btn.classList.remove('active'));

        if (!isAlreadyActive) button.classList.add('active');

        const container = document.querySelector(
            `.food_container[data-category="${category}"]`
        );

        container.querySelectorAll('.foodbl').forEach(card => {
            const dish = dishes.find(d => d.keyword === card.dataset.dish);
            const show = isAlreadyActive || dish.kind === kind;
            card.style.display = show ? '' : 'none';
        });
    });
});