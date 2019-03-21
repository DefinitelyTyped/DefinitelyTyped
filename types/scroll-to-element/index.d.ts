// Type definitions for scroll-to-element 2.0
// Project: https://github.com/willhoag/scroll-to-element
// Definitions by: Kirill Kvashonin <https://github.com/kirillurgant>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Options {
    offset: number;
    align?: 'top' | 'middle' | 'bottom';
    ease?: string;
    duration?: number;
}

declare function scrollToElement(selector: string | HTMLElement | Element, options?: Options): void;

export = scrollToElement;
