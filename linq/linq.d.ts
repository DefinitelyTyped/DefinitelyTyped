// Type definitions for linq.js 2.2
// Project: http://linqjs.codeplex.com/
// Definitions by: Marcin Najder <https://github.com/marcinnajder>, Sebastiaan Dammann <https://github.com/Sebazzz>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// todo: jQuery plugin, RxJS Binding
// use: import * as Enumerable from "linq";

declare module "linq" {

    export function choice<T>(...contents: T[]): Enumerable<T>;
    export function choice<T>(contents: T[]): Enumerable<T>;
    export function cycle<T>(...contents: T[]): Enumerable<T>;
    export function cycle<T>(contents: T[]): Enumerable<T>;
    export function empty<T>(): Enumerable<T>;
    export function from<T>(obj: T[]): Enumerable<T>;
    export function from(obj: number): Enumerable<number>; // input number returns single number
    export function from(obj: string): Enumerable<string>; // input string returns sequence of characters
    export function from(obj: NodeList): Enumerable<Node>; // node list returns sequence of nodes
    export function from(obj: Object): Enumerable<KeyValuePair<string, any>>; // object returns sequence of key/value pairs
    export function make<T>(element: T): Enumerable<T>;
    export function matches<T>(input: string, pattern: RegExp): Enumerable<string>;
    export function matches<T>(input: string, pattern: string, flags?: string): Enumerable<string>;
    export function range(start: number, count: number, step?: number): Enumerable<number>;
    export function rangeDown(start: number, count: number, step?: number): Enumerable<number>;
    export function rangeTo(start: number, to: number, step?: number): Enumerable<number>;
    export function repeat<T>(obj: any, count?: number): Enumerable<T>;
    export function repeatWithFinalize<T>(initializer: () => T, finalizer: (resource: T) => void): Enumerable<T>;
    export function generate<T>(func: () => T, count?: number): Enumerable<T>;
    export function generate(func: string, count?: number): Enumerable<any>;
    export function toInfinity(start?: number, step?: number): Enumerable<number>;
    export function toNegativeInfinity(start?: number, step?: number): Enumerable<number>;
    export function unfold<T>(seed, func: ($) => T): Enumerable<T>;
    export function unfold(seed, func: string): Enumerable<any>;

    interface Enumerable<T> {
        //Projection and Filtering Methods
        cascadeBreadthFirst(func: ($) => any[], resultSelector: (v, i: number) => any): Enumerable<any>;
        cascadeBreadthFirst(func: string, resultSelector: string): Enumerable<any>;
        cascadeDepthFirst(func: ($) => any[], resultSelector: (v, i: number) => any): Enumerable<any>;
        cascadeDepthFirst(func: string, resultSelector: string): Enumerable<any>;
        flatten(...items: any[]): Enumerable<any>;
        pairwise(selector: (prev, next) => any): Enumerable<any>;
        pairwise(selector: string): Enumerable<any>;
        scan(func: (a, b) => any): Enumerable<any>;
        scan(func: string): Enumerable<any>;
        scan(seed, func: (a, b) => any, resultSelector?: ($) => any): Enumerable<any>;
        scan(seed, func: string, resultSelector?: string): Enumerable<any>;
        select<TResult>(selector: ($: T, i: number) => TResult): Enumerable<TResult>;
        select(selector: string): Enumerable<any>;
        selectMany(collectionSelector: ($, i: number) => any[], resultSelector?: ($, item) => any): Enumerable<any>;
        selectMany(collectionSelector: ($, i: number) => Enumerable<any>, resultSelector?: ($, item) => any): Enumerable<any>;
        selectMany(collectionSelector: string, resultSelector?: string): Enumerable<any>;
        where(predicate: ($ : T, i: number) => boolean): Enumerable<T>;
        where(predicate: string): Enumerable<any>;
        ofType(type: Function): Enumerable<any>;zip(second: any[], selector: (v1, v2, i: number) => any): Enumerable<any>;
        zip(second: any[], selector: string): Enumerable<any>;
        zip(second: Enumerable<any>, selector: (v1, v2, i: number) => any): Enumerable<any>;
        zip(second: Enumerable<any>, selector: string): Enumerable<any>;
        //Join Methods
        join(inner: any[], outerKeySelector: (v1) => any, innerKeySelector: (v1) => any, resultSelector: (v1, v2) => any, compareSelector?: (v) => any): Enumerable<any>;
        join(inner: any[], outerKeySelector: string, innerKeySelector: string, resultSelector: string, compareSelector?: string): Enumerable<any>;
        join(inner: Enumerable<any>, outerKeySelector: (v1) => any, innerKeySelector: (v1) => any, resultSelector: (v1, v2) => any, compareSelector?: (v) => any): Enumerable<any>;
        join(inner: Enumerable<any>, outerKeySelector: string, innerKeySelector: string, resultSelector: string, compareSelector?: string): Enumerable<any>;
        groupJoin(inner: any[], outerKeySelector: (v1) => any, innerKeySelector: (v1) => any, resultSelector: (v1, v2: Enumerable<any>) => any, compareSelector?: (v) => any): Enumerable<any>;
        groupJoin(inner: any[], outerKeySelector: string, innerKeySelector: string, resultSelector: string, compareSelector?: string): Enumerable<any>;
        groupJoin(inner: Enumerable<any>, outerKeySelector: (v1) => any, innerKeySelector: (v1) => any, resultSelector: (v1, v2: Enumerable<any>) => any, compareSelector?: (v) => any): Enumerable<any>;
        groupJoin(inner: Enumerable<any>, outerKeySelector: string, innerKeySelector: string, resultSelector: string, compareSelector?: string): Enumerable<any>;
        //Set Methods
        all(predicate: ($ : T) => boolean): boolean;
        all(predicate: string): boolean;
        any(predicate?: ($: T) => boolean): boolean;
        any(predicate?: string): boolean;
        concat(second: any[]): Enumerable<any>;
        concat(second: Enumerable<any>): Enumerable<any>;
        insert(index: number, second: any[]): Enumerable<any>;
        insert(index: number, second: Enumerable<any>): Enumerable<any>;
        alternate(value): Enumerable<any>;
        contains(value, compareSelector?: ($) => any): boolean;
        contains(value, compareSelector?: string): boolean;
        defaultIfEmpty(defaultValue): Enumerable<any>;
        distinct(compareSelector?: ($) => any): Enumerable<any>;
        distinct(compareSelector?: string): Enumerable<any>;
        except(second: any[], compareSelector?: ($) => any): Enumerable<any>;
        except(second: any[], compareSelector?: string): Enumerable<any>;
        except(second: Enumerable<any>, compareSelector?: ($) => any): Enumerable<any>;
        except(second: Enumerable<any>, compareSelector?: string): Enumerable<any>;
        intersect(second: any[], compareSelector?: ($) => any): Enumerable<any>;
        intersect(second: any[], compareSelector?: string): Enumerable<any>;
        intersect(second: Enumerable<any>, compareSelector?: ($) => any): Enumerable<any>;
        intersect(second: Enumerable<any>, compareSelector?: string): Enumerable<any>;
        sequenceEqual(second: any[], compareSelector?: ($) => any): boolean;
        sequenceEqual(second: any[], compareSelector?: string): boolean;
        sequenceEqual(second: Enumerable<any>, compareSelector?: ($) => any): boolean;
        sequenceEqual(second: Enumerable<any>, compareSelector?: string): boolean;
        union(second: any[], compareSelector?: ($) => any): Enumerable<any>;
        union(second: any[], compareSelector?: string): Enumerable<any>;
        union(second: Enumerable<any>, compareSelector?: ($) => any): Enumerable<any>;
        union(second: Enumerable<any>, compareSelector?: string): Enumerable<any>;
        //Ordering Methods
        orderBy(keySelector?: ($: T) => any): OrderedEnumerable<T>;
        orderBy(keySelector?: string): OrderedEnumerable<T>;
        orderByDescending(keySelector?: ($) => any): OrderedEnumerable<T>;
        orderByDescending(keySelector?: string): OrderedEnumerable<T>;
        reverse(): Enumerable<T>;
        shuffle(): Enumerable<T>;
        //Grouping Methods
        groupBy(keySelector: ($) => any, elementSelector?: ($) => any, resultSelector?: (key, e) => any, compareSelector?: ($) =>any): Enumerable<any>;
        groupBy(keySelector: string, elementSelector?: string, resultSelector?: string, compareSelector?: string): Enumerable<any>;
        partitionBy(keySelector: ($) => any, elementSelector?: ($) => any, resultSelector?: (key, e) => any, compareSelector?: ($) =>any): Enumerable<any>;
        partitionBy(keySelector: string, elementSelector?: string, resultSelector?: string, compareSelector?: string): Enumerable<any>;
        buffer(count: number): Enumerable<any>;
        // Aggregate Methods
        aggregate(func: (a, b) => any);
        aggregate(seed, func: (a, b) => any, resultSelector?: ($) => any);
        aggregate(func: string);
        aggregate(seed, func: string, resultSelector?: string);
        average(selector?: ($) => number): number;
        average(selector?: string): number;
        count(predicate?: ($) => boolean): number;
        count(predicate?: string): number;
        max(selector?: ($: T) => any): any;
        max(selector?: ($: T) => Date): Date;
        max(selector?: ($: T) => number): number;
        max(selector: ($: T) => string): string;
        max(selector?: string): any;
        min(selector?: ($: T) => any): any;
        min(selector?: ($: T) => Date): Date;
        min(selector: ($: T) => string): string;
        min(selector?: ($: T) => number): number;
        min(selector?: string): any;
        maxBy(selector: ($: T) => any): any;
        maxBy(selector: ($: T) => string): string;
        maxBy(selector: ($: T) => Date): Date;
        maxBy(selector: ($: T) => number): number;
        maxBy(selector: string): any;
        minBy(selector: ($: T) => Date): Date;
        minBy(selector: ($: T) => number): any;
        minBy(selector: ($: T) => string): string;
        minBy(selector: ($: T) => any): any;
        minBy(selector: string): any;
        sum(selector?: ($) => number): number;
        sum(selector?: string): number;
        //Paging Methods
        elementAt(index: number): T;
        elementAtOrDefault(index: number, defaultValue: T): T;
        first(predicate?: ($: T) => boolean): T;
        first(predicate?: string): T;
        firstOrDefault(defaultValue: T, predicate?: ($: T) => boolean): T;
        firstOrDefault(defaultValue: T, predicate?: string): T;
        last(predicate?: ($: T) => boolean): T;
        last(predicate?: string): T;
        lastOrDefault(defaultValue: T, predicate?: ($: T) => boolean): T;
        lastOrDefault(defaultValue: T, predicate?: string): T;
        single(predicate?: ($: T) => boolean): T;
        single(predicate?: string): T;
        singleOrDefault(defaultValue: T, predicate?: ($: T) => boolean): T;
        singleOrDefault(defaultValue: T, predicate?: string): T;
        skip(count: number): Enumerable<T>;
        skipWhile(predicate: ($: T, i: number) => boolean): Enumerable<T>;
        skipWhile(predicate: string): Enumerable<T>;
        take(count: number): Enumerable<T>;
        takeWhile(predicate: ($: T, i: number) => boolean): Enumerable<T>;
        takeWhile(predicate: string): Enumerable<T>;
        takeExceptLast(count?: number): Enumerable<T>;
        takeFromLast(count: number): Enumerable<T>;
        indexOf(item): number;
        lastIndexOf(item): number;
        // Convert Methods
        toArray(): T[];
        toLookup(keySelector: ($) => any, elementSelector?: ($) => any, compareSelector?: (key) => any): Lookup<T>;
        toLookup(keySelector: string, elementSelector?: string, compareSelector?: string): Lookup<T>;
        toObject(keySelector: ($) => string, elementSelector: ($) => any): any;
        toObject(keySelector: string, elementSelector: string): any;
        toDictionary(keySelector: ($) => any, elementSelector: ($) => any, compareSelector?: (key) => any): Dictionary<T>;
        toDictionary(keySelector: string, elementSelector: string, compareSelector?: string): Dictionary<T>;
        toJSONString(replacer?: (key, value) => any, space?: number): string;
        toJSONString(replacer?: string, space?: number): string;
        toJoinedString(separator?: string, selector?: ($) =>any): string;
        toJoinedString(separator?: string, selector?: string): string;
        //Action Methods
        doAction(action: ($, i: number) => void ): Enumerable<any>;
        doAction(action: string): Enumerable<any>;
        forEach(action: ($: T, i: number) => void ): void;
        forEach(func: ($: T, i: number) => boolean): void;
        forEach(action_func: string): void;
        write(separator?: string, selector?: ($) =>any): void;
        write(separator?: string, selector?: string): void;
        writeLine(selector?: ($) =>any): void;
        force(): void;
        //Functional Methods
        letBind(func: (e: Enumerable<any>) => Enumerable<any>): Enumerable<any>;
        share(): Enumerable<any>;
        memoize(): Enumerable<any>;
        //Error Handling Methods
        catchError(handler: (error: Error) => void ): Enumerable<any>;
        catchError(handler: string): Enumerable<any>;
        finallyAction(finallyAction: () => void ): Enumerable<any>;
        finallyAction(finallyAction: string): Enumerable<any>;
        //For Debug Methods
        trace(message?: string, selector?: ($) =>any): Enumerable<any>;
        trace(message?: string, selector?: string): Enumerable<any>;
    }

    interface OrderedEnumerable<T> extends Enumerable<T> {
        thenBy(keySelector: ($) => T): OrderedEnumerable<T>;
        thenBy(keySelector: string): OrderedEnumerable<T>;
        thenByDescending(keySelector: ($) => T): OrderedEnumerable<T>;
        thenByDescending(keySelector: string): OrderedEnumerable<T>;
    }

    interface Grouping<T> extends Enumerable<T> {
        key();
    }

    interface Lookup<TValue> {
        count(): number;
        get(key): Enumerable<TValue>;
        contains(key): boolean;
        toEnumerable(): Enumerable<TValue>;
    }

    interface Dictionary<TValue> {
        add(key, value): void;
        get(key): any;
        set(key, value): boolean;
        contains(key): boolean;
        clear(): void;
        remove(key): void;
        count(): number;
        toEnumerable(): Enumerable<TValue>;
    }

    interface KeyValuePair<TKey, TValue> {
        Key: TKey;
        Value: TValue;
    }
}
