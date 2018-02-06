// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    interface Subtract {
        /**
         * Subtract two numbers.
         *
         * @category Math
         * @param minuend The first number in a subtraction.
         * @param subtrahend The second number in a subtraction.
         * @returns Returns the difference.
         * @example
         *
         * _.subtract(6, 4);
         * // => 2
         */
        (): Subtract;
        /**
         * Subtract two numbers.
         *
         * @category Math
         * @param minuend The first number in a subtraction.
         * @param subtrahend The second number in a subtraction.
         * @returns Returns the difference.
         * @example
         *
         * _.subtract(6, 4);
         * // => 2
         */
        (subtrahend: number): Subtract1x1;
        /**
         * Subtract two numbers.
         *
         * @category Math
         * @param minuend The first number in a subtraction.
         * @param subtrahend The second number in a subtraction.
         * @returns Returns the difference.
         * @example
         *
         * _.subtract(6, 4);
         * // => 2
         */
        (subtrahend: number, minuend: number): number;
    }
    interface Subtract1x1 {
        /**
         * Subtract two numbers.
         *
         * @category Math
         * @param minuend The first number in a subtraction.
         * @param subtrahend The second number in a subtraction.
         * @returns Returns the difference.
         * @example
         *
         * _.subtract(6, 4);
         * // => 2
         */
        (): Subtract1x1;
        /**
         * Subtract two numbers.
         *
         * @category Math
         * @param minuend The first number in a subtraction.
         * @param subtrahend The second number in a subtraction.
         * @returns Returns the difference.
         * @example
         *
         * _.subtract(6, 4);
         * // => 2
         */
        (minuend: number): number;
    }
}

declare const subtract: Lodash.Subtract;
export = subtract;
