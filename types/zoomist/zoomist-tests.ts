// need to provide tests? 👀

import Zoomist from './ts/zoomist';

function checkCreateZoomist() {
    const container = document.createElement('div');
    container.dataset['zoomist-custom-src'] = 'https://avatars.githubusercontent.com/u/73490413?v=4';
    container.id = 'zoomist-container';

    document.body.appendChild(container);

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
            ready: () => console.log('ready'),
            zoom: value => {
                console.log('zoom val:', value);
            },
            wheel: e => {
                console.log('event type:', e.type);
            },
            dragStart: (t, e) => {
                console.log('transform:', t);
                console.log('event type:', e.type);
            },
            drag: (t, e) => {
                console.log('transform:', t);
                console.log('event type:', e.type);
            },
            dragEnd: (t, e) => {
                console.log('transform:', t);
                console.log('event type:', e.type);
            },
            slideStart: (v, e) => {
                console.log('value:', v);
                console.log('event type:', e.type);
            },
            slide: (v, e) => {
                console.log('value:', v);
                console.log('event type:', e.type);
            },
            slideEnd: (v, e) => {
                console.log('value:', v);
                console.log('event type:', e.type);
            },
            pinchStart: e => {
                console.log('event type:', e.type);
            },
            pinch: e => {
                console.log('event type:', e.type);
            },
            pinchEnd: e => {
                console.log('event type:', e.type);
            },
            resize: () => {
                console.log('resize!');
            },
            destroy: () => {
                console.log('destroy!');
            },
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

    zoomist.on('ready', function () {
        console.log('ready!');
    });
    zoomist.on('zoom', function (ratio: number) {
        console.log('ratio:', ratio);
    });
    zoomist.on('wheel', function (event: Event) {
        console.log('event type:', event.type);
    });

    zoomist.on('dragStart', function (t: { x: number; y: number }, e: Event) {
        console.log('transform:', t);
        console.log('event type:', e.type);
    });
    zoomist.on('drag', function (t: { x: number; y: number }, e: Event) {
        console.log('transform:', t);
        console.log('event type:', e.type);
    });
    zoomist.on('dragEnd', function (t: { x: number; y: number }, e: Event) {
        console.log('transform:', t);
        console.log('event type:', e.type);
    });

    zoomist.on('slideStart', function (v: number, e: Event) {
        console.log('value:', v);
        console.log('event type:', e.type);
    });
    zoomist.on('slide', function (v: number, e: Event) {
        console.log('value:', v);
        console.log('event type:', e.type);
    });
    zoomist.on('slideEnd', function (v: number, e: Event) {
        console.log('value:', v);
        console.log('event type:', e.type);
    });

    zoomist.on('pinchStart', function (e: Event) {
        console.log('event type:', e.type);
    });
    zoomist.on('pinch', function (e: Event) {
        console.log('event type:', e.type);
    });
    zoomist.on('pinchEnd', function (e: Event) {
        console.log('event type:', e.type);
    });

    zoomist.on('resize', function () {
        console.log('resize!');
    });
    zoomist.on('reset', function () {
        console.log('reset!');
    });
    zoomist.on('destroy', function () {
        console.log('destroy!');
    });
    zoomist.on('update', function () {
        console.log('update!');
    });
}
