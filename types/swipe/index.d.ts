interface SwipeOptions {
    startSlide?: number | undefined;
    speed?: number | undefined;
    auto?: number | undefined;
    continuous?: boolean | undefined;
    disableScroll?: boolean | undefined;
    stopPropagation?: boolean | undefined;
    callback?: ((index: number, elem: HTMLElement) => void) | undefined;
    transitionEnd?: ((index: number, elem: HTMLElement) => void) | undefined;
}

declare class Swipe {
    constructor(container: HTMLElement, options?: SwipeOptions);
    prev(): void;
    next(): void;
    getPos(): number;
    getNumSlides(): number;
    kill(): void;
    attachEvents(): void;
    setup(): void;
    slide(index: number, duration: number): void;
}
