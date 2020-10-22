import Siema from 'siema';

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

const elem = new HTMLDivElement();

siema.next();
siema.prev();
siema.goTo(siema.currentSlide);
siema.remove(0, () => {});
siema.insert(elem, 0, () => {});
siema.prepend(elem, () => {});
siema.append(elem, () => {});
siema.destroy();
siema.destroy(true, () => {});
siema.goTo(siema.perPage);
