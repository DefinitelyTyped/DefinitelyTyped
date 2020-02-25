// Type definitions for simplebar.js 5.1
// Project: https://github.com/Grsmto/simplebar, https://grsmto.github.io/simplebar
// Definitions by: Valikhan Akhmedov <https://github.com/val-o>, Gregor Woiwode <https://github.com/gregonnet>, Leonard Thieu <https://github.com/leonard-thieu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

export as namespace SimpleBar;
export = SimpleBar;

declare class SimpleBar {
    static removeObserver(): void;
    static initHtmlApi(): void;

    constructor(element: HTMLElement, options?: SimpleBar.Options);

    public recalculate(): void;
    public getScrollElement(): Element;
    public getContentElement(): Element;

    public instances: Pick<WeakMap<HTMLElement, SimpleBar>, 'get' | 'has'>;
}

declare namespace SimpleBar {
    interface Options {
        autoHide?: boolean;
        classNames?: ClassNamesOptions;
        forceVisible?: boolean | 'x' | 'y';
        direction?: 'rtl' | 'ltr';
        timeout?: number;
        clickOnTrack?: boolean;
        scrollbarMinSize?: number;
        scrollbarMaxSize?: number;
    }

    interface ClassNamesOptions {
        content?: string;
        scrollContent?: string;
        scrollbar?: string;
        track?: string;
    }
}
