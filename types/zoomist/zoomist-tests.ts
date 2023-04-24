// need to provide tests? 👀

import Zoomist = require('zoomist');

function checkCreateZoomist() {
    const container = document.createElement('div');
    container.dataset['zoomist-custom-src'] = 'https://avatars.githubusercontent.com/u/73490413?v=4';
    container.id = 'zoomist-container';

    document.body.appendChild(container);

    // $ExpectType Zoomist
    const zoomist = new Zoomist(container, {
        src: 'zoomist-custom-src',
        fill: 'cover',
        draggable: false,
        wheelable: false,
        pinchable: false,
        bounds: false,
        zoomRatio: 0.25,
        maxRatio: 2.5,
        height: 'auto',
        slider: {
            el: false,
            direction: 'vertical',
            maxRatio: 5,
        },
        zoomer: {
            inEl: false,
            outEl: false,
            disableOnBounds: true,
        },
    });
}

function checkEventsFromZoomistConfig() {
    const container = document.createElement('div');
    container.dataset['zoomist-custom-src'] = 'https://avatars.githubusercontent.com/u/73490413?v=4';
    container.id = 'zoomist-container';

    document.body.appendChild(container);

    const zoomist = new Zoomist(container, {
        on: {
            // $ExpectType () => void
            ready: () => console.log('ready'),
            // $ExpectType (r: number) => void
            zoom: (r: number) => {
                console.log('zoom val:', r);
            },
            // $ExpectType (e: Event) => void
            wheel: (e: Event) => {
                console.log('event type:', e.type);
            },
            // $ExpectType (t: {}, e: Event) => void
            dragStart: (t: {}, e: Event) => {
                console.log('transform:', t);
                console.log('event type:', e.type);
            },
            // $ExpectType (t: {}, e: Event) => void
            drag: (t: {}, e: Event) => {
                console.log('transform:', t);
                console.log('event type:', e.type);
            },
            // $ExpectType (t: {}, e: Event) => void
            dragEnd: (t: {}, e: Event) => {
                console.log('transform:', t);
                console.log('event type:', e.type);
            },
            // $ExpectType (v: number, e: Event) => void
            slideStart: (v: number, e: Event) => {
                console.log('value:', v);
                console.log('event type:', e.type);
            },
            // $ExpectType (v: number, e: Event) => void
            slide: (v: number, e: Event) => {
                console.log('value:', v);
                console.log('event type:', e.type);
            },
            // $ExpectType (v: number, e: Event) => void
            slideEnd: (v: number, e: Event) => {
                console.log('value:', v);
                console.log('event type:', e.type);
            },
            // $ExpectType (e: Event) => void
            pinchStart: (e: Event) => {
                console.log('event type:', e.type);
            },
            // $ExpectType (e: Event) => void
            pinch: (e: Event) => {
                console.log('event type:', e.type);
            },
            // $ExpectType (e: Event) => void
            pinchEnd: (e: Event) => {
                console.log('event type:', e.type);
            },
            // $ExpectType () => void
            resize: () => {
                console.log('resize!');
            },
            // $ExpectType () => void
            destroy: () => {
                console.log('destroy!');
            },
            // $ExpectType () => void
            update: () => {
                console.log('update!');
            },
        },
    });
}

function checkEventsFromZoomistOn() {
    const container = document.createElement('div');
    container.dataset['zoomist-custom-src'] = 'https://avatars.githubusercontent.com/u/73490413?v=4';
    container.id = 'zoomist-container';

    document.body.appendChild(container);

    const zoomist = new Zoomist(container, {});

    // $ExpectType void
    zoomist.on('ready', () => {
        console.log('ready!');
    });

    // $ExpectType void
    zoomist.on('zoom', (ratio: number) => {
        console.log('ratio:', ratio);
    });

    // $ExpectType void
    zoomist.on('wheel', (event: Event) => {
        console.log('event type:', event.type);
    });

    // $ExpectType void
    zoomist.on('dragStart', (t: { x: number; y: number }, e: Event) => {
        console.log('transform:', t);
        console.log('event type:', e.type);
    });

    // $ExpectType void
    zoomist.on('drag', (t: { x: number; y: number }, e: Event) => {
        console.log('transform:', t);
        console.log('event type:', e.type);
    });

    // $ExpectType void
    zoomist.on('dragEnd', (t: { x: number; y: number }, e: Event) => {
        console.log('transform:', t);
        console.log('event type:', e.type);
    });

    // $ExpectType void
    zoomist.on('slideStart', (v: number, e: Event) => {
        console.log('value:', v);
        console.log('event type:', e.type);
    });

    // $ExpectType void
    zoomist.on('slide', (v: number, e: Event) => {
        console.log('value:', v);
        console.log('event type:', e.type);
    });

    // $ExpectType void
    zoomist.on('slideEnd', (v: number, e: Event) => {
        console.log('value:', v);
        console.log('event type:', e.type);
    });

    // $ExpectType void
    zoomist.on('pinchStart', (e: Event) => {
        console.log('event type:', e.type);
    });
    // $ExpectType void
    zoomist.on('pinch', (e: Event) => {
        console.log('event type:', e.type);
    });
    // $ExpectType void
    zoomist.on('pinchEnd', (e: Event) => {
        console.log('event type:', e.type);
    });

    // $ExpectType void
    zoomist.on('resize', () => {
        console.log('resize!');
    });
    // $ExpectType void
    zoomist.on('reset', () => {
        console.log('reset!');
    });
    // $ExpectType void
    zoomist.on('destroy', () => {
        console.log('destroy!');
    });
    // $ExpectType void
    zoomist.on('update', () => {
        console.log('update!');
    });
}
