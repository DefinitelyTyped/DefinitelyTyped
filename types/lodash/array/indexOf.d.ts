declare namespace _ {
    interface LoDashStatic {
        /**
         * Gets the index at which the first occurrence of `value` is found in `array`
         * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
         * for equality comparisons. If `fromIndex` is negative, it's used as the offset
         * from the end of `array`. If `array` is sorted providing `true` for `fromIndex`
         * performs a faster binary search.
         *
         * @category Array
         * @param array The array to search.
         * @param value The value to search for.
         * @param [fromIndex=0] The index to search from.
         * @returns Returns the index of the matched value, else `-1`.
         * @example
         *
         * _.indexOf([1, 2, 1, 2], 2);
         * // => 1
         *
         * // using `fromIndex`
         * _.indexOf([1, 2, 1, 2], 2, 2);
         * // => 3
         */
        indexOf<T>(
            array: List<T> | null | undefined,
            value: T,
            fromIndex?: boolean|number
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.indexOf
         */
        indexOf<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            value: T,
            fromIndex?: boolean|number
        ): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.indexOf
         */
        indexOf<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            value: T,
            fromIndex?: boolean|number
        ): LoDashExplicitWrapper<number>;
    }
}