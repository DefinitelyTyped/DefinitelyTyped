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
