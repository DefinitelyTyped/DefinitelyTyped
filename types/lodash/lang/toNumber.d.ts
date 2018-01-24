import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
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
        toNumber(value: any): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toNumber
         */
        toNumber(): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toNumber
         */
        toNumber(): LoDashExplicitWrapper<number>;
    }
}