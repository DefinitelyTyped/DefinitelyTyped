import _ = require("../index");
declare module "../index" {
    // chunk

    interface Stat {
        /**
         * Creates an array of elements split into groups the length of size. If collection can’t be split evenly, the
         * final chunk will be the remaining elements.
         *
         * @param array The array to process.
         * @param size The length of each chunk.
         * @return Returns the new array containing chunks.
         */
        chunk<T>(
            array: List<T> | null | undefined,
            size?: number
        ): T[][];
    }

    interface Imp<TValue> {
        /**
         * @see _.chunk
         */
        chunk<T>(
            this: Imp<List<T> | null | undefined>,
            size?: number,
        ): Imp<T[][]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.chunk
         */
        chunk<T>(
            this: Exp<List<T> | null | undefined>,
            size?: number,
        ): Exp<T[][]>;
    }

    // compact

    interface Stat {
        /**
         * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are
         * falsey.
         *
         * @param array The array to compact.
         * @return Returns the new array of filtered values.
         */
        compact<T>(array: List<T | null | undefined | false | "" | 0> | null | undefined): T[];
    }

    interface Imp<TValue> {
        /**
         * @see _.compact
         */
        compact<T>(this: Imp<List<T | null | undefined | false | "" | 0> | null | undefined>): Imp<T[]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.compact
         */
        compact<T>(this: Exp<List<T | null | undefined | false | "" | 0> | null | undefined>): Exp<T[]>;
    }

    // concat

    interface Stat {
        /**
         * Creates a new array concatenating `array` with any additional arrays
         * and/or values.
         *
         * @category Array
         * @param array The array to concatenate.
         * @param [values] The values to concatenate.
         * @returns Returns the new concatenated array.
         * @example
         *
         * var array = [1];
         * var other = _.concat(array, 2, [3], [[4]]);
         *
         * console.log(other);
         * // => [1, 2, 3, [4]]
         *
         * console.log(array);
         * // => [1]
         */
         concat<T>(array: Many<T>, ...values: Array<Many<T>>): T[];
    }

    interface Imp<TValue> {
        /**
         * @see _.compact
         */
        concat<T>(this: Imp<Many<T>>, ...values: Array<Many<T>>): Imp<T[]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.compact
         */
        concat<T>(this: Exp<Many<T>>, ...values: Array<Many<T>>): Exp<T[]>;
    }

    // difference

    interface Stat {
        /**
         * Creates an array of unique array values not included in the other provided arrays using SameValueZero for
         * equality comparisons.
         *
         * @param array The array to inspect.
         * @param values The arrays of values to exclude.
         * @return Returns the new array of filtered values.
         */
        difference<T>(
            array: List<T> | null | undefined,
            ...values: Array<List<T>>
        ): T[];
    }

    interface Imp<TValue> {
        /**
         * @see _.difference
         */
        difference<T>(
            this: Imp<List<T> | null | undefined>,
            ...values: Array<List<T>>
        ): Imp<T[]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.difference
         */
        difference<T>(
            this: Exp<List<T> | null | undefined>,
            ...values: Array<List<T>>
        ): Exp<T[]>;
    }

    // differenceBy

    interface Stat {
        /**
         * This method is like _.difference except that it accepts iteratee which is invoked for each element of array
         * and values to generate the criterion by which uniqueness is computed. The iteratee is invoked with one
         * argument: (value).
         *
         * @param array The array to inspect.
         * @param values The values to exclude.
         * @param iteratee The iteratee invoked per element.
         * @returns Returns the new array of filtered values.
         */
        differenceBy<T1, T2>(
            array: List<T1> | null | undefined,
            values: List<T2>,
            iteratee: ValueIteratee<T1 | T2>
        ): T1[];

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3>(
            array: List<T1> | null | undefined,
            values1: List<T2>,
            values2: List<T3>,
            iteratee: ValueIteratee<T1 | T2 | T3>
        ): T1[];

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4>(
            array: List<T1> | null | undefined,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            iteratee: ValueIteratee<T1 | T2 | T3 | T4>
        ): T1[];

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4, T5>(
            array: List<T1> | null | undefined,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            values4: List<T5>,
            iteratee: ValueIteratee<T1 | T2 | T3 | T4 | T5>
        ): T1[];

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4, T5, T6>(
            array: List<T1> | null | undefined,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            values4: List<T5>,
            values5: List<T6>,
            iteratee: ValueIteratee<T1 | T2 | T3 | T4 | T5 | T6>
        ): T1[];

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4, T5, T6, T7>(
            array: List<T1> | null | undefined,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            values4: List<T5>,
            values5: List<T6>,
            ...values: Array<List<T7> | ValueIteratee<T1 | T2 | T3 | T4 | T5 | T6 | T7>>
        ): T1[];

        /**
         * @see _.differenceBy
         */
        differenceBy<T>(
            array: List<T> | null | undefined,
            ...values: Array<List<T>>
        ): T[];
    }

    interface Imp<TValue> {
        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2>(
            this: Imp<List<T1> | null | undefined>,
            values: List<T2>,
            iteratee: ValueIteratee<T1 | T2>
        ): Imp<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3>(
            this: Imp<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            iteratee: ValueIteratee<T1 | T2 | T3>
        ): Imp<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4>(
            this: Imp<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            iteratee: ValueIteratee<T1 | T2 | T3 | T4>
        ): Imp<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4, T5>(
            this: Imp<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            values4: List<T5>,
            iteratee: ValueIteratee<T1 | T2 | T3 | T4 | T5>
        ): Imp<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4, T5, T6>(
            this: Imp<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            values4: List<T5>,
            values5: List<T6>,
            iteratee: ValueIteratee<T1 | T2 | T3 | T4 | T5 | T6>
        ): Imp<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4, T5, T6, T7>(
            this: Imp<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            values4: List<T5>,
            values5: List<T6>,
            ...values: Array<List<T7> | ValueIteratee<T1 | T2 | T3 | T4 | T5 | T6 | T7>>
        ): Imp<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T>(
            this: Imp<List<T> | null | undefined>,
            ...values: Array<List<T>>
        ): Imp<T[]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2>(
            this: Exp<List<T1> | null | undefined>,
            values: List<T2>,
            iteratee: ValueIteratee<T1 | T2>
        ): Exp<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3>(
            this: Exp<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            iteratee: ValueIteratee<T1 | T2 | T3>
        ): Exp<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4>(
            this: Exp<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            iteratee: ValueIteratee<T1 | T2 | T3 | T4>
        ): Exp<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4, T5>(
            this: Exp<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            values4: List<T5>,
            iteratee: ValueIteratee<T1 | T2 | T3 | T4 | T5>
        ): Exp<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4, T5, T6>(
            this: Exp<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            values4: List<T5>,
            values5: List<T6>,
            iteratee: ValueIteratee<T1 | T2 | T3 | T4 | T5 | T6>
        ): Exp<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4, T5, T6, T7>(
            this: Exp<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            values4: List<T5>,
            values5: List<T6>,
            ...values: Array<List<T7> | ValueIteratee<T1 | T2 | T3 | T4 | T5 | T6 | T7>>
        ): Exp<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T>(
            this: Exp<List<T> | null | undefined>,
            ...values: Array<List<T>>
        ): Exp<T[]>;
    }

    // differenceWith

    interface Stat {
        /**
         * Creates an array of unique `array` values not included in the other
         * provided arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
         * for equality comparisons.
         *
         * @category Array
         * @param [values] The arrays to inspect.
         * @param [comparator] The comparator invoked per element.
         * @returns Returns the new array of filtered values.
         * @example
         *
         * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];

         * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
         * // => [{ 'x': 2, 'y': 1 }]
         */
        differenceWith<T1, T2>(
            array: List<T1> | null | undefined,
            values: List<T2>,
            comparator: Comparator2<T1, T2>
        ): T1[];

        /**
         * @see _.differenceWith
         */
        differenceWith<T1, T2, T3>(
            array: List<T1> | null | undefined,
            values1: List<T2>,
            values2: List<T3>,
            comparator: Comparator2<T1, T2 | T3>
        ): T1[];

        /**
         * @see _.differenceWith
         */
        differenceWith<T1, T2, T3, T4>(
            array: List<T1> | null | undefined,
            values1: List<T2>,
            values2: List<T3>,
            ...values: Array<List<T4> | Comparator2<T1, T2 | T3 | T4>>
        ): T1[];

        /**
         * @see _.differenceWith
         */
        differenceWith<T>(
            array: List<T> | null | undefined,
            ...values: Array<List<T>>
        ): T[];
    }

    interface Imp<TValue> {
        /**
         * @see _.differenceWith
         */
        differenceWith<T1, T2>(
            this: Imp<List<T1> | null | undefined>,
            values: List<T2>,
            comparator: Comparator2<T1, T2>
        ): Imp<T1[]>;

        /**
         * @see _.differenceWith
         */
        differenceWith<T1, T2, T3>(
            this: Imp<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            comparator: Comparator2<T1, T2 | T3>
        ): Imp<T1[]>;

        /**
         * @see _.differenceWith
         */
        differenceWith<T1, T2, T3, T4>(
            this: Imp<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            ...values: Array<List<T4> | Comparator2<T1, T2 | T3 | T4>>
        ): Imp<T1[]>;

        /**
         * @see _.differenceWith
         */
        differenceWith<T>(
            this: Imp<List<T> | null | undefined>,
            ...values: Array<List<T>>
        ): Imp<T[]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.differenceWith
         */
        differenceWith<T1, T2>(
            this: Exp<List<T1> | null | undefined>,
            values: List<T2>,
            comparator: Comparator2<T1, T2>
        ): Exp<T1[]>;

        /**
         * @see _.differenceWith
         */
        differenceWith<T1, T2, T3>(
            this: Exp<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            comparator: Comparator2<T1, T2 | T3>
        ): Exp<T1[]>;

        /**
         * @see _.differenceWith
         */
        differenceWith<T1, T2, T3, T4>(
            this: Exp<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            ...values: Array<List<T4> | Comparator2<T1, T2 | T3 | T4>>
        ): Exp<T1[]>;

        /**
         * @see _.differenceWith
         */
        differenceWith<T>(
            this: Exp<List<T> | null | undefined>,
            ...values: Array<List<T>>
        ): Exp<T[]>;
    }

    // drop

    interface Stat {
        /**
         * Creates a slice of array with n elements dropped from the beginning.
         *
         * @param array The array to query.
         * @param n The number of elements to drop.
         * @return Returns the slice of array.
         */
        drop<T>(array: List<T> | null | undefined, n?: number): T[];
    }

    interface Imp<TValue> {
        /**
         * @see _.drop
         */
        drop<T>(this: Imp<List<T> | null | undefined>, n?: number): Imp<T[]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.drop
         */
        drop<T>(this: Exp<List<T> | null | undefined>, n?: number): Exp<T[]>;
    }

    // dropRight

    interface Stat {
        /**
         * Creates a slice of array with n elements dropped from the end.
         *
         * @param array The array to query.
         * @param n The number of elements to drop.
         * @return Returns the slice of array.
         */
        dropRight<T>(
            array: List<T> | null | undefined,
            n?: number
        ): T[];
    }

    interface Imp<TValue> {
        /**
         * @see _.dropRight
         */
        dropRight<T>(this: Imp<List<T> | null | undefined>, n?: number): Imp<T[]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.dropRight
         */
        dropRight<T>(this: Exp<List<T> | null | undefined>, n?: number): Exp<T[]>;
    }

    // dropRightWhile

    interface Stat {
        /**
         * Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate
         * returns falsey. The predicate is invoked with three arguments: (value, index, array).
         *
         * @param array The array to query.
         * @param predicate The function invoked per iteration.
         * @return Returns the slice of array.
         */
        dropRightWhile<T>(
            array: List<T> | null | undefined,
            predicate?: ListIteratee<T>
        ): T[];
    }

    interface Imp<TValue> {
        /**
         * @see _.dropRightWhile
         */
        dropRightWhile<T>(
            this: Imp<List<T> | null | undefined>,
            predicate?: ListIteratee<T>
        ): Imp<T[]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.dropRightWhile
         */
        dropRightWhile<T>(
            this: Exp<List<T> | null | undefined>,
            predicate?: ListIteratee<T>
        ): Exp<T[]>;
    }

    // dropWhile

    interface Stat {
        /**
         * Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate
         * returns falsey. The predicate is invoked with three arguments: (value, index, array).
         *
         * @param array The array to query.
         * @param predicate The function invoked per iteration.
         * @return Returns the slice of array.
         */
        dropWhile<T>(
            array: List<T> | null | undefined,
            predicate?: ListIteratee<T>
        ): T[];
    }

    interface Imp<TValue> {
        /**
         * @see _.dropWhile
         */
        dropWhile<T>(
            this: Imp<List<T> | null | undefined>,
            predicate?: ListIteratee<T>
        ): Imp<T[]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.dropWhile
         */
        dropWhile<T>(
            this: Exp<List<T> | null | undefined>,
            predicate?: ListIteratee<T>
        ): Exp<T[]>;
    }

    // fill

    interface Stat {
        /**
         * Fills elements of array with value from start up to, but not including, end.
         *
         * Note: This method mutates array.
         *
         * @param array The array to fill.
         * @param value The value to fill array with.
         * @param start The start position.
         * @param end The end position.
         * @return Returns array.
         */
        fill<T>(
            array: any[] | null | undefined,
            value: T
        ): T[];

        /**
         * @see _.fill
         */
        fill<T>(
            array: List<any> | null | undefined,
            value: T
        ): List<T>;

        /**
         * @see _.fill
         */
        fill<T, U>(
            array: U[] | null | undefined,
            value: T,
            start?: number,
            end?: number
        ): Array<T | U>;

        /**
         * @see _.fill
         */
        fill<T, U>(
            array: List<U> | null | undefined,
            value: T,
            start?: number,
            end?: number
        ): List<T | U>;
    }

    interface Imp<TValue> {
        /**
         * @see _.fill
         */
        fill<T>(
            this: Imp<any[] | null | undefined>,
            value: T
        ): Imp<T[]>;

        /**
         * @see _.fill
         */
        fill<T>(
            this: Imp<List<any> | null | undefined>,
            value: T
        ): Imp<List<T>>;

        /**
         * @see _.fill
         */
        fill<T, U>(
            this: Imp<U[] | null | undefined>,
            value: T,
            start?: number,
            end?: number
        ): Imp<Array<T | U>>;

        /**
         * @see _.fill
         */
        fill<T, U>(
            this: Imp<List<U> | null | undefined>,
            value: T,
            start?: number,
            end?: number
        ): Imp<List<T | U>>;
    }

    interface Exp<TValue> {
        /**
         * @see _.fill
         */
        fill<T>(
            this: Exp<any[] | null | undefined>,
            value: T
        ): Exp<T[]>;

        /**
         * @see _.fill
         */
        fill<T>(
            this: Exp<List<any> | null | undefined>,
            value: T
        ): Exp<List<T>>;

        /**
         * @see _.fill
         */
        fill<T, U>(
            this: Exp<U[] | null | undefined>,
            value: T,
            start?: number,
            end?: number
        ): Exp<Array<T | U>>;

        /**
         * @see _.fill
         */
        fill<T, U>(
            this: Exp<List<U> | null | undefined>,
            value: T,
            start?: number,
            end?: number
        ): Exp<List<T | U>>;
    }

    // findIndex

    interface Stat {
        /**
         * This method is like _.find except that it returns the index of the first element predicate returns truthy
         * for instead of the element itself.
         *
         * @param array The array to search.
         * @param predicate The function invoked per iteration.
         * @param fromIndex The index to search from.
         * @return Returns the index of the found element, else -1.
         */
        findIndex<T>(
            array: List<T> | null | undefined,
            predicate?: ListIterateeCustom<T, boolean>,
            fromIndex?: number
        ): number;
    }

    interface Imp<TValue> {
        /**
         * @see _.findIndex
         */
        findIndex<T>(
            this: Imp<List<T> | null | undefined>,
            predicate?: ListIterateeCustom<T, boolean>,
            fromIndex?: number
        ): number;
    }

    interface Exp<TValue> {
        /**
         * @see _.findIndex
         */
        findIndex<T>(
            this: Exp<List<T> | null | undefined>,
            predicate?: ListIterateeCustom<T, boolean>,
            fromIndex?: number
        ): Exp<number>;
    }

    // findLastIndex

    interface Stat {
        /**
         * This method is like _.findIndex except that it iterates over elements of collection from right to left.
         *
         * @param array The array to search.
         * @param predicate The function invoked per iteration.
         * @param fromIndex The index to search from.
         * @return Returns the index of the found element, else -1.
         */
        findLastIndex<T>(
            array: List<T> | null | undefined,
            predicate?: ListIterateeCustom<T, boolean>,
            fromIndex?: number
        ): number;
    }

    interface Imp<TValue> {
        /**
         * @see _.findLastIndex
         */
        findLastIndex<T>(
            this: Imp<List<T> | null | undefined>,
            predicate?: ListIterateeCustom<T, boolean>,
            fromIndex?: number
        ): number;
    }

    interface Exp<TValue> {
        /**
         * @see _.findLastIndex
         */
        findLastIndex<T>(
            this: Exp<List<T> | null | undefined>,
            predicate?: ListIterateeCustom<T, boolean>,
            fromIndex?: number
        ): Exp<number>;
    }

    // first

    interface Stat {
        first: typeof _.head; // tslint:disable-line:no-unnecessary-qualifier
    }

    interface Imp<TValue> {
        /**
         * @see _.head
         */
        first<T>(this: Imp<List<T> | null | undefined>): T | undefined;
    }

    interface Exp<TValue> {
        /**
         * @see _.head
         */
        first<T>(this: Exp<List<T> | null | undefined>): Exp<T | undefined>;
    }

    interface RecursiveArray<T> extends Array<T|RecursiveArray<T>> {}
    interface ListOfRecursiveArraysOrValues<T> extends List<T|RecursiveArray<T>> {}

    // flatten

    interface Stat {
        /**
         * Flattens `array` a single level deep.
         *
         * @param array The array to flatten.
         * @return Returns the new flattened array.
         */
        flatten<T>(array: List<Many<T>> | null | undefined): T[];
    }

    interface Imp<TValue> {
        /**
         * @see _.flatten
         */
        flatten<T>(this: Imp<List<Many<T>> | null | undefined>): Imp<T[]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.flatten
         */
        flatten<T>(this: Exp<List<Many<T>> | null | undefined>): Exp<T[]>;
    }

    // flattenDeep

    interface Stat {
        /**
         * Recursively flattens a nested array.
         *
         * @param array The array to recursively flatten.
         * @return Returns the new flattened array.
         */
        flattenDeep<T>(array: ListOfRecursiveArraysOrValues<T> | null | undefined): T[];
    }

    interface Imp<TValue> {
        /**
         * @see _.flattenDeep
         */
        flattenDeep<T>(this: Imp<ListOfRecursiveArraysOrValues<T> | null | undefined>): Imp<T[]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.flattenDeep
         */
        flattenDeep<T>(this: Exp<ListOfRecursiveArraysOrValues<T> | null | undefined>): Exp<T[]>;
    }

    // flattenDepth

    interface Stat {
        /**
         * Recursively flatten array up to depth times.
         *
         * @param array The array to recursively flatten.
         * @param number The maximum recursion depth.
         * @return Returns the new flattened array.
         */
        flattenDepth<T>(array: ListOfRecursiveArraysOrValues<T> | null | undefined, depth?: number): T[];
    }

    interface Imp<TValue> {
        /**
         * @see _.flattenDeep
         */
        flattenDepth<T>(this: Imp<ListOfRecursiveArraysOrValues<T> | null | undefined>, depth?: number): Imp<T[]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.flattenDeep
         */
        flattenDepth<T>(this: Exp<ListOfRecursiveArraysOrValues<T> | null | undefined>, depth?: number): Exp<T[]>;
    }

    // fromPairs

    interface Stat {
        /**
         * The inverse of `_.toPairs`; this method returns an object composed
         * from key-value `pairs`.
         *
         * @category Array
         * @param pairs The key-value pairs.
         * @returns Returns the new object.
         * @example
         *
         * _.fromPairs([['fred', 30], ['barney', 40]]);
         * // => { 'fred': 30, 'barney': 40 }
         */
        fromPairs<T>(
            pairs: List<[PropertyName, T]> | null | undefined
        ): Dictionary<T>;

        /**
         @see _.fromPairs
         */
        fromPairs(
            pairs: List<any[]> | null | undefined
        ): Dictionary<any>;
    }

    interface Imp<TValue> {
        /**
         * @see _.fromPairs
         */
        fromPairs<T>(
          this: Imp<List<[PropertyName, T]> | null | undefined>
        ): Imp<Dictionary<T>>;

        /**
         @see _.fromPairs
         */
        fromPairs(
            this: Imp<List<any[]> | null | undefined>
        ): Imp<Dictionary<any>>;
    }

    interface Exp<TValue> {
        /**
         * @see _.fromPairs
         */
        fromPairs<T>(
          this: Exp<List<[PropertyName, T]> | null | undefined>
        ): Exp<Dictionary<T>>;

        /**
         @see _.fromPairs
         */
        fromPairs(
            this: Exp<List<any[]> | null | undefined>
        ): Exp<Dictionary<any>>;
    }

    // head

    interface Stat {
        /**
         * Gets the first element of array.
         *
         * @alias _.first
         *
         * @param array The array to query.
         * @return Returns the first element of array.
         */
        head<T>(array: List<T> | null | undefined): T | undefined;
    }

    interface Imp<TValue> {
        /**
         * @see _.head
         */
        head<T>(this: Imp<List<T> | null | undefined>): T | undefined;
    }

    interface Exp<TValue> {
        /**
         * @see _.head
         */
        head<T>(this: Exp<List<T> | null | undefined>): Exp<T | undefined>;
    }

    // indexOf

    interface Stat {
        /**
         * Gets the index at which the first occurrence of `value` is found in `array`
         * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
         * for equality comparisons. If `fromIndex` is negative, it's used as the offset
         * from the end of `array`.
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
            fromIndex?: number
        ): number;
    }

    interface Imp<TValue> {
        /**
         * @see _.indexOf
         */
        indexOf<T>(
            this: Imp<List<T> | null | undefined>,
            value: T,
            fromIndex?: number
        ): number;
    }

    interface Exp<TValue> {
        /**
         * @see _.indexOf
         */
        indexOf<T>(
            this: Exp<List<T> | null | undefined>,
            value: T,
            fromIndex?: number
        ): Exp<number>;
    }

    // initial

    interface Stat {
        /**
         * Gets all but the last element of array.
         *
         * @param array The array to query.
         * @return Returns the slice of array.
         */
        initial<T>(array: List<T> | null | undefined): T[];
    }

    interface Imp<TValue> {
        /**
         * @see _.initial
         */
        initial<T>(this: Imp<List<T> | null | undefined>): Imp<T[]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.initial
         */
        initial<T>(this: Exp<List<T> | null | undefined>): Exp<T[]>;
    }

    // intersection

    interface Stat {
        /**
         * Creates an array of unique values that are included in all of the provided arrays using SameValueZero for
         * equality comparisons.
         *
         * @param arrays The arrays to inspect.
         * @return Returns the new array of shared values.
         */
        intersection<T>(...arrays: Array<List<T>>): T[];
    }

    interface Imp<TValue> {
        /**
         * @see _.intersection
         */
        intersection<T>(
            this: Imp<List<T>>,
            ...arrays: Array<List<T>>
        ): Imp<T[]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.intersection
         */
        intersection<T>(
            this: Exp<List<T>>,
            ...arrays: Array<List<T>>
        ): Exp<T[]>;
    }

    // intersectionBy

    interface Stat {
        /**
         * This method is like `_.intersection` except that it accepts `iteratee`
         * which is invoked for each element of each `arrays` to generate the criterion
         * by which uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the new array of shared values.
         * @example
         *
         * _.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor);
         * // => [2.1]
         *
         * // using the `_.property` iteratee shorthand
         * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
         * // => [{ 'x': 1 }]
         */
        intersectionBy<T1, T2>(
            array: List<T1> | null,
            values: List<T2>,
            iteratee: ValueIteratee<T1 | T2>
        ): T1[];

        /**
         * @see _.intersectionBy
         */
        intersectionBy<T1, T2, T3>(
            array: List<T1> | null,
            values1: List<T2>,
            values2: List<T3>,
            iteratee: ValueIteratee<T1 | T2 | T3>
        ): T1[];

        /**
         * @see _.intersectionBy
         */
        intersectionBy<T1, T2, T3, T4>(
            array: List<T1> | null | undefined,
            values1: List<T2>,
            values2: List<T3>,
            ...values: Array<List<T4> | ValueIteratee<T1 | T2 | T3 | T4>>
        ): T1[];

        /**
         * @see _.intersectionBy
         */
        intersectionBy<T>(
            array?: List<T> | null,
            ...values: Array<List<T>>
        ): T[];
    }

    interface Imp<TValue> {
        /**
         * @see _.intersectionBy
         */
        intersectionBy<T1, T2>(
            this: Imp<List<T1> | null | undefined>,
            values: List<T2>,
            iteratee: ValueIteratee<T1 | T2>
        ): Imp<T1[]>;

        /**
         * @see _.intersectionBy
         */
        intersectionBy<T1, T2, T3>(
            this: Imp<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            iteratee: ValueIteratee<T1 | T2 | T3>
        ): Imp<T1[]>;

        /**
         * @see _.intersectionBy
         */
        intersectionBy<T1, T2, T3, T4>(
            this: Imp<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            ...values: Array<List<T4> | ValueIteratee<T1 | T2 | T3 | T4>>
        ): Imp<T1[]>;

        /**
         * @see _.intersectionBy
         */
        intersectionBy<T>(
            this: Imp<List<T> | null | undefined>,
            ...values: Array<List<T>>
        ): Imp<T[]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.intersectionBy
         */
        intersectionBy<T1, T2>(
            this: Exp<List<T1> | null | undefined>,
            values: List<T2>,
            iteratee: ValueIteratee<T1 | T2>
        ): Exp<T1[]>;

        /**
         * @see _.intersectionBy
         */
        intersectionBy<T1, T2, T3>(
            this: Exp<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            iteratee: ValueIteratee<T1 | T2 | T3>
        ): Exp<T1[]>;

        /**
         * @see _.intersectionBy
         */
        intersectionBy<T1, T2, T3, T4>(
            this: Exp<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            ...values: Array<List<T4> | ValueIteratee<T1 | T2 | T3 | T4>>
        ): Exp<T1[]>;

        /**
         * @see _.intersectionBy
         */
        intersectionBy<T>(
            this: Exp<List<T> | null | undefined>,
            ...values: Array<List<T>>
        ): Exp<T[]>;
    }

    // intersectionWith

    interface Stat {
        /**
         * Creates an array of unique `array` values not included in the other
         * provided arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
         * for equality comparisons.
         *
         * @category Array
         * @param [values] The arrays to inspect.
         * @param [comparator] The comparator invoked per element.
         * @returns Returns the new array of filtered values.
         * @example
         *
         * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
         * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

         * _.intersectionWith(objects, others, _.isEqual);
         * // => [{ 'x': 1, 'y': 2 }]
         */
        intersectionWith<T1, T2>(
            array: List<T1> | null | undefined,
            values: List<T2>,
            comparator: Comparator2<T1, T2>
        ): T1[];

        /**
         * @see _.intersectionWith
         */
        intersectionWith<T1, T2, T3>(
            array: List<T1> | null | undefined,
            values1: List<T2>,
            values2: List<T3>,
            comparator: Comparator2<T1, T2 | T3>
        ): T1[];

        /**
         * @see _.intersectionWith
         */
        intersectionWith<T1, T2, T3, T4>(
            array: List<T1> | null | undefined,
            values1: List<T2>,
            values2: List<T3>,
            ...values: Array<List<T4> | Comparator2<T1, T2 | T3 | T4>>
        ): T1[];

        /**
         * @see _.intersectionWith
         */
        intersectionWith<T>(
            array?: List<T> | null,
            ...values: Array<List<T>>
        ): T[];
    }

    interface Imp<TValue> {
        /**
         * @see _.intersectionWith
         */
        intersectionWith<T1, T2>(
            this: Imp<List<T1> | null | undefined>,
            values: List<T2>,
            comparator: Comparator2<T1, T2>
        ): Imp<T1[]>;

        /**
         * @see _.intersectionWith
         */
        intersectionWith<T1, T2, T3>(
            this: Imp<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            comparator: Comparator2<T1, T2 | T3>
        ): Imp<T1[]>;

        /**
         * @see _.intersectionWith
         */
        intersectionWith<T1, T2, T3, T4>(
            this: Imp<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            ...values: Array<List<T4> | Comparator2<T1, T2 | T3 | T4>>
        ): Imp<T1[]>;

        /**
         * @see _.intersectionWith
         */
        intersectionWith<T>(
            this: Imp<List<T> | null | undefined>,
            ...values: Array<List<T>>
        ): Imp<T[]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.intersectionWith
         */
        intersectionWith<T1, T2>(
            this: Exp<List<T1> | null | undefined>,
            values: List<T2>,
            comparator: Comparator2<T1, T2>
        ): Exp<T1[]>;

        /**
         * @see _.intersectionWith
         */
        intersectionWith<T1, T2, T3>(
            this: Exp<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            comparator: Comparator2<T1, T2 | T3>
        ): Exp<T1[]>;

        /**
         * @see _.intersectionWith
         */
        intersectionWith<T1, T2, T3, T4>(
            this: Exp<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            ...values: Array<List<T4> | Comparator2<T1, T2 | T3 | T4>>
        ): Exp<T1[]>;

        /**
         * @see _.intersectionWith
         */
        intersectionWith<T>(
            this: Exp<List<T> | null | undefined>,
            ...values: Array<List<T>>
        ): Exp<T[]>;
    }

    // join

    interface Stat {
        /**
         * Converts all elements in `array` into a string separated by `separator`.
         *
         * @param array The array to convert.
         * @param separator The element separator.
         * @returns Returns the joined string.
         */
        join(
            array: List<any> | null | undefined,
            separator?: string
        ): string;
    }

    interface Imp<TValue> {
        /**
         * @see _.join
         */
        join(separator?: string): string;
    }

    interface Exp<TValue> {
        /**
         * @see _.join
         */
        join(separator?: string): Exp<string>;
    }

    // last

    interface Stat {
        /**
         * Gets the last element of array.
         *
         * @param array The array to query.
         * @return Returns the last element of array.
         */
        last<T>(array: List<T> | null | undefined): T | undefined;
    }

    interface Imp<TValue> {
        /**
         * @see _.last
         */
        last<T>(this: Imp<List<T> | null | undefined>): T | undefined;
    }

    interface Exp<TValue> {
        /**
         * @see _.last
         */
        last<T>(this: Exp<List<T> | null | undefined>): Exp<T | undefined>;
    }

    // lastIndexOf

    interface Stat {
        /**
         * This method is like _.indexOf except that it iterates over elements of array from right to left.
         *
         * @param array The array to search.
         * @param value The value to search for.
         * @param fromIndex The index to search from or true to perform a binary search on a sorted array.
         * @return Returns the index of the matched value, else -1.
         */
        lastIndexOf<T>(
            array: List<T> | null | undefined,
            value: T,
            fromIndex?: true|number
        ): number;
    }

    interface Imp<TValue> {
        /**
         * @see _.indexOf
         */
        lastIndexOf<T>(
            this: Imp<List<T> | null | undefined>,
            value: T,
            fromIndex?: true|number
        ): number;
    }

    interface Exp<TValue> {
        /**
         * @see _.indexOf
         */
        lastIndexOf<T>(
            this: Exp<List<T> | null | undefined>,
            value: T,
            fromIndex?: true|number
        ): Exp<number>;
    }

    // nth

    interface Stat {
        /**
         * Gets the element at index `n` of `array`. If `n` is negative, the nth element from the end is returned.
         *
         * @param array array The array to query.
         * @param value The index of the element to return.
         * @return Returns the nth element of `array`.
         */
        nth<T>(
            array: List<T> | null | undefined,
            n?: number
        ): T | undefined;
    }

    interface Imp<TValue> {
        /**
         * @see _.nth
         */
        nth<T>(
            this: Imp<List<T> | null | undefined>,
            n?: number
        ): T | undefined;
    }

    interface Exp<TValue> {
        /**
         * @see _.nth
         */
        nth<T>(
            this: Exp<List<T> | null | undefined>,
            n?: number
        ): Exp<T | undefined>;
    }

    // pull

    interface Stat {
        /**
         * Removes all provided values from array using SameValueZero for equality comparisons.
         *
         * Note: Unlike _.without, this method mutates array.
         *
         * @param array The array to modify.
         * @param values The values to remove.
         * @return Returns array.
         */
        pull<T>(
            array: T[],
            ...values: T[]
        ): T[];

        /**
         * @see _.pull
         */
        pull<T>(
            array: List<T>,
            ...values: T[]
        ): List<T>;
    }

    interface Imp<TValue> {
        /**
         * @see _.pull
         */
        pull<T>(
            this: Imp<List<T>>,
            ...values: T[]
        ): this;
    }

    interface Exp<TValue> {
        /**
         * @see _.pull
         */
        pull<T>(
            this: Exp<List<T>>,
            ...values: T[]
        ): this;
    }

    // pullAll

    interface Stat {
        /**
         * This method is like `_.pull` except that it accepts an array of values to remove.
         *
         * **Note:** Unlike `_.difference`, this method mutates `array`.
         *
         * @category Array
         * @param array The array to modify.
         * @param values The values to remove.
         * @returns Returns `array`.
         * @example
         *
         * var array = [1, 2, 3, 1, 2, 3];
         *
         * _.pull(array, [2, 3]);
         * console.log(array);
         * // => [1, 1]
         */
        pullAll<T>(
            array: T[],
            values?: List<T>,
        ): T[];

        /**
         * @see _.pullAll
         */
        pullAll<T>(
            array: List<T>,
            values?: List<T>,
        ): List<T>;
    }

    interface Imp<TValue> {
        /**
         * @see _.pullAll
         */
        pullAll<T>(
            this: Imp<List<T>>,
            values?: List<T>
        ): this;
    }

    interface Exp<TValue> {
        /**
         * @see _.pullAll
         */
        pullAll<T>(
            this: Exp<List<T>>,
            values?: List<T>
        ): this;
    }

    // pullAllBy

    interface Stat {
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

    // pullAllWith

    interface Stat {
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

    // pullAt

    interface Stat {
        /**
         * Removes elements from array corresponding to the given indexes and returns an array of the removed elements.
         * Indexes may be specified as an array of indexes or as individual arguments.
         *
         * Note: Unlike _.at, this method mutates array.
         *
         * @param array The array to modify.
         * @param indexes The indexes of elements to remove, specified as individual indexes or arrays of indexes.
         * @return Returns the new array of removed elements.
         */
        pullAt<T>(
            array: T[],
            ...indexes: Array<Many<number>>
        ): T[];

        /**
         * @see _.pullAt
         */
        pullAt<T>(
            array: List<T>,
            ...indexes: Array<Many<number>>
        ): List<T>;
    }

    interface LoDashWrapper<TValue> {
        /**
         * @see _.pullAt
         */
        pullAt(...indexes: Array<Many<number>>): this;
    }

    // remove

    interface Stat {
        /**
         * Removes all elements from array that predicate returns truthy for and returns an array of the removed
         * elements. The predicate is invoked with three arguments: (value, index, array).
         *
         * Note: Unlike _.filter, this method mutates array.
         *
         * @param array The array to modify.
         * @param predicate The function invoked per iteration.
         * @return Returns the new array of removed elements.
         */
        remove<T>(
            array: List<T>,
            predicate?: ListIteratee<T>
        ): T[];
    }

    interface Imp<TValue> {
        /**
         * @see _.remove
         */
        remove<T>(
            this: Imp<List<T>>,
            predicate?: ListIteratee<T>
        ): Imp<T[]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.remove
         */
        remove<T>(
            this: Exp<List<T>>,
            predicate?: ListIteratee<T>
        ): Exp<T[]>;
    }

    // reverse

    interface Stat {
        /**
         * Reverses `array` so that the first element becomes the last, the second
         * element becomes the second to last, and so on.
         *
         * **Note:** This method mutates `array` and is based on
         * [`Array#reverse`](https://mdn.io/Array/reverse).
         *
         * @category Array
         * @returns Returns `array`.
         * @example
         *
         * var array = [1, 2, 3];
         *
         * _.reverse(array);
         * // => [3, 2, 1]
         *
         * console.log(array);
         * // => [3, 2, 1]
         */
        reverse<TList extends List<any>>(
            array: TList,
        ): TList;
    }

    // slice

    interface Stat {
        /**
         * Creates a slice of array from start up to, but not including, end.
         *
         * @param array The array to slice.
         * @param start The start position.
         * @param end The end position.
         * @return Returns the slice of array.
         */
        slice<T>(
            array: List<T> | null | undefined,
            start?: number,
            end?: number
        ): T[];
    }

    interface Imp<TValue> {
        /**
         * @see _.slice
         */
        slice<T>(
            this: Imp<List<T> | null | undefined>,
            start?: number,
            end?: number
        ): Imp<T[]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.slice
         */
        slice<T>(
            this: Exp<List<T> | null | undefined>,
            start?: number,
            end?: number
        ): Exp<T[]>;
    }

    // sortedIndex

    interface Stat {
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

    interface Imp<TValue> {
        /**
         * @see _.sortedIndex
         */
        sortedIndex<T>(
            this: Imp<List<T> | null | undefined>,
            value: T
        ): number;
    }

    interface Exp<TValue> {
        /**
         * @see _.sortedIndex
         */
        sortedIndex<T>(
            this: Exp<List<T> | null | undefined>,
            value: T
        ): Exp<number>;
    }

    // sortedIndexBy

    interface Stat {
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

    interface Imp<TValue> {
        /**
         * @see _.sortedIndex
         */
        sortedIndex<T>(
            this: Imp<List<T> | null | undefined>,
            value: T
        ): number;
    }

    interface Exp<TValue> {
        /**
         * @see _.sortedIndex
         */
        sortedIndex<T>(
            this: Exp<List<T> | null | undefined>,
            value: T
        ): Exp<number>;
    }

    // _.sortedIndexBy
    interface Stat {
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

    interface Imp<TValue> {
        /**
         * @see _.sortedIndexBy
         */
        sortedIndexBy<T>(
            this: Imp<List<T> | null | undefined>,
            value: T,
            iteratee?: ValueIteratee<T>
        ): number;
    }

    interface Exp<TValue> {
        /**
         * @see _.sortedIndexBy
         */
        sortedIndexBy<T>(
            this: Exp<List<T> | null | undefined>,
            value: T,
            iteratee?: ValueIteratee<T>
        ): Exp<number>;
    }

    // sortedIndexOf

    interface Stat {
        /**
         * This method is like `_.indexOf` except that it performs a binary
         * search on a sorted `array`.
         *
         * @category Array
         * @param array The array to search.
         * @param value The value to search for.
         * @returns Returns the index of the matched value, else `-1`.
         * @example
         *
         * _.sortedIndexOf([1, 1, 2, 2], 2);
         * // => 2
         */
        sortedIndexOf<T>(
            array: List<T> | null | undefined,
            value: T
        ): number;
    }

    interface Imp<TValue> {
        /**
         * @see _.sortedIndexOf
         */
        sortedIndexOf<T>(
            this: Imp<List<T> | null | undefined>,
            value: T
        ): number;
    }

    interface Exp<TValue> {
        /**
         * @see _.sortedIndexOf
         */
        sortedIndexOf<T>(
            this: Exp<List<T> | null | undefined>,
            value: T
        ): Exp<number>;
    }

    // sortedLastIndex

    interface Stat {
        /**
         * This method is like `_.sortedIndex` except that it returns the highest
         * index at which `value` should be inserted into `array` in order to
         * maintain its sort order.
         *
         * @category Array
         * @param array The sorted array to inspect.
         * @param value The value to evaluate.
         * @returns Returns the index at which `value` should be inserted into `array`.
         * @example
         *
         * _.sortedLastIndex([4, 5], 4);
         * // => 1
         */
        sortedLastIndex<T>(
            array: List<T> | null | undefined,
            value: T
        ): number;
    }

    interface Imp<TValue> {
        /**
         * @see _.sortedLastIndex
         */
        sortedLastIndex<T>(
            this: Imp<List<T> | null | undefined>,
            value: T
        ): number;
    }

    interface Exp<TValue> {
        /**
         * @see _.sortedLastIndex
         */
        sortedLastIndex<T>(
            this: Exp<List<T> | null | undefined>,
            value: T
        ): Exp<number>;
    }

    // sortedLastIndexBy

    interface Stat {
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

    interface Imp<TValue> {
        /**
         * @see _.sortedLastIndexBy
         */
        sortedLastIndexBy<T>(
            this: Imp<List<T> | null | undefined>,
            value: T,
            iteratee: ValueIteratee<T>
        ): number;
    }

    interface Exp<TValue> {
        /**
         * @see _.sortedLastIndexBy
         */
        sortedLastIndexBy<T>(
            this: Exp<List<T> | null | undefined>,
            value: T,
            iteratee: ValueIteratee<T>
        ): Exp<number>;
    }

    // sortedLastIndexOf

    interface Stat {
        /**
         * This method is like `_.lastIndexOf` except that it performs a binary
         * search on a sorted `array`.
         *
         * @category Array
         * @param array The array to search.
         * @param value The value to search for.
         * @returns Returns the index of the matched value, else `-1`.
         * @example
         *
         * _.sortedLastIndexOf([1, 1, 2, 2], 2);
         * // => 3
         */
        sortedLastIndexOf<T>(
            array: List<T> | null | undefined,
            value: T
        ): number;
    }

    interface Imp<TValue> {
        /**
         * @see _.sortedLastIndexOf
         */
        sortedLastIndexOf<T>(
            this: Imp<List<T> | null | undefined>,
            value: T
        ): number;
    }

    interface Exp<TValue> {
        /**
         * @see _.sortedLastIndexOf
         */
        sortedLastIndexOf<T>(
            this: Exp<List<T> | null | undefined>,
            value: T
        ): Exp<number>;
    }

    // sortedUniq

    interface Stat {
        /**
         * This method is like `_.uniq` except that it's designed and optimized
         * for sorted arrays.
         *
         * @category Array
         * @param array The array to inspect.
         * @returns Returns the new duplicate free array.
         * @example
         *
         * _.sortedUniq([1, 1, 2]);
         * // => [1, 2]
         */
        sortedUniq<T>(
            array: List<T> | null | undefined
        ): T[];
    }

    interface Imp<TValue> {
        /**
         * @see _.sortedUniq
         */
        sortedUniq<T>(this: Imp<List<T> | null | undefined>): Imp<T[]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.sortedUniq
         */
        sortedUniq<T>(this: Exp<List<T> | null | undefined>): Exp<T[]>;
    }

    // sortedUniqBy

    interface Stat {
        /**
         * This method is like `_.uniqBy` except that it's designed and optimized
         * for sorted arrays.
         *
         * @category Array
         * @param array The array to inspect.
         * @param [iteratee] The iteratee invoked per element.
         * @returns Returns the new duplicate free array.
         * @example
         *
         * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
         * // => [1.1, 2.2]
         */
        sortedUniqBy<T>(
            array: List<T> | null | undefined,
            iteratee: ValueIteratee<T>
        ): T[];
    }

    interface Imp<TValue> {
        /**
         * @see _.sortedUniqBy
         */
        sortedUniqBy<T>(
            this: Imp<List<T> | null | undefined>,
            iteratee: ValueIteratee<T>
        ): Imp<T[]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.sortedUniqBy
         */
        sortedUniqBy<T>(
            this: Exp<List<T> | null | undefined>,
            iteratee: ValueIteratee<T>
        ): Exp<T[]>;
    }

    // tail

    interface Stat {
        /**
         * Gets all but the first element of array.
         *
         * @param array The array to query.
         * @return Returns the slice of array.
         */
        tail<T>(array: List<T> | null | undefined): T[];
    }

    interface Imp<TValue> {
        /**
         * @see _.tail
         */
        tail<T>(this: Imp<List<T> | null | undefined>): Imp<T[]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.tail
         */
        tail<T>(this: Exp<List<T> | null | undefined>): Exp<T[]>;
    }

    // take

    interface Stat {
        /**
         * Creates a slice of array with n elements taken from the beginning.
         *
         * @param array The array to query.
         * @param n The number of elements to take.
         * @return Returns the slice of array.
         */
        take<T>(
            array: List<T> | null | undefined,
            n?: number
        ): T[];
    }

    interface Imp<TValue> {
        /**
         * @see _.take
         */
        take<T>(
            this: Imp<List<T> | null | undefined>,
            n?: number
        ): Imp<T[]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.take
         */
        take<T>(
            this: Exp<List<T> | null | undefined>,
            n?: number
        ): Exp<T[]>;
    }

    // takeRight

    interface Stat {
        /**
         * Creates a slice of array with n elements taken from the end.
         *
         * @param array The array to query.
         * @param n The number of elements to take.
         * @return Returns the slice of array.
         */
        takeRight<T>(
            array: List<T> | null | undefined,
            n?: number
        ): T[];
    }

    interface Imp<TValue> {
        /**
         * @see _.takeRight
         */
        takeRight<T>(
            this: Imp<List<T> | null | undefined>,
            n?: number
        ): Imp<T[]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.takeRight
         */
        takeRight<T>(
            this: Exp<List<T> | null | undefined>,
            n?: number
        ): Exp<T[]>;
    }

    // takeRightWhile

    interface Stat {
        /**
         * Creates a slice of array with elements taken from the end. Elements are taken until predicate returns
         * falsey. The predicate is invoked with three arguments: (value, index, array).
         *
         * @param array The array to query.
         * @param predicate The function invoked per iteration.
         * @return Returns the slice of array.
         */
        takeRightWhile<T>(
            array: List<T> | null | undefined,
            predicate?: ListIteratee<T>
        ): T[];
    }

    interface Imp<TValue> {
        /**
         * @see _.takeRightWhile
         */
        takeRightWhile<T>(
            this: Imp<List<T> | null | undefined>,
            predicate?: ListIteratee<T>
        ): Imp<T[]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.takeRightWhile
         */
        takeRightWhile<T>(
            this: Exp<List<T> | null | undefined>,
            predicate?: ListIteratee<T>
        ): Exp<T[]>;
    }

    // takeWhile

    interface Stat {
        /**
         * Creates a slice of array with elements taken from the beginning. Elements are taken until predicate returns
         * falsey. The predicate is invoked with three arguments: (value, index, array).
         *
         * @param array The array to query.
         * @param predicate The function invoked per iteration.
         * @return Returns the slice of array.
         */
        takeWhile<T>(
            array: List<T> | null | undefined,
            predicate?: ListIteratee<T>
        ): T[];
    }

    interface Imp<TValue> {
        /**
         * @see _.takeWhile
         */
        takeWhile<T>(
            this: Imp<List<T> | null | undefined>,
            predicate?: ListIteratee<T>
        ): Imp<T[]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.takeWhile
         */
        takeWhile<T>(
            this: Exp<List<T> | null | undefined>,
            predicate?: ListIteratee<T>
        ): Exp<T[]>;
    }

    // union

    interface Stat {
        /**
         * Creates an array of unique values, in order, from all of the provided arrays using SameValueZero for
         * equality comparisons.
         *
         * @param arrays The arrays to inspect.
         * @return Returns the new array of combined values.
         */
        union<T>(...arrays: Array<List<T> | null | undefined>): T[];
    }

    interface Imp<TValue> {
        /**
         * @see _.union
         */
        union<T>(
            this: Imp<List<T> | null | undefined>,
            ...arrays: Array<List<T> | null | undefined>
        ): Imp<T[]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.union
         */
        union<T>(
            this: Exp<List<T> | null | undefined>,
            ...arrays: Array<List<T> | null | undefined>
        ): Exp<T[]>;
    }

    // unionBy

    interface Stat {
        /**
         * This method is like `_.union` except that it accepts `iteratee` which is
         * invoked for each element of each `arrays` to generate the criterion by which
         * uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * @param arrays The arrays to inspect.
         * @param iteratee The iteratee invoked per element.
         * @return Returns the new array of combined values.
         */
        unionBy<T>(
            arrays: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): T[];

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            arrays1: List<T> | null | undefined,
            arrays2: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): T[];

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            arrays1: List<T> | null | undefined,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): T[];

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            arrays1: List<T> | null | undefined,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            arrays4: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): T[];

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            arrays1: List<T> | null | undefined,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            arrays4: List<T> | null | undefined,
            arrays5: List<T> | null | undefined,
            ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>
        ): T[];
    }

    interface Imp<TValue> {
        /**
         * @see _.unionBy
         */
        unionBy<T>(
            this: Imp<List<T> | null | undefined>,
            iteratee?: ValueIteratee<T>
        ): Imp<T[]>;

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            this: Imp<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): Imp<T[]>;

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            this: Imp<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): Imp<T[]>;

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            this: Imp<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            arrays4: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): Imp<T[]>;

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            this: Imp<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            arrays4: List<T> | null | undefined,
            arrays5: List<T> | null | undefined,
            ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>
        ): Imp<T[]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.unionBy
         */
        unionBy<T>(
            this: Exp<List<T> | null | undefined>,
            iteratee?: ValueIteratee<T>
        ): Exp<T[]>;

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            this: Exp<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): Exp<T[]>;

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            this: Exp<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): Exp<T[]>;

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            this: Exp<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            arrays4: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): Exp<T[]>;

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            this: Exp<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            arrays4: List<T> | null | undefined,
            arrays5: List<T> | null | undefined,
            ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>
        ): Exp<T[]>;
    }

    // unionWith

    interface Stat {
        /**
         * This method is like `_.union` except that it accepts `comparator` which
         * is invoked to compare elements of `arrays`. The comparator is invoked
         * with two arguments: (arrVal, othVal).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [comparator] The comparator invoked per element.
         * @returns Returns the new array of combined values.
         * @example
         *
         * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
         * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
         *
         * _.unionWith(objects, others, _.isEqual);
         * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
         */
        unionWith<T>(
            arrays: List<T> | null | undefined,
            comparator?: Comparator<T>
        ): T[];

        /**
         * @see _.unionBy
         */
        unionWith<T>(
            arrays: List<T> | null | undefined,
            arrays2: List<T> | null | undefined,
            comparator?: Comparator<T>
        ): T[];

        /**
         * @see _.unionWith
         */
        unionWith<T>(
            arrays: List<T> | null | undefined,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            ...comparator: Array<Comparator<T> | List<T> | null | undefined>
        ): T[];
    }

    interface Imp<TValue> {
        /**
         * @see _.unionWith
         */
        unionWith<T>(
            this: Imp<List<T> | null | undefined>,
            comparator?: Comparator<T>
        ): Imp<T[]>;

        /**
         * @see _.unionWith
         */
        unionWith<T>(
            this: Imp<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            comparator?: Comparator<T>
        ): Imp<T[]>;

        /**
         * @see _.unionWith
         */
        unionWith<T>(
            this: Imp<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            ...comparator: Array<Comparator<T> | List<T> | null | undefined>
        ): Imp<T[]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.unionWith
         */
        unionWith<T>(
            this: Exp<List<T> | null | undefined>,
            comparator?: Comparator<T>
        ): Exp<T[]>;

        /**
         * @see _.unionWith
         */
        unionWith<T>(
            this: Exp<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            comparator?: Comparator<T>
        ): Exp<T[]>;

        /**
         * @see _.unionWith
         */
        unionWith<T>(
            this: Exp<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            ...comparator: Array<Comparator<T> | List<T> | null | undefined>
        ): Exp<T[]>;
    }

    // uniq

    interface Stat {
        /**
         * Creates a duplicate-free version of an array, using
         * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
         * for equality comparisons, in which only the first occurrence of each element
         * is kept.
         *
         * @category Array
         * @param array The array to inspect.
         * @returns Returns the new duplicate free array.
         * @example
         *
         * _.uniq([2, 1, 2]);
         * // => [2, 1]
         */
        uniq<T>(
            array: List<T> | null | undefined
        ): T[];
    }

    interface Imp<TValue> {
        /**
         * @see _.uniq
         */
        uniq<T>(this: Imp<List<T> | null | undefined>): Imp<T[]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.uniq
         */
        uniq<T>(this: Exp<List<T> | null | undefined>): Exp<T[]>;
    }

    // uniqBy

    interface Stat {
        /**
         * This method is like `_.uniq` except that it accepts `iteratee` which is
         * invoked for each element in `array` to generate the criterion by which
         * uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param array The array to inspect.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the new duplicate free array.
         * @example
         *
         * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
         * // => [2.1, 1.2]
         *
         * // using the `_.property` iteratee shorthand
         * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
         * // => [{ 'x': 1 }, { 'x': 2 }]
         */
        uniqBy<T>(
            array: List<T> | null | undefined,
            iteratee: ValueIteratee<T>
        ): T[];
    }

    interface Imp<TValue> {
        /**
         * @see _.uniqBy
         */
        uniqBy<T>(
            this: Imp<List<T> | null | undefined>,
            iteratee: ValueIteratee<T>
        ): Imp<T[]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.uniqBy
         */
        uniqBy<T>(
            this: Exp<List<T> | null | undefined>,
            iteratee: ValueIteratee<T>
        ): Exp<T[]>;
    }

    // uniqWith

    interface Stat {
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

    interface Imp<TValue> {
        /**
         * @see _.uniqWith
         */
        uniqWith<T>(
            this: Imp<List<T> | null | undefined>,
            comparator?: Comparator<T>
        ): Imp<T[]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.uniqWith
         */
        uniqWith<T>(
            this: Exp<List<T> | null | undefined>,
            comparator?: Comparator<T>
        ): Exp<T[]>;
    }

    // unzip

    interface Stat {
        /**
         * This method is like _.zip except that it accepts an array of grouped elements and creates an array
         * regrouping the elements to their pre-zip configuration.
         *
         * @param array The array of grouped elements to process.
         * @return Returns the new array of regrouped elements.
         */
        unzip<T>(array: T[][] | List<List<T>> | null | undefined): T[][];
    }

    interface Imp<TValue> {
        /**
         * @see _.unzip
         */
        unzip<T>(this: Imp<T[][] | List<List<T>> | null | undefined>): Imp<T[][]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.unzip
         */
        unzip<T>(this: Exp<T[][] | List<List<T>> | null | undefined>): Exp<T[][]>;
    }

    // unzipWith

    interface Stat {
        /**
         * This method is like _.unzip except that it accepts an iteratee to specify how regrouped values should be
         * combined. The iteratee is invoked with four arguments: (accumulator, value, index, group).
         *
         * @param array The array of grouped elements to process.
         * @param iteratee The function to combine regrouped values.
         * @return Returns the new array of regrouped elements.
         */
        unzipWith<T, TResult>(
            array: List<List<T>> | null | undefined,
            iteratee: (...values: T[]) => TResult
        ): TResult[];

        /**
         * @see _.unzipWith
         */
        unzipWith<T>(
            array: List<List<T>> | null | undefined
        ): T[][];
    }

    interface Imp<TValue> {
        /**
         * @see _.unzipWith
         */
        unzipWith<T, TResult>(
            this: Imp<List<List<T>> | null | undefined>,
            iteratee: (...values: T[]) => TResult
        ): Imp<TResult[]>;

        /**
         * @see _.unzipWith
         */
        unzipWith<T>(
            this: Imp<List<List<T>> | null | undefined>
        ): Imp<T[][]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.unzipWith
         */
        unzipWith<T, TResult>(
            this: Exp<List<List<T>> | null | undefined>,
            iteratee: (...values: T[]) => TResult
        ): Exp<TResult[]>;

        /**
         * @see _.unzipWith
         */
        unzipWith<T>(
            this: Exp<List<List<T>> | null | undefined>
        ): Exp<T[][]>;
    }

    // without

    interface Stat {
        /**
         * Creates an array excluding all provided values using SameValueZero for equality comparisons.
         *
         * @param array The array to filter.
         * @param values The values to exclude.
         * @return Returns the new array of filtered values.
         */
        without<T>(
            array: List<T> | null | undefined,
            ...values: T[]
        ): T[];
    }

    interface Imp<TValue> {
        /**
         * @see _.without
         */
        without<T>(
            this: Imp<List<T> | null | undefined>,
            ...values: T[]
        ): Imp<T[]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.without
         */
        without<T>(
            this: Exp<List<T> | null | undefined>,
            ...values: T[]
        ): Exp<T[]>;
    }

    // xor

    interface Stat {
        /**
         * Creates an array of unique values that is the symmetric difference of the provided arrays.
         *
         * @param arrays The arrays to inspect.
         * @return Returns the new array of values.
         */
        xor<T>(...arrays: Array<List<T> | null | undefined>): T[];
    }

    interface Imp<TValue> {
        /**
         * @see _.xor
         */
        xor<T>(
            this: Imp<List<T> | null | undefined>,
            ...arrays: Array<List<T> | null | undefined>
        ): Imp<T[]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.xor
         */
        xor<T>(
            this: Exp<List<T> | null | undefined>,
            ...arrays: Array<List<T> | null | undefined>
        ): Exp<T[]>;
    }

    // xorBy

    interface Stat {
        /**
         * This method is like `_.xor` except that it accepts `iteratee` which is
         * invoked for each element of each `arrays` to generate the criterion by which
         * uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param [arrays] The arrays to inspect.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the new array of values.
         * @example
         *
         * _.xorBy([2.1, 1.2], [4.3, 2.4], Math.floor);
         * // => [1.2, 4.3]
         *
         * // using the `_.property` iteratee shorthand
         * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
         * // => [{ 'x': 2 }]
         */
        xorBy<T>(
            arrays: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): T[];

        /**
         * @see _.xorBy
         */
        xorBy<T>(
            arrays: List<T> | null | undefined,
            arrays2: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): T[];

        /**
         * @see _.xorBy
         */
        xorBy<T>(
            arrays: List<T> | null | undefined,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>
        ): T[];
    }

    interface Imp<TValue> {
        /**
         * @see _.xor
         */
        xorBy<T>(
            this: Imp<List<T> | null | undefined>,
            iteratee?: ValueIteratee<T>
        ): Imp<T[]>;

        /**
         * @see _.xorBy
         */
        xorBy<T>(
            this: Imp<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): Imp<T[]>;

        /**
         * @see _.xorBy
         */
        xorBy<T>(
            this: Imp<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>
        ): Imp<T[]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.xorBy
         */
        xorBy<T>(
            this: Exp<List<T> | null | undefined>,
            iteratee?: ValueIteratee<T>
        ): Exp<T[]>;

        /**
         * @see _.xorBy
         */
        xorBy<T>(
            this: Exp<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): Exp<T[]>;

        /**
         * @see _.xorBy
         */
        xorBy<T>(
            this: Exp<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>
        ): Exp<T[]>;
    }

    // xorWith

    interface Stat {
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
        xorWith<T>(
            arrays: List<T> | null | undefined,
            comparator?: Comparator<T>
        ): T[];

        /**
         * @see _.xorWith
         */
        xorWith<T>(
            arrays: List<T> | null | undefined,
            arrays2: List<T> | null | undefined,
            comparator?: Comparator<T>
        ): T[];

        /**
         * @see _.xorWith
         */
        xorWith<T>(
            arrays: List<T> | null | undefined,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            ...comparator: Array<Comparator<T> | List<T> | null | undefined>
        ): T[];
    }

    interface Imp<TValue> {
        /**
         * @see _.xorWith
         */
        xorWith<T>(
            this: Imp<List<T> | null | undefined>,
            comparator?: Comparator<T>
        ): Imp<T[]>;

        /**
         * @see _.xorWith
         */
        xorWith<T>(
            this: Imp<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            comparator?: Comparator<T>
        ): Imp<T[]>;

        /**
         * @see _.xorWith
         */
        xorWith<T>(
            this: Imp<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            ...comparator: Array<Comparator<T> | List<T> | null | undefined>
        ): Imp<T[]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.xorWith
         */
        xorWith<T>(
            this: Exp<List<T> | null | undefined>,
            comparator?: Comparator<T>
        ): Exp<T[]>;

        /**
         * @see _.xorWith
         */
        xorWith<T>(
            this: Exp<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            comparator?: Comparator<T>
        ): Exp<T[]>;

        /**
         * @see _.xorWith
         */
        xorWith<T>(
            this: Exp<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            ...comparator: Array<Comparator<T> | List<T> | null | undefined>
        ): Exp<T[]>;
    }

    // zip

    interface Stat {
        /**
         * Creates an array of grouped elements, the first of which contains the first elements of the given arrays,
         * the second of which contains the second elements of the given arrays, and so on.
         *
         * @param arrays The arrays to process.
         * @return Returns the new array of grouped elements.
         */
        zip<T1, T2>(arrays1: List<T1>, arrays2: List<T2>): Array<[T1 | undefined, T2 | undefined]>;

        /**
         * @see _.zip
         */
        zip<T1, T2, T3>(arrays1: List<T1>, arrays2: List<T2>, arrays3: List<T3>): Array<[T1 | undefined, T2 | undefined, T3 | undefined]>;

        /**
         * @see _.zip
         */
        zip<T1, T2, T3, T4>(arrays1: List<T1>, arrays2: List<T2>, arrays3: List<T3>, arrays4: List<T4>): Array<[T1 | undefined, T2 | undefined, T3 | undefined, T4 | undefined]>;

        /**
         * @see _.zip
         */
        zip<T1, T2, T3, T4, T5>(arrays1: List<T1>, arrays2: List<T2>, arrays3: List<T3>, arrays4: List<T4>, arrays5: List<T5>): Array<[T1 | undefined, T2 | undefined, T3 | undefined, T4 | undefined, T5 | undefined]>;

        /**
         * @see _.zip
         */
        zip<T>(...arrays: Array<List<T> | null | undefined>): Array<Array<T | undefined>>;
    }

    interface Imp<TValue> {
        /**
         * @see _.zip
         */
        zip<T1, T2>(
            this: Imp<List<T1>>,
            arrays2: List<T2>,
        ): Imp<Array<[T1 | undefined, T2 | undefined]>>;

        /**
         * @see _.zip
         */
        zip<T1, T2, T3>(
            this: Imp<List<T1>>,
            arrays2: List<T2>,
            arrays3: List<T3>,
        ): Imp<Array<[T1 | undefined, T2 | undefined, T3 | undefined]>>;

        /**
         * @see _.zip
         */
        zip<T1, T2, T3, T4>(
            this: Imp<List<T1>>,
            arrays2: List<T2>,
            arrays3: List<T3>,
            arrays4: List<T4>,
        ): Imp<Array<[T1 | undefined, T2 | undefined, T3 | undefined, T4 | undefined]>>;

        /**
         * @see _.zip
         */
        zip<T1, T2, T3, T4, T5>(
            this: Imp<List<T1>>,
            arrays2: List<T2>,
            arrays3: List<T3>,
            arrays4: List<T4>,
            arrays5: List<T5>,
        ): Imp<Array<[T1 | undefined, T2 | undefined, T3 | undefined, T4 | undefined, T5 | undefined]>>;

        /**
         * @see _.zip
         */
        zip<T>(
            this: Imp<List<T> | null | undefined>,
            ...arrays: Array<List<T> | null | undefined>
        ): Imp<Array<Array<T | undefined>>>;
    }

    interface Exp<TValue> {
        /**
         * @see _.zip
         */
        zip<T1, T2>(
            this: Exp<List<T1>>,
            arrays2: List<T2>,
        ): Exp<Array<[T1 | undefined, T2 | undefined]>>;

        /**
         * @see _.zip
         */
        zip<T1, T2, T3>(
            this: Exp<List<T1>>,
            arrays2: List<T2>,
            arrays3: List<T3>,
        ): Exp<Array<[T1 | undefined, T2 | undefined, T3 | undefined]>>;

        /**
         * @see _.zip
         */
        zip<T1, T2, T3, T4>(
            this: Exp<List<T1>>,
            arrays2: List<T2>,
            arrays3: List<T3>,
            arrays4: List<T4>,
        ): Exp<Array<[T1 | undefined, T2 | undefined, T3 | undefined, T4 | undefined]>>;

        /**
         * @see _.zip
         */
        zip<T1, T2, T3, T4, T5>(
            this: Exp<List<T1>>,
            arrays2: List<T2>,
            arrays3: List<T3>,
            arrays4: List<T4>,
            arrays5: List<T5>,
        ): Exp<Array<[T1 | undefined, T2 | undefined, T3 | undefined, T4 | undefined, T5 | undefined]>>;

        /**
         * @see _.zip
         */
        zip<T>(
            this: Exp<List<T> | null | undefined>,
            ...arrays: Array<List<T> | null | undefined>
        ): Exp<Array<Array<T | undefined>>>;
    }

    // zipObject

    interface Stat {
        /**
         * This method is like _.fromPairs except that it accepts two arrays, one of property
         * identifiers and one of corresponding values.
         *
         * @param props The property names.
         * @param values The property values.
         * @return Returns the new object.
         */
        zipObject<T>(
            props: List<PropertyName>,
            values: List<T>
        ): Dictionary<T>;

        /**
         * @see _.zipObject
         */
        zipObject(
            props?: List<PropertyName>
        ): Dictionary<undefined>;
    }

    interface Imp<TValue> {
        /**
         * @see _.zipObject
         */
        zipObject<T>(
            this: Imp<List<PropertyName>>,
            values: List<T>
        ): Imp<Dictionary<T>>;

        /**
         * @see _.zipObject
         */
        zipObject(
            this: Imp<List<PropertyName>>
        ): Imp<Dictionary<undefined>>;
    }

    interface Exp<TValue> {
        /**
         * @see _.zipObject
         */
        zipObject<T>(
            this: Exp<List<PropertyName>>,
            values: List<T>
        ): Exp<Dictionary<T>>;

        /**
         * @see _.zipObject
         */
        zipObject(
            this: Exp<List<PropertyName>>
        ): Exp<Dictionary<undefined>>;
    }

    // zipObjectDeep

    interface Stat {
        /**
         * This method is like _.zipObject except that it supports property paths.
         *
         * @param paths The property names.
         * @param values The property values.
         * @return Returns the new object.
         */
        zipObjectDeep(
            paths?: List<PropertyPath>,
            values?: List<any>
        ): object;
    }

    interface Imp<TValue> {
        /**
         * @see _.zipObjectDeep
         */
        zipObjectDeep(
            this: Imp<List<PropertyPath>>,
            values?: List<any>
        ): Imp<object>;
    }

    interface Exp<TValue> {
        /**
         * @see _.zipObjectDeep
         */
        zipObjectDeep(
            this: Exp<List<PropertyPath>>,
            values?: List<any>
        ): Exp<object>;
    }

    // zipWith

    interface Stat {
        /**
         * This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
         * combined. The iteratee is invoked with four arguments: (accumulator, value, index,
         * group).
         * @param arrays The arrays to process.
         * @param iteratee The function to combine grouped values.
         * @return Returns the new array of grouped elements.
         */
        zipWith<T, TResult>(
            arrays: List<T>,
            iteratee: (value1: T) => TResult
        ): TResult[];

        /**
         * @see _.zipWith
         */
        zipWith<T1, T2, TResult>(
            arrays1: List<T1>,
            arrays2: List<T2>,
            iteratee: (value1: T1, value2: T2) => TResult
        ): TResult[];

        /**
         * @see _.zipWith
         */
        zipWith<T1, T2, T3, TResult>(
            arrays1: List<T1>,
            arrays2: List<T2>,
            arrays3: List<T3>,
            iteratee: (value1: T1, value2: T2, value3: T3) => TResult
        ): TResult[];

        /**
         * @see _.zipWith
         */
        zipWith<T1, T2, T3, T4, TResult>(
            arrays1: List<T1>,
            arrays2: List<T2>,
            arrays3: List<T3>,
            arrays4: List<T4>,
            iteratee: (value1: T1, value2: T2, value3: T3, value4: T4) => TResult
        ): TResult[];

        /**
         * @see _.zipWith
         */
        zipWith<T1, T2, T3, T4, T5, TResult>(
            arrays1: List<T1>,
            arrays2: List<T2>,
            arrays3: List<T3>,
            arrays4: List<T4>,
            arrays5: List<T5>,
            iteratee: (value1: T1, value2: T2, value3: T3, value4: T4, value5: T5) => TResult
        ): TResult[];

        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            ...iteratee: Array<((...group: T[]) => TResult) | List<T> | null | undefined>
        ): TResult[];
    }

    interface Imp<TValue> {
        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            this: Imp<List<T>>,
            iteratee: (value1: T) => TResult
        ): Imp<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T1, T2, TResult>(
            this: Imp<List<T1>>,
            arrays2: List<T2>,
            iteratee: (value1: T1, value2: T2) => TResult
        ): Imp<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T1, T2, T3, TResult>(
            this: Imp<List<T1>>,
            arrays2: List<T2>,
            arrays3: List<T3>,
            iteratee: (value1: T1, value2: T2, value3: T3) => TResult
        ): Imp<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T1, T2, T3, T4, TResult>(
            this: Imp<List<T1>>,
            arrays2: List<T2>,
            arrays3: List<T3>,
            arrays4: List<T4>,
            iteratee: (value1: T1, value2: T2, value3: T3, value4: T4) => TResult
        ): Imp<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T1, T2, T3, T4, T5, TResult>(
            this: Imp<List<T1>>,
            arrays2: List<T2>,
            arrays3: List<T3>,
            arrays4: List<T4>,
            arrays5: List<T5>,
            iteratee: (value1: T1, value2: T2, value3: T3, value4: T4, value5: T5) => TResult
        ): Imp<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            this: Imp<List<T> | null | undefined>,
            ...iteratee: Array<((...group: T[]) => TResult) | List<T> | null | undefined>
        ): Imp<TResult[]>;
    }

    interface Exp<TValue> {
        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            this: Exp<List<T>>,
            iteratee: (value1: T) => TResult
        ): Exp<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T1, T2, TResult>(
            this: Exp<List<T1>>,
            arrays2: List<T2>,
            iteratee: (value1: T1, value2: T2) => TResult
        ): Exp<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T1, T2, T3, TResult>(
            this: Exp<List<T1>>,
            arrays2: List<T2>,
            arrays3: List<T3>,
            iteratee: (value1: T1, value2: T2, value3: T3) => TResult
        ): Exp<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T1, T2, T3, T4, TResult>(
            this: Exp<List<T1>>,
            arrays2: List<T2>,
            arrays3: List<T3>,
            arrays4: List<T4>,
            iteratee: (value1: T1, value2: T2, value3: T3, value4: T4) => TResult
        ): Exp<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T1, T2, T3, T4, T5, TResult>(
            this: Exp<List<T1>>,
            arrays2: List<T2>,
            arrays3: List<T3>,
            arrays4: List<T4>,
            arrays5: List<T5>,
            iteratee: (value1: T1, value2: T2, value3: T3, value4: T4, value5: T5) => TResult
        ): Exp<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            this: Exp<List<T> | null | undefined>,
            ...iteratee: Array<((...group: T[]) => TResult) | List<T> | null | undefined>
        ): Exp<TResult[]>;
    }
}
