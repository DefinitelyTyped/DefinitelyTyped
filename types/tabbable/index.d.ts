declare function T(el: Element | Document, options?: T.Options): HTMLElement[];

declare namespace T {
    interface Options {
        includeContainer?: boolean | undefined;
    }

    function isTabbable(el: HTMLElement): boolean;

    function isFocusable(el: HTMLElement): boolean;
}

export = T;
