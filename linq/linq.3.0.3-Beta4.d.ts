// Type definitions for linq.js v3.0.3-Beta4
// Project: http://linqjs.codeplex.com/
// Definitions by: neuecc <http://www.codeplex.com/site/users/view/neuecc>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module linqjs {
    interface IEnumerator {
        current(): any;
        moveNext(): boolean;
        dispose(): void;
    }

    interface EnumerableStatic {
        Utils: {
            createLambda(expression: any): (...params: any[]) => any;
            createEnumerable(getEnumerator: () => IEnumerator): Enumerable;
            createEnumerator(initialize: () => void , tryGetNext: () => boolean, dispose: () => void ): IEnumerator;
            extendTo(type: any): void;
        };
        choice(...params: any[]): Enumerable;
        cycle(...params: any[]): Enumerable;
        empty(): Enumerable;
        from(): Enumerable;
        from(obj: Enumerable): Enumerable;
        from(obj: string): Enumerable;
        from(obj: number): Enumerable;
        from(obj: { length: number;[x: number]: any; }): Enumerable;
        from(obj: any): Enumerable;
        make(element: any): Enumerable;
        matches(input: string, pattern: RegExp): Enumerable;
        matches(input: string, pattern: string, flags?: string): Enumerable;
        range(start: number, count: number, step?: number): Enumerable;
        rangeDown(start: number, count: number, step?: number): Enumerable;
        rangeTo(start: number, to: number, step?: number): Enumerable;
        repeat(element: any, count?: number): Enumerable;
        repeatWithFinalize(initializer: () => any, finalizer: (element: any) => void ): Enumerable;
        generate(func: () => any, count?: number): Enumerable;
        toInfinity(start?: number, step?: number): Enumerable;
        toNegativeInfinity(start?: number, step?: number): Enumerable;
        unfold(seed: any, func: (value: any) => any): Enumerable;
        defer(enumerableFactory: () => Enumerable): Enumerable;
    }

    interface Enumerable {
        constructor(getEnumerator: () => IEnumerator): Enumerable;
        getEnumerator(): IEnumerator;

        // Extension Methods
        traverseBreadthFirst(func: (element: any) => Enumerable, resultSelector?: (element: any, nestLevel: number) => any): Enumerable;
        traverseDepthFirst(func: (element: any) => Enumerable, resultSelector?: (element: any, nestLevel: number) => any): Enumerable;
        flatten(): Enumerable;
        pairwise(selector: (prev: any, current: any) => any): Enumerable;
        scan(func: (prev: any, current: any) => any): Enumerable;
        scan(seed: any, func: (prev: any, current: any) => any): Enumerable;
        select(selector: (element: any, index: number) => any): Enumerable;
        selectMany(collectionSelector: (element: any, index: number) => any[], resultSelector?: (outer: any, inner: any) => any): Enumerable;
        selectMany(collectionSelector: (element: any, index: number) => Enumerable, resultSelector?: (outer: any, inner: any) => any): Enumerable;
        selectMany(collectionSelector: (element: any, index: number) => { length: number;[x: number]: any; }, resultSelector?: (outer: any, inner: any) => any): Enumerable;
        where(predicate: (element: any, index: number) => boolean): Enumerable;
        choose(selector: (element: any, index: number) => any): Enumerable;
        ofType(type: any): Enumerable;
        zip(second: any[], resultSelector: (first: any, second: any, index: number) => any): Enumerable;
        zip(second: Enumerable, resultSelector: (first: any, second: any, index: number) => any): Enumerable;
        zip(second: { length: number;[x: number]: any; }, resultSelector: (first: any, second: any, index: number) => any): Enumerable;
        zip(...params: any[]): Enumerable; // last one is selector
        merge(second: any[], resultSelector: (first: any, second: any, index: number) => any): Enumerable;
        merge(second: Enumerable, resultSelector: (first: any, second: any, index: number) => any): Enumerable;
        merge(second: { length: number;[x: number]: any; }, resultSelector: (first: any, second: any, index: number) => any): Enumerable;
        merge(...params: any[]): Enumerable; // last one is selector
        join(inner: Enumerable, outerKeySelector: (outer: any) =>any, innerKeySelector: (inner: any) =>any, resultSelector: (outer: any, inner: any) => any, compareSelector?: (obj: any) => any): Enumerable;
        groupJoin(inner: Enumerable, outerKeySelector: (outer: any) =>any, innerKeySelector: (inner: any) =>any, resultSelector: (outer: any, inner: any) => any, compareSelector?: (obj: any) => any): Enumerable;
        all(predicate: (element: any) => boolean): boolean;
        any(predicate?: (element: any) => boolean): boolean;
        isEmpty(): boolean;
        concat(...sequences: any[]): Enumerable;
        insert(index: number, second: any[]): Enumerable;
        insert(index: number, second: Enumerable): Enumerable;
        insert(index: number, second: { length: number;[x: number]: any; }): Enumerable;
        alternate(alternateValue: any): Enumerable;
        alternate(alternateSequence: any[]): Enumerable;
        alternate(alternateSequence: Enumerable): Enumerable;
        contains(value: any, compareSelector: (element: any) => any): Enumerable;
		contains(value: any): Enumerable;
        defaultIfEmpty(defaultValue?: any): Enumerable;
        distinct(compareSelector?: (element: any) => any): Enumerable;
        distinctUntilChanged(compareSelector: (element: any) => any): Enumerable;
        except(second: any[], compareSelector?: (element: any) => any): Enumerable;
        except(second: { length: number;[x: number]: any; }, compareSelector?: (element: any) => any): Enumerable;
        except(second: Enumerable, compareSelector?: (element: any) => any): Enumerable;
        intersect(second: any[], compareSelector?: (element: any) => any): Enumerable;
        intersect(second: { length: number;[x: number]: any; }, compareSelector?: (element: any) => any): Enumerable;
        intersect(second: Enumerable, compareSelector?: (element: any) => any): Enumerable;
        sequenceEqual(second: any[], compareSelector?: (element: any) => any): Enumerable;
        sequenceEqual(second: { length: number;[x: number]: any; }, compareSelector?: (element: any) => any): Enumerable;
        sequenceEqual(second: Enumerable, compareSelector?: (element: any) => any): Enumerable;
        union(second: any[], compareSelector?: (element: any) => any): Enumerable;
        union(second: { length: number;[x: number]: any; }, compareSelector?: (element: any) => any): Enumerable;
        union(second: Enumerable, compareSelector?: (element: any) => any): Enumerable;
        orderBy(keySelector: (element: any) => any): OrderedEnumerable;
        orderByDescending(keySelector: (element: any) => any): OrderedEnumerable;
        reverse(): Enumerable;
        shuffle(): Enumerable;
        weightedSample(weightSelector: (element: any) => any): Enumerable;
        groupBy(keySelector: (element: any) => any, elementSelector?: (element: any) => any, resultSelector?: (key: any, element: any) => any, compareSelector?: (element: any) => any): Enumerable;
        partitionBy(keySelector: (element: any) => any, elementSelector?: (element: any) => any, resultSelector?: (key: any, element: any) => any, compareSelector?: (element: any) => any): Enumerable;
        buffer(count: number): Enumerable;
        aggregate(func: (prev: any, current: any) => any): any;
        aggregate(seed: any, func: (prev: any, current: any) => any, resultSelector?: (last: any) => any): any;
        average(selector?: (element: any) => any): number;
        count(predicate?: (element: any, index: number) => boolean): number;
        max(selector?: (element: any) => any): number;
        min(selector?: (element: any) => any): number;
        maxBy(keySelector: (element: any) => any): any;
        minBy(keySelector: (element: any) => any): any;
        sum(selector?: (element: any) => any): number;
        elementAt(index: number): any;
        elementAtOrDefault(index: number, defaultValue?: any): any;
        first(predicate?: (element: any, index: number) => boolean): any;
        firstOrDefault(predicate?: (element: any, index: number) => boolean, defaultValue?: any): any;
        last(predicate?: (element: any, index: number) => boolean): any;
        lastOrDefault(predicate?: (element: any, index: number) => boolean, defaultValue?: any): any;
        single(predicate?: (element: any, index: number) => boolean): any;
        singleOrDefault(predicate?: (element: any, index: number) => boolean, defaultValue?: any): any;
        skip(count: number): Enumerable;
        skipWhile(predicate: (element: any, index: number) => boolean): Enumerable;
        take(count: number): Enumerable;
        takeWhile(predicate: (element: any, index: number) => boolean): Enumerable;
        takeExceptLast(count?: number): Enumerable;
        takeFromLast(count: number): Enumerable;
        indexOf(item: any): number;
        indexOf(predicate: (element: any, index: number) => boolean): number;
        lastIndexOf(item: any): number;
        lastIndexOf(predicate: (element: any, index: number) => boolean): number;
        asEnumerable(): Enumerable;
        toArray(): any[];
        toLookup(keySelector: (element: any) => any, elementSelector?: (element: any) => any, compareSelector?: (element: any) => any): Lookup;
        toObject(keySelector: (element: any) => any, elementSelector?: (element: any) => any): Object;
        toDictionary(keySelector: (element: any) => any, elementSelector?: (element: any) => any, compareSelector?: (element: any) => any): Dictionary;
        toJSONString(replacer: (key: string, value: any) => any): string;
        toJSONString(replacer: any[]): string;
        toJSONString(replacer: (key: string, value: any) => any, space: any): string;
        toJSONString(replacer: any[], space: any): string;
        toJoinedString(separator?: string, selector?: (element: any, index: number) => any): string;
        doAction(action: (element: any, index: number) => void ): Enumerable;
        doAction(action: (element: any, index: number) => boolean): Enumerable;
        forEach(action: (element: any, index: number) => void ): void;
        forEach(action: (element: any, index: number) => boolean): void;
        write(separator?: string, selector?: (element: any) => any): void;
        writeLine(selector?: (element: any) => any): void;
        force(): void;
        letBind(func: (source: Enumerable) => any[]): Enumerable;
        letBind(func: (source: Enumerable) => { length: number;[x: number]: any; }): Enumerable;
        letBind(func: (source: Enumerable) => Enumerable): Enumerable;
        share(): DisposableEnumerable;
        memoize(): DisposableEnumerable;
        catchError(handler: (exception: any) => void ): Enumerable;
        finallyAction(finallyAction: () => void ): Enumerable;
        log(selector?: (element: any) => void ): Enumerable;
        trace(message?: string, selector?: (element: any) => void ): Enumerable;
    }

    interface OrderedEnumerable extends Enumerable {
        createOrderedEnumerable(keySelector: (element: any) => any, descending: boolean): OrderedEnumerable;
        thenBy(keySelector: (element: any) => any): OrderedEnumerable;
        thenByDescending(keySelector: (element: any) => any): OrderedEnumerable;
    }

    interface DisposableEnumerable extends Enumerable {
        dispose(): void;
    }

    interface Dictionary {
        add(key: any, value: any): void;
        get(key: any): any;
        set(key: any, value: any): boolean;
        contains(key: any): boolean;
        clear(): void;
        remove(key: any): void;
        count(): number;
        toEnumerable(): Enumerable; // Enumerable<KeyValuePair>
    }

    interface Lookup {
        count(): number;
        get(key: any): Enumerable;
        contains(key: any): boolean;
        toEnumerable(): Enumerable; // Enumerable<Groping>
    }

    interface Grouping extends Enumerable {
        key(): any;
    }
}

// export definition
declare var Enumerable: linqjs.EnumerableStatic;
