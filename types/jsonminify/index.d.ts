// Type definitions for jsonminify 0.4.1
// Project: https://github.com/fkei/JSON.minify
// Definitions by: Dan Homola <https://github.com/no23reason>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare global {
    interface JSON {
        /**
         * minifies blocks of JSON-like content into valid JSON by removing all whitespace and comments.
         */
        minify(json: string): string;
    }
}

/**
 * minifies blocks of JSON-like content into valid JSON by removing all whitespace and comments.
 */
declare function minify(json: string): string;

export = minify;
