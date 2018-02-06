import _ = require("../index");

declare namespace Lodash {
    interface LowerCase {
        /**
         * Converts `string`, as space separated words, to lower case.
         *
         * @param string The string to convert.
         * @return Returns the lower cased string.
         */
        (): LowerCase;
        /**
         * Converts `string`, as space separated words, to lower case.
         *
         * @param string The string to convert.
         * @return Returns the lower cased string.
         */
        (string: string): string;
    }
}

declare const lowerCase: Lodash.LowerCase;
export = lowerCase;
