import _ = require("../index");

declare namespace Lodash {
    interface XorWith {
        /**
         * This method is like `_.xor` except that it accepts `comparator` which is
         * invoked to compare elements of `arrays`. The comparator is invoked with
         * two arguments: (arrVal, othVal).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [comparator] The comparator invoked per element.
         * @returns Returns the new array of values.
         * @example
         *
         * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
         * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
         *
         * _.xorWith(objects, others, _.isEqual);
         * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
         */
        (): XorWith;
        /**
         * This method is like `_.xor` except that it accepts `comparator` which is
         * invoked to compare elements of `arrays`. The comparator is invoked with
         * two arguments: (arrVal, othVal).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [comparator] The comparator invoked per element.
         * @returns Returns the new array of values.
         * @example
         *
         * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
         * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
         *
         * _.xorWith(objects, others, _.isEqual);
         * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
         */
        <T>(arrays2: _.List<T> | null | undefined): XorWith1x1<T>;
        /**
         * This method is like `_.xor` except that it accepts `comparator` which is
         * invoked to compare elements of `arrays`. The comparator is invoked with
         * two arguments: (arrVal, othVal).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [comparator] The comparator invoked per element.
         * @returns Returns the new array of values.
         * @example
         *
         * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
         * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
         *
         * _.xorWith(objects, others, _.isEqual);
         * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
         */
        <T>(arrays2: _.List<T> | null | undefined, comparator: _.Comparator<T>): XorWith1x2<T>;
        /**
         * This method is like `_.xor` except that it accepts `comparator` which is
         * invoked to compare elements of `arrays`. The comparator is invoked with
         * two arguments: (arrVal, othVal).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [comparator] The comparator invoked per element.
         * @returns Returns the new array of values.
         * @example
         *
         * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
         * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
         *
         * _.xorWith(objects, others, _.isEqual);
         * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
         */
        <T>(arrays2: _.List<T> | null | undefined, comparator: _.Comparator<T>, arrays: _.List<T> | null | undefined): T[];
    }
    interface XorWith1x1<T> {
        /**
         * This method is like `_.xor` except that it accepts `comparator` which is
         * invoked to compare elements of `arrays`. The comparator is invoked with
         * two arguments: (arrVal, othVal).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [comparator] The comparator invoked per element.
         * @returns Returns the new array of values.
         * @example
         *
         * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
         * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
         *
         * _.xorWith(objects, others, _.isEqual);
         * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
         */
        (): XorWith1x1<T>;
        /**
         * This method is like `_.xor` except that it accepts `comparator` which is
         * invoked to compare elements of `arrays`. The comparator is invoked with
         * two arguments: (arrVal, othVal).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [comparator] The comparator invoked per element.
         * @returns Returns the new array of values.
         * @example
         *
         * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
         * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
         *
         * _.xorWith(objects, others, _.isEqual);
         * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
         */
        (comparator: _.Comparator<T>): XorWith1x2<T>;
        /**
         * This method is like `_.xor` except that it accepts `comparator` which is
         * invoked to compare elements of `arrays`. The comparator is invoked with
         * two arguments: (arrVal, othVal).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [comparator] The comparator invoked per element.
         * @returns Returns the new array of values.
         * @example
         *
         * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
         * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
         *
         * _.xorWith(objects, others, _.isEqual);
         * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
         */
        (comparator: _.Comparator<T>, arrays: _.List<T> | null | undefined): T[];
    }
    interface XorWith1x2<T> {
        /**
         * This method is like `_.xor` except that it accepts `comparator` which is
         * invoked to compare elements of `arrays`. The comparator is invoked with
         * two arguments: (arrVal, othVal).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [comparator] The comparator invoked per element.
         * @returns Returns the new array of values.
         * @example
         *
         * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
         * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
         *
         * _.xorWith(objects, others, _.isEqual);
         * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
         */
        (): XorWith1x2<T>;
        /**
         * This method is like `_.xor` except that it accepts `comparator` which is
         * invoked to compare elements of `arrays`. The comparator is invoked with
         * two arguments: (arrVal, othVal).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [comparator] The comparator invoked per element.
         * @returns Returns the new array of values.
         * @example
         *
         * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
         * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
         *
         * _.xorWith(objects, others, _.isEqual);
         * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
         */
        (arrays: _.List<T> | null | undefined): T[];
    }
}

declare const symmetricDifferenceWith: Lodash.XorWith;
export = symmetricDifferenceWith;
