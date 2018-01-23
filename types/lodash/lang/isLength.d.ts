declare namespace _ {
    interface LoDashStatic {
        /**
         * Checks if `value` is a valid array-like length.
         *
         * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
         *
         * @category Lang
         * @param value The value to check.
         * @returns Returns `true` if `value` is a valid length, else `false`.
         * @example
         *
         * _.isLength(3);
         * // => true
         *
         * _.isLength(Number.MIN_VALUE);
         * // => false
         *
         * _.isLength(Infinity);
         * // => false
         *
         * _.isLength('3');
         * // => false
         */
        isLength(value?: any): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isLength
         */
        isLength(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isLength
         */
        isLength(): LoDashExplicitWrapper<boolean>;
    }
}