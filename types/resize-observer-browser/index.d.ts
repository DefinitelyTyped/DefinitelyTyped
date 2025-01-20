interface Window {
    ResizeObserver: typeof ResizeObserver;
}

interface ResizeObserverOptions {
    /**
     * Sets which box model the observer will observe changes to. Possible values
     * are `content-box` (the default), and `border-box`.
     *
     * @default 'content-box'
     */
    box?: "content-box" | "border-box" | "device-pixel-content-box" | undefined;
}

interface ResizeObserverSize {
    readonly inlineSize: number;
    readonly blockSize: number;
}

interface ResizeObserver {
    disconnect(): void;
    observe(target: Element, options?: ResizeObserverOptions): void;
    unobserve(target: Element): void;
}

declare var ResizeObserver: {
    new(callback: ResizeObserverCallback): ResizeObserver;
    prototype: ResizeObserver;
};

interface ResizeObserverCallback {
    (entries: ResizeObserverEntry[], observer: ResizeObserver): void;
}

interface ResizeObserverEntry {
    readonly target: Element;
    readonly contentRect: DOMRectReadOnly;
    readonly borderBoxSize: readonly ResizeObserverSize[];
    readonly contentBoxSize: readonly ResizeObserverSize[];
    readonly devicePixelContentBoxSize: readonly ResizeObserverSize[];
}
