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
