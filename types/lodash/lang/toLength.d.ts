declare namespace _ {
    interface LoDashStatic {
        /**
         * Converts `value` to an integer suitable for use as the length of an
         * array-like object.
         *
         * **Note:** This method is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
         *
         * @category Lang
         * @param value The value to convert.
         * @return Returns the converted integer.
         * @example
         *
         * _.toLength(3);
         * // => 3
         *
         * _.toLength(Number.MIN_VALUE);
         * // => 0
         *
         * _.toLength(Infinity);
         * // => 4294967295
         *
         * _.toLength('3');
         * // => 3
         */
        toLength(value: any): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toLength
         */
        toLength(): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toLength
         */
        toLength(): LoDashExplicitWrapper<number>;
    }
}