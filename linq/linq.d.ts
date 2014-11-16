// Type definitions for linq.js 2.2
// Project: http://linqjs.codeplex.com/
// Definitions by: Marcin Najder <https://github.com/marcinnajder>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// todo: jQuery plugin, RxJS Binding

declare module linq {

    interface EnumerableStatic {
        Choice(...contents: any[]): Enumerable;
        Choice(contents: any[]): Enumerable;
        Cycle(...contents: any[]): Enumerable;
        Cycle(contents: any[]): Enumerable;
        Empty(): Enumerable;
        From(obj: any[]): Enumerable;
        From(obj: any): Enumerable;
        Return(element: any): Enumerable;
        Matches(input: string, pattern: RegExp): Enumerable;
        Matches(input: string, pattern: string, flags?: string): Enumerable;
        Range(start: number, count: number, step?: number): Enumerable;
        RangeDown(start: number, count: number, step?: number): Enumerable;
        RangeTo(start: number, to: number, step?: number): Enumerable;
        Repeat(obj: any, count?: number): Enumerable;
        RepeatWithFinalize(initializer: () => any, finalizer: (resource: any) =>void ): Enumerable;
        Generate(func: () => any, count?: number): Enumerable;
        Generate(func: string, count?: number): Enumerable;
        ToInfinity(start?: number, step?: number): Enumerable;
        ToNegativeInfinity(start?: number, step?: number): Enumerable;
        Unfold(seed, func: ($) => any): Enumerable;
        Unfold(seed, func: string): Enumerable;
    }

    interface Enumerable {
        //Projection and Filtering Methods
        CascadeBreadthFirst(func: ($) => any[], resultSelector: (v, i: number) => any): Enumerable;
        CascadeBreadthFirst(func: string, resultSelector: string): Enumerable;
        CascadeDepthFirst(func: ($) => any[], resultSelector: (v, i: number) => any): Enumerable;
        CascadeDepthFirst(func: string, resultSelector: string): Enumerable;
        Flatten(...items: any[]): Enumerable;
        Pairwise(selector: (prev, next) => any): Enumerable;
        Pairwise(selector: string): Enumerable;
        Scan(func: (a, b) => any): Enumerable;
        Scan(func: string): Enumerable;
        Scan(seed, func: (a, b) => any, resultSelector?: ($) => any): Enumerable;
        Scan(seed, func: string, resultSelector?: string): Enumerable;
        Select(selector: ($, i: number) => any): Enumerable;
        Select(selector: string): Enumerable;
        SelectMany(collectionSelector: ($, i: number) => any[], resultSelector?: ($, item) => any): Enumerable;
        SelectMany(collectionSelector: ($, i: number) => Enumerable, resultSelector?: ($, item) => any): Enumerable;
        SelectMany(collectionSelector: string, resultSelector?: string): Enumerable;
        Where(predicate: ($, i: number) => boolean): Enumerable;
        Where(predicate: string): Enumerable;
        OfType(type: Function): Enumerable;
        Zip(second: any[], selector: (v1, v2, i: number) => any): Enumerable;
        Zip(second: any[], selector: string): Enumerable;
        Zip(second: Enumerable, selector: (v1, v2, i: number) => any): Enumerable;
        Zip(second: Enumerable, selector: string): Enumerable;
        //Join Methods
        Join(inner: any[], outerKeySelector: (v1) => any, innerKeySelector: (v1) => any, resultSelector: (v1, v2) => any, compareSelector?: (v) => any): Enumerable;
        Join(inner: any[], outerKeySelector: string, innerKeySelector: string, resultSelector: string, compareSelector?: string): Enumerable;
        Join(inner: Enumerable, outerKeySelector: (v1) => any, innerKeySelector: (v1) => any, resultSelector: (v1, v2) => any, compareSelector?: (v) => any): Enumerable;
        Join(inner: Enumerable, outerKeySelector: string, innerKeySelector: string, resultSelector: string, compareSelector?: string): Enumerable;
        GroupJoin(inner: any[], outerKeySelector: (v1) => any, innerKeySelector: (v1) => any, resultSelector: (v1, v2: Enumerable) => any, compareSelector?: (v) => any): Enumerable;
        GroupJoin(inner: any[], outerKeySelector: string, innerKeySelector: string, resultSelector: string, compareSelector?: string): Enumerable;
        GroupJoin(inner: Enumerable, outerKeySelector: (v1) => any, innerKeySelector: (v1) => any, resultSelector: (v1, v2: Enumerable) => any, compareSelector?: (v) => any): Enumerable;
        GroupJoin(inner: Enumerable, outerKeySelector: string, innerKeySelector: string, resultSelector: string, compareSelector?: string): Enumerable;
        //Set Methods
        All(predicate: ($) => boolean): boolean;
        All(predicate: string): boolean;
        Any(predicate?: ($) => boolean): boolean;
        Any(predicate?: string): boolean;
        Concat(second: any[]): Enumerable;
        Concat(second: Enumerable): Enumerable;
        Insert(index: number, second: any[]): Enumerable;
        Insert(index: number, second: Enumerable): Enumerable;
        Alternate(value): Enumerable;
        Contains(value, compareSelector?: ($) => any): boolean;
        Contains(value, compareSelector?: string): boolean;
        DefaultIfEmpty(defaultValue): Enumerable;
        Distinct(compareSelector?: ($) => any): Enumerable;
        Distinct(compareSelector?: string): Enumerable;
        Except(second: any[], compareSelector?: ($) => any): Enumerable;
        Except(second: any[], compareSelector?: string): Enumerable;
        Except(second: Enumerable, compareSelector?: ($) => any): Enumerable;
        Except(second: Enumerable, compareSelector?: string): Enumerable;
        Intersect(second: any[], compareSelector?: ($) => any): Enumerable;
        Intersect(second: any[], compareSelector?: string): Enumerable;
        Intersect(second: Enumerable, compareSelector?: ($) => any): Enumerable;
        Intersect(second: Enumerable, compareSelector?: string): Enumerable;
        SequenceEqual(second: any[], compareSelector?: ($) => any): boolean;
        SequenceEqual(second: any[], compareSelector?: string): boolean;
        SequenceEqual(second: Enumerable, compareSelector?: ($) => any): boolean;
        SequenceEqual(second: Enumerable, compareSelector?: string): boolean;
        Union(second: any[], compareSelector?: ($) => any): Enumerable;
        Union(second: any[], compareSelector?: string): Enumerable;
        Union(second: Enumerable, compareSelector?: ($) => any): Enumerable;
        Union(second: Enumerable, compareSelector?: string): Enumerable;
        //Ordering Methods
        OrderBy(keySelector?: ($) => any): OrderedEnumerable;
        OrderBy(keySelector?: string): OrderedEnumerable;
        OrderByDescending(keySelector?: ($) => any): OrderedEnumerable;
        OrderByDescending(keySelector?: string): OrderedEnumerable;
        Reverse(): Enumerable;
        Shuffle(): Enumerable;
        //Grouping Methods
        GroupBy(keySelector: ($) => any, elementSelector?: ($) => any, resultSelector?: (key, e) => any, compareSelector?: ($) =>any): Enumerable;
        GroupBy(keySelector: string, elementSelector?: string, resultSelector?: string, compareSelector?: string): Enumerable;
        PartitionBy(keySelector: ($) => any, elementSelector?: ($) => any, resultSelector?: (key, e) => any, compareSelector?: ($) =>any): Enumerable;
        PartitionBy(keySelector: string, elementSelector?: string, resultSelector?: string, compareSelector?: string): Enumerable;
        BufferWithCount(count: number): Enumerable;
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
        Skip(count: number): Enumerable;
        SkipWhile(predicate: ($, i: number) => boolean): Enumerable;
        SkipWhile(predicate: string): Enumerable;
        Take(count: number): Enumerable;
        TakeWhile(predicate: ($, i: number) => boolean): Enumerable;
        TakeWhile(predicate: string): Enumerable;
        TakeExceptLast(count?: number): Enumerable;
        TakeFromLast(count: number): Enumerable;
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
        Do(action: ($, i: number) => void ): Enumerable;
        Do(action: string): Enumerable;
        ForEach(action: ($, i: number) => void ): void;
        ForEach(func: ($, i: number) => boolean): void;
        ForEach(action_func: string): void;
        Write(separator?: string, selector?: ($) =>any): void;
        Write(separator?: string, selector?: string): void;
        WriteLine(selector?: ($) =>any): void;
        Force(): void;
        //Functional Methods
        Let(func: (e: Enumerable) => Enumerable): Enumerable;
        Share(): Enumerable;
        MemoizeAll(): Enumerable;
        //Error Handling Methods
        Catch(handler: (error: Error) => void ): Enumerable;
        Catch(handler: string): Enumerable;
        Finally(finallyAction: () => void ): Enumerable;
        Finally(finallyAction: string): Enumerable;
        //For Debug Methods
        Trace(message?: string, selector?: ($) =>any): Enumerable;
        Trace(message?: string, selector?: string): Enumerable;
    }

    interface OrderedEnumerable extends Enumerable {
        ThenBy(keySelector: ($) => any): OrderedEnumerable;
        ThenBy(keySelector: string): OrderedEnumerable;
        ThenByDescending(keySelector: ($) => any): OrderedEnumerable;
        ThenByDescending(keySelector: string): OrderedEnumerable;
    }

    interface Grouping extends Enumerable {
        Key();
    }

    interface Lookup {
        Count(): number;
        Get(key): Enumerable;
        Contains(key): boolean;
        ToEnumerable(): Enumerable;
    }

    interface Dictionary {
        Add(key, value): void;
        Get(key): any;
        Set(key, value): boolean;
        Contains(key): boolean;
        Clear(): void;
        Remove(key): void;
        Count(): number;
        ToEnumerable(): Enumerable;
    }
}

declare var Enumerable: linq.EnumerableStatic;
