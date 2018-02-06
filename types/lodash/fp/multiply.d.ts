// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    interface Multiply {
        /**
         * Multiply two numbers.
         * @param multiplier The first number in a multiplication.
         * @param multiplicand The second number in a multiplication.
         * @returns Returns the product.
         */
        (): Multiply;
        /**
         * Multiply two numbers.
         * @param multiplier The first number in a multiplication.
         * @param multiplicand The second number in a multiplication.
         * @returns Returns the product.
         */
        (multiplicand: number): Multiply1x1;
        /**
         * Multiply two numbers.
         * @param multiplier The first number in a multiplication.
         * @param multiplicand The second number in a multiplication.
         * @returns Returns the product.
         */
        (multiplicand: number, multiplier: number): number;
    }
    interface Multiply1x1 {
        /**
         * Multiply two numbers.
         * @param multiplier The first number in a multiplication.
         * @param multiplicand The second number in a multiplication.
         * @returns Returns the product.
         */
        (): Multiply1x1;
        /**
         * Multiply two numbers.
         * @param multiplier The first number in a multiplication.
         * @param multiplicand The second number in a multiplication.
         * @returns Returns the product.
         */
        (multiplier: number): number;
    }
}

declare const multiply: Lodash.Multiply;
export = multiply;
