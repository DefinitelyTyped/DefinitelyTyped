// Type definitions for Swipe 2.0
// Project: https://github.com/thebird/Swipe
// Definitions by: Andrey Kurdyumov <https://github.com/kant2002>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


interface SwipeOptions {
    startSlide?: number;
    speed?: number;
    auto?: number;
    continuous?: boolean;
    disableScroll?: boolean;
    stopPropagation?: boolean;
    callback?: (index, elem) => void;
    transitionEnd?: (index, elem) => void;
}

declare class Swipe {
    constructor(container: HTMLElement, options: SwipeOptions);
    prev();
    next();
    getPos();
    getNumSlides();
    kill();
    attachEvents();
    setup();
    slide(index: number, duration: number);
}
