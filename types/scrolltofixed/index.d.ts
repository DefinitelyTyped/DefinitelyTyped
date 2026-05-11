/// <reference types="jquery" />

declare namespace ScrollToFixed {
    interface ScrollToFixedOptions {
        marginTop?: number | (() => number) | undefined;
        limit?: number | (() => number) | undefined;
        bottom?: number | undefined;
        zIndex?: number | undefined;
        spacerClass?: string | undefined;
        preFixed?: (() => void) | undefined;
        postFixed?: (() => void) | undefined;
        fixed?: (() => void) | undefined;
        unfixed?: (() => void) | undefined;
        preUnfixed?: (() => void) | undefined;
        postUnfixed?: (() => void) | undefined;
        preAbsolute?: (() => void) | undefined;
        postAbsolute?: (() => void) | undefined;
        offsets?: boolean | undefined;
        minWidth?: number | undefined;
        maxWidth?: number | undefined;
        dontCheckForPositionFixedSupport?: boolean | undefined;
        dontSetWidth?: boolean | undefined;
        removeOffsets?: boolean | undefined;
        baseClassName?: string | undefined;
        className?: string | undefined;
    }
}

interface JQuery {
    scrollToFixed: (options?: ScrollToFixed.ScrollToFixedOptions) => JQuery[];
}

interface JQueryStatic {
    isScrollToFixed(el: Element): JQuery;
    isScrollToFixed(el: Element[]): JQuery;
    isScrollToFixed(el: {}): JQuery;
    isScrollToFixed(el: JQuery): JQuery;

    ScrollToFixed(el: Element, options: ScrollToFixed.ScrollToFixedOptions): void;
    ScrollToFixed(el: Element, options: ScrollToFixed.ScrollToFixedOptions): JQuery;
    ScrollToFixed(el: Element[], options: ScrollToFixed.ScrollToFixedOptions): JQuery;
    ScrollToFixed(el: {}, options: ScrollToFixed.ScrollToFixedOptions): JQuery;
    ScrollToFixed(el: JQuery, options: ScrollToFixed.ScrollToFixedOptions): JQuery;
}
