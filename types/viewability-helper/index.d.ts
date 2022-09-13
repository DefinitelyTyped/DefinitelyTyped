// Type definitions for viewability-helper 1.0
// Project: https://github.com/outbrain/viewabilityhelper
// Definitions by: Liron Zluf <https://github.com/lironzluf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export interface Options {
    callbackParams?: any[] | undefined;
    rootMargin?: string | undefined;
    intersectionPercentage?: number | undefined;
    scrollDimmer?: number | undefined;
    unobserve?: boolean | undefined;
    threshold?: number[] | undefined;
}

export class ViewabilityHelper {
    constructor(element: Element | HTMLElement, callback: () => void, options?: Options);

    observe(): void;
}
