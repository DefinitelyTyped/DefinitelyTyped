// Type definitions for focus-within 1.0
// Project: https://github.com/jonathantneal/focus-within#readme
// Definitions by: Damien Erambert <https://github.com/eramdam>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare global {
interface FocusWithinOpts {
    attr?: boolean;
    className?: string;
}

type FocusWithin = (document: HTMLDocument, opts?: FocusWithinOpts) => void;

const focusWithin: FocusWithin;
}

export default focusWithin;
