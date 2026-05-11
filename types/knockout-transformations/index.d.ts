/// <reference types="knockout" />

declare namespace KnockoutTransformations {
    interface Mapping<T, TResult> {
        (value: T): TResult;
    }
    interface MappingOption<T, TResult> {
        mapping: Mapping<T, TResult>;
        disposeItem?: ((item: TResult) => void) | undefined;
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
    map<TResult>(
        mapping: KnockoutTransformations.MappingWithDisposeCallbackOption<T, TResult>,
    ): KnockoutObservableArray<TResult>;

    filter(predicate: (value: T) => boolean): KnockoutObservableArray<T>;
    sortBy(sorter: (value: T, descending: (sorter: any) => any) => any): KnockoutObservableArray<T>;
    indexBy(indexer: (value: T) => string): KnockoutObservable<{ [index: string]: T[] }>;
    indexBy(indexer: (value: T) => string[]): KnockoutObservable<{ [index: string]: T[] }>;
    indexBy(indexer: (value: T) => any): KnockoutObservable<any>;
    uniqueIndexBy(indexer: (value: T) => string): KnockoutObservable<{ [index: string]: T }>;
}
