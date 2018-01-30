import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * Uses a binary search to determine the lowest index at which `value` should
         * be inserted into `array` in order to maintain its sort order.
         *
         * @category Array
         * @param array The sorted array to inspect.
         * @param value The value to evaluate.
         * @returns Returns the index at which `value` should be inserted into `array`.
         * @example
         *
         * _.sortedIndex([30, 50], 40);
         * // => 1
         *
         * _.sortedIndex([4, 5], 4);
         * // => 0
         */
        sortedIndex<T>(
            array: List<T> | null | undefined,
            value: T
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.sortedIndex
         */
        sortedIndex<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            value: T
        ): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.sortedIndex
         */
        sortedIndex<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            value: T
        ): LoDashExplicitWrapper<number>;
    }

    // _.sortedIndexBy
    interface LoDashStatic {
        /**
         * This method is like `_.sortedIndex` except that it accepts `iteratee`
         * which is invoked for `value` and each element of `array` to compute their
         * sort ranking. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param array The sorted array to inspect.
         * @param value The value to evaluate.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the index at which `value` should be inserted into `array`.
         * @example
         *
         * var dict = { 'thirty': 30, 'forty': 40, 'fifty': 50 };
         *
         * _.sortedIndexBy(['thirty', 'fifty'], 'forty', _.propertyOf(dict));
         * // => 1
         *
         * // using the `_.property` iteratee shorthand
         * _.sortedIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');
         * // => 0
         */
        sortedIndexBy<T>(
            array: List<T> | null | undefined,
            value: T,
            iteratee?: ValueIteratee<T>
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.sortedIndexBy
         */
        sortedIndexBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            value: T,
            iteratee?: ValueIteratee<T>
        ): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.sortedIndexBy
         */
        sortedIndexBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            value: T,
            iteratee?: ValueIteratee<T>
        ): LoDashExplicitWrapper<number>;
    }
}