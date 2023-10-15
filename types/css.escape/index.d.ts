// Type definitions for css.escape 1.5
// Project: https://github.com/mathiasbynens/CSS.escape
// Definitions by: Mihnea Stoian <https://github.com/mihnea-s>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare global {
    const CSS: {
        /**
         * A robust polyfill for the `CSS.escape` utility method as defined in
         * [CSSOM](https://drafts.csswg.org/cssom/#the-css.escape()-method).
         */
        escape(css: string): string;
    };
}

export = CSS.escape;
