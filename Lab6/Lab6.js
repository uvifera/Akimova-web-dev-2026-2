(function () {
    function showNotification(text) {
        const old = document.querySelector('.lab6-overlay');
        if (old) old.remove();

        const overlay = document.createElement('div');
        overlay.className = 'lab6-overlay';

        const box = document.createElement('div');
        box.className = 'lab6-notification';

        const msg = document.createElement('p');
        msg.textContent = text;

        const okBtn = document.createElement('button');
        okBtn.type = 'button';           
        okBtn.className = 'lab6-notification-btn';
        okBtn.textContent = 'Окей';
        okBtn.addEventListener('click', function () {
            overlay.remove();
        });

        box.appendChild(msg);
        box.appendChild(okBtn);
        overlay.appendChild(box);
        document.body.appendChild(overlay);
    }

    function isSelected(category) {
        const input = document.getElementById(category + 'Input');
        if (input && typeof input.value === 'string' && input.value.trim() !== '') {
            return true;
        }
        const container = document.getElementById(category + 'Ord');
        return !!(container && container.childElementCount > 0);
    }

    function getValidationMessage() {
        const salad   = isSelected('salad');    
        const hotmeal = isSelected('hotmeal');  
        const sand    = isSelected('sand');     
        const dessert = isSelected('dessert');  
        const drink   = isSelected('drink');   

        if (!salad && !hotmeal && !sand && !dessert && !drink) {
            return 'Ничего не выбрано. Выберите блюда для заказа';
        }

        const baseValid = sand || (salad && hotmeal);

        if (baseValid) {
            return drink ? null : 'Выберите напиток';
        }

        if (hotmeal) {
            return 'Выберите главное блюдо/салат/закуску';
        }

        if (salad) {
            return 'Выберите закуску или главное блюдо';
        }

        return 'Выберите главное блюдо или закуску';
    }

    document.addEventListener('DOMContentLoaded', function () {
        const form = document.querySelector('main form');
        if (!form) return;

        form.addEventListener('submit', function (event) {
            const message = getValidationMessage();

            if (message) {
                event.preventDefault();   
                showNotification(message); 
            }
        });
    });
})();