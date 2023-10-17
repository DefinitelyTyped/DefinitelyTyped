// Module is exported as global object outside of module loader environment
export as namespace noScroll;

interface NoScroll {
    off(): void;
    on(): void;
    toggle(): void;
}

declare const noScroll: NoScroll;
export = noScroll;
