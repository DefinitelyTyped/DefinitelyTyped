// Type definitions for knockout-transformations 2.0.0
// Project: https://github.com/One-com/knockout-transformations
// Definitions by: John Reilly <https://github.com/johnnyreilly>, Wim Looman <https://github.com/Nemo157>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../knockout/knockout.d.ts" />

interface KnockoutObservableArrayFunctions<T> {
    map<TResult>(mapping: (value: T) => TResult): KnockoutObservableArray<TResult>;
    filter(predicate: (value: T) => boolean): KnockoutObservableArray<T>;
    sortBy(sorter: (value: T, descending: (sorter: any) => any) => any): KnockoutObservableArray<T>;
    indexBy(indexer: (value: T) => string): KnockoutObservable<{ [index: string]: T[] }>;
    indexBy(indexer: (value: T) => string[]): KnockoutObservable<{ [index: string]: T[] }>;
    indexBy(indexer: (value: T) => any): KnockoutObservable<any>;
    uniqueIndexBy(indexer: (value: T) => string): KnockoutObservable<{ [index: string]: T }>;
}
