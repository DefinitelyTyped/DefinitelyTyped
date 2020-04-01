// Type definitions for simplebar.js 5.1
// Project: https://github.com/Grsmto/simplebar, https://grsmto.github.io/simplebar
// Definitions by: Valikhan Akhmedov <https://github.com/val-o>, Gregor Woiwode <https://github.com/gregonnet>, Leonard Thieu <https://github.com/leonard-thieu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export as namespace SimpleBar;
export = SimpleBar;

declare class SimpleBar {
    static removeObserver(): void;
    static instances: Pick<WeakMap<HTMLElement, SimpleBar>, 'get' | 'has'>;

    constructor(element: HTMLElement, options?: SimpleBar.Options);

    recalculate(): void;
    getScrollElement(): Element;
    getContentElement(): Element;
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

    interface KnownClassNamesOptions {
        contentEl?: string;
        contentWrapper?: string;
        offset?: string;
        mask?: string;
        wrapper?: string;
        placeholder?: string;
        scrollbar?: string;
        track?: string;
        heightAutoObserverWrapperEl?: string;
        heightAutoObserverEl?: string;
        visible?: string;
        horizontal?: string;
        vertical?: string;
        hover?: string;
        dragging?: string;
    }

    type ClassNamesOptions = KnownClassNamesOptions & {
        [className: string]: string;
    };
}
