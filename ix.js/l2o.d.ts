// Type definitions for IxJS 1.0.6
// Project: https://github.com/Reactive-Extensions/IxJS
// Definitions by: Igor Oleinikov <https://github.com/Igorbek>

declare module Ix {
    export interface Enumerator<T> {
        moveNext(): boolean;
        getCurrent(): T;
        dispose();
    }

    export interface EnumeratorStatic {
        new<T>(moveNext: () => boolean, getCurrent: () => T, dispose: () => void): Enumerator<T>;
        create<T>(moveNext: () => boolean, getCurrent: () => T, dispose?: () => void): Enumerator<T>;
    }

    var Enumerator: EnumerableStatic;

    export interface EnumerableFunc<T, TResult> {
        (item: T, index: number, self: Enumerable<T>): TResult;
    }
    export interface EnumerablePredicate<T> extends EnumerableFunc<T, boolean> { }
    export interface Predicate<T> {
        (item: T): boolean;
    }
    export interface EqualityComparer<T1, T2> {
        (item1: T1, item2: T2): boolean;
    }

    export interface Enumerable<T> {
        // base functions
        getEnumerator(): Enumerator<T>;

        // "extension" functions

        aggregate<TAccumulate, TResult>(seed: TAccumulate, func: (accumulate: TAccumulate, current: T, index: number, self: Enumerable<T>) => TAccumulate, resultSelector: (accumulate: TAccumulate) => TResult): TResult;
        aggregate<TAccumulate>(seed: TAccumulate, func: (accumulate: TAccumulate, current: T, index: number, self: Enumerable<T>) => TAccumulate): TAccumulate;
        aggregate(func: (accumulate: T, current: T, index: number, self: Enumerable<T>) => T): T;

        reduce(func: (accumulate: T, current: T, index: number, self: Enumerable<T>) => T): T;
        reduce<TAccumulate>(func: (accumulate: TAccumulate, current: T, index: number, self: Enumerable<T>) => TAccumulate, seed: TAccumulate): TAccumulate;

        all(predicate: EnumerablePredicate<T>, thisArg?: any): boolean;
        every(predicate: EnumerablePredicate<T>, thisArg?: any): boolean; // alias

        any(predicate?: EnumerablePredicate<T>, thisArg?: any): boolean;
        some(predicate?: EnumerablePredicate<T>, thisArg?: any): boolean; // alias

        average(selector?: EnumerableFunc<T, number>): number;
        max(selector?: EnumerableFunc<T, number>): number;
        min(selector?: EnumerableFunc<T, number>): number;
        sum(selector?: EnumerableFunc<T, number>): number;

        concat<T>(...sources: Enumerable<T>[]): Enumerable<T>;

        contains<TValue>(value: TValue, comparer: EqualityComparer<T, TValue>): boolean;
        contains(value: any): boolean;

        count(predicate?: EnumerablePredicate<T>, thisArg?: any): number;

        defaultIfEmpty(defaultValue: T): Enumerable<T>;

        distinct(comparer?: EqualityComparer<T, T>): Enumerable<T>;

        elementAt(index: number): T;
        elementAtOrDefault(index: number): T;

        except(second: Enumerable<T>, comparer?: EqualityComparer<T, T>): Enumerable<T>;

        first(predicate?: Predicate<T>): T;
        firstOrDefault(predicate?: Predicate<T>): T;
        last(predicate?: Predicate<T>): T;
        lastOrDefault(predicate?: Predicate<T>): T;
        single(predicate?: Predicate<T>): T;
        singleOrDefault(predicate?: Predicate<T>): T;

        forEach(action: EnumerableFunc<T, void>, thisArg?: any): void;

        groupBy<TKey, TElement, TResult>(
            keySelector: (item: T) => TKey,
            elementSelector: (item: T) => TElement,
            resultSelector: (key: TKey, values: Enumerable<TElement>) => TResult,
            comparer?: EqualityComparer<TKey, TKey>): Enumerable<TResult>;
        groupBy<TKey, TElement>(
            keySelector: (item: T) => TKey,
            elementSelector: (item: T) => TElement): Grouping<TKey, TElement>;
        groupBy<TKey>(
            keySelector: (item: T) => TKey): Grouping<TKey, T>;

        // if need to set comparer without resultSelector
        groupBy<TKey, TElement>(
            keySelector: (item: T) => TKey,
            elementSelector: (item: T) => TElement,
            _: boolean,
            comparer: EqualityComparer<TKey, TKey>): Grouping<TKey, TElement>;
        // if need to set resultSelector without elementSelector
        groupBy<TKey, TResult>(
            keySelector: (item: T) => TKey,
            _: boolean,
            resultSelector: (key: TKey, values: Enumerable<T>) => TResult,
            comparer?: EqualityComparer<TKey, TKey>): Enumerable<TResult>;
        // if need to set comparer without elementSelector and resultSelector
        groupBy<TKey>(
            keySelector: (item: T) => TKey,
            _: boolean,
            __: boolean,
            comparer: EqualityComparer<TKey, TKey>): Grouping<TKey, T>;

        groupJoin<TInner, TOuterKey, TInnerKey, TResult>(
            inner: Enumerable<TInner>,
            outerKeySelector: (item: T) => TOuterKey,
            innerKeySelector: (item: TInner) => TInnerKey,
            resultSelector: (outer: T, innerSequence: Enumerable<TInner>) => TResult,
            comparer: EqualityComparer<TOuterKey, TInnerKey>): Enumerable<TResult>;
        groupJoin<TInner, TKey, TResult>(
            inner: Enumerable<TInner>,
            outerKeySelector: (item: T) => TKey,
            innerKeySelector: (item: TInner) => TKey,
            resultSelector: (outer: T, innerSequence: Enumerable<TInner>) => TResult): Enumerable<TResult>;

        join<TInner, TOuterKey, TInnerKey, TResult>(
            inner: Enumerable<TInner>,
            outerKeySelector: (item: T) => TOuterKey,
            innerKeySelector: (item: TInner) => TInnerKey,
            resultSelector: (outer: T, inner: TInner) => TResult,
            comparer: EqualityComparer<TOuterKey, TInnerKey>): Enumerable<TResult>;
        join<TInner, TKey, TResult>(
            inner: Enumerable<TInner>,
            outerKeySelector: (item: T) => TKey,
            innerKeySelector: (item: TInner) => TKey,
            resultSelector: (outer: T, inner: TInner) => TResult): Enumerable<TResult>;

        intersect<TSecond>(second: Enumerable<TSecond>, comparer: EqualityComparer<T, TSecond>): Enumerable<T>;
        intersect(second: Enumerable<T>): Enumerable<T>;
        union(second: Enumerable<T>, comparer?: EqualityComparer<T, T>): Enumerable<T>;

        orderBy<TKey>(keySelector: (item: T) => TKey, comparer?: EqualityComparer<TKey, TKey>): OrderedEnumerable<T>;
        orderByDescending<TKey>(keySelector: (item: T) => TKey, comparer?: EqualityComparer<TKey, TKey>): OrderedEnumerable<T>;

        reverse(): Enumerable<T>;

        select<TResult>(selector: EnumerableFunc<T, TResult>, thisArg?: any): Enumerable<TResult>;
        map<TResult>(selector: EnumerableFunc<T, TResult>, thisArg?: any): Enumerable<TResult>;

        selectMany<TCollection, TResult>(collectionSelector: (item: T, index: number) => Enumerable<TCollection>,
            resultSelector: (outer: T, inner: TCollection) => TResult): Enumerable<TResult>;
        selectMany<TCollection>(collectionSelector: (item: T, index: number) => Enumerable<TCollection>): Enumerable<TCollection>;

        sequenceEqual<TSecond>(second: Enumerable<TSecond>, comparer: EqualityComparer<T, TSecond>): boolean;
        sequenceEqual(second: Enumerable<T>): boolean;

        skip(count: number): Enumerable<T>;
        skipWhile(selector: EnumerablePredicate<T>, thisArg?: any): Enumerable<T>;
        take(count: number): Enumerable<T>;
        takeWhile(selector: EnumerablePredicate<T>, thisArg?: any): Enumerable<T>;

        toArray(): T[];

        toDictionary<TKey, TValue>(
            keySelector: (item: T) => TKey,
            elementSelector: (item: T) => TValue,
            comparer?: EqualityComparer<TKey, TKey>): Dictionary<TKey, TValue>;
        toDictionary<TKey>(
            keySelector: (item: T) => TKey): Dictionary<TKey, T>;
        // if need to set comparer without elementSelector
        toDictionary<TKey>(
            keySelector: (item: T) => TKey,
            _: boolean,
            comparer: EqualityComparer<TKey, TKey>): Dictionary<TKey, T>;

        toLookup<TKey, TValue>(
            keySelector: (item: T) => TKey,
            elementSelector: (item: T) => TValue,
            comparer?: EqualityComparer<TKey, TKey>): Lookup<TKey, TValue>;
        toLookup<TKey>(
            keySelector: (item: T) => TKey): Lookup<TKey, T>;
        // if need to set comparer without elementSelector
        toLookup<TKey>(
            keySelector: (item: T) => TKey,
            _: boolean,
            comparer: EqualityComparer<TKey, TKey>): Lookup<TKey, T>;

        where(selector: EnumerablePredicate<T>, thisArg?: any): Enumerable<T>;
        filter(selector: EnumerablePredicate<T>, thisArg?: any): Enumerable<T>;

        zip<TRight, TResult>(right: Enumerable<TRight>, selector: (left: T, right: TRight) => TResult): Enumerable<TResult>;
    }

    export interface Grouping<TKey, T> extends Enumerable<T> {
        key: TKey;
    }

    export interface OrderedEnumerable<T> extends Enumerable<T> {
        thenBy<TKey>(keySelector: (item: T) => TKey, comparer?: EqualityComparer<TKey, TKey>): OrderedEnumerable<T>;
        thenByDescending<TKey>(keySelector: (item: T) => TKey, comparer?: EqualityComparer<TKey, TKey>): OrderedEnumerable<T>;
    }

    class Dictionary<TKey, TValue> {
        constructor(capacity, comparer?: EqualityComparer<TKey, TKey>);

        toEnumerable(): Enumerable<KeyValuePair<TKey, TValue>>;
        add(key: TKey, value: TValue): void;
        remove(key: TKey): boolean;
        clear(): void;
        length(): number;
        tryGetValue(key: TKey): TValue;
        get(key: TKey): TValue;
        set(key: TKey, value: TValue): void;
        getValues(): TValue[];
        has(key: TKey): boolean;
    }

    export interface KeyValuePair<TKey, TValue> {
        key: TKey;
        value: TValue;
    }

    export interface Lookup<TKey, TValue> {
        toEnumerable(): Enumerable<Grouping<TKey, TValue>>;
        has(key: TKey): boolean;
        length(): number;
        get(key: TKey): Enumerable<TValue>;
    }

    export interface EnumerableStatic {
        new <T>(getEnumerator: () => Enumerator<T>): Enumerable<T>;
        create<T>(getEnumerator: () => Enumerator<T>): Enumerable<T>;

        concat<T>(...sources: Enumerable<T>[]): Enumerable<T>;
        empty<T>(): Enumerable<T>;
        fromArray<T>(array: T[]): Enumerable<T>;
        returnValue<T>(value: T): Enumerable<T>;
        range(start: number, count: number): Enumerable<number>;
        repeat<T>(value: T, repeatCount?: number): Enumerable<T>;

        sequenceEqual<TFirst, TSecond>(first: Enumerable<TFirst>, second: Enumerable<TSecond>, comparer: EqualityComparer<TFirst, TSecond>): boolean;
        sequenceEqual<T>(first: Enumerable<T>, second: Enumerable<T>): boolean;
    }

    var Enumerable: EnumerableStatic;
}