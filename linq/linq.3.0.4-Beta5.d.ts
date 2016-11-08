// Type definitions for linq.js v3.0.4-Beta5
// Project: https://linqjs.codeplex.com/
// Definitions by: neuecc <https://www.codeplex.com/site/users/view/neuecc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module linqjs {
    interface IEnumerator<T> {
        current(): T;
        moveNext(): boolean;
        dispose(): void;
    }

    interface IEqualityComparer<T> {
        equals(x: T, y: T): boolean;
        getHashCode(obj: any): string;
    }

    interface ITuple<T1, T2, T3, T4, T5, T6, T7, T8> {
        equals(other: ITuple<T1, T2, T3, T4, T5, T6, T7, T8>): boolean;
        getHashCode(): string;
    }

    interface ITupleArray {
        equals(other: ITupleArray): boolean;
        getHashCode(): string;
    }

    interface Enumerable {
        Utils: {
            createLambda(expression: any): (...params: any[]) => any;
            createEnumerable<T>(getEnumerator: () => IEnumerator<T>): IEnumerable<T>;
            createEnumerator<T>(initialize: () => void, tryGetNext: () => boolean, dispose: () => void): IEnumerator<T>;
            getDefaultEqualityComparer<T>(): IEqualityComparer<T>;
            createEqualityComparer<T>(equals: (x: T, y: T) => boolean, getHashCode: (obj: any) => string): IEqualityComparer<T>;
            createKeyedEqualityComparer<TKey, TValue>(keySelector: (element: TValue) => TKey): IEqualityComparer<TValue>;
            createDictionary<TKey, TValue>(compareSelector: (element: TValue) => TKey): IDictionary<TKey, TValue>;
            createDictionary<TKey, TValue>(equalityComparer: IEqualityComparer<TValue>): IDictionary<TKey, TValue>;
            createList<T>(): IList<T>;
            createTuple<T1, T2, T3, T4, T5, T6, T7, T8>(item1: T1, item2: T2, item3?: T3, item4?: T4, item5?: T5, item6?: T6, item7?: T7, item8?: T8): ITuple<T1, T2, T3, T4, T5, T6, T7, T8>;
            extendTo(type: any, forceAppend?: boolean): void;
        };
        choice<T>(...params: T[]): IEnumerable<T>;
        cycle<T>(...params: T[]): IEnumerable<T>;
        empty<T>(): IEnumerable<T>;
        // from<T>, obj as JScript's IEnumerable or WinMD IIterable<T> is IEnumerable<T> but it can't define.
        from(): IEnumerable<any>; // empty
        from<T>(obj: IEnumerable<T>): IEnumerable<T>;
        from(obj: number): IEnumerable<number>;
        from(obj: boolean): IEnumerable<boolean>;
        from(obj: string): IEnumerable<string>;
        from<T>(obj: T[]): IEnumerable<T>;
        from<T>(obj: { length: number; [x: number]: T; }): IEnumerable<T>;
        from(obj: any): IEnumerable<{ key: string; value: any }>;
        make<T>(element: T): IEnumerable<T>;
        matches<T>(input: string, pattern: RegExp): IEnumerable<T>;
        matches<T>(input: string, pattern: string, flags?: string): IEnumerable<T>;
        range(start: number, count: number, step?: number): IEnumerable<number>;
        rangeDown(start: number, count: number, step?: number): IEnumerable<number>;
        rangeTo(start: number, to: number, step?: number): IEnumerable<number>;
        repeat<T>(element: T, count?: number): IEnumerable<T>;
        repeatWithFinalize<T>(initializer: () => T, finalizer: (element: T) => void): IEnumerable<T>;
        generate<T>(func: () => T, count?: number): IEnumerable<T>;
        toInfinity(start?: number, step?: number): IEnumerable<number>;
        toNegativeInfinity(start?: number, step?: number): IEnumerable<number>;
        unfold<T>(seed: T, func: (value: T) => T): IEnumerable<T>;
        defer<T>(enumerableFactory: () => IEnumerable<T>): IEnumerable<T>;
    }

    interface IEnumerable<T> {
        constructor(getEnumerator: () => IEnumerator<T>): IEnumerable<T>;
        getEnumerator(): IEnumerator<T>;

        // Extension Methods
        traverseBreadthFirst(func: (element: T) => IEnumerable<T>): IEnumerable<T>;
        traverseBreadthFirst<TResult>(func: (element: T) => IEnumerable<T>, resultSelector: (element: T, nestLevel: number) => TResult): IEnumerable<TResult>;
        traverseDepthFirst<TResult>(func: (element: T) => Enumerable): IEnumerable<T>;
        traverseDepthFirst<TResult>(func: (element: T) => Enumerable, resultSelector?: (element: T, nestLevel: number) => TResult): IEnumerable<TResult>;
        flatten(): IEnumerable<any>;
        pairwise<TResult>(selector: (prev: T, current: T) => TResult): IEnumerable<TResult>;
        scan(func: (prev: T, current: T) => T): IEnumerable<T>;
        scan<TAccumulate>(seed: TAccumulate, func: (prev: TAccumulate, current: T) => TAccumulate): IEnumerable<TAccumulate>;
        select<TResult>(selector: (element: T, index: number) => TResult): IEnumerable<TResult>;
        selectMany<TOther>(collectionSelector: (element: T, index: number) => IEnumerable<TOther>): IEnumerable<TOther>;
        selectMany<TCollection, TResult>(collectionSelector: (element: T, index: number) => IEnumerable<TCollection>, resultSelector: (outer: T, inner: TCollection) => TResult): IEnumerable<TResult>;
        selectMany<TOther>(collectionSelector: (element: T, index: number) => TOther[]): IEnumerable<TOther>;
        selectMany<TCollection, TResult>(collectionSelector: (element: T, index: number) => TCollection[], resultSelector: (outer: T, inner: TCollection) => TResult): IEnumerable<TResult>;
        selectMany<TOther>(collectionSelector: (element: T, index: number) => { length: number; [x: number]: TOther; }): IEnumerable<TOther>;
        selectMany<TCollection, TResult>(collectionSelector: (element: T, index: number) => { length: number; [x: number]: TCollection; }, resultSelector: (outer: T, inner: TCollection) => TResult): IEnumerable<TResult>;
        where(predicate: (element: T, index: number) => boolean): IEnumerable<T>;
        choose(selector: (element: T, index: number) => T): IEnumerable<T>;
        ofType<TResult>(type: any): IEnumerable<TResult>;
        zip<TResult>(second: IEnumerable<T>, resultSelector: (first: T, second: T, index: number) => TResult): IEnumerable<TResult>;
        zip<TResult>(second: { length: number; [x: number]: T; }, resultSelector: (first: T, second: T, index: number) => TResult): IEnumerable<TResult>;
        zip<TResult>(second: T[], resultSelector: (first: T, second: T, index: number) => TResult): IEnumerable<TResult>;
        zip<TResult>(...params: any[]): IEnumerable<TResult>; // last one is selector
        merge<TResult>(...params: IEnumerable<T>[]): IEnumerable<T>;
        merge<TResult>(...params: { length: number; [x: number]: T; }[]): IEnumerable<T>;
        merge<TResult>(...params: T[][]): IEnumerable<T>;
        join<TInner, TKey, TResult>(inner: IEnumerable<TInner>, outerKeySelector: (outer: T) => TKey, innerKeySelector: (inner: TInner) => TKey, resultSelector: (outer: T, inner: TKey) => TResult, compareSelector?: (obj: T) => TKey): IEnumerable<TResult>;
        join<TInner, TKey, TResult>(inner: { length: number; [x: number]: TInner; }, outerKeySelector: (outer: T) => TKey, innerKeySelector: (inner: TInner) => TKey, resultSelector: (outer: T, inner: TKey) => TResult, compareSelector?: (obj: T) => TKey): IEnumerable<TResult>;
        join<TInner, TKey, TResult>(inner: TInner[], outerKeySelector: (outer: T) => TKey, innerKeySelector: (inner: TInner) => TKey, resultSelector: (outer: T, inner: TKey) => TResult, compareSelector?: (obj: T) => TKey): IEnumerable<TResult>;
        groupJoin<TInner, TKey, TResult>(inner: IEnumerable<TInner>, outerKeySelector: (outer: T) => TKey, innerKeySelector: (inner: TInner) => TKey, resultSelector: (outer: T, inner: TKey) => TResult, compareSelector?: (obj: T) => TKey): IEnumerable<TResult>;
        groupJoin<TInner, TKey, TResult>(inner: { length: number; [x: number]: TInner; }, outerKeySelector: (outer: T) => TKey, innerKeySelector: (inner: TInner) => TKey, resultSelector: (outer: T, inner: TKey) => TResult, compareSelector?: (obj: T) => TKey): IEnumerable<TResult>;
        groupJoin<TInner, TKey, TResult>(inner: TInner[], outerKeySelector: (outer: T) => TKey, innerKeySelector: (inner: TInner) => TKey, resultSelector: (outer: T, inner: TKey) => TResult, compareSelector?: (obj: T) => TKey): IEnumerable<TResult>;
        all(predicate: (element: T) => boolean): boolean;
        any(predicate?: (element: T) => boolean): boolean;
        isEmpty(): boolean;
        concat(...sequences: IEnumerable<T>[]): IEnumerable<T>;
        concat(...sequences: { length: number; [x: number]: T; }[]): IEnumerable<T>;
        concat(...sequences: T[]): IEnumerable<T>;
        insert(index: number, second: IEnumerable<T>): IEnumerable<T>;
        insert(index: number, second: { length: number; [x: number]: T; }): IEnumerable<T>;
        alternate(alternateValue: T): IEnumerable<T>;
        alternate(alternateSequence: { length: number; [x: number]: T; }): IEnumerable<T>;
        alternate(alternateSequence: IEnumerable<T>): IEnumerable<T>;
        alternate(alternateSequence: T[]): IEnumerable<T>;
        contains(value: T): boolean;
        contains<TCompare>(value: T, compareSelector?: (element: T) => TCompare): boolean;
        contains(value: T, equalityComparer?: IEqualityComparer<T>): boolean;
        defaultIfEmpty(defaultValue?: T): IEnumerable<T>;
        distinct(): IEnumerable<T>;
        distinct<TCompare>(compareSelector: (element: T) => TCompare): IEnumerable<T>;
        distinctUntilChanged(): IEnumerable<T>;
        distinctUntilChanged<TCompare>(compareSelector: (element: T) => TCompare): IEnumerable<T>;
        except(second: { length: number; [x: number]: T; }): IEnumerable<T>;
        except<TCompare>(second: { length: number; [x: number]: T; }, compareSelector: (element: T) => TCompare): IEnumerable<T>;
        except(second: IEnumerable<T>): IEnumerable<T>;
        except<TCompare>(second: IEnumerable<T>, compareSelector: (element: T) => TCompare): IEnumerable<T>;
        except(second: T[]): IEnumerable<T>;
        except<TCompare>(second: T[], compareSelector: (element: T) => TCompare): IEnumerable<T>;
        intersect(second: { length: number; [x: number]: T; }): IEnumerable<T>;
        intersect<TCompare>(second: { length: number; [x: number]: T; }, compareSelector: (element: T) => TCompare): IEnumerable<T>;
        intersect(second: IEnumerable<T>): IEnumerable<T>;
        intersect<TCompare>(second: IEnumerable<T>, compareSelector: (element: T) => TCompare): IEnumerable<T>;
        intersect(second: T[]): IEnumerable<T>;
        intersect<TCompare>(second: T[], compareSelector: (element: T) => TCompare): IEnumerable<T>;
        union(second: { length: number; [x: number]: T; }): IEnumerable<T>;
        union<TCompare>(second: { length: number; [x: number]: T; }, compareSelector: (element: T) => TCompare): IEnumerable<T>;
        union(second: IEnumerable<T>): IEnumerable<T>;
        union<TCompare>(second: IEnumerable<T>, compareSelector: (element: T) => TCompare): IEnumerable<T>;
        union(second: T[]): IEnumerable<T>;
        union<TCompare>(second: T[], compareSelector: (element: T) => TCompare): IEnumerable<T>;
        sequenceEqual(second: { length: number; [x: number]: T; }): boolean;
        sequenceEqual<TCompare>(second: { length: number; [x: number]: T; }, compareSelector: (element: T) => TCompare): boolean;
        sequenceEqual(second: IEnumerable<T>): boolean;
        sequenceEqual<TCompare>(second: IEnumerable<T>, compareSelector: (element: T) => TCompare): boolean;
        sequenceEqual(second: T[]): boolean;
        sequenceEqual<TCompare>(second: T[], compareSelector: (element: T) => TCompare): boolean;
        orderBy<TKey>(keySelector: (element: T) => TKey): IOrderedEnumerable<T>;
        orderBy<TKey>(keySelector: (element: T) => TKey, comparison: (x: TKey, y: TKey) => number): IOrderedEnumerable<T>;
        orderByDescending<TKey>(keySelector: (element: T) => TKey): IOrderedEnumerable<T>;
        orderByDescending<TKey>(keySelector: (element: T) => TKey, comparison: (x: TKey, y: TKey) => number): IOrderedEnumerable<T>;
        reverse(): IEnumerable<T>;
        shuffle(): IEnumerable<T>;
        weightedSample(weightSelector: (element: T) => number): IEnumerable<T>;
        // truly, return type is IEnumerable<IGrouping<TKey, T>> but Visual Studio + TypeScript Compiler can't compile.
        groupBy<TKey>(keySelector: (element: T) => TKey): IEnumerable<IGrouping<TKey, any>>;
        groupBy<TKey, TElement>(keySelector: (element: T) => TKey, elementSelector: (element: T) => TElement): IEnumerable<IGrouping<TKey, TElement>>;
        groupBy<TKey, TElement, TResult>(keySelector: (element: T) => TKey, elementSelector: (element: T) => TElement, resultSelector: (key: TKey, element: IEnumerable<TElement>) => TResult): IEnumerable<TResult>;
        groupBy<TKey, TElement, TResult, TCompare>(keySelector: (element: T) => TKey, elementSelector: (element: T) => TElement, resultSelector: (key: TKey, element: IEnumerable<TElement>) => TResult, compareSelector: (element: TKey) => TCompare): IEnumerable<TResult>;
        // :IEnumerable<IGrouping<TKey, T>>
        partitionBy<TKey>(keySelector: (element: T) => TKey): IEnumerable<IGrouping<TKey, any>>;
        // :IEnumerable<IGrouping<TKey, TElement>>
        partitionBy<TKey, TElement>(keySelector: (element: T) => TKey, elementSelector: (element: T) => TElement): IEnumerable<IGrouping<TKey, TElement>>;
        partitionBy<TKey, TElement, TResult>(keySelector: (element: T) => TKey, elementSelector: (element: T) => TElement, resultSelector: (key: TKey, element: IEnumerable<TElement>) => TResult): IEnumerable<TResult>;
        partitionBy<TKey, TElement, TResult, TCompare>(keySelector: (element: T) => TKey, elementSelector: (element: T) => TElement, resultSelector: (key: TKey, element: IEnumerable<TElement>) => TResult, compareSelector: (element: T) => TCompare): IEnumerable<TResult>;
        buffer(count: number): IEnumerable<T>;
        aggregate(func: (prev: T, current: T) => T): T;
        aggregate<TAccumulate>(seed: TAccumulate, func: (prev: TAccumulate, current: T) => TAccumulate): TAccumulate;
        aggregate<TAccumulate, TResult>(seed: TAccumulate, func: (prev: TAccumulate, current: T) => TAccumulate, resultSelector: (last: TAccumulate) => TResult): TResult;
        average(selector?: (element: T) => number): number;
        count(predicate?: (element: T, index: number) => boolean): number;
        max(selector?: (element: T) => number): number;
        min(selector?: (element: T) => number): number;
        maxBy<TKey>(keySelector: (element: T) => TKey): T;
        minBy<TKey>(keySelector: (element: T) => TKey): T;
        sum(selector?: (element: T) => number): number;
        elementAt(index: number): T;
        elementAtOrDefault(index: number, defaultValue?: T): T;
        first(predicate?: (element: T, index: number) => boolean): T;
        firstOrDefault(predicate?: (element: T, index: number) => boolean, defaultValue?: T): T;
        last(predicate?: (element: T, index: number) => boolean): T;
        lastOrDefault(predicate?: (element: T, index: number) => boolean, defaultValue?: T): T;
        single(predicate?: (element: T, index: number) => boolean): T;
        singleOrDefault(predicate?: (element: T, index: number) => boolean, defaultValue?: T): T;
        skip(count: number): IEnumerable<T>;
        skipWhile(predicate: (element: T, index: number) => boolean): IEnumerable<T>;
        take(count: number): IEnumerable<T>;
        takeWhile(predicate: (element: T, index: number) => boolean): IEnumerable<T>;
        takeExceptLast(count?: number): IEnumerable<T>;
        takeFromLast(count: number): IEnumerable<T>;
        indexOf(item: T): number;
        indexOf(predicate: (element: T, index: number) => boolean): number;
        lastIndexOf(item: T): number;
        lastIndexOf(predicate: (element: T, index: number) => boolean): number;
        asEnumerable(): IEnumerable<T>;
        cast<TResult>(): IEnumerable<TResult>;
        toArray(): T[];
        toList(): IList<T>;
        // truly, return type is ILookup<TKey, T> but Visual Studio + TypeScript Compiler can't compile. 
        toLookup<TKey>(keySelector: (element: T) => TKey): ILookup<TKey, any>;
        toLookup<TKey, TElement>(keySelector: (element: T) => TKey, elementSelector: (element: T) => TElement): ILookup<TKey, TElement>;
        toLookup<TKey, TElement, TCompare>(keySelector: (element: T) => TKey, elementSelector: (element: T) => TElement, compareSelector: (key: TKey) => TCompare): ILookup<TKey, TElement>;
        toObject(keySelector: (element: T) => any, elementSelector?: (element: T) => any): Object;
        // :IDictionary<TKey, T>
        toDictionary<TKey>(keySelector: (element: T) => TKey): IDictionary<TKey, any>;
        toDictionary<TKey, TValue>(keySelector: (element: T) => TKey, elementSelector: (element: T) => TValue): IDictionary<TKey, TValue>;
        toDictionary<TKey, TValue, TCompare>(keySelector: (element: T) => TKey, elementSelector: (element: T) => TValue, compareSelector: (key: TKey) => TCompare): IDictionary<TKey, TValue>;
        toJSONString(replacer: (key: string, value: any) => any): string;
        toJSONString(replacer: any[]): string;
        toJSONString(replacer: (key: string, value: any) => any, space: any): string;
        toJSONString(replacer: any[], space: any): string;
        toJoinedString(separator?: string): string;
        toJoinedString<TResult>(separator: string, selector: (element: T, index: number) => TResult): string;
        doAction(action: (element: T, index: number) => void): IEnumerable<T>;
        doAction(action: (element: T, index: number) => boolean): IEnumerable<T>;
        forEach(action: (element: T, index: number) => void): void;
        forEach(action: (element: T, index: number) => boolean): void;
        write(separator?: string): void;
        write<TResult>(separator: string, selector: (element: T) => TResult): void;
        writeLine(): void;
        writeLine<TResult>(selector: (element: T) => TResult): void;
        force(): void;
        letBind<TResult>(func: (source: IEnumerable<T>) => { length: number; [x: number]: TResult; }): IEnumerable<TResult>;
        letBind<TResult>(func: (source: IEnumerable<T>) => TResult[]): IEnumerable<TResult>;
        letBind<TResult>(func: (source: IEnumerable<T>) => IEnumerable<TResult>): IEnumerable<TResult>;
        share(): IDisposableEnumerable<T>;
        memoize(): IDisposableEnumerable<T>;
        catchError(handler: (exception: any) => void): IEnumerable<T>;
        finallyAction(finallyAction: () => void): IEnumerable<T>;
        log(): IEnumerable<T>;
        log<TValue>(selector: (element: T) => TValue): IEnumerable<T>;
        trace(message?: string): IEnumerable<T>;
        trace<TValue>(message: string, selector: (element: T) => TValue): IEnumerable<T>;
    }

    interface IOrderedEnumerable<T> extends IEnumerable<T> {
        createOrderedEnumerable<TKey>(keySelector: (element: T) => TKey, comparison: (x: TKey, y: TKey) => number, descending: boolean): IOrderedEnumerable<T>;
        thenBy<TKey>(keySelector: (element: T) => TKey) : IOrderedEnumerable<T>;
        thenBy<TKey>(keySelector: (element: T) => TKey, comparison: (x: TKey, y: TKey) => number) : IOrderedEnumerable<T>;
        thenByDescending<TKey>(keySelector: (element: T) => TKey): IOrderedEnumerable<T>;
        thenByDescending<TKey>(keySelector: (element: T) => TKey, comparison: (x: TKey, y: TKey) => number): IOrderedEnumerable<T>;
    }

    interface IDisposableEnumerable<T> extends IEnumerable<T> {
        dispose(): void;
    }

    interface IDictionary<TKey, TValue> {
        add(key: TKey, value: TValue): void;
        get(key: TKey): TValue;
        set(key: TKey, value: TValue): boolean;
        contains(key: TKey): boolean;
        clear(): void;
        remove(key: TKey): void;
        count(): number;
        toEnumerable(): IEnumerable<{ key: TKey; value: TValue }>;
    }

    interface ILookup<TKey, TElement> {
        count(): number;
        get(key: TKey): IEnumerable<TElement>;
        contains(key: TKey): boolean;
        toEnumerable(): IEnumerable<IGrouping<TKey, TElement>>;
    }

    interface IGrouping<TKey, TElement> extends IEnumerable<TElement> {
        key(): TKey;
    }

    interface IList<T> extends Array<T> {
    }
}

// export definition
declare var Enumerable: linqjs.Enumerable;
