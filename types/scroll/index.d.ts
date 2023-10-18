type ScrollError = Error | null;

interface ScrollOptions {
    /**
     * Ease function
     * @default easeInOut
     */
    ease?: ((time: number) => number) | undefined;
    /**
     * Animation duration
     * @default 350
     */
    duration?: number | undefined;
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
