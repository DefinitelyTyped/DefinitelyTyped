// Type definitions for Underscore-ko 1.2.2 with underscore 1.4
// Project: https://github.com/kamranayub/UnderscoreKO
// Definitions by: Maurits Elbers <https://github.com/MagicMau>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="knockout" />

import * as _ from 'underscore';

interface KnockoutObservableArrayFunctions<T> {

  /* **
   Collections
  *****/
    each<TResult>(iterator: _.ListIterator<T, TResult>, context?: any): TResult[];
    each<TResult>(iterator: _.ObjectIterator<T, TResult>, context?: any): TResult[];
    forEach<TResult>(iterator: _.ObjectIterator<T, TResult>, context?: any): TResult[];
    forEach<TResult>(iterator: _.ListIterator<T, TResult>, context?: any): TResult[];

    map<TResult>(iterator: _.ListIterator<T, TResult>, context?: any): TResult[];
    map<TResult>(iterator: _.ObjectIterator<T, TResult>, context?: any): TResult[];
    collect<TResult>(iterator: _.ListIterator<T, TResult>, context?: any): TResult[];
    collect<TResult>(iterator: _.ObjectIterator<T, TResult>, context?: any): TResult[];

    reduce<TResult>(iterator: _.MemoIterator<T, TResult>, memo: TResult, context?: any): TResult;
    inject<TResult>(iterator: _.MemoIterator<T, TResult>, memo: TResult, context?: any): TResult;
    foldl<TResult>(iterator: _.MemoIterator<T, TResult>, memo: TResult, context?: any): TResult;

    reduceRight<TResult>(iterator: _.MemoIterator<T, TResult>, memo: TResult, context?: any): TResult;
    foldr<TResult>(iterator: _.MemoIterator<T, TResult>, memo: TResult, context?: any): TResult;

    find(iterator: _.ListIterator<T, boolean>, context?: any): T;
    detect(iterator: _.ListIterator<T, boolean>, context?: any): T;

    filter(iterator: _.ListIterator<T, boolean>, context?: any): T[];
    filter_(iterator: _.ListIterator<T, boolean>, context?: any): T[];
    select(iterator: _.ListIterator<T, boolean>, context?: any): T[];
    select_(iterator: _.ListIterator<T, boolean>, context?: any): T[];

    where<U extends {}>(properties: U): T[];

    reject(iterator: _.ListIterator<T, boolean>, context?: any): T[];
    reject_(iterator: _.ListIterator<T, boolean>, context?: any): T[];

    all(iterator: _.ListIterator<T, boolean>, context?: any): boolean;
    every(iterator: _.ListIterator<T, boolean>, context?: any): boolean;

    any(iterator?: _.ListIterator<T, boolean>, context?: any): boolean;
    some(iterator?: _.ListIterator<T, boolean>, context?: any): boolean;

    contains(value: T): boolean;
    include(value: T): boolean;

    invoke(methodName: string, ...args: any[]): any;
    invoke_(methodName: string, ...args: any[]): any;

    pluck(propertyName: string): T[];
    max(iterator: _.ListIterator<T, any>, context?: any): any;
    min(iterator: _.ListIterator<T, any>, context?: any): any;
    sortBy<TSort>(iterator: _.ListIterator<T, TSort>, context?: any): T[];
    sortBy(iterator: string, context?: any): T[];
    sortBy_<TSort>(iterator: _.ListIterator<T, TSort>, context?: any): T[];
    sortBy_(iterator: string, context?: any): T[];
    groupBy<TSort>(iterator: _.ListIterator<T, TSort>): _.Dictionary<T[]>;
    groupBy(iterator: string): _.Dictionary<T[]>;
    groupBy_<TSort>(iterator: _.ListIterator<T, TSort>): _.Dictionary<T[]>;
    groupBy_(iterator: string): _.Dictionary<T[]>;
    countBy(iterator: _.ListIterator<T, any>): _.Dictionary<number[]>;
    countBy(iterator: string): _.Dictionary<number[]>;
    shuffle(): T[];
    shuffle_(): T[];
    size(): number;

    /* **
     Arrays
    *****/
    first(): T;
    first(n: number): T[];
    head(): T;
    head(n: number): T[];
    take(): T;
    take(n: number): T[];

    initial(n?: number): T[];

    last(): T;
    last(n: number): T[];

    rest(n?: number): T[];
    rest_(n?: number): T[];
    tail(n?: number): T[];
    tail_(n?: number): T[];
    drop(n?: number): T[];
    drop_(n?: number): T[];

    compact(): T[];
    compact_(): T[];
    flatten(shallow?: boolean): any[];
    flatten_(shallow?: boolean): any[];
    without(...values: T[]): T[];
    without_(...values: T[]): T[];
    union(...arrays: T[][]): T[];
    union_(...arrays: T[][]): T[];
    intersection(...arrays: T[][]): T[];
    intersection_(...arrays: T[][]): T[];
    difference(...others: T[][]): T[];
    difference_(...others: T[][]): T[];

    uniq<TSort>(isSorted?: boolean, iterator?: _.ListIterator<T, TSort>): T[];
    uniq_<TSort>(isSorted?: boolean, iterator?: _.ListIterator<T, TSort>): T[];
    unique<TSort>(isSorted?: boolean, iterator?: _.ListIterator<T, TSort>): T[];
    unique_<TSort>(isSorted?: boolean, iterator?: _.ListIterator<T, TSort>): T[];

    zip(...arrays: any[]): any[];
    zip_(...arrays: any[]): any[];
    object(): any;
    indexOf(value: T, isSorted?: boolean): number;
    lastIndexOf(value: T, fromIndex?: number): number;
    lastIndexOf(value: T, isSorted?: boolean): number;
    sortedIndex<TSort>(value: T, iterator?: _.ListIterator<T, TSort>): number;
    range(stop: number): any[];
    range(start: number, stop: number, step?: number): any[];

    /* **
     Chaining
    *****/
    chain(object: any): any;
}
