import _ = require("../index");

declare namespace Lodash {
    interface CamelCase {
        /**
         * Converts string to camel case.
         *
         * @param string The string to convert.
         * @return Returns the camel cased string.
         */
        (): CamelCase;
        /**
         * Converts string to camel case.
         *
         * @param string The string to convert.
         * @return Returns the camel cased string.
         */
        (string: string): string;
    }
}

declare const camelCase: Lodash.CamelCase;
export = camelCase;
