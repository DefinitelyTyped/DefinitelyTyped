// Type definitions for simplebar.js 2.4
// Project: https://github.com/Grsmto/simplebar, https://grsmto.github.io/simplebar
// Definitions by: Gregor Woiwode <https://github.com/gregonnet>, Leonard Thieu <https://github.com/leonard-thieu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export as namespace SimpleBar;
export = SimpleBar;

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
