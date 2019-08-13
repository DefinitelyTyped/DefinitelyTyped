import scroll, { ScrollOptions } from 'scroll';

var el: HTMLElement = document.createElement('div');
var opts: ScrollOptions = {
    duration: 1000,
    ease: time => 0.5 * time,
};
var cb: (error: Error | null, scrollValue: number) => void = (error, scrollValue) => {
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
