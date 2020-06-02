// Type definitions for streamjs 1.5.0
// Project: http://winterbe.github.io/streamjs/
// Definitions by: Bence Eros <https://github.com/erosb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Stream<T> {
    static from <T> (elems: T[]): Stream<T>;
    static from(str: string): Stream<string>;
    static of<T>(...elems: T[]): Stream<T>;
    static range (startInclusive: number, endExclusive: number): Stream<number>;
    static rangeClosed (startInclusive: number, endInclusive: number): Stream<number>;
    static generate <T> (supplier: Stream.Supplier<T>): Stream<T>;
    static iterate<T>(seed: T, fn: Stream.Function<T, T>): Stream<T>;

    anyMatch(predicate: Stream.Predicate<T>): boolean;
    anyMatch(regexp: RegExp): boolean;
    anyMatch(sample: Stream.Sample): boolean;
    allMatch(predicate: Stream.Predicate<T>): boolean;
    allMatch(regexp: RegExp): boolean;
    allMatch(sample: Stream.Sample): boolean;
    average(): number;
    average(path: string): number;
    avg(): number;
    avg(path: string): number;
    collect(collector: Stream.Collector<T>): T;
    count(): number;
    distinct(): Stream<T>;
    dropWhile(predicate: Stream.Predicate<T>): Stream<T>;
    dropWhile(regexp: RegExp): Stream<string>;
    dropWhile(sample: Stream.Sample): Stream<T>;
    each(consumer: Stream.Consumer<T>): void;
    filter(predicate: Stream.Predicate<T>): Stream<T>;
    filter(regexp: RegExp): Stream<string>;
    filter(sample: Stream.Sample): Stream<T>;
    findAny(): Stream.Optional<T>;
    findFirst(): Stream.Optional<T>;
    forEach(consumer: Stream.Consumer<T>): void;

    groupBy(mapper: Stream.Function<T, string>): Stream.GroupingResult<T>;
    groupBy(path: string): Stream.GroupingResult<T>;
    groupingBy(mapper: Stream.Function<T, string>): Stream.GroupingResult<T>;
    groupingBy(path: string): Stream.GroupingResult<T>;
    indexBy(keyMapper: Stream.Function<T, string>, mergeFunction?: Stream.Accumulator<T>): Stream.Map<T>;
    map <U> (mapper: Stream.Function<T, U>): Stream<U>;
    max(): Stream.Optional<T>;
    max(comparator: Stream.Comparator<T>): Stream.Optional<T>;
    max(path: string): Stream.Optional<T>;
    min(): Stream.Optional<T>;
    min(comparator: Stream.Comparator<T>): Stream.Optional<T>;
    min(path: string): Stream.Optional<T>;
    noneMatch(predicate: (elem: T) => boolean): boolean;
    noneMatch(regexp: RegExp): boolean;
    flatMap <U> (mapper: Stream.Function<T, U[]>): Stream<U>;
    iterator(): Stream.Iterator<T>;
    joining(): string;
    joining(delimiter: string): string;
    joining(options: Stream.JoinOptions): string;
    join(): string;
    join(delimiter: string): string;
    join(options: Stream.JoinOptions): string;
    limit(limit: number): Stream<T>;
    partitioningBy(predicate: Stream.Predicate<T>): T[][];
    partitionBy(predicate: Stream.Predicate<T>): T[][];
    partitionBy(sample: Stream.Sample): T[][];
    partitioningBy(regexp: RegExp): T[][];
    partitionBy(regexp: RegExp): T[][];
    partitioningBy(size: number): T[][];
    partitionBy(size: number): T[][];
    partitioningBy(sample: Stream.Sample): T[][];
    peek(consumer: Stream.Consumer<T>): Stream<T>;
    reduce(identity: T, accumulator: Stream.Accumulator<T>): T;
    reduce(accumulator: Stream.Accumulator<T>): Stream.Optional<T>;
    reverse(): Stream<T>;
    size(): number;
    sorted(): Stream<T>;
    sorted(comparator: Stream.Comparator<T>): Stream<T>;
    sorted(path: string): Stream<T>;
    sort(): Stream<T>;
    sort(comparator: Stream.Comparator<T>): Stream<T>;
    sort(path: string): Stream<T>;
    shuffle(): Stream<T>;
    skip(n: number): Stream<T>;
    slice(begin: number, end: number): Stream<T>;
    sum(): number;
    sum(path: string): number;
    takeWhile(predicate: Stream.Predicate<T>): Stream<T>;
    takeWhile(regexp: RegExp): Stream<string>;
    takeWhile(sample: Stream.Sample): Stream<T>;
    toArray(): T[];
    toList(): T[];
    toMap(keyMapper: Stream.Function<T, string>, mergeFunction?: Stream.Accumulator<T>): Stream.Map<T>;
    toMap(path: string, mergeFunction?: Stream.Accumulator<T>): Stream.Map<T>;
}

declare namespace Stream {

    export interface Map<T> {
        [index: string]: T
    }


    export interface Sample {
        [index: string]: any
    }

    export interface Accumulator<T> {
        (e1: T, e2: T): T;
    }

    export interface Collector<T> {
        supplier: Supplier<T>;
        accumulator: Stream.Accumulator<T>;
        finisher: Function<T, T>;
    }

    export interface Comparator<T> {
        (e1: T, e2: T): number
    }

    export interface Consumer<T> {
        (elem: T): void;
    }

    export interface Function<T, U> {
        (elem: T): U;
    }

    export interface GroupingResult<T> {
        [index: string]: T[]
    }

    export interface Iterator<T> {
        next(): T;
        done: boolean;
    }

    export interface JoinOptions {
        prefix: string;
        delimiter: string;
        suffix: string;
    }

    export interface Predicate<T> {
        (elem: T): boolean;
    }

    export interface Supplier<T> {
        (): T
    }

    export class Optional<T> {
        static of<T>(elem: T): Optional<T>;
        static ofNullable<T>(elem: T): Optional<T>;

        filter(predicate: (elem: T) => boolean): Optional<T>;
        map<U>(mapper: (elem: T) => U): Optional<U>;
        flatMap<U>(mapper: (elem: T) => Stream.Optional<U>): Optional<U>;
        isPresent(): boolean;
        get(): T;
        ifPresent(consumer: (elem: T) => void): void;
        orElse(other: T): T;
        orElseGet(supplier: Stream.Supplier<T>): T;
        orElseThrow(error: any): T;
    }
}
