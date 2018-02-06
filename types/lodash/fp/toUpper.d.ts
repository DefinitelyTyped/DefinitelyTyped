import _ = require("../index");

declare namespace Lodash {
    interface ToUpper {
        /**
         * Converts `string`, as a whole, to upper case.
         *
         * @param string The string to convert.
         * @return Returns the upper cased string.
         */
        (): ToUpper;
        /**
         * Converts `string`, as a whole, to upper case.
         *
         * @param string The string to convert.
         * @return Returns the upper cased string.
         */
        (string: string): string;
    }
}

declare const toUpper: Lodash.ToUpper;
export = toUpper;
