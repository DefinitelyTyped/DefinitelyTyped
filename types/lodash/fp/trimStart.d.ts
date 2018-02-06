import _ = require("../index");

declare namespace Lodash {
    interface TrimStart {
        /**
         * Removes leading whitespace or specified characters from string.
         *
         * @param string The string to trim.
         * @param chars The characters to trim.
         * @return Returns the trimmed string.
         */
        (): TrimStart;
        /**
         * Removes leading whitespace or specified characters from string.
         *
         * @param string The string to trim.
         * @param chars The characters to trim.
         * @return Returns the trimmed string.
         */
        (string: string): string;
    }
}

declare const trimStart: Lodash.TrimStart;
export = trimStart;
