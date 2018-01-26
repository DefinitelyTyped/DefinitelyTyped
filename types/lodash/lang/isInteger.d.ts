import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Checks if `value` is an integer.
         *
         * **Note:** This method is based on [`Number.isInteger`](https://mdn.io/Number/isInteger).
         *
         * @category Lang
         * @param value The value to check.
         * @returns Returns `true` if `value` is an integer, else `false`.
         * @example
         *
         * _.isInteger(3);
         * // => true
         *
         * _.isInteger(Number.MIN_VALUE);
         * // => false
         *
         * _.isInteger(Infinity);
         * // => false
         *
         * _.isInteger('3');
         * // => false
         */
        isInteger(value?: any): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isInteger
         */
        isInteger(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isInteger
         */
        isInteger(): LoDashExplicitWrapper<boolean>;
    }
}