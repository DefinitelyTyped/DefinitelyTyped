import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
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
         * // using the `_.property` iteratee shorthand
         * _.sortedLastIndexBy([{ 'x': 4 }, { 'x': 5 }], { 'x': 4 }, 'x');
         * // => 1
         */
        sortedLastIndexBy<T>(
            array: List<T> | null | undefined,
            value: T,
            iteratee: ValueIteratee<T>
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.sortedLastIndexBy
         */
        sortedLastIndexBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            value: T,
            iteratee: ValueIteratee<T>
        ): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.sortedLastIndexBy
         */
        sortedLastIndexBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            value: T,
            iteratee: ValueIteratee<T>
        ): LoDashExplicitWrapper<number>;
    }
}