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
    interface ImpU<T> {
        concat(...values: Array<Many<T>>): ImpL<T>;
    }
    interface ImpL<T> {
        concat(...values: Array<Many<T>>): ImpL<T>;
    }
    interface ImpO<T> {
        concat(...values: Array<Many<T>>): ImpL<T>;
    }
    interface ExpU<T> {
        concat(...values: Array<Many<T>>): ExpL<T>;
    }
    interface ExpL<T> {
        concat(...values: Array<Many<T>>): ExpL<T>;
    }
    interface ExpO<T> {
        concat(...values: Array<Many<T>>): ExpL<T>;
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
    interface ImpS {
        first(): string | undefined;
    }
    interface ExpS {
        first(): Exp<string | undefined>;
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
    interface ImpS {
        flatten(): ImpS;
    }
    interface ExpS {
        flatten(): ExpS;
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
        flattenDepth<T>(this: Imp<ListOfRecursiveArraysOrValues<T> | null | undefined>, depth?: number): ImpL<T>;
    }
    interface Exp<TValue> {
        flattenDepth<T>(this: Exp<ListOfRecursiveArraysOrValues<T> | null | undefined>, depth?: number): ExpL<T>;
    }
    interface Stat {
        fromPairs<T>( pairs: List<[PropertyName, T]> | null | undefined ): Dictionary<T>;
        fromPairs( pairs: List<any[]> | null | undefined ): Dictionary<any>;
    }
    interface ImpL<T> {
        fromPairs( this: ImpL<[PropertyName, T]> ): Imp<Dictionary<T>>;
        fromPairs(): Imp<Dictionary<any>>;
    }
    interface ExpL<T> {
        fromPairs<T>( this: ExpL<[PropertyName, T]> ): Exp<Dictionary<T>>;
        fromPairs(): Exp<Dictionary<any>>;
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
    interface ImpL<T> {
        indexOf( value: T, fromIndex?: number ): number;
    }
    interface ExpL<T> {
        indexOf( value: T, fromIndex?: number ): Exp<number>;
    }
    interface Stat {
        initial<T>(array: List<T> | null | undefined): T[];
    }
    interface ImpL<T> {
        initial(): ImpL<T>;
    }
    interface ExpL<T> {
        initial(): ExpL<T>;
    }
    interface Stat {
        intersection<T>(...arrays: Array<List<T>>): T[];
    }
    interface ImpL<T> {
        intersection( ...arrays: Array<List<T>> ): ImpL<T>;
    }
    interface ExpL<T> {
        intersection( ...arrays: Array<List<T>> ): ExpL<T>;
    }
    interface Stat {
        intersectionBy<T1, T2>( array: List<T1> | null, values: List<T2>, iteratee: ValueIteratee<T1 | T2> ): T1[];
        intersectionBy<T1, T2, T3>( array: List<T1> | null, values1: List<T2>, values2: List<T3>, iteratee: ValueIteratee<T1 | T2 | T3> ): T1[];
        intersectionBy<T1, T2, T3, T4>( array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, ...values: Array<List<T4> | ValueIteratee<T1 | T2 | T3 | T4>> ): T1[];
        intersectionBy<T>( array?: List<T> | null, ...values: Array<List<T>> ): T[];
    }
    interface ImpL<T> {
        intersectionBy<T2>( values: List<T2>, iteratee: ValueIteratee<T | T2> ): ImpL<T>;
        intersectionBy( ...values: Array<List<unknown> | ValueIteratee<T>> ): ImpL<T>;
    }
    interface ExpL<T> {
        intersectionBy<T2>(  values: List<T2>, iteratee: ValueIteratee<T | T2> ): ExpL<T>;
        intersectionBy( ...values: Array<List<unknown> | ValueIteratee<T>> ): ExpL<T>;
    }
    interface Stat {
        intersectionWith<T1, T2>( array: List<T1> | null | undefined, values: List<T2>, comparator: Comparator2<T1, T2> ): T1[];
        intersectionWith<T1, T2, T3>( array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, comparator: Comparator2<T1, T2 | T3> ): T1[];
        intersectionWith<T1, T2, T3, T4>( array: List<T1> | null | undefined, values1: List<T2>, values2: List<T3>, ...values: Array<List<T4> | Comparator2<T1, T2 | T3 | T4>> ): T1[];
        intersectionWith<T>( array?: List<T> | null, ...values: Array<List<T>> ): T[];
    }
    interface ImpL<T> {
        intersectionWith<T2>( values: List<T2>, comparator: Comparator2<T, T2> ): ImpL<T>;
        intersectionWith( ...values: Array<List<unknown> | Comparator2<T,  never>> ): ImpL<T>;
    }
    interface ExpL<T> {
        intersectionWith<T, T2>( values: List<T2>, comparator: Comparator2<T, T2> ): ExpL<T>;
        intersectionWith( ...values: Array<List<unknown> | Comparator2<T,  never>> ): ExpL<T>;
    }
    interface Stat {
        join( array: List<any> | null | undefined, separator?: string ): string;
    }
    interface ImpS {
        join(separator?: string): string;
    }
    interface ExpS {
        join(separator?: string): Exp<string>;
    }
    interface ImpL<T> {
        join(separator?: string): string;
    }
    interface ExpL<T> {
        join(separator?: string): Exp<string>;
    }
    interface Stat {
        last<T>(array: List<T> | null | undefined): T | undefined;
    }
    interface ImpL<T> {
        last(): T | undefined;
    }
    interface ExpL<T> {
        last(): Exp<T | undefined>;
    }
    interface ImpS {
        last(): string | undefined;
    }
    interface ExpS {
        last(): Exp<string | undefined>;
    }
    interface Stat {
        lastIndexOf<T>( array: List<T> | null | undefined, value: T, fromIndex?: true|number ): number;
    }
    interface ImpL<T> {
        lastIndexOf( value: T, fromIndex?: true|number ): number;
    }
    interface ExpL<T> {
        lastIndexOf( value: T, fromIndex?: true|number ): Exp<number>;
    }
    interface Stat {
        nth<T>( array: List<T> | null | undefined, n?: number ): T | undefined;
    }
    interface ImpL<T> {
        nth( n?: number ): T | undefined;
    }
    interface ExpL<T> {
        nth( n?: number ): Exp<T | undefined>;
    }
    interface Stat {
        pull<T>( array: T[], ...values: T[] ): T[];
        pull<T>( array: List<T>, ...values: T[] ): List<T>;
    }
    interface ImpL<T> {
        pull( ...values: T[] ): ImpL<T>;
    }
    interface ExpL<T> {
        pull( ...values: T[] ): ExpL<T>;
    }
    interface Stat {
        pullAll<T>( array: T[], values?: List<T>, ): T[];
        pullAll<T>( array: List<T>, values?: List<T>, ): List<T>;
    }
    interface ImpL<T> {
        pullAll( values?: List<T> ): ImpL<T>;
    }
    interface ExpL<T> {
        pullAll( values?: List<T> ): ExpL<T>;
    }
    interface Stat {
        pullAllBy<T>( array: T[], values?: List<T>, iteratee?: ValueIteratee<T> ): T[];
        pullAllBy<T>( array: List<T>, values?: List<T>, iteratee?: ValueIteratee<T> ): List<T>;
        pullAllBy<T1, T2>( array: T1[], values: List<T2>, iteratee: ValueIteratee<T1 | T2> ): T1[];
        pullAllBy<T1, T2>( array: List<T1>, values: List<T2>, iteratee: ValueIteratee<T1 | T2> ): List<T1>;
    }
    interface ImpL<T> {
        pullAllBy<T2>( values?: List<T2>, iteratee?: ValueIteratee<T | T2> ): ImpL<T>;
    }
    interface ExpL<T> {
        pullAllBy<T2>( values?: List<T2>, iteratee?: ValueIteratee<T | T2> ): ExpL<T>;
    }
    interface Stat {
        pullAllWith<T>( array: T[], values?: List<T>, comparator?: Comparator<T> ): T[];
        pullAllWith<T>( array: List<T>, values?: List<T>, comparator?: Comparator<T> ): List<T>;
        pullAllWith<T1, T2>( array: T1[], values: List<T2>, comparator: Comparator2<T1, T2> ): T1[];
        pullAllWith<T1, T2>( array: List<T1>, values: List<T2>, comparator: Comparator2<T1, T2> ): List<T1>;
    }
    interface ImpL<T> {
        pullAllWith<T, T2>(values?: List<T2>, comparator?: Comparator2<T, T2> ): ImpL<T>;
    }
    interface ExpL<T> {
        pullAllWith<T, T2>(values?: List<T2>, comparator?: Comparator2<T, T2> ): ExpL<T>;
    }
    interface Stat {
        pullAt<T>( array: T[], ...indexes: Array<Many<number>> ): T[];
        pullAt<T>( array: List<T>, ...indexes: Array<Many<number>> ): List<T>;
    }
    interface ImpL<T> {
        pullAt(...indexes: Array<Many<number>>): ImpL<T>;
    }
    interface ExpL<T> {
        pullAt(...indexes: Array<Many<number>>): ExpL<T>;
    }
    interface Stat {
        remove<T>( array: List<T>, predicate?: ListIteratee<T> ): T[];
    }
    interface ImpL<T> {
        remove( predicate?: ListIteratee<T> ): ImpL<T>;
    }
    interface ExpL<T> {
        remove( predicate?: ListIteratee<T> ): ExpL<T>;
    }
    interface Stat {
        reverse<TList extends List<any>>( array: TList, ): TList;
    }
    interface Stat {
        slice<T>( array: List<T> | null | undefined, start?: number, end?: number ): T[];
    }
    interface ImpL<T> {
        slice( start?: number, end?: number ): ImpL<T>;
    }
    interface ExpL<T> {
        slice( start?: number, end?: number ): ExpL<T>;
    }
    interface Stat {
        sortedIndex<T>( array: List<T> | null | undefined, value: T ): number;
    }
    interface ImpL<T> {
        sortedIndex( value: T ): number;
    }
    interface ExpL<T> {
        sortedIndex( value: T ): Exp<number>;
    }
    interface Stat {
        sortedIndex<T>( array: List<T> | null | undefined, value: T ): number;
    }
    interface ImpL<T> {
        sortedIndex( value: T ): number;
    }
    interface ExpL<T> {
        sortedIndex( value: T ): Exp<number>;
    }
    interface Stat {
        sortedIndexBy<T>( array: List<T> | null | undefined, value: T, iteratee?: ValueIteratee<T> ): number;
    }
    interface ImpL<T> {
        sortedIndexBy( value: T, iteratee?: ValueIteratee<T> ): number;
    }
    interface ExpL<T> {
        sortedIndexBy( value: T, iteratee?: ValueIteratee<T> ): Exp<number>;
    }
    interface Stat {
        sortedIndexOf<T>( array: List<T> | null | undefined, value: T ): number;
    }
    interface ImpL<T> {
        sortedIndexOf( value: T ): number;
    }
    interface ExpL<T> {
        sortedIndexOf( value: T ): Exp<number>;
    }
    interface Stat {
        sortedLastIndex<T>( array: List<T> | null | undefined, value: T ): number;
    }
    interface ImpL<T> {
        sortedLastIndex( value: T ): number;
    }
    interface ExpL<T> {
        sortedLastIndex( value: T ): Exp<number>;
    }
    interface Stat {
        sortedLastIndexBy<T>( array: List<T> | null | undefined, value: T, iteratee: ValueIteratee<T> ): number;
    }
    interface ImpL<T> {
        sortedLastIndexBy( value: T, iteratee: ValueIteratee<T> ): number;
    }
    interface ExpL<T> {
        sortedLastIndexBy( value: T, iteratee: ValueIteratee<T> ): Exp<number>;
    }
    interface Stat {
        sortedLastIndexOf<T>( array: List<T> | null | undefined, value: T ): number;
    }
    interface ImpL<T> {
        sortedLastIndexOf( value: T ): number;
    }
    interface ExpL<T> {
        sortedLastIndexOf( value: T ): Exp<number>;
    }
    interface Stat {
        sortedUniq<T>( array: List<T> | null | undefined ): T[];
    }
    interface ImpL<T> {
        sortedUniq(): ImpL<T>;
    }
    interface ExpL<T> {
        sortedUniq(): ExpL<T>;
    }
    interface Stat {
        sortedUniqBy<T>( array: List<T> | null | undefined, iteratee: ValueIteratee<T> ): T[];
    }
    interface ImpL<T> {
        sortedUniqBy( iteratee: ValueIteratee<T> ): ImpL<T>;
    }
    interface ExpL<T> {
        sortedUniqBy( iteratee: ValueIteratee<T> ): ExpL<T>;
    }
    interface Stat {
        tail<T>(array: List<T> | null | undefined): T[];
    }
    interface ImpL<T> {
        tail(): ImpL<T>;
    }
    interface ExpL<T> {
        tail(): ExpL<T>;
    }
    interface Stat {
        take<T>( array: List<T> | null | undefined, n?: number ): T[];
    }
    interface ImpL<T> {
        take( n?: number ): ImpL<T>;
    }
    interface ExpL<T> {
        take( n?: number ): ExpL<T>;
    }
    interface Stat {
        takeRight<T>( array: List<T> | null | undefined, n?: number ): T[];
    }
    interface ImpL<T> {
        takeRight( n?: number ): ImpL<T>;
    }
    interface ExpL<T> {
        takeRight( n?: number ): ExpL<T>;
    }
    interface Stat {
        takeRightWhile<T>( array: List<T> | null | undefined, predicate?: ListIteratee<T> ): T[];
    }
    interface ImpL<T> {
        takeRightWhile( predicate?: ListIteratee<T> ): ImpL<T>;
    }
    interface ExpL<T> {
        takeRightWhile( predicate?: ListIteratee<T> ): ExpL<T>;
    }
    interface Stat {
        takeWhile<T>( array: List<T> | null | undefined, predicate?: ListIteratee<T> ): T[];
    }
    interface ImpL<T> {
        takeWhile( predicate?: ListIteratee<T> ): ImpL<T>;
    }
    interface ExpL<T> {
        takeWhile( predicate?: ListIteratee<T> ): ExpL<T>;
    }
    interface Stat {
        union<T>(...arrays: Array<List<T> | null | undefined>): T[];
    }
    interface ImpL<T> {
        union( ...arrays: Array<List<T> | null | undefined> ): ImpL<T>;
    }
    interface ExpL<T> {
        union( ...arrays: Array<List<T> | null | undefined> ): ExpL<T>;
    }
    interface Stat {
        unionBy<T>( arrays: List<T> | null | undefined, iteratee?: ValueIteratee<T> ): T[];
        unionBy<T>( arrays1: List<T> | null | undefined, arrays2: List<T> | null | undefined, iteratee?: ValueIteratee<T> ): T[];
        unionBy<T>( arrays1: List<T> | null | undefined, arrays2: List<T> | null | undefined, arrays3: List<T> | null | undefined, iteratee?: ValueIteratee<T> ): T[];
        unionBy<T>( arrays1: List<T> | null | undefined, arrays2: List<T> | null | undefined, arrays3: List<T> | null | undefined, arrays4: List<T> | null | undefined, iteratee?: ValueIteratee<T> ): T[];
        unionBy<T>( arrays1: List<T> | null | undefined, arrays2: List<T> | null | undefined, arrays3: List<T> | null | undefined, arrays4: List<T> | null | undefined, arrays5: List<T> | null | undefined, ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined> ): T[];
    }
    interface ImpL<T> {
        unionBy( arrays2: List<T> | null | undefined, iteratee?: ValueIteratee<T> ): ImpL<T>;
        unionBy( ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined> ): ImpL<T>;
    }
    interface ExpL<T> {
        unionBy( arrays2: List<T> | null | undefined, iteratee?: ValueIteratee<T> ): ExpL<T>;
        unionBy( ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined> ): ExpL<T>;
    }
    interface Stat {
        unionWith<T>( arrays: List<T> | null | undefined, comparator?: Comparator<T> ): T[];
        unionWith<T>( arrays: List<T> | null | undefined, arrays2: List<T> | null | undefined, comparator?: Comparator<T> ): T[];
        unionWith<T>( arrays: List<T> | null | undefined, arrays2: List<T> | null | undefined, arrays3: List<T> | null | undefined, ...comparator: Array<Comparator<T> | List<T> | null | undefined> ): T[];
    }
    interface ImpL<T> {
        unionWith( arrays2: List<T> | null | undefined, comparator?: Comparator<T> ): ImpL<T>;
        unionWith( ...comparator: Array<Comparator<T> | List<T> | null | undefined> ): ImpL<T>;
    }
    interface ExpL<T> {
        unionWith( arrays2: List<T> | null | undefined, comparator?: Comparator<T> ): ExpL<T>;
        unionWith( ...comparator: Array<Comparator<T> | List<T> | null | undefined> ): ExpL<T>;
    }
    interface Stat {
        uniq<T>( array: List<T> | null | undefined ): T[];
    }
    interface ImpL<T> {
        uniq(): ImpL<T>;
    }
    interface ExpL<T> {
        uniq(): ExpL<T>;
    }
    interface Stat {
        uniqBy<T>( array: List<T> | null | undefined, iteratee: ValueIteratee<T> ): T[];
    }
    interface ImpL<T> {
        uniqBy( iteratee: ValueIteratee<T> ): ImpL<T>;
    }
    interface ExpL<T> {
        uniqBy( iteratee: ValueIteratee<T> ): ExpL<T>;
    }
    interface Stat {
        uniqWith<T>( array: List<T> | null | undefined, comparator?: Comparator<T> ): T[];
    }
    interface ImpL<T> {
        uniqWith( comparator?: Comparator<T> ): ImpL<T>;
    }
    interface ExpL<T> {
        uniqWith( comparator?: Comparator<T> ): ExpL<T>;
    }
    interface Stat {
        unzip<T>(array: T[][] | List<List<T>> | null | undefined): T[][];
    }
    interface ImpL<T> {
        unzip<T1>(this: ImpL<List<T1>>): ImpL<T1[]>;
    }
    interface ExpL<T> {
        unzip<T1>(this: ExpL<List<T1>>): ExpL<T1[]>;
    }
    interface Stat {
        unzipWith<T, TResult>( array: List<List<T>> | null | undefined, iteratee: (...values: T[]) => TResult ): TResult[];
        unzipWith<T>( array: List<List<T>> | null | undefined ): T[][];
    }
    interface ImpL<T> {
        unzipWith<T1, TResult>( this: Imp<List<T1>>, iteratee: (...values: T1[]) => TResult ): Imp<TResult[]>;
        unzipWith<T1>( this: Imp<List<T1>> ): ImpL<T1[]>;
    }
    interface ExpL<T> {
        unzipWith<T1, TResult>( this: ExpL<List<T1>>, iteratee: (...values: T1[]) => TResult ): Exp<TResult[]>;
        unzipWith<T1>( this: Exp<List<T1>> ): ExpL<T1[]>;
    }
    interface Stat {
        without<T>( array: List<T> | null | undefined, ...values: T[] ): T[];
    }
    interface ImpL<T> {
        without( ...values: T[] ): ImpL<T>;
    }
    interface ExpL<T> {
        without( ...values: T[] ): ExpL<T>;
    }
    interface Stat {
        xor<T>(...arrays: Array<List<T> | null | undefined>): T[];
    }
    interface ImpL<T> {
        xor( ...arrays: Array<List<T> | null | undefined> ): ImpL<T>;
    }
    interface ExpL<T> {
        xor( ...arrays: Array<List<T> | null | undefined> ): ExpL<T>;
    }
    interface Stat {
        xorBy<T>( arrays: List<T> | null | undefined, iteratee?: ValueIteratee<T> ): T[];
        xorBy<T>( arrays: List<T> | null | undefined, arrays2: List<T> | null | undefined, iteratee?: ValueIteratee<T> ): T[];
        xorBy<T>( arrays: List<T> | null | undefined, arrays2: List<T> | null | undefined, arrays3: List<T> | null | undefined, ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined> ): T[];
    }
    interface ImpL<T> {
        xorBy( arrays2: List<T> | null | undefined, iteratee?: ValueIteratee<T> ): ImpL<T>;
        xorBy( ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined> ): ImpL<T>;
    }
    interface ExpL<T> {
        xorBy( arrays2: List<T> | null | undefined, iteratee?: ValueIteratee<T> ): ExpL<T>;
        xorBy( ...iteratee: Array<ValueIteratee<T> | List<T> | null | undefined> ): ExpL<T>;
    }
    interface Stat {
        xorWith<T>( arrays: List<T> | null | undefined, comparator?: Comparator<T> ): T[];
        xorWith<T>( arrays: List<T> | null | undefined, arrays2: List<T> | null | undefined, comparator?: Comparator<T> ): T[];
        xorWith<T>( arrays: List<T> | null | undefined, arrays2: List<T> | null | undefined, arrays3: List<T> | null | undefined, ...comparator: Array<Comparator<T> | List<T> | null | undefined> ): T[];
    }
    interface ImpL<T> {
        xorWith( arrays2: List<T> | null | undefined, comparator?: Comparator<T> ): ImpL<T>;
        xorWith( ...comparator: Array<Comparator<T> | List<T> | null | undefined> ): ImpL<T>;
    }
    interface ExpL<T> {
        xorWith( arrays2: List<T> | null | undefined, comparator?: Comparator<T> ): ExpL<T>;
        xorWith( ...comparator: Array<Comparator<T> | List<T> | null | undefined> ): ExpL<T>;
    }
    interface Stat {
        zip<T1, T2>(arrays1: List<T1>, arrays2: List<T2>): Array<[T1 | undefined, T2 | undefined]>;
        zip<T1, T2, T3>(arrays1: List<T1>, arrays2: List<T2>, arrays3: List<T3>): Array<[T1 | undefined, T2 | undefined, T3 | undefined]>;
        zip<T1, T2, T3, T4>(arrays1: List<T1>, arrays2: List<T2>, arrays3: List<T3>, arrays4: List<T4>): Array<[T1 | undefined, T2 | undefined, T3 | undefined, T4 | undefined]>;
        zip<T1, T2, T3, T4, T5>(arrays1: List<T1>, arrays2: List<T2>, arrays3: List<T3>, arrays4: List<T4>, arrays5: List<T5>): Array<[T1 | undefined, T2 | undefined, T3 | undefined, T4 | undefined, T5 | undefined]>;
        zip<T>(...arrays: Array<List<T> | null | undefined>): Array<Array<T | undefined>>;
    }
    interface ImpL<T> {
        zip<T2>( arrays2: List<T2>, ): ImpL<[T | undefined, T2 | undefined]>;
        zip( ...arrays: Array<List<T> | null | undefined> ): ImpL<Array<T | undefined>>;
    }
    interface ExpL<T> {
        zip<T2>( arrays2: List<T2>, ): Exp<[T | undefined, T2 | undefined]>;
        zip( ...arrays: Array<List<T> | null | undefined> ): Exp<Array<T | undefined>>;
    }
    interface Stat {
        zipObject<T>( props: List<PropertyName>, values: List<T> ): Dictionary<T>;
        zipObject( props?: List<PropertyName> ): Dictionary<undefined>;
    }
    interface ImpL<T> {
        zipObject<U>( values: List<U> ): Imp<Dictionary<T>>;
        zipObject(): Imp<Dictionary<undefined>>;
    }
    interface ExpL<T> {
        zipObject<U>( values: List<U> ): Exp<Dictionary<U>>;
        zipObject(): Exp<Dictionary<undefined>>;
    }
    interface Stat {
        zipObjectDeep( paths?: List<PropertyPath>, values?: List<any> ): object;
    }
    interface ImpL<T> {
        zipObjectDeep( values?: List<any> ): ImpO<object>;
    }
    interface ExpL<T> {
        zipObjectDeep(values?: List<any> ): ExpO<object>;
    }
    interface Stat {
        zipWith<T, TResult>( arrays: List<T>, iteratee: (value1: T) => TResult ): TResult[];
        zipWith<T1, T2, TResult>( arrays1: List<T1>, arrays2: List<T2>, iteratee: (value1: T1, value2: T2) => TResult ): TResult[];
        zipWith<T1, T2, T3, TResult>( arrays1: List<T1>, arrays2: List<T2>, arrays3: List<T3>, iteratee: (value1: T1, value2: T2, value3: T3) => TResult ): TResult[];
        zipWith<T1, T2, T3, T4, TResult>( arrays1: List<T1>, arrays2: List<T2>, arrays3: List<T3>, arrays4: List<T4>, iteratee: (value1: T1, value2: T2, value3: T3, value4: T4) => TResult ): TResult[];
        zipWith<T1, T2, T3, T4, T5, TResult>( arrays1: List<T1>, arrays2: List<T2>, arrays3: List<T3>, arrays4: List<T4>, arrays5: List<T5>, iteratee: (value1: T1, value2: T2, value3: T3, value4: T4, value5: T5) => TResult ): TResult[];
        zipWith<T, TResult>( ...iteratee: Array<((...group: T[]) => TResult) | List<T> | null | undefined> ): TResult[];
    }
    interface ImpL<T> {
        zipWith<T2, TResult>(arrays2: List<T2>, iteratee: (value1: T, value2: T2) => TResult ): ImpL<TResult>;
        zipWith<T2, T3, TResult>( arrays2: List<T2>, arrays3: List<T3>, iteratee: (value1: T, value2: T2, value3: T3) => TResult ): ImpL<TResult>;
        zipWith<TResult>( ...iteratee: Array<((...group: T[]) => TResult) | List<T> | null | undefined> ): ImpL<TResult>;
    }
    interface ExpL<T> {
        zipWith<T2, TResult>( arrays2: List<T2>, iteratee: (value1: T, value2: T2) => TResult ): ExpL<TResult>;
        zipWith<T2, T3, TResult>( arrays2: List<T2>, arrays3: List<T3>, iteratee: (value1: T, value2: T2, value3: T3) => TResult ): ExpL<TResult>;
        zipWith<TResult>( ...iteratee: Array<((...group: T[]) => TResult) | List<T> | null | undefined> ): ExpL<TResult>;
    }
}
