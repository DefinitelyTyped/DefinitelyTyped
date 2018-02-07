// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

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
        <T extends (...args: any[]) => any>(func: T): T;
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
        (): this;
    }
}

declare const flip: Lodash.Flip;
export = flip;
