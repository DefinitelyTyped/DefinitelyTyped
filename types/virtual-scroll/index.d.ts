export = VirtualScroll;
export as namespace VirtualScroll;

declare namespace VirtualScroll {
    interface VirtualScrollEvent {
        x: number; // total distance scrolled on the x axis
        y: number; // total distance scrolled on the y axis
        deltaX: number; // distance scrolled since the last event on the x axis
        deltaY: number; // distance scrolled since the last event on the y axis
        originalEvent: Event; // the native event triggered by the pointer device or keyboard
    }

    type VirtualScrollCallback = (e: VirtualScrollEvent) => void;

    interface VirtualScrollOptions {
        el: Window | HTMLElement; // the target element for mobile touch events. Defaults to window.
        mouseMultiplier: number; // General multiplier for all mousewheel (including Firefox). Default to 1.
        touchMultiplier: number; // Mutiply the touch action by this modifier to make scroll faster than finger movement. Defaults to 2.
        firefoxMultiplier: number; // Firefox on Windows needs a boost, since scrolling is very slow. Defaults to 15.
        keyStep: number; // How many pixels to move with each key press. Defaults to 120.
        preventTouch: boolean; // If true, automatically call e.preventDefault on touchMove. Defaults to false.
        unpreventTouchClass: string; // Elements with this class won't preventDefault on touchMove. Defaults to vs-touchmove-allowed.
        passive: boolean | undefined; // if used, will use passive events declaration for the wheel and touch listeners. Can be true or false. Defaults to undefined.
        useKeyboard: boolean; // if true, allows to use arrows to navigate, and space to jump from one screen. Defaults to true
        useTouch: boolean; // if true, uses touch events to simulate scrolling. Defaults to true
    }
}

declare class VirtualScroll {
    constructor(options?: Partial<VirtualScroll.VirtualScrollOptions>);
    destroy(): void;
    on(cb: VirtualScroll.VirtualScrollCallback): void;
    off(cb: VirtualScroll.VirtualScrollCallback): void;
}
