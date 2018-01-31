import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * Multiply two numbers.
         * @param multiplier The first number in a multiplication.
         * @param multiplicand The second number in a multiplication.
         * @returns Returns the product.
         */
        multiply(
            multiplier: number,
            multiplicand: number
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.multiply
         */
        multiply(multiplicand: number): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.multiply
         */
        multiply(multiplicand: number): LoDashExplicitWrapper<number>;
    }
}