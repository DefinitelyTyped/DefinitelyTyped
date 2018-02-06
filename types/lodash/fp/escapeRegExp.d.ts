import _ = require("../index");

declare namespace Lodash {
    interface EscapeRegExp {
        /**
         * Escapes the RegExp special characters "^", "$", "\", ".", "*", "+", "?", "(", ")", "[", "]",
         * "{", "}", and "|" in string.
         *
         * @param string The string to escape.
         * @return Returns the escaped string.
         */
        (): EscapeRegExp;
        /**
         * Escapes the RegExp special characters "^", "$", "\", ".", "*", "+", "?", "(", ")", "[", "]",
         * "{", "}", and "|" in string.
         *
         * @param string The string to escape.
         * @return Returns the escaped string.
         */
        (string: string): string;
    }
}

declare const escapeRegExp: Lodash.EscapeRegExp;
export = escapeRegExp;
