// Type definitions for Swipe 2.0
// Project: https://github.com/thebird/Swipe
// Definitions by: Andrey Kurdyumov <https://github.com/kant2002>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


interface SwipeOptions {
    startSlide?: number;
    speed?: number;
    auto?: number;
    continuous?: boolean;
    disableScroll?: boolean;
    stopPropagation?: boolean;
    callback?: (index: number, elem: HTMLElement) => void;
    transitionEnd?: (index: number, elem: HTMLElement) => void;
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
