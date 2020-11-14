// Type definitions for minify 6.0
// Project: http://coderaiser.github.io/minify
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import htmlMinifier = require('html-minifier-terser');
import cleanCSS = require('clean-css');
import terser = require('terser');

/**
 * A minifier of js, css, html and img files.
 * @async
 */
declare function minify(name: string, options?: minify.Options): Promise<string>;

declare namespace minify {
    /**
     * Full documentation for options that each file type accepts
     * can be found on the pages of the libraries used by minify to process the files
     */
    interface Options {
        /**
         * see {@link https://github.com/kangax/html-minifier}
         */
        html?: htmlMinifier.Options;
        /**
         * see {@link https://github.com/jakubpawlowicz/clean-css}
         */
        css?: cleanCSS.Options;
        /**
         * see {@link https://github.com/terser/terser}
         */
        js?: terser.MinifyOptions;
        /**
         * see {@link https://github.com/Filirom1/css-base64-images}
         */
        img?: {
            /**
             * bigger images are not base64 in the CSS
             * @default 4096
             */
            maxSize?: number;
        };
    }
}

export = minify;
