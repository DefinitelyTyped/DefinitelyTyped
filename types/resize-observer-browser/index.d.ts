// Type definitions for non-npm package resize-observer-browser 0.1
// Project: https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver, https://developers.google.com/web/updates/2016/10/resizeobserver, https://wicg.github.io/ResizeObserver/
// Definitions by: Chives <https://github.com/chivesrs>
//                 William Furr <https://github.com/wffurr>
//                 Alexander Shushunov <https://github.com/AlexanderShushunov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
    box?: 'content-box' | 'border-box' | 'device-pixel-content-box' | undefined;
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
    new (callback: ResizeObserverCallback): ResizeObserver;
    prototype: ResizeObserver;
};

interface ResizeObserverCallback {
    (entries: ResizeObserverEntry[], observer: ResizeObserver): void;
}

interface ResizeObserverEntry {
    readonly target: Element;
    readonly contentRect: DOMRectReadOnly;
    readonly borderBoxSize: ReadonlyArray<ResizeObserverSize>;
    readonly contentBoxSize: ReadonlyArray<ResizeObserverSize>;
    readonly devicePixelContentBoxSize?: ReadonlyArray<ResizeObserverSize> | undefined;
}
