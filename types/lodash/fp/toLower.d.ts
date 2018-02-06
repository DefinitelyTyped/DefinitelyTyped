import _ = require("../index");

declare namespace Lodash {
    interface ToLower {
        /**
         * Converts `string`, as a whole, to lower case.
         *
         * @param string The string to convert.
         * @return Returns the lower cased string.
         */
        (): ToLower;
        /**
         * Converts `string`, as a whole, to lower case.
         *
         * @param string The string to convert.
         * @return Returns the lower cased string.
         */
        (string: string): string;
    }
}

declare const toLower: Lodash.ToLower;
export = toLower;
