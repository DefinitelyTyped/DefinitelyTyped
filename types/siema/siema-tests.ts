import Siema = require('siema');

const siema = new Siema({
    selector: '.siema',
    duration: 200,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    threshold: 20,
    loop: false,
});

siema.next();
siema.prev();
siema.goTo(siema.currentSlide);
