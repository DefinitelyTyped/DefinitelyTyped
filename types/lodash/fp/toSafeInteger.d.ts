// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    interface ToSafeInteger {
        /**
         * Converts `value` to a safe integer. A safe integer can be compared and
         * represented correctly.
         *
         * @category Lang
         * @param value The value to convert.
         * @returns Returns the converted integer.
         * @example
         *
         * _.toSafeInteger(3);
         * // => 3
         *
         * _.toSafeInteger(Number.MIN_VALUE);
         * // => 0
         *
         * _.toSafeInteger(Infinity);
         * // => 9007199254740991
         *
         * _.toSafeInteger('3');
         * // => 3
         */
        (): ToSafeInteger;
        /**
         * Converts `value` to a safe integer. A safe integer can be compared and
         * represented correctly.
         *
         * @category Lang
         * @param value The value to convert.
         * @returns Returns the converted integer.
         * @example
         *
         * _.toSafeInteger(3);
         * // => 3
         *
         * _.toSafeInteger(Number.MIN_VALUE);
         * // => 0
         *
         * _.toSafeInteger(Infinity);
         * // => 9007199254740991
         *
         * _.toSafeInteger('3');
         * // => 3
         */
        (value: any): number;
    }
}

declare const toSafeInteger: Lodash.ToSafeInteger;
export = toSafeInteger;
