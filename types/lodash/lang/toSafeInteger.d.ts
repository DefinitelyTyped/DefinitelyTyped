declare namespace _ {
    interface LoDashStatic {
        /**
         * Converts `value` to a safe integer. A safe integer can be compared and
         * represented correctly.
         *
         * @category Lang
         * @param value The value to convert.
         * @returns Returns the converted integer.
         * @example
         *
         * _.toSafeInteger(3);
         * // => 3
         *
         * _.toSafeInteger(Number.MIN_VALUE);
         * // => 0
         *
         * _.toSafeInteger(Infinity);
         * // => 9007199254740991
         *
         * _.toSafeInteger('3');
         * // => 3
         */
        toSafeInteger(value: any): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toSafeInteger
         */
        toSafeInteger(): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toSafeInteger
         */
        toSafeInteger(): LoDashExplicitWrapper<number>;
    }
}