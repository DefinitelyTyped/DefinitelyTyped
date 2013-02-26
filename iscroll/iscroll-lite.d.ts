// Type definitions for iScroll Lite 4.1
// Project: http://cubiq.org/iscroll-4
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


interface iScrollEvent {
    (e: Event): void;
}

interface iScrollOptions {
    hScroll?: bool;
    vScroll?: bool;
    x?: number;
    y?: number;
    bounce?: bool;
    bounceLock?: bool;
    momentum?: bool;
    lockDirection?: bool;
    useTransform?: bool;
    useTransition?: bool;

    // Events
    onRefresh?: iScrollEvent;
    onBeforeScrollStart?: iScrollEvent;
    onScrollStart?: iScrollEvent;
    onBeforeScrollMove?: iScrollEvent;
    onScrollMove?: iScrollEvent;
    onBeforeScrollEnd?: iScrollEvent;
    onScrollEnd?: iScrollEvent;
    onTouchEnd?: iScrollEvent;
    onDestroy?: iScrollEvent;
}

class iScroll {

    constructor (element: string);
    constructor (element: string, options: iScrollOptions);

    destroy(): void;
    refresh(): void;
    scrollTo(x: number, y: number, time: number, relative: bool): void;
    scrollToElement(element: string, time: number): void;
    disable(): void;
    enalbe(): void;
    stop(): void;
}