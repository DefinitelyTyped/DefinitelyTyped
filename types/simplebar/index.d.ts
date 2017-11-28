// Type definitions for simplebar.js 2.5.1
// Project: https://github.com/Grsmto/simplebar
// Definitions by: Leonard Thieu <https://github.com/leonard-thieu>
//                 Ryan Noble <https://github.com/RyRy79261>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6.1

export = SimpleBar;
export as namespace SimpleBar;

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
