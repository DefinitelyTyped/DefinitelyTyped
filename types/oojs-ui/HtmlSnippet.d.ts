declare namespace OO.ui {
    /**
     * Wraps an HTML snippet for use with configuration values which default
     * to strings. This bypasses the default html-escaping done to string
     * values.
     *
     * ResourceLoader module: `oojs-ui-core`
     *
     * @see https://doc.wikimedia.org/oojs-ui/master/js/#!/api/OO.ui.HtmlSnippet
     */
    interface HtmlSnippet {
        /**
         * Render into HTML.
         *
         * @return Unchanged HTML snippet.
         */
        toString(): string;
    }

    const HtmlSnippet: {
        /** @param content HTML content */
        new(content: string): HtmlSnippet;
        prototype: HtmlSnippet;
        static: {};
    };
}
