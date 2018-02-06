import _ = require("../index");

declare namespace Lodash {
    interface SnakeCase {
        /**
         * Converts string to snake case.
         *
         * @param string The string to convert.
         * @return Returns the snake cased string.
         */
        (): SnakeCase;
        /**
         * Converts string to snake case.
         *
         * @param string The string to convert.
         * @return Returns the snake cased string.
         */
        (string: string): string;
    }
}

declare const snakeCase: Lodash.SnakeCase;
export = snakeCase;
