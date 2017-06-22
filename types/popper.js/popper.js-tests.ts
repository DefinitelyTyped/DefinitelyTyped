import Popper from 'popper.js';

var reference = document.querySelector('.my-button');
var popper = document.querySelector('.my-popper');
var boundary = document.querySelector('.my-boundary');
var arrow = document.querySelector('.my-arrow');

var thePopper = new Popper(
    reference,
    popper,
);
thePopper.update();
thePopper.scheduleUpdate();
thePopper.destroy();
thePopper.enableEventListeners();
thePopper.disableEventListeners();

Popper.modifiers.forEach(console.log.bind(console));
Popper.placements.forEach(console.log.bind(console));

var thePopperWithOptions = new Popper(
    reference,
    popper,
    {
        placement: 'bottom',
        eventsEnabled: true,
        removeOnDestroy: true,
        modifiers: {
            shift: {
                enabled: true,
                fn: (data) => data,
                order: 100,
            },
            offset: {
                enabled: true,
                fn: (data) => data,
                order: 100,
                offset: 0,
            },
            preventOverflow: {
                enabled: true,
                fn: (data) => data,
                order: 100,
                priority: ['top', 'bottom'],
                padding: 1,
                boundariesElement: boundary,
            },
            keepTogether: {
                enabled: false,
                fn: (data) => data,
                order: 200,
            },
            arrow: {
                enabled: true,
                fn: (data) => data,
                order: 400,
                element: arrow,
            },
            flip: {
                enabled: true,
                fn: (data) => data,
                order: 400,
                behavior: ['top', 'right'],
                padding: 5,
                boundariesElement: boundary,
            },
            inner: {
                enabled: true,
                fn: (data) => data,
                order: 400,
            },
            hide: {
                enabled: true,
                fn: (data) => data,
                order: 400,
            },
            applyStyle: {
                enabled: true,
                fn: (data) => data,
                order: 400,
                onLoad: () => 0,
            },
        }
    }
);

var anotherPopper = new Popper(
    reference,
    popper
);

var reference = document.querySelector('.my-button');
var popper = document.querySelector('.my-popper');
var anotherPopper = new Popper(reference, popper, {
    modifiers: {
        flip: {
            behavior: 'clockwise'
        }
    },
    onCreate: (data => console.log(data)),
    onUpdate: (data => {
        data.instance.scheduleUpdate();
        var p = data.offsets.popper;
        console.log(`top: ${p.top}, left: ${p.left}, width: ${p.width}, height: ${p.height}`);
    })
});
