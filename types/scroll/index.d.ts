// Type definitions for scroll 3.0
// Project: https://github.com/michaelrhodes/scroll
// Definitions by: Roman Charugin <https://github.com/romic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type ScrollError = Error | null;

interface ScrollOptions {
    /**
     * Ease function
     * @default easeInOut
     */
    ease?: (time: number) => number;
    /**
     * Animation duration
     * @default 350
     */
    duration?: number;
}

interface ScrollCallback {
    (error: ScrollError, value: number): void;
}

interface Cancel {
    (): void;
}

interface Scroll {
    /**
     * @param el Element to scroll
     * @param to Scroll to value
     * @param opts Additional options
     * @param cb Callback function to call after
     * @return Function to stop scrolling
     */
    (el: HTMLElement, to: number, opts?: ScrollOptions | ScrollCallback, cb?: ScrollCallback): Cancel;
}

declare const scroll: {
    left: Scroll;
    top: Scroll;
};

export = scroll;
