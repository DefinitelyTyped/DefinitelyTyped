import _ = require("../index");

declare namespace Lodash {
    interface Words {
        /**
         * Splits `string` into an array of its words.
         *
         * @param string The string to inspect.
         * @param pattern The pattern to match words.
         * @return Returns the words of `string`.
         */
        (): Words;
        /**
         * Splits `string` into an array of its words.
         *
         * @param string The string to inspect.
         * @param pattern The pattern to match words.
         * @return Returns the words of `string`.
         */
        (string: string): string[];
    }
}

declare const words: Lodash.Words;
export = words;
