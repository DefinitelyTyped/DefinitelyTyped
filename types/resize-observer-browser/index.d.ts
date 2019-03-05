// Type definitions for non-npm package resize-observer-browser 0.1
// Project: https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver, https://developers.google.com/web/updates/2016/10/resizeobserver, https://wicg.github.io/ResizeObserver/
// Definitions by: Chives <https://github.com/chivesrs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

export class ResizeObserver {
    constructor(callback: ResizeObserverCallback);
    disconnect(): void;
    observe(target: Element): void;
    unobserve(target: Element): void;
}

export type ResizeObserverCallback = (entries: ResizeObserverEntry[]) => void;

export interface ResizeObserverEntry {
    readonly target: Element;
    readonly contentRect: DOMRectReadOnly;
}
