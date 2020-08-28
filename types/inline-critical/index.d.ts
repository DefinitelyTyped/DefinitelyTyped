// Type definitions for inline-critical 5.3
// Project: https://github.com/bezoerb/inline-critical#readme
// Definitions by: cherryblossom <https://github.com/cherryblossom000>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = inline;

/**
 * @param html The HTML to use to inline critical styles.
 * @param styles The styles to inline.
 * @param options Optional configuration object.
 * @example
 * const html = fs.readFileSync('test/fixtures/index.html', 'utf8')
 * const critical = fs.readFileSync('tests/fixtures/critical.css', 'utf8')
 * const inlined = inline(html, critical)
 *
 * // ignoring stylesheets matching regex
 * const inlined = inline(html, critical, {ignore: [/bootstrap/]})
 */
declare function inline(html: string, styles: string, options?: inline.Options): string;

declare namespace inline {
    interface Options {
        /**
         * Whether to minify the styles before inlining.
         * @default true
         */
        minify?: boolean;

        /**
         * Whether to remove the inlined styles from any stylesheets referenced in the HTML.
         * @default false
         */
        extract?: boolean;

        /**
         * The path to be used when extracting styles to find the files references by `href` attributes.
         * @default process.cwd
         */
        basePath?: string;

        /**
         * Stylesheets to ignore when inlining.
         * @default []
         * @example [/bootstrap/]
         */
        ignore?: string | RegExp | Array<string | RegExp>;

        /** The selector for the element used by loadCSS as a reference for inlining. */
        selector?: string;

        /**
         * The position of the `noscript` fallback.
         * * `body`: end of body
         * * `head`: end of head
         * * `false`: no `noscript`
         * @default 'body'
         */
        noscript?: 'body' | 'head' | false;

        /**
         * Whether to add loadCSS if it's not already loaded.
         * @default true
         */
        polyfill?: boolean;

        /**
         * Paths to use in the `href` tag of the `link` elements.
         * @default false
         */
        replaceStylesheets?: string[] | false;
    }
}
