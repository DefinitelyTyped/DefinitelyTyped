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
