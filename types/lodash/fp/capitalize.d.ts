import _ = require("../index");

declare namespace Lodash {
    interface Capitalize {
        /**
         * Converts the first character of string to upper case and the remaining to lower case.
         *
         * @param string The string to capitalize.
         * @return Returns the capitalized string.
         */
        (): Capitalize;
        /**
         * Converts the first character of string to upper case and the remaining to lower case.
         *
         * @param string The string to capitalize.
         * @return Returns the capitalized string.
         */
        (string: string): string;
    }
}

declare const capitalize: Lodash.Capitalize;
export = capitalize;
