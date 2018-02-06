import _ = require("../index");

declare namespace Lodash {
    interface KebabCase {
        /**
         * Converts string to kebab case.
         *
         * @param string The string to convert.
         * @return Returns the kebab cased string.
         */
        (): KebabCase;
        /**
         * Converts string to kebab case.
         *
         * @param string The string to convert.
         * @return Returns the kebab cased string.
         */
        (string: string): string;
    }
}

declare const kebabCase: Lodash.KebabCase;
export = kebabCase;
