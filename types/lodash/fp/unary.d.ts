import _ = require("../index");

declare namespace Lodash {
    interface Unary {
        /**
         * Creates a function that accepts up to one argument, ignoring any
         * additional arguments.
         *
         * @category Function
         * @param func The function to cap arguments for.
         * @returns Returns the new function.
         * @example
         *
         * _.map(['6', '8', '10'], _.unary(parseInt));
         * // => [6, 8, 10]
         */
        (): Unary;
        /**
         * Creates a function that accepts up to one argument, ignoring any
         * additional arguments.
         *
         * @category Function
         * @param func The function to cap arguments for.
         * @returns Returns the new function.
         * @example
         *
         * _.map(['6', '8', '10'], _.unary(parseInt));
         * // => [6, 8, 10]
         */
        <T, TResult>(func: (arg1: T, ...args: any[]) => TResult): (arg1: T) => TResult;
    }
}

declare const unary: Lodash.Unary;
export = unary;
