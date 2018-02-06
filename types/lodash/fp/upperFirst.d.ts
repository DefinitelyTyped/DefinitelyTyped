import _ = require("../index");

declare namespace Lodash {
    interface UpperFirst {
        /**
         * Converts the first character of `string` to upper case.
         *
         * @param string The string to convert.
         * @return Returns the converted string.
         */
        (): UpperFirst;
        /**
         * Converts the first character of `string` to upper case.
         *
         * @param string The string to convert.
         * @return Returns the converted string.
         */
        (string: string): string;
    }
}

declare const upperFirst: Lodash.UpperFirst;
export = upperFirst;
