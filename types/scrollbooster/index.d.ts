// Type definitions for scrollbooster 2.2
// Project: https://github.com/ilyashubin/scrollbooster
// Definitions by: Chris <https://github.com/chrisneven>
//                 Chris Frewin <https://github.com/princefishthrower>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Position {
    x?: number | undefined;
    y?: number | undefined;
}

export interface ScrollingState {
    isMoving: boolean;
    isDragging: boolean;
    position: Required<Position>;
    dragOffset: {
        x: number;
        y: number;
    };
    borderCollision: {
        left: boolean;
        right: boolean;
        top: boolean;
        bottom: boolean;
    };
}

export interface ScrollBoosterOptions {
    content?: HTMLElement | null | undefined;
    viewport: HTMLElement | null;
    scrollMode?: 'transform' | 'native' | undefined;
    direction?: 'horizontal' | 'vertical' | 'all' | undefined;
    bounce?: boolean | undefined;
    textSelection?: boolean | undefined;
    inputsFocus?: boolean | undefined;
    pointerMode?: 'touch' | 'mouse' | 'all' | undefined;
    friction?: number | undefined;
    bounceForce?: number | undefined;
    emulateScroll?: boolean | undefined;
    onUpdate?: ((state: ScrollingState) => void) | undefined;
    onClick?: ((state: ScrollingState, event: Event) => void) | undefined;
    shouldScroll?: ((state: ScrollingState, event: Event) => boolean) | undefined;
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
