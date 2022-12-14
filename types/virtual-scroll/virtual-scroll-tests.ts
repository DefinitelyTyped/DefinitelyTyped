import VirtualScroll, { VirtualScrollCallback, VirtualScrollEvent, VirtualScrollOptions } from 'virtual-scroll';

const scrollOptions: VirtualScrollOptions = {
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
}

const scroll = new VirtualScroll(scrollOptions);

const callback: VirtualScrollCallback = ({ deltaX, deltaY, originalEvent, x, y }: VirtualScrollEvent) => {
    scroll.off(callback);
    scroll.destroy();
};

scroll.on(callback);

scroll.off(callback);

scroll.destroy();
