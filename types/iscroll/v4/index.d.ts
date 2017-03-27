// Type definitions for iScroll 4.2
// Project: http://cubiq.org/iscroll-4
// Definitions by: Boris Yankov <https://github.com/borisyankov/>, Christiaan Rakowski <https://github.com/csrakowski/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


interface iScrollEvent {
    (e: Event): void;
}

interface iScrollOptions {
    hScroll?: boolean;
    vScroll?: boolean;
    x?: number;
    y?: number;
    bounce?: boolean;
    bounceLock?: boolean;
    momentum?: boolean;
    lockDirection?: boolean;
    useTransform?: boolean;
    useTransition?: boolean;
    topOffset?: number;
    checkDOMChanges?: boolean;
    handleClick?: boolean;

    // Scrollbar
    hScrollbar?: boolean;
    vScrollbar?: boolean;
    fixedScrollbar?: boolean;
    hideScrollbar?: boolean;
    fadeScrollbar?: boolean;
    scrollbarClass?: string;

    // Zoom
    zoom?: boolean;
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

declare class iScroll {

    constructor (element: string, options?: iScrollOptions);
	constructor (element: HTMLElement, options?: iScrollOptions);

    destroy(): void;
    refresh(): void;
    scrollTo(x: number, y: number, time?: number, relative?: boolean): void;
    scrollToElement(element: string, time?: number): void;
    scrollToElement(element: HTMLElement, time?: number): void;
    scrollToPage(pageX: number, pageY: number, time?: number): void;
    disable(): void;
    enable(): void;
    stop(): void;
    zoom(x: number, y: number, scale: number, time?: number): void;
    isReady(): boolean;
}
