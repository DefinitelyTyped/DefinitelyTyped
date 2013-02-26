// Type definitions for iScroll 4.2
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
    topOffset?: number;
    checkDOMChanges?: bool;
    handleClick?: bool;

    // Scrollbar
    hScrollbar?: bool;
    vScrollbar?: bool;
    fixedScrollbar?: bool;
    hideScrollbar?: bool;
    fadeScrollbar?: bool;
    scrollbarClass?: string;

    // Zoom
    zoom?: bool;
    zoomMin?: number;
    zoomMax?: number;
    doubleTapZoom?: number;
    wheelAction?: string;

    // Snap
    snap?: any;
    snapThreshold?: number;

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
    onZoomStart?: iScrollEvent;
    onZoom?: iScrollEvent;
    onZoomEnd?: iScrollEvent;
}

class iScroll {

    constructor (element: string);
    constructor (element: string, options: iScrollOptions);

    destroy(): void;
    refresh(): void;
    scrollTo(x: number, y: number, time: number, relative: bool): void;
    scrollToElement(element: string, time: number): void;
    scrollToPage(pageX: number, pageY: number, time: number): void;
    disable(): void;
    enalbe(): void;
    stop(): void;
    zoom(x: number, y: number, scale: number, time: number): void;
    isReady(): bool;
}