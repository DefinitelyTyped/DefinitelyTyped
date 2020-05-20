import scroll = require('scroll');

const el: HTMLElement = document.createElement('div');
const opts = {
    duration: 1000,
    ease: (time: number) => 0.5 * time,
};
const cb: (error: Error | null, scrollValue: number) => void = (error, scrollValue) => {
    if (error != null) {
        console.error(error);
    } else {
        console.log('scrolling completed! current scroll position is ', scrollValue);
    }
};

scroll.left(el, 500, opts, cb);
scroll.top(el, 500, opts, cb);

scroll.left(el, 500, opts);
scroll.top(el, 500, opts);

scroll.left(el, 500, cb);
scroll.top(el, 500, cb);
