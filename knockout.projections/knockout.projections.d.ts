// Type definitions for knockout-projections 1.0.0
// Project: https://github.com/stevesanderson/knockout-projections
// Definitions by: John Reilly <https://github.com/johnnyreilly>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../knockout/knockout.d.ts" />

interface KnockoutMappedObservableArray<T> extends KnockoutObservableArray<T>, KnockoutSubscription {
}

interface KnockoutObservableArrayFunctions<T> {
    map<TResult>(mappingOptions: {
        mappingWithDisposeCallback: (value: T) => {
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
