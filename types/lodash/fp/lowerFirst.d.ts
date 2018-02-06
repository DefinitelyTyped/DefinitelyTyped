import _ = require("../index");

declare namespace Lodash {
    interface LowerFirst {
        /**
         * Converts the first character of `string` to lower case.
         *
         * @param string The string to convert.
         * @return Returns the converted string.
         */
        (): LowerFirst;
        /**
         * Converts the first character of `string` to lower case.
         *
         * @param string The string to convert.
         * @return Returns the converted string.
         */
        (string: string): string;
    }
}

declare const lowerFirst: Lodash.LowerFirst;
export = lowerFirst;
