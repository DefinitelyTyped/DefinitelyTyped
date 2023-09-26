import VirtualScroll = require("virtual-scroll");

const scrollOptions: VirtualScroll.VirtualScrollOptions = {
    el: document.body,
    firefoxMultiplier: 16,
    keyStep: 130,
    mouseMultiplier: 1,
    passive: true,
    preventTouch: true,
    unpreventTouchClass: "touchmove-allowed",
    touchMultiplier: 1.8,
    useKeyboard: false,
    useTouch: false,
};

const scroll = new VirtualScroll(scrollOptions);

const callback: VirtualScroll.VirtualScrollCallback = (
    { deltaX, deltaY, originalEvent, x, y }: VirtualScroll.VirtualScrollEvent,
) => {
    scroll.off(callback);
    scroll.destroy();
};

scroll.on(callback);

scroll.off(callback);

scroll.destroy();
