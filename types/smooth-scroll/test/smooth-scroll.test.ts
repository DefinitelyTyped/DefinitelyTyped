import SmoothScroll = require("smooth-scroll");

// Initialize and destroy SmoothScroll
const example1 = new SmoothScroll('a[href*="#"]', {
    ignore: ".ignore",
    header: '[data-scroll="header"]',
    topOnEmptyHash: false,
    speed: 1000,
    speedAsDuration: true,
    durationMax: 100,
    durationMin: 0,
    clip: true,
    offset: () => 10,
    easing: "easeInCubic",
    customEasing: () => 50,
    updateURL: false,
    popstate: false,
    emitEvents: false
});
example1.destroy();

// Scrolling to an anchor
const example2 = () => {
    const scroll = new SmoothScroll();
    const anchor = document.querySelector("#bazinga");
    scroll.animateScroll(anchor, null, { speed: 1000, speedAsDuration: true });
};

// Scrolling to a specific Y-position
const example3 = () => {
    const scroll = new SmoothScroll('a[href*="#"]');
    scroll.animateScroll(750);
};

// Cancel scroll
const example4 = () => {
    const scroll = new SmoothScroll();
    scroll.cancelScroll();
};
