import _ = require("../index");

declare namespace Lodash {
    interface Flip {
        /**
        * Creates a function that invokes `func` with arguments reversed.
        *
        * @category Function
        * @param func The function to flip arguments for.
        * @returns Returns the new function.
        * @example
        *
        * var flipped = _.flip(function() {
        *   return _.toArray(arguments);
        * });
        *
        * flipped('a', 'b', 'c', 'd');
        * // => ['d', 'c', 'b', 'a']
        */
        (): Flip;
        /**
        * Creates a function that invokes `func` with arguments reversed.
        *
        * @category Function
        * @param func The function to flip arguments for.
        * @returns Returns the new function.
        * @example
        *
        * var flipped = _.flip(function() {
        *   return _.toArray(arguments);
        * });
        *
        * flipped('a', 'b', 'c', 'd');
        * // => ['d', 'c', 'b', 'a']
        */
        <T extends (...args: any[]) => any>(func: T): T;
    }
}

declare const flip: Lodash.Flip;
export = flip;
