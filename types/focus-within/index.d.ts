// Type definitions for focus-within 1.0
// Project: https://github.com/jonathantneal/focus-within#readme
// Definitions by: Damien Erambert <https://github.com/eramdam>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace focusWithin {
    interface FocusWithinOpts {
      attr?: boolean;
      className?: string;
    }
}

declare function focusWithin(document: HTMLDocument, opts?: focusWithin.FocusWithinOpts): void;

export as namespace focusWithin;
export = focusWithin;
