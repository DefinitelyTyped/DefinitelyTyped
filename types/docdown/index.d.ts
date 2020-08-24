// Type definitions for docdown 0.7
// Project: https://github.com/jdalton/docdown#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * A simple JSDoc to Markdown documentation generator.
 * Generates Markdown documentation based on JSDoc comments.
 */
declare function docdown(options: docdown.Options): string;

declare namespace docdown {
    interface Options {
        /**
         * the input file pat
         */
        path: string;
        /**
         * The source URL.
         */
        url: string;
        /**
         *  The language indicator for code blocks.
         * @default 'js'
         */
        lang?: string;
        /**
         * Specify whether entries are sorted.
         * @default true
         */
        sort?: boolean;
        /**
         * The hash style for links ('default' or 'github').
         * @default 'default'
         */
        style?: string;
        /**
         * The documentation title.
         * @default '<%= basename(options.path) %> API documentation'
         */
        title?: string;
        /**
         * The table of contents organization style ('categories' or 'properties').
         * @default 'properties'
         */
        toc?: string;
    }
}

export = docdown;
