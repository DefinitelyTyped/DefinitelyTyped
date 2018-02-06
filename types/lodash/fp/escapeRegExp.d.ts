// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

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
