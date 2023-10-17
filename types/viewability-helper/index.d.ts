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
