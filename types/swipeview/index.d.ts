// Type definitions for SwipeView 1.0
// Project: http://cubiq.org/swipeview
// Definitions by: Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


interface SwipeViewEvent {
    (fn: Function): void;
}

interface SwipeViewOptions {
    text?: string;
    numberOfPages?: number;
    snapThreshold?: number;
    hastyPageFlip?: boolean;
    loop?: boolean;
}

declare class SwipeView {

    masterPages: HTMLElement[];
    currentMasterPage: number;
    wrapper: HTMLElement;
    slider: HTMLElement;

    constructor (element: string);
    constructor (element: string, options: SwipeViewOptions);

    destroy(): void;
    refreshSize(): void;
    updatePageCount(n: number): void;
    goToPage(p: number): void;
    next(): void;
    prev(): void;
    handleEvent(e: Event): void;
    
    onFlip: SwipeViewEvent;
    onMoveOut: SwipeViewEvent;
    onMoveIn: SwipeViewEvent;
    onTouchStart: SwipeViewEvent;

    wrapperHeight: number;
}