import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * This method is like `_.pullAll` except that it accepts `iteratee` which is
         * invoked for each element of `array` and `values` to to generate the criterion
         * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
         *
         * @category Array
         * @param array The array to modify.
         * @param values The values to remove.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns `array`.
         * @example
         *
         * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
         *
         * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
         * console.log(array);
         * // => [{ 'x': 2 }]
         */
        pullAllBy<T>(
            array: T[],
            values?: List<T>,
            iteratee?: ValueIteratee<T>
        ): T[];

        /**
         * @see _.pullAllBy
         */
        pullAllBy<T>(
            array: List<T>,
            values?: List<T>,
            iteratee?: ValueIteratee<T>
        ): List<T>;

        /**
         * @see _.pullAllBy
         */
        pullAllBy<T1, T2>(
            array: T1[],
            values: List<T2>,
            iteratee: ValueIteratee<T1 | T2>
        ): T1[];

        /**
         * @see _.pullAllBy
         */
        pullAllBy<T1, T2>(
            array: List<T1>,
            values: List<T2>,
            iteratee: ValueIteratee<T1 | T2>
        ): List<T1>;
    }

    interface LoDashWrapper<TValue> {
        /**
         * @see _.pullAllBy
         */
        pullAllBy<T>(
            this: LoDashWrapper<List<T>>,
            values?: List<T>,
            iteratee?: ValueIteratee<T>
        ): this;

        /**
         * @see _.pullAllBy
         */
        pullAllBy<T1, T2>(
            this: LoDashWrapper<List<T1>>,
            values: List<T2>,
            iteratee: ValueIteratee<T1 | T2>
        ): this;
    }
}