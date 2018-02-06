import _ = require("../index");

declare namespace Lodash {
    interface StartCase {
        /**
         * Converts string to start case.
         *
         * @param string The string to convert.
         * @return Returns the start cased string.
         */
        (): StartCase;
        /**
         * Converts string to start case.
         *
         * @param string The string to convert.
         * @return Returns the start cased string.
         */
        (string: string): string;
    }
}

declare const startCase: Lodash.StartCase;
export = startCase;
