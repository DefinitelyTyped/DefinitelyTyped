import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * This method is like `_.sum` except that it accepts `iteratee` which is
         * invoked for each element in `array` to generate the value to be summed.
         * The iteratee is invoked with one argument: (value).
         *
         * @category Math
         * @param array The array to iterate over.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the sum.
         * @example
         *
         * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
         *
         * _.sumBy(objects, function(o) { return o.n; });
         * // => 20
         *
         * // using the `_.property` iteratee shorthand
         * _.sumBy(objects, 'n');
         * // => 20
         */
        sumBy<T>(
            collection: List<T> | null | undefined,
            iteratee?: ((value: T) => number) | string
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.sumBy
         */
        sumBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            iteratee?: ((value: T) => number) | string
        ): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.sumBy
         */
        sumBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            iteratee?: ((value: T) => number) | string
        ): LoDashExplicitWrapper<number>;
    }

    /**********
     * Number *
     **********/
}