/// <reference path="linq-tests.ts" />
// Type definitions for linq.js 2.2
// Project: http://linqjs.codeplex.com/
// Definitions by: Marcin Najder <https://github.com/marcinnajder>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// todo: jQuery plugin, RxJS Binding

declare module linq {

    interface EnumerableStatic {
        Choice<T>(...contents: T[]): Enumerable<T>;
        Choice<T>(contents: T[]): Enumerable<T>;
        Cycle<T>(...contents: T[]): Enumerable<T>;
        Cycle<T>(contents: T[]): Enumerable<T>;
        Empty<T>(): Enumerable<T>;
        From<T>(obj: T[]): Enumerable<T>;
        From(obj: number): Enumerable<number>; // input number returns single number
        From(obj: string): Enumerable<string>; // input string returns sequence of characters
        From(obj: NodeList): Enumerable<Node>; // node list returns sequence of nodes
        From(obj: Object): Enumerable<KeyValuePair<string, any>>; // object returns sequence of key/value pairs
        Return<T>(element: T): Enumerable<T>;
        Matches<T>(input: string, pattern: RegExp): Enumerable<string>;
        Matches<T>(input: string, pattern: string, flags?: string): Enumerable<string>;
        Range(start: number, count: number, step?: number): Enumerable<number>;
        RangeDown(start: number, count: number, step?: number): Enumerable<number>;
        RangeTo(start: number, to: number, step?: number): Enumerable<number>;
        Repeat<T>(obj: any, count?: number): Enumerable<T>;
        RepeatWithFinalize<T>(initializer: () => T, finalizer: (resource: T) => void): Enumerable<T>;
        Generate<T>(func: () => T, count?: number): Enumerable<T>;
        Generate(func: string, count?: number): Enumerable<any>;
        ToInfinity(start?: number, step?: number): Enumerable<number>;
        ToNegativeInfinity(start?: number, step?: number): Enumerable<number>;
        Unfold<T>(seed, func: ($) => T): Enumerable<T>;
        Unfold(seed, func: string): Enumerable<any>;
    }

    interface Enumerable<T> {
        //Projection and Filtering Methods
        CascadeBreadthFirst(func: ($) => any[], resultSelector: (v, i: number) => any): Enumerable<any>;
        CascadeBreadthFirst(func: string, resultSelector: string): Enumerable<any>;
        CascadeDepthFirst(func: ($) => any[], resultSelector: (v, i: number) => any): Enumerable<any>;
        CascadeDepthFirst(func: string, resultSelector: string): Enumerable<any>;
        Flatten(...items: any[]): Enumerable<any>;
        Pairwise(selector: (prev, next) => any): Enumerable<any>;
        Pairwise(selector: string): Enumerable<any>;
        Scan(func: (a, b) => any): Enumerable<any>;
        Scan(func: string): Enumerable<any>;
        Scan(seed, func: (a, b) => any, resultSelector?: ($) => any): Enumerable<any>;
        Scan(seed, func: string, resultSelector?: string): Enumerable<any>;
        Select<TResult>(selector: ($: T, i: number) => TResult): Enumerable<TResult>;
        Select(selector: string): Enumerable<any>;
        SelectMany(collectionSelector: ($, i: number) => any[], resultSelector?: ($, item) => any): Enumerable<any>;
        SelectMany(collectionSelector: ($, i: number) => Enumerable<any>, resultSelector?: ($, item) => any): Enumerable<any>;
        SelectMany(collectionSelector: string, resultSelector?: string): Enumerable<any>;
        Where(predicate: ($, i: number) => boolean): Enumerable<any>;
        Where(predicate: string): Enumerable<any>;
        OfType(type: Function): Enumerable<any>;
        Zip(second: any[], selector: (v1, v2, i: number) => any): Enumerable<any>;
        Zip(second: any[], selector: string): Enumerable<any>;
        Zip(second: Enumerable<any>, selector: (v1, v2, i: number) => any): Enumerable<any>;
        Zip(second: Enumerable<any>, selector: string): Enumerable<any>;
        //Join Methods
        Join(inner: any[], outerKeySelector: (v1) => any, innerKeySelector: (v1) => any, resultSelector: (v1, v2) => any, compareSelector?: (v) => any): Enumerable<any>;
        Join(inner: any[], outerKeySelector: string, innerKeySelector: string, resultSelector: string, compareSelector?: string): Enumerable<any>;
        Join(inner: Enumerable<any>, outerKeySelector: (v1) => any, innerKeySelector: (v1) => any, resultSelector: (v1, v2) => any, compareSelector?: (v) => any): Enumerable<any>;
        Join(inner: Enumerable<any>, outerKeySelector: string, innerKeySelector: string, resultSelector: string, compareSelector?: string): Enumerable<any>;
        GroupJoin(inner: any[], outerKeySelector: (v1) => any, innerKeySelector: (v1) => any, resultSelector: (v1, v2: Enumerable<any>) => any, compareSelector?: (v) => any): Enumerable<any>;
        GroupJoin(inner: any[], outerKeySelector: string, innerKeySelector: string, resultSelector: string, compareSelector?: string): Enumerable<any>;
        GroupJoin(inner: Enumerable<any>, outerKeySelector: (v1) => any, innerKeySelector: (v1) => any, resultSelector: (v1, v2: Enumerable<any>) => any, compareSelector?: (v) => any): Enumerable<any>;
        GroupJoin(inner: Enumerable<any>, outerKeySelector: string, innerKeySelector: string, resultSelector: string, compareSelector?: string): Enumerable<any>;
        //Set Methods
        All(predicate: ($) => boolean): boolean;
        All(predicate: string): boolean;
        Any(predicate?: ($) => boolean): boolean;
        Any(predicate?: string): boolean;
        Concat(second: any[]): Enumerable<any>;
        Concat(second: Enumerable<any>): Enumerable<any>;
        Insert(index: number, second: any[]): Enumerable<any>;
        Insert(index: number, second: Enumerable<any>): Enumerable<any>;
        Alternate(value): Enumerable<any>;
        Contains(value, compareSelector?: ($) => any): boolean;
        Contains(value, compareSelector?: string): boolean;
        DefaultIfEmpty(defaultValue): Enumerable<any>;
        Distinct(compareSelector?: ($) => any): Enumerable<any>;
        Distinct(compareSelector?: string): Enumerable<any>;
        Except(second: any[], compareSelector?: ($) => any): Enumerable<any>;
        Except(second: any[], compareSelector?: string): Enumerable<any>;
        Except(second: Enumerable<any>, compareSelector?: ($) => any): Enumerable<any>;
        Except(second: Enumerable<any>, compareSelector?: string): Enumerable<any>;
        Intersect(second: any[], compareSelector?: ($) => any): Enumerable<any>;
        Intersect(second: any[], compareSelector?: string): Enumerable<any>;
        Intersect(second: Enumerable<any>, compareSelector?: ($) => any): Enumerable<any>;
        Intersect(second: Enumerable<any>, compareSelector?: string): Enumerable<any>;
        SequenceEqual(second: any[], compareSelector?: ($) => any): boolean;
        SequenceEqual(second: any[], compareSelector?: string): boolean;
        SequenceEqual(second: Enumerable<any>, compareSelector?: ($) => any): boolean;
        SequenceEqual(second: Enumerable<any>, compareSelector?: string): boolean;
        Union(second: any[], compareSelector?: ($) => any): Enumerable<any>;
        Union(second: any[], compareSelector?: string): Enumerable<any>;
        Union(second: Enumerable<any>, compareSelector?: ($) => any): Enumerable<any>;
        Union(second: Enumerable<any>, compareSelector?: string): Enumerable<any>;
        //Ordering Methods
        OrderBy(keySelector?: ($) => any): OrderedEnumerable<any>;
        OrderBy(keySelector?: string): OrderedEnumerable<any>;
        OrderByDescending(keySelector?: ($) => any): OrderedEnumerable<any>;
        OrderByDescending(keySelector?: string): OrderedEnumerable<any>;
        Reverse(): Enumerable<any>;
        Shuffle(): Enumerable<any>;
        //Grouping Methods
        GroupBy(keySelector: ($) => any, elementSelector?: ($) => any, resultSelector?: (key, e) => any, compareSelector?: ($) =>any): Enumerable<any>;
        GroupBy(keySelector: string, elementSelector?: string, resultSelector?: string, compareSelector?: string): Enumerable<any>;
        PartitionBy(keySelector: ($) => any, elementSelector?: ($) => any, resultSelector?: (key, e) => any, compareSelector?: ($) =>any): Enumerable<any>;
        PartitionBy(keySelector: string, elementSelector?: string, resultSelector?: string, compareSelector?: string): Enumerable<any>;
        BufferWithCount(count: number): Enumerable<any>;
        // Aggregate Methods
        Aggregate(func: (a, b) => any);
        Aggregate(seed, func: (a, b) => any, resultSelector?: ($) => any);
        Aggregate(func: string);
        Aggregate(seed, func: string, resultSelector?: string);
        Average(selector?: ($) => number): number;
        Average(selector?: string): number;
        Count(predicate?: ($) => boolean): number;
        Count(predicate?: string): number;
        Max(selector?: ($) => number): number;
        Max(selector?: string): number;
        Min(selector?: ($) => number): number;
        Min(selector?: string): number;
        MaxBy(selector: ($) => number): any;
        MaxBy(selector: string): any;
        MinBy(selector: ($) => number): any;
        MinBy(selector: string): any;
        Sum(selector?: ($) => number): number;
        Sum(selector?: string): number;
        //Paging Methods
        ElementAt(index: number): any;
        ElementAtOrDefault(index: number, defaultValue): any;
        First(predicate?: ($) => boolean): any;
        First(predicate?: string): any;
        FirstOrDefault(defaultValue, predicate?: ($) => boolean): any;
        FirstOrDefault(defaultValue, predicate?: string): any;
        Last(predicate?: ($) => boolean): any;
        Last(predicate?: string): any;
        LastOrDefault(defaultValue, predicate?: ($) => boolean): any;
        LastOrDefault(defaultValue, predicate?: string): any;
        Single(predicate?: ($) => boolean): any;
        Single(predicate?: string): any;
        SingleOrDefault(defaultValue, predicate?: ($) => boolean): any;
        SingleOrDefault(defaultValue, predicate?: string): any;
        Skip(count: number): Enumerable<any>;
        SkipWhile(predicate: ($, i: number) => boolean): Enumerable<any>;
        SkipWhile(predicate: string): Enumerable<any>;
        Take(count: number): Enumerable<any>;
        TakeWhile(predicate: ($, i: number) => boolean): Enumerable<any>;
        TakeWhile(predicate: string): Enumerable<any>;
        TakeExceptLast(count?: number): Enumerable<any>;
        TakeFromLast(count: number): Enumerable<any>;
        IndexOf(item): number;
        LastIndexOf(item): number;
        // Convert Methods
        ToArray(): any[];
        ToLookup(keySelector: ($) => any, elementSelector?: ($) => any, compareSelector?: (key) => any): Lookup;
        ToLookup(keySelector: string, elementSelector?: string, compareSelector?: string): Lookup;
        ToObject(keySelector: ($) => string, elementSelector: ($) => any): any;
        ToObject(keySelector: string, elementSelector: string): any;
        ToDictionary(keySelector: ($) => any, elementSelector: ($) => any, compareSelector?: (key) => any): Dictionary;
        ToDictionary(keySelector: string, elementSelector: string, compareSelector?: string): Dictionary;
        ToJSON(replacer?: (key, value) => any, space?: number): string;
        ToJSON(replacer?: string, space?: number): string;
        ToString(separator?: string, selector?: ($) =>any): string;
        ToString(separator?: string, selector?: string): string;
        //Action Methods
        Do(action: ($, i: number) => void ): Enumerable<any>;
        Do(action: string): Enumerable<any>;
        ForEach(action: ($, i: number) => void ): void;
        ForEach(func: ($, i: number) => boolean): void;
        ForEach(action_func: string): void;
        Write(separator?: string, selector?: ($) =>any): void;
        Write(separator?: string, selector?: string): void;
        WriteLine(selector?: ($) =>any): void;
        Force(): void;
        //Functional Methods
        Let(func: (e: Enumerable<any>) => Enumerable<any>): Enumerable<any>;
        Share(): Enumerable<any>;
        MemoizeAll(): Enumerable<any>;
        //Error Handling Methods
        Catch(handler: (error: Error) => void ): Enumerable<any>;
        Catch(handler: string): Enumerable<any>;
        Finally(finallyAction: () => void ): Enumerable<any>;
        Finally(finallyAction: string): Enumerable<any>;
        //For Debug Methods
        Trace(message?: string, selector?: ($) =>any): Enumerable<any>;
        Trace(message?: string, selector?: string): Enumerable<any>;
    }

    interface OrderedEnumerable<T> extends Enumerable<T> {
        ThenBy(keySelector: ($) => T): OrderedEnumerable<T>;
        ThenBy(keySelector: string): OrderedEnumerable<T>;
        ThenByDescending(keySelector: ($) => T): OrderedEnumerable<T>;
        ThenByDescending(keySelector: T): OrderedEnumerable<T>;
    }

    interface Grouping<T> extends Enumerable<T> {
        Key();
    }

    interface Lookup<TValue> {
        Count(): number;
        Get(key): Enumerable<TValue>;
        Contains(key): boolean;
        ToEnumerable(): Enumerable<TValue>;
    }

    interface Dictionary<TValue> {
        Add(key, value): void;
        Get(key): any;
        Set(key, value): boolean;
        Contains(key): boolean;
        Clear(): void;
        Remove(key): void;
        Count(): number;
        ToEnumerable(): Enumerable<TValue>;
    }

    interface KeyValuePair<TKey, TValue> {
        Key: TKey;
        Value: TValue;
    }
}

declare var Enumerable: linq.EnumerableStatic;
