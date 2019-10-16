// Type definitions for knockout-transformations 2.0.0
// Project: https://github.com/One-com/knockout-transformations
// Definitions by: John Reilly <https://github.com/johnnyreilly>
//                 Wim Looman <https://github.com/Nemo157>
//                 Michael Kriese <https://github.com/viceice>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

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
        mappingWithDisposeCallback: (
            value: T,
        ) => {
            mappedValue: TResult;
            dispose: () => void;
        };
    }
}

declare namespace ko {
    interface ObservableArrayFunctions<T> {
        map<TResult>(mapping: KnockoutTransformations.Mapping<T, TResult>): ObservableArray<TResult>;
        map<TResult>(mapping: KnockoutTransformations.MappingOption<T, TResult>): ObservableArray<TResult>;
        map<TResult>(
            mapping: KnockoutTransformations.MappingWithDisposeCallbackOption<T, TResult>,
        ): ObservableArray<TResult>;

        filter(predicate: (value: T) => boolean): ObservableArray<T>;
        sortBy(sorter: (value: T, descending: (sorter: any) => any) => any): ObservableArray<T>;
        indexBy(indexer: (value: T) => string): Observable<{ [index: string]: T[] }>;
        indexBy(indexer: (value: T) => string[]): Observable<{ [index: string]: T[] }>;
        indexBy(indexer: (value: T) => any): Observable;
        uniqueIndexBy(indexer: (value: T) => string): Observable<{ [index: string]: T }>;
    }
}
