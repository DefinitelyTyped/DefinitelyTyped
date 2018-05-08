// Type definitions for viewability-helper 1.0
// Project: https://github.com/outbrain/ViewabilityHelper (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Liron Zluf <https://github.com/lironzluf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export interface Options {
    callbackParams?: any[];
    rootMargin?: string;
    intersectionPercentage?: number;
    scrollDimmer?: number;
    unobserve?: boolean;
    threshold?: number[];
}

export class ViewabilityHelper {
    constructor(element: Element | HTMLElement, callback: () => void, options?: Options);

    observe(): void;
}
