import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * @see _.chunk
         */
        chunk<T>(array: List<T> | null | undefined, size?: number): T[][];
    }
    interface Collection<T> {
        /**
         * @see _.chunk
         */
        chunk(size?: number): Collection<T[]>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.chunk
         */
        chunk(size?: number): CollectionChain<T[]>;
    }
    interface LoDashStatic {
        /**
         * @see _.compact
         */
        compact<T>(array: List<T | null | undefined | false | "" | 0> | null | undefined): T[];
    }

    type Truthy<T> = T extends null | undefined | false | "" | 0 ? never : T;
    interface Collection<T> {
        /**
         * @see _.compact
         */
        compact(): Collection<Truthy<T>>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.compact
         */
        compact(): CollectionChain<Truthy<T>>;
    }
    interface LoDashStatic {
        /**
         * @see _.concat
         */
         concat<T>(array: Many<T>, ...values: Array<Many<T>>): T[];
    }
    interface Primitive<T> {
        /**
         * @see _.concat
         */
        concat(...values: Array<Many<T>>): Collection<T>;
    }
    interface Collection<T> {
        /**
         * @see _.concat
         */
        concat(...values: Array<Many<T>>): Collection<T>;
    }
    interface Object<T> {
        /**
         * @see _.concat
         */
        concat(...values: Array<Many<T>>): Collection<T>;
    }
    interface PrimitiveChain<T> {
        /**
         * @see _.concat
         */
        concat(...values: Array<Many<T>>): CollectionChain<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.concat
         */
        concat(...values: Array<Many<T>>): CollectionChain<T>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.concat
         */
        concat(...values: Array<Many<T>>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.difference
         */
        difference<T>(array: List<T> | null | undefined, ...values: Array<List<T>>): T[];
    }
    interface Collection<T> {
        /**
         * @see _.difference
         */
        difference(...values: Array<List<T>>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.difference
         */
        difference(...values: Array<List<T>>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2>(array: List<T1> | null | undefined, values: List<T2>, iteratee: ValueIteratee<T1 | T2>): T1[];
        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3>(array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, iteratee: ValueIteratee<T1 | T2 | T3>): T1[];
        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4>(array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, values3: List<T4>, iteratee: ValueIteratee<T1 | T2 | T3 | T4>): T1[];
        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4, T5>(array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, values3: List<T4>, values4: List<T5>, iteratee: ValueIteratee<T1 | T2 | T3 | T4 | T5>): T1[];
        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4, T5, T6>(array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, values3: List<T4>, values4: List<T5>, values5: List<T6>, iteratee: ValueIteratee<T1 | T2 | T3 | T4 | T5 | T6>): T1[];
        /**
         * @see _.differenceBy
         */
        differenceBy<T1, T2, T3, T4, T5, T6, T7>(array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, values3: List<T4>, values4: List<T5>, values5: List<T6>, ...values: Array<List<T7> | ValueIteratee<T1 | T2 | T3 | T4 | T5 | T6 | T7>>): T1[];
        /**
         * @see _.differenceBy
         */
        differenceBy<T>(array: List<T> | null | undefined, ...values: Array<List<T>>): T[];
    }
    interface Collection<T> {
        /**
         * @see _.differenceBy
         */
        differenceBy<T2>(values1: List<T2>, iteratee?: ValueIteratee<T | T2>): Collection<T>;
        /**
         * @see _.differenceBy
         */
        differenceBy(...values: Array<List<unknown> | ValueIteratee<T>>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.differenceBy
         */
        differenceBy<T2>(values1: List<T2>, iteratee?: ValueIteratee<T | T2>): CollectionChain<T>;
        /**
         * @see _.differenceBy
         */
        differenceBy(...values: Array<List<unknown> | ValueIteratee<T>>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.differenceWith
         */
        differenceWith<T1, T2>(array: List<T1> | null | undefined, values: List<T2>, comparator: Comparator2<T1, T2>): T1[];
        /**
         * @see _.differenceWith
         */
        differenceWith<T1, T2, T3>(array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, comparator: Comparator2<T1, T2 | T3>): T1[];
        /**
         * @see _.differenceWith
         */
        differenceWith<T1, T2, T3, T4>(array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, ...values: Array<List<T4> | Comparator2<T1, T2 | T3 | T4>>): T1[];
        /**
         * @see _.differenceWith
         */
        differenceWith<T>(array: List<T> | null | undefined, ...values: Array<List<T>>): T[];
    }
    interface Collection<T> {
        /**
         * @see _.differenceWith
         */
        differenceWith<T2>(values: List<T2>, comparator: Comparator2<T, T2>): Collection<T>;
        /**
         * @see _.differenceWith
         */
        differenceWith<T2, T3, T4>(...values: Array<List<unknown> | Comparator2<T, never>>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.differenceWith
         */
        differenceWith< T2>(values: List<T2>, comparator: Comparator2<T, T2>): CollectionChain<T>;
        /**
         * @see _.differenceWith
         */
        differenceWith< T2, T3, T4>(...values: Array<List<unknown> | Comparator2<T, never>>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.drop
         */
        drop<T>(array: List<T> | null | undefined, n?: number): T[];
    }
    interface Collection<T> {
        /**
         * @see _.drop
         */
        drop(n?: number): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.drop
         */
        drop(n?: number): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.dropRight
         */
        dropRight<T>(array: List<T> | null | undefined, n?: number): T[];
    }
    interface Collection<T> {
        /**
         * @see _.dropRight
         */
        dropRight(n?: number): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.dropRight
         */
        dropRight(n?: number): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.dropRightWhile
         */
        dropRightWhile<T>(array: List<T> | null | undefined, predicate?: ListIteratee<T>): T[];
    }
    interface Collection<T> {
        /**
         * @see _.dropRightWhile
         */
        dropRightWhile(predicate?: ListIteratee<T>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.dropRightWhile
         */
        dropRightWhile(predicate?: ListIteratee<T>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.dropWhile
         */
        dropWhile<T>(array: List<T> | null | undefined, predicate?: ListIteratee<T>): T[];
    }
    interface Collection<T> {
        /**
         * @see _.dropWhile
         */
        dropWhile(predicate?: ListIteratee<T>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.dropWhile
         */
        dropWhile(predicate?: ListIteratee<T>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.fill
         */
        fill<T>(array: any[] | null | undefined, value: T): T[];
        /**
         * @see _.fill
         */
        fill<T>(array: List<any> | null | undefined, value: T): List<T>;
        /**
         * @see _.fill
         */
        fill<T, U>(array: U[] | null | undefined, value: T, start?: number, end?: number): Array<T | U>;
        /**
         * @see _.fill
         */
        fill<T, U>(array: List<U> | null | undefined, value: T, start?: number, end?: number): List<T | U>;
    }
    interface Collection<T> {
        /**
         * @see _.fill
         */
        fill<U>(value: U, start?: number, end?: number): Collection<T | U>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.fill
         */
        fill<U>(value: U, start?: number, end?: number): CollectionChain<T | U>;
    }
    interface LoDashStatic {
        /**
         * @see _.findIndex
         */
        findIndex<T>(array: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): number;
    }
    interface Collection<T> {
        /**
         * @see _.findIndex
         */
        findIndex(predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): number;
    }
    interface CollectionChain<T> {
        /**
         * @see _.findIndex
         */
        findIndex(predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): PrimitiveChain<number>;
    }
    interface LoDashStatic {
        /**
         * @see _.findLastIndex
         */
        findLastIndex<T>(array: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): number;
    }
    interface Collection<T> {
        /**
         * @see _.findLastIndex
         */
        findLastIndex(predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): number;
    }
    interface CollectionChain<T> {
        /**
         * @see _.findLastIndex
         */
        findLastIndex(predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): PrimitiveChain<number>;
    }
    interface LoDashStatic {
        /**
         * @see _.first
         */
        first: LoDashStatic["head"];
    }
    interface String {
        /**
         * @see _.first
         */
        first(): string | undefined;
    }
    interface StringChain {
        /**
         * @see _.first
         */
        first(): StringChain;
    }
    interface Collection<T> {
        /**
         * @see _.first
         */
        first(): T | undefined;
    }
    interface CollectionChain<T> {
        /**
         * @see _.first
         */
        first(): ExpChain<T>;
    }
    interface RecursiveArray<T> extends Array<T|RecursiveArray<T>> {}
    interface ListOfRecursiveArraysOrValues<T> extends List<T|RecursiveArray<T>> {}
    interface LoDashStatic {
        /**
         * @see _.flatten
         */
        flatten<T>(array: List<Many<T>> | null | undefined): T[];
    }
    interface String {
        /**
         * @see _.flatten
         */
        flatten(): Collection<string>;
    }
    interface StringChain {
        /**
         * @see _.flatten
         */
        flatten(): CollectionChain<string>;
    }
    interface Collection<T> {
        /**
         * @see _.flatten
         */
        flatten(): T extends Many<infer U> ? Collection<U> : Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.flatten
         */
        flatten(): T extends Many<infer U> ? CollectionChain<U> : CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.flattenDeep
         */
        flattenDeep<T>(array: ListOfRecursiveArraysOrValues<T> | null | undefined): T[];
    }
    interface Collection<T> {
        /**
         * @see _.flattenDeep
         */
        flattenDeep(): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.flattenDeep
         */
        flattenDeep(): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.flattenDepth
         */
        flattenDepth<T>(array: ListOfRecursiveArraysOrValues<T> | null | undefined, depth?: number): T[];
    }
    interface Collection<T> {
        /**
         * @see _.flattenDepth
         */
        flattenDepth(depth?: number): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.flattenDepth
         */
        flattenDepth(depth?: number): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.fromPairs
         */
        fromPairs<T>(pairs: List<[PropertyName, T]> | null | undefined): Dictionary<T>;
        /**
         * @see _.fromPairs
         */
        fromPairs(pairs: List<any[]> | null | undefined): Dictionary<any>;
    }
    interface Collection<T> {
        /**
         * @see _.fromPairs
         */
        fromPairs(): Object<Dictionary<T extends [PropertyName, infer U] ? U : any>>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.fromPairs
         */
        fromPairs(): ObjectChain<Dictionary<T extends [PropertyName, infer U] ? U : any>>;
    }
    interface LoDashStatic {
        /**
         * @see _.head
         */
        head<T>(array: List<T> | null | undefined): T | undefined;
    }
    interface String {
        /**
         * @see _.head
         */
        head(): string | undefined;
    }
    interface StringChain {
        /**
         * @see _.head
         */
        head(): StringChain;
    }
    interface Collection<T> {
        /**
         * @see _.head
         */
        head(): T | undefined;
    }
    interface CollectionChain<T> {
        /**
         * @see _.head
         */
        head(): ExpChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.indexOf
         */
        indexOf<T>(array: List<T> | null | undefined, value: T, fromIndex?: number): number;
    }
    interface Collection<T> {
        /**
         * @see _.indexOf
         */
        indexOf(value: T, fromIndex?: number): number;
    }
    interface CollectionChain<T> {
        /**
         * @see _.indexOf
         */
        indexOf(value: T, fromIndex?: number): PrimitiveChain<number>;
    }
    interface LoDashStatic {
        /**
         * @see _.initial
         */
        initial<T>(array: List<T> | null | undefined): T[];
    }
    interface Collection<T> {
        /**
         * @see _.initial
         */
        initial(): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.initial
         */
        initial(): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.intersection
         */
        intersection<T>(...arrays: Array<List<T>>): T[];
    }
    interface Collection<T> {
        /**
         * @see _.intersection
         */
        intersection(...arrays: Array<List<T>>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.intersection
         */
        intersection(...arrays: Array<List<T>>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.intersectionBy
         */
        intersectionBy<T1, T2>(array: List<T1> | null, values: List<T2>, iteratee: ValueIteratee<T1 | T2>): T1[];
        /**
         * @see _.intersectionBy
         */
        intersectionBy<T1, T2, T3>(array: List<T1> | null, values1: List<T2>, values2: List<T3>, iteratee: ValueIteratee<T1 | T2 | T3>): T1[];
        /**
         * @see _.intersectionBy
         */
        intersectionBy<T1, T2, T3, T4>(array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, ...values: Array<List<T4> | ValueIteratee<T1 | T2 | T3 | T4>>): T1[];
        /**
         * @see _.intersectionBy
         */
        intersectionBy<T>(array?: List<T> | null, ...values: Array<List<T>>): T[];
    }
    interface Collection<T> {
        /**
         * @see _.intersectionBy
         */
        intersectionBy<T2>(values: List<T2>, iteratee: ValueIteratee<T | T2>): Collection<T>;
        /**
         * @see _.intersectionBy
         */
        intersectionBy(...values: Array<List<unknown> | ValueIteratee<T>>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.intersectionBy
         */
        intersectionBy<T2>(values: List<T2>, iteratee: ValueIteratee<T | T2>): CollectionChain<T>;
        /**
         * @see _.intersectionBy
         */
        intersectionBy(...values: Array<List<unknown> | ValueIteratee<T>>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.intersectionWith
         */
        intersectionWith<T1, T2>(array: List<T1> | null | undefined, values: List<T2>, comparator: Comparator2<T1, T2>): T1[];
        /**
         * @see _.intersectionWith
         */
        intersectionWith<T1, T2, T3>(array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, comparator: Comparator2<T1, T2 | T3>): T1[];
        /**
         * @see _.intersectionWith
         */
        intersectionWith<T1, T2, T3, T4>(array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, ...values: Array<List<T4> | Comparator2<T1, T2 | T3 | T4>>): T1[];
        /**
         * @see _.intersectionWith
         */
        intersectionWith<T>(array?: List<T> | null, ...values: Array<List<T>>): T[];
    }
    interface Collection<T> {
        /**
         * @see _.intersectionWith
         */
        intersectionWith<T2>(values: List<T2>, comparator: Comparator2<T, T2>): Collection<T>;
        /**
         * @see _.intersectionWith
         */
        intersectionWith(...values: Array<List<unknown> | Comparator2<T,  never>>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.intersectionWith
         */
        intersectionWith<T2>(values: List<T2>, comparator: Comparator2<T, T2>): CollectionChain<T>;
        /**
         * @see _.intersectionWith
         */
        intersectionWith(...values: Array<List<unknown> | Comparator2<T,  never>>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.join
         */
        join(array: List<any> | null | undefined, separator?: string): string;
    }
    interface String {
        /**
         * @see _.join
         */
        join(separator?: string): string;
    }
    interface StringChain {
        /**
         * @see _.join
         */
        join(separator?: string): StringChain;
    }
    interface Collection<T> {
        /**
         * @see _.join
         */
        join(separator?: string): string;
    }
    interface CollectionChain<T> {
        /**
         * @see _.join
         */
        join(separator?: string): StringChain;
    }
    interface LoDashStatic {
        /**
         * @see _.last
         */
        last<T>(array: List<T> | null | undefined): T | undefined;
    }
    interface Collection<T> {
        /**
         * @see _.last
         */
        last(): T | undefined;
    }
    interface CollectionChain<T> {
        /**
         * @see _.last
         */
        last(): ExpChain<T>;
    }
    interface String {
        /**
         * @see _.last
         */
        last(): string | undefined;
    }
    interface StringChain {
        /**
         * @see _.last
         */
        last(): StringChain;
    }
    interface LoDashStatic {
        /**
         * @see _.lastIndexOf
         */
        lastIndexOf<T>(array: List<T> | null | undefined, value: T, fromIndex?: true|number): number;
    }
    interface Collection<T> {
        /**
         * @see _.lastIndexOf
         */
        lastIndexOf(value: T, fromIndex?: true|number): number;
    }
    interface CollectionChain<T> {
        /**
         * @see _.lastIndexOf
         */
        lastIndexOf(value: T, fromIndex?: true|number): PrimitiveChain<number>;
    }
    interface LoDashStatic {
        /**
         * @see _.nth
         */
        nth<T>(array: List<T> | null | undefined, n?: number): T | undefined;
    }
    interface Collection<T> {
        /**
         * @see _.nth
         */
        nth(n?: number): T | undefined;
    }
    interface CollectionChain<T> {
        /**
         * @see _.nth
         */
        nth(n?: number): ExpChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.pull
         */
        pull<T>(array: T[], ...values: T[]): T[];
        /**
         * @see _.pull
         */
        pull<T>(array: List<T>, ...values: T[]): List<T>;
    }
    interface Collection<T> {
        /**
         * @see _.pull
         */
        pull(...values: T[]): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.pull
         */
        pull(...values: T[]): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.pullAll
         */
        pullAll<T>(array: T[], values?: List<T>): T[];
        /**
         * @see _.pullAll
         */
        pullAll<T>(array: List<T>, values?: List<T>): List<T>;
    }
    interface Collection<T> {
        /**
         * @see _.pullAll
         */
        pullAll(values?: List<T>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.pullAll
         */
        pullAll(values?: List<T>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.pullAllBy
         */
        pullAllBy<T>(array: T[], values?: List<T>, iteratee?: ValueIteratee<T>): T[];
        /**
         * @see _.pullAllBy
         */
        pullAllBy<T>(array: List<T>, values?: List<T>, iteratee?: ValueIteratee<T>): List<T>;
        /**
         * @see _.pullAllBy
         */
        pullAllBy<T1, T2>(array: T1[], values: List<T2>, iteratee: ValueIteratee<T1 | T2>): T1[];
        /**
         * @see _.pullAllBy
         */
        pullAllBy<T1, T2>(array: List<T1>, values: List<T2>, iteratee: ValueIteratee<T1 | T2>): List<T1>;
    }
    interface Collection<T> {
        /**
         * @see _.pullAllBy
         */
        pullAllBy<T2>(values?: List<T2>, iteratee?: ValueIteratee<T | T2>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.pullAllBy
         */
        pullAllBy<T2>(values?: List<T2>, iteratee?: ValueIteratee<T | T2>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.pullAllWith
         */
        pullAllWith<T>(array: T[], values?: List<T>, comparator?: Comparator<T>): T[];
        /**
         * @see _.pullAllWith
         */
        pullAllWith<T>(array: List<T>, values?: List<T>, comparator?: Comparator<T>): List<T>;
        /**
         * @see _.pullAllWith
         */
        pullAllWith<T1, T2>(array: T1[], values: List<T2>, comparator: Comparator2<T1, T2>): T1[];
        /**
         * @see _.pullAllWith
         */
        pullAllWith<T1, T2>(array: List<T1>, values: List<T2>, comparator: Comparator2<T1, T2>): List<T1>;
    }
    interface Collection<T> {
        /**
         * @see _.pullAllWith
         */
        pullAllWith<T2>(values?: List<T2>, comparator?: Comparator2<T, T2>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.pullAllWith
         */
        pullAllWith<T2>(values?: List<T2>, comparator?: Comparator2<T, T2>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.pullAt
         */
        pullAt<T>(array: T[], ...indexes: Array<Many<number>>): T[];
        /**
         * @see _.pullAt
         */
        pullAt<T>(array: List<T>, ...indexes: Array<Many<number>>): List<T>;
    }
    interface Collection<T> {
        /**
         * @see _.pullAt
         */
        pullAt(...indexes: Array<Many<number>>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.pullAt
         */
        pullAt(...indexes: Array<Many<number>>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.remove
         */
        remove<T>(array: List<T>, predicate?: ListIteratee<T>): T[];
    }
    interface Collection<T> {
        /**
         * @see _.remove
         */
        remove(predicate?: ListIteratee<T>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.remove
         */
        remove(predicate?: ListIteratee<T>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.reverse
         */
        reverse<TList extends List<any>>(array: TList): TList;
    }
    interface LoDashStatic {
        /**
         * @see _.slice
         */
        slice<T>(array: List<T> | null | undefined, start?: number, end?: number): T[];
    }
    interface Collection<T> {
        /**
         * @see _.slice
         */
        slice(start?: number, end?: number): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.slice
         */
        slice(start?: number, end?: number): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.sortedIndex
         */
        sortedIndex<T>(array: List<T> | null | undefined, value: T): number;
    }
    interface Collection<T> {
        /**
         * @see _.sortedIndex
         */
        sortedIndex(value: T): number;
    }
    interface CollectionChain<T> {
        /**
         * @see _.sortedIndex
         */
        sortedIndex(value: T): PrimitiveChain<number>;
    }
    interface LoDashStatic {
        /**
         * @see _.sortedIndex
         */
        sortedIndex<T>(array: List<T> | null | undefined, value: T): number;
    }
    interface Collection<T> {
        /**
         * @see _.sortedIndex
         */
        sortedIndex(value: T): number;
    }
    interface CollectionChain<T> {
        /**
         * @see _.sortedIndex
         */
        sortedIndex(value: T): PrimitiveChain<number>;
    }
    interface LoDashStatic {
        /**
         * @see _.sortedIndexBy
         */
        sortedIndexBy<T>(array: List<T> | null | undefined, value: T, iteratee?: ValueIteratee<T>): number;
    }
    interface Collection<T> {
        /**
         * @see _.sortedIndexBy
         */
        sortedIndexBy(value: T, iteratee?: ValueIteratee<T>): number;
    }
    interface CollectionChain<T> {
        /**
         * @see _.sortedIndexBy
         */
        sortedIndexBy(value: T, iteratee?: ValueIteratee<T>): PrimitiveChain<number>;
    }
    interface LoDashStatic {
        /**
         * @see _.sortedIndexOf
         */
        sortedIndexOf<T>(array: List<T> | null | undefined, value: T): number;
    }
    interface Collection<T> {
        /**
         * @see _.sortedIndexOf
         */
        sortedIndexOf(value: T): number;
    }
    interface CollectionChain<T> {
        /**
         * @see _.sortedIndexOf
         */
        sortedIndexOf(value: T): PrimitiveChain<number>;
    }
    interface LoDashStatic {
        /**
         * @see _.sortedLastIndex
         */
        sortedLastIndex<T>(array: List<T> | null | undefined, value: T): number;
    }
    interface Collection<T> {
        /**
         * @see _.sortedLastIndex
         */
        sortedLastIndex(value: T): number;
    }
    interface CollectionChain<T> {
        /**
         * @see _.sortedLastIndex
         */
        sortedLastIndex(value: T): PrimitiveChain<number>;
    }
    interface LoDashStatic {
        /**
         * @see _.sortedLastIndexBy
         */
        sortedLastIndexBy<T>(array: List<T> | null | undefined, value: T, iteratee: ValueIteratee<T>): number;
    }
    interface Collection<T> {
        /**
         * @see _.sortedLastIndexBy
         */
        sortedLastIndexBy(value: T, iteratee: ValueIteratee<T>): number;
    }
    interface CollectionChain<T> {
        /**
         * @see _.sortedLastIndexBy
         */
        sortedLastIndexBy(value: T, iteratee: ValueIteratee<T>): PrimitiveChain<number>;
    }
    interface LoDashStatic {
        /**
         * @see _.sortedLastIndexOf
         */
        sortedLastIndexOf<T>(array: List<T> | null | undefined, value: T): number;
    }
    interface Collection<T> {
        /**
         * @see _.sortedLastIndexOf
         */
        sortedLastIndexOf(value: T): number;
    }
    interface CollectionChain<T> {
        /**
         * @see _.sortedLastIndexOf
         */
        sortedLastIndexOf(value: T): PrimitiveChain<number>;
    }
    interface LoDashStatic {
        /**
         * @see _.sortedUniq
         */
        sortedUniq<T>(array: List<T> | null | undefined): T[];
    }
    interface Collection<T> {
        /**
         * @see _.sortedUniq
         */
        sortedUniq(): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.sortedUniq
         */
        sortedUniq(): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.sortedUniqBy
         */
        sortedUniqBy<T>(array: List<T> | null | undefined, iteratee: ValueIteratee<T>): T[];
    }
    interface Collection<T> {
        /**
         * @see _.sortedUniqBy
         */
        sortedUniqBy(iteratee: ValueIteratee<T>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.sortedUniqBy
         */
        sortedUniqBy(iteratee: ValueIteratee<T>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.tail
         */
        tail<T>(array: List<T> | null | undefined): T[];
    }
    interface Collection<T> {
        /**
         * @see _.tail
         */
        tail(): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.tail
         */
        tail(): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.take
         */
        take<T>(array: List<T> | null | undefined, n?: number): T[];
    }
    interface Collection<T> {
        /**
         * @see _.take
         */
        take(n?: number): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.take
         */
        take(n?: number): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.takeRight
         */
        takeRight<T>(array: List<T> | null | undefined, n?: number): T[];
    }
    interface Collection<T> {
        /**
         * @see _.takeRight
         */
        takeRight(n?: number): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.takeRight
         */
        takeRight(n?: number): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.takeRightWhile
         */
        takeRightWhile<T>(array: List<T> | null | undefined, predicate?: ListIteratee<T>): T[];
    }
    interface Collection<T> {
        /**
         * @see _.takeRightWhile
         */
        takeRightWhile(predicate?: ListIteratee<T>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.takeRightWhile
         */
        takeRightWhile(predicate?: ListIteratee<T>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.takeWhile
         */
        takeWhile<T>(array: List<T> | null | undefined, predicate?: ListIteratee<T>): T[];
    }
    interface Collection<T> {
        /**
         * @see _.takeWhile
         */
        takeWhile(predicate?: ListIteratee<T>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.takeWhile
         */
        takeWhile(predicate?: ListIteratee<T>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.union
         */
        union<T>(...arrays: Array<List<T> | null | undefined>): T[];
    }
    interface Collection<T> {
        /**
         * @see _.union
         */
        union(...arrays: Array<List<T> | null | undefined>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.union
         */
        union(...arrays: Array<List<T> | null | undefined>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.unionBy
         */
        unionBy<T>(arrays: List<T> | null | undefined, iteratee?: ValueIteratee<T>): T[];
        /**
         * @see _.unionBy
         */
        unionBy<T>(arrays1: List<T> | null | undefined, arrays2: List<T> | null | undefined, iteratee?: ValueIteratee<T>): T[];
        /**
         * @see _.unionBy
         */
        unionBy<T>(arrays1: List<T> | null | undefined, arrays2: List<T> | null | undefined, arrays3: List<T> | null | undefined, iteratee?: ValueIteratee<T>): T[];
        /**
         * @see _.unionBy
         */
        unionBy<T>(arrays1: List<T> | null | undefined, arrays2: List<T> | null | undefined, arrays3: List<T> | null | undefined, arrays4: List<T> | null | undefined, iteratee?: ValueIteratee<T>): T[];
        /**
         * @see _.unionBy
         */
        unionBy<T>(arrays1: List<T> | null | undefined, arrays2: List<T> | null | undefined, arrays3: List<T> | null | undefined, arrays4: List<T> | null | undefined, arrays5: List<T> | null | undefined, ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>): T[];
    }
    interface Collection<T> {
        /**
         * @see _.unionBy
         */
        unionBy(arrays2: List<T> | null | undefined, iteratee?: ValueIteratee<T>): Collection<T>;
        /**
         * @see _.unionBy
         */
        unionBy(...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.unionBy
         */
        unionBy(arrays2: List<T> | null | undefined, iteratee?: ValueIteratee<T>): CollectionChain<T>;
        /**
         * @see _.unionBy
         */
        unionBy(...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.unionWith
         */
        unionWith<T>(arrays: List<T> | null | undefined, comparator?: Comparator<T>): T[];
        /**
         * @see _.unionWith
         */
        unionWith<T>(arrays: List<T> | null | undefined, arrays2: List<T> | null | undefined, comparator?: Comparator<T>): T[];
        /**
         * @see _.unionWith
         */
        unionWith<T>(arrays: List<T> | null | undefined, arrays2: List<T> | null | undefined, arrays3: List<T> | null | undefined, ...comparator: Array<Comparator<T> | List<T> | null | undefined>): T[];
    }
    interface Collection<T> {
        /**
         * @see _.unionWith
         */
        unionWith(arrays2: List<T> | null | undefined, comparator?: Comparator<T>): Collection<T>;
        /**
         * @see _.unionWith
         */
        unionWith(...comparator: Array<Comparator<T> | List<T> | null | undefined>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.unionWith
         */
        unionWith(arrays2: List<T> | null | undefined, comparator?: Comparator<T>): CollectionChain<T>;
        /**
         * @see _.unionWith
         */
        unionWith(...comparator: Array<Comparator<T> | List<T> | null | undefined>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.uniq
         */
        uniq<T>(array: List<T> | null | undefined): T[];
    }
    interface Collection<T> {
        /**
         * @see _.uniq
         */
        uniq(): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.uniq
         */
        uniq(): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.uniqBy
         */
        uniqBy<T>(array: List<T> | null | undefined, iteratee: ValueIteratee<T>): T[];
    }
    interface Collection<T> {
        /**
         * @see _.uniqBy
         */
        uniqBy(iteratee: ValueIteratee<T>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.uniqBy
         */
        uniqBy(iteratee: ValueIteratee<T>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.uniqWith
         */
        uniqWith<T>(array: List<T> | null | undefined, comparator?: Comparator<T>): T[];
    }
    interface Collection<T> {
        /**
         * @see _.uniqWith
         */
        uniqWith(comparator?: Comparator<T>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.uniqWith
         */
        uniqWith(comparator?: Comparator<T>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.unzip
         */
        unzip<T>(array: T[][] | List<List<T>> | null | undefined): T[][];
    }
    interface Collection<T> {
        /**
         * @see _.unzip
         */
        unzip(): T extends List<infer U> ? Collection<U[]> : unknown;
    }
    interface CollectionChain<T> {
        /**
         * @see _.unzip
         */
        unzip(): T extends List<infer U> ? CollectionChain<U[]> : unknown;
    }
    interface LoDashStatic {
        /**
         * @see _.unzipWith
         */
        unzipWith<T, TResult>(array: List<List<T>> | null | undefined, iteratee: (...values: T[]) => TResult): TResult[];
        /**
         * @see _.unzipWith
         */
        unzipWith<T>(array: List<List<T>> | null | undefined): T[][];
    }
    interface Collection<T> {
        /**
         * @see _.unzipWith
         */
        unzipWith<TResult>(iteratee: (...values: Array<T extends List<infer U> ? U : unknown>) => TResult): Collection<TResult>;
        /**
         * @see _.unzipWith
         */
        unzipWith(): T extends List<infer U> ? Collection<U[]> : unknown;
    }
    interface CollectionChain<T> {
        /**
         * @see _.unzipWith
         */
        unzipWith<TResult>(iteratee: (...values: Array<T extends List<infer U> ? U : unknown>) => TResult): CollectionChain<TResult>;
        /**
         * @see _.unzipWith
         */
        unzipWith(): T extends List<infer U> ? CollectionChain<U[]> : unknown;
    }
    interface LoDashStatic {
        /**
         * @see _.without
         */
        without<T>(array: List<T> | null | undefined, ...values: T[]): T[];
    }
    interface Collection<T> {
        /**
         * @see _.without
         */
        without(...values: T[]): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.without
         */
        without(...values: T[]): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.xor
         */
        xor<T>(...arrays: Array<List<T> | null | undefined>): T[];
    }
    interface Collection<T> {
        /**
         * @see _.xor
         */
        xor(...arrays: Array<List<T> | null | undefined>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.xor
         */
        xor(...arrays: Array<List<T> | null | undefined>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.xorBy
         */
        xorBy<T>(arrays: List<T> | null | undefined, iteratee?: ValueIteratee<T>): T[];
        /**
         * @see _.xorBy
         */
        xorBy<T>(arrays: List<T> | null | undefined, arrays2: List<T> | null | undefined, iteratee?: ValueIteratee<T>): T[];
        /**
         * @see _.xorBy
         */
        xorBy<T>(arrays: List<T> | null | undefined, arrays2: List<T> | null | undefined, arrays3: List<T> | null | undefined, ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>): T[];
    }
    interface Collection<T> {
        /**
         * @see _.xorBy
         */
        xorBy(arrays2: List<T> | null | undefined, iteratee?: ValueIteratee<T>): Collection<T>;
        /**
         * @see _.xorBy
         */
        xorBy(...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.xorBy
         */
        xorBy(arrays2: List<T> | null | undefined, iteratee?: ValueIteratee<T>): CollectionChain<T>;
        /**
         * @see _.xorBy
         */
        xorBy(...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.xorWith
         */
        xorWith<T>(arrays: List<T> | null | undefined, comparator?: Comparator<T>): T[];
        /**
         * @see _.xorWith
         */
        xorWith<T>(arrays: List<T> | null | undefined, arrays2: List<T> | null | undefined, comparator?: Comparator<T>): T[];
        /**
         * @see _.xorWith
         */
        xorWith<T>(arrays: List<T> | null | undefined, arrays2: List<T> | null | undefined, arrays3: List<T> | null | undefined, ...comparator: Array<Comparator<T> | List<T> | null | undefined>): T[];
    }
    interface Collection<T> {
        /**
         * @see _.xorWith
         */
        xorWith(arrays2: List<T> | null | undefined, comparator?: Comparator<T>): Collection<T>;
        /**
         * @see _.xorWith
         */
        xorWith(...comparator: Array<Comparator<T> | List<T> | null | undefined>): Collection<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.xorWith
         */
        xorWith(arrays2: List<T> | null | undefined, comparator?: Comparator<T>): CollectionChain<T>;
        /**
         * @see _.xorWith
         */
        xorWith(...comparator: Array<Comparator<T> | List<T> | null | undefined>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.zip
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
    interface Collection<T> {
        /**
         * @see _.zip
         */
        zip<T2>(arrays2: List<T2>): Collection<[T | undefined, T2 | undefined]>;
        /**
         * @see _.zip
         */
        zip(...arrays: Array<List<T> | null | undefined>): Collection<Array<T | undefined>>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.zip
         */
        zip<T2>(arrays2: List<T2>): CollectionChain<[T | undefined, T2 | undefined]>;
        /**
         * @see _.zip
         */
        zip(...arrays: Array<List<T> | null | undefined>): CollectionChain<Array<T | undefined>>;
    }
    interface LoDashStatic {
        /**
         * @see _.zipObject
         */
        zipObject<T>(props: List<PropertyName>, values: List<T>): Dictionary<T>;
        /**
         * @see _.zipObject
         */
        zipObject(props?: List<PropertyName>): Dictionary<undefined>;
    }
    interface Collection<T> {
        /**
         * @see _.zipObject
         */
        zipObject<U>(values: List<U>): Object<Dictionary<U>>;
        /**
         * @see _.zipObject
         */
        zipObject(): Object<Dictionary<undefined>>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.zipObject
         */
        zipObject<U>(values: List<U>): ObjectChain<Dictionary<U>>;
        /**
         * @see _.zipObject
         */
        zipObject(): ObjectChain<Dictionary<undefined>>;
    }
    interface LoDashStatic {
        /**
         * @see _.zipObjectDeep
         */
        zipObjectDeep(paths?: List<PropertyPath>, values?: List<any>): object;
    }
    interface Collection<T> {
        /**
         * @see _.zipObjectDeep
         */
        zipObjectDeep(values?: List<any>): Object<object>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.zipObjectDeep
         */
        zipObjectDeep(values?: List<any>): ObjectChain<object>;
    }
    interface LoDashStatic {
        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(arrays: List<T>, iteratee: (value1: T) => TResult): TResult[];
        /**
         * @see _.zipWith
         */
        zipWith<T1, T2, TResult>(arrays1: List<T1>, arrays2: List<T2>, iteratee: (value1: T1, value2: T2) => TResult): TResult[];
        /**
         * @see _.zipWith
         */
        zipWith<T1, T2, T3, TResult>(arrays1: List<T1>, arrays2: List<T2>, arrays3: List<T3>, iteratee: (value1: T1, value2: T2, value3: T3) => TResult): TResult[];
        /**
         * @see _.zipWith
         */
        zipWith<T1, T2, T3, T4, TResult>(arrays1: List<T1>, arrays2: List<T2>, arrays3: List<T3>, arrays4: List<T4>, iteratee: (value1: T1, value2: T2, value3: T3, value4: T4) => TResult): TResult[];
        /**
         * @see _.zipWith
         */
        zipWith<T1, T2, T3, T4, T5, TResult>(arrays1: List<T1>, arrays2: List<T2>, arrays3: List<T3>, arrays4: List<T4>, arrays5: List<T5>, iteratee: (value1: T1, value2: T2, value3: T3, value4: T4, value5: T5) => TResult): TResult[];
        /**
         * @see _.zipWith
         */
        zipWith<T, TResult>(...iteratee: Array<((...group: T[]) => TResult) | List<T> | null | undefined>): TResult[];
    }
    interface Collection<T> {
        /**
         * @see _.zipWith
         */
        zipWith<T2, TResult>(arrays2: List<T2>, iteratee: (value1: T, value2: T2) => TResult): Collection<TResult>;
        /**
         * @see _.zipWith
         */
        zipWith<T2, T3, TResult>(arrays2: List<T2>, arrays3: List<T3>, iteratee: (value1: T, value2: T2, value3: T3) => TResult): Collection<TResult>;
        /**
         * @see _.zipWith
         */
        zipWith<TResult>(...iteratee: Array<((...group: T[]) => TResult) | List<T> | null | undefined>): Collection<TResult>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.zipWith
         */
        zipWith<T2, TResult>(arrays2: List<T2>, iteratee: (value1: T, value2: T2) => TResult): CollectionChain<TResult>;
        /**
         * @see _.zipWith
         */
        zipWith<T2, T3, TResult>(arrays2: List<T2>, arrays3: List<T3>, iteratee: (value1: T, value2: T2, value3: T3) => TResult): CollectionChain<TResult>;
        /**
         * @see _.zipWith
         */
        zipWith<TResult>(...iteratee: Array<((...group: T[]) => TResult) | List<T> | null | undefined>): CollectionChain<TResult>;
    }
}
