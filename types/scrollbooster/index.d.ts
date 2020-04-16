// Type definitions for scrollbooster 2.2
// Project: https://github.com/ilyashubin/scrollbooster
// Definitions by: Chris <https://github.com/chrisneven>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Position {
    x?: number;
    y?: number;
}

export interface ScrollingState {
    isMoving: boolean;
    isDragging: boolean;
    position: Required<Position>;
    dragOffset: number;
    borderCollision: {
        left: boolean;
        right: boolean;
        top: boolean;
        bottom: boolean;
    };
}

export interface ScrollBoosterOptions {
    content?: HTMLElement | null;
    viewport: HTMLElement | null;
    scrollMode?: 'transform' | 'native';
    direction?: 'horizontal' | 'vertical' | 'all';
    bounce?: boolean;
    textSelection?: boolean;
    inputsFocus?: boolean;
    pointerMode?: 'touch' | 'mouse' | 'all';
    friction?: number;
    bounceForce?: number;
    emulateScroll?: boolean;
    onUpdate?: (state: ScrollingState) => void;
    onClick?: (state: ScrollingState, event: Event) => void;
    shouldScroll?: (state: ScrollingState, event: Event) => boolean;
}

export default class ScrollBooster {
    constructor(options: ScrollBoosterOptions);

    setPosition(position: Position): void;

    scrollTo(position: Position): void;

    updateMetrics(): void;

    updateOptions(options: Partial<ScrollBoosterOptions>): void;

    getState(): ScrollingState;

    destroy(): void;
}
