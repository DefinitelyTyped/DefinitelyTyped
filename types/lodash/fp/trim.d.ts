import _ = require("../index");

declare namespace Lodash {
    interface Trim {
        /**
         * Removes leading and trailing whitespace or specified characters from string.
         *
         * @param string The string to trim.
         * @param chars The characters to trim.
         * @return Returns the trimmed string.
         */
        (): Trim;
        /**
         * Removes leading and trailing whitespace or specified characters from string.
         *
         * @param string The string to trim.
         * @param chars The characters to trim.
         * @return Returns the trimmed string.
         */
        (string: string): string;
    }
}

declare const trim: Lodash.Trim;
export = trim;
