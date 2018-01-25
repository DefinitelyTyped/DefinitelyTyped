import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * This method is like `_.pullAll` except that it accepts `comparator` which is
         * invoked to compare elements of array to values. The comparator is invoked with
         * two arguments: (arrVal, othVal).
         *
         * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
         *
         * @category Array
         * @param array The array to modify.
         * @param values The values to remove.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns `array`.
         * @example
         *
         * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
         *
         * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
         * console.log(array);
         * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
         */
        pullAllWith<T>(
            array: T[],
            values?: List<T>,
            comparator?: Comparator<T>
        ): T[];

        /**
         * @see _.pullAllWith
         */
        pullAllWith<T>(
            array: List<T>,
            values?: List<T>,
            comparator?: Comparator<T>
        ): List<T>;

        /**
         * @see _.pullAllWith
         */
        pullAllWith<T1, T2>(
            array: T1[],
            values: List<T2>,
            comparator: Comparator2<T1, T2>
        ): T1[];

        /**
         * @see _.pullAllWith
         */
        pullAllWith<T1, T2>(
            array: List<T1>,
            values: List<T2>,
            comparator: Comparator2<T1, T2>
        ): List<T1>;
    }

    interface LoDashWrapper<TValue> {
        /**
         * @see _.pullAllWith
         */
        pullAllWith<T>(
            this: LoDashWrapper<List<T>>,
            values?: List<T>,
            comparator?: Comparator<T>
        ): this;

        /**
         * @see _.pullAllWith
         */
        pullAllWith<T1, T2>(
            this: LoDashWrapper<List<T1>>,
            values: List<T2>,
            comparator: Comparator2<T1, T2>
        ): this;
    }
}