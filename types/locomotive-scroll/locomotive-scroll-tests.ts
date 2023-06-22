import LocomotiveScroll = require('locomotive-scroll');

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]') as HTMLElement,
    smooth: true,
});

scroll.on('scroll', event => {
    event; // $ExpectType OnScrollEvent
});

scroll.on('call', event => {
    event; // $ExpectType string | string[]
});

scroll.scrollTo(1000, { offset: 100 });
