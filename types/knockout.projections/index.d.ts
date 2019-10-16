// Type definitions for knockout-projections 1.0.0
// Project: https://github.com/stevesanderson/knockout-projections
// Definitions by: John Reilly <https://github.com/johnnyreilly>
//                 Michael Kriese <https://github.com/viceice>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

/// <reference types="knockout" />

interface KnockoutMappedObservableArray<T> extends ko.ObservableArray<T>, ko.Subscription {}

declare namespace ko {
    interface ObservableArrayFunctions<T> {
        map<TResult>(mappingOptions: {
            mappingWithDisposeCallback: (
                value: T,
            ) => {
                mappedValue: TResult;
                dispose: () => void;
            };
        }): KnockoutMappedObservableArray<TResult>;
        map<TResult>(mappingOptions: {
            mapping: (value: T) => TResult;
            disposeItem?: (mappedItem: TResult) => void;
        }): KnockoutMappedObservableArray<TResult>;
        map<TResult>(mappingOptions: (value: T) => TResult): KnockoutMappedObservableArray<TResult>;

        filter(predicate: (value: T) => boolean): KnockoutMappedObservableArray<T>;
    }
}
