import _ = require("../index");

declare namespace Lodash {
    interface UpperCase {
        /**
         * Converts `string`, as space separated words, to upper case.
         *
         * @param string The string to convert.
         * @return Returns the upper cased string.
         */
        (): UpperCase;
        /**
         * Converts `string`, as space separated words, to upper case.
         *
         * @param string The string to convert.
         * @return Returns the upper cased string.
         */
        (string: string): string;
    }
}

declare const upperCase: Lodash.UpperCase;
export = upperCase;
