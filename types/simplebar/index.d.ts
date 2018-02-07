// Type definitions for simplebar.js 2.4
// Project: https://github.com/Grsmto/simplebar
// Definitions by: Leonard Thieu <https://github.com/leonard-thieu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

declare class SimpleBar {
    static removeObserver(): void;

    constructor(element: HTMLElement, options?: SimpleBar.Options);

    recalculate(): void;
    getScrollElement(): Element;
    getContentElement(): Element;
}

declare namespace SimpleBar {
    interface Options {
        wrapContent?: boolean;
        autoHide?: boolean;
        scrollbarMinSize?: number;
        classNames?: ClassNamesOptions;
    }

    interface ClassNamesOptions {
        content?: string;
        scrollContent?: string;
        scrollbar?: string;
        track?: string;
    }
}
