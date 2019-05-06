import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        chunk<T>(array: List<T> | null | undefined, size?: number): T[][];
    }
    interface Collection<T> {
        chunk(size?: number): Collection<T[]>;
    }
    interface CollectionChain<T> {
        chunk(size?: number): CollectionChain<T[]>;
    }
    interface LoDashStatic {
        compact<T>(array: List<T | null | undefined | false | "" | 0> | null | undefined): T[];
    }

    type Truthy<T> = T extends null | undefined | false | "" | 0 ? never : T;
    interface Collection<T> {
        compact(): Collection<Truthy<T>>;
    }
    interface CollectionChain<T> {
        compact(): CollectionChain<Truthy<T>>;
    }
    interface LoDashStatic {
         concat<T>(array: Many<T>, ...values: Array<Many<T>>): T[];
    }
    interface Primitive<T> {
        concat(...values: Array<Many<T>>): Collection<T>;
    }
    interface Collection<T> {
        concat(...values: Array<Many<T>>): Collection<T>;
    }
    interface Object<T> {
        concat(...values: Array<Many<T>>): Collection<T>;
    }
    interface PrimitiveChain<T> {
        concat(...values: Array<Many<T>>): CollectionChain<T>;
    }
    interface CollectionChain<T> {
        concat(...values: Array<Many<T>>): CollectionChain<T>;
    }
    interface ObjectChain<T> {
        concat(...values: Array<Many<T>>): CollectionChain<T>;
    }
    interface LoDashStatic {
        difference<T>(array: List<T> | null | undefined, ...values: Array<List<T>>): T[];
    }
    interface Collection<T> {
        difference(...values: Array<List<T>>): Collection<T>;
    }
    interface CollectionChain<T> {
        difference(...values: Array<List<T>>): CollectionChain<T>;
    }
    interface LoDashStatic {
        differenceBy<T1, T2>(array: List<T1> | null | undefined, values: List<T2>, iteratee: ValueIteratee<T1 | T2>): T1[];
        differenceBy<T1, T2, T3>(array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, iteratee: ValueIteratee<T1 | T2 | T3>): T1[];
        differenceBy<T1, T2, T3, T4>(array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, values3: List<T4>, iteratee: ValueIteratee<T1 | T2 | T3 | T4>): T1[];
        differenceBy<T1, T2, T3, T4, T5>(array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, values3: List<T4>, values4: List<T5>, iteratee: ValueIteratee<T1 | T2 | T3 | T4 | T5>): T1[];
        differenceBy<T1, T2, T3, T4, T5, T6>(array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, values3: List<T4>, values4: List<T5>, values5: List<T6>, iteratee: ValueIteratee<T1 | T2 | T3 | T4 | T5 | T6>): T1[];
        differenceBy<T1, T2, T3, T4, T5, T6, T7>(array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, values3: List<T4>, values4: List<T5>, values5: List<T6>, ...values: Array<List<T7> | ValueIteratee<T1 | T2 | T3 | T4 | T5 | T6 | T7>>): T1[];
        differenceBy<T>(array: List<T> | null | undefined, ...values: Array<List<T>>): T[];
    }
    interface Collection<T> {
        differenceBy<T2>(values1: List<T2>, iteratee?: ValueIteratee<T | T2>): Collection<T>;
        differenceBy(...values: Array<List<unknown> | ValueIteratee<T>>): Collection<T>;
    }
    interface CollectionChain<T> {
        differenceBy<T2>(values1: List<T2>, iteratee?: ValueIteratee<T | T2>): CollectionChain<T>;
        differenceBy(...values: Array<List<unknown> | ValueIteratee<T>>): CollectionChain<T>;
    }
    interface LoDashStatic {
        differenceWith<T1, T2>(array: List<T1> | null | undefined, values: List<T2>, comparator: Comparator2<T1, T2>): T1[];
        differenceWith<T1, T2, T3>(array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, comparator: Comparator2<T1, T2 | T3>): T1[];
        differenceWith<T1, T2, T3, T4>(array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, ...values: Array<List<T4> | Comparator2<T1, T2 | T3 | T4>>): T1[];
        differenceWith<T>(array: List<T> | null | undefined, ...values: Array<List<T>>): T[];
    }
    interface Collection<T> {
        differenceWith<T2>(values: List<T2>, comparator: Comparator2<T, T2>): Collection<T>;
        differenceWith<T2, T3, T4>(...values: Array<List<unknown> | Comparator2<T, never>>): Collection<T>;
    }
    interface CollectionChain<T> {
        differenceWith< T2>(values: List<T2>, comparator: Comparator2<T, T2>): CollectionChain<T>;
        differenceWith< T2, T3, T4>(...values: Array<List<unknown> | Comparator2<T, never>>): CollectionChain<T>;
    }
    interface LoDashStatic {
        drop<T>(array: List<T> | null | undefined, n?: number): T[];
    }
    interface Collection<T> {
        drop(n?: number): Collection<T>;
    }
    interface CollectionChain<T> {
        drop(n?: number): CollectionChain<T>;
    }
    interface LoDashStatic {
        dropRight<T>(array: List<T> | null | undefined, n?: number): T[];
    }
    interface Collection<T> {
        dropRight(n?: number): Collection<T>;
    }
    interface CollectionChain<T> {
        dropRight(n?: number): CollectionChain<T>;
    }
    interface LoDashStatic {
        dropRightWhile<T>(array: List<T> | null | undefined, predicate?: ListIteratee<T>): T[];
    }
    interface Collection<T> {
        dropRightWhile(predicate?: ListIteratee<T>): Collection<T>;
    }
    interface CollectionChain<T> {
        dropRightWhile(predicate?: ListIteratee<T>): CollectionChain<T>;
    }
    interface LoDashStatic {
        dropWhile<T>(array: List<T> | null | undefined, predicate?: ListIteratee<T>): T[];
    }
    interface Collection<T> {
        dropWhile(predicate?: ListIteratee<T>): Collection<T>;
    }
    interface CollectionChain<T> {
        dropWhile(predicate?: ListIteratee<T>): CollectionChain<T>;
    }
    interface LoDashStatic {
        fill<T>(array: any[] | null | undefined, value: T): T[];
        fill<T>(array: List<any> | null | undefined, value: T): List<T>;
        fill<T, U>(array: U[] | null | undefined, value: T, start?: number, end?: number): Array<T | U>;
        fill<T, U>(array: List<U> | null | undefined, value: T, start?: number, end?: number): List<T | U>;
    }
    interface Collection<T> {
        fill<U>(value: U, start?: number, end?: number): Collection<T | U>;
    }
    interface CollectionChain<T> {
        fill<U>(value: U, start?: number, end?: number): CollectionChain<T | U>;
    }
    interface LoDashStatic {
        findIndex<T>(array: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): number;
    }
    interface Collection<T> {
        findIndex(predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): number;
    }
    interface CollectionChain<T> {
        findIndex(predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): PrimitiveChain<number>;
    }
    interface LoDashStatic {
        findLastIndex<T>(array: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): number;
    }
    interface Collection<T> {
        findLastIndex(predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): number;
    }
    interface CollectionChain<T> {
        findLastIndex(predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): PrimitiveChain<number>;
    }
    interface LoDashStatic {
        first: LoDashStatic["head"];
    }
    interface String {
        first(): string | undefined;
    }
    interface StringChain {
        first(): StringChain;
    }
    interface Collection<T> {
        first(): T | undefined;
    }
    interface CollectionChain<T> {
        first(): ExpChain<T>;
    }
    interface RecursiveArray<T> extends Array<T|RecursiveArray<T>> {}
    interface ListOfRecursiveArraysOrValues<T> extends List<T|RecursiveArray<T>> {}
    interface LoDashStatic {
        flatten<T>(array: List<Many<T>> | null | undefined): T[];
    }
    interface String {
        flatten(): Collection<string>;
    }
    interface StringChain {
        flatten(): CollectionChain<string>;
    }
    interface Collection<T> {
        flatten(): T extends Many<infer U> ? Collection<U> : Collection<T>;
    }
    interface CollectionChain<T> {
        flatten(): T extends Many<infer U> ? CollectionChain<U> : CollectionChain<T>;
    }
    interface LoDashStatic {
        flattenDeep<T>(array: ListOfRecursiveArraysOrValues<T> | null | undefined): T[];
    }
    interface Collection<T> {
        flattenDeep(): Collection<T>;
    }
    interface CollectionChain<T> {
        flattenDeep(): CollectionChain<T>;
    }
    interface LoDashStatic {
        flattenDepth<T>(array: ListOfRecursiveArraysOrValues<T> | null | undefined, depth?: number): T[];
    }
    interface Collection<T> {
        flattenDepth(depth?: number): Collection<T>;
    }
    interface CollectionChain<T> {
        flattenDepth(depth?: number): CollectionChain<T>;
    }
    interface LoDashStatic {
        fromPairs<T>(pairs: List<[PropertyName, T]> | null | undefined): Dictionary<T>;
        fromPairs(pairs: List<any[]> | null | undefined): Dictionary<any>;
    }
    interface Collection<T> {
        fromPairs(): Object<Dictionary<T extends [PropertyName, infer U] ? U : any>>;
    }
    interface CollectionChain<T> {
        fromPairs(): ObjectChain<Dictionary<T extends [PropertyName, infer U] ? U : any>>;
    }
    interface LoDashStatic {
        head<T>(array: List<T> | null | undefined): T | undefined;
    }
    interface String {
        head(): string | undefined;
    }
    interface StringChain {
        head(): StringChain;
    }
    interface Collection<T> {
        head(): T | undefined;
    }
    interface CollectionChain<T> {
        head(): ExpChain<T>;
    }
    interface LoDashStatic {
        indexOf<T>(array: List<T> | null | undefined, value: T, fromIndex?: number): number;
    }
    interface Collection<T> {
        indexOf(value: T, fromIndex?: number): number;
    }
    interface CollectionChain<T> {
        indexOf(value: T, fromIndex?: number): PrimitiveChain<number>;
    }
    interface LoDashStatic {
        initial<T>(array: List<T> | null | undefined): T[];
    }
    interface Collection<T> {
        initial(): Collection<T>;
    }
    interface CollectionChain<T> {
        initial(): CollectionChain<T>;
    }
    interface LoDashStatic {
        intersection<T>(...arrays: Array<List<T>>): T[];
    }
    interface Collection<T> {
        intersection(...arrays: Array<List<T>>): Collection<T>;
    }
    interface CollectionChain<T> {
        intersection(...arrays: Array<List<T>>): CollectionChain<T>;
    }
    interface LoDashStatic {
        intersectionBy<T1, T2>(array: List<T1> | null, values: List<T2>, iteratee: ValueIteratee<T1 | T2>): T1[];
        intersectionBy<T1, T2, T3>(array: List<T1> | null, values1: List<T2>, values2: List<T3>, iteratee: ValueIteratee<T1 | T2 | T3>): T1[];
        intersectionBy<T1, T2, T3, T4>(array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, ...values: Array<List<T4> | ValueIteratee<T1 | T2 | T3 | T4>>): T1[];
        intersectionBy<T>(array?: List<T> | null, ...values: Array<List<T>>): T[];
    }
    interface Collection<T> {
        intersectionBy<T2>(values: List<T2>, iteratee: ValueIteratee<T | T2>): Collection<T>;
        intersectionBy(...values: Array<List<unknown> | ValueIteratee<T>>): Collection<T>;
    }
    interface CollectionChain<T> {
        intersectionBy<T2>(values: List<T2>, iteratee: ValueIteratee<T | T2>): CollectionChain<T>;
        intersectionBy(...values: Array<List<unknown> | ValueIteratee<T>>): CollectionChain<T>;
    }
    interface LoDashStatic {
        intersectionWith<T1, T2>(array: List<T1> | null | undefined, values: List<T2>, comparator: Comparator2<T1, T2>): T1[];
        intersectionWith<T1, T2, T3>(array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, comparator: Comparator2<T1, T2 | T3>): T1[];
        intersectionWith<T1, T2, T3, T4>(array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, ...values: Array<List<T4> | Comparator2<T1, T2 | T3 | T4>>): T1[];
        intersectionWith<T>(array?: List<T> | null, ...values: Array<List<T>>): T[];
    }
    interface Collection<T> {
        intersectionWith<T2>(values: List<T2>, comparator: Comparator2<T, T2>): Collection<T>;
        intersectionWith(...values: Array<List<unknown> | Comparator2<T,  never>>): Collection<T>;
    }
    interface CollectionChain<T> {
        intersectionWith<T2>(values: List<T2>, comparator: Comparator2<T, T2>): CollectionChain<T>;
        intersectionWith(...values: Array<List<unknown> | Comparator2<T,  never>>): CollectionChain<T>;
    }
    interface LoDashStatic {
        join(array: List<any> | null | undefined, separator?: string): string;
    }
    interface String {
        join(separator?: string): string;
    }
    interface StringChain {
        join(separator?: string): StringChain;
    }
    interface Collection<T> {
        join(separator?: string): string;
    }
    interface CollectionChain<T> {
        join(separator?: string): StringChain;
    }
    interface LoDashStatic {
        last<T>(array: List<T> | null | undefined): T | undefined;
    }
    interface Collection<T> {
        last(): T | undefined;
    }
    interface CollectionChain<T> {
        last(): ExpChain<T>;
    }
    interface String {
        last(): string | undefined;
    }
    interface StringChain {
        last(): StringChain;
    }
    interface LoDashStatic {
        lastIndexOf<T>(array: List<T> | null | undefined, value: T, fromIndex?: true|number): number;
    }
    interface Collection<T> {
        lastIndexOf(value: T, fromIndex?: true|number): number;
    }
    interface CollectionChain<T> {
        lastIndexOf(value: T, fromIndex?: true|number): PrimitiveChain<number>;
    }
    interface LoDashStatic {
        nth<T>(array: List<T> | null | undefined, n?: number): T | undefined;
    }
    interface Collection<T> {
        nth(n?: number): T | undefined;
    }
    interface CollectionChain<T> {
        nth(n?: number): ExpChain<T>;
    }
    interface LoDashStatic {
        pull<T>(array: T[], ...values: T[]): T[];
        pull<T>(array: List<T>, ...values: T[]): List<T>;
    }
    interface Collection<T> {
        pull(...values: T[]): Collection<T>;
    }
    interface CollectionChain<T> {
        pull(...values: T[]): CollectionChain<T>;
    }
    interface LoDashStatic {
        pullAll<T>(array: T[], values?: List<T>): T[];
        pullAll<T>(array: List<T>, values?: List<T>): List<T>;
    }
    interface Collection<T> {
        pullAll(values?: List<T>): Collection<T>;
    }
    interface CollectionChain<T> {
        pullAll(values?: List<T>): CollectionChain<T>;
    }
    interface LoDashStatic {
        pullAllBy<T>(array: T[], values?: List<T>, iteratee?: ValueIteratee<T>): T[];
        pullAllBy<T>(array: List<T>, values?: List<T>, iteratee?: ValueIteratee<T>): List<T>;
        pullAllBy<T1, T2>(array: T1[], values: List<T2>, iteratee: ValueIteratee<T1 | T2>): T1[];
        pullAllBy<T1, T2>(array: List<T1>, values: List<T2>, iteratee: ValueIteratee<T1 | T2>): List<T1>;
    }
    interface Collection<T> {
        pullAllBy<T2>(values?: List<T2>, iteratee?: ValueIteratee<T | T2>): Collection<T>;
    }
    interface CollectionChain<T> {
        pullAllBy<T2>(values?: List<T2>, iteratee?: ValueIteratee<T | T2>): CollectionChain<T>;
    }
    interface LoDashStatic {
        pullAllWith<T>(array: T[], values?: List<T>, comparator?: Comparator<T>): T[];
        pullAllWith<T>(array: List<T>, values?: List<T>, comparator?: Comparator<T>): List<T>;
        pullAllWith<T1, T2>(array: T1[], values: List<T2>, comparator: Comparator2<T1, T2>): T1[];
        pullAllWith<T1, T2>(array: List<T1>, values: List<T2>, comparator: Comparator2<T1, T2>): List<T1>;
    }
    interface Collection<T> {
        pullAllWith<T2>(values?: List<T2>, comparator?: Comparator2<T, T2>): Collection<T>;
    }
    interface CollectionChain<T> {
        pullAllWith<T2>(values?: List<T2>, comparator?: Comparator2<T, T2>): CollectionChain<T>;
    }
    interface LoDashStatic {
        pullAt<T>(array: T[], ...indexes: Array<Many<number>>): T[];
        pullAt<T>(array: List<T>, ...indexes: Array<Many<number>>): List<T>;
    }
    interface Collection<T> {
        pullAt(...indexes: Array<Many<number>>): Collection<T>;
    }
    interface CollectionChain<T> {
        pullAt(...indexes: Array<Many<number>>): CollectionChain<T>;
    }
    interface LoDashStatic {
        remove<T>(array: List<T>, predicate?: ListIteratee<T>): T[];
    }
    interface Collection<T> {
        remove(predicate?: ListIteratee<T>): Collection<T>;
    }
    interface CollectionChain<T> {
        remove(predicate?: ListIteratee<T>): CollectionChain<T>;
    }
    interface LoDashStatic {
        reverse<TList extends List<any>>(array: TList): TList;
    }
    interface LoDashStatic {
        slice<T>(array: List<T> | null | undefined, start?: number, end?: number): T[];
    }
    interface Collection<T> {
        slice(start?: number, end?: number): Collection<T>;
    }
    interface CollectionChain<T> {
        slice(start?: number, end?: number): CollectionChain<T>;
    }
    interface LoDashStatic {
        sortedIndex<T>(array: List<T> | null | undefined, value: T): number;
    }
    interface Collection<T> {
        sortedIndex(value: T): number;
    }
    interface CollectionChain<T> {
        sortedIndex(value: T): PrimitiveChain<number>;
    }
    interface LoDashStatic {
        sortedIndex<T>(array: List<T> | null | undefined, value: T): number;
    }
    interface Collection<T> {
        sortedIndex(value: T): number;
    }
    interface CollectionChain<T> {
        sortedIndex(value: T): PrimitiveChain<number>;
    }
    interface LoDashStatic {
        sortedIndexBy<T>(array: List<T> | null | undefined, value: T, iteratee?: ValueIteratee<T>): number;
    }
    interface Collection<T> {
        sortedIndexBy(value: T, iteratee?: ValueIteratee<T>): number;
    }
    interface CollectionChain<T> {
        sortedIndexBy(value: T, iteratee?: ValueIteratee<T>): PrimitiveChain<number>;
    }
    interface LoDashStatic {
        sortedIndexOf<T>(array: List<T> | null | undefined, value: T): number;
    }
    interface Collection<T> {
        sortedIndexOf(value: T): number;
    }
    interface CollectionChain<T> {
        sortedIndexOf(value: T): PrimitiveChain<number>;
    }
    interface LoDashStatic {
        sortedLastIndex<T>(array: List<T> | null | undefined, value: T): number;
    }
    interface Collection<T> {
        sortedLastIndex(value: T): number;
    }
    interface CollectionChain<T> {
        sortedLastIndex(value: T): PrimitiveChain<number>;
    }
    interface LoDashStatic {
        sortedLastIndexBy<T>(array: List<T> | null | undefined, value: T, iteratee: ValueIteratee<T>): number;
    }
    interface Collection<T> {
        sortedLastIndexBy(value: T, iteratee: ValueIteratee<T>): number;
    }
    interface CollectionChain<T> {
        sortedLastIndexBy(value: T, iteratee: ValueIteratee<T>): PrimitiveChain<number>;
    }
    interface LoDashStatic {
        sortedLastIndexOf<T>(array: List<T> | null | undefined, value: T): number;
    }
    interface Collection<T> {
        sortedLastIndexOf(value: T): number;
    }
    interface CollectionChain<T> {
        sortedLastIndexOf(value: T): PrimitiveChain<number>;
    }
    interface LoDashStatic {
        sortedUniq<T>(array: List<T> | null | undefined): T[];
    }
    interface Collection<T> {
        sortedUniq(): Collection<T>;
    }
    interface CollectionChain<T> {
        sortedUniq(): CollectionChain<T>;
    }
    interface LoDashStatic {
        sortedUniqBy<T>(array: List<T> | null | undefined, iteratee: ValueIteratee<T>): T[];
    }
    interface Collection<T> {
        sortedUniqBy(iteratee: ValueIteratee<T>): Collection<T>;
    }
    interface CollectionChain<T> {
        sortedUniqBy(iteratee: ValueIteratee<T>): CollectionChain<T>;
    }
    interface LoDashStatic {
        tail<T>(array: List<T> | null | undefined): T[];
    }
    interface Collection<T> {
        tail(): Collection<T>;
    }
    interface CollectionChain<T> {
        tail(): CollectionChain<T>;
    }
    interface LoDashStatic {
        take<T>(array: List<T> | null | undefined, n?: number): T[];
    }
    interface Collection<T> {
        take(n?: number): Collection<T>;
    }
    interface CollectionChain<T> {
        take(n?: number): CollectionChain<T>;
    }
    interface LoDashStatic {
        takeRight<T>(array: List<T> | null | undefined, n?: number): T[];
    }
    interface Collection<T> {
        takeRight(n?: number): Collection<T>;
    }
    interface CollectionChain<T> {
        takeRight(n?: number): CollectionChain<T>;
    }
    interface LoDashStatic {
        takeRightWhile<T>(array: List<T> | null | undefined, predicate?: ListIteratee<T>): T[];
    }
    interface Collection<T> {
        takeRightWhile(predicate?: ListIteratee<T>): Collection<T>;
    }
    interface CollectionChain<T> {
        takeRightWhile(predicate?: ListIteratee<T>): CollectionChain<T>;
    }
    interface LoDashStatic {
        takeWhile<T>(array: List<T> | null | undefined, predicate?: ListIteratee<T>): T[];
    }
    interface Collection<T> {
        takeWhile(predicate?: ListIteratee<T>): Collection<T>;
    }
    interface CollectionChain<T> {
        takeWhile(predicate?: ListIteratee<T>): CollectionChain<T>;
    }
    interface LoDashStatic {
        union<T>(...arrays: Array<List<T> | null | undefined>): T[];
    }
    interface Collection<T> {
        union(...arrays: Array<List<T> | null | undefined>): Collection<T>;
    }
    interface CollectionChain<T> {
        union(...arrays: Array<List<T> | null | undefined>): CollectionChain<T>;
    }
    interface LoDashStatic {
        unionBy<T>(arrays: List<T> | null | undefined, iteratee?: ValueIteratee<T>): T[];
        unionBy<T>(arrays1: List<T> | null | undefined, arrays2: List<T> | null | undefined, iteratee?: ValueIteratee<T>): T[];
        unionBy<T>(arrays1: List<T> | null | undefined, arrays2: List<T> | null | undefined, arrays3: List<T> | null | undefined, iteratee?: ValueIteratee<T>): T[];
        unionBy<T>(arrays1: List<T> | null | undefined, arrays2: List<T> | null | undefined, arrays3: List<T> | null | undefined, arrays4: List<T> | null | undefined, iteratee?: ValueIteratee<T>): T[];
        unionBy<T>(arrays1: List<T> | null | undefined, arrays2: List<T> | null | undefined, arrays3: List<T> | null | undefined, arrays4: List<T> | null | undefined, arrays5: List<T> | null | undefined, ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>): T[];
    }
    interface Collection<T> {
        unionBy(arrays2: List<T> | null | undefined, iteratee?: ValueIteratee<T>): Collection<T>;
        unionBy(...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>): Collection<T>;
    }
    interface CollectionChain<T> {
        unionBy(arrays2: List<T> | null | undefined, iteratee?: ValueIteratee<T>): CollectionChain<T>;
        unionBy(...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>): CollectionChain<T>;
    }
    interface LoDashStatic {
        unionWith<T>(arrays: List<T> | null | undefined, comparator?: Comparator<T>): T[];
        unionWith<T>(arrays: List<T> | null | undefined, arrays2: List<T> | null | undefined, comparator?: Comparator<T>): T[];
        unionWith<T>(arrays: List<T> | null | undefined, arrays2: List<T> | null | undefined, arrays3: List<T> | null | undefined, ...comparator: Array<Comparator<T> | List<T> | null | undefined>): T[];
    }
    interface Collection<T> {
        unionWith(arrays2: List<T> | null | undefined, comparator?: Comparator<T>): Collection<T>;
        unionWith(...comparator: Array<Comparator<T> | List<T> | null | undefined>): Collection<T>;
    }
    interface CollectionChain<T> {
        unionWith(arrays2: List<T> | null | undefined, comparator?: Comparator<T>): CollectionChain<T>;
        unionWith(...comparator: Array<Comparator<T> | List<T> | null | undefined>): CollectionChain<T>;
    }
    interface LoDashStatic {
        uniq<T>(array: List<T> | null | undefined): T[];
    }
    interface Collection<T> {
        uniq(): Collection<T>;
    }
    interface CollectionChain<T> {
        uniq(): CollectionChain<T>;
    }
    interface LoDashStatic {
        uniqBy<T>(array: List<T> | null | undefined, iteratee: ValueIteratee<T>): T[];
    }
    interface Collection<T> {
        uniqBy(iteratee: ValueIteratee<T>): Collection<T>;
    }
    interface CollectionChain<T> {
        uniqBy(iteratee: ValueIteratee<T>): CollectionChain<T>;
    }
    interface LoDashStatic {
        uniqWith<T>(array: List<T> | null | undefined, comparator?: Comparator<T>): T[];
    }
    interface Collection<T> {
        uniqWith(comparator?: Comparator<T>): Collection<T>;
    }
    interface CollectionChain<T> {
        uniqWith(comparator?: Comparator<T>): CollectionChain<T>;
    }
    interface LoDashStatic {
        unzip<T>(array: T[][] | List<List<T>> | null | undefined): T[][];
    }
    interface Collection<T> {
        unzip(): T extends List<infer U> ? Collection<U[]> : unknown;
    }
    interface CollectionChain<T> {
        unzip(): T extends List<infer U> ? CollectionChain<U[]> : unknown;
    }
    interface LoDashStatic {
        unzipWith<T, TResult>(array: List<List<T>> | null | undefined, iteratee: (...values: T[]) => TResult): TResult[];
        unzipWith<T>(array: List<List<T>> | null | undefined): T[][];
    }
    interface Collection<T> {
        unzipWith<TResult>(iteratee: (...values: Array<T extends List<infer U> ? U : unknown>) => TResult): Collection<TResult>;
        unzipWith(): T extends List<infer U> ? Collection<U[]> : unknown;
    }
    interface CollectionChain<T> {
        unzipWith<TResult>(iteratee: (...values: Array<T extends List<infer U> ? U : unknown>) => TResult): CollectionChain<TResult>;
        unzipWith(): T extends List<infer U> ? CollectionChain<U[]> : unknown;
    }
    interface LoDashStatic {
        without<T>(array: List<T> | null | undefined, ...values: T[]): T[];
    }
    interface Collection<T> {
        without(...values: T[]): Collection<T>;
    }
    interface CollectionChain<T> {
        without(...values: T[]): CollectionChain<T>;
    }
    interface LoDashStatic {
        xor<T>(...arrays: Array<List<T> | null | undefined>): T[];
    }
    interface Collection<T> {
        xor(...arrays: Array<List<T> | null | undefined>): Collection<T>;
    }
    interface CollectionChain<T> {
        xor(...arrays: Array<List<T> | null | undefined>): CollectionChain<T>;
    }
    interface LoDashStatic {
        xorBy<T>(arrays: List<T> | null | undefined, iteratee?: ValueIteratee<T>): T[];
        xorBy<T>(arrays: List<T> | null | undefined, arrays2: List<T> | null | undefined, iteratee?: ValueIteratee<T>): T[];
        xorBy<T>(arrays: List<T> | null | undefined, arrays2: List<T> | null | undefined, arrays3: List<T> | null | undefined, ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>): T[];
    }
    interface Collection<T> {
        xorBy(arrays2: List<T> | null | undefined, iteratee?: ValueIteratee<T>): Collection<T>;
        xorBy(...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>): Collection<T>;
    }
    interface CollectionChain<T> {
        xorBy(arrays2: List<T> | null | undefined, iteratee?: ValueIteratee<T>): CollectionChain<T>;
        xorBy(...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined>): CollectionChain<T>;
    }
    interface LoDashStatic {
        xorWith<T>(arrays: List<T> | null | undefined, comparator?: Comparator<T>): T[];
        xorWith<T>(arrays: List<T> | null | undefined, arrays2: List<T> | null | undefined, comparator?: Comparator<T>): T[];
        xorWith<T>(arrays: List<T> | null | undefined, arrays2: List<T> | null | undefined, arrays3: List<T> | null | undefined, ...comparator: Array<Comparator<T> | List<T> | null | undefined>): T[];
    }
    interface Collection<T> {
        xorWith(arrays2: List<T> | null | undefined, comparator?: Comparator<T>): Collection<T>;
        xorWith(...comparator: Array<Comparator<T> | List<T> | null | undefined>): Collection<T>;
    }
    interface CollectionChain<T> {
        xorWith(arrays2: List<T> | null | undefined, comparator?: Comparator<T>): CollectionChain<T>;
        xorWith(...comparator: Array<Comparator<T> | List<T> | null | undefined>): CollectionChain<T>;
    }
    interface LoDashStatic {
        zip<T1, T2>(arrays1: List<T1>, arrays2: List<T2>): Array<[T1 | undefined, T2 | undefined]>;
        zip<T1, T2, T3>(arrays1: List<T1>, arrays2: List<T2>, arrays3: List<T3>): Array<[T1 | undefined, T2 | undefined, T3 | undefined]>;
        zip<T1, T2, T3, T4>(arrays1: List<T1>, arrays2: List<T2>, arrays3: List<T3>, arrays4: List<T4>): Array<[T1 | undefined, T2 | undefined, T3 | undefined, T4 | undefined]>;
        zip<T1, T2, T3, T4, T5>(arrays1: List<T1>, arrays2: List<T2>, arrays3: List<T3>, arrays4: List<T4>, arrays5: List<T5>): Array<[T1 | undefined, T2 | undefined, T3 | undefined, T4 | undefined, T5 | undefined]>;
        zip<T>(...arrays: Array<List<T> | null | undefined>): Array<Array<T | undefined>>;
    }
    interface Collection<T> {
        zip<T2>(arrays2: List<T2>): Collection<[T | undefined, T2 | undefined]>;
        zip(...arrays: Array<List<T> | null | undefined>): Collection<Array<T | undefined>>;
    }
    interface CollectionChain<T> {
        zip<T2>(arrays2: List<T2>): CollectionChain<[T | undefined, T2 | undefined]>;
        zip(...arrays: Array<List<T> | null | undefined>): CollectionChain<Array<T | undefined>>;
    }
    interface LoDashStatic {
        zipObject<T>(props: List<PropertyName>, values: List<T>): Dictionary<T>;
        zipObject(props?: List<PropertyName>): Dictionary<undefined>;
    }
    interface Collection<T> {
        zipObject<U>(values: List<U>): Object<Dictionary<U>>;
        zipObject(): Object<Dictionary<undefined>>;
    }
    interface CollectionChain<T> {
        zipObject<U>(values: List<U>): ObjectChain<Dictionary<U>>;
        zipObject(): ObjectChain<Dictionary<undefined>>;
    }
    interface LoDashStatic {
        zipObjectDeep(paths?: List<PropertyPath>, values?: List<any>): object;
    }
    interface Collection<T> {
        zipObjectDeep(values?: List<any>): Object<object>;
    }
    interface CollectionChain<T> {
        zipObjectDeep(values?: List<any>): ObjectChain<object>;
    }
    interface LoDashStatic {
        zipWith<T, TResult>(arrays: List<T>, iteratee: (value1: T) => TResult): TResult[];
        zipWith<T1, T2, TResult>(arrays1: List<T1>, arrays2: List<T2>, iteratee: (value1: T1, value2: T2) => TResult): TResult[];
        zipWith<T1, T2, T3, TResult>(arrays1: List<T1>, arrays2: List<T2>, arrays3: List<T3>, iteratee: (value1: T1, value2: T2, value3: T3) => TResult): TResult[];
        zipWith<T1, T2, T3, T4, TResult>(arrays1: List<T1>, arrays2: List<T2>, arrays3: List<T3>, arrays4: List<T4>, iteratee: (value1: T1, value2: T2, value3: T3, value4: T4) => TResult): TResult[];
        zipWith<T1, T2, T3, T4, T5, TResult>(arrays1: List<T1>, arrays2: List<T2>, arrays3: List<T3>, arrays4: List<T4>, arrays5: List<T5>, iteratee: (value1: T1, value2: T2, value3: T3, value4: T4, value5: T5) => TResult): TResult[];
        zipWith<T, TResult>(...iteratee: Array<((...group: T[]) => TResult) | List<T> | null | undefined>): TResult[];
    }
    interface Collection<T> {
        zipWith<T2, TResult>(arrays2: List<T2>, iteratee: (value1: T, value2: T2) => TResult): Collection<TResult>;
        zipWith<T2, T3, TResult>(arrays2: List<T2>, arrays3: List<T3>, iteratee: (value1: T, value2: T2, value3: T3) => TResult): Collection<TResult>;
        zipWith<TResult>(...iteratee: Array<((...group: T[]) => TResult) | List<T> | null | undefined>): Collection<TResult>;
    }
    interface CollectionChain<T> {
        zipWith<T2, TResult>(arrays2: List<T2>, iteratee: (value1: T, value2: T2) => TResult): CollectionChain<TResult>;
        zipWith<T2, T3, TResult>(arrays2: List<T2>, arrays3: List<T3>, iteratee: (value1: T, value2: T2, value3: T3) => TResult): CollectionChain<TResult>;
        zipWith<TResult>(...iteratee: Array<((...group: T[]) => TResult) | List<T> | null | undefined>): CollectionChain<TResult>;
    }
}
