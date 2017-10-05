import Popper from 'popper.js';

const reference = document.querySelector('.my-button');
const popper = document.querySelector('.my-popper');
const boundary = document.querySelector('.my-boundary');
const arrow = document.querySelector('.my-arrow');

const thePopper = new Popper(
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

const thePopperWithOptions = new Popper(
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

const anotherPoppanotherPopper = new Popper(reference, popper);

const anotherAnotherPopper = new Popper(reference, popper, {
    modifiers: {
        flip: {
            behavior: 'clockwise'
        }
    },
    onCreate: (data => console.log(data)),
    onUpdate: (data => {
        data.instance.scheduleUpdate();
        const p = data.offsets.popper;
        console.log(`top: ${p.top}, left: ${p.left}, width: ${p.width}, height: ${p.height}`);
    })
});
