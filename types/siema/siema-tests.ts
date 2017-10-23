import Siema = require('siema');

const siema = new Siema({
    selector: '.siema',
    duration: 200,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: false,
    onInit: () => {},
    onChange: () => {},
});

siema.next();
siema.prev();
siema.goTo(siema.currentSlide);
siema.remove(0, () => {});
siema.insert('item', 0, () => {});
siema.prepend('item', () => {});
siema.append('item', () => {});
siema.destroy(true, () => {});
