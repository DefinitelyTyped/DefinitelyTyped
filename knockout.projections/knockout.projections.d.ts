// Type definitions for knockout-projections 1.0.0
// Project: https://github.com/stevesanderson/knockout-projections
// Definitions by: John Reilly <https://github.com/johnnyreilly>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../knockout/knockout.d.ts" />

interface KnockoutObservableArrayFunctions<T> {

    map<TResult>(mapping: (value: T) => TResult): KnockoutObservableArray<TResult>;
    filter(predicate: (value: T) => boolean): KnockoutObservableArray<T>;
}
