/// <reference types="knockout" />

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
        disposeItem?: ((mappedItem: TResult) => void) | undefined;
    }): KnockoutMappedObservableArray<TResult>;
    map<TResult>(mappingOptions: (value: T) => TResult): KnockoutMappedObservableArray<TResult>;

    filter(predicate: (value: T) => boolean): KnockoutMappedObservableArray<T>;
}
