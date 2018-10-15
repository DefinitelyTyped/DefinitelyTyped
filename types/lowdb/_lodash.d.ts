// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify types/lodash/scripts/generate-lowdb.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm install && npm run generate

import _ = require("lodash");
declare module "./index" {
    interface LoDashExplicitSyncWrapper<TValue> {
        chunk<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            size?: number,
        ): LoDashExplicitSyncWrapper<T[][]>;
        compact<T>(this: LoDashExplicitSyncWrapper<_.List<T | null | undefined | false | "" | 0> | null | undefined>): LoDashExplicitSyncWrapper<T[]>;
        concat<T>(this: LoDashExplicitSyncWrapper<_.Many<T>>, ...values: Array<_.Many<T>>): LoDashExplicitSyncWrapper<T[]>;
        difference<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            ...values: Array<_.List<T>>
        ): LoDashExplicitSyncWrapper<T[]>;
        differenceBy<T1, T2>(
            this: LoDashExplicitSyncWrapper<_.List<T1> | null | undefined>,
            values: _.List<T2>,
            iteratee: _.ValueIteratee<T1 | T2>
        ): LoDashExplicitSyncWrapper<T1[]>;
        differenceBy<T1, T2, T3>(
            this: LoDashExplicitSyncWrapper<_.List<T1> | null | undefined>,
            values1: _.List<T2>,
            values2: _.List<T3>,
            iteratee: _.ValueIteratee<T1 | T2 | T3>
        ): LoDashExplicitSyncWrapper<T1[]>;
        differenceBy<T1, T2, T3, T4>(
            this: LoDashExplicitSyncWrapper<_.List<T1> | null | undefined>,
            values1: _.List<T2>,
            values2: _.List<T3>,
            values3: _.List<T4>,
            iteratee: _.ValueIteratee<T1 | T2 | T3 | T4>
        ): LoDashExplicitSyncWrapper<T1[]>;
        differenceBy<T1, T2, T3, T4, T5>(
            this: LoDashExplicitSyncWrapper<_.List<T1> | null | undefined>,
            values1: _.List<T2>,
            values2: _.List<T3>,
            values3: _.List<T4>,
            values4: _.List<T5>,
            iteratee: _.ValueIteratee<T1 | T2 | T3 | T4 | T5>
        ): LoDashExplicitSyncWrapper<T1[]>;
        differenceBy<T1, T2, T3, T4, T5, T6>(
            this: LoDashExplicitSyncWrapper<_.List<T1> | null | undefined>,
            values1: _.List<T2>,
            values2: _.List<T3>,
            values3: _.List<T4>,
            values4: _.List<T5>,
            values5: _.List<T6>,
            iteratee: _.ValueIteratee<T1 | T2 | T3 | T4 | T5 | T6>
        ): LoDashExplicitSyncWrapper<T1[]>;
        differenceBy<T1, T2, T3, T4, T5, T6, T7>(
            this: LoDashExplicitSyncWrapper<_.List<T1> | null | undefined>,
            values1: _.List<T2>,
            values2: _.List<T3>,
            values3: _.List<T4>,
            values4: _.List<T5>,
            values5: _.List<T6>,
            ...values: Array<_.List<T7> | _.ValueIteratee<T1 | T2 | T3 | T4 | T5 | T6 | T7>>
        ): LoDashExplicitSyncWrapper<T1[]>;
        differenceBy<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            ...values: Array<_.List<T>>
        ): LoDashExplicitSyncWrapper<T[]>;
        differenceWith<T1, T2>(
            this: LoDashExplicitSyncWrapper<_.List<T1> | null | undefined>,
            values: _.List<T2>,
            comparator: _.Comparator2<T1, T2>
        ): LoDashExplicitSyncWrapper<T1[]>;
        differenceWith<T1, T2, T3>(
            this: LoDashExplicitSyncWrapper<_.List<T1> | null | undefined>,
            values1: _.List<T2>,
            values2: _.List<T3>,
            comparator: _.Comparator2<T1, T2 | T3>
        ): LoDashExplicitSyncWrapper<T1[]>;
        differenceWith<T1, T2, T3, T4>(
            this: LoDashExplicitSyncWrapper<_.List<T1> | null | undefined>,
            values1: _.List<T2>,
            values2: _.List<T3>,
            ...values: Array<_.List<T4> | _.Comparator2<T1, T2 | T3 | T4>>
        ): LoDashExplicitSyncWrapper<T1[]>;
        differenceWith<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            ...values: Array<_.List<T>>
        ): LoDashExplicitSyncWrapper<T[]>;
        drop<T>(this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>, n?: number): LoDashExplicitSyncWrapper<T[]>;
        dropRight<T>(this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>, n?: number): LoDashExplicitSyncWrapper<T[]>;
        dropRightWhile<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            predicate?: _.ListIteratee<T>
        ): LoDashExplicitSyncWrapper<T[]>;
        dropWhile<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            predicate?: _.ListIteratee<T>
        ): LoDashExplicitSyncWrapper<T[]>;
        fill<T>(
            this: LoDashExplicitSyncWrapper<any[] | null | undefined>,
            value: T
        ): LoDashExplicitSyncWrapper<T[]>;
        fill<T>(
            this: LoDashExplicitSyncWrapper<_.List<any> | null | undefined>,
            value: T
        ): LoDashExplicitSyncWrapper<_.List<T>>;
        fill<T, U>(
            this: LoDashExplicitSyncWrapper<U[] | null | undefined>,
            value: T,
            start?: number,
            end?: number
        ): LoDashExplicitSyncWrapper<Array<T | U>>;
        fill<T, U>(
            this: LoDashExplicitSyncWrapper<_.List<U> | null | undefined>,
            value: T,
            start?: number,
            end?: number
        ): LoDashExplicitSyncWrapper<_.List<T | U>>;
        findIndex<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            predicate?: _.ListIterateeCustom<T, boolean>,
            fromIndex?: number
        ): LoDashExplicitSyncWrapper<number>;
        findLastIndex<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            predicate?: _.ListIterateeCustom<T, boolean>,
            fromIndex?: number
        ): LoDashExplicitSyncWrapper<number>;
        first<T>(this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>): LoDashExplicitSyncWrapper<T | undefined>;
        flatten<T>(this: LoDashExplicitSyncWrapper<_.List<_.Many<T>> | null | undefined>): LoDashExplicitSyncWrapper<T[]>;
        flattenDeep<T>(this: LoDashExplicitSyncWrapper<_.ListOfRecursiveArraysOrValues<T> | null | undefined>): LoDashExplicitSyncWrapper<T[]>;
        flattenDepth<T>(this: LoDashExplicitSyncWrapper<_.ListOfRecursiveArraysOrValues<T> | null | undefined>, depth?: number): LoDashExplicitSyncWrapper<T[]>;
        fromPairs<T>(
          this: LoDashExplicitSyncWrapper<_.List<[_.PropertyName, T]> | null | undefined>
        ): LoDashExplicitSyncWrapper<_.Dictionary<T>>;
        fromPairs(
            this: LoDashExplicitSyncWrapper<_.List<any[]> | null | undefined>
        ): LoDashExplicitSyncWrapper<_.Dictionary<any>>;
        head<T>(this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>): LoDashExplicitSyncWrapper<T | undefined>;
        indexOf<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            value: T,
            fromIndex?: number
        ): LoDashExplicitSyncWrapper<number>;
        initial<T>(this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>): LoDashExplicitSyncWrapper<T[]>;
        intersection<T>(
            this: LoDashExplicitSyncWrapper<_.List<T>>,
            ...arrays: Array<_.List<T>>
        ): LoDashExplicitSyncWrapper<T[]>;
        intersectionBy<T1, T2>(
            this: LoDashExplicitSyncWrapper<_.List<T1> | null | undefined>,
            values: _.List<T2>,
            iteratee: _.ValueIteratee<T1 | T2>
        ): LoDashExplicitSyncWrapper<T1[]>;
        intersectionBy<T1, T2, T3>(
            this: LoDashExplicitSyncWrapper<_.List<T1> | null | undefined>,
            values1: _.List<T2>,
            values2: _.List<T3>,
            iteratee: _.ValueIteratee<T1 | T2 | T3>
        ): LoDashExplicitSyncWrapper<T1[]>;
        intersectionBy<T1, T2, T3, T4>(
            this: LoDashExplicitSyncWrapper<_.List<T1> | null | undefined>,
            values1: _.List<T2>,
            values2: _.List<T3>,
            ...values: Array<_.List<T4> | _.ValueIteratee<T1 | T2 | T3 | T4>>
        ): LoDashExplicitSyncWrapper<T1[]>;
        intersectionBy<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            ...values: Array<_.List<T>>
        ): LoDashExplicitSyncWrapper<T[]>;
        intersectionWith<T1, T2>(
            this: LoDashExplicitSyncWrapper<_.List<T1> | null | undefined>,
            values: _.List<T2>,
            comparator: _.Comparator2<T1, T2>
        ): LoDashExplicitSyncWrapper<T1[]>;
        intersectionWith<T1, T2, T3>(
            this: LoDashExplicitSyncWrapper<_.List<T1> | null | undefined>,
            values1: _.List<T2>,
            values2: _.List<T3>,
            comparator: _.Comparator2<T1, T2 | T3>
        ): LoDashExplicitSyncWrapper<T1[]>;
        intersectionWith<T1, T2, T3, T4>(
            this: LoDashExplicitSyncWrapper<_.List<T1> | null | undefined>,
            values1: _.List<T2>,
            values2: _.List<T3>,
            ...values: Array<_.List<T4> | _.Comparator2<T1, T2 | T3 | T4>>
        ): LoDashExplicitSyncWrapper<T1[]>;
        intersectionWith<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            ...values: Array<_.List<T>>
        ): LoDashExplicitSyncWrapper<T[]>;
        join(separator?: string): LoDashExplicitSyncWrapper<string>;
        last<T>(this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>): LoDashExplicitSyncWrapper<T | undefined>;
        lastIndexOf<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            value: T,
            fromIndex?: true|number
        ): LoDashExplicitSyncWrapper<number>;
        nth<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            n?: number
        ): LoDashExplicitSyncWrapper<T | undefined>;
        pull<T>(
            this: LoDashExplicitSyncWrapper<_.List<T>>,
            ...values: T[]
        ): this;
        pullAll<T>(
            this: LoDashExplicitSyncWrapper<_.List<T>>,
            values?: _.List<T>
        ): this;
        remove<T>(
            this: LoDashExplicitSyncWrapper<_.List<T>>,
            predicate?: _.ListIteratee<T>
        ): LoDashExplicitSyncWrapper<T[]>;
        slice<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            start?: number,
            end?: number
        ): LoDashExplicitSyncWrapper<T[]>;
        sortedIndex<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            value: T
        ): LoDashExplicitSyncWrapper<number>;
        sortedIndex<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            value: T
        ): LoDashExplicitSyncWrapper<number>;
        sortedIndexBy<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            value: T,
            iteratee?: _.ValueIteratee<T>
        ): LoDashExplicitSyncWrapper<number>;
        sortedIndexOf<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            value: T
        ): LoDashExplicitSyncWrapper<number>;
        sortedLastIndex<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            value: T
        ): LoDashExplicitSyncWrapper<number>;
        sortedLastIndexBy<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            value: T,
            iteratee: _.ValueIteratee<T>
        ): LoDashExplicitSyncWrapper<number>;
        sortedLastIndexOf<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            value: T
        ): LoDashExplicitSyncWrapper<number>;
        sortedUniq<T>(this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>): LoDashExplicitSyncWrapper<T[]>;
        sortedUniqBy<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            iteratee: _.ValueIteratee<T>
        ): LoDashExplicitSyncWrapper<T[]>;
        tail<T>(this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>): LoDashExplicitSyncWrapper<T[]>;
        take<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            n?: number
        ): LoDashExplicitSyncWrapper<T[]>;
        takeRight<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            n?: number
        ): LoDashExplicitSyncWrapper<T[]>;
        takeRightWhile<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            predicate?: _.ListIteratee<T>
        ): LoDashExplicitSyncWrapper<T[]>;
        takeWhile<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            predicate?: _.ListIteratee<T>
        ): LoDashExplicitSyncWrapper<T[]>;
        union<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            ...arrays: Array<_.List<T> | null | undefined>
        ): LoDashExplicitSyncWrapper<T[]>;
        unionBy<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            iteratee?: _.ValueIteratee<T>
        ): LoDashExplicitSyncWrapper<T[]>;
        unionBy<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            arrays2: _.List<T> | null | undefined,
            iteratee?: _.ValueIteratee<T>
        ): LoDashExplicitSyncWrapper<T[]>;
        unionBy<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            arrays2: _.List<T> | null | undefined,
            arrays3: _.List<T> | null | undefined,
            iteratee?: _.ValueIteratee<T>
        ): LoDashExplicitSyncWrapper<T[]>;
        unionBy<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            arrays2: _.List<T> | null | undefined,
            arrays3: _.List<T> | null | undefined,
            arrays4: _.List<T> | null | undefined,
            iteratee?: _.ValueIteratee<T>
        ): LoDashExplicitSyncWrapper<T[]>;
        unionBy<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            arrays2: _.List<T> | null | undefined,
            arrays3: _.List<T> | null | undefined,
            arrays4: _.List<T> | null | undefined,
            arrays5: _.List<T> | null | undefined,
            ...iteratee: Array<_.ValueIteratee<T> | _.List<T> | null | undefined>
        ): LoDashExplicitSyncWrapper<T[]>;
        unionWith<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            comparator?: _.Comparator<T>
        ): LoDashExplicitSyncWrapper<T[]>;
        unionWith<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            arrays2: _.List<T> | null | undefined,
            comparator?: _.Comparator<T>
        ): LoDashExplicitSyncWrapper<T[]>;
        unionWith<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            arrays2: _.List<T> | null | undefined,
            arrays3: _.List<T> | null | undefined,
            ...comparator: Array<_.Comparator<T> | _.List<T> | null | undefined>
        ): LoDashExplicitSyncWrapper<T[]>;
        uniq<T>(this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>): LoDashExplicitSyncWrapper<T[]>;
        uniqBy<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            iteratee: _.ValueIteratee<T>
        ): LoDashExplicitSyncWrapper<T[]>;
        uniqWith<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            comparator?: _.Comparator<T>
        ): LoDashExplicitSyncWrapper<T[]>;
        unzip<T>(this: LoDashExplicitSyncWrapper<T[][] | _.List<_.List<T>> | null | undefined>): LoDashExplicitSyncWrapper<T[][]>;
        unzipWith<T, TResult>(
            this: LoDashExplicitSyncWrapper<_.List<_.List<T>> | null | undefined>,
            iteratee: (...values: T[]) => TResult
        ): LoDashExplicitSyncWrapper<TResult[]>;
        unzipWith<T>(
            this: LoDashExplicitSyncWrapper<_.List<_.List<T>> | null | undefined>
        ): LoDashExplicitSyncWrapper<T[][]>;
        without<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            ...values: T[]
        ): LoDashExplicitSyncWrapper<T[]>;
        xor<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            ...arrays: Array<_.List<T> | null | undefined>
        ): LoDashExplicitSyncWrapper<T[]>;
        xorBy<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            iteratee?: _.ValueIteratee<T>
        ): LoDashExplicitSyncWrapper<T[]>;
        xorBy<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            arrays2: _.List<T> | null | undefined,
            iteratee?: _.ValueIteratee<T>
        ): LoDashExplicitSyncWrapper<T[]>;
        xorBy<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            arrays2: _.List<T> | null | undefined,
            arrays3: _.List<T> | null | undefined,
            ...iteratee: Array<_.ValueIteratee<T> | _.List<T> | null | undefined>
        ): LoDashExplicitSyncWrapper<T[]>;
        xorWith<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            comparator?: _.Comparator<T>
        ): LoDashExplicitSyncWrapper<T[]>;
        xorWith<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            arrays2: _.List<T> | null | undefined,
            comparator?: _.Comparator<T>
        ): LoDashExplicitSyncWrapper<T[]>;
        xorWith<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            arrays2: _.List<T> | null | undefined,
            arrays3: _.List<T> | null | undefined,
            ...comparator: Array<_.Comparator<T> | _.List<T> | null | undefined>
        ): LoDashExplicitSyncWrapper<T[]>;
        zip<T1, T2>(
            this: LoDashExplicitSyncWrapper<_.List<T1>>,
            arrays2: _.List<T2>,
        ): LoDashExplicitSyncWrapper<Array<[T1 | undefined, T2 | undefined]>>;
        zip<T1, T2, T3>(
            this: LoDashExplicitSyncWrapper<_.List<T1>>,
            arrays2: _.List<T2>,
            arrays3: _.List<T3>,
        ): LoDashExplicitSyncWrapper<Array<[T1 | undefined, T2 | undefined, T3 | undefined]>>;
        zip<T1, T2, T3, T4>(
            this: LoDashExplicitSyncWrapper<_.List<T1>>,
            arrays2: _.List<T2>,
            arrays3: _.List<T3>,
            arrays4: _.List<T4>,
        ): LoDashExplicitSyncWrapper<Array<[T1 | undefined, T2 | undefined, T3 | undefined, T4 | undefined]>>;
        zip<T1, T2, T3, T4, T5>(
            this: LoDashExplicitSyncWrapper<_.List<T1>>,
            arrays2: _.List<T2>,
            arrays3: _.List<T3>,
            arrays4: _.List<T4>,
            arrays5: _.List<T5>,
        ): LoDashExplicitSyncWrapper<Array<[T1 | undefined, T2 | undefined, T3 | undefined, T4 | undefined, T5 | undefined]>>;
        zip<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            ...arrays: Array<_.List<T> | null | undefined>
        ): LoDashExplicitSyncWrapper<Array<Array<T | undefined>>>;
        zipObject<T>(
            this: LoDashExplicitSyncWrapper<_.List<_.PropertyName>>,
            values: _.List<T>
        ): LoDashExplicitSyncWrapper<_.Dictionary<T>>;
        zipObject(
            this: LoDashExplicitSyncWrapper<_.List<_.PropertyName>>
        ): LoDashExplicitSyncWrapper<_.Dictionary<undefined>>;
        zipObjectDeep(
            this: LoDashExplicitSyncWrapper<_.List<_.PropertyPath>>,
            values?: _.List<any>
        ): LoDashExplicitSyncWrapper<object>;
        zipWith<T, TResult>(
            this: LoDashExplicitSyncWrapper<_.List<T>>,
            iteratee: (value1: T) => TResult
        ): LoDashExplicitSyncWrapper<TResult[]>;
        zipWith<T1, T2, TResult>(
            this: LoDashExplicitSyncWrapper<_.List<T1>>,
            arrays2: _.List<T2>,
            iteratee: (value1: T1, value2: T2) => TResult
        ): LoDashExplicitSyncWrapper<TResult[]>;
        zipWith<T1, T2, T3, TResult>(
            this: LoDashExplicitSyncWrapper<_.List<T1>>,
            arrays2: _.List<T2>,
            arrays3: _.List<T3>,
            iteratee: (value1: T1, value2: T2, value3: T3) => TResult
        ): LoDashExplicitSyncWrapper<TResult[]>;
        zipWith<T1, T2, T3, T4, TResult>(
            this: LoDashExplicitSyncWrapper<_.List<T1>>,
            arrays2: _.List<T2>,
            arrays3: _.List<T3>,
            arrays4: _.List<T4>,
            iteratee: (value1: T1, value2: T2, value3: T3, value4: T4) => TResult
        ): LoDashExplicitSyncWrapper<TResult[]>;
        zipWith<T1, T2, T3, T4, T5, TResult>(
            this: LoDashExplicitSyncWrapper<_.List<T1>>,
            arrays2: _.List<T2>,
            arrays3: _.List<T3>,
            arrays4: _.List<T4>,
            arrays5: _.List<T5>,
            iteratee: (value1: T1, value2: T2, value3: T3, value4: T4, value5: T5) => TResult
        ): LoDashExplicitSyncWrapper<TResult[]>;
        zipWith<T, TResult>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            ...iteratee: Array<((...group: T[]) => TResult) | _.List<T> | null | undefined>
        ): LoDashExplicitSyncWrapper<TResult[]>;
        countBy<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            iteratee?: _.ValueIteratee<T>
        ): LoDashExplicitSyncWrapper<_.Dictionary<number>>;
        countBy<T extends object>(
            this: LoDashExplicitSyncWrapper<T | null | undefined>,
            iteratee?: _.ValueIteratee<T[keyof T]>
        ): LoDashExplicitSyncWrapper<_.Dictionary<number>>;
        every<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            predicate?: _.ListIterateeCustom<T, boolean>
        ): LoDashExplicitSyncWrapper<boolean>;
        every<T extends object>(
            this: LoDashExplicitSyncWrapper<T | null | undefined>,
            predicate?: _.ObjectIterateeCustom<T, boolean>
        ): LoDashExplicitSyncWrapper<boolean>;
        filter(
            this: LoDashExplicitSyncWrapper<string | null | undefined>,
            predicate?: _.StringIterator<boolean>
        ): LoDashExplicitSyncWrapper<string[]>;
        filter<T, S extends T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            predicate: _.ListIteratorTypeGuard<T, S>
        ): LoDashExplicitSyncWrapper<S[]>;
        filter<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            predicate?: _.ListIterateeCustom<T, boolean>
        ): LoDashExplicitSyncWrapper<T[]>;
        filter<T extends object, S extends T[keyof T]>(
            this: LoDashExplicitSyncWrapper<T | null | undefined>,
            predicate: _.ObjectIteratorTypeGuard<T, S>
        ): LoDashExplicitSyncWrapper<S[]>;
        filter<T extends object>(
            this: LoDashExplicitSyncWrapper<T | null | undefined>,
            predicate?: _.ObjectIterateeCustom<T, boolean>
        ): LoDashExplicitSyncWrapper<Array<T[keyof T]>>;
        find<T, S extends T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            predicate: _.ListIteratorTypeGuard<T, S>,
            fromIndex?: number
        ): LoDashExplicitSyncWrapper<S|undefined>;
        find<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            predicate?: _.ListIterateeCustom<T, boolean>,
            fromIndex?: number
        ): LoDashExplicitSyncWrapper<T|undefined>;
        find<T extends object, S extends T[keyof T]>(
            this: LoDashExplicitSyncWrapper<T | null | undefined>,
            predicate: _.ObjectIteratorTypeGuard<T, S>,
            fromIndex?: number
        ): LoDashExplicitSyncWrapper<S|undefined>;
        find<T extends object>(
            this: LoDashExplicitSyncWrapper<T | null | undefined>,
            predicate?: _.ObjectIterateeCustom<T, boolean>,
            fromIndex?: number
        ): LoDashExplicitSyncWrapper<T[keyof T]|undefined>;
        findLast<T, S extends T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            predicate: _.ListIteratorTypeGuard<T, S>,
            fromIndex?: number
        ): LoDashExplicitSyncWrapper<S | undefined>;
        findLast<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            predicate?: _.ListIterateeCustom<T, boolean>,
            fromIndex?: number
        ): LoDashExplicitSyncWrapper<T | undefined>;
        findLast<T extends object, S extends T[keyof T]>(
            this: LoDashExplicitSyncWrapper<T | null | undefined>,
            predicate: _.ObjectIteratorTypeGuard<T, S>,
            fromIndex?: number
        ): LoDashExplicitSyncWrapper<S|undefined>;
        findLast<T extends object>(
            this: LoDashExplicitSyncWrapper<T | null | undefined>,
            predicate?: _.ObjectIterateeCustom<T, boolean>,
            fromIndex?: number
        ): LoDashExplicitSyncWrapper<T[keyof T]|undefined>;
        flatMap<T>(this: LoDashExplicitSyncWrapper<_.List<_.Many<T>> | _.Dictionary<_.Many<T>> | _.NumericDictionary<_.Many<T>> | null | undefined>): LoDashExplicitSyncWrapper<T[]>;
        flatMap(): LoDashExplicitSyncWrapper<any[]>;
        flatMap<T, TResult>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            iteratee: _.ListIterator<T, _.Many<TResult>>
        ): LoDashExplicitSyncWrapper<TResult[]>;
        flatMap<T extends object, TResult>(
            this: LoDashExplicitSyncWrapper<T | null | undefined>,
            iteratee: _.ObjectIterator<T, _.Many<TResult>>
        ): LoDashExplicitSyncWrapper<TResult[]>;
        flatMap(
            iteratee: string
        ): LoDashExplicitSyncWrapper<any[]>;
        flatMap(
            iteratee: object
        ): LoDashExplicitSyncWrapper<boolean[]>;
        flatMapDeep<T>(
            this: LoDashExplicitSyncWrapper<_.List<_.ListOfRecursiveArraysOrValues<T> | T> | _.Dictionary<_.ListOfRecursiveArraysOrValues<T> | T> | _.NumericDictionary<_.ListOfRecursiveArraysOrValues<T> | T> | null | undefined>
        ): LoDashExplicitSyncWrapper<T[]>;
        flatMapDeep<T, TResult>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            iteratee: _.ListIterator<T, _.ListOfRecursiveArraysOrValues<TResult> | TResult>
        ): LoDashExplicitSyncWrapper<TResult[]>;
        flatMapDeep<T extends object, TResult>(
            this: LoDashExplicitSyncWrapper<T | null | undefined>,
            iteratee: _.ObjectIterator<T, _.ListOfRecursiveArraysOrValues<TResult> | TResult>
        ): LoDashExplicitSyncWrapper<TResult[]>;
        flatMapDeep(
            this: LoDashExplicitSyncWrapper<object | null | undefined>,
            iteratee: string
        ): LoDashExplicitSyncWrapper<any[]>;
        flatMapDeep(
            this: LoDashExplicitSyncWrapper<object | null | undefined>,
            iteratee: object
        ): LoDashExplicitSyncWrapper<boolean[]>;
        flatMapDepth<T>(
            this: LoDashExplicitSyncWrapper<_.List<_.ListOfRecursiveArraysOrValues<T> | T> | _.Dictionary<_.ListOfRecursiveArraysOrValues<T> | T> | _.NumericDictionary<_.ListOfRecursiveArraysOrValues<T> | T> | null | undefined>
        ): LoDashExplicitSyncWrapper<T[]>;
        flatMapDepth<T, TResult>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            iteratee: _.ListIterator<T, _.ListOfRecursiveArraysOrValues<TResult> | TResult>,
            depth?: number
        ): LoDashExplicitSyncWrapper<TResult[]>;
        flatMapDepth<T extends object, TResult>(
            this: LoDashExplicitSyncWrapper<T | null | undefined>,
            iteratee: _.ObjectIterator<T, _.ListOfRecursiveArraysOrValues<TResult> | TResult>,
            depth?: number
        ): LoDashExplicitSyncWrapper<TResult[]>;
        flatMapDepth(
            this: LoDashExplicitSyncWrapper<object | null | undefined>,
            iteratee: string,
            depth?: number
        ): LoDashExplicitSyncWrapper<any[]>;
        flatMapDepth(
            this: LoDashExplicitSyncWrapper<object | null | undefined>,
            iteratee: object,
            depth?: number
        ): LoDashExplicitSyncWrapper<boolean[]>;
        groupBy<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            iteratee?: _.ValueIteratee<T>
        ): LoDashExplicitSyncWrapper<_.Dictionary<T[]>>;
        groupBy<T extends object>(
            this: LoDashExplicitSyncWrapper<T | null | undefined>,
            iteratee?: _.ValueIteratee<T[keyof T]>
        ): LoDashExplicitSyncWrapper<_.Dictionary<Array<T[keyof T]>>>;
        includes<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | _.Dictionary<T> | _.NumericDictionary<T> | null | undefined>,
            target: T,
            fromIndex?: number
        ): LoDashExplicitSyncWrapper<boolean>;
        invokeMap(
            methodName: string,
            ...args: any[]): LoDashExplicitSyncWrapper<any[]>;
        invokeMap<TResult>(
            method: (...args: any[]) => TResult,
            ...args: any[]): LoDashExplicitSyncWrapper<TResult[]>;
        keyBy<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            iteratee?: _.ValueIterateeCustom<T, _.PropertyName>
        ): LoDashExplicitSyncWrapper<_.Dictionary<T>>;
        keyBy<T extends object>(
            this: LoDashExplicitSyncWrapper<T | null | undefined>,
            iteratee?: _.ValueIterateeCustom<T[keyof T], _.PropertyName>
        ): LoDashExplicitSyncWrapper<_.Dictionary<T[keyof T]>>;
        map<T, TResult>(
            this: LoDashExplicitSyncWrapper<T[] | null | undefined>,
            iteratee: _.ArrayIterator<T, TResult>
        ): LoDashExplicitSyncWrapper<TResult[]>;
        map<T, TResult>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            iteratee: _.ListIterator<T, TResult>
        ): LoDashExplicitSyncWrapper<TResult[]>;
        map<T>(this: LoDashExplicitSyncWrapper<_.List<T> | _.Dictionary<T> | _.NumericDictionary<T> | null | undefined>): LoDashExplicitSyncWrapper<T[]>;
        map<T extends object, TResult>(
            this: LoDashExplicitSyncWrapper<T | null | undefined>,
            iteratee: _.ObjectIterator<T, TResult>
        ): LoDashExplicitSyncWrapper<TResult[]>;
        map<T, K extends keyof T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | _.Dictionary<T> | _.NumericDictionary<T> | null | undefined>,
            iteratee: K
        ): LoDashExplicitSyncWrapper<Array<T[K]>>;
        map<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | _.Dictionary<T> | _.NumericDictionary<T> | null | undefined>,
            iteratee?: string
        ): LoDashExplicitSyncWrapper<any[]>;
        map<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | _.Dictionary<T> | _.NumericDictionary<T> | null | undefined>,
            iteratee?: object
        ): LoDashExplicitSyncWrapper<boolean[]>;
        orderBy<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            iteratees?: _.Many<_.ListIterator<T, _.NotVoid>>,
            orders?: _.Many<boolean|"asc"|"desc">
        ): LoDashExplicitSyncWrapper<T[]>;
        orderBy<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            iteratees?: _.Many<_.ListIteratee<T>>,
            orders?: _.Many<boolean|"asc"|"desc">
        ): LoDashExplicitSyncWrapper<T[]>;
        orderBy<T extends object>(
            this: LoDashExplicitSyncWrapper<T | null | undefined>,
            iteratees?: _.Many<_.ObjectIterator<T, _.NotVoid>>,
            orders?: _.Many<boolean|"asc"|"desc">
        ): LoDashExplicitSyncWrapper<Array<T[keyof T]>>;
        orderBy<T extends object>(
            this: LoDashExplicitSyncWrapper<T | null | undefined>,
            iteratees?: _.Many<_.ObjectIteratee<T>>,
            orders?: _.Many<boolean|"asc"|"desc">
        ): LoDashExplicitSyncWrapper<Array<T[keyof T]>>;
        partition<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            callback: _.ValueIteratee<T>
        ): LoDashExplicitSyncWrapper<[T[], T[]]>;
        partition<T>(
            this: LoDashExplicitSyncWrapper<T | null | undefined>,
            callback: _.ValueIteratee<T[keyof T]>
        ): LoDashExplicitSyncWrapper<[Array<T[keyof T]>, Array<T[keyof T]>]>;
        reduce<T, TResult>(
            this: LoDashExplicitSyncWrapper<T[] | null | undefined>,
            callback: _.MemoListIterator<T, TResult, T[]>,
            accumulator: TResult
        ): LoDashExplicitSyncWrapper<TResult>;
        reduce<T, TResult>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            callback: _.MemoListIterator<T, TResult, _.List<T>>,
            accumulator: TResult
        ): LoDashExplicitSyncWrapper<TResult>;
        reduce<T extends object, TResult>(
            this: LoDashExplicitSyncWrapper<T | null | undefined>,
            callback: _.MemoObjectIterator<T[keyof T], TResult, T>,
            accumulator: TResult
        ): LoDashExplicitSyncWrapper<TResult>;
        reduce<T>(
            this: LoDashExplicitSyncWrapper<T[] | null | undefined>,
            callback: _.MemoListIterator<T, T, T[]>
        ): LoDashExplicitSyncWrapper<T | undefined>;
        reduce<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            callback: _.MemoListIterator<T, T, _.List<T>>
        ): LoDashExplicitSyncWrapper<T | undefined>;
        reduce<T extends object>(
            this: LoDashExplicitSyncWrapper<T | null | undefined>,
            callback: _.MemoObjectIterator<T[keyof T], T[keyof T], T>
        ): LoDashExplicitSyncWrapper<T[keyof T] | undefined>;
        reduceRight<T, TResult>(
            this: LoDashExplicitSyncWrapper<T[] | null | undefined>,
            callback: _.MemoListIterator<T, TResult, T[]>,
            accumulator: TResult
        ): LoDashExplicitSyncWrapper<TResult>;
        reduceRight<T, TResult>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            callback: _.MemoListIterator<T, TResult, _.List<T>>,
            accumulator: TResult
        ): LoDashExplicitSyncWrapper<TResult>;
        reduceRight<T extends object, TResult>(
            this: LoDashExplicitSyncWrapper<T | null | undefined>,
            callback: _.MemoObjectIterator<T[keyof T], TResult, T>,
            accumulator: TResult
        ): LoDashExplicitSyncWrapper<TResult>;
        reduceRight<T>(
            this: LoDashExplicitSyncWrapper<T[] | null | undefined>,
            callback: _.MemoListIterator<T, T, T[]>
        ): LoDashExplicitSyncWrapper<T | undefined>;
        reduceRight<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            callback: _.MemoListIterator<T, T, _.List<T>>
        ): LoDashExplicitSyncWrapper<T | undefined>;
        reduceRight<T extends object>(
            this: LoDashExplicitSyncWrapper<T | null | undefined>,
            callback: _.MemoObjectIterator<T[keyof T], T[keyof T], T>
        ): LoDashExplicitSyncWrapper<T[keyof T] | undefined>;
        reject(
            this: LoDashExplicitSyncWrapper<string | null | undefined>,
            predicate?: _.StringIterator<boolean>
        ): LoDashExplicitSyncWrapper<string[]>;
        reject<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            predicate?: _.ListIterateeCustom<T, boolean>
        ): LoDashExplicitSyncWrapper<T[]>;
        reject<T extends object>(
            this: LoDashExplicitSyncWrapper<T | null | undefined>,
            predicate?: _.ObjectIterateeCustom<T, boolean>
        ): LoDashExplicitSyncWrapper<Array<T[keyof T]>>;
        sample<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | _.Dictionary<T> | _.NumericDictionary<T> | null | undefined>
        ): LoDashExplicitSyncWrapper<T | undefined>;
        sample<T extends object>(
            this: LoDashExplicitSyncWrapper<T | null | undefined>
        ): LoDashExplicitSyncWrapper<T[keyof T] | undefined>;
        sampleSize<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | _.Dictionary<T> | _.NumericDictionary<T> | null | undefined>,
            n?: number
        ): LoDashExplicitSyncWrapper<T[]>;
        sampleSize<T extends object>(
            this: LoDashExplicitSyncWrapper<T | null | undefined>,
            n?: number
        ): LoDashExplicitSyncWrapper<Array<T[keyof T]>>;
        shuffle<T>(this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>): LoDashExplicitSyncWrapper<T[]>;
        shuffle<T extends object>(this: LoDashExplicitSyncWrapper<T | null | undefined>): LoDashExplicitSyncWrapper<Array<T[keyof T]>>;
        size(): LoDashExplicitSyncWrapper<number>;
        some<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            predicate?: _.ListIterateeCustom<T, boolean>
        ): LoDashExplicitSyncWrapper<boolean>;
        some<T extends object>(
            this: LoDashExplicitSyncWrapper<T | null | undefined>,
            predicate?: _.ObjectIterateeCustom<T, boolean>
        ): LoDashExplicitSyncWrapper<boolean>;
        sortBy<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            ...iteratees: Array<_.Many<_.ListIteratee<T>>>
        ): LoDashExplicitSyncWrapper<T[]>;
        sortBy<T extends object>(
            this: LoDashExplicitSyncWrapper<T | null | undefined>,
            ...iteratees: Array<_.Many<_.ObjectIteratee<T>>>
        ): LoDashExplicitSyncWrapper<Array<T[keyof T]>>;
        pop<T>(this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>): LoDashExplicitSyncWrapper<T | undefined>;
        push<T>(this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>, ...items: T[]): this;
        shift<T>(this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>): LoDashExplicitSyncWrapper<T | undefined>;
        sort<T>(this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>, compareFn?: (a: T, b: T) => number): this;
        splice<T>(this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>, start: number, deleteCount?: number, ...items: T[]): this;
        unshift<T>(this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>, ...items: T[]): this;
        now(): LoDashExplicitSyncWrapper<number>;
        after<TFunc extends (...args: any[]) => any>(func: TFunc): LoDashExplicitSyncWrapper<TFunc>;
        ary(n?: number): LoDashExplicitSyncWrapper<(...args: any[]) => any>;
        before<TFunc extends (...args: any[]) => any>(func: TFunc): LoDashExplicitSyncWrapper<TFunc>;
        bind(
            thisArg: any,
            ...partials: any[]
        ): LoDashExplicitSyncWrapper<(...args: any[]) => any>;
        bindKey(
            key: string,
            ...partials: any[]
        ): LoDashExplicitSyncWrapper<(...args: any[]) => any>;
        curry<T1, R>(this: LoDashExplicitSyncWrapper<(t1: T1) => R>):
            LoDashExplicitSyncWrapper<_.CurriedFunction1<T1, R>>;
        curry<T1, T2, R>(this: LoDashExplicitSyncWrapper<(t1: T1, t2: T2) => R>):
            LoDashExplicitSyncWrapper<_.CurriedFunction2<T1, T2, R>>;
        curry<T1, T2, T3, R>(this: LoDashExplicitSyncWrapper<(t1: T1, t2: T2, t3: T3) => R>):
            LoDashExplicitSyncWrapper<_.CurriedFunction3<T1, T2, T3, R>>;
        curry<T1, T2, T3, T4, R>(this: LoDashExplicitSyncWrapper<(t1: T1, t2: T2, t3: T3, t4: T4) => R>):
            LoDashExplicitSyncWrapper<_.CurriedFunction4<T1, T2, T3, T4, R>>;
        curry<T1, T2, T3, T4, T5, R>(this: LoDashExplicitSyncWrapper<(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R>):
            LoDashExplicitSyncWrapper<_.CurriedFunction5<T1, T2, T3, T4, T5, R>>;
        curry(arity?: number): LoDashExplicitSyncWrapper<(...args: any[]) => any>;
        curryRight<T1, R>(this: LoDashExplicitSyncWrapper<(t1: T1) => R>, arity?: number):
            LoDashExplicitSyncWrapper<_.RightCurriedFunction1<T1, R>>;
        curryRight<T1, T2, R>(this: LoDashExplicitSyncWrapper<(t1: T1, t2: T2) => R>, arity?: number):
            LoDashExplicitSyncWrapper<_.RightCurriedFunction2<T1, T2, R>>;
        curryRight<T1, T2, T3, R>(this: LoDashExplicitSyncWrapper<(t1: T1, t2: T2, t3: T3) => R>, arity?: number):
            LoDashExplicitSyncWrapper<_.RightCurriedFunction3<T1, T2, T3, R>>;
        curryRight<T1, T2, T3, T4, R>(this: LoDashExplicitSyncWrapper<(t1: T1, t2: T2, t3: T3, t4: T4) => R>, arity?: number):
            LoDashExplicitSyncWrapper<_.RightCurriedFunction4<T1, T2, T3, T4, R>>;
        curryRight<T1, T2, T3, T4, T5, R>(this: LoDashExplicitSyncWrapper<(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R>, arity?: number):
            LoDashExplicitSyncWrapper<_.RightCurriedFunction5<T1, T2, T3, T4, T5, R>>;
        curryRight(arity?: number): LoDashExplicitSyncWrapper<(...args: any[]) => any>;
        debounce(
            wait?: number,
            options?: _.DebounceSettings
        ): LoDashExplicitSyncWrapper<TValue & _.Cancelable>;
        defer(...args: any[]): LoDashExplicitSyncWrapper<number>;
        delay(
            wait: number,
            ...args: any[]
        ): LoDashExplicitSyncWrapper<number>;
        memoize(resolver?: (...args: any[]) => any): LoDashExplicitSyncWrapper<TValue & _.MemoizedFunction>;
        negate(this: LoDashExplicitSyncWrapper<() => boolean>): LoDashExplicitSyncWrapper<() => boolean>;
        negate<A1>(this: LoDashExplicitSyncWrapper<(a1: A1) => boolean>): LoDashExplicitSyncWrapper<(a1: A1) => boolean>;
        negate<A1, A2>(this: LoDashExplicitSyncWrapper<(a1: A1, a2: A2) => boolean>): LoDashExplicitSyncWrapper<(a1: A1, a2: A2) => boolean>;
        negate(this: LoDashExplicitSyncWrapper<(...args: any[]) => any>): LoDashExplicitSyncWrapper<(...args: any[]) => boolean>;
        overArgs(...transforms: Array<_.Many<(...args: any[]) => any>>): LoDashExplicitSyncWrapper<(...args: any[]) => any>;
        partial: _.ExplicitPartial;
        partialRight: _.ExplicitPartialRight;
        rearg(...indexes: Array<_.Many<number>>): LoDashExplicitSyncWrapper<(...args: any[]) => any>;
        rest(start?: number): LoDashExplicitSyncWrapper<(...args: any[]) => any>;
        spread<TResult>(this: LoDashExplicitSyncWrapper<(...args: any[]) => TResult>): LoDashExplicitSyncWrapper<(...args: any[]) => TResult>;
        spread<TResult>(this: LoDashExplicitSyncWrapper<(...args: any[]) => TResult>, start: number): LoDashExplicitSyncWrapper<(...args: any[]) => TResult>;
        throttle(
            wait?: number,
            options?: _.ThrottleSettings
        ): LoDashExplicitSyncWrapper<TValue & _.Cancelable>;
        unary<T, TResult>(this: LoDashExplicitSyncWrapper<(arg1: T, ...args: any[]) => TResult>): LoDashExplicitSyncWrapper<(arg1: T) => TResult>;
        wrap<TArgs, TResult>(
            wrapper: (value: TValue, ...args: TArgs[]) => TResult
        ): LoDashExplicitSyncWrapper<(...args: TArgs[]) => TResult>;
        wrap<TResult>(
            wrapper: (value: TValue, ...args: any[]) => TResult
        ): LoDashExplicitSyncWrapper<(...args: any[]) => TResult>;
        castArray<T>(this: LoDashExplicitSyncWrapper<_.Many<T>>): LoDashExplicitSyncWrapper<T[]>;
        clone(): this;
        cloneDeep(): this;
        cloneDeepWith(
            customizer: _.CloneDeepWithCustomizer<TValue>
        ): LoDashExplicitSyncWrapper<any>;
        cloneDeepWith(): this;
        cloneWith<TResult extends object | string | number | boolean | null>(
            customizer: _.CloneWithCustomizer<TValue, TResult>
        ): LoDashExplicitSyncWrapper<TResult>;
        cloneWith<TResult>(
            customizer: _.CloneWithCustomizer<TValue, TResult | undefined>
        ): LoDashExplicitSyncWrapper<TResult | TValue>;
        cloneWith(): this;
        conformsTo<T>(this: LoDashExplicitSyncWrapper<T>, source: _.ConformsPredicateObject<T>): LoDashExplicitSyncWrapper<boolean>;
        // Note: we can't use TValue here,  because it generates a typescript error when strictFunctionTypes is enabled.
        eq(
            other: any
        ): LoDashExplicitSyncWrapper<boolean>;
        gt(other: any): LoDashExplicitSyncWrapper<boolean>;
        gte(other: any): LoDashExplicitSyncWrapper<boolean>;
        isArguments(): LoDashExplicitSyncWrapper<boolean>;
        isArray(): LoDashExplicitSyncWrapper<boolean>;
        isArrayBuffer(): LoDashExplicitSyncWrapper<boolean>;
        isArrayLike(): LoDashExplicitSyncWrapper<boolean>;
        isArrayLikeObject(): LoDashExplicitSyncWrapper<boolean>;
        isBoolean(): LoDashExplicitSyncWrapper<boolean>;
        isBuffer(): LoDashExplicitSyncWrapper<boolean>;
        isDate(): LoDashExplicitSyncWrapper<boolean>;
        isElement(): LoDashExplicitSyncWrapper<boolean>;
        isEmpty(): LoDashExplicitSyncWrapper<boolean>;
        isEqual(
            other: any
        ): LoDashExplicitSyncWrapper<boolean>;
        isEqualWith(
            other: any,
            customizer?: _.IsEqualCustomizer
        ): LoDashExplicitSyncWrapper<boolean>;
        isError(): LoDashExplicitSyncWrapper<boolean>;
        isFinite(): LoDashExplicitSyncWrapper<boolean>;
        isFunction(): LoDashExplicitSyncWrapper<boolean>;
        isInteger(): LoDashExplicitSyncWrapper<boolean>;
        isLength(): LoDashExplicitSyncWrapper<boolean>;
        isMap(): LoDashExplicitSyncWrapper<boolean>;
        isMatch(source: object): LoDashExplicitSyncWrapper<boolean>;
        isMatchWith(source: object, customizer: _.isMatchWithCustomizer): LoDashExplicitSyncWrapper<boolean>;
        isNaN(): LoDashExplicitSyncWrapper<boolean>;
        isNative(): LoDashExplicitSyncWrapper<boolean>;
        isNil(): LoDashExplicitSyncWrapper<boolean>;
        isNull(): LoDashExplicitSyncWrapper<boolean>;
        isNumber(): LoDashExplicitSyncWrapper<boolean>;
        isObject(): LoDashExplicitSyncWrapper<boolean>;
        isObjectLike(): LoDashExplicitSyncWrapper<boolean>;
        isPlainObject(): LoDashExplicitSyncWrapper<boolean>;
        isRegExp(): LoDashExplicitSyncWrapper<boolean>;
        isSafeInteger(): LoDashExplicitSyncWrapper<boolean>;
        isSet(): LoDashExplicitSyncWrapper<boolean>;
        isString(): LoDashExplicitSyncWrapper<boolean>;
        isSymbol(): LoDashExplicitSyncWrapper<boolean>;
        isTypedArray(): LoDashExplicitSyncWrapper<boolean>;
        isUndefined(): LoDashExplicitSyncWrapper<boolean>;
        isWeakMap(): LoDashExplicitSyncWrapper<boolean>;
        isWeakSet(): LoDashExplicitSyncWrapper<boolean>;
        lt(other: any): LoDashExplicitSyncWrapper<boolean>;
        lte(other: any): LoDashExplicitSyncWrapper<boolean>;
        toArray<T>(this: LoDashExplicitSyncWrapper<_.List<T> | _.Dictionary<T> | _.NumericDictionary<T> | null | undefined>): LoDashExplicitSyncWrapper<T[]>;
        toArray<T extends object>(this: _.LoDashImplicitWrapper<T>): LoDashExplicitSyncWrapper<Array<T[keyof T]>>;
        toFinite(): LoDashExplicitSyncWrapper<number>;
        toInteger(): LoDashExplicitSyncWrapper<number>;
        toLength(): LoDashExplicitSyncWrapper<number>;
        toNumber(): LoDashExplicitSyncWrapper<number>;
        toPlainObject(): LoDashExplicitSyncWrapper<any>;
        toSafeInteger(): LoDashExplicitSyncWrapper<number>;
        add(addend: number): LoDashExplicitSyncWrapper<number>;
        ceil(precision?: number): LoDashExplicitSyncWrapper<number>;
        divide(divisor: number): LoDashExplicitSyncWrapper<number>;
        floor(precision?: number): LoDashExplicitSyncWrapper<number>;
        max<T>(this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>): LoDashExplicitSyncWrapper<T | undefined>;
        maxBy<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            iteratee?: _.ValueIteratee<T>
        ): LoDashExplicitSyncWrapper<T | undefined>;
        mean(): LoDashExplicitSyncWrapper<number>;
        meanBy<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            iteratee?: _.ValueIteratee<T>
        ): LoDashExplicitSyncWrapper<number>;
        min<T>(this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>): LoDashExplicitSyncWrapper<T | undefined>;
        minBy<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            iteratee?: _.ValueIteratee<T>
        ): LoDashExplicitSyncWrapper<T | undefined>;
        multiply(multiplicand: number): LoDashExplicitSyncWrapper<number>;
        round(precision?: number): LoDashExplicitSyncWrapper<number>;
        subtract(
            subtrahend: number
        ): LoDashExplicitSyncWrapper<number>;
        sum(): LoDashExplicitSyncWrapper<number>;
        sumBy<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            iteratee?: ((value: T) => number) | string
        ): LoDashExplicitSyncWrapper<number>;
        clamp(
            lower: number,
            upper: number
        ): LoDashExplicitSyncWrapper<number>;
        clamp(
            upper: number
        ): LoDashExplicitSyncWrapper<number>;
        inRange(
            start: number,
            end?: number
        ): LoDashExplicitSyncWrapper<boolean>;
        random(floating?: boolean): LoDashExplicitSyncWrapper<number>;
        random(
            max: number,
            floating?: boolean
        ): LoDashExplicitSyncWrapper<number>;
        assign<TSource>(
            source: TSource
        ): LoDashExplicitSyncWrapper<TValue & TSource>;
        assign<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2
        ): LoDashExplicitSyncWrapper<TValue & TSource1 & TSource2>;
        assign<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): LoDashExplicitSyncWrapper<TValue & TSource1 & TSource2 & TSource3>;
        assign<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): LoDashExplicitSyncWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;
        assign(): LoDashExplicitSyncWrapper<TValue>;
        assign(...otherArgs: any[]): LoDashExplicitSyncWrapper<any>;
        assignIn<TSource>(
            source: TSource
        ): LoDashExplicitSyncWrapper<TValue & TSource>;
        assignIn<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2
        ): LoDashExplicitSyncWrapper<TValue & TSource1 & TSource2>;
        assignIn<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): LoDashExplicitSyncWrapper<TValue & TSource1 & TSource2 & TSource3>;
        assignIn<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): LoDashExplicitSyncWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;
        assignIn(): LoDashExplicitSyncWrapper<TValue>;
        assignIn(...otherArgs: any[]): LoDashExplicitSyncWrapper<any>;
        assignInWith<TSource>(
            source: TSource,
            customizer: _.AssignCustomizer
        ): LoDashExplicitSyncWrapper<TValue & TSource>;
        assignInWith<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2,
            customizer: _.AssignCustomizer
        ): LoDashExplicitSyncWrapper<TValue & TSource1 & TSource2>;
        assignInWith<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: _.AssignCustomizer
        ): LoDashExplicitSyncWrapper<TValue & TSource1 & TSource2 & TSource3>;
        assignInWith<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: _.AssignCustomizer
        ): LoDashExplicitSyncWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;
        assignInWith(): LoDashExplicitSyncWrapper<TValue>;
        assignInWith(...otherArgs: any[]): LoDashExplicitSyncWrapper<any>;
        assignWith<TSource>(
            source: TSource,
            customizer: _.AssignCustomizer
        ): LoDashExplicitSyncWrapper<TValue & TSource>;
        assignWith<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2,
            customizer: _.AssignCustomizer
        ): LoDashExplicitSyncWrapper<TValue & TSource1 & TSource2>;
        assignWith<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: _.AssignCustomizer
        ): LoDashExplicitSyncWrapper<TValue & TSource1 & TSource2 & TSource3>;
        assignWith<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: _.AssignCustomizer
        ): LoDashExplicitSyncWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;
        assignWith(): LoDashExplicitSyncWrapper<TValue>;
        assignWith(...otherArgs: any[]): LoDashExplicitSyncWrapper<any>;
        at<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | _.Dictionary<T> | _.NumericDictionary<T> | null | undefined>,
            ...props: _.PropertyPath[]
        ): LoDashExplicitSyncWrapper<T[]>;
        at<T extends object>(
            this: LoDashExplicitSyncWrapper<T | null | undefined>,
            ...props: Array<_.Many<keyof T>>
        ): LoDashExplicitSyncWrapper<Array<T[keyof T]>>;
        create<U extends object>(properties?: U): LoDashExplicitSyncWrapper<TValue & U>;
        defaults<TSource>(
            source: TSource
        ): LoDashExplicitSyncWrapper<TSource & TValue>;
        defaults<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2
        ): LoDashExplicitSyncWrapper<TSource2 & TSource1 & TValue>;
        defaults<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): LoDashExplicitSyncWrapper<TSource3 & TSource2 & TSource1 & TValue>;
        defaults<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): LoDashExplicitSyncWrapper<TSource4 & TSource3 & TSource2 & TSource1 & TValue>;
        defaults(): LoDashExplicitSyncWrapper<TValue>;
        defaults(...sources: any[]): LoDashExplicitSyncWrapper<any>;
        defaultsDeep(...sources: any[]): LoDashExplicitSyncWrapper<any>;
        entries<T>(this: LoDashExplicitSyncWrapper<_.Dictionary<T> | _.NumericDictionary<T>>): LoDashExplicitSyncWrapper<Array<[string, T]>>;
        entries(): LoDashExplicitSyncWrapper<Array<[string, any]>>;
        entriesIn<T>(this: LoDashExplicitSyncWrapper<_.Dictionary<T> | _.NumericDictionary<T>>): LoDashExplicitSyncWrapper<Array<[string, T]>>;
        entriesIn(): LoDashExplicitSyncWrapper<Array<[string, any]>>;
        extend<TSource>(
            source: TSource
        ): LoDashExplicitSyncWrapper<TValue & TSource>;
        extend<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2
        ): LoDashExplicitSyncWrapper<TValue & TSource1 & TSource2>;
        extend<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): LoDashExplicitSyncWrapper<TValue & TSource1 & TSource2 & TSource3>;
        extend<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): LoDashExplicitSyncWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;
        extend(): LoDashExplicitSyncWrapper<TValue>;
        extend(...otherArgs: any[]): LoDashExplicitSyncWrapper<any>;
        extendWith<TSource>(
            source: TSource,
            customizer: _.AssignCustomizer
        ): LoDashExplicitSyncWrapper<TValue & TSource>;
        extendWith<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2,
            customizer: _.AssignCustomizer
        ): LoDashExplicitSyncWrapper<TValue & TSource1 & TSource2>;
        extendWith<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: _.AssignCustomizer
        ): LoDashExplicitSyncWrapper<TValue & TSource1 & TSource2 & TSource3>;
        extendWith<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: _.AssignCustomizer
        ): LoDashExplicitSyncWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;
        extendWith(): LoDashExplicitSyncWrapper<TValue>;
        extendWith(...otherArgs: any[]): LoDashExplicitSyncWrapper<any>;
        findKey<T>(
            this: LoDashExplicitSyncWrapper<T | null | undefined>,
            predicate?: _.ObjectIteratee<T>
        ): LoDashExplicitSyncWrapper<string | undefined>;
        findLastKey<T>(
            this: LoDashExplicitSyncWrapper<T | null | undefined>,
            predicate?: _.ObjectIteratee<T>
        ): LoDashExplicitSyncWrapper<string | undefined>;
        functions(): LoDashExplicitSyncWrapper<string[]>;
        functionsIn(): LoDashExplicitSyncWrapper<string[]>;
        get<TKey extends keyof TValue>(
            path: TKey | [TKey]
        ): LoDashExplicitSyncWrapper<TValue[TKey]>;
        get<TObject extends object, TKey extends keyof TObject>(
            this: LoDashExplicitSyncWrapper<TObject | null | undefined>,
            path: TKey | [TKey],
        ): LoDashExplicitSyncWrapper<TObject[TKey] | undefined>;
        get<TObject extends object, TKey extends keyof TObject, TDefault>(
            this: LoDashExplicitSyncWrapper<TObject | null | undefined>,
            path: TKey | [TKey],
            defaultValue: TDefault
        ): LoDashExplicitSyncWrapper<TObject[TKey] | TDefault>;
        get<T>(
            this: LoDashExplicitSyncWrapper<_.NumericDictionary<T>>,
            path: number
        ): LoDashExplicitSyncWrapper<T>;
        get<T>(
            this: LoDashExplicitSyncWrapper<_.NumericDictionary<T> | null | undefined>,
            path: number
        ): LoDashExplicitSyncWrapper<T | undefined>;
        get<T, TDefault>(
            this: LoDashExplicitSyncWrapper<_.NumericDictionary<T> | null | undefined>,
            path: number,
            defaultValue: TDefault
        ): LoDashExplicitSyncWrapper<T | undefined>;
        get<TDefault>(
            this: LoDashExplicitSyncWrapper<null | undefined>,
            path: _.PropertyPath,
            defaultValue: TDefault
        ): LoDashExplicitSyncWrapper<TDefault>;
        get(
            this: LoDashExplicitSyncWrapper<null | undefined>,
            path: _.PropertyPath
        ): LoDashExplicitSyncWrapper<undefined>;
        get(
            path: _.PropertyPath,
            defaultValue?: any
        ): LoDashExplicitSyncWrapper<any>;
        has(path: _.PropertyPath): LoDashExplicitSyncWrapper<boolean>;
        hasIn(path: _.PropertyPath): LoDashExplicitSyncWrapper<boolean>;
        invert(): LoDashExplicitSyncWrapper<_.Dictionary<string>>;
        invertBy<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | _.Dictionary<T> | _.NumericDictionary<T> | null | undefined>,
            interatee?: _.ValueIteratee<T>
        ): LoDashExplicitSyncWrapper<_.Dictionary<string[]>>;
        invertBy<T extends object>(
            this: LoDashExplicitSyncWrapper<T | null | undefined>,
            interatee?: _.ValueIteratee<T[keyof T]>
        ): LoDashExplicitSyncWrapper<_.Dictionary<string[]>>;
        invoke(
            path: _.PropertyPath,
            ...args: any[]): LoDashExplicitSyncWrapper<any>;
        keys(): LoDashExplicitSyncWrapper<string[]>;
        keysIn(): LoDashExplicitSyncWrapper<string[]>;
        mapKeys<T>(
            this: LoDashExplicitSyncWrapper<_.List<T> | null | undefined>,
            iteratee?: _.ListIteratee<T>
        ): LoDashExplicitSyncWrapper<_.Dictionary<T>>;
        mapKeys<T extends object>(
            this: LoDashExplicitSyncWrapper<T | null | undefined>,
            iteratee?: _.ObjectIteratee<T>
        ): LoDashExplicitSyncWrapper<_.Dictionary<T[keyof T]>>;
        mapValues<TResult>(
            this: LoDashExplicitSyncWrapper<string | null | undefined>,
            callback: _.StringIterator<TResult>
        ): LoDashExplicitSyncWrapper<_.NumericDictionary<TResult>>;
        mapValues<T, TResult>(
            this: LoDashExplicitSyncWrapper<_.Dictionary<T> | _.NumericDictionary<T> | null | undefined>,
            callback: _.DictionaryIterator<T, TResult>
        ): LoDashExplicitSyncWrapper<_.Dictionary<TResult>>;
        mapValues<T extends object, TResult>(
            this: LoDashExplicitSyncWrapper<T | null | undefined>,
            callback: _.ObjectIterator<T, TResult>
        ): LoDashExplicitSyncWrapper<{ [P in keyof T]: TResult }>;
        mapValues<T>(
            this: LoDashExplicitSyncWrapper<_.Dictionary<T> | _.NumericDictionary<T> | null | undefined>,
            iteratee: object
        ): LoDashExplicitSyncWrapper<_.Dictionary<boolean>>;
        mapValues<T extends object>(
            this: LoDashExplicitSyncWrapper<T | null | undefined>,
            iteratee: object
        ): LoDashExplicitSyncWrapper<{ [P in keyof T]: boolean }>;
        mapValues<T, TKey extends keyof T>(
            this: LoDashExplicitSyncWrapper<_.Dictionary<T> | _.NumericDictionary<T> | null | undefined>,
            iteratee: TKey
        ): LoDashExplicitSyncWrapper<_.Dictionary<T[TKey]>>;
        mapValues<T>(
            this: LoDashExplicitSyncWrapper<_.Dictionary<T> | _.NumericDictionary<T> | null | undefined>,
            iteratee: string
        ): LoDashExplicitSyncWrapper<_.Dictionary<any>>;
        mapValues<T extends object>(
            this: LoDashExplicitSyncWrapper<T | null | undefined>,
            iteratee: string
        ): LoDashExplicitSyncWrapper<{ [P in keyof T]: any }>;
        mapValues(this: LoDashExplicitSyncWrapper<string | null | undefined>): LoDashExplicitSyncWrapper<_.NumericDictionary<string>>;
        mapValues<T>(this: LoDashExplicitSyncWrapper<_.Dictionary<T> | _.NumericDictionary<T> | null | undefined>): LoDashExplicitSyncWrapper<_.Dictionary<T>>;
        mapValues<T extends object>(this: LoDashExplicitSyncWrapper<T>): LoDashExplicitSyncWrapper<T>;
        mapValues<T extends object>(this: LoDashExplicitSyncWrapper<T | null | undefined>): LoDashExplicitSyncWrapper<_.PartialObject<T>>;
        merge<TSource>(
            source: TSource
        ): LoDashExplicitSyncWrapper<TValue & TSource>;
        merge<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2
        ): LoDashExplicitSyncWrapper<TValue & TSource1 & TSource2>;
        merge<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): LoDashExplicitSyncWrapper<TValue & TSource1 & TSource2 & TSource3>;
        merge<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): LoDashExplicitSyncWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;
        merge(
            ...otherArgs: any[]
        ): LoDashExplicitSyncWrapper<any>;
        mergeWith<TSource>(
            source: TSource,
            customizer: _.MergeWithCustomizer
        ): LoDashExplicitSyncWrapper<TValue & TSource>;
        mergeWith<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2,
            customizer: _.MergeWithCustomizer
        ): LoDashExplicitSyncWrapper<TValue & TSource1 & TSource2>;
        mergeWith<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: _.MergeWithCustomizer
        ): LoDashExplicitSyncWrapper<TValue & TSource1 & TSource2 & TSource3>;
        mergeWith<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: _.MergeWithCustomizer
        ): LoDashExplicitSyncWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;
        mergeWith(
            ...otherArgs: any[]
        ): LoDashExplicitSyncWrapper<any>;
        omit<T extends _.AnyKindOfDictionary>(
            this: LoDashExplicitSyncWrapper<T | null | undefined>,
            ...paths: Array<_.Many<_.PropertyName>>
        ): LoDashExplicitSyncWrapper<T>;
        omit<T extends object, K extends keyof T>(
            this: LoDashExplicitSyncWrapper<T | null | undefined>,
            ...paths: Array<_.Many<K>>
        ): LoDashExplicitSyncWrapper<_.Omit<T, K>>;
        omit<T extends object>(
            this: LoDashExplicitSyncWrapper<T | null | undefined>,
            ...paths: Array<_.Many<_.PropertyName>>
        ): LoDashExplicitSyncWrapper<_.PartialObject<T>>;
        omitBy<T>(
            this: LoDashExplicitSyncWrapper<_.Dictionary<T> | null | undefined>,
            predicate?: _.ValueKeyIteratee<T>
        ): LoDashExplicitSyncWrapper<_.Dictionary<T>>;
        omitBy<T>(
            this: LoDashExplicitSyncWrapper<_.NumericDictionary<T> | null | undefined>,
            predicate?: _.ValueKeyIteratee<T>
        ): LoDashExplicitSyncWrapper<_.NumericDictionary<T>>;
        omitBy<T extends object>(
            this: LoDashExplicitSyncWrapper<T | null | undefined>,
            predicate: _.ValueKeyIteratee<T[keyof T]>
        ): LoDashExplicitSyncWrapper<_.PartialObject<T>>;
        pick<T extends object, U extends keyof T>(
            this: LoDashExplicitSyncWrapper<T>,
            ...props: Array<_.Many<U>>
        ): LoDashExplicitSyncWrapper<Pick<T, U>>;
        pick<T extends object>(
            this: LoDashExplicitSyncWrapper<T | null | undefined>,
            ...props: _.PropertyPath[]
        ): LoDashExplicitSyncWrapper<_.PartialObject<T>>;
        pickBy<T, S extends T>(
            this: LoDashExplicitSyncWrapper<_.Dictionary<T> | null | undefined>,
            predicate: _.ValueKeyIterateeTypeGuard<T, S>
        ): LoDashExplicitSyncWrapper<_.Dictionary<S>>;
        pickBy<T, S extends T>(
            this: LoDashExplicitSyncWrapper<_.NumericDictionary<T> | null | undefined>,
            predicate: _.ValueKeyIterateeTypeGuard<T, S>
        ): LoDashExplicitSyncWrapper<_.NumericDictionary<S>>;
        pickBy<T>(
            this: LoDashExplicitSyncWrapper<_.Dictionary<T> | null | undefined>,
            predicate?: _.ValueKeyIteratee<T>
        ): LoDashExplicitSyncWrapper<_.Dictionary<T>>;
        pickBy<T>(
            this: LoDashExplicitSyncWrapper<_.NumericDictionary<T> | null | undefined>,
            predicate?: _.ValueKeyIteratee<T>
        ): LoDashExplicitSyncWrapper<_.NumericDictionary<T>>;
        pickBy<T extends object>(
            this: LoDashExplicitSyncWrapper<T | null | undefined>,
            predicate?: _.ValueKeyIteratee<T[keyof T]>
        ): LoDashExplicitSyncWrapper<_.PartialObject<T>>;
        result<TResult>(
            path: _.PropertyPath,
            defaultValue?: TResult|((...args: any[]) => TResult)
        ): LoDashExplicitSyncWrapper<TResult>;
        set(
            path: _.PropertyPath,
            value: any
        ): this;
        set<TResult>(
            path: _.PropertyPath,
            value: any
        ): LoDashExplicitSyncWrapper<TResult>;
        setWith(
            path: _.PropertyPath,
            value: any,
            customizer?: _.SetWithCustomizer<TValue>
        ): this;
        setWith<TResult>(
            path: _.PropertyPath,
            value: any,
            customizer?: _.SetWithCustomizer<TValue>
        ): LoDashExplicitSyncWrapper<TResult>;
        toPairs<T>(this: LoDashExplicitSyncWrapper<_.Dictionary<T> | _.NumericDictionary<T>>): LoDashExplicitSyncWrapper<Array<[string, T]>>;
        toPairs(): LoDashExplicitSyncWrapper<Array<[string, any]>>;
        toPairsIn<T>(this: LoDashExplicitSyncWrapper<_.Dictionary<T> | _.NumericDictionary<T>>): LoDashExplicitSyncWrapper<Array<[string, T]>>;
        toPairsIn(): LoDashExplicitSyncWrapper<Array<[string, any]>>;
        transform<T, TResult>(
            this: LoDashExplicitSyncWrapper<T[]>,
            iteratee: _.MemoVoidArrayIterator<T, TResult[]>,
            accumulator?: TResult[]
        ): LoDashExplicitSyncWrapper<TResult[]>;
        transform<T, TResult>(
            this: LoDashExplicitSyncWrapper<T[]>,
            iteratee: _.MemoVoidArrayIterator<T, _.Dictionary<TResult>>,
            accumulator?: _.Dictionary<TResult>
        ): LoDashExplicitSyncWrapper<_.Dictionary<TResult>>;
        transform<T, TResult>(
            this: LoDashExplicitSyncWrapper<_.Dictionary<T>>,
            iteratee: _.MemoVoidDictionaryIterator<T, _.Dictionary<TResult>>,
            accumulator?: _.Dictionary<TResult>
        ): LoDashExplicitSyncWrapper<_.Dictionary<TResult>>;
        transform<T, TResult>(
            this: LoDashExplicitSyncWrapper<_.Dictionary<T>>,
            iteratee: _.MemoVoidDictionaryIterator<T, TResult[]>,
            accumulator?: TResult[]
        ): LoDashExplicitSyncWrapper<TResult[]>;
        transform(
            this: LoDashExplicitSyncWrapper<any[]>,
        ): LoDashExplicitSyncWrapper<any[]>;
        transform(): LoDashExplicitSyncWrapper<_.Dictionary<any>>;
        unset(path: _.PropertyPath): LoDashExplicitSyncWrapper<boolean>;
        update(
            path: _.PropertyPath,
            updater: (value: any) => any
        ): LoDashExplicitSyncWrapper<any>;
        updateWith(
            path: _.PropertyPath,
            updater: (oldValue: any) => any,
            customizer?: _.SetWithCustomizer<TValue>
        ): this;
        updateWith<TResult>(
            path: _.PropertyPath,
            updater: (oldValue: any) => any,
            customizer?: _.SetWithCustomizer<TValue>
        ): LoDashExplicitSyncWrapper<TResult>;
        values<T>(this: LoDashExplicitSyncWrapper<_.Dictionary<T> | _.NumericDictionary<T> | _.List<T> | null | undefined>): LoDashExplicitSyncWrapper<T[]>;
        values<T extends object>(this: LoDashExplicitSyncWrapper<T | null | undefined>): LoDashExplicitSyncWrapper<Array<T[keyof T]>>;
        values(): LoDashExplicitSyncWrapper<any[]>;
        valuesIn<T>(this: LoDashExplicitSyncWrapper<_.Dictionary<T> | _.NumericDictionary<T> | _.List<T> | null | undefined>): LoDashExplicitSyncWrapper<T[]>;
        valuesIn<T extends object>(this: LoDashExplicitSyncWrapper<T | null | undefined>): LoDashExplicitSyncWrapper<Array<T[keyof T]>>;
        chain(): this;
        chain(): this;
        plant<T>(value: T): LoDashExplicitSyncWrapper<T>;
        thru<TResult>(interceptor: (value: TValue) => TResult): LoDashExplicitSyncWrapper<TResult>;
        camelCase(): LoDashExplicitSyncWrapper<string>;
        capitalize(): LoDashExplicitSyncWrapper<string>;
        deburr(): LoDashExplicitSyncWrapper<string>;
        endsWith(
            target?: string,
            position?: number
        ): LoDashExplicitSyncWrapper<boolean>;
        escape(): LoDashExplicitSyncWrapper<string>;
        escapeRegExp(): LoDashExplicitSyncWrapper<string>;
        kebabCase(): LoDashExplicitSyncWrapper<string>;
        lowerCase(): LoDashExplicitSyncWrapper<string>;
        lowerFirst(): LoDashExplicitSyncWrapper<string>;
        pad(
            length?: number,
            chars?: string
        ): LoDashExplicitSyncWrapper<string>;
        padEnd(
            length?: number,
            chars?: string
        ): LoDashExplicitSyncWrapper<string>;
        padStart(
            length?: number,
            chars?: string
        ): LoDashExplicitSyncWrapper<string>;
        parseInt(radix?: number): LoDashExplicitSyncWrapper<number>;
        repeat(n?: number): LoDashExplicitSyncWrapper<string>;
        replace(
            pattern: RegExp | string,
            replacement: _.ReplaceFunction | string
        ): LoDashExplicitSyncWrapper<string>;
        replace(
            replacement: _.ReplaceFunction | string
        ): LoDashExplicitSyncWrapper<string>;
        snakeCase(): LoDashExplicitSyncWrapper<string>;
        split(
            separator?: RegExp|string,
            limit?: number
        ): LoDashExplicitSyncWrapper<string[]>;
        startCase(): LoDashExplicitSyncWrapper<string>;
        startsWith(
            target?: string,
            position?: number
        ): LoDashExplicitSyncWrapper<boolean>;
        template(options?: _.TemplateOptions): LoDashExplicitSyncWrapper<_.TemplateExecutor>;
        toLower(): LoDashExplicitSyncWrapper<string>;
        toUpper(): LoDashExplicitSyncWrapper<string>;
        trim(chars?: string): LoDashExplicitSyncWrapper<string>;
        trimEnd(chars?: string): LoDashExplicitSyncWrapper<string>;
        trimStart(chars?: string): LoDashExplicitSyncWrapper<string>;
        truncate(options?: _.TruncateOptions): LoDashExplicitSyncWrapper<string>;
        unescape(): LoDashExplicitSyncWrapper<string>;
        upperCase(): LoDashExplicitSyncWrapper<string>;
        upperFirst(): LoDashExplicitSyncWrapper<string>;
        words(pattern?: string|RegExp): LoDashExplicitSyncWrapper<string[]>;
        attempt<TResult>(...args: any[]): LoDashExplicitSyncWrapper<TResult|Error>;
        conforms<T>(this: LoDashExplicitSyncWrapper<_.ConformsPredicateObject<T>>): LoDashExplicitSyncWrapper<(value: T) => boolean>;
        constant(): LoDashExplicitSyncWrapper<() => TValue>;
        defaultTo<T>(this: LoDashExplicitSyncWrapper<T | null | undefined>, defaultValue: T): LoDashExplicitSyncWrapper<T>;
        defaultTo<T, TDefault>(
            this: LoDashExplicitSyncWrapper<T | null | undefined>,
            defaultValue: TDefault
        ): LoDashExplicitSyncWrapper<T | TDefault>;
        // 0-argument first function
        flow<R1, R2>(this: LoDashExplicitSyncWrapper<() => R1>, f2: (a: R1) => R2): LoDashExplicitSyncWrapper<() => R2>;
        flow<R1, R2, R3>(this: LoDashExplicitSyncWrapper<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): LoDashExplicitSyncWrapper<() => R3>;
        flow<R1, R2, R3, R4>(this: LoDashExplicitSyncWrapper<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): LoDashExplicitSyncWrapper<() => R4>;
        flow<R1, R2, R3, R4, R5>(this: LoDashExplicitSyncWrapper<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): LoDashExplicitSyncWrapper<() => R5>;
        flow<R1, R2, R3, R4, R5, R6>(this: LoDashExplicitSyncWrapper<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): LoDashExplicitSyncWrapper<() => R6>;
        flow<R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitSyncWrapper<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): LoDashExplicitSyncWrapper<() => R7>;
        flow<R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitSyncWrapper<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<_.Many<(a: any) => any>>): LoDashExplicitSyncWrapper<() => any>;
        // 1-argument first function
        flow<A1, R1, R2>(this: LoDashExplicitSyncWrapper<(a1: A1) => R1>, f2: (a: R1) => R2): LoDashExplicitSyncWrapper<(a1: A1) => R2>;
        flow<A1, R1, R2, R3>(this: LoDashExplicitSyncWrapper<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): LoDashExplicitSyncWrapper<(a1: A1) => R3>;
        flow<A1, R1, R2, R3, R4>(this: LoDashExplicitSyncWrapper<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): LoDashExplicitSyncWrapper<(a1: A1) => R4>;
        flow<A1, R1, R2, R3, R4, R5>(this: LoDashExplicitSyncWrapper<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): LoDashExplicitSyncWrapper<(a1: A1) => R5>;
        flow<A1, R1, R2, R3, R4, R5, R6>(this: LoDashExplicitSyncWrapper<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): LoDashExplicitSyncWrapper<(a1: A1) => R6>;
        flow<A1, R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitSyncWrapper<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): LoDashExplicitSyncWrapper<(a1: A1) => R7>;
        flow<A1, R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitSyncWrapper<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<_.Many<(a: any) => any>>): LoDashExplicitSyncWrapper<(a1: A1) => any>;
        // 2-argument first function
        flow<A1, A2, R1, R2>(this: LoDashExplicitSyncWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2): LoDashExplicitSyncWrapper<(a1: A1, a2: A2) => R2>;
        flow<A1, A2, R1, R2, R3>(this: LoDashExplicitSyncWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): LoDashExplicitSyncWrapper<(a1: A1, a2: A2) => R3>;
        flow<A1, A2, R1, R2, R3, R4>(this: LoDashExplicitSyncWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): LoDashExplicitSyncWrapper<(a1: A1, a2: A2) => R4>;
        flow<A1, A2, R1, R2, R3, R4, R5>(this: LoDashExplicitSyncWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): LoDashExplicitSyncWrapper<(a1: A1, a2: A2) => R5>;
        flow<A1, A2, R1, R2, R3, R4, R5, R6>(this: LoDashExplicitSyncWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): LoDashExplicitSyncWrapper<(a1: A1, a2: A2) => R6>;
        flow<A1, A2, R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitSyncWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): LoDashExplicitSyncWrapper<(a1: A1, a2: A2) => R7>;
        flow<A1, A2, R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitSyncWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<_.Many<(a: any) => any>>): LoDashExplicitSyncWrapper<(a1: A1, a2: A2) => any>;
        // 3-argument first function
        flow<A1, A2, A3, R1, R2>(this: LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2): LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3) => R2>;
        flow<A1, A2, A3, R1, R2, R3>(this: LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3) => R3>;
        flow<A1, A2, A3, R1, R2, R3, R4>(this: LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3) => R4>;
        flow<A1, A2, A3, R1, R2, R3, R4, R5>(this: LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3) => R5>;
        flow<A1, A2, A3, R1, R2, R3, R4, R5, R6>(this: LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3) => R6>;
        flow<A1, A2, A3, R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3) => R7>;
        flow<A1, A2, A3, R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<_.Many<(a: any) => any>>): LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3) => any>;
        // 4-argument first function
        flow<A1, A2, A3, A4, R1, R2>(this: LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2): LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R2>;
        flow<A1, A2, A3, A4, R1, R2, R3>(this: LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R3>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4>(this: LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R4>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5>(this: LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R5>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6>(this: LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R6>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R7>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<_.Many<(a: any) => any>>): LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => any>;
        // any-argument first function
        flow<A1, A2, A3, A4, R1, R2>(this: LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2): LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R2>;
        flow<A1, A2, A3, A4, R1, R2, R3>(this: LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R3>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4>(this: LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R4>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5>(this: LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R5>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6>(this: LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R6>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R7>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<_.Many<(a: any) => any>>): LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => any>;
        flow(this: LoDashExplicitSyncWrapper<(...args: any[]) => any>, funcs: Array<_.Many<(a: any) => any>>): LoDashExplicitSyncWrapper<(...args: any[]) => any>;
        // 0-argument first function
        flowRight<R2, R1>(this: LoDashExplicitSyncWrapper<(a: R1) => R2>, f1: () => R1): LoDashExplicitSyncWrapper<() => R2>;
        flowRight<R3, R2, R1>(this: LoDashExplicitSyncWrapper<(a: R2) => R3>, f2: (a: R1) => R2, f1: () => R1): LoDashExplicitSyncWrapper<() => R3>;
        flowRight<R4, R3, R2, R1>(this: LoDashExplicitSyncWrapper<(a: R3) => R4>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): LoDashExplicitSyncWrapper<() => R4>;
        flowRight<R5, R4, R3, R2, R1>(this: LoDashExplicitSyncWrapper<(a: R4) => R5>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): LoDashExplicitSyncWrapper<() => R5>;
        flowRight<R6, R5, R4, R3, R2, R1>(this: LoDashExplicitSyncWrapper<(a: R5) => R6>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): LoDashExplicitSyncWrapper<() => R6>;
        flowRight<R7, R6, R5, R4, R3, R2, R1>(this: LoDashExplicitSyncWrapper<(a: R6) => R7>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): LoDashExplicitSyncWrapper<() => R7>;
        // 1-argument first function
        flowRight<A1, R2, R1>(this: LoDashExplicitSyncWrapper<(a: R1) => R2>, f1: (a1: A1) => R1): LoDashExplicitSyncWrapper<(a1: A1) => R2>;
        flowRight<A1, R3, R2, R1>(this: LoDashExplicitSyncWrapper<(a: R2) => R3>, f2: (a: R1) => R2, f1: (a1: A1) => R1): LoDashExplicitSyncWrapper<(a1: A1) => R3>;
        flowRight<A1, R4, R3, R2, R1>(this: LoDashExplicitSyncWrapper<(a: R3) => R4>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): LoDashExplicitSyncWrapper<(a1: A1) => R4>;
        flowRight<A1, R5, R4, R3, R2, R1>(this: LoDashExplicitSyncWrapper<(a: R4) => R5>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): LoDashExplicitSyncWrapper<(a1: A1) => R5>;
        flowRight<A1, R6, R5, R4, R3, R2, R1>(this: LoDashExplicitSyncWrapper<(a: R5) => R6>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): LoDashExplicitSyncWrapper<(a1: A1) => R6>;
        flowRight<A1, R7, R6, R5, R4, R3, R2, R1>(this: LoDashExplicitSyncWrapper<(a: R6) => R7>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): LoDashExplicitSyncWrapper<(a1: A1) => R7>;
        // 2-argument first function
        flowRight<A1, A2, R2, R1>(this: LoDashExplicitSyncWrapper<(a: R1) => R2>, f1: (a1: A1, a2: A2) => R1): LoDashExplicitSyncWrapper<(a1: A1, a2: A2) => R2>;
        flowRight<A1, A2, R3, R2, R1>(this: LoDashExplicitSyncWrapper<(a: R2) => R3>, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): LoDashExplicitSyncWrapper<(a1: A1, a2: A2) => R3>;
        flowRight<A1, A2, R4, R3, R2, R1>(this: LoDashExplicitSyncWrapper<(a: R3) => R4>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): LoDashExplicitSyncWrapper<(a1: A1, a2: A2) => R4>;
        flowRight<A1, A2, R5, R4, R3, R2, R1>(this: LoDashExplicitSyncWrapper<(a: R4) => R5>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): LoDashExplicitSyncWrapper<(a1: A1, a2: A2) => R5>;
        flowRight<A1, A2, R6, R5, R4, R3, R2, R1>(this: LoDashExplicitSyncWrapper<(a: R5) => R6>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): LoDashExplicitSyncWrapper<(a1: A1, a2: A2) => R6>;
        flowRight<A1, A2, R7, R6, R5, R4, R3, R2, R1>(this: LoDashExplicitSyncWrapper<(a: R6) => R7>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): LoDashExplicitSyncWrapper<(a1: A1, a2: A2) => R7>;
        // 3-argument first function
        flowRight<A1, A2, A3, R2, R1>(this: LoDashExplicitSyncWrapper<(a: R1) => R2>, f1: (a1: A1, a2: A2, a3: A3) => R1): LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3) => R2>;
        flowRight<A1, A2, A3, R3, R2, R1>(this: LoDashExplicitSyncWrapper<(a: R2) => R3>, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3) => R3>;
        flowRight<A1, A2, A3, R4, R3, R2, R1>(this: LoDashExplicitSyncWrapper<(a: R3) => R4>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3) => R4>;
        flowRight<A1, A2, A3, R5, R4, R3, R2, R1>(this: LoDashExplicitSyncWrapper<(a: R4) => R5>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3) => R5>;
        flowRight<A1, A2, A3, R6, R5, R4, R3, R2, R1>(this: LoDashExplicitSyncWrapper<(a: R5) => R6>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3) => R6>;
        flowRight<A1, A2, A3, R7, R6, R5, R4, R3, R2, R1>(this: LoDashExplicitSyncWrapper<(a: R6) => R7>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3) => R7>;
        // 4-argument first function
        flowRight<A1, A2, A3, A4, R2, R1>(this: LoDashExplicitSyncWrapper<(a: R1) => R2>, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R2>;
        flowRight<A1, A2, A3, A4, R3, R2, R1>(this: LoDashExplicitSyncWrapper<(a: R2) => R3>, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R3>;
        flowRight<A1, A2, A3, A4, R4, R3, R2, R1>(this: LoDashExplicitSyncWrapper<(a: R3) => R4>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R4>;
        flowRight<A1, A2, A3, A4, R5, R4, R3, R2, R1>(this: LoDashExplicitSyncWrapper<(a: R4) => R5>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R5>;
        flowRight<A1, A2, A3, A4, R6, R5, R4, R3, R2, R1>(this: LoDashExplicitSyncWrapper<(a: R5) => R6>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R6>;
        flowRight<A1, A2, A3, A4, R7, R6, R5, R4, R3, R2, R1>(this: LoDashExplicitSyncWrapper<(a: R6) => R7>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): LoDashExplicitSyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R7>;
        // any-argument first function
        flowRight<R2, R1>(this: LoDashExplicitSyncWrapper<(a: R1) => R2>, f1: (...args: any[]) => R1): LoDashExplicitSyncWrapper<(...args: any[]) => R2>;
        flowRight<R3, R2, R1>(this: LoDashExplicitSyncWrapper<(a: R1) => R2>, f2: (a: R1) => R2, f1: (...args: any[]) => R1): LoDashExplicitSyncWrapper<(...args: any[]) => R3>;
        flowRight<R4, R3, R2, R1>(this: LoDashExplicitSyncWrapper<(a: R1) => R2>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): LoDashExplicitSyncWrapper<(...args: any[]) => R4>;
        flowRight<R5, R4, R3, R2, R1>(this: LoDashExplicitSyncWrapper<(a: R1) => R2>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): LoDashExplicitSyncWrapper<(...args: any[]) => R5>;
        flowRight<R6, R5, R4, R3, R2, R1>(this: LoDashExplicitSyncWrapper<(a: R1) => R2>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): LoDashExplicitSyncWrapper<(...args: any[]) => R6>;
        flowRight<R7, R6, R5, R4, R3, R2, R1>(this: LoDashExplicitSyncWrapper<(a: R1) => R2>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): LoDashExplicitSyncWrapper<(...args: any[]) => R7>;
        flowRight(this: LoDashExplicitSyncWrapper<(a: any) => any>, f6: (a: any) => any, f5: (a: any) => any, f4: (a: any) => any, f3: (a: any) => any, f2: (a: any) => any, f1: () => any, ...funcs: Array<_.Many<(...args: any[]) => any>>): LoDashExplicitSyncWrapper<(...args: any[]) => any>;
        flowRight(this: LoDashExplicitSyncWrapper<(a: any) => any>, funcs: Array<_.Many<(...args: any[]) => any>>): LoDashExplicitSyncWrapper<(...args: any[]) => any>;
        identity(): this;
        iteratee<TFunction extends (...args: any[]) => any>(
            this: LoDashExplicitSyncWrapper<TFunction | string | object>
        ): LoDashExplicitSyncWrapper<TFunction>;
        matches<V>(): LoDashExplicitSyncWrapper<(value: V) => boolean>;
        matchesProperty<SrcValue>(
            srcValue: SrcValue
        ): LoDashExplicitSyncWrapper<(value: any) => boolean>;
        matchesProperty<SrcValue, Value>(
            srcValue: SrcValue
        ): LoDashExplicitSyncWrapper<(value: Value) => boolean>;
        method(...args: any[]): LoDashExplicitSyncWrapper<(object: any) => any>;
        methodOf(
            ...args: any[]
        ): LoDashExplicitSyncWrapper<(path: _.PropertyPath) => any>;
        mixin(
            source: _.Dictionary<(...args: any[]) => any>,
            options?: _.MixinOptions
        ): this;
        mixin(
            options?: _.MixinOptions
        ): LoDashExplicitSyncWrapper<_.LoDashStatic>;
        noConflict(): LoDashExplicitSyncWrapper<typeof _>;
        noop(...args: any[]): LoDashExplicitSyncWrapper<undefined>;
        nthArg(): LoDashExplicitSyncWrapper<(...args: any[]) => any>;
        over<TResult>(
            this: LoDashExplicitSyncWrapper<_.Many<(...args: any[]) => TResult>>,
            ...iteratees: Array<_.Many<(...args: any[]) => TResult>>
        ): LoDashExplicitSyncWrapper<(...args: any[]) => TResult[]>;
        overEvery<T>(...predicates: Array<_.Many<(...args: T[]) => boolean>>): LoDashExplicitSyncWrapper<(...args: T[]) => boolean>;
        overSome<T>(...predicates: Array<_.Many<(...args: T[]) => boolean>>): LoDashExplicitSyncWrapper<(...args: T[]) => boolean>;
        property<TObj, TResult>(): LoDashExplicitSyncWrapper<(obj: TObj) => TResult>;
        propertyOf(): LoDashExplicitSyncWrapper<(path: _.PropertyPath) => any>;
        range(
            end?: number,
            step?: number
        ): LoDashExplicitSyncWrapper<number[]>;
        rangeRight(
            end?: number,
            step?: number
        ): LoDashExplicitSyncWrapper<number[]>;
        stubArray(): LoDashExplicitSyncWrapper<any[]>;
        stubFalse(): LoDashExplicitSyncWrapper<false>;
        stubObject(): LoDashExplicitSyncWrapper<any>;
        stubString(): LoDashExplicitSyncWrapper<string>;
        stubTrue(): LoDashExplicitSyncWrapper<true>;
        times<TResult>(
            iteratee: (num: number) => TResult
        ): LoDashExplicitSyncWrapper<TResult[]>;
        times(): LoDashExplicitSyncWrapper<number[]>;
        toPath(): LoDashExplicitSyncWrapper<string[]>;
        uniqueId(): LoDashExplicitSyncWrapper<string>;
    }

    interface LoDashExplicitAsyncWrapper<TValue> {
        chunk<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            size?: number,
        ): LoDashExplicitAsyncWrapper<T[][]>;
        compact<T>(this: LoDashExplicitAsyncWrapper<_.List<T | null | undefined | false | "" | 0> | null | undefined>): LoDashExplicitAsyncWrapper<T[]>;
        concat<T>(this: LoDashExplicitAsyncWrapper<_.Many<T>>, ...values: Array<_.Many<T>>): LoDashExplicitAsyncWrapper<T[]>;
        difference<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            ...values: Array<_.List<T>>
        ): LoDashExplicitAsyncWrapper<T[]>;
        differenceBy<T1, T2>(
            this: LoDashExplicitAsyncWrapper<_.List<T1> | null | undefined>,
            values: _.List<T2>,
            iteratee: _.ValueIteratee<T1 | T2>
        ): LoDashExplicitAsyncWrapper<T1[]>;
        differenceBy<T1, T2, T3>(
            this: LoDashExplicitAsyncWrapper<_.List<T1> | null | undefined>,
            values1: _.List<T2>,
            values2: _.List<T3>,
            iteratee: _.ValueIteratee<T1 | T2 | T3>
        ): LoDashExplicitAsyncWrapper<T1[]>;
        differenceBy<T1, T2, T3, T4>(
            this: LoDashExplicitAsyncWrapper<_.List<T1> | null | undefined>,
            values1: _.List<T2>,
            values2: _.List<T3>,
            values3: _.List<T4>,
            iteratee: _.ValueIteratee<T1 | T2 | T3 | T4>
        ): LoDashExplicitAsyncWrapper<T1[]>;
        differenceBy<T1, T2, T3, T4, T5>(
            this: LoDashExplicitAsyncWrapper<_.List<T1> | null | undefined>,
            values1: _.List<T2>,
            values2: _.List<T3>,
            values3: _.List<T4>,
            values4: _.List<T5>,
            iteratee: _.ValueIteratee<T1 | T2 | T3 | T4 | T5>
        ): LoDashExplicitAsyncWrapper<T1[]>;
        differenceBy<T1, T2, T3, T4, T5, T6>(
            this: LoDashExplicitAsyncWrapper<_.List<T1> | null | undefined>,
            values1: _.List<T2>,
            values2: _.List<T3>,
            values3: _.List<T4>,
            values4: _.List<T5>,
            values5: _.List<T6>,
            iteratee: _.ValueIteratee<T1 | T2 | T3 | T4 | T5 | T6>
        ): LoDashExplicitAsyncWrapper<T1[]>;
        differenceBy<T1, T2, T3, T4, T5, T6, T7>(
            this: LoDashExplicitAsyncWrapper<_.List<T1> | null | undefined>,
            values1: _.List<T2>,
            values2: _.List<T3>,
            values3: _.List<T4>,
            values4: _.List<T5>,
            values5: _.List<T6>,
            ...values: Array<_.List<T7> | _.ValueIteratee<T1 | T2 | T3 | T4 | T5 | T6 | T7>>
        ): LoDashExplicitAsyncWrapper<T1[]>;
        differenceBy<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            ...values: Array<_.List<T>>
        ): LoDashExplicitAsyncWrapper<T[]>;
        differenceWith<T1, T2>(
            this: LoDashExplicitAsyncWrapper<_.List<T1> | null | undefined>,
            values: _.List<T2>,
            comparator: _.Comparator2<T1, T2>
        ): LoDashExplicitAsyncWrapper<T1[]>;
        differenceWith<T1, T2, T3>(
            this: LoDashExplicitAsyncWrapper<_.List<T1> | null | undefined>,
            values1: _.List<T2>,
            values2: _.List<T3>,
            comparator: _.Comparator2<T1, T2 | T3>
        ): LoDashExplicitAsyncWrapper<T1[]>;
        differenceWith<T1, T2, T3, T4>(
            this: LoDashExplicitAsyncWrapper<_.List<T1> | null | undefined>,
            values1: _.List<T2>,
            values2: _.List<T3>,
            ...values: Array<_.List<T4> | _.Comparator2<T1, T2 | T3 | T4>>
        ): LoDashExplicitAsyncWrapper<T1[]>;
        differenceWith<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            ...values: Array<_.List<T>>
        ): LoDashExplicitAsyncWrapper<T[]>;
        drop<T>(this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>, n?: number): LoDashExplicitAsyncWrapper<T[]>;
        dropRight<T>(this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>, n?: number): LoDashExplicitAsyncWrapper<T[]>;
        dropRightWhile<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            predicate?: _.ListIteratee<T>
        ): LoDashExplicitAsyncWrapper<T[]>;
        dropWhile<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            predicate?: _.ListIteratee<T>
        ): LoDashExplicitAsyncWrapper<T[]>;
        fill<T>(
            this: LoDashExplicitAsyncWrapper<any[] | null | undefined>,
            value: T
        ): LoDashExplicitAsyncWrapper<T[]>;
        fill<T>(
            this: LoDashExplicitAsyncWrapper<_.List<any> | null | undefined>,
            value: T
        ): LoDashExplicitAsyncWrapper<_.List<T>>;
        fill<T, U>(
            this: LoDashExplicitAsyncWrapper<U[] | null | undefined>,
            value: T,
            start?: number,
            end?: number
        ): LoDashExplicitAsyncWrapper<Array<T | U>>;
        fill<T, U>(
            this: LoDashExplicitAsyncWrapper<_.List<U> | null | undefined>,
            value: T,
            start?: number,
            end?: number
        ): LoDashExplicitAsyncWrapper<_.List<T | U>>;
        findIndex<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            predicate?: _.ListIterateeCustom<T, boolean>,
            fromIndex?: number
        ): LoDashExplicitAsyncWrapper<number>;
        findLastIndex<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            predicate?: _.ListIterateeCustom<T, boolean>,
            fromIndex?: number
        ): LoDashExplicitAsyncWrapper<number>;
        first<T>(this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>): LoDashExplicitAsyncWrapper<T | undefined>;
        flatten<T>(this: LoDashExplicitAsyncWrapper<_.List<_.Many<T>> | null | undefined>): LoDashExplicitAsyncWrapper<T[]>;
        flattenDeep<T>(this: LoDashExplicitAsyncWrapper<_.ListOfRecursiveArraysOrValues<T> | null | undefined>): LoDashExplicitAsyncWrapper<T[]>;
        flattenDepth<T>(this: LoDashExplicitAsyncWrapper<_.ListOfRecursiveArraysOrValues<T> | null | undefined>, depth?: number): LoDashExplicitAsyncWrapper<T[]>;
        fromPairs<T>(
          this: LoDashExplicitAsyncWrapper<_.List<[_.PropertyName, T]> | null | undefined>
        ): LoDashExplicitAsyncWrapper<_.Dictionary<T>>;
        fromPairs(
            this: LoDashExplicitAsyncWrapper<_.List<any[]> | null | undefined>
        ): LoDashExplicitAsyncWrapper<_.Dictionary<any>>;
        head<T>(this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>): LoDashExplicitAsyncWrapper<T | undefined>;
        indexOf<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            value: T,
            fromIndex?: number
        ): LoDashExplicitAsyncWrapper<number>;
        initial<T>(this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>): LoDashExplicitAsyncWrapper<T[]>;
        intersection<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T>>,
            ...arrays: Array<_.List<T>>
        ): LoDashExplicitAsyncWrapper<T[]>;
        intersectionBy<T1, T2>(
            this: LoDashExplicitAsyncWrapper<_.List<T1> | null | undefined>,
            values: _.List<T2>,
            iteratee: _.ValueIteratee<T1 | T2>
        ): LoDashExplicitAsyncWrapper<T1[]>;
        intersectionBy<T1, T2, T3>(
            this: LoDashExplicitAsyncWrapper<_.List<T1> | null | undefined>,
            values1: _.List<T2>,
            values2: _.List<T3>,
            iteratee: _.ValueIteratee<T1 | T2 | T3>
        ): LoDashExplicitAsyncWrapper<T1[]>;
        intersectionBy<T1, T2, T3, T4>(
            this: LoDashExplicitAsyncWrapper<_.List<T1> | null | undefined>,
            values1: _.List<T2>,
            values2: _.List<T3>,
            ...values: Array<_.List<T4> | _.ValueIteratee<T1 | T2 | T3 | T4>>
        ): LoDashExplicitAsyncWrapper<T1[]>;
        intersectionBy<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            ...values: Array<_.List<T>>
        ): LoDashExplicitAsyncWrapper<T[]>;
        intersectionWith<T1, T2>(
            this: LoDashExplicitAsyncWrapper<_.List<T1> | null | undefined>,
            values: _.List<T2>,
            comparator: _.Comparator2<T1, T2>
        ): LoDashExplicitAsyncWrapper<T1[]>;
        intersectionWith<T1, T2, T3>(
            this: LoDashExplicitAsyncWrapper<_.List<T1> | null | undefined>,
            values1: _.List<T2>,
            values2: _.List<T3>,
            comparator: _.Comparator2<T1, T2 | T3>
        ): LoDashExplicitAsyncWrapper<T1[]>;
        intersectionWith<T1, T2, T3, T4>(
            this: LoDashExplicitAsyncWrapper<_.List<T1> | null | undefined>,
            values1: _.List<T2>,
            values2: _.List<T3>,
            ...values: Array<_.List<T4> | _.Comparator2<T1, T2 | T3 | T4>>
        ): LoDashExplicitAsyncWrapper<T1[]>;
        intersectionWith<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            ...values: Array<_.List<T>>
        ): LoDashExplicitAsyncWrapper<T[]>;
        join(separator?: string): LoDashExplicitAsyncWrapper<string>;
        last<T>(this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>): LoDashExplicitAsyncWrapper<T | undefined>;
        lastIndexOf<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            value: T,
            fromIndex?: true|number
        ): LoDashExplicitAsyncWrapper<number>;
        nth<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            n?: number
        ): LoDashExplicitAsyncWrapper<T | undefined>;
        pull<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T>>,
            ...values: T[]
        ): this;
        pullAll<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T>>,
            values?: _.List<T>
        ): this;
        remove<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T>>,
            predicate?: _.ListIteratee<T>
        ): LoDashExplicitAsyncWrapper<T[]>;
        slice<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            start?: number,
            end?: number
        ): LoDashExplicitAsyncWrapper<T[]>;
        sortedIndex<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            value: T
        ): LoDashExplicitAsyncWrapper<number>;
        sortedIndex<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            value: T
        ): LoDashExplicitAsyncWrapper<number>;
        sortedIndexBy<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            value: T,
            iteratee?: _.ValueIteratee<T>
        ): LoDashExplicitAsyncWrapper<number>;
        sortedIndexOf<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            value: T
        ): LoDashExplicitAsyncWrapper<number>;
        sortedLastIndex<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            value: T
        ): LoDashExplicitAsyncWrapper<number>;
        sortedLastIndexBy<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            value: T,
            iteratee: _.ValueIteratee<T>
        ): LoDashExplicitAsyncWrapper<number>;
        sortedLastIndexOf<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            value: T
        ): LoDashExplicitAsyncWrapper<number>;
        sortedUniq<T>(this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>): LoDashExplicitAsyncWrapper<T[]>;
        sortedUniqBy<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            iteratee: _.ValueIteratee<T>
        ): LoDashExplicitAsyncWrapper<T[]>;
        tail<T>(this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>): LoDashExplicitAsyncWrapper<T[]>;
        take<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            n?: number
        ): LoDashExplicitAsyncWrapper<T[]>;
        takeRight<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            n?: number
        ): LoDashExplicitAsyncWrapper<T[]>;
        takeRightWhile<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            predicate?: _.ListIteratee<T>
        ): LoDashExplicitAsyncWrapper<T[]>;
        takeWhile<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            predicate?: _.ListIteratee<T>
        ): LoDashExplicitAsyncWrapper<T[]>;
        union<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            ...arrays: Array<_.List<T> | null | undefined>
        ): LoDashExplicitAsyncWrapper<T[]>;
        unionBy<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            iteratee?: _.ValueIteratee<T>
        ): LoDashExplicitAsyncWrapper<T[]>;
        unionBy<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            arrays2: _.List<T> | null | undefined,
            iteratee?: _.ValueIteratee<T>
        ): LoDashExplicitAsyncWrapper<T[]>;
        unionBy<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            arrays2: _.List<T> | null | undefined,
            arrays3: _.List<T> | null | undefined,
            iteratee?: _.ValueIteratee<T>
        ): LoDashExplicitAsyncWrapper<T[]>;
        unionBy<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            arrays2: _.List<T> | null | undefined,
            arrays3: _.List<T> | null | undefined,
            arrays4: _.List<T> | null | undefined,
            iteratee?: _.ValueIteratee<T>
        ): LoDashExplicitAsyncWrapper<T[]>;
        unionBy<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            arrays2: _.List<T> | null | undefined,
            arrays3: _.List<T> | null | undefined,
            arrays4: _.List<T> | null | undefined,
            arrays5: _.List<T> | null | undefined,
            ...iteratee: Array<_.ValueIteratee<T> | _.List<T> | null | undefined>
        ): LoDashExplicitAsyncWrapper<T[]>;
        unionWith<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            comparator?: _.Comparator<T>
        ): LoDashExplicitAsyncWrapper<T[]>;
        unionWith<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            arrays2: _.List<T> | null | undefined,
            comparator?: _.Comparator<T>
        ): LoDashExplicitAsyncWrapper<T[]>;
        unionWith<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            arrays2: _.List<T> | null | undefined,
            arrays3: _.List<T> | null | undefined,
            ...comparator: Array<_.Comparator<T> | _.List<T> | null | undefined>
        ): LoDashExplicitAsyncWrapper<T[]>;
        uniq<T>(this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>): LoDashExplicitAsyncWrapper<T[]>;
        uniqBy<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            iteratee: _.ValueIteratee<T>
        ): LoDashExplicitAsyncWrapper<T[]>;
        uniqWith<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            comparator?: _.Comparator<T>
        ): LoDashExplicitAsyncWrapper<T[]>;
        unzip<T>(this: LoDashExplicitAsyncWrapper<T[][] | _.List<_.List<T>> | null | undefined>): LoDashExplicitAsyncWrapper<T[][]>;
        unzipWith<T, TResult>(
            this: LoDashExplicitAsyncWrapper<_.List<_.List<T>> | null | undefined>,
            iteratee: (...values: T[]) => TResult
        ): LoDashExplicitAsyncWrapper<TResult[]>;
        unzipWith<T>(
            this: LoDashExplicitAsyncWrapper<_.List<_.List<T>> | null | undefined>
        ): LoDashExplicitAsyncWrapper<T[][]>;
        without<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            ...values: T[]
        ): LoDashExplicitAsyncWrapper<T[]>;
        xor<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            ...arrays: Array<_.List<T> | null | undefined>
        ): LoDashExplicitAsyncWrapper<T[]>;
        xorBy<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            iteratee?: _.ValueIteratee<T>
        ): LoDashExplicitAsyncWrapper<T[]>;
        xorBy<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            arrays2: _.List<T> | null | undefined,
            iteratee?: _.ValueIteratee<T>
        ): LoDashExplicitAsyncWrapper<T[]>;
        xorBy<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            arrays2: _.List<T> | null | undefined,
            arrays3: _.List<T> | null | undefined,
            ...iteratee: Array<_.ValueIteratee<T> | _.List<T> | null | undefined>
        ): LoDashExplicitAsyncWrapper<T[]>;
        xorWith<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            comparator?: _.Comparator<T>
        ): LoDashExplicitAsyncWrapper<T[]>;
        xorWith<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            arrays2: _.List<T> | null | undefined,
            comparator?: _.Comparator<T>
        ): LoDashExplicitAsyncWrapper<T[]>;
        xorWith<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            arrays2: _.List<T> | null | undefined,
            arrays3: _.List<T> | null | undefined,
            ...comparator: Array<_.Comparator<T> | _.List<T> | null | undefined>
        ): LoDashExplicitAsyncWrapper<T[]>;
        zip<T1, T2>(
            this: LoDashExplicitAsyncWrapper<_.List<T1>>,
            arrays2: _.List<T2>,
        ): LoDashExplicitAsyncWrapper<Array<[T1 | undefined, T2 | undefined]>>;
        zip<T1, T2, T3>(
            this: LoDashExplicitAsyncWrapper<_.List<T1>>,
            arrays2: _.List<T2>,
            arrays3: _.List<T3>,
        ): LoDashExplicitAsyncWrapper<Array<[T1 | undefined, T2 | undefined, T3 | undefined]>>;
        zip<T1, T2, T3, T4>(
            this: LoDashExplicitAsyncWrapper<_.List<T1>>,
            arrays2: _.List<T2>,
            arrays3: _.List<T3>,
            arrays4: _.List<T4>,
        ): LoDashExplicitAsyncWrapper<Array<[T1 | undefined, T2 | undefined, T3 | undefined, T4 | undefined]>>;
        zip<T1, T2, T3, T4, T5>(
            this: LoDashExplicitAsyncWrapper<_.List<T1>>,
            arrays2: _.List<T2>,
            arrays3: _.List<T3>,
            arrays4: _.List<T4>,
            arrays5: _.List<T5>,
        ): LoDashExplicitAsyncWrapper<Array<[T1 | undefined, T2 | undefined, T3 | undefined, T4 | undefined, T5 | undefined]>>;
        zip<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            ...arrays: Array<_.List<T> | null | undefined>
        ): LoDashExplicitAsyncWrapper<Array<Array<T | undefined>>>;
        zipObject<T>(
            this: LoDashExplicitAsyncWrapper<_.List<_.PropertyName>>,
            values: _.List<T>
        ): LoDashExplicitAsyncWrapper<_.Dictionary<T>>;
        zipObject(
            this: LoDashExplicitAsyncWrapper<_.List<_.PropertyName>>
        ): LoDashExplicitAsyncWrapper<_.Dictionary<undefined>>;
        zipObjectDeep(
            this: LoDashExplicitAsyncWrapper<_.List<_.PropertyPath>>,
            values?: _.List<any>
        ): LoDashExplicitAsyncWrapper<object>;
        zipWith<T, TResult>(
            this: LoDashExplicitAsyncWrapper<_.List<T>>,
            iteratee: (value1: T) => TResult
        ): LoDashExplicitAsyncWrapper<TResult[]>;
        zipWith<T1, T2, TResult>(
            this: LoDashExplicitAsyncWrapper<_.List<T1>>,
            arrays2: _.List<T2>,
            iteratee: (value1: T1, value2: T2) => TResult
        ): LoDashExplicitAsyncWrapper<TResult[]>;
        zipWith<T1, T2, T3, TResult>(
            this: LoDashExplicitAsyncWrapper<_.List<T1>>,
            arrays2: _.List<T2>,
            arrays3: _.List<T3>,
            iteratee: (value1: T1, value2: T2, value3: T3) => TResult
        ): LoDashExplicitAsyncWrapper<TResult[]>;
        zipWith<T1, T2, T3, T4, TResult>(
            this: LoDashExplicitAsyncWrapper<_.List<T1>>,
            arrays2: _.List<T2>,
            arrays3: _.List<T3>,
            arrays4: _.List<T4>,
            iteratee: (value1: T1, value2: T2, value3: T3, value4: T4) => TResult
        ): LoDashExplicitAsyncWrapper<TResult[]>;
        zipWith<T1, T2, T3, T4, T5, TResult>(
            this: LoDashExplicitAsyncWrapper<_.List<T1>>,
            arrays2: _.List<T2>,
            arrays3: _.List<T3>,
            arrays4: _.List<T4>,
            arrays5: _.List<T5>,
            iteratee: (value1: T1, value2: T2, value3: T3, value4: T4, value5: T5) => TResult
        ): LoDashExplicitAsyncWrapper<TResult[]>;
        zipWith<T, TResult>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            ...iteratee: Array<((...group: T[]) => TResult) | _.List<T> | null | undefined>
        ): LoDashExplicitAsyncWrapper<TResult[]>;
        countBy<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            iteratee?: _.ValueIteratee<T>
        ): LoDashExplicitAsyncWrapper<_.Dictionary<number>>;
        countBy<T extends object>(
            this: LoDashExplicitAsyncWrapper<T | null | undefined>,
            iteratee?: _.ValueIteratee<T[keyof T]>
        ): LoDashExplicitAsyncWrapper<_.Dictionary<number>>;
        every<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            predicate?: _.ListIterateeCustom<T, boolean>
        ): LoDashExplicitAsyncWrapper<boolean>;
        every<T extends object>(
            this: LoDashExplicitAsyncWrapper<T | null | undefined>,
            predicate?: _.ObjectIterateeCustom<T, boolean>
        ): LoDashExplicitAsyncWrapper<boolean>;
        filter(
            this: LoDashExplicitAsyncWrapper<string | null | undefined>,
            predicate?: _.StringIterator<boolean>
        ): LoDashExplicitAsyncWrapper<string[]>;
        filter<T, S extends T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            predicate: _.ListIteratorTypeGuard<T, S>
        ): LoDashExplicitAsyncWrapper<S[]>;
        filter<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            predicate?: _.ListIterateeCustom<T, boolean>
        ): LoDashExplicitAsyncWrapper<T[]>;
        filter<T extends object, S extends T[keyof T]>(
            this: LoDashExplicitAsyncWrapper<T | null | undefined>,
            predicate: _.ObjectIteratorTypeGuard<T, S>
        ): LoDashExplicitAsyncWrapper<S[]>;
        filter<T extends object>(
            this: LoDashExplicitAsyncWrapper<T | null | undefined>,
            predicate?: _.ObjectIterateeCustom<T, boolean>
        ): LoDashExplicitAsyncWrapper<Array<T[keyof T]>>;
        find<T, S extends T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            predicate: _.ListIteratorTypeGuard<T, S>,
            fromIndex?: number
        ): LoDashExplicitAsyncWrapper<S|undefined>;
        find<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            predicate?: _.ListIterateeCustom<T, boolean>,
            fromIndex?: number
        ): LoDashExplicitAsyncWrapper<T|undefined>;
        find<T extends object, S extends T[keyof T]>(
            this: LoDashExplicitAsyncWrapper<T | null | undefined>,
            predicate: _.ObjectIteratorTypeGuard<T, S>,
            fromIndex?: number
        ): LoDashExplicitAsyncWrapper<S|undefined>;
        find<T extends object>(
            this: LoDashExplicitAsyncWrapper<T | null | undefined>,
            predicate?: _.ObjectIterateeCustom<T, boolean>,
            fromIndex?: number
        ): LoDashExplicitAsyncWrapper<T[keyof T]|undefined>;
        findLast<T, S extends T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            predicate: _.ListIteratorTypeGuard<T, S>,
            fromIndex?: number
        ): LoDashExplicitAsyncWrapper<S | undefined>;
        findLast<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            predicate?: _.ListIterateeCustom<T, boolean>,
            fromIndex?: number
        ): LoDashExplicitAsyncWrapper<T | undefined>;
        findLast<T extends object, S extends T[keyof T]>(
            this: LoDashExplicitAsyncWrapper<T | null | undefined>,
            predicate: _.ObjectIteratorTypeGuard<T, S>,
            fromIndex?: number
        ): LoDashExplicitAsyncWrapper<S|undefined>;
        findLast<T extends object>(
            this: LoDashExplicitAsyncWrapper<T | null | undefined>,
            predicate?: _.ObjectIterateeCustom<T, boolean>,
            fromIndex?: number
        ): LoDashExplicitAsyncWrapper<T[keyof T]|undefined>;
        flatMap<T>(this: LoDashExplicitAsyncWrapper<_.List<_.Many<T>> | _.Dictionary<_.Many<T>> | _.NumericDictionary<_.Many<T>> | null | undefined>): LoDashExplicitAsyncWrapper<T[]>;
        flatMap(): LoDashExplicitAsyncWrapper<any[]>;
        flatMap<T, TResult>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            iteratee: _.ListIterator<T, _.Many<TResult>>
        ): LoDashExplicitAsyncWrapper<TResult[]>;
        flatMap<T extends object, TResult>(
            this: LoDashExplicitAsyncWrapper<T | null | undefined>,
            iteratee: _.ObjectIterator<T, _.Many<TResult>>
        ): LoDashExplicitAsyncWrapper<TResult[]>;
        flatMap(
            iteratee: string
        ): LoDashExplicitAsyncWrapper<any[]>;
        flatMap(
            iteratee: object
        ): LoDashExplicitAsyncWrapper<boolean[]>;
        flatMapDeep<T>(
            this: LoDashExplicitAsyncWrapper<_.List<_.ListOfRecursiveArraysOrValues<T> | T> | _.Dictionary<_.ListOfRecursiveArraysOrValues<T> | T> | _.NumericDictionary<_.ListOfRecursiveArraysOrValues<T> | T> | null | undefined>
        ): LoDashExplicitAsyncWrapper<T[]>;
        flatMapDeep<T, TResult>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            iteratee: _.ListIterator<T, _.ListOfRecursiveArraysOrValues<TResult> | TResult>
        ): LoDashExplicitAsyncWrapper<TResult[]>;
        flatMapDeep<T extends object, TResult>(
            this: LoDashExplicitAsyncWrapper<T | null | undefined>,
            iteratee: _.ObjectIterator<T, _.ListOfRecursiveArraysOrValues<TResult> | TResult>
        ): LoDashExplicitAsyncWrapper<TResult[]>;
        flatMapDeep(
            this: LoDashExplicitAsyncWrapper<object | null | undefined>,
            iteratee: string
        ): LoDashExplicitAsyncWrapper<any[]>;
        flatMapDeep(
            this: LoDashExplicitAsyncWrapper<object | null | undefined>,
            iteratee: object
        ): LoDashExplicitAsyncWrapper<boolean[]>;
        flatMapDepth<T>(
            this: LoDashExplicitAsyncWrapper<_.List<_.ListOfRecursiveArraysOrValues<T> | T> | _.Dictionary<_.ListOfRecursiveArraysOrValues<T> | T> | _.NumericDictionary<_.ListOfRecursiveArraysOrValues<T> | T> | null | undefined>
        ): LoDashExplicitAsyncWrapper<T[]>;
        flatMapDepth<T, TResult>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            iteratee: _.ListIterator<T, _.ListOfRecursiveArraysOrValues<TResult> | TResult>,
            depth?: number
        ): LoDashExplicitAsyncWrapper<TResult[]>;
        flatMapDepth<T extends object, TResult>(
            this: LoDashExplicitAsyncWrapper<T | null | undefined>,
            iteratee: _.ObjectIterator<T, _.ListOfRecursiveArraysOrValues<TResult> | TResult>,
            depth?: number
        ): LoDashExplicitAsyncWrapper<TResult[]>;
        flatMapDepth(
            this: LoDashExplicitAsyncWrapper<object | null | undefined>,
            iteratee: string,
            depth?: number
        ): LoDashExplicitAsyncWrapper<any[]>;
        flatMapDepth(
            this: LoDashExplicitAsyncWrapper<object | null | undefined>,
            iteratee: object,
            depth?: number
        ): LoDashExplicitAsyncWrapper<boolean[]>;
        groupBy<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            iteratee?: _.ValueIteratee<T>
        ): LoDashExplicitAsyncWrapper<_.Dictionary<T[]>>;
        groupBy<T extends object>(
            this: LoDashExplicitAsyncWrapper<T | null | undefined>,
            iteratee?: _.ValueIteratee<T[keyof T]>
        ): LoDashExplicitAsyncWrapper<_.Dictionary<Array<T[keyof T]>>>;
        includes<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | _.Dictionary<T> | _.NumericDictionary<T> | null | undefined>,
            target: T,
            fromIndex?: number
        ): LoDashExplicitAsyncWrapper<boolean>;
        invokeMap(
            methodName: string,
            ...args: any[]): LoDashExplicitAsyncWrapper<any[]>;
        invokeMap<TResult>(
            method: (...args: any[]) => TResult,
            ...args: any[]): LoDashExplicitAsyncWrapper<TResult[]>;
        keyBy<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            iteratee?: _.ValueIterateeCustom<T, _.PropertyName>
        ): LoDashExplicitAsyncWrapper<_.Dictionary<T>>;
        keyBy<T extends object>(
            this: LoDashExplicitAsyncWrapper<T | null | undefined>,
            iteratee?: _.ValueIterateeCustom<T[keyof T], _.PropertyName>
        ): LoDashExplicitAsyncWrapper<_.Dictionary<T[keyof T]>>;
        map<T, TResult>(
            this: LoDashExplicitAsyncWrapper<T[] | null | undefined>,
            iteratee: _.ArrayIterator<T, TResult>
        ): LoDashExplicitAsyncWrapper<TResult[]>;
        map<T, TResult>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            iteratee: _.ListIterator<T, TResult>
        ): LoDashExplicitAsyncWrapper<TResult[]>;
        map<T>(this: LoDashExplicitAsyncWrapper<_.List<T> | _.Dictionary<T> | _.NumericDictionary<T> | null | undefined>): LoDashExplicitAsyncWrapper<T[]>;
        map<T extends object, TResult>(
            this: LoDashExplicitAsyncWrapper<T | null | undefined>,
            iteratee: _.ObjectIterator<T, TResult>
        ): LoDashExplicitAsyncWrapper<TResult[]>;
        map<T, K extends keyof T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | _.Dictionary<T> | _.NumericDictionary<T> | null | undefined>,
            iteratee: K
        ): LoDashExplicitAsyncWrapper<Array<T[K]>>;
        map<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | _.Dictionary<T> | _.NumericDictionary<T> | null | undefined>,
            iteratee?: string
        ): LoDashExplicitAsyncWrapper<any[]>;
        map<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | _.Dictionary<T> | _.NumericDictionary<T> | null | undefined>,
            iteratee?: object
        ): LoDashExplicitAsyncWrapper<boolean[]>;
        orderBy<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            iteratees?: _.Many<_.ListIterator<T, _.NotVoid>>,
            orders?: _.Many<boolean|"asc"|"desc">
        ): LoDashExplicitAsyncWrapper<T[]>;
        orderBy<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            iteratees?: _.Many<_.ListIteratee<T>>,
            orders?: _.Many<boolean|"asc"|"desc">
        ): LoDashExplicitAsyncWrapper<T[]>;
        orderBy<T extends object>(
            this: LoDashExplicitAsyncWrapper<T | null | undefined>,
            iteratees?: _.Many<_.ObjectIterator<T, _.NotVoid>>,
            orders?: _.Many<boolean|"asc"|"desc">
        ): LoDashExplicitAsyncWrapper<Array<T[keyof T]>>;
        orderBy<T extends object>(
            this: LoDashExplicitAsyncWrapper<T | null | undefined>,
            iteratees?: _.Many<_.ObjectIteratee<T>>,
            orders?: _.Many<boolean|"asc"|"desc">
        ): LoDashExplicitAsyncWrapper<Array<T[keyof T]>>;
        partition<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            callback: _.ValueIteratee<T>
        ): LoDashExplicitAsyncWrapper<[T[], T[]]>;
        partition<T>(
            this: LoDashExplicitAsyncWrapper<T | null | undefined>,
            callback: _.ValueIteratee<T[keyof T]>
        ): LoDashExplicitAsyncWrapper<[Array<T[keyof T]>, Array<T[keyof T]>]>;
        reduce<T, TResult>(
            this: LoDashExplicitAsyncWrapper<T[] | null | undefined>,
            callback: _.MemoListIterator<T, TResult, T[]>,
            accumulator: TResult
        ): LoDashExplicitAsyncWrapper<TResult>;
        reduce<T, TResult>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            callback: _.MemoListIterator<T, TResult, _.List<T>>,
            accumulator: TResult
        ): LoDashExplicitAsyncWrapper<TResult>;
        reduce<T extends object, TResult>(
            this: LoDashExplicitAsyncWrapper<T | null | undefined>,
            callback: _.MemoObjectIterator<T[keyof T], TResult, T>,
            accumulator: TResult
        ): LoDashExplicitAsyncWrapper<TResult>;
        reduce<T>(
            this: LoDashExplicitAsyncWrapper<T[] | null | undefined>,
            callback: _.MemoListIterator<T, T, T[]>
        ): LoDashExplicitAsyncWrapper<T | undefined>;
        reduce<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            callback: _.MemoListIterator<T, T, _.List<T>>
        ): LoDashExplicitAsyncWrapper<T | undefined>;
        reduce<T extends object>(
            this: LoDashExplicitAsyncWrapper<T | null | undefined>,
            callback: _.MemoObjectIterator<T[keyof T], T[keyof T], T>
        ): LoDashExplicitAsyncWrapper<T[keyof T] | undefined>;
        reduceRight<T, TResult>(
            this: LoDashExplicitAsyncWrapper<T[] | null | undefined>,
            callback: _.MemoListIterator<T, TResult, T[]>,
            accumulator: TResult
        ): LoDashExplicitAsyncWrapper<TResult>;
        reduceRight<T, TResult>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            callback: _.MemoListIterator<T, TResult, _.List<T>>,
            accumulator: TResult
        ): LoDashExplicitAsyncWrapper<TResult>;
        reduceRight<T extends object, TResult>(
            this: LoDashExplicitAsyncWrapper<T | null | undefined>,
            callback: _.MemoObjectIterator<T[keyof T], TResult, T>,
            accumulator: TResult
        ): LoDashExplicitAsyncWrapper<TResult>;
        reduceRight<T>(
            this: LoDashExplicitAsyncWrapper<T[] | null | undefined>,
            callback: _.MemoListIterator<T, T, T[]>
        ): LoDashExplicitAsyncWrapper<T | undefined>;
        reduceRight<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            callback: _.MemoListIterator<T, T, _.List<T>>
        ): LoDashExplicitAsyncWrapper<T | undefined>;
        reduceRight<T extends object>(
            this: LoDashExplicitAsyncWrapper<T | null | undefined>,
            callback: _.MemoObjectIterator<T[keyof T], T[keyof T], T>
        ): LoDashExplicitAsyncWrapper<T[keyof T] | undefined>;
        reject(
            this: LoDashExplicitAsyncWrapper<string | null | undefined>,
            predicate?: _.StringIterator<boolean>
        ): LoDashExplicitAsyncWrapper<string[]>;
        reject<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            predicate?: _.ListIterateeCustom<T, boolean>
        ): LoDashExplicitAsyncWrapper<T[]>;
        reject<T extends object>(
            this: LoDashExplicitAsyncWrapper<T | null | undefined>,
            predicate?: _.ObjectIterateeCustom<T, boolean>
        ): LoDashExplicitAsyncWrapper<Array<T[keyof T]>>;
        sample<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | _.Dictionary<T> | _.NumericDictionary<T> | null | undefined>
        ): LoDashExplicitAsyncWrapper<T | undefined>;
        sample<T extends object>(
            this: LoDashExplicitAsyncWrapper<T | null | undefined>
        ): LoDashExplicitAsyncWrapper<T[keyof T] | undefined>;
        sampleSize<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | _.Dictionary<T> | _.NumericDictionary<T> | null | undefined>,
            n?: number
        ): LoDashExplicitAsyncWrapper<T[]>;
        sampleSize<T extends object>(
            this: LoDashExplicitAsyncWrapper<T | null | undefined>,
            n?: number
        ): LoDashExplicitAsyncWrapper<Array<T[keyof T]>>;
        shuffle<T>(this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>): LoDashExplicitAsyncWrapper<T[]>;
        shuffle<T extends object>(this: LoDashExplicitAsyncWrapper<T | null | undefined>): LoDashExplicitAsyncWrapper<Array<T[keyof T]>>;
        size(): LoDashExplicitAsyncWrapper<number>;
        some<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            predicate?: _.ListIterateeCustom<T, boolean>
        ): LoDashExplicitAsyncWrapper<boolean>;
        some<T extends object>(
            this: LoDashExplicitAsyncWrapper<T | null | undefined>,
            predicate?: _.ObjectIterateeCustom<T, boolean>
        ): LoDashExplicitAsyncWrapper<boolean>;
        sortBy<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            ...iteratees: Array<_.Many<_.ListIteratee<T>>>
        ): LoDashExplicitAsyncWrapper<T[]>;
        sortBy<T extends object>(
            this: LoDashExplicitAsyncWrapper<T | null | undefined>,
            ...iteratees: Array<_.Many<_.ObjectIteratee<T>>>
        ): LoDashExplicitAsyncWrapper<Array<T[keyof T]>>;
        pop<T>(this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>): LoDashExplicitAsyncWrapper<T | undefined>;
        push<T>(this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>, ...items: T[]): this;
        shift<T>(this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>): LoDashExplicitAsyncWrapper<T | undefined>;
        sort<T>(this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>, compareFn?: (a: T, b: T) => number): this;
        splice<T>(this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>, start: number, deleteCount?: number, ...items: T[]): this;
        unshift<T>(this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>, ...items: T[]): this;
        now(): LoDashExplicitAsyncWrapper<number>;
        after<TFunc extends (...args: any[]) => any>(func: TFunc): LoDashExplicitAsyncWrapper<TFunc>;
        ary(n?: number): LoDashExplicitAsyncWrapper<(...args: any[]) => any>;
        before<TFunc extends (...args: any[]) => any>(func: TFunc): LoDashExplicitAsyncWrapper<TFunc>;
        bind(
            thisArg: any,
            ...partials: any[]
        ): LoDashExplicitAsyncWrapper<(...args: any[]) => any>;
        bindKey(
            key: string,
            ...partials: any[]
        ): LoDashExplicitAsyncWrapper<(...args: any[]) => any>;
        curry<T1, R>(this: LoDashExplicitAsyncWrapper<(t1: T1) => R>):
            LoDashExplicitAsyncWrapper<_.CurriedFunction1<T1, R>>;
        curry<T1, T2, R>(this: LoDashExplicitAsyncWrapper<(t1: T1, t2: T2) => R>):
            LoDashExplicitAsyncWrapper<_.CurriedFunction2<T1, T2, R>>;
        curry<T1, T2, T3, R>(this: LoDashExplicitAsyncWrapper<(t1: T1, t2: T2, t3: T3) => R>):
            LoDashExplicitAsyncWrapper<_.CurriedFunction3<T1, T2, T3, R>>;
        curry<T1, T2, T3, T4, R>(this: LoDashExplicitAsyncWrapper<(t1: T1, t2: T2, t3: T3, t4: T4) => R>):
            LoDashExplicitAsyncWrapper<_.CurriedFunction4<T1, T2, T3, T4, R>>;
        curry<T1, T2, T3, T4, T5, R>(this: LoDashExplicitAsyncWrapper<(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R>):
            LoDashExplicitAsyncWrapper<_.CurriedFunction5<T1, T2, T3, T4, T5, R>>;
        curry(arity?: number): LoDashExplicitAsyncWrapper<(...args: any[]) => any>;
        curryRight<T1, R>(this: LoDashExplicitAsyncWrapper<(t1: T1) => R>, arity?: number):
            LoDashExplicitAsyncWrapper<_.RightCurriedFunction1<T1, R>>;
        curryRight<T1, T2, R>(this: LoDashExplicitAsyncWrapper<(t1: T1, t2: T2) => R>, arity?: number):
            LoDashExplicitAsyncWrapper<_.RightCurriedFunction2<T1, T2, R>>;
        curryRight<T1, T2, T3, R>(this: LoDashExplicitAsyncWrapper<(t1: T1, t2: T2, t3: T3) => R>, arity?: number):
            LoDashExplicitAsyncWrapper<_.RightCurriedFunction3<T1, T2, T3, R>>;
        curryRight<T1, T2, T3, T4, R>(this: LoDashExplicitAsyncWrapper<(t1: T1, t2: T2, t3: T3, t4: T4) => R>, arity?: number):
            LoDashExplicitAsyncWrapper<_.RightCurriedFunction4<T1, T2, T3, T4, R>>;
        curryRight<T1, T2, T3, T4, T5, R>(this: LoDashExplicitAsyncWrapper<(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R>, arity?: number):
            LoDashExplicitAsyncWrapper<_.RightCurriedFunction5<T1, T2, T3, T4, T5, R>>;
        curryRight(arity?: number): LoDashExplicitAsyncWrapper<(...args: any[]) => any>;
        debounce(
            wait?: number,
            options?: _.DebounceSettings
        ): LoDashExplicitAsyncWrapper<TValue & _.Cancelable>;
        defer(...args: any[]): LoDashExplicitAsyncWrapper<number>;
        delay(
            wait: number,
            ...args: any[]
        ): LoDashExplicitAsyncWrapper<number>;
        memoize(resolver?: (...args: any[]) => any): LoDashExplicitAsyncWrapper<TValue & _.MemoizedFunction>;
        negate(this: LoDashExplicitAsyncWrapper<() => boolean>): LoDashExplicitAsyncWrapper<() => boolean>;
        negate<A1>(this: LoDashExplicitAsyncWrapper<(a1: A1) => boolean>): LoDashExplicitAsyncWrapper<(a1: A1) => boolean>;
        negate<A1, A2>(this: LoDashExplicitAsyncWrapper<(a1: A1, a2: A2) => boolean>): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2) => boolean>;
        negate(this: LoDashExplicitAsyncWrapper<(...args: any[]) => any>): LoDashExplicitAsyncWrapper<(...args: any[]) => boolean>;
        overArgs(...transforms: Array<_.Many<(...args: any[]) => any>>): LoDashExplicitAsyncWrapper<(...args: any[]) => any>;
        partial: _.ExplicitPartial;
        partialRight: _.ExplicitPartialRight;
        rearg(...indexes: Array<_.Many<number>>): LoDashExplicitAsyncWrapper<(...args: any[]) => any>;
        rest(start?: number): LoDashExplicitAsyncWrapper<(...args: any[]) => any>;
        spread<TResult>(this: LoDashExplicitAsyncWrapper<(...args: any[]) => TResult>): LoDashExplicitAsyncWrapper<(...args: any[]) => TResult>;
        spread<TResult>(this: LoDashExplicitAsyncWrapper<(...args: any[]) => TResult>, start: number): LoDashExplicitAsyncWrapper<(...args: any[]) => TResult>;
        throttle(
            wait?: number,
            options?: _.ThrottleSettings
        ): LoDashExplicitAsyncWrapper<TValue & _.Cancelable>;
        unary<T, TResult>(this: LoDashExplicitAsyncWrapper<(arg1: T, ...args: any[]) => TResult>): LoDashExplicitAsyncWrapper<(arg1: T) => TResult>;
        wrap<TArgs, TResult>(
            wrapper: (value: TValue, ...args: TArgs[]) => TResult
        ): LoDashExplicitAsyncWrapper<(...args: TArgs[]) => TResult>;
        wrap<TResult>(
            wrapper: (value: TValue, ...args: any[]) => TResult
        ): LoDashExplicitAsyncWrapper<(...args: any[]) => TResult>;
        castArray<T>(this: LoDashExplicitAsyncWrapper<_.Many<T>>): LoDashExplicitAsyncWrapper<T[]>;
        clone(): this;
        cloneDeep(): this;
        cloneDeepWith(
            customizer: _.CloneDeepWithCustomizer<TValue>
        ): LoDashExplicitAsyncWrapper<any>;
        cloneDeepWith(): this;
        cloneWith<TResult extends object | string | number | boolean | null>(
            customizer: _.CloneWithCustomizer<TValue, TResult>
        ): LoDashExplicitAsyncWrapper<TResult>;
        cloneWith<TResult>(
            customizer: _.CloneWithCustomizer<TValue, TResult | undefined>
        ): LoDashExplicitAsyncWrapper<TResult | TValue>;
        cloneWith(): this;
        conformsTo<T>(this: LoDashExplicitAsyncWrapper<T>, source: _.ConformsPredicateObject<T>): LoDashExplicitAsyncWrapper<boolean>;
        // Note: we can't use TValue here,  because it generates a typescript error when strictFunctionTypes is enabled.
        eq(
            other: any
        ): LoDashExplicitAsyncWrapper<boolean>;
        gt(other: any): LoDashExplicitAsyncWrapper<boolean>;
        gte(other: any): LoDashExplicitAsyncWrapper<boolean>;
        isArguments(): LoDashExplicitAsyncWrapper<boolean>;
        isArray(): LoDashExplicitAsyncWrapper<boolean>;
        isArrayBuffer(): LoDashExplicitAsyncWrapper<boolean>;
        isArrayLike(): LoDashExplicitAsyncWrapper<boolean>;
        isArrayLikeObject(): LoDashExplicitAsyncWrapper<boolean>;
        isBoolean(): LoDashExplicitAsyncWrapper<boolean>;
        isBuffer(): LoDashExplicitAsyncWrapper<boolean>;
        isDate(): LoDashExplicitAsyncWrapper<boolean>;
        isElement(): LoDashExplicitAsyncWrapper<boolean>;
        isEmpty(): LoDashExplicitAsyncWrapper<boolean>;
        isEqual(
            other: any
        ): LoDashExplicitAsyncWrapper<boolean>;
        isEqualWith(
            other: any,
            customizer?: _.IsEqualCustomizer
        ): LoDashExplicitAsyncWrapper<boolean>;
        isError(): LoDashExplicitAsyncWrapper<boolean>;
        isFinite(): LoDashExplicitAsyncWrapper<boolean>;
        isFunction(): LoDashExplicitAsyncWrapper<boolean>;
        isInteger(): LoDashExplicitAsyncWrapper<boolean>;
        isLength(): LoDashExplicitAsyncWrapper<boolean>;
        isMap(): LoDashExplicitAsyncWrapper<boolean>;
        isMatch(source: object): LoDashExplicitAsyncWrapper<boolean>;
        isMatchWith(source: object, customizer: _.isMatchWithCustomizer): LoDashExplicitAsyncWrapper<boolean>;
        isNaN(): LoDashExplicitAsyncWrapper<boolean>;
        isNative(): LoDashExplicitAsyncWrapper<boolean>;
        isNil(): LoDashExplicitAsyncWrapper<boolean>;
        isNull(): LoDashExplicitAsyncWrapper<boolean>;
        isNumber(): LoDashExplicitAsyncWrapper<boolean>;
        isObject(): LoDashExplicitAsyncWrapper<boolean>;
        isObjectLike(): LoDashExplicitAsyncWrapper<boolean>;
        isPlainObject(): LoDashExplicitAsyncWrapper<boolean>;
        isRegExp(): LoDashExplicitAsyncWrapper<boolean>;
        isSafeInteger(): LoDashExplicitAsyncWrapper<boolean>;
        isSet(): LoDashExplicitAsyncWrapper<boolean>;
        isString(): LoDashExplicitAsyncWrapper<boolean>;
        isSymbol(): LoDashExplicitAsyncWrapper<boolean>;
        isTypedArray(): LoDashExplicitAsyncWrapper<boolean>;
        isUndefined(): LoDashExplicitAsyncWrapper<boolean>;
        isWeakMap(): LoDashExplicitAsyncWrapper<boolean>;
        isWeakSet(): LoDashExplicitAsyncWrapper<boolean>;
        lt(other: any): LoDashExplicitAsyncWrapper<boolean>;
        lte(other: any): LoDashExplicitAsyncWrapper<boolean>;
        toArray<T>(this: LoDashExplicitAsyncWrapper<_.List<T> | _.Dictionary<T> | _.NumericDictionary<T> | null | undefined>): LoDashExplicitAsyncWrapper<T[]>;
        toArray<T extends object>(this: _.LoDashImplicitWrapper<T>): LoDashExplicitAsyncWrapper<Array<T[keyof T]>>;
        toFinite(): LoDashExplicitAsyncWrapper<number>;
        toInteger(): LoDashExplicitAsyncWrapper<number>;
        toLength(): LoDashExplicitAsyncWrapper<number>;
        toNumber(): LoDashExplicitAsyncWrapper<number>;
        toPlainObject(): LoDashExplicitAsyncWrapper<any>;
        toSafeInteger(): LoDashExplicitAsyncWrapper<number>;
        add(addend: number): LoDashExplicitAsyncWrapper<number>;
        ceil(precision?: number): LoDashExplicitAsyncWrapper<number>;
        divide(divisor: number): LoDashExplicitAsyncWrapper<number>;
        floor(precision?: number): LoDashExplicitAsyncWrapper<number>;
        max<T>(this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>): LoDashExplicitAsyncWrapper<T | undefined>;
        maxBy<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            iteratee?: _.ValueIteratee<T>
        ): LoDashExplicitAsyncWrapper<T | undefined>;
        mean(): LoDashExplicitAsyncWrapper<number>;
        meanBy<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            iteratee?: _.ValueIteratee<T>
        ): LoDashExplicitAsyncWrapper<number>;
        min<T>(this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>): LoDashExplicitAsyncWrapper<T | undefined>;
        minBy<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            iteratee?: _.ValueIteratee<T>
        ): LoDashExplicitAsyncWrapper<T | undefined>;
        multiply(multiplicand: number): LoDashExplicitAsyncWrapper<number>;
        round(precision?: number): LoDashExplicitAsyncWrapper<number>;
        subtract(
            subtrahend: number
        ): LoDashExplicitAsyncWrapper<number>;
        sum(): LoDashExplicitAsyncWrapper<number>;
        sumBy<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            iteratee?: ((value: T) => number) | string
        ): LoDashExplicitAsyncWrapper<number>;
        clamp(
            lower: number,
            upper: number
        ): LoDashExplicitAsyncWrapper<number>;
        clamp(
            upper: number
        ): LoDashExplicitAsyncWrapper<number>;
        inRange(
            start: number,
            end?: number
        ): LoDashExplicitAsyncWrapper<boolean>;
        random(floating?: boolean): LoDashExplicitAsyncWrapper<number>;
        random(
            max: number,
            floating?: boolean
        ): LoDashExplicitAsyncWrapper<number>;
        assign<TSource>(
            source: TSource
        ): LoDashExplicitAsyncWrapper<TValue & TSource>;
        assign<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2
        ): LoDashExplicitAsyncWrapper<TValue & TSource1 & TSource2>;
        assign<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): LoDashExplicitAsyncWrapper<TValue & TSource1 & TSource2 & TSource3>;
        assign<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): LoDashExplicitAsyncWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;
        assign(): LoDashExplicitAsyncWrapper<TValue>;
        assign(...otherArgs: any[]): LoDashExplicitAsyncWrapper<any>;
        assignIn<TSource>(
            source: TSource
        ): LoDashExplicitAsyncWrapper<TValue & TSource>;
        assignIn<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2
        ): LoDashExplicitAsyncWrapper<TValue & TSource1 & TSource2>;
        assignIn<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): LoDashExplicitAsyncWrapper<TValue & TSource1 & TSource2 & TSource3>;
        assignIn<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): LoDashExplicitAsyncWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;
        assignIn(): LoDashExplicitAsyncWrapper<TValue>;
        assignIn(...otherArgs: any[]): LoDashExplicitAsyncWrapper<any>;
        assignInWith<TSource>(
            source: TSource,
            customizer: _.AssignCustomizer
        ): LoDashExplicitAsyncWrapper<TValue & TSource>;
        assignInWith<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2,
            customizer: _.AssignCustomizer
        ): LoDashExplicitAsyncWrapper<TValue & TSource1 & TSource2>;
        assignInWith<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: _.AssignCustomizer
        ): LoDashExplicitAsyncWrapper<TValue & TSource1 & TSource2 & TSource3>;
        assignInWith<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: _.AssignCustomizer
        ): LoDashExplicitAsyncWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;
        assignInWith(): LoDashExplicitAsyncWrapper<TValue>;
        assignInWith(...otherArgs: any[]): LoDashExplicitAsyncWrapper<any>;
        assignWith<TSource>(
            source: TSource,
            customizer: _.AssignCustomizer
        ): LoDashExplicitAsyncWrapper<TValue & TSource>;
        assignWith<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2,
            customizer: _.AssignCustomizer
        ): LoDashExplicitAsyncWrapper<TValue & TSource1 & TSource2>;
        assignWith<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: _.AssignCustomizer
        ): LoDashExplicitAsyncWrapper<TValue & TSource1 & TSource2 & TSource3>;
        assignWith<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: _.AssignCustomizer
        ): LoDashExplicitAsyncWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;
        assignWith(): LoDashExplicitAsyncWrapper<TValue>;
        assignWith(...otherArgs: any[]): LoDashExplicitAsyncWrapper<any>;
        at<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | _.Dictionary<T> | _.NumericDictionary<T> | null | undefined>,
            ...props: _.PropertyPath[]
        ): LoDashExplicitAsyncWrapper<T[]>;
        at<T extends object>(
            this: LoDashExplicitAsyncWrapper<T | null | undefined>,
            ...props: Array<_.Many<keyof T>>
        ): LoDashExplicitAsyncWrapper<Array<T[keyof T]>>;
        create<U extends object>(properties?: U): LoDashExplicitAsyncWrapper<TValue & U>;
        defaults<TSource>(
            source: TSource
        ): LoDashExplicitAsyncWrapper<TSource & TValue>;
        defaults<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2
        ): LoDashExplicitAsyncWrapper<TSource2 & TSource1 & TValue>;
        defaults<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): LoDashExplicitAsyncWrapper<TSource3 & TSource2 & TSource1 & TValue>;
        defaults<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): LoDashExplicitAsyncWrapper<TSource4 & TSource3 & TSource2 & TSource1 & TValue>;
        defaults(): LoDashExplicitAsyncWrapper<TValue>;
        defaults(...sources: any[]): LoDashExplicitAsyncWrapper<any>;
        defaultsDeep(...sources: any[]): LoDashExplicitAsyncWrapper<any>;
        entries<T>(this: LoDashExplicitAsyncWrapper<_.Dictionary<T> | _.NumericDictionary<T>>): LoDashExplicitAsyncWrapper<Array<[string, T]>>;
        entries(): LoDashExplicitAsyncWrapper<Array<[string, any]>>;
        entriesIn<T>(this: LoDashExplicitAsyncWrapper<_.Dictionary<T> | _.NumericDictionary<T>>): LoDashExplicitAsyncWrapper<Array<[string, T]>>;
        entriesIn(): LoDashExplicitAsyncWrapper<Array<[string, any]>>;
        extend<TSource>(
            source: TSource
        ): LoDashExplicitAsyncWrapper<TValue & TSource>;
        extend<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2
        ): LoDashExplicitAsyncWrapper<TValue & TSource1 & TSource2>;
        extend<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): LoDashExplicitAsyncWrapper<TValue & TSource1 & TSource2 & TSource3>;
        extend<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): LoDashExplicitAsyncWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;
        extend(): LoDashExplicitAsyncWrapper<TValue>;
        extend(...otherArgs: any[]): LoDashExplicitAsyncWrapper<any>;
        extendWith<TSource>(
            source: TSource,
            customizer: _.AssignCustomizer
        ): LoDashExplicitAsyncWrapper<TValue & TSource>;
        extendWith<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2,
            customizer: _.AssignCustomizer
        ): LoDashExplicitAsyncWrapper<TValue & TSource1 & TSource2>;
        extendWith<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: _.AssignCustomizer
        ): LoDashExplicitAsyncWrapper<TValue & TSource1 & TSource2 & TSource3>;
        extendWith<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: _.AssignCustomizer
        ): LoDashExplicitAsyncWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;
        extendWith(): LoDashExplicitAsyncWrapper<TValue>;
        extendWith(...otherArgs: any[]): LoDashExplicitAsyncWrapper<any>;
        findKey<T>(
            this: LoDashExplicitAsyncWrapper<T | null | undefined>,
            predicate?: _.ObjectIteratee<T>
        ): LoDashExplicitAsyncWrapper<string | undefined>;
        findLastKey<T>(
            this: LoDashExplicitAsyncWrapper<T | null | undefined>,
            predicate?: _.ObjectIteratee<T>
        ): LoDashExplicitAsyncWrapper<string | undefined>;
        functions(): LoDashExplicitAsyncWrapper<string[]>;
        functionsIn(): LoDashExplicitAsyncWrapper<string[]>;
        get<TKey extends keyof TValue>(
            path: TKey | [TKey]
        ): LoDashExplicitAsyncWrapper<TValue[TKey]>;
        get<TObject extends object, TKey extends keyof TObject>(
            this: LoDashExplicitAsyncWrapper<TObject | null | undefined>,
            path: TKey | [TKey],
        ): LoDashExplicitAsyncWrapper<TObject[TKey] | undefined>;
        get<TObject extends object, TKey extends keyof TObject, TDefault>(
            this: LoDashExplicitAsyncWrapper<TObject | null | undefined>,
            path: TKey | [TKey],
            defaultValue: TDefault
        ): LoDashExplicitAsyncWrapper<TObject[TKey] | TDefault>;
        get<T>(
            this: LoDashExplicitAsyncWrapper<_.NumericDictionary<T>>,
            path: number
        ): LoDashExplicitAsyncWrapper<T>;
        get<T>(
            this: LoDashExplicitAsyncWrapper<_.NumericDictionary<T> | null | undefined>,
            path: number
        ): LoDashExplicitAsyncWrapper<T | undefined>;
        get<T, TDefault>(
            this: LoDashExplicitAsyncWrapper<_.NumericDictionary<T> | null | undefined>,
            path: number,
            defaultValue: TDefault
        ): LoDashExplicitAsyncWrapper<T | undefined>;
        get<TDefault>(
            this: LoDashExplicitAsyncWrapper<null | undefined>,
            path: _.PropertyPath,
            defaultValue: TDefault
        ): LoDashExplicitAsyncWrapper<TDefault>;
        get(
            this: LoDashExplicitAsyncWrapper<null | undefined>,
            path: _.PropertyPath
        ): LoDashExplicitAsyncWrapper<undefined>;
        get(
            path: _.PropertyPath,
            defaultValue?: any
        ): LoDashExplicitAsyncWrapper<any>;
        has(path: _.PropertyPath): LoDashExplicitAsyncWrapper<boolean>;
        hasIn(path: _.PropertyPath): LoDashExplicitAsyncWrapper<boolean>;
        invert(): LoDashExplicitAsyncWrapper<_.Dictionary<string>>;
        invertBy<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | _.Dictionary<T> | _.NumericDictionary<T> | null | undefined>,
            interatee?: _.ValueIteratee<T>
        ): LoDashExplicitAsyncWrapper<_.Dictionary<string[]>>;
        invertBy<T extends object>(
            this: LoDashExplicitAsyncWrapper<T | null | undefined>,
            interatee?: _.ValueIteratee<T[keyof T]>
        ): LoDashExplicitAsyncWrapper<_.Dictionary<string[]>>;
        invoke(
            path: _.PropertyPath,
            ...args: any[]): LoDashExplicitAsyncWrapper<any>;
        keys(): LoDashExplicitAsyncWrapper<string[]>;
        keysIn(): LoDashExplicitAsyncWrapper<string[]>;
        mapKeys<T>(
            this: LoDashExplicitAsyncWrapper<_.List<T> | null | undefined>,
            iteratee?: _.ListIteratee<T>
        ): LoDashExplicitAsyncWrapper<_.Dictionary<T>>;
        mapKeys<T extends object>(
            this: LoDashExplicitAsyncWrapper<T | null | undefined>,
            iteratee?: _.ObjectIteratee<T>
        ): LoDashExplicitAsyncWrapper<_.Dictionary<T[keyof T]>>;
        mapValues<TResult>(
            this: LoDashExplicitAsyncWrapper<string | null | undefined>,
            callback: _.StringIterator<TResult>
        ): LoDashExplicitAsyncWrapper<_.NumericDictionary<TResult>>;
        mapValues<T, TResult>(
            this: LoDashExplicitAsyncWrapper<_.Dictionary<T> | _.NumericDictionary<T> | null | undefined>,
            callback: _.DictionaryIterator<T, TResult>
        ): LoDashExplicitAsyncWrapper<_.Dictionary<TResult>>;
        mapValues<T extends object, TResult>(
            this: LoDashExplicitAsyncWrapper<T | null | undefined>,
            callback: _.ObjectIterator<T, TResult>
        ): LoDashExplicitAsyncWrapper<{ [P in keyof T]: TResult }>;
        mapValues<T>(
            this: LoDashExplicitAsyncWrapper<_.Dictionary<T> | _.NumericDictionary<T> | null | undefined>,
            iteratee: object
        ): LoDashExplicitAsyncWrapper<_.Dictionary<boolean>>;
        mapValues<T extends object>(
            this: LoDashExplicitAsyncWrapper<T | null | undefined>,
            iteratee: object
        ): LoDashExplicitAsyncWrapper<{ [P in keyof T]: boolean }>;
        mapValues<T, TKey extends keyof T>(
            this: LoDashExplicitAsyncWrapper<_.Dictionary<T> | _.NumericDictionary<T> | null | undefined>,
            iteratee: TKey
        ): LoDashExplicitAsyncWrapper<_.Dictionary<T[TKey]>>;
        mapValues<T>(
            this: LoDashExplicitAsyncWrapper<_.Dictionary<T> | _.NumericDictionary<T> | null | undefined>,
            iteratee: string
        ): LoDashExplicitAsyncWrapper<_.Dictionary<any>>;
        mapValues<T extends object>(
            this: LoDashExplicitAsyncWrapper<T | null | undefined>,
            iteratee: string
        ): LoDashExplicitAsyncWrapper<{ [P in keyof T]: any }>;
        mapValues(this: LoDashExplicitAsyncWrapper<string | null | undefined>): LoDashExplicitAsyncWrapper<_.NumericDictionary<string>>;
        mapValues<T>(this: LoDashExplicitAsyncWrapper<_.Dictionary<T> | _.NumericDictionary<T> | null | undefined>): LoDashExplicitAsyncWrapper<_.Dictionary<T>>;
        mapValues<T extends object>(this: LoDashExplicitAsyncWrapper<T>): LoDashExplicitAsyncWrapper<T>;
        mapValues<T extends object>(this: LoDashExplicitAsyncWrapper<T | null | undefined>): LoDashExplicitAsyncWrapper<_.PartialObject<T>>;
        merge<TSource>(
            source: TSource
        ): LoDashExplicitAsyncWrapper<TValue & TSource>;
        merge<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2
        ): LoDashExplicitAsyncWrapper<TValue & TSource1 & TSource2>;
        merge<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3
        ): LoDashExplicitAsyncWrapper<TValue & TSource1 & TSource2 & TSource3>;
        merge<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4
        ): LoDashExplicitAsyncWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;
        merge(
            ...otherArgs: any[]
        ): LoDashExplicitAsyncWrapper<any>;
        mergeWith<TSource>(
            source: TSource,
            customizer: _.MergeWithCustomizer
        ): LoDashExplicitAsyncWrapper<TValue & TSource>;
        mergeWith<TSource1, TSource2>(
            source1: TSource1,
            source2: TSource2,
            customizer: _.MergeWithCustomizer
        ): LoDashExplicitAsyncWrapper<TValue & TSource1 & TSource2>;
        mergeWith<TSource1, TSource2, TSource3>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            customizer: _.MergeWithCustomizer
        ): LoDashExplicitAsyncWrapper<TValue & TSource1 & TSource2 & TSource3>;
        mergeWith<TSource1, TSource2, TSource3, TSource4>(
            source1: TSource1,
            source2: TSource2,
            source3: TSource3,
            source4: TSource4,
            customizer: _.MergeWithCustomizer
        ): LoDashExplicitAsyncWrapper<TValue & TSource1 & TSource2 & TSource3 & TSource4>;
        mergeWith(
            ...otherArgs: any[]
        ): LoDashExplicitAsyncWrapper<any>;
        omit<T extends _.AnyKindOfDictionary>(
            this: LoDashExplicitAsyncWrapper<T | null | undefined>,
            ...paths: Array<_.Many<_.PropertyName>>
        ): LoDashExplicitAsyncWrapper<T>;
        omit<T extends object, K extends keyof T>(
            this: LoDashExplicitAsyncWrapper<T | null | undefined>,
            ...paths: Array<_.Many<K>>
        ): LoDashExplicitAsyncWrapper<_.Omit<T, K>>;
        omit<T extends object>(
            this: LoDashExplicitAsyncWrapper<T | null | undefined>,
            ...paths: Array<_.Many<_.PropertyName>>
        ): LoDashExplicitAsyncWrapper<_.PartialObject<T>>;
        omitBy<T>(
            this: LoDashExplicitAsyncWrapper<_.Dictionary<T> | null | undefined>,
            predicate?: _.ValueKeyIteratee<T>
        ): LoDashExplicitAsyncWrapper<_.Dictionary<T>>;
        omitBy<T>(
            this: LoDashExplicitAsyncWrapper<_.NumericDictionary<T> | null | undefined>,
            predicate?: _.ValueKeyIteratee<T>
        ): LoDashExplicitAsyncWrapper<_.NumericDictionary<T>>;
        omitBy<T extends object>(
            this: LoDashExplicitAsyncWrapper<T | null | undefined>,
            predicate: _.ValueKeyIteratee<T[keyof T]>
        ): LoDashExplicitAsyncWrapper<_.PartialObject<T>>;
        pick<T extends object, U extends keyof T>(
            this: LoDashExplicitAsyncWrapper<T>,
            ...props: Array<_.Many<U>>
        ): LoDashExplicitAsyncWrapper<Pick<T, U>>;
        pick<T extends object>(
            this: LoDashExplicitAsyncWrapper<T | null | undefined>,
            ...props: _.PropertyPath[]
        ): LoDashExplicitAsyncWrapper<_.PartialObject<T>>;
        pickBy<T, S extends T>(
            this: LoDashExplicitAsyncWrapper<_.Dictionary<T> | null | undefined>,
            predicate: _.ValueKeyIterateeTypeGuard<T, S>
        ): LoDashExplicitAsyncWrapper<_.Dictionary<S>>;
        pickBy<T, S extends T>(
            this: LoDashExplicitAsyncWrapper<_.NumericDictionary<T> | null | undefined>,
            predicate: _.ValueKeyIterateeTypeGuard<T, S>
        ): LoDashExplicitAsyncWrapper<_.NumericDictionary<S>>;
        pickBy<T>(
            this: LoDashExplicitAsyncWrapper<_.Dictionary<T> | null | undefined>,
            predicate?: _.ValueKeyIteratee<T>
        ): LoDashExplicitAsyncWrapper<_.Dictionary<T>>;
        pickBy<T>(
            this: LoDashExplicitAsyncWrapper<_.NumericDictionary<T> | null | undefined>,
            predicate?: _.ValueKeyIteratee<T>
        ): LoDashExplicitAsyncWrapper<_.NumericDictionary<T>>;
        pickBy<T extends object>(
            this: LoDashExplicitAsyncWrapper<T | null | undefined>,
            predicate?: _.ValueKeyIteratee<T[keyof T]>
        ): LoDashExplicitAsyncWrapper<_.PartialObject<T>>;
        result<TResult>(
            path: _.PropertyPath,
            defaultValue?: TResult|((...args: any[]) => TResult)
        ): LoDashExplicitAsyncWrapper<TResult>;
        set(
            path: _.PropertyPath,
            value: any
        ): this;
        set<TResult>(
            path: _.PropertyPath,
            value: any
        ): LoDashExplicitAsyncWrapper<TResult>;
        setWith(
            path: _.PropertyPath,
            value: any,
            customizer?: _.SetWithCustomizer<TValue>
        ): this;
        setWith<TResult>(
            path: _.PropertyPath,
            value: any,
            customizer?: _.SetWithCustomizer<TValue>
        ): LoDashExplicitAsyncWrapper<TResult>;
        toPairs<T>(this: LoDashExplicitAsyncWrapper<_.Dictionary<T> | _.NumericDictionary<T>>): LoDashExplicitAsyncWrapper<Array<[string, T]>>;
        toPairs(): LoDashExplicitAsyncWrapper<Array<[string, any]>>;
        toPairsIn<T>(this: LoDashExplicitAsyncWrapper<_.Dictionary<T> | _.NumericDictionary<T>>): LoDashExplicitAsyncWrapper<Array<[string, T]>>;
        toPairsIn(): LoDashExplicitAsyncWrapper<Array<[string, any]>>;
        transform<T, TResult>(
            this: LoDashExplicitAsyncWrapper<T[]>,
            iteratee: _.MemoVoidArrayIterator<T, TResult[]>,
            accumulator?: TResult[]
        ): LoDashExplicitAsyncWrapper<TResult[]>;
        transform<T, TResult>(
            this: LoDashExplicitAsyncWrapper<T[]>,
            iteratee: _.MemoVoidArrayIterator<T, _.Dictionary<TResult>>,
            accumulator?: _.Dictionary<TResult>
        ): LoDashExplicitAsyncWrapper<_.Dictionary<TResult>>;
        transform<T, TResult>(
            this: LoDashExplicitAsyncWrapper<_.Dictionary<T>>,
            iteratee: _.MemoVoidDictionaryIterator<T, _.Dictionary<TResult>>,
            accumulator?: _.Dictionary<TResult>
        ): LoDashExplicitAsyncWrapper<_.Dictionary<TResult>>;
        transform<T, TResult>(
            this: LoDashExplicitAsyncWrapper<_.Dictionary<T>>,
            iteratee: _.MemoVoidDictionaryIterator<T, TResult[]>,
            accumulator?: TResult[]
        ): LoDashExplicitAsyncWrapper<TResult[]>;
        transform(
            this: LoDashExplicitAsyncWrapper<any[]>,
        ): LoDashExplicitAsyncWrapper<any[]>;
        transform(): LoDashExplicitAsyncWrapper<_.Dictionary<any>>;
        unset(path: _.PropertyPath): LoDashExplicitAsyncWrapper<boolean>;
        update(
            path: _.PropertyPath,
            updater: (value: any) => any
        ): LoDashExplicitAsyncWrapper<any>;
        updateWith(
            path: _.PropertyPath,
            updater: (oldValue: any) => any,
            customizer?: _.SetWithCustomizer<TValue>
        ): this;
        updateWith<TResult>(
            path: _.PropertyPath,
            updater: (oldValue: any) => any,
            customizer?: _.SetWithCustomizer<TValue>
        ): LoDashExplicitAsyncWrapper<TResult>;
        values<T>(this: LoDashExplicitAsyncWrapper<_.Dictionary<T> | _.NumericDictionary<T> | _.List<T> | null | undefined>): LoDashExplicitAsyncWrapper<T[]>;
        values<T extends object>(this: LoDashExplicitAsyncWrapper<T | null | undefined>): LoDashExplicitAsyncWrapper<Array<T[keyof T]>>;
        values(): LoDashExplicitAsyncWrapper<any[]>;
        valuesIn<T>(this: LoDashExplicitAsyncWrapper<_.Dictionary<T> | _.NumericDictionary<T> | _.List<T> | null | undefined>): LoDashExplicitAsyncWrapper<T[]>;
        valuesIn<T extends object>(this: LoDashExplicitAsyncWrapper<T | null | undefined>): LoDashExplicitAsyncWrapper<Array<T[keyof T]>>;
        chain(): this;
        chain(): this;
        plant<T>(value: T): LoDashExplicitAsyncWrapper<T>;
        thru<TResult>(interceptor: (value: TValue) => TResult): LoDashExplicitAsyncWrapper<TResult>;
        camelCase(): LoDashExplicitAsyncWrapper<string>;
        capitalize(): LoDashExplicitAsyncWrapper<string>;
        deburr(): LoDashExplicitAsyncWrapper<string>;
        endsWith(
            target?: string,
            position?: number
        ): LoDashExplicitAsyncWrapper<boolean>;
        escape(): LoDashExplicitAsyncWrapper<string>;
        escapeRegExp(): LoDashExplicitAsyncWrapper<string>;
        kebabCase(): LoDashExplicitAsyncWrapper<string>;
        lowerCase(): LoDashExplicitAsyncWrapper<string>;
        lowerFirst(): LoDashExplicitAsyncWrapper<string>;
        pad(
            length?: number,
            chars?: string
        ): LoDashExplicitAsyncWrapper<string>;
        padEnd(
            length?: number,
            chars?: string
        ): LoDashExplicitAsyncWrapper<string>;
        padStart(
            length?: number,
            chars?: string
        ): LoDashExplicitAsyncWrapper<string>;
        parseInt(radix?: number): LoDashExplicitAsyncWrapper<number>;
        repeat(n?: number): LoDashExplicitAsyncWrapper<string>;
        replace(
            pattern: RegExp | string,
            replacement: _.ReplaceFunction | string
        ): LoDashExplicitAsyncWrapper<string>;
        replace(
            replacement: _.ReplaceFunction | string
        ): LoDashExplicitAsyncWrapper<string>;
        snakeCase(): LoDashExplicitAsyncWrapper<string>;
        split(
            separator?: RegExp|string,
            limit?: number
        ): LoDashExplicitAsyncWrapper<string[]>;
        startCase(): LoDashExplicitAsyncWrapper<string>;
        startsWith(
            target?: string,
            position?: number
        ): LoDashExplicitAsyncWrapper<boolean>;
        template(options?: _.TemplateOptions): LoDashExplicitAsyncWrapper<_.TemplateExecutor>;
        toLower(): LoDashExplicitAsyncWrapper<string>;
        toUpper(): LoDashExplicitAsyncWrapper<string>;
        trim(chars?: string): LoDashExplicitAsyncWrapper<string>;
        trimEnd(chars?: string): LoDashExplicitAsyncWrapper<string>;
        trimStart(chars?: string): LoDashExplicitAsyncWrapper<string>;
        truncate(options?: _.TruncateOptions): LoDashExplicitAsyncWrapper<string>;
        unescape(): LoDashExplicitAsyncWrapper<string>;
        upperCase(): LoDashExplicitAsyncWrapper<string>;
        upperFirst(): LoDashExplicitAsyncWrapper<string>;
        words(pattern?: string|RegExp): LoDashExplicitAsyncWrapper<string[]>;
        attempt<TResult>(...args: any[]): LoDashExplicitAsyncWrapper<TResult|Error>;
        conforms<T>(this: LoDashExplicitAsyncWrapper<_.ConformsPredicateObject<T>>): LoDashExplicitAsyncWrapper<(value: T) => boolean>;
        constant(): LoDashExplicitAsyncWrapper<() => TValue>;
        defaultTo<T>(this: LoDashExplicitAsyncWrapper<T | null | undefined>, defaultValue: T): LoDashExplicitAsyncWrapper<T>;
        defaultTo<T, TDefault>(
            this: LoDashExplicitAsyncWrapper<T | null | undefined>,
            defaultValue: TDefault
        ): LoDashExplicitAsyncWrapper<T | TDefault>;
        // 0-argument first function
        flow<R1, R2>(this: LoDashExplicitAsyncWrapper<() => R1>, f2: (a: R1) => R2): LoDashExplicitAsyncWrapper<() => R2>;
        flow<R1, R2, R3>(this: LoDashExplicitAsyncWrapper<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): LoDashExplicitAsyncWrapper<() => R3>;
        flow<R1, R2, R3, R4>(this: LoDashExplicitAsyncWrapper<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): LoDashExplicitAsyncWrapper<() => R4>;
        flow<R1, R2, R3, R4, R5>(this: LoDashExplicitAsyncWrapper<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): LoDashExplicitAsyncWrapper<() => R5>;
        flow<R1, R2, R3, R4, R5, R6>(this: LoDashExplicitAsyncWrapper<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): LoDashExplicitAsyncWrapper<() => R6>;
        flow<R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitAsyncWrapper<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): LoDashExplicitAsyncWrapper<() => R7>;
        flow<R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitAsyncWrapper<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<_.Many<(a: any) => any>>): LoDashExplicitAsyncWrapper<() => any>;
        // 1-argument first function
        flow<A1, R1, R2>(this: LoDashExplicitAsyncWrapper<(a1: A1) => R1>, f2: (a: R1) => R2): LoDashExplicitAsyncWrapper<(a1: A1) => R2>;
        flow<A1, R1, R2, R3>(this: LoDashExplicitAsyncWrapper<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): LoDashExplicitAsyncWrapper<(a1: A1) => R3>;
        flow<A1, R1, R2, R3, R4>(this: LoDashExplicitAsyncWrapper<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): LoDashExplicitAsyncWrapper<(a1: A1) => R4>;
        flow<A1, R1, R2, R3, R4, R5>(this: LoDashExplicitAsyncWrapper<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): LoDashExplicitAsyncWrapper<(a1: A1) => R5>;
        flow<A1, R1, R2, R3, R4, R5, R6>(this: LoDashExplicitAsyncWrapper<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): LoDashExplicitAsyncWrapper<(a1: A1) => R6>;
        flow<A1, R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitAsyncWrapper<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): LoDashExplicitAsyncWrapper<(a1: A1) => R7>;
        flow<A1, R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitAsyncWrapper<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<_.Many<(a: any) => any>>): LoDashExplicitAsyncWrapper<(a1: A1) => any>;
        // 2-argument first function
        flow<A1, A2, R1, R2>(this: LoDashExplicitAsyncWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2) => R2>;
        flow<A1, A2, R1, R2, R3>(this: LoDashExplicitAsyncWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2) => R3>;
        flow<A1, A2, R1, R2, R3, R4>(this: LoDashExplicitAsyncWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2) => R4>;
        flow<A1, A2, R1, R2, R3, R4, R5>(this: LoDashExplicitAsyncWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2) => R5>;
        flow<A1, A2, R1, R2, R3, R4, R5, R6>(this: LoDashExplicitAsyncWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2) => R6>;
        flow<A1, A2, R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitAsyncWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2) => R7>;
        flow<A1, A2, R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitAsyncWrapper<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<_.Many<(a: any) => any>>): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2) => any>;
        // 3-argument first function
        flow<A1, A2, A3, R1, R2>(this: LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3) => R2>;
        flow<A1, A2, A3, R1, R2, R3>(this: LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3) => R3>;
        flow<A1, A2, A3, R1, R2, R3, R4>(this: LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3) => R4>;
        flow<A1, A2, A3, R1, R2, R3, R4, R5>(this: LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3) => R5>;
        flow<A1, A2, A3, R1, R2, R3, R4, R5, R6>(this: LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3) => R6>;
        flow<A1, A2, A3, R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3) => R7>;
        flow<A1, A2, A3, R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<_.Many<(a: any) => any>>): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3) => any>;
        // 4-argument first function
        flow<A1, A2, A3, A4, R1, R2>(this: LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R2>;
        flow<A1, A2, A3, A4, R1, R2, R3>(this: LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R3>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4>(this: LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R4>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5>(this: LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R5>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6>(this: LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R6>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R7>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<_.Many<(a: any) => any>>): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => any>;
        // any-argument first function
        flow<A1, A2, A3, A4, R1, R2>(this: LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R2>;
        flow<A1, A2, A3, A4, R1, R2, R3>(this: LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R3>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4>(this: LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R4>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5>(this: LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R5>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6>(this: LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R6>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R7>;
        flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(this: LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<_.Many<(a: any) => any>>): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => any>;
        flow(this: LoDashExplicitAsyncWrapper<(...args: any[]) => any>, funcs: Array<_.Many<(a: any) => any>>): LoDashExplicitAsyncWrapper<(...args: any[]) => any>;
        // 0-argument first function
        flowRight<R2, R1>(this: LoDashExplicitAsyncWrapper<(a: R1) => R2>, f1: () => R1): LoDashExplicitAsyncWrapper<() => R2>;
        flowRight<R3, R2, R1>(this: LoDashExplicitAsyncWrapper<(a: R2) => R3>, f2: (a: R1) => R2, f1: () => R1): LoDashExplicitAsyncWrapper<() => R3>;
        flowRight<R4, R3, R2, R1>(this: LoDashExplicitAsyncWrapper<(a: R3) => R4>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): LoDashExplicitAsyncWrapper<() => R4>;
        flowRight<R5, R4, R3, R2, R1>(this: LoDashExplicitAsyncWrapper<(a: R4) => R5>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): LoDashExplicitAsyncWrapper<() => R5>;
        flowRight<R6, R5, R4, R3, R2, R1>(this: LoDashExplicitAsyncWrapper<(a: R5) => R6>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): LoDashExplicitAsyncWrapper<() => R6>;
        flowRight<R7, R6, R5, R4, R3, R2, R1>(this: LoDashExplicitAsyncWrapper<(a: R6) => R7>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): LoDashExplicitAsyncWrapper<() => R7>;
        // 1-argument first function
        flowRight<A1, R2, R1>(this: LoDashExplicitAsyncWrapper<(a: R1) => R2>, f1: (a1: A1) => R1): LoDashExplicitAsyncWrapper<(a1: A1) => R2>;
        flowRight<A1, R3, R2, R1>(this: LoDashExplicitAsyncWrapper<(a: R2) => R3>, f2: (a: R1) => R2, f1: (a1: A1) => R1): LoDashExplicitAsyncWrapper<(a1: A1) => R3>;
        flowRight<A1, R4, R3, R2, R1>(this: LoDashExplicitAsyncWrapper<(a: R3) => R4>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): LoDashExplicitAsyncWrapper<(a1: A1) => R4>;
        flowRight<A1, R5, R4, R3, R2, R1>(this: LoDashExplicitAsyncWrapper<(a: R4) => R5>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): LoDashExplicitAsyncWrapper<(a1: A1) => R5>;
        flowRight<A1, R6, R5, R4, R3, R2, R1>(this: LoDashExplicitAsyncWrapper<(a: R5) => R6>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): LoDashExplicitAsyncWrapper<(a1: A1) => R6>;
        flowRight<A1, R7, R6, R5, R4, R3, R2, R1>(this: LoDashExplicitAsyncWrapper<(a: R6) => R7>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): LoDashExplicitAsyncWrapper<(a1: A1) => R7>;
        // 2-argument first function
        flowRight<A1, A2, R2, R1>(this: LoDashExplicitAsyncWrapper<(a: R1) => R2>, f1: (a1: A1, a2: A2) => R1): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2) => R2>;
        flowRight<A1, A2, R3, R2, R1>(this: LoDashExplicitAsyncWrapper<(a: R2) => R3>, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2) => R3>;
        flowRight<A1, A2, R4, R3, R2, R1>(this: LoDashExplicitAsyncWrapper<(a: R3) => R4>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2) => R4>;
        flowRight<A1, A2, R5, R4, R3, R2, R1>(this: LoDashExplicitAsyncWrapper<(a: R4) => R5>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2) => R5>;
        flowRight<A1, A2, R6, R5, R4, R3, R2, R1>(this: LoDashExplicitAsyncWrapper<(a: R5) => R6>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2) => R6>;
        flowRight<A1, A2, R7, R6, R5, R4, R3, R2, R1>(this: LoDashExplicitAsyncWrapper<(a: R6) => R7>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2) => R7>;
        // 3-argument first function
        flowRight<A1, A2, A3, R2, R1>(this: LoDashExplicitAsyncWrapper<(a: R1) => R2>, f1: (a1: A1, a2: A2, a3: A3) => R1): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3) => R2>;
        flowRight<A1, A2, A3, R3, R2, R1>(this: LoDashExplicitAsyncWrapper<(a: R2) => R3>, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3) => R3>;
        flowRight<A1, A2, A3, R4, R3, R2, R1>(this: LoDashExplicitAsyncWrapper<(a: R3) => R4>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3) => R4>;
        flowRight<A1, A2, A3, R5, R4, R3, R2, R1>(this: LoDashExplicitAsyncWrapper<(a: R4) => R5>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3) => R5>;
        flowRight<A1, A2, A3, R6, R5, R4, R3, R2, R1>(this: LoDashExplicitAsyncWrapper<(a: R5) => R6>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3) => R6>;
        flowRight<A1, A2, A3, R7, R6, R5, R4, R3, R2, R1>(this: LoDashExplicitAsyncWrapper<(a: R6) => R7>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3) => R7>;
        // 4-argument first function
        flowRight<A1, A2, A3, A4, R2, R1>(this: LoDashExplicitAsyncWrapper<(a: R1) => R2>, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R2>;
        flowRight<A1, A2, A3, A4, R3, R2, R1>(this: LoDashExplicitAsyncWrapper<(a: R2) => R3>, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R3>;
        flowRight<A1, A2, A3, A4, R4, R3, R2, R1>(this: LoDashExplicitAsyncWrapper<(a: R3) => R4>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R4>;
        flowRight<A1, A2, A3, A4, R5, R4, R3, R2, R1>(this: LoDashExplicitAsyncWrapper<(a: R4) => R5>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R5>;
        flowRight<A1, A2, A3, A4, R6, R5, R4, R3, R2, R1>(this: LoDashExplicitAsyncWrapper<(a: R5) => R6>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R6>;
        flowRight<A1, A2, A3, A4, R7, R6, R5, R4, R3, R2, R1>(this: LoDashExplicitAsyncWrapper<(a: R6) => R7>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): LoDashExplicitAsyncWrapper<(a1: A1, a2: A2, a3: A3, a4: A4) => R7>;
        // any-argument first function
        flowRight<R2, R1>(this: LoDashExplicitAsyncWrapper<(a: R1) => R2>, f1: (...args: any[]) => R1): LoDashExplicitAsyncWrapper<(...args: any[]) => R2>;
        flowRight<R3, R2, R1>(this: LoDashExplicitAsyncWrapper<(a: R1) => R2>, f2: (a: R1) => R2, f1: (...args: any[]) => R1): LoDashExplicitAsyncWrapper<(...args: any[]) => R3>;
        flowRight<R4, R3, R2, R1>(this: LoDashExplicitAsyncWrapper<(a: R1) => R2>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): LoDashExplicitAsyncWrapper<(...args: any[]) => R4>;
        flowRight<R5, R4, R3, R2, R1>(this: LoDashExplicitAsyncWrapper<(a: R1) => R2>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): LoDashExplicitAsyncWrapper<(...args: any[]) => R5>;
        flowRight<R6, R5, R4, R3, R2, R1>(this: LoDashExplicitAsyncWrapper<(a: R1) => R2>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): LoDashExplicitAsyncWrapper<(...args: any[]) => R6>;
        flowRight<R7, R6, R5, R4, R3, R2, R1>(this: LoDashExplicitAsyncWrapper<(a: R1) => R2>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): LoDashExplicitAsyncWrapper<(...args: any[]) => R7>;
        flowRight(this: LoDashExplicitAsyncWrapper<(a: any) => any>, f6: (a: any) => any, f5: (a: any) => any, f4: (a: any) => any, f3: (a: any) => any, f2: (a: any) => any, f1: () => any, ...funcs: Array<_.Many<(...args: any[]) => any>>): LoDashExplicitAsyncWrapper<(...args: any[]) => any>;
        flowRight(this: LoDashExplicitAsyncWrapper<(a: any) => any>, funcs: Array<_.Many<(...args: any[]) => any>>): LoDashExplicitAsyncWrapper<(...args: any[]) => any>;
        identity(): this;
        iteratee<TFunction extends (...args: any[]) => any>(
            this: LoDashExplicitAsyncWrapper<TFunction | string | object>
        ): LoDashExplicitAsyncWrapper<TFunction>;
        matches<V>(): LoDashExplicitAsyncWrapper<(value: V) => boolean>;
        matchesProperty<SrcValue>(
            srcValue: SrcValue
        ): LoDashExplicitAsyncWrapper<(value: any) => boolean>;
        matchesProperty<SrcValue, Value>(
            srcValue: SrcValue
        ): LoDashExplicitAsyncWrapper<(value: Value) => boolean>;
        method(...args: any[]): LoDashExplicitAsyncWrapper<(object: any) => any>;
        methodOf(
            ...args: any[]
        ): LoDashExplicitAsyncWrapper<(path: _.PropertyPath) => any>;
        mixin(
            source: _.Dictionary<(...args: any[]) => any>,
            options?: _.MixinOptions
        ): this;
        mixin(
            options?: _.MixinOptions
        ): LoDashExplicitAsyncWrapper<_.LoDashStatic>;
        noConflict(): LoDashExplicitAsyncWrapper<typeof _>;
        noop(...args: any[]): LoDashExplicitAsyncWrapper<undefined>;
        nthArg(): LoDashExplicitAsyncWrapper<(...args: any[]) => any>;
        over<TResult>(
            this: LoDashExplicitAsyncWrapper<_.Many<(...args: any[]) => TResult>>,
            ...iteratees: Array<_.Many<(...args: any[]) => TResult>>
        ): LoDashExplicitAsyncWrapper<(...args: any[]) => TResult[]>;
        overEvery<T>(...predicates: Array<_.Many<(...args: T[]) => boolean>>): LoDashExplicitAsyncWrapper<(...args: T[]) => boolean>;
        overSome<T>(...predicates: Array<_.Many<(...args: T[]) => boolean>>): LoDashExplicitAsyncWrapper<(...args: T[]) => boolean>;
        property<TObj, TResult>(): LoDashExplicitAsyncWrapper<(obj: TObj) => TResult>;
        propertyOf(): LoDashExplicitAsyncWrapper<(path: _.PropertyPath) => any>;
        range(
            end?: number,
            step?: number
        ): LoDashExplicitAsyncWrapper<number[]>;
        rangeRight(
            end?: number,
            step?: number
        ): LoDashExplicitAsyncWrapper<number[]>;
        stubArray(): LoDashExplicitAsyncWrapper<any[]>;
        stubFalse(): LoDashExplicitAsyncWrapper<false>;
        stubObject(): LoDashExplicitAsyncWrapper<any>;
        stubString(): LoDashExplicitAsyncWrapper<string>;
        stubTrue(): LoDashExplicitAsyncWrapper<true>;
        times<TResult>(
            iteratee: (num: number) => TResult
        ): LoDashExplicitAsyncWrapper<TResult[]>;
        times(): LoDashExplicitAsyncWrapper<number[]>;
        toPath(): LoDashExplicitAsyncWrapper<string[]>;
        uniqueId(): LoDashExplicitAsyncWrapper<string>;
    }
}
