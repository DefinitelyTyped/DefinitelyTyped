import _ = require("../index");

declare namespace Lodash {
    interface ToNumber {
        /**
         * Converts `value` to a number.
         *
         * @category Lang
         * @param value The value to process.
         * @returns Returns the number.
         * @example
         *
         * _.toNumber(3);
         * // => 3
         *
         * _.toNumber(Number.MIN_VALUE);
         * // => 5e-324
         *
         * _.toNumber(Infinity);
         * // => Infinity
         *
         * _.toNumber('3');
         * // => 3
         */
        (): ToNumber;
        /**
         * Converts `value` to a number.
         *
         * @category Lang
         * @param value The value to process.
         * @returns Returns the number.
         * @example
         *
         * _.toNumber(3);
         * // => 3
         *
         * _.toNumber(Number.MIN_VALUE);
         * // => 5e-324
         *
         * _.toNumber(Infinity);
         * // => Infinity
         *
         * _.toNumber('3');
         * // => 3
         */
        (value: any): number;
    }
}

declare const toNumber: Lodash.ToNumber;
export = toNumber;
