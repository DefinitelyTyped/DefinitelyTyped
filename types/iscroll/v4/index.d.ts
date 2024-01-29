interface iScrollEvent {
    (e: Event): void;
}

interface iScrollOptions {
    hScroll?: boolean | undefined;
    vScroll?: boolean | undefined;
    x?: number | undefined;
    y?: number | undefined;
    bounce?: boolean | undefined;
    bounceLock?: boolean | undefined;
    momentum?: boolean | undefined;
    lockDirection?: boolean | undefined;
    useTransform?: boolean | undefined;
    useTransition?: boolean | undefined;
    topOffset?: number | undefined;
    checkDOMChanges?: boolean | undefined;
    handleClick?: boolean | undefined;

    // Scrollbar
    hScrollbar?: boolean | undefined;
    vScrollbar?: boolean | undefined;
    fixedScrollbar?: boolean | undefined;
    hideScrollbar?: boolean | undefined;
    fadeScrollbar?: boolean | undefined;
    scrollbarClass?: string | undefined;

    // Zoom
    zoom?: boolean | undefined;
    zoomMin?: number | undefined;
    zoomMax?: number | undefined;
    doubleTapZoom?: number | undefined;
    wheelAction?: string | undefined;

    // Snap
    snap?: any;
    snapThreshold?: number | undefined;

    // Events
    onRefresh?: iScrollEvent | undefined;
    onBeforeScrollStart?: iScrollEvent | undefined;
    onScrollStart?: iScrollEvent | undefined;
    onBeforeScrollMove?: iScrollEvent | undefined;
    onScrollMove?: iScrollEvent | undefined;
    onBeforeScrollEnd?: iScrollEvent | undefined;
    onScrollEnd?: iScrollEvent | undefined;
    onTouchEnd?: iScrollEvent | undefined;
    onDestroy?: iScrollEvent | undefined;
    onZoomStart?: iScrollEvent | undefined;
    onZoom?: iScrollEvent | undefined;
    onZoomEnd?: iScrollEvent | undefined;
}

declare class iScroll {
    constructor(element: string, options?: iScrollOptions);
    constructor(element: HTMLElement, options?: iScrollOptions);

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
