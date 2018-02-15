import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * This method is like `_.uniq` except that it accepts `comparator` which
         * is invoked to compare elements of `array`. The comparator is invoked with
         * two arguments: (arrVal, othVal).
         *
         * @category Array
         * @param array The array to inspect.
         * @param [comparator] The comparator invoked per element.
         * @returns Returns the new duplicate free array.
         * @example
         *
         * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 },  { 'x': 1, 'y': 2 }];
         *
         * _.uniqWith(objects, _.isEqual);
         * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
         */
        uniqWith<T>(
            array: List<T> | null | undefined,
            comparator?: Comparator<T>
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.uniqWith
         */
        uniqWith<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            comparator?: Comparator<T>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.uniqWith
         */
        uniqWith<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            comparator?: Comparator<T>
        ): LoDashExplicitWrapper<T[]>;
    }
}