// Type definitions for valiant 2.0
// Project: https://github.com/tweetdeck/valiant#readme
// Definitions by: whatasoda <https://github.com/whatasoda>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export as namespace Valiant;

export function createInterval<T = number>(compareValues?: IntervalConstructor<T>['compareValues']): IntervalConstructor<T>;

export interface IntervalConstructor<T = number> {
    new (from: Endpoint<T>, to: Endpoint<T>): Interval<T>;
    prototype: Interval<T>;
    empty: Interval<T>;
    whole: Interval<T>;
    negInf: Endpoint<T>;
    posInf: Endpoint<T>;
    negativeInfinity: Endpoint<T>;
    positiveInfinity: Endpoint<T>;
    adjacentEndpoint(endpoint: Endpoint<T>): Endpoint<T>;
    compareEndpoints(a: Endpoint<T>, b: Endpoint<T>): number;
    compareValues(a: T, b: T): number;
    excEnd(value: T): Endpoint<T>;
    exclusiveEndpoint(value: T): Endpoint<T>;
    incEnd(value: T): Endpoint<T>;
    inclusiveEndpoint(value: T): Endpoint<T>;
    singleton(value: T): Interval<T>;
}

export interface Interval<T = number> {
    constructor: IntervalConstructor;
    empty: boolean;
    from: Endpoint<T>;
    to: Endpoint<T>;
    hull(interval: Interval<T>): Interval<T>;
    unify(interval: Interval<T>): Interval<T>;
    isEmpty(): boolean;
    equalTo(interval: Interval<T>): boolean;
    contains(value: T): boolean;
    isSubsetOf(interval: Interval<T>): boolean;
    intersection(interval: Interval<T>): boolean;
    contiguousWith(interval: Interval<T>): boolean;
    fromComparator(a: Endpoint<T>, b: Endpoint<T>): number;
    toComparator(a: Endpoint<T>, b: Endpoint<T>): number;
}

export interface Endpoint<T = number> {
    finite: boolean;
    inclusive: boolean;
    value: T;
}
