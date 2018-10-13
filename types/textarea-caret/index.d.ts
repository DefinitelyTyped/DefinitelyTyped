// Type definitions for textarea-caret 3.0
// Project: https://github.com/component/textarea-caret-position
// Definitions by: Brendan Forster <https://github.com/shiftkey>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

export = textarea_caret;

interface Caret {
    top: number;
    left: number;
    height: number;
}

interface Options {
    debug?: boolean;
}

declare function textarea_caret(element: HTMLElement, position: number, options?: Options): Caret;
