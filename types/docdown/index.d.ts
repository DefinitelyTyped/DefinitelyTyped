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
        lang?: string | undefined;
        /**
         * Specify whether entries are sorted.
         * @default true
         */
        sort?: boolean | undefined;
        /**
         * The hash style for links ('default' or 'github').
         * @default 'default'
         */
        style?: string | undefined;
        /**
         * The documentation title.
         * @default '<%= basename(options.path) %> API documentation'
         */
        title?: string | undefined;
        /**
         * The table of contents organization style ('categories' or 'properties').
         * @default 'properties'
         */
        toc?: string | undefined;
    }
}

export = docdown;
