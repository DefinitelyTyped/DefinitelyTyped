import Wallop = require('wallop');

const $element = document.createElement('div');
$element.classList.add('.Wallop');

const slider = new Wallop($element);

slider.goTo(0); // $ExpectType Wallop
slider.next(); // $ExpectType Wallop
slider.previous(); // $ExpectType Wallop
slider.reset(); // $ExpectType Wallop

slider.on('change', () => { }); // $ExpectType Wallop
slider.off('change', () => { }); // $ExpectType Wallop
