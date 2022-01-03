// Type definitions for scroll-to-element 2.0
// Project: https://github.com/willhoag/scroll-to-element
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Options {
    offset: number;
    align?: 'top' | 'middle' | 'bottom' | undefined;
    ease?: string | undefined;
    duration?: number | undefined;
}

declare function scrollToElement(selector: string | HTMLElement | Element, options?: Options): void;

export = scrollToElement;
