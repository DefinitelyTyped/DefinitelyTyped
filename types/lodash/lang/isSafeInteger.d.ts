import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
         * double precision number which isn't the result of a rounded unsafe integer.
         *
         * **Note:** This method is based on [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
         *
         * @category Lang
         * @param value The value to check.
         * @returns Returns `true` if `value` is a safe integer, else `false`.
         * @example
         *
         * _.isSafeInteger(3);
         * // => true
         *
         * _.isSafeInteger(Number.MIN_VALUE);
         * // => false
         *
         * _.isSafeInteger(Infinity);
         * // => false
         *
         * _.isSafeInteger('3');
         * // => false
         */
        isSafeInteger(value: any): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * see _.isSafeInteger
         */
        isSafeInteger(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * see _.isSafeInteger
         */
        isSafeInteger(): LoDashExplicitWrapper<boolean>;
    }
}