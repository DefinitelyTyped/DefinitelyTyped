// Type definitions for tabbable 3.1
// Project: https://github.com/davidtheclark/tabbable
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function T(el: Element | Document, options?: T.Options): HTMLElement[];

declare namespace T {
    interface Options {
        includeContainer?: boolean | undefined;
    }

    function isTabbable(el: HTMLElement): boolean;

    function isFocusable(el: HTMLElement): boolean;
}

export = T;
