// Type definitions for Underscore-ko 1.2.2 with underscore 1.4
// Project: https://github.com/kamranayub/UnderscoreKO
// Definitions by: Maurits Elbers <https://github.com/MagicMau/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../knockout/knockout.d.ts" />
/// <reference path="../underscore/underscore.d.ts" />

interface KnockoutObservableArrayFunctions {

    /****
     Collections
    *****/
    each(iterator: ListIterator, context?: any): any[];
    each(iterator: ObjectIterator, context?: any): any[];
    forEach(iterator: ObjectIterator, context?: any): any[];
    forEach(iterator: ListIterator, context?: any): any[];

    map(iterator: ListIterator, context?: any): any[];
    map(iterator: ObjectIterator, context?: any): any[];
    collect(iterator: ListIterator, context?: any): any[];
    collect(iterator: ObjectIterator, context?: any): any[];

    reduce(iterator: any, memo: any, context?: any): any;
    inject(iterator: any, memo: any, context?: any): any;
    foldl(iterator: any, memo: any, context?: any): any;

    reduceRight(iterator: any, memo: any, context?: any): any[];
    foldr(iterator: any, memo: any, context?: any): any[];

    find(iterator: any, context?: any): any;
    detect(iterator: any, context?: any): any;

    filter(iterator: any, context?: any): any[];
    select(iterator: any, context?: any): any[];

    where(properties: any): any[];

    reject(iterator: any, context?: any): any[];

    all(iterator: any, context?: any): bool;
    every(iterator: any, context?: any): bool;

    any(iterator?: any, context?: any): bool;
    some(iterator?: any, context?: any): bool;

    contains(list: any, value: any): bool;
    contains(value: any): bool;
    include(list: any, value: any): bool;
    include(value: any): bool;

    invoke(methodName: string, arguments: any[]): any;
    invoke(methodName: string, ...arguments: any[]): any;

    pluck(propertyName: string): string[];
    max(iterator?: any, context?: any): any;
    min(iterator?: any, context?: any): any;
    sortBy(iterator?: any, context?: any): any;
    groupBy(iterator: any): any;
    countBy(iterator: any): any;
    shuffle(): any[];
    size(): number;

    /****
     Arrays
    *****/
    first(n?: number): any;
    head(n?: number): any;
    take(n?: number): any;

    initial(n?: number): any[];

    last(n?: number): any;

    rest(n?: number): any[];
    tail(n?: number): any[];
    drop(n?: number): any[];

    compact(): any[];
    flatten(shallow?: bool): any[];
    without(...values: any[]): any[];
    union(...arrays: any[][]): any[];
    intersection(...arrays: any[][]): any[];
    difference(...others: any[][]): any[];

    uniq(isSorted?: bool, iterator?: any): any[];
    unique(isSorted?: bool, iterator?: any): any[];

    zip(...arrays: any[]): any[];
    object(values?: any[]): any;
    indexOf(value: any, isSorted?: bool): number;
    lastIndexOf(value: any, fromIndex?: number): number;
    sortedIndex(valueL: any, iterator?: any): number;
    range(stop: number): any[];
    range(start: number, stop: number, step?: number): any[];

    /****
     Chaining
    *****/
    chain(object: any): UnderscoreWrappedObject;
}
