import _ = require("../index");
declare module "../index" {
    // chunk

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.chunk
         */
        chunk<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            size?: number,
        ): LoDashImplicitWrapper<T[][]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.chunk
         */
        chunk<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            size?: number,
        ): LoDashExplicitWrapper<T[][]>;
    }

    // compact

    interface LoDashStatic {
        /**
         * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are
         * falsey.
         *
         * @param array The array to compact.
         * @return Returns the new array of filtered values.
         */
        compact<T>(array: List<T | null | undefined | false | "" | 0> | null | undefined): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.compact
         */
        compact<T>(this: LoDashImplicitWrapper<List<T | null | undefined | false | "" | 0> | null | undefined>): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.compact
         */
        compact<T>(this: LoDashExplicitWrapper<List<T | null | undefined | false | "" | 0> | null | undefined>): LoDashExplicitWrapper<T[]>;
    }

    // concat

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.compact
         */
        concat<T>(this: LoDashImplicitWrapper<Many<T>>, ...values: Array<Many<T>>): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.compact
         */
        concat<T>(this: LoDashExplicitWrapper<Many<T>>, ...values: Array<Many<T>>): LoDashExplicitWrapper<T[]>;
    }

    // difference

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.difference
         */
        difference<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            ...values: Array<List<T>>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.difference
         */
        difference<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            ...values: Array<List<T>>
        ): LoDashExplicitWrapper<T[]>;
    }

    // differenceBy

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values: List<T2>,
            iteratee: ValueIteratee<T1 | T2>
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            iteratee: ValueIteratee<T1 | T2 | T3>
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            iteratee: ValueIteratee<T1 | T2 | T3 | T4>
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4, T5>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            values4: List<T5>,
            iteratee: ValueIteratee<T1 | T2 | T3 | T4 | T5>
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4, T5, T6>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            values4: List<T5>,
            values5: List<T6>,
            iteratee: ValueIteratee<T1 | T2 | T3 | T4 | T5 | T6>
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4, T5, T6, T7>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            values4: List<T5>,
            values5: List<T6>,
            ...values: Array<List<T7> | ValueIteratee<T1 | T2 | T3 | T4 | T5 | T6 | T7>>
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            ...values: Array<List<T>>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values: List<T2>,
            iteratee: ValueIteratee<T1 | T2>
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            iteratee: ValueIteratee<T1 | T2 | T3>
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            iteratee: ValueIteratee<T1 | T2 | T3 | T4>
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4, T5>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            values4: List<T5>,
            iteratee: ValueIteratee<T1 | T2 | T3 | T4 | T5>
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4, T5, T6>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            values4: List<T5>,
            values5: List<T6>,
            iteratee: ValueIteratee<T1 | T2 | T3 | T4 | T5 | T6>
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4, T5, T6, T7>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            values3: List<T4>,
            values4: List<T5>,
            values5: List<T6>,
            ...values: Array<List<T7> | ValueIteratee<T1 | T2 | T3 | T4 | T5 | T6 | T7>>
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.differenceBy
         */
        differenceBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            ...values: Array<List<T>>
        ): LoDashExplicitWrapper<T[]>;
    }

    // differenceWith

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.differenceWith
         */
        differenceWith<T1, T2>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values: List<T2>,
            comparator: Comparator2<T1, T2>
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.differenceWith
         */
        differenceWith<T1, T2, T3>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            comparator: Comparator2<T1, T2 | T3>
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.differenceWith
         */
        differenceWith<T1, T2, T3, T4>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            ...values: Array<List<T4> | Comparator2<T1, T2 | T3 | T4>>
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.differenceWith
         */
        differenceWith<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            ...values: Array<List<T>>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.differenceWith
         */
        differenceWith<T1, T2>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values: List<T2>,
            comparator: Comparator2<T1, T2>
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.differenceWith
         */
        differenceWith<T1, T2, T3>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            comparator: Comparator2<T1, T2 | T3>
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.differenceWith
         */
        differenceWith<T1, T2, T3, T4>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            ...values: Array<List<T4> | Comparator2<T1, T2 | T3 | T4>>
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.differenceWith
         */
        differenceWith<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            ...values: Array<List<T>>
        ): LoDashExplicitWrapper<T[]>;
    }

    // drop

    interface LoDashStatic {
        /**
         * Creates a slice of array with n elements dropped from the beginning.
         *
         * @param array The array to query.
         * @param n The number of elements to drop.
         * @return Returns the slice of array.
         */
        drop<T>(array: List<T> | null | undefined, n?: number): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.drop
         */
        drop<T>(this: LoDashImplicitWrapper<List<T> | null | undefined>, n?: number): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.drop
         */
        drop<T>(this: LoDashExplicitWrapper<List<T> | null | undefined>, n?: number): LoDashExplicitWrapper<T[]>;
    }

    // dropRight

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.dropRight
         */
        dropRight<T>(this: LoDashImplicitWrapper<List<T> | null | undefined>, n?: number): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.dropRight
         */
        dropRight<T>(this: LoDashExplicitWrapper<List<T> | null | undefined>, n?: number): LoDashExplicitWrapper<T[]>;
    }

    // dropRightWhile

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.dropRightWhile
         */
        dropRightWhile<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIteratee<T>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.dropRightWhile
         */
        dropRightWhile<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIteratee<T>
        ): LoDashExplicitWrapper<T[]>;
    }

    // dropWhile

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.dropWhile
         */
        dropWhile<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIteratee<T>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.dropWhile
         */
        dropWhile<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIteratee<T>
        ): LoDashExplicitWrapper<T[]>;
    }

    // fill

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.fill
         */
        fill<T>(
            this: LoDashImplicitWrapper<any[] | null | undefined>,
            value: T
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.fill
         */
        fill<T>(
            this: LoDashImplicitWrapper<List<any> | null | undefined>,
            value: T
        ): LoDashImplicitWrapper<List<T>>;

        /**
         * @see _.fill
         */
        fill<T, U>(
            this: LoDashImplicitWrapper<U[] | null | undefined>,
            value: T,
            start?: number,
            end?: number
        ): LoDashImplicitWrapper<Array<T | U>>;

        /**
         * @see _.fill
         */
        fill<T, U>(
            this: LoDashImplicitWrapper<List<U> | null | undefined>,
            value: T,
            start?: number,
            end?: number
        ): LoDashImplicitWrapper<List<T | U>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.fill
         */
        fill<T>(
            this: LoDashExplicitWrapper<any[] | null | undefined>,
            value: T
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.fill
         */
        fill<T>(
            this: LoDashExplicitWrapper<List<any> | null | undefined>,
            value: T
        ): LoDashExplicitWrapper<List<T>>;

        /**
         * @see _.fill
         */
        fill<T, U>(
            this: LoDashExplicitWrapper<U[] | null | undefined>,
            value: T,
            start?: number,
            end?: number
        ): LoDashExplicitWrapper<Array<T | U>>;

        /**
         * @see _.fill
         */
        fill<T, U>(
            this: LoDashExplicitWrapper<List<U> | null | undefined>,
            value: T,
            start?: number,
            end?: number
        ): LoDashExplicitWrapper<List<T | U>>;
    }

    // findIndex

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.findIndex
         */
        findIndex<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIterateeCustom<T, boolean>,
            fromIndex?: number
        ): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.findIndex
         */
        findIndex<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIterateeCustom<T, boolean>,
            fromIndex?: number
        ): LoDashExplicitWrapper<number>;
    }

    // findLastIndex

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.findLastIndex
         */
        findLastIndex<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIterateeCustom<T, boolean>,
            fromIndex?: number
        ): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.findLastIndex
         */
        findLastIndex<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIterateeCustom<T, boolean>,
            fromIndex?: number
        ): LoDashExplicitWrapper<number>;
    }

    // first

    interface LoDashStatic {
        first: typeof _.head; // tslint:disable-line:no-unnecessary-qualifier
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.head
         */
        first<T>(this: LoDashImplicitWrapper<List<T> | null | undefined>): T | undefined;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.head
         */
        first<T>(this: LoDashExplicitWrapper<List<T> | null | undefined>): LoDashExplicitWrapper<T | undefined>;
    }

    interface RecursiveArray<T> extends Array<T|RecursiveArray<T>> {}
    interface ListOfRecursiveArraysOrValues<T> extends List<T|RecursiveArray<T>> {}

    // flatten

    interface LoDashStatic {
        /**
         * Flattens `array` a single level deep.
         *
         * @param array The array to flatten.
         * @return Returns the new flattened array.
         */
        flatten<T>(array: List<Many<T>> | null | undefined): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.flatten
         */
        flatten<T>(this: LoDashImplicitWrapper<List<Many<T>> | null | undefined>): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.flatten
         */
        flatten<T>(this: LoDashExplicitWrapper<List<Many<T>> | null | undefined>): LoDashExplicitWrapper<T[]>;
    }

    // flattenDeep

    interface LoDashStatic {
        /**
         * Recursively flattens a nested array.
         *
         * @param array The array to recursively flatten.
         * @return Returns the new flattened array.
         */
        flattenDeep<T>(array: ListOfRecursiveArraysOrValues<T> | null | undefined): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.flattenDeep
         */
        flattenDeep<T>(this: LoDashImplicitWrapper<ListOfRecursiveArraysOrValues<T> | null | undefined>): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.flattenDeep
         */
        flattenDeep<T>(this: LoDashExplicitWrapper<ListOfRecursiveArraysOrValues<T> | null | undefined>): LoDashExplicitWrapper<T[]>;
    }

    // flattenDepth

    interface LoDashStatic {
        /**
         * Recursively flatten array up to depth times.
         *
         * @param array The array to recursively flatten.
         * @param number The maximum recursion depth.
         * @return Returns the new flattened array.
         */
        flattenDepth<T>(array: ListOfRecursiveArraysOrValues<T> | null | undefined, depth?: number): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.flattenDeep
         */
        flattenDepth<T>(this: LoDashImplicitWrapper<ListOfRecursiveArraysOrValues<T> | null | undefined>, depth?: number): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.flattenDeep
         */
        flattenDepth<T>(this: LoDashExplicitWrapper<ListOfRecursiveArraysOrValues<T> | null | undefined>, depth?: number): LoDashExplicitWrapper<T[]>;
    }

    // fromPairs

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.fromPairs
         */
        fromPairs<T>(
          this: LoDashImplicitWrapper<List<[PropertyName, T]> | null | undefined>
        ): LoDashImplicitWrapper<Dictionary<T>>;

        /**
         @see _.fromPairs
         */
        fromPairs(
            this: LoDashImplicitWrapper<List<any[]> | null | undefined>
        ): LoDashImplicitWrapper<Dictionary<any>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.fromPairs
         */
        fromPairs<T>(
          this: LoDashExplicitWrapper<List<[PropertyName, T]> | null | undefined>
        ): LoDashExplicitWrapper<Dictionary<T>>;

        /**
         @see _.fromPairs
         */
        fromPairs(
            this: LoDashExplicitWrapper<List<any[]> | null | undefined>
        ): LoDashExplicitWrapper<Dictionary<any>>;
    }

    // head

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.head
         */
        head<T>(this: LoDashImplicitWrapper<List<T> | null | undefined>): T | undefined;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.head
         */
        head<T>(this: LoDashExplicitWrapper<List<T> | null | undefined>): LoDashExplicitWrapper<T | undefined>;
    }

    // indexOf

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.indexOf
         */
        indexOf<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            value: T,
            fromIndex?: number
        ): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.indexOf
         */
        indexOf<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            value: T,
            fromIndex?: number
        ): LoDashExplicitWrapper<number>;
    }

    // initial

    interface LoDashStatic {
        /**
         * Gets all but the last element of array.
         *
         * @param array The array to query.
         * @return Returns the slice of array.
         */
        initial<T>(array: List<T> | null | undefined): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.initial
         */
        initial<T>(this: LoDashImplicitWrapper<List<T> | null | undefined>): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.initial
         */
        initial<T>(this: LoDashExplicitWrapper<List<T> | null | undefined>): LoDashExplicitWrapper<T[]>;
    }

    // intersection

    interface LoDashStatic {
        /**
         * Creates an array of unique values that are included in all of the provided arrays using SameValueZero for
         * equality comparisons.
         *
         * @param arrays The arrays to inspect.
         * @return Returns the new array of shared values.
         */
        intersection<T>(...arrays: Array<List<T>>): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.intersection
         */
        intersection<T>(
            this: LoDashImplicitWrapper<List<T>>,
            ...arrays: Array<List<T>>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.intersection
         */
        intersection<T>(
            this: LoDashExplicitWrapper<List<T>>,
            ...arrays: Array<List<T>>
        ): LoDashExplicitWrapper<T[]>;
    }

    // intersectionBy

    interface LoDashStatic {
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

        /**
         * @see _.intersectionBy
         */
        intersectionBy<T>(...values: Array<List<T> | ValueIteratee<T>>): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.intersectionBy
         */
        intersectionBy<T1, T2>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values: List<T2>,
            iteratee: ValueIteratee<T1 | T2>
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.intersectionBy
         */
        intersectionBy<T1, T2, T3>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            iteratee: ValueIteratee<T1 | T2 | T3>
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.intersectionBy
         */
        intersectionBy<T1, T2, T3, T4>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            ...values: Array<List<T4> | ValueIteratee<T1 | T2 | T3 | T4>>
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.intersectionBy
         */
        intersectionBy<T1, T2>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            ...values: Array<List<T2> | ValueIteratee<T1 | T2>>
        ): LoDashImplicitWrapper<T1[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.intersectionBy
         */
        intersectionBy<T1, T2>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values: List<T2>,
            iteratee: ValueIteratee<T1 | T2>
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.intersectionBy
         */
        intersectionBy<T1, T2, T3>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            iteratee: ValueIteratee<T1 | T2 | T3>
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.intersectionBy
         */
        intersectionBy<T1, T2, T3, T4>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            ...values: Array<List<T4> | ValueIteratee<T1 | T2 | T3 | T4>>
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.intersectionBy
         */
        intersectionBy<T1, T2>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            ...values: Array<List<T2> | ValueIteratee<T1 | T2>>
        ): LoDashExplicitWrapper<T1[]>;
    }

    // intersectionWith

    interface LoDashStatic {
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
            ...values: Array<List<T> | Comparator2<T, never>>
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.intersectionWith
         */
        intersectionWith<T1, T2>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values: List<T2>,
            comparator: Comparator2<T1, T2>
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.intersectionWith
         */
        intersectionWith<T1, T2, T3>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            comparator: Comparator2<T1, T2 | T3>
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.intersectionWith
         */
        intersectionWith<T1, T2, T3, T4>(
            this: LoDashImplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            ...values: Array<List<T4> | Comparator2<T1, T2 | T3 | T4>>
        ): LoDashImplicitWrapper<T1[]>;

        /**
         * @see _.intersectionWith
         */
        intersectionWith<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            ...values: Array<List<T>>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.intersectionWith
         */
        intersectionWith<T1, T2>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values: List<T2>,
            comparator: Comparator2<T1, T2>
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.intersectionWith
         */
        intersectionWith<T1, T2, T3>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            comparator: Comparator2<T1, T2 | T3>
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.intersectionWith
         */
        intersectionWith<T1, T2, T3, T4>(
            this: LoDashExplicitWrapper<List<T1> | null | undefined>,
            values1: List<T2>,
            values2: List<T3>,
            ...values: Array<List<T4> | Comparator2<T1, T2 | T3 | T4>>
        ): LoDashExplicitWrapper<T1[]>;

        /**
         * @see _.intersectionWith
         */
        intersectionWith<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            ...values: Array<List<T>>
        ): LoDashExplicitWrapper<T[]>;
    }

    // join

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.join
         */
        join(separator?: string): string;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.join
         */
        join(separator?: string): LoDashExplicitWrapper<string>;
    }

    // last

    interface LoDashStatic {
        /**
         * Gets the last element of array.
         *
         * @param array The array to query.
         * @return Returns the last element of array.
         */
        last<T>(array: List<T> | null | undefined): T | undefined;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.last
         */
        last<T>(this: LoDashImplicitWrapper<List<T> | null | undefined>): T | undefined;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.last
         */
        last<T>(this: LoDashExplicitWrapper<List<T> | null | undefined>): LoDashExplicitWrapper<T | undefined>;
    }

    // lastIndexOf

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.indexOf
         */
        lastIndexOf<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            value: T,
            fromIndex?: true|number
        ): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.indexOf
         */
        lastIndexOf<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            value: T,
            fromIndex?: true|number
        ): LoDashExplicitWrapper<number>;
    }

    // nth

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.nth
         */
        nth<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            n?: number
        ): T | undefined;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.nth
         */
        nth<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            n?: number
        ): LoDashExplicitWrapper<T | undefined>;
    }

    // pull

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.pull
         */
        pull<T>(
            this: LoDashImplicitWrapper<List<T>>,
            ...values: T[]
        ): this;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.pull
         */
        pull<T>(
            this: LoDashExplicitWrapper<List<T>>,
            ...values: T[]
        ): this;
    }

    // pullAll

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.pullAll
         */
        pullAll<T>(
            this: LoDashImplicitWrapper<List<T>>,
            values?: List<T>
        ): this;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.pullAll
         */
        pullAll<T>(
            this: LoDashExplicitWrapper<List<T>>,
            values?: List<T>
        ): this;
    }

    // pullAllBy

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

    // pullAllWith

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

    // pullAt

    interface LoDashStatic {
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

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.remove
         */
        remove<T>(
            this: LoDashImplicitWrapper<List<T>>,
            predicate?: ListIteratee<T>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.remove
         */
        remove<T>(
            this: LoDashExplicitWrapper<List<T>>,
            predicate?: ListIteratee<T>
        ): LoDashExplicitWrapper<T[]>;
    }

    // reverse

    interface LoDashStatic {
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

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.slice
         */
        slice<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            start?: number,
            end?: number
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.slice
         */
        slice<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            start?: number,
            end?: number
        ): LoDashExplicitWrapper<T[]>;
    }

    // sortedIndex

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

    // sortedIndexBy

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

    // sortedIndexOf

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.sortedIndexOf
         */
        sortedIndexOf<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            value: T
        ): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.sortedIndexOf
         */
        sortedIndexOf<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            value: T
        ): LoDashExplicitWrapper<number>;
    }

    // sortedLastIndex

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.sortedLastIndex
         */
        sortedLastIndex<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            value: T
        ): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.sortedLastIndex
         */
        sortedLastIndex<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            value: T
        ): LoDashExplicitWrapper<number>;
    }

    // sortedLastIndexBy

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

    // sortedLastIndexOf

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.sortedLastIndexOf
         */
        sortedLastIndexOf<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            value: T
        ): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.sortedLastIndexOf
         */
        sortedLastIndexOf<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            value: T
        ): LoDashExplicitWrapper<number>;
    }

    // sortedUniq

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.sortedUniq
         */
        sortedUniq<T>(this: LoDashImplicitWrapper<List<T> | null | undefined>): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.sortedUniq
         */
        sortedUniq<T>(this: LoDashExplicitWrapper<List<T> | null | undefined>): LoDashExplicitWrapper<T[]>;
    }

    // sortedUniqBy

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.sortedUniqBy
         */
        sortedUniqBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            iteratee: ValueIteratee<T>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.sortedUniqBy
         */
        sortedUniqBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            iteratee: ValueIteratee<T>
        ): LoDashExplicitWrapper<T[]>;
    }

    // tail

    interface LoDashStatic {
        /**
         * Gets all but the first element of array.
         *
         * @param array The array to query.
         * @return Returns the slice of array.
         */
        tail<T>(array: List<T> | null | undefined): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.tail
         */
        tail<T>(this: LoDashImplicitWrapper<List<T> | null | undefined>): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.tail
         */
        tail<T>(this: LoDashExplicitWrapper<List<T> | null | undefined>): LoDashExplicitWrapper<T[]>;
    }

    // take

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.take
         */
        take<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            n?: number
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.take
         */
        take<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            n?: number
        ): LoDashExplicitWrapper<T[]>;
    }

    // takeRight

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.takeRight
         */
        takeRight<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            n?: number
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.takeRight
         */
        takeRight<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            n?: number
        ): LoDashExplicitWrapper<T[]>;
    }

    // takeRightWhile

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.takeRightWhile
         */
        takeRightWhile<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIteratee<T>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.takeRightWhile
         */
        takeRightWhile<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIteratee<T>
        ): LoDashExplicitWrapper<T[]>;
    }

    // takeWhile

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.takeWhile
         */
        takeWhile<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIteratee<T>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.takeWhile
         */
        takeWhile<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIteratee<T>
        ): LoDashExplicitWrapper<T[]>;
    }

    // union

    interface LoDashStatic {
        /**
         * Creates an array of unique values, in order, from all of the provided arrays using SameValueZero for
         * equality comparisons.
         *
         * @param arrays The arrays to inspect.
         * @return Returns the new array of combined values.
         */
        union<T>(...arrays: Array<List<T> | null | undefined>): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.union
         */
        union<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            ...arrays: Array<List<T> | null | undefined>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.union
         */
        union<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            ...arrays: Array<List<T> | null | undefined>
        ): LoDashExplicitWrapper<T[]>;
    }

    // unionBy

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.unionBy
         */
        unionBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            iteratee?: ValueIteratee<T>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            arrays4: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            arrays4: List<T> | null | undefined,
            arrays5: List<T> | null | undefined,
            ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.unionBy
         */
        unionBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            iteratee?: ValueIteratee<T>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            arrays4: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.unionBy
         */
        unionBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            arrays4: List<T> | null | undefined,
            arrays5: List<T> | null | undefined,
            ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>
        ): LoDashExplicitWrapper<T[]>;
    }

    // unionWith

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.unionWith
         */
        unionWith<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            comparator?: Comparator<T>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.unionWith
         */
        unionWith<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            comparator?: Comparator<T>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.unionWith
         */
        unionWith<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            ...comparator: Array<Comparator<T> | List<T> | null | undefined>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.unionWith
         */
        unionWith<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            comparator?: Comparator<T>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.unionWith
         */
        unionWith<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            comparator?: Comparator<T>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.unionWith
         */
        unionWith<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            ...comparator: Array<Comparator<T> | List<T> | null | undefined>
        ): LoDashExplicitWrapper<T[]>;
    }

    // uniq

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.uniq
         */
        uniq<T>(this: LoDashImplicitWrapper<List<T> | null | undefined>): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.uniq
         */
        uniq<T>(this: LoDashExplicitWrapper<List<T> | null | undefined>): LoDashExplicitWrapper<T[]>;
    }

    // uniqBy

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.uniqBy
         */
        uniqBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            iteratee: ValueIteratee<T>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.uniqBy
         */
        uniqBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            iteratee: ValueIteratee<T>
        ): LoDashExplicitWrapper<T[]>;
    }

    // uniqWith

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

    // unzip

    interface LoDashStatic {
        /**
         * This method is like _.zip except that it accepts an array of grouped elements and creates an array
         * regrouping the elements to their pre-zip configuration.
         *
         * @param array The array of grouped elements to process.
         * @return Returns the new array of regrouped elements.
         */
        unzip<T>(array: T[][] | List<List<T>> | null | undefined): T[][];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.unzip
         */
        unzip<T>(this: LoDashImplicitWrapper<T[][] | List<List<T>> | null | undefined>): LoDashImplicitWrapper<T[][]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.unzip
         */
        unzip<T>(this: LoDashExplicitWrapper<T[][] | List<List<T>> | null | undefined>): LoDashExplicitWrapper<T[][]>;
    }

    // unzipWith

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.unzipWith
         */
        unzipWith<T, TResult>(
            this: LoDashImplicitWrapper<List<List<T>> | null | undefined>,
            iteratee: (...values: T[]) => TResult
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.unzipWith
         */
        unzipWith<T>(
            this: LoDashImplicitWrapper<List<List<T>> | null | undefined>
        ): LoDashImplicitWrapper<T[][]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.unzipWith
         */
        unzipWith<T, TResult>(
            this: LoDashExplicitWrapper<List<List<T>> | null | undefined>,
            iteratee: (...values: T[]) => TResult
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.unzipWith
         */
        unzipWith<T>(
            this: LoDashExplicitWrapper<List<List<T>> | null | undefined>
        ): LoDashExplicitWrapper<T[][]>;
    }

    // without

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.without
         */
        without<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            ...values: T[]
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.without
         */
        without<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            ...values: T[]
        ): LoDashExplicitWrapper<T[]>;
    }

    // xor

    interface LoDashStatic {
        /**
         * Creates an array of unique values that is the symmetric difference of the provided arrays.
         *
         * @param arrays The arrays to inspect.
         * @return Returns the new array of values.
         */
        xor<T>(...arrays: Array<List<T> | null | undefined>): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.xor
         */
        xor<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            ...arrays: Array<List<T> | null | undefined>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.xor
         */
        xor<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            ...arrays: Array<List<T> | null | undefined>
        ): LoDashExplicitWrapper<T[]>;
    }

    // xorBy

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.xor
         */
        xorBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            iteratee?: ValueIteratee<T>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.xorBy
         */
        xorBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.xorBy
         */
        xorBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.xorBy
         */
        xorBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            iteratee?: ValueIteratee<T>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.xorBy
         */
        xorBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.xorBy
         */
        xorBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>
        ): LoDashExplicitWrapper<T[]>;
    }

    // xorWith

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.xorWith
         */
        xorWith<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            comparator?: Comparator<T>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.xorWith
         */
        xorWith<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            comparator?: Comparator<T>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.xorWith
         */
        xorWith<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            ...comparator: Array<Comparator<T> | List<T> | null | undefined>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.xorWith
         */
        xorWith<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            comparator?: Comparator<T>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.xorWith
         */
        xorWith<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            comparator?: Comparator<T>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.xorWith
         */
        xorWith<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            arrays2: List<T> | null | undefined,
            arrays3: List<T> | null | undefined,
            ...comparator: Array<Comparator<T> | List<T> | null | undefined>
        ): LoDashExplicitWrapper<T[]>;
    }

    // zip

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.zip
         */
        zip<T1, T2>(
            this: LoDashImplicitWrapper<List<T1>>,
            arrays2: List<T2>,
        ): LoDashImplicitWrapper<Array<[T1 | undefined, T2 | undefined]>>;

        /**
         * @see _.zip
         */
        zip<T1, T2, T3>(
            this: LoDashImplicitWrapper<List<T1>>,
            arrays2: List<T2>,
            arrays3: List<T3>,
        ): LoDashImplicitWrapper<Array<[T1 | undefined, T2 | undefined, T3 | undefined]>>;

        /**
         * @see _.zip
         */
        zip<T1, T2, T3, T4>(
            this: LoDashImplicitWrapper<List<T1>>,
            arrays2: List<T2>,
            arrays3: List<T3>,
            arrays4: List<T4>,
        ): LoDashImplicitWrapper<Array<[T1 | undefined, T2 | undefined, T3 | undefined, T4 | undefined]>>;

        /**
         * @see _.zip
         */
        zip<T1, T2, T3, T4, T5>(
            this: LoDashImplicitWrapper<List<T1>>,
            arrays2: List<T2>,
            arrays3: List<T3>,
            arrays4: List<T4>,
            arrays5: List<T5>,
        ): LoDashImplicitWrapper<Array<[T1 | undefined, T2 | undefined, T3 | undefined, T4 | undefined, T5 | undefined]>>;

        /**
         * @see _.zip
         */
        zip<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            ...arrays: Array<List<T> | null | undefined>
        ): LoDashImplicitWrapper<Array<Array<T | undefined>>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.zip
         */
        zip<T1, T2>(
            this: LoDashExplicitWrapper<List<T1>>,
            arrays2: List<T2>,
        ): LoDashExplicitWrapper<Array<[T1 | undefined, T2 | undefined]>>;

        /**
         * @see _.zip
         */
        zip<T1, T2, T3>(
            this: LoDashExplicitWrapper<List<T1>>,
            arrays2: List<T2>,
            arrays3: List<T3>,
        ): LoDashExplicitWrapper<Array<[T1 | undefined, T2 | undefined, T3 | undefined]>>;

        /**
         * @see _.zip
         */
        zip<T1, T2, T3, T4>(
            this: LoDashExplicitWrapper<List<T1>>,
            arrays2: List<T2>,
            arrays3: List<T3>,
            arrays4: List<T4>,
        ): LoDashExplicitWrapper<Array<[T1 | undefined, T2 | undefined, T3 | undefined, T4 | undefined]>>;

        /**
         * @see _.zip
         */
        zip<T1, T2, T3, T4, T5>(
            this: LoDashExplicitWrapper<List<T1>>,
            arrays2: List<T2>,
            arrays3: List<T3>,
            arrays4: List<T4>,
            arrays5: List<T5>,
        ): LoDashExplicitWrapper<Array<[T1 | undefined, T2 | undefined, T3 | undefined, T4 | undefined, T5 | undefined]>>;

        /**
         * @see _.zip
         */
        zip<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            ...arrays: Array<List<T> | null | undefined>
        ): LoDashExplicitWrapper<Array<Array<T | undefined>>>;
    }

    // zipObject

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.zipObject
         */
        zipObject<T>(
            this: LoDashImplicitWrapper<List<PropertyName>>,
            values: List<T>
        ): LoDashImplicitWrapper<Dictionary<T>>;

        /**
         * @see _.zipObject
         */
        zipObject(
            this: LoDashImplicitWrapper<List<PropertyName>>
        ): LoDashImplicitWrapper<Dictionary<undefined>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.zipObject
         */
        zipObject<T>(
            this: LoDashExplicitWrapper<List<PropertyName>>,
            values: List<T>
        ): LoDashExplicitWrapper<Dictionary<T>>;

        /**
         * @see _.zipObject
         */
        zipObject(
            this: LoDashExplicitWrapper<List<PropertyName>>
        ): LoDashExplicitWrapper<Dictionary<undefined>>;
    }

    // zipObjectDeep

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.zipObjectDeep
         */
        zipObjectDeep(
            this: LoDashImplicitWrapper<List<PropertyPath>>,
            values?: List<any>
        ): LoDashImplicitWrapper<object>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.zipObjectDeep
         */
        zipObjectDeep(
            this: LoDashExplicitWrapper<List<PropertyPath>>,
            values?: List<any>
        ): LoDashExplicitWrapper<object>;
    }

    // zipWith

    interface LoDashStatic {
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

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            this: LoDashImplicitWrapper<List<T>>,
            iteratee: (value1: T) => TResult
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T1, T2, TResult>(
            this: LoDashImplicitWrapper<List<T1>>,
            arrays2: List<T2>,
            iteratee: (value1: T1, value2: T2) => TResult
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T1, T2, T3, TResult>(
            this: LoDashImplicitWrapper<List<T1>>,
            arrays2: List<T2>,
            arrays3: List<T3>,
            iteratee: (value1: T1, value2: T2, value3: T3) => TResult
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T1, T2, T3, T4, TResult>(
            this: LoDashImplicitWrapper<List<T1>>,
            arrays2: List<T2>,
            arrays3: List<T3>,
            arrays4: List<T4>,
            iteratee: (value1: T1, value2: T2, value3: T3, value4: T4) => TResult
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T1, T2, T3, T4, T5, TResult>(
            this: LoDashImplicitWrapper<List<T1>>,
            arrays2: List<T2>,
            arrays3: List<T3>,
            arrays4: List<T4>,
            arrays5: List<T5>,
            iteratee: (value1: T1, value2: T2, value3: T3, value4: T4, value5: T5) => TResult
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            ...iteratee: Array<((...group: T[]) => TResult) | List<T> | null | undefined>
        ): LoDashImplicitWrapper<TResult[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            this: LoDashExplicitWrapper<List<T>>,
            iteratee: (value1: T) => TResult
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T1, T2, TResult>(
            this: LoDashExplicitWrapper<List<T1>>,
            arrays2: List<T2>,
            iteratee: (value1: T1, value2: T2) => TResult
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T1, T2, T3, TResult>(
            this: LoDashExplicitWrapper<List<T1>>,
            arrays2: List<T2>,
            arrays3: List<T3>,
            iteratee: (value1: T1, value2: T2, value3: T3) => TResult
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T1, T2, T3, T4, TResult>(
            this: LoDashExplicitWrapper<List<T1>>,
            arrays2: List<T2>,
            arrays3: List<T3>,
            arrays4: List<T4>,
            iteratee: (value1: T1, value2: T2, value3: T3, value4: T4) => TResult
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T1, T2, T3, T4, T5, TResult>(
            this: LoDashExplicitWrapper<List<T1>>,
            arrays2: List<T2>,
            arrays3: List<T3>,
            arrays4: List<T4>,
            arrays5: List<T5>,
            iteratee: (value1: T1, value2: T2, value3: T3, value4: T4, value5: T5) => TResult
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            ...iteratee: Array<((...group: T[]) => TResult) | List<T> | null | undefined>
        ): LoDashExplicitWrapper<TResult[]>;
    }
}
