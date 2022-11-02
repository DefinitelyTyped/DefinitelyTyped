import VirtualScroll = require('virtual-scroll');

const scroll = new VirtualScroll({
    el: document.body,
    firefoxMultiplier: 16,
    keyStep: 130,
    mouseMultiplier: 1,
    passive: true,
    preventTouch: true,
    unpreventTouchClass: 'touchmove-allowed',
    touchMultiplier: 1.8,
    useKeyboard: false,
    useTouch: false,
});

const callback: Parameters<VirtualScroll['on']>[0] = event => {
    const { deltaX, deltaY, originalEvent, x, y } = event;
    scroll.off(callback);
    scroll.destroy();
};

scroll.on(callback);

scroll.off(callback);

scroll.destroy();
