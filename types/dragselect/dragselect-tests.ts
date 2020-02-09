import DragSelect = require('dragselect');

const container = document.getElementById('container')!;

const ds = new DragSelect({
    area: container,
    callback: () => {
        container.classList.remove('mass-selection');
    },
    onDragStartBegin: (event) => {
        const element = event.target as HTMLElement;

        // If clicked element matches a card's checkbox
        if (element.matches('input[type="checkbox"]')) {
            ds.multiSelectMode = true;
            const card = element.closest('.card-outer') as HTMLElement;
            // If card is checked, uncheck it and break drag execution
            if ((element as HTMLInputElement).checked) {
                ds.unselect(card);
                ds.break();
                return;
            }
            // Otherwise card is unchecked, check it and break drag execution
            ds.select(card);
            ds.break();
            return;
        }

        container.classList.add('mass-selection');

        ds.multiSelectMode = false;
    },
    onElementSelect: (card) => {
        console.log('checked: ' + card.id);
    },
    onElementUnselect: (card) => {
        console.log('unchecked: ' + card.id);
    },
    selectables: container.querySelectorAll('.card-outer'),
    selectorClass: 'selector',
});
