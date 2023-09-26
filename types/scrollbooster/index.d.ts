export interface Position {
    x?: number | undefined;
    y?: number | undefined;
}

export interface ScrollingState {
    isMoving: boolean;
    isDragging: boolean;
    isScrolling: boolean;
    position: Required<Position>;
    dragOffset: Required<Position>;
    dragAngle: number;
    borderCollision: {
        left: boolean;
        right: boolean;
        top: boolean;
        bottom: boolean;
    };
}

export interface ScrollBoosterOptions {
    viewport: Element;
    content: Element;
    direction?: "all" | "vertical" | "horizontal";
    pointerMode?: "all" | "touch" | "mouse";
    scrollMode?: "transform" | "native" | undefined;
    bounce?: boolean;
    bounceForce?: number;
    friction?: number;
    textSelection?: boolean;
    inputsFocus?: boolean;
    emulateScroll?: boolean;
    preventDefaultOnEmulateScroll?: "vertical" | "horizontal";
    lockScrollOnDragDirection?: "all" | "vertical" | "horizontal";
    dragDirectionTolerance?: number;
    onClick?: (state: ScrollingState, event: MouseEvent, isTouch: boolean) => void;
    onUpdate?: (state: ScrollingState) => void;
    onWheel?: (state: ScrollingState, event: Event) => void;
    shouldScroll?: (state: ScrollingState, event: Event) => boolean;
    onPointerDown?: (state: ScrollingState, event: MouseEvent, isTouch: boolean) => void;
    onPointerUp?: (state: ScrollingState, event: MouseEvent, isTouch: boolean) => void;
    onPointerMove?: (state: ScrollingState, event: MouseEvent, isTouch: boolean) => void;
}

export default class ScrollBooster {
    constructor(options: ScrollBoosterOptions);
    destroy(): void;
    setPosition(position: Position): void;
    getState(): ScrollingState;
    scrollTo(position: Position): void;
    updateMetrics(): void;
    updateOptions(options: Partial<ScrollBoosterOptions>): void;
}
