import _ = require("../index");
declare module "../index" {
    interface Stat {
        chunk<T>( array: List<T> | null | undefined, size?: number ): T[][];
    }
    interface ImpL<T> {
        chunk(  size?: number, ): ImpL<T[]>;
    }
    interface ExpL<T> {
        chunk( size?: number, ): ExpL<T[]>;
    }
    interface Stat {
        compact<T>(array: List<T | null | undefined | false | "" | 0> | null | undefined): T[];
    }

    type Truthy<T> = T extends null | undefined | false | "" | 0 ? never : T;
    interface ImpL<T> {
        compact(): ImpL<Truthy<T>>;
    }
    interface ExpL<T> {
        compact(): ExpL<Truthy<T>>;
    }
    interface Stat {
         concat<T>(array: Many<T>, ...values: Array<Many<T>>): T[];
    }
    interface Imp<TValue> {
        concat<T>(this: Imp<Many<T>>, ...values: Array<Many<T>>): Imp<T[]>;
    }
    interface Exp<TValue> {
        concat<T>(this: Exp<Many<T>>, ...values: Array<Many<T>>): Exp<T[]>;
    }
    interface Stat {
        difference<T>( array: List<T> | null | undefined, ...values: Array<List<T>> ): T[];
    }
    interface ImpL<T> {
        difference(...values: Array<List<T>> ): ImpL<T>;
    }
    interface ExpL<T> {
        difference(...values: Array<List<T>> ): ExpL<T>;
    }
    interface Stat {
        differenceBy<T1, T2>( array: List<T1> | null | undefined, values: List<T2>, iteratee: ValueIteratee<T1 | T2> ): T1[];
        differenceBy<T1, T2, T3>( array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, iteratee: ValueIteratee<T1 | T2 | T3> ): T1[];
        differenceBy<T1, T2, T3, T4>( array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, values3: List<T4>, iteratee: ValueIteratee<T1 | T2 | T3 | T4> ): T1[];
        differenceBy<T1, T2, T3, T4, T5>( array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, values3: List<T4>, values4: List<T5>, iteratee: ValueIteratee<T1 | T2 | T3 | T4 | T5> ): T1[];
        differenceBy<T1, T2, T3, T4, T5, T6>( array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, values3: List<T4>, values4: List<T5>, values5: List<T6>, iteratee: ValueIteratee<T1 | T2 | T3 | T4 | T5 | T6> ): T1[];
        differenceBy<T1, T2, T3, T4, T5, T6, T7>( array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, values3: List<T4>, values4: List<T5>, values5: List<T6>, ...values: Array<List<T7> | ValueIteratee<T1 | T2 | T3 | T4 | T5 | T6 | T7>> ): T1[];
        differenceBy<T>( array: List<T> | null | undefined, ...values: Array<List<T>> ): T[];
    }
    interface ImpL<T> {
        differenceBy<T2>( values1: T2, iteratee?: ValueIteratee<T | T2> ): ImpL<T>;
        differenceBy(  ...values: Array<List<unknown> | ValueIteratee<T>> ): ImpL<T>;
    }
    interface ExpL<T> {
        differenceBy<T2>( values1: T2, iteratee?: ValueIteratee<T | T2> ): ExpL<T>;
        differenceBy<T>(...values: Array<List<unknown> | ValueIteratee<T>> ): ExpL<T>;
    }
    interface Stat {
        differenceWith<T1, T2>( array: List<T1> | null | undefined, values: List<T2>, comparator: Comparator2<T1, T2> ): T1[];
        differenceWith<T1, T2, T3>( array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, comparator: Comparator2<T1, T2 | T3> ): T1[];
        differenceWith<T1, T2, T3, T4>( array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, ...values: Array<List<T4> | Comparator2<T1, T2 | T3 | T4>> ): T1[];
        differenceWith<T>( array: List<T> | null | undefined, ...values: Array<List<T>> ): T[];
    }
    interface ImpL<T> {
        differenceWith<T2>( values: List<T2>, comparator: Comparator2<T, T2> ): ImpL<T>;
        differenceWith<T2, T3, T4>( ...values: Array<List<unknown> | Comparator2<T, never>> ): ImpL<T>;
    }
    interface ExpL<T> {
        differenceWith< T2>( values: List<T2>, comparator: Comparator2<T, T2> ): ExpL<T>;
        differenceWith< T2, T3, T4>( ...values: Array<List<unknown> | Comparator2<T, never>> ): ExpL<T>;
    }
    interface Stat {
        drop<T>(array: List<T> | null | undefined, n?: number): T[];
    }
    interface ImpL<T> {
        drop(n?: number): ImpL<T>;
    }
    interface ExpL<T> {
        drop(n?: number): ExpL<T>;
    }
    interface Stat {
        dropRight<T>( array: List<T> | null | undefined, n?: number ): T[];
    }
    interface ImpL<T> {
        dropRight( n?: number): ImpL<T>;
    }
    interface ExpL<T> {
        dropRight( n?: number): ExpL<T>;
    }
    interface Stat {
        dropRightWhile<T>( array: List<T> | null | undefined, predicate?: ListIteratee<T> ): T[];
    }
    interface ImpL<T> {
        dropRightWhile( predicate?: ListIteratee<T> ): ImpL<T>;
    }
    interface ExpL<T> {
        dropRightWhile( predicate?: ListIteratee<T> ): ExpL<T>;
    }
    interface Stat {
        dropWhile<T>( array: List<T> | null | undefined, predicate?: ListIteratee<T> ): T[];
    }
    interface ImpL<T> {
        dropWhile( predicate?: ListIteratee<T> ): ImpL<T>;
    }
    interface ExpL<T> {
        dropWhile( predicate?: ListIteratee<T> ): ExpL<T>;
    }
    interface Stat {
        fill<T>( array: any[] | null | undefined, value: T ): T[];
        fill<T>( array: List<any> | null | undefined, value: T ): List<T>;
        fill<T, U>( array: U[] | null | undefined, value: T, start?: number, end?: number ): Array<T | U>;
        fill<T, U>( array: List<U> | null | undefined, value: T, start?: number, end?: number ): List<T | U>;
    }
    interface ImpL<T> {
        fill<U>( value: U, start?: number, end?: number ): Imp<List<T | U>>;
    }
    interface ExpL<T> {
        fill<U>( value: U, start?: number, end?: number ): Exp<List<T | U>>;
    }
    interface Stat {
        findIndex<T>( array: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number ): number;
    }
    interface ImpL<T> {
        findIndex( predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number ): number;
    }
    interface ExpL<T> {
        findIndex( predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number ): Exp<number>;
    }
    interface Stat {
        findLastIndex<T>( array: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number ): number;
    }
    interface ImpL<T> {
        findLastIndex( predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number ): number;
    }
    interface ExpL<T> {
        findLastIndex( predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number ): Exp<number>;
    }
    interface Stat {
        first: typeof _.head;
    }
    interface ImpL<T> {
        first(): T | undefined;
    }
    interface ExpL<T> {
        first(): Exp<T | undefined>;
    }
    interface RecursiveArray<T> extends Array<T|RecursiveArray<T>> {}
    interface ListOfRecursiveArraysOrValues<T> extends List<T|RecursiveArray<T>> {}
    interface Stat {
        flatten<T>(array: List<Many<T>> | null | undefined): T[];
    }
    interface ImpL<T> {
        flatten(): ImpL<T>;
    }
    interface ExpL<T> {
        flatten(): ExpL<T>;
    }
    interface Stat {
        flattenDeep<T>(array: ListOfRecursiveArraysOrValues<T> | null | undefined): T[];
    }
    interface ImpL<T> {
        flattenDeep(): ImpL<T[]>;
    }
    interface ExpL<T> {
        flattenDeep(): ExpL<T[]>;
    }
    interface Stat {
        flattenDepth<T>(array: ListOfRecursiveArraysOrValues<T> | null | undefined, depth?: number): T[];
    }
    interface Imp<TValue> {
        flattenDepth<T>(this: Imp<ListOfRecursiveArraysOrValues<T> | null | undefined>, depth?: number): Imp<T[]>;
    }
    interface Exp<TValue> {
        flattenDepth<T>(this: Exp<ListOfRecursiveArraysOrValues<T> | null | undefined>, depth?: number): Exp<T[]>;
    }
    interface Stat {
        fromPairs<T>( pairs: List<[PropertyName, T]> | null | undefined ): Dictionary<T>;
        fromPairs( pairs: List<any[]> | null | undefined ): Dictionary<any>;
    }
    interface Imp<TValue> {
        fromPairs<T>( this: Imp<List<[PropertyName, T]> | null | undefined> ): Imp<Dictionary<T>>;
        fromPairs( this: Imp<List<any[]> | null | undefined> ): Imp<Dictionary<any>>;
    }
    interface Exp<TValue> {
        fromPairs<T>( this: Exp<List<[PropertyName, T]> | null | undefined> ): Exp<Dictionary<T>>;
        fromPairs( this: Exp<List<any[]> | null | undefined> ): Exp<Dictionary<any>>;
    }
    interface Stat {
        head<T>(array: List<T> | null | undefined): T | undefined;
    }
    interface ImpS {
        head(): string | undefined;
    }
    interface ExpS {
        head(): string | undefined;
    }
    interface ImpL<T> {
        head(): T | undefined;
    }
    interface ExpL<T> {
        head(): Exp<T | undefined>;
    }
    interface Stat {
        indexOf<T>( array: List<T> | null | undefined, value: T, fromIndex?: number ): number;
    }
    interface Imp<TValue> {
        indexOf<T>( this: Imp<List<T> | null | undefined>, value: T, fromIndex?: number ): number;
    }
    interface Exp<TValue> {
        indexOf<T>( this: Exp<List<T> | null | undefined>, value: T, fromIndex?: number ): Exp<number>;
    }
    interface Stat {
        initial<T>(array: List<T> | null | undefined): T[];
    }
    interface Imp<TValue> {
        initial<T>(this: Imp<List<T> | null | undefined>): Imp<T[]>;
    }
    interface Exp<TValue> {
        initial<T>(this: Exp<List<T> | null | undefined>): Exp<T[]>;
    }
    interface Stat {
        intersection<T>(...arrays: Array<List<T>>): T[];
    }
    interface Imp<TValue> {
        intersection<T>( this: Imp<List<T>>, ...arrays: Array<List<T>> ): Imp<T[]>;
    }
    interface Exp<TValue> {
        intersection<T>( this: Exp<List<T>>, ...arrays: Array<List<T>> ): Exp<T[]>;
    }
    interface Stat {
        intersectionBy<T1, T2>( array: List<T1> | null, values: List<T2>, iteratee: ValueIteratee<T1 | T2> ): T1[];
        intersectionBy<T1, T2, T3>( array: List<T1> | null, values1: List<T2>, values2: List<T3>, iteratee: ValueIteratee<T1 | T2 | T3> ): T1[];
        intersectionBy<T1, T2, T3, T4>( array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, ...values: Array<List<T4> | ValueIteratee<T1 | T2 | T3 | T4>> ): T1[];
        intersectionBy<T>( array?: List<T> | null, ...values: Array<List<T>> ): T[];
    }
    interface Imp<TValue> {
        intersectionBy<T1, T2>( this: Imp<List<T1> | null | undefined>, values: List<T2>, iteratee: ValueIteratee<T1 | T2> ): Imp<T1[]>;
        intersectionBy<T>(this: Imp<List<T> | null | undefined>, ...values: Array<List<unknown> | ValueIteratee<T>> ): Imp<T[]>;
    }
    interface Exp<TValue> {
        intersectionBy<T1, T2>( this: Exp<List<T1> | null | undefined>, values: List<T2>, iteratee: ValueIteratee<T1 | T2> ): Exp<T1[]>;
        intersectionBy<T>(this: Exp<List<T> | null | undefined>, ...values: Array<List<unknown> | ValueIteratee<T>> ): Exp<T[]>;
    }
    interface Stat {
        intersectionWith<T1, T2>( array: List<T1> | null | undefined, values: List<T2>, comparator: Comparator2<T1, T2> ): T1[];
        intersectionWith<T1, T2, T3>( array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, comparator: Comparator2<T1, T2 | T3> ): T1[];
        intersectionWith<T1, T2, T3, T4>( array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, ...values: Array<List<T4> | Comparator2<T1, T2 | T3 | T4>> ): T1[];
        intersectionWith<T>( array?: List<T> | null, ...values: Array<List<T>> ): T[];
    }
    interface Imp<TValue> {
        intersectionWith<T1, T2>( this: Imp<List<T1> | null | undefined>, values: List<T2>, comparator: Comparator2<T1, T2> ): Imp<T1[]>;
        intersectionWith<T>(this: Imp<List<T> | null | undefined>, ...values: Array<List<unknown> | Comparator2<T,  never>> ): Imp<T[]>;
    }
    interface Exp<TValue> {
        intersectionWith<T1, T2>( this: Exp<List<T1> | null | undefined>, values: List<T2>, comparator: Comparator2<T1, T2> ): Exp<T1[]>;
        intersectionWith<T>(this: Exp<List<T> | null | undefined>, ...values: Array<List<unknown> | Comparator2<T,  never>> ): Exp<T[]>;
    }
    interface Stat {
        join( array: List<any> | null | undefined, separator?: string ): string;
    }
    interface Imp<TValue> {
        join(separator?: string): string;
    }
    interface Exp<TValue> {
        join(separator?: string): Exp<string>;
    }
    interface Stat {
        last<T>(array: List<T> | null | undefined): T | undefined;
    }
    interface Imp<TValue> {
        last<T>(this: Imp<List<T> | null | undefined>): T | undefined;
    }
    interface Exp<TValue> {
        last<T>(this: Exp<List<T> | null | undefined>): Exp<T | undefined>;
    }
    interface Stat {
        lastIndexOf<T>( array: List<T> | null | undefined, value: T, fromIndex?: true|number ): number;
    }
    interface Imp<TValue> {
        lastIndexOf<T>( this: Imp<List<T> | null | undefined>, value: T, fromIndex?: true|number ): number;
    }
    interface Exp<TValue> {
        lastIndexOf<T>( this: Exp<List<T> | null | undefined>, value: T, fromIndex?: true|number ): Exp<number>;
    }
    interface Stat {
        nth<T>( array: List<T> | null | undefined, n?: number ): T | undefined;
    }
    interface Imp<TValue> {
        nth<T>( this: Imp<List<T> | null | undefined>, n?: number ): T | undefined;
    }
    interface Exp<TValue> {
        nth<T>( this: Exp<List<T> | null | undefined>, n?: number ): Exp<T | undefined>;
    }
    interface Stat {
        pull<T>( array: T[], ...values: T[] ): T[];
        pull<T>( array: List<T>, ...values: T[] ): List<T>;
    }
    interface Imp<TValue> {
        pull<T>( this: Imp<List<T>>, ...values: T[] ): this;
    }
    interface Exp<TValue> {
        pull<T>( this: Exp<List<T>>, ...values: T[] ): this;
    }
    interface Stat {
        pullAll<T>( array: T[], values?: List<T>, ): T[];
        pullAll<T>( array: List<T>, values?: List<T>, ): List<T>;
    }
    interface Imp<TValue> {
        pullAll<T>( this: Imp<List<T>>, values?: List<T> ): this;
    }
    interface Exp<TValue> {
        pullAll<T>( this: Exp<List<T>>, values?: List<T> ): this;
    }
    interface Stat {
        pullAllBy<T>( array: T[], values?: List<T>, iteratee?: ValueIteratee<T> ): T[];
        pullAllBy<T>( array: List<T>, values?: List<T>, iteratee?: ValueIteratee<T> ): List<T>;
        pullAllBy<T1, T2>( array: T1[], values: List<T2>, iteratee: ValueIteratee<T1 | T2> ): T1[];
        pullAllBy<T1, T2>( array: List<T1>, values: List<T2>, iteratee: ValueIteratee<T1 | T2> ): List<T1>;
    }
    interface LoDashWrapper<TValue> {
        pullAllBy<T1, T2>( this: LoDashWrapper<List<T1>>, values?: List<T2>, iteratee?: ValueIteratee<T1 | T2> ): this;
    }
    interface Stat {
        pullAllWith<T>( array: T[], values?: List<T>, comparator?: Comparator<T> ): T[];
        pullAllWith<T>( array: List<T>, values?: List<T>, comparator?: Comparator<T> ): List<T>;
        pullAllWith<T1, T2>( array: T1[], values: List<T2>, comparator: Comparator2<T1, T2> ): T1[];
        pullAllWith<T1, T2>( array: List<T1>, values: List<T2>, comparator: Comparator2<T1, T2> ): List<T1>;
    }
    interface LoDashWrapper<TValue> {
        pullAllWith<T1, T2>( this: LoDashWrapper<List<T1>>, values?: List<T2>, comparator?: Comparator2<T1, T2> ): this;
    }
    interface Stat {
        pullAt<T>( array: T[], ...indexes: Array<Many<number>> ): T[];
        pullAt<T>( array: List<T>, ...indexes: Array<Many<number>> ): List<T>;
    }
    interface LoDashWrapper<TValue> {
        pullAt(...indexes: Array<Many<number>>): this;
    }
    interface Stat {
        remove<T>( array: List<T>, predicate?: ListIteratee<T> ): T[];
    }
    interface Imp<TValue> {
        remove<T>( this: Imp<List<T>>, predicate?: ListIteratee<T> ): Imp<T[]>;
    }
    interface Exp<TValue> {
        remove<T>( this: Exp<List<T>>, predicate?: ListIteratee<T> ): Exp<T[]>;
    }
    interface Stat {
        reverse<TList extends List<any>>( array: TList, ): TList;
    }
    interface Stat {
        slice<T>( array: List<T> | null | undefined, start?: number, end?: number ): T[];
    }
    interface Imp<TValue> {
        slice<T>( this: Imp<List<T> | null | undefined>, start?: number, end?: number ): Imp<T[]>;
    }
    interface Exp<TValue> {
        slice<T>( this: Exp<List<T> | null | undefined>, start?: number, end?: number ): Exp<T[]>;
    }
    interface Stat {
        sortedIndex<T>( array: List<T> | null | undefined, value: T ): number;
    }
    interface Imp<TValue> {
        sortedIndex<T>( this: Imp<List<T> | null | undefined>, value: T ): number;
    }
    interface Exp<TValue> {
        sortedIndex<T>( this: Exp<List<T> | null | undefined>, value: T ): Exp<number>;
    }
    interface Stat {
        sortedIndex<T>( array: List<T> | null | undefined, value: T ): number;
    }
    interface Imp<TValue> {
        sortedIndex<T>( this: Imp<List<T> | null | undefined>, value: T ): number;
    }
    interface Exp<TValue> {
        sortedIndex<T>( this: Exp<List<T> | null | undefined>, value: T ): Exp<number>;
    }
    interface Stat {
        sortedIndexBy<T>( array: List<T> | null | undefined, value: T, iteratee?: ValueIteratee<T> ): number;
    }
    interface Imp<TValue> {
        sortedIndexBy<T>( this: Imp<List<T> | null | undefined>, value: T, iteratee?: ValueIteratee<T> ): number;
    }
    interface Exp<TValue> {
        sortedIndexBy<T>( this: Exp<List<T> | null | undefined>, value: T, iteratee?: ValueIteratee<T> ): Exp<number>;
    }
    interface Stat {
        sortedIndexOf<T>( array: List<T> | null | undefined, value: T ): number;
    }
    interface Imp<TValue> {
        sortedIndexOf<T>( this: Imp<List<T> | null | undefined>, value: T ): number;
    }
    interface Exp<TValue> {
        sortedIndexOf<T>( this: Exp<List<T> | null | undefined>, value: T ): Exp<number>;
    }
    interface Stat {
        sortedLastIndex<T>( array: List<T> | null | undefined, value: T ): number;
    }
    interface Imp<TValue> {
        sortedLastIndex<T>( this: Imp<List<T> | null | undefined>, value: T ): number;
    }
    interface Exp<TValue> {
        sortedLastIndex<T>( this: Exp<List<T> | null | undefined>, value: T ): Exp<number>;
    }
    interface Stat {
        sortedLastIndexBy<T>( array: List<T> | null | undefined, value: T, iteratee: ValueIteratee<T> ): number;
    }
    interface Imp<TValue> {
        sortedLastIndexBy<T>( this: Imp<List<T> | null | undefined>, value: T, iteratee: ValueIteratee<T> ): number;
    }
    interface Exp<TValue> {
        sortedLastIndexBy<T>( this: Exp<List<T> | null | undefined>, value: T, iteratee: ValueIteratee<T> ): Exp<number>;
    }
    interface Stat {
        sortedLastIndexOf<T>( array: List<T> | null | undefined, value: T ): number;
    }
    interface Imp<TValue> {
        sortedLastIndexOf<T>( this: Imp<List<T> | null | undefined>, value: T ): number;
    }
    interface Exp<TValue> {
        sortedLastIndexOf<T>( this: Exp<List<T> | null | undefined>, value: T ): Exp<number>;
    }
    interface Stat {
        sortedUniq<T>( array: List<T> | null | undefined ): T[];
    }
    interface Imp<TValue> {
        sortedUniq<T>(this: Imp<List<T> | null | undefined>): Imp<T[]>;
    }
    interface Exp<TValue> {
        sortedUniq<T>(this: Exp<List<T> | null | undefined>): Exp<T[]>;
    }
    interface Stat {
        sortedUniqBy<T>( array: List<T> | null | undefined, iteratee: ValueIteratee<T> ): T[];
    }
    interface Imp<TValue> {
        sortedUniqBy<T>( this: Imp<List<T> | null | undefined>, iteratee: ValueIteratee<T> ): Imp<T[]>;
    }
    interface Exp<TValue> {
        sortedUniqBy<T>( this: Exp<List<T> | null | undefined>, iteratee: ValueIteratee<T> ): Exp<T[]>;
    }
    interface Stat {
        tail<T>(array: List<T> | null | undefined): T[];
    }
    interface Imp<TValue> {
        tail<T>(this: Imp<List<T> | null | undefined>): Imp<T[]>;
    }
    interface Exp<TValue> {
        tail<T>(this: Exp<List<T> | null | undefined>): Exp<T[]>;
    }
    interface Stat {
        take<T>( array: List<T> | null | undefined, n?: number ): T[];
    }
    interface Imp<TValue> {
        take<T>( this: Imp<List<T> | null | undefined>, n?: number ): Imp<T[]>;
    }
    interface Exp<TValue> {
        take<T>( this: Exp<List<T> | null | undefined>, n?: number ): Exp<T[]>;
    }
    interface Stat {
        takeRight<T>( array: List<T> | null | undefined, n?: number ): T[];
    }
    interface Imp<TValue> {
        takeRight<T>( this: Imp<List<T> | null | undefined>, n?: number ): Imp<T[]>;
    }
    interface Exp<TValue> {
        takeRight<T>( this: Exp<List<T> | null | undefined>, n?: number ): Exp<T[]>;
    }
    interface Stat {
        takeRightWhile<T>( array: List<T> | null | undefined, predicate?: ListIteratee<T> ): T[];
    }
    interface Imp<TValue> {
        takeRightWhile<T>( this: Imp<List<T> | null | undefined>, predicate?: ListIteratee<T> ): Imp<T[]>;
    }
    interface Exp<TValue> {
        takeRightWhile<T>( this: Exp<List<T> | null | undefined>, predicate?: ListIteratee<T> ): Exp<T[]>;
    }
    interface Stat {
        takeWhile<T>( array: List<T> | null | undefined, predicate?: ListIteratee<T> ): T[];
    }
    interface Imp<TValue> {
        takeWhile<T>( this: Imp<List<T> | null | undefined>, predicate?: ListIteratee<T> ): Imp<T[]>;
    }
    interface Exp<TValue> {
        takeWhile<T>( this: Exp<List<T> | null | undefined>, predicate?: ListIteratee<T> ): Exp<T[]>;
    }
    interface Stat {
        union<T>(...arrays: Array<List<T> | null | undefined>): T[];
    }
    interface Imp<TValue> {
        union<T>( this: Imp<List<T> | null | undefined>, ...arrays: Array<List<T> | null | undefined> ): Imp<T[]>;
    }
    interface Exp<TValue> {
        union<T>( this: Exp<List<T> | null | undefined>, ...arrays: Array<List<T> | null | undefined> ): Exp<T[]>;
    }
    interface Stat {
        unionBy<T>( arrays: List<T> | null | undefined, iteratee?: ValueIteratee<T> ): T[];
        unionBy<T>( arrays1: List<T> | null | undefined, arrays2: List<T> | null | undefined, iteratee?: ValueIteratee<T> ): T[];
        unionBy<T>( arrays1: List<T> | null | undefined, arrays2: List<T> | null | undefined, arrays3: List<T> | null | undefined, iteratee?: ValueIteratee<T> ): T[];
        unionBy<T>( arrays1: List<T> | null | undefined, arrays2: List<T> | null | undefined, arrays3: List<T> | null | undefined, arrays4: List<T> | null | undefined, iteratee?: ValueIteratee<T> ): T[];
        unionBy<T>( arrays1: List<T> | null | undefined, arrays2: List<T> | null | undefined, arrays3: List<T> | null | undefined, arrays4: List<T> | null | undefined, arrays5: List<T> | null | undefined, ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined> ): T[];
    }
    interface Imp<TValue> {
        unionBy<T>( this: Imp<List<T> | null | undefined>, arrays2: List<T> | null | undefined, iteratee?: ValueIteratee<T> ): Imp<T[]>;
        unionBy<T>( this: Imp<List<T> | null | undefined>, ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined> ): Imp<T[]>;
    }
    interface Exp<TValue> {
        unionBy<T>( this: Exp<List<T> | null | undefined>, arrays2: List<T> | null | undefined, iteratee?: ValueIteratee<T> ): Exp<T[]>;
        unionBy<T>( this: Exp<List<T> | null | undefined>, ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined> ): Exp<T[]>;
    }
    interface Stat {
        unionWith<T>( arrays: List<T> | null | undefined, comparator?: Comparator<T> ): T[];
        unionWith<T>( arrays: List<T> | null | undefined, arrays2: List<T> | null | undefined, comparator?: Comparator<T> ): T[];
        unionWith<T>( arrays: List<T> | null | undefined, arrays2: List<T> | null | undefined, arrays3: List<T> | null | undefined, ...comparator: Array<Comparator<T> | List<T> | null | undefined> ): T[];
    }
    interface Imp<TValue> {
        unionWith<T>( this: Imp<List<T> | null | undefined>, arrays2: List<T> | null | undefined, comparator?: Comparator<T> ): Imp<T[]>;
        unionWith<T>( this: Imp<List<T> | null | undefined>, ...comparator: Array<Comparator<T> | List<T> | null | undefined> ): Imp<T[]>;
    }
    interface Exp<TValue> {
        unionWith<T>( this: Exp<List<T> | null | undefined>, arrays2: List<T> | null | undefined, comparator?: Comparator<T> ): Exp<T[]>;
        unionWith<T>( this: Exp<List<T> | null | undefined>, ...comparator: Array<Comparator<T> | List<T> | null | undefined> ): Exp<T[]>;
    }
    interface Stat {
        uniq<T>( array: List<T> | null | undefined ): T[];
    }
    interface Imp<TValue> {
        uniq<T>(this: Imp<List<T> | null | undefined>): Imp<T[]>;
    }
    interface Exp<TValue> {
        uniq<T>(this: Exp<List<T> | null | undefined>): Exp<T[]>;
    }
    interface Stat {
        uniqBy<T>( array: List<T> | null | undefined, iteratee: ValueIteratee<T> ): T[];
    }
    interface Imp<TValue> {
        uniqBy<T>( this: Imp<List<T> | null | undefined>, iteratee: ValueIteratee<T> ): Imp<T[]>;
    }
    interface Exp<TValue> {
        uniqBy<T>( this: Exp<List<T> | null | undefined>, iteratee: ValueIteratee<T> ): Exp<T[]>;
    }
    interface Stat {
        uniqWith<T>( array: List<T> | null | undefined, comparator?: Comparator<T> ): T[];
    }
    interface Imp<TValue> {
        uniqWith<T>( this: Imp<List<T> | null | undefined>, comparator?: Comparator<T> ): Imp<T[]>;
    }
    interface Exp<TValue> {
        uniqWith<T>( this: Exp<List<T> | null | undefined>, comparator?: Comparator<T> ): Exp<T[]>;
    }
    interface Stat {
        unzip<T>(array: T[][] | List<List<T>> | null | undefined): T[][];
    }
    interface Imp<TValue> {
        unzip<T>(this: Imp<T[][] | List<List<T>> | null | undefined>): Imp<T[][]>;
    }
    interface Exp<TValue> {
        unzip<T>(this: Exp<T[][] | List<List<T>> | null | undefined>): Exp<T[][]>;
    }
    interface Stat {
        unzipWith<T, TResult>( array: List<List<T>> | null | undefined, iteratee: (...values: T[]) => TResult ): TResult[];
        unzipWith<T>( array: List<List<T>> | null | undefined ): T[][];
    }
    interface Imp<TValue> {
        unzipWith<T, TResult>( this: Imp<List<List<T>> | null | undefined>, iteratee: (...values: T[]) => TResult ): Imp<TResult[]>;
        unzipWith<T>( this: Imp<List<List<T>> | null | undefined> ): Imp<T[][]>;
    }
    interface Exp<TValue> {
        unzipWith<T, TResult>( this: Exp<List<List<T>> | null | undefined>, iteratee: (...values: T[]) => TResult ): Exp<TResult[]>;
        unzipWith<T>( this: Exp<List<List<T>> | null | undefined> ): Exp<T[][]>;
    }
    interface Stat {
        without<T>( array: List<T> | null | undefined, ...values: T[] ): T[];
    }
    interface Imp<TValue> {
        without<T>( this: Imp<List<T> | null | undefined>, ...values: T[] ): Imp<T[]>;
    }
    interface Exp<TValue> {
        without<T>( this: Exp<List<T> | null | undefined>, ...values: T[] ): Exp<T[]>;
    }
    interface Stat {
        xor<T>(...arrays: Array<List<T> | null | undefined>): T[];
    }
    interface Imp<TValue> {
        xor<T>( this: Imp<List<T> | null | undefined>, ...arrays: Array<List<T> | null | undefined> ): Imp<T[]>;
    }
    interface Exp<TValue> {
        xor<T>( this: Exp<List<T> | null | undefined>, ...arrays: Array<List<T> | null | undefined> ): Exp<T[]>;
    }
    interface Stat {
        xorBy<T>( arrays: List<T> | null | undefined, iteratee?: ValueIteratee<T> ): T[];
        xorBy<T>( arrays: List<T> | null | undefined, arrays2: List<T> | null | undefined, iteratee?: ValueIteratee<T> ): T[];
        xorBy<T>( arrays: List<T> | null | undefined, arrays2: List<T> | null | undefined, arrays3: List<T> | null | undefined, ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined> ): T[];
    }
    interface Imp<TValue> {
        xorBy<T>( this: Imp<List<T> | null | undefined>, arrays2: List<T> | null | undefined, iteratee?: ValueIteratee<T> ): Imp<T[]>;
        xorBy<T>( this: Imp<List<T> | null | undefined>, ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined> ): Imp<T[]>;
    }
    interface Exp<TValue> {
        xorBy<T>( this: Exp<List<T> | null | undefined>, arrays2: List<T> | null | undefined, iteratee?: ValueIteratee<T> ): Exp<T[]>;
        xorBy<T>( this: Exp<List<T> | null | undefined>, ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined> ): Exp<T[]>;
    }
    interface Stat {
        xorWith<T>( arrays: List<T> | null | undefined, comparator?: Comparator<T> ): T[];
        xorWith<T>( arrays: List<T> | null | undefined, arrays2: List<T> | null | undefined, comparator?: Comparator<T> ): T[];
        xorWith<T>( arrays: List<T> | null | undefined, arrays2: List<T> | null | undefined, arrays3: List<T> | null | undefined, ...comparator: Array<Comparator<T> | List<T> | null | undefined> ): T[];
    }
    interface Imp<TValue> {
        xorWith<T>( this: Imp<List<T> | null | undefined>, arrays2: List<T> | null | undefined, comparator?: Comparator<T> ): Imp<T[]>;
        xorWith<T>( this: Imp<List<T> | null | undefined>, ...comparator: Array<Comparator<T> | List<T> | null | undefined> ): Imp<T[]>;
    }
    interface Exp<TValue> {
        xorWith<T>( this: Exp<List<T> | null | undefined>, arrays2: List<T> | null | undefined, comparator?: Comparator<T> ): Exp<T[]>;
        xorWith<T>( this: Exp<List<T> | null | undefined>, ...comparator: Array<Comparator<T> | List<T> | null | undefined> ): Exp<T[]>;
    }
    interface Stat {
        zip<T1, T2>(arrays1: List<T1>, arrays2: List<T2>): Array<[T1 | undefined, T2 | undefined]>;
        zip<T1, T2, T3>(arrays1: List<T1>, arrays2: List<T2>, arrays3: List<T3>): Array<[T1 | undefined, T2 | undefined, T3 | undefined]>;
        zip<T1, T2, T3, T4>(arrays1: List<T1>, arrays2: List<T2>, arrays3: List<T3>, arrays4: List<T4>): Array<[T1 | undefined, T2 | undefined, T3 | undefined, T4 | undefined]>;
        zip<T1, T2, T3, T4, T5>(arrays1: List<T1>, arrays2: List<T2>, arrays3: List<T3>, arrays4: List<T4>, arrays5: List<T5>): Array<[T1 | undefined, T2 | undefined, T3 | undefined, T4 | undefined, T5 | undefined]>;
        zip<T>(...arrays: Array<List<T> | null | undefined>): Array<Array<T | undefined>>;
    }
    interface Imp<TValue> {
        zip<T1, T2>( this: Imp<List<T1>>, arrays2: List<T2>, ): Imp<Array<[T1 | undefined, T2 | undefined]>>;
        zip<T>( this: Imp<List<T> | null | undefined>, ...arrays: Array<List<T> | null | undefined> ): Imp<Array<Array<T | undefined>>>;
    }
    interface Exp<TValue> {
        zip<T1, T2>( this: Exp<List<T1>>, arrays2: List<T2>, ): Exp<Array<[T1 | undefined, T2 | undefined]>>;
        zip<T>( this: Exp<List<T> | null | undefined>, ...arrays: Array<List<T> | null | undefined> ): Exp<Array<Array<T | undefined>>>;
    }
    interface Stat {
        zipObject<T>( props: List<PropertyName>, values: List<T> ): Dictionary<T>;
        zipObject( props?: List<PropertyName> ): Dictionary<undefined>;
    }
    interface Imp<TValue> {
        zipObject<T>( this: Imp<List<PropertyName>>, values: List<T> ): Imp<Dictionary<T>>;
        zipObject( this: Imp<List<PropertyName>> ): Imp<Dictionary<undefined>>;
    }
    interface Exp<TValue> {
        zipObject<T>( this: Exp<List<PropertyName>>, values: List<T> ): Exp<Dictionary<T>>;
        zipObject( this: Exp<List<PropertyName>> ): Exp<Dictionary<undefined>>;
    }
    interface Stat {
        zipObjectDeep( paths?: List<PropertyPath>, values?: List<any> ): object;
    }
    interface Imp<TValue> {
        zipObjectDeep( this: Imp<List<PropertyPath>>, values?: List<any> ): Imp<object>;
    }
    interface Exp<TValue> {
        zipObjectDeep( this: Exp<List<PropertyPath>>, values?: List<any> ): Exp<object>;
    }
    interface Stat {
        zipWith<T, TResult>( arrays: List<T>, iteratee: (value1: T) => TResult ): TResult[];
        zipWith<T1, T2, TResult>( arrays1: List<T1>, arrays2: List<T2>, iteratee: (value1: T1, value2: T2) => TResult ): TResult[];
        zipWith<T1, T2, T3, TResult>( arrays1: List<T1>, arrays2: List<T2>, arrays3: List<T3>, iteratee: (value1: T1, value2: T2, value3: T3) => TResult ): TResult[];
        zipWith<T1, T2, T3, T4, TResult>( arrays1: List<T1>, arrays2: List<T2>, arrays3: List<T3>, arrays4: List<T4>, iteratee: (value1: T1, value2: T2, value3: T3, value4: T4) => TResult ): TResult[];
        zipWith<T1, T2, T3, T4, T5, TResult>( arrays1: List<T1>, arrays2: List<T2>, arrays3: List<T3>, arrays4: List<T4>, arrays5: List<T5>, iteratee: (value1: T1, value2: T2, value3: T3, value4: T4, value5: T5) => TResult ): TResult[];
        zipWith<T, TResult>( ...iteratee: Array<((...group: T[]) => TResult) | List<T> | null | undefined> ): TResult[];
    }
    interface Imp<TValue> {
        zipWith<T1, T2, TResult>( this: Imp<List<T1>>, arrays2: List<T2>, iteratee: (value1: T1, value2: T2) => TResult ): Imp<TResult[]>;
        zipWith<T1, T2, T3, TResult>( this: Imp<List<T1>>, arrays2: List<T2>, arrays3: List<T3>, iteratee: (value1: T1, value2: T2, value3: T3) => TResult ): Imp<TResult[]>;
        zipWith<T, TResult>( this: Imp<List<T> | null | undefined>, ...iteratee: Array<((...group: T[]) => TResult) | List<T> | null | undefined> ): Imp<TResult[]>;
    }
    interface Exp<TValue> {
        zipWith<T1, T2, TResult>( this: Exp<List<T1>>, arrays2: List<T2>, iteratee: (value1: T1, value2: T2) => TResult ): Exp<TResult[]>;
        zipWith<T1, T2, T3, TResult>( this: Exp<List<T1>>, arrays2: List<T2>, arrays3: List<T3>, iteratee: (value1: T1, value2: T2, value3: T3) => TResult ): Exp<TResult[]>;
        zipWith<T, TResult>( this: Exp<List<T> | null | undefined>, ...iteratee: Array<((...group: T[]) => TResult) | List<T> | null | undefined> ): Exp<TResult[]>;
    }
}
