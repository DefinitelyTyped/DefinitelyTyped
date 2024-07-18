interface SwipeViewEvent {
    (fn: Function): void;
}

interface SwipeViewOptions {
    text?: string | undefined;
    numberOfPages?: number | undefined;
    snapThreshold?: number | undefined;
    hastyPageFlip?: boolean | undefined;
    loop?: boolean | undefined;
}

declare class SwipeView {
    masterPages: HTMLElement[];
    currentMasterPage: number;
    wrapper: HTMLElement;
    slider: HTMLElement;

    constructor(element: string);
    constructor(element: string, options: SwipeViewOptions);

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
