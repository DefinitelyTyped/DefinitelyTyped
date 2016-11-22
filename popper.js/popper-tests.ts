
import * as Popper from 'popper.js';

var reference = document.querySelector('.my-button');
var thePopper = new Popper(
    reference, {
        content: 'My awesome popper!'
    }
);
thePopper.update();
thePopper.destroy();

var options = {
        placement: 'bottom',
        offset: 0,
        arrowElement: document.querySelector('.arrow'),
        modifiersIgnored: ['applyStyle'],
    } as Popper.PopperOptions;

var thePopperWithOptions = new Popper(
    reference, {
        content: 'My awesome popper!',
    }, options);

var popper = document.querySelector('.my-popper');
var anotherPopper = new Popper(
    reference,
    popper
);

var reference = document.querySelector('.my-button');
var popper = document.querySelector('.my-popper');
var anotherPopper = new Popper(reference, popper).onCreate(function(instance) {
    console.log(instance.offsets);
}).onUpdate(function(data) {
    var p = data.offsets.popper;
    console.log(`top: ${p.top}, left: ${p.left}`);
});
