// Type definitions for linq.js 2.2
// Project: http://linqjs.codeplex.com/
// Definitions by: Marcin Najder <https://github.com/marcinnajder>, Sebastiaan Dammann <https://github.com/Sebazzz>
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
        Where(predicate: ($ : T, i: number) => boolean): Enumerable<T>;
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
        All(predicate: ($ : T) => boolean): boolean;
        All(predicate: string): boolean;
        Any(predicate?: ($: T) => boolean): boolean;
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
        OrderBy(keySelector?: ($: T) => any): OrderedEnumerable<T>;
        OrderBy(keySelector?: string): OrderedEnumerable<T>;
        OrderByDescending(keySelector?: ($) => any): OrderedEnumerable<T>;
        OrderByDescending(keySelector?: string): OrderedEnumerable<T>;
        Reverse(): Enumerable<T>;
        Shuffle(): Enumerable<T>;
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
        Max(selector?: ($: T) => any): any;
        Max(selector?: ($: T) => Date): Date;
        Max(selector?: ($: T) => number): number;
        Max(selector: ($: T) => string): string;
        Max(selector?: string): any;
        Min(selector?: ($: T) => any): any;
        Min(selector?: ($: T) => Date): Date;
        Min(selector: ($: T) => string): string;
        Min(selector?: ($: T) => number): number;
        Min(selector?: string): any;
        MaxBy(selector: ($: T) => any): any;
        MaxBy(selector: ($: T) => string): string;
        MaxBy(selector: ($: T) => Date): Date;
        MaxBy(selector: ($: T) => number): number;
        MaxBy(selector: string): any;
        MinBy(selector: ($: T) => Date): Date;
        MinBy(selector: ($: T) => number): any;
        MinBy(selector: ($: T) => string): string;
        MinBy(selector: ($: T) => any): any;
        MinBy(selector: string): any;
        Sum(selector?: ($) => number): number;
        Sum(selector?: string): number;
        //Paging Methods
        ElementAt(index: number): T;
        ElementAtOrDefault(index: number, defaultValue: T): T;
        First(predicate?: ($: T) => boolean): T;
        First(predicate?: string): T;
        FirstOrDefault(defaultValue: T, predicate?: ($: T) => boolean): T;
        FirstOrDefault(defaultValue: T, predicate?: string): T;
        Last(predicate?: ($: T) => boolean): T;
        Last(predicate?: string): T;
        LastOrDefault(defaultValue: T, predicate?: ($: T) => boolean): T;
        LastOrDefault(defaultValue: T, predicate?: string): T;
        Single(predicate?: ($: T) => boolean): T;
        Single(predicate?: string): T;
        SingleOrDefault(defaultValue: T, predicate?: ($: T) => boolean): T;
        SingleOrDefault(defaultValue: T, predicate?: string): T;
        Skip(count: number): Enumerable<T>;
        SkipWhile(predicate: ($: T, i: number) => boolean): Enumerable<T>;
        SkipWhile(predicate: string): Enumerable<T>;
        Take(count: number): Enumerable<T>;
        TakeWhile(predicate: ($: T, i: number) => boolean): Enumerable<T>;
        TakeWhile(predicate: string): Enumerable<T>;
        TakeExceptLast(count?: number): Enumerable<T>;
        TakeFromLast(count: number): Enumerable<T>;
        IndexOf(item): number;
        LastIndexOf(item): number;
        // Convert Methods
        ToArray(): T[];
        ToLookup(keySelector: ($) => any, elementSelector?: ($) => any, compareSelector?: (key) => any): Lookup<T>;
        ToLookup(keySelector: string, elementSelector?: string, compareSelector?: string): Lookup<T>;
        ToObject(keySelector: ($) => string, elementSelector: ($) => any): any;
        ToObject(keySelector: string, elementSelector: string): any;
        ToDictionary(keySelector: ($) => any, elementSelector: ($) => any, compareSelector?: (key) => any): Dictionary<T>;
        ToDictionary(keySelector: string, elementSelector: string, compareSelector?: string): Dictionary<T>;
        ToJSON(replacer?: (key, value) => any, space?: number): string;
        ToJSON(replacer?: string, space?: number): string;
        ToString(separator?: string, selector?: ($) =>any): string;
        ToString(separator?: string, selector?: string): string;
        //Action Methods
        Do(action: ($, i: number) => void ): Enumerable<any>;
        Do(action: string): Enumerable<any>;
        ForEach(action: ($: T, i: number) => void ): void;
        ForEach(func: ($: T, i: number) => boolean): void;
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
        ThenByDescending(keySelector: string): OrderedEnumerable<T>;
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
