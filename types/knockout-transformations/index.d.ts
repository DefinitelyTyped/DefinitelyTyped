// Type definitions for knockout-transformations 2.0.0
// Project: https://github.com/One-com/knockout-transformations
// Definitions by: John Reilly <https://github.com/johnnyreilly>, Wim Looman <https://github.com/Nemo157>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="knockout" />

declare namespace KnockoutTransformations {
    interface Mapping<T, TResult> {
        (value: T): TResult;
    }
    interface MappingOption<T, TResult> {
        mapping: Mapping<T, TResult>;
        disposeItem?: (item: TResult) => void;
    }
    interface MappingWithDisposeCallbackOption<T, TResult> {
        mappingWithDisposeCallback: (value: T) => {
            mappedValue: TResult;
            dispose: () => void;
        };
    }
}

interface KnockoutObservableArrayFunctions<T> {
    map<TResult>(mapping: KnockoutTransformations.Mapping<T, TResult>): KnockoutObservableArray<TResult>;
    map<TResult>(mapping: KnockoutTransformations.MappingOption<T, TResult>): KnockoutObservableArray<TResult>;
    map<TResult>(mapping: KnockoutTransformations.MappingWithDisposeCallbackOption<T, TResult>): KnockoutObservableArray<TResult>;

    filter(predicate: (value: T) => boolean): KnockoutObservableArray<T>;
    sortBy(sorter: (value: T, descending: (sorter: any) => any) => any): KnockoutObservableArray<T>;
    indexBy(indexer: (value: T) => string): KnockoutObservable<{ [index: string]: T[] }>;
    indexBy(indexer: (value: T) => string[]): KnockoutObservable<{ [index: string]: T[] }>;
    indexBy(indexer: (value: T) => any): KnockoutObservable<any>;
    uniqueIndexBy(indexer: (value: T) => string): KnockoutObservable<{ [index: string]: T }>;
}
