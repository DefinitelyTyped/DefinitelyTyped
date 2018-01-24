import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Converts `value` to an integer.
         *
         * **Note:** This function is loosely based on [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
         *
         * @category Lang
         * @param value The value to convert.
         * @returns Returns the converted integer.
         * @example
         *
         * _.toInteger(3);
         * // => 3
         *
         * _.toInteger(Number.MIN_VALUE);
         * // => 0
         *
         * _.toInteger(Infinity);
         * // => 1.7976931348623157e+308
         *
         * _.toInteger('3');
         * // => 3
         */
        toInteger(value: any): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toInteger
         */
        toInteger(): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toInteger
         */
        toInteger(): LoDashExplicitWrapper<number>;
    }
}