// Type definitions for Kefir 3.7.3
// Project: http://rpominov.github.io/kefir/
// Definitions by: Aya Morisawa <https://github.com/AyaMorisawa>
//                 Piotr Hitori Bosak <https://github.com/HitoriSensei>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="node" />

export type ValueOfAnObservable<T extends Observable<any, any>> = T[''];

export interface Subscription {
    unsubscribe(): void;
    closed: boolean; // Actually, `readonly` but it's avaiable in tsc starting with 2.0.0
}

export interface Observer<T, S> {
    value?: (value: T) => void;
    error?: (error: S) => void;
    end?: () => void;
}

export interface Subscription {
    unsubscribe(): void;
    closed: boolean; // Actually, `readonly` but it's avaiable in tsc starting with 2.0.0
}

export interface Observer<T, S> {
    value?: (value: T) => void;
    error?: (error: S) => void;
    end?: () => void;
}

export interface Observable<T, S> {
    '': T; // TypeScript hack to enable value unwrapping for combine/flatMap

    toProperty(getCurrent?: () => T): Property<T, S>;
    // Subscribe / add side effects
    onValue(callback: (value: T) => void): this;
    offValue(callback: (value: T) => void): this;
    onError(callback: (error: S) => void): this;
    offError(callback: (error: S) => void): this;
    onEnd(callback: () => void): this;
    offEnd(callback: () => void): this;
    onAny(callback: (event: Event<T | S>) => void): this;
    offAny(callback: (event: Event<T | S>) => void): this;
    log(name?: string): this;
    spy(name?: string): this;
    offLog(name?: string): this;
    offSpy(name?: string): this;
    flatten<U>(transformer?: (value: T) => U[]): Stream<U, S>;
    toPromise(): Promise<T>;
    toPromise<W extends PromiseLike<T>>(PromiseConstructor: () => W): W;
    toESObservable(): any;
    // This method is designed to replace all other methods for subscribing
    observe(params: Observer<T, S>): Subscription;
    observe(
        onValue?: (value: T) => void,
        onError?: (error: S) => void,
        onEnd?: () => void
    ): Subscription;
    setName(source: Observable<any, any>, selfName: string): this;
    setName(selfName: string): this;
}

export interface Stream<T, S> extends Observable<T, S> {
    // Modify an stream
    map<U>(fn: (value: T) => U): Stream<U, S>;
    filter(predicate?: (value: T) => boolean): Stream<T, S>;
    take(n: number): Stream<T, S>;
    takeWhile(predicate?: (value: T) => boolean): Stream<T, S>;
    last(): Stream<T, S>;
    skip(n: number): Stream<T, S>;
    skipWhile(predicate?: (value: T) => boolean): Stream<T, S>;
    skipDuplicates(comparator?: (a: T, b: T) => boolean): Stream<T, S>;
    diff(fn?: (prev: T, next: T) => T, seed?: T): Stream<T, S>;
    scan<W>(fn: (prev: T | W, next: T) => W): Stream<W, S>;
    scan<W>(fn: (prev: W, next: T) => W, seed: W): Stream<W, S>;
    delay(wait: number): Stream<T, S>;
    throttle(wait: number, options?: { leading?: boolean, trailing?: boolean }): Stream<T, S>;
    debounce(wait: number, options?: { immediate: boolean }): Stream<T, S>;
    valuesToErrors(): Stream<never, S | T>;
    valuesToErrors<U>(handler: (value: T) => { convert: boolean, error: U }): Stream<never, S | U>;
    errorsToValues<U>(handler?: (error: S) => { convert: boolean, value: U }): Stream<T | U, never>;
    mapErrors<U>(fn: (error: S) => U): Stream<T, U>;
    filterErrors(predicate?: (error: S) => boolean): Stream<T, S>;
    endOnError(): Stream<T, S>;
    takeErrors(n: number): Stream<T, S>;
    ignoreValues(): Stream<never, S>;
    ignoreErrors(): Stream<T, never>;
    ignoreEnd(): Stream<T, S>;
    beforeEnd<U>(fn: () => U): Stream<T | U, S>;
    slidingWindow(max: number, mix?: number): Stream<T[], S>;
    bufferWhile(predicate: (value: T) => boolean): Stream<T[], S>;
    bufferWithCount(count: number, options?: { flushOnEnd: boolean }): Stream<T[], S>;
    bufferWithTimeOrCount(interval: number, count: number, options?: { flushOnEnd: boolean }): Stream<T[], S>;
    transduce<U>(transducer: any): Stream<U, S>;
    withHandler<U, V>(handler: (emitter: Emitter<U, S>, event: Event<T | S>) => void): Stream<U, S>;
    // Combine streams
    combine<U, V, W>(otherObs: Stream<U, V>, combinator?: (value: T, ...values: U[]) => W): Stream<W, S | V>;
    zip<U, V, W>(otherObs: Stream<U, V>, combinator?: (value: T, ...values: U[]) => W): Stream<W, S | V>;
    merge<U, V>(otherObs: Stream<U, V>): Stream<T | U, S | V>;
    concat<U, V>(otherObs: Stream<U, V>): Stream<T | U, S | V>;
    flatMap<U, V>(transform: (value: T) => Stream<U, V>): Stream<U, V>;
    flatMap<X extends T & Property<T, any>>(): Stream<ValueOfAnObservable<X>, any>;
    flatMapLatest<U, V>(fn: (value: T) => Stream<U, V>): Stream<U, V>;
    flatMapLatest<X extends T & Property<T, any>>(): Stream<ValueOfAnObservable<X>, any>;
    flatMapFirst<U, V>(fn: (value: T) => Stream<U, V>): Stream<U, V>;
    flatMapFirst<X extends T & Property<T, any>>(): Stream<ValueOfAnObservable<X>, any>;
    flatMapConcat<U, V>(fn: (value: T) => Stream<U, V>): Stream<U, V>;
    flatMapConcat<X extends T & Property<T, any>>(): Stream<ValueOfAnObservable<X>, any>;
    flatMapConcurLimit<U, V>(fn: (value: T) => Stream<U, V>, limit: number): Stream<U, V>;
    flatMapErrors<U, V>(transform: (error: S) => Stream<U, V>): Stream<U, V>;
    // Combine two streams
    filterBy<U>(otherObs: Observable<boolean, U>): Stream<T, S>;
    sampledBy<U, V, W>(otherObs: Observable<U, V>, combinator?: (a: T, b: U) => W): Stream<W, S>;
    skipUntilBy<U, V>(otherObs: Observable<U, V>): Stream<U, V>;
    takeUntilBy<U, V>(otherObs: Observable<U, V>): Stream<U, V>;
    bufferBy<U, V>(otherObs: Observable<U, V>, options?: { flushOnEnd: boolean }): Stream<T[], S>;
    bufferWhileBy<U>(otherObs: Observable<boolean, U>, options?: { flushOnEnd?: boolean, flushOnChange?: boolean }): Stream<T[], S>;
    awaiting<U, V>(otherObs: Observable<U, V>): Stream<boolean, S>;
}

export interface Property<T, S> extends Observable<T, S> {
    changes(): Stream<T, S>;
    // Modify an property
    map<U>(fn: (value: T) => U): Property<U, S>;
    filter(predicate?: (value: T) => boolean): Property<T, S>;
    take(n: number): Property<T, S>;
    takeWhile(predicate?: (value: T) => boolean): Property<T, S>;
    last(): Property<T, S>;
    skip(n: number): Property<T, S>;
    skipWhile(predicate?: (value: T) => boolean): Property<T, S>;
    skipDuplicates(comparator?: (a: T, b: T) => boolean): Property<T, S>;
    diff(fn?: (prev: T, next: T) => T, seed?: T): Property<T, S>;
    scan(fn: (prev: T, next: T) => T, seed?: T): Property<T, S>;
    delay(wait: number): Property<T, S>;
    throttle(wait: number, options?: { leading?: boolean, trailing?: boolean }): Property<T, S>;
    debounce(wait: number, options?: { immediate: boolean }): Property<T, S>;
    valuesToErrors<U>(handler?: (value: T) => { convert: boolean, error: U }): Property<never, S | U>;
    errorsToValues<U>(handler?: (error: S) => { convert: boolean, value: U }): Property<T | U, never>;
    mapErrors<U>(fn: (error: S) => U): Property<T, U>;
    filterErrors(predicate?: (error: S) => boolean): Property<T, S>;
    endOnError(): Property<T, S>;
    takeErrors(n: number): Stream<T, S>;
    ignoreValues(): Property<never, S>;
    ignoreErrors(): Property<T, never>;
    ignoreEnd(): Property<T, S>;
    beforeEnd<U>(fn: () => U): Property<T | U, S>;
    slidingWindow(max: number, mix?: number): Property<T[], S>;
    bufferWhile(predicate: (value: T) => boolean): Property<T[], S>;
    bufferWithCount(count: number, options?: { flushOnEnd: boolean }): Property<T[], S>;
    bufferWithTimeOrCount(interval: number, count: number, options?: { flushOnEnd: boolean }): Property<T[], S>;
    transduce<U>(transducer: any): Property<U, S>;
    withHandler<U, V>(handler: (emitter: Emitter<T, S>, event: Event<T | S>) => void): Property<U, S>;
    // Combine properties
    combine<U, V, W>(otherObs: Property<U, V>, combinator?: (value: T, ...values: U[]) => W): Property<W, S | V>;
    zip<U, V, W>(otherObs: Property<U, V>, combinator?: (value: T, ...values: U[]) => W): Property<W, S | V>;
    merge<U, V>(otherObs: Property<U, V>): Property<T | U, S | V>;
    concat<U, V>(otherObs: Property<U, V>): Property<T | U, S | V>;
    flatMap<U, V>(transform: (value: T) => Property<U, V>): Property<U, V>;
    flatMap<X extends T & Property<T, any>>(): Property<ValueOfAnObservable<X>, any>;
    flatMapLatest<U, V>(fn: (value: T) => Property<U, V>): Property<U, V>;
    flatMapLatest<X extends T & Property<T, any>>(): Property<ValueOfAnObservable<X>, any>;
    flatMapFirst<U, V>(fn: (value: T) => Property<U, V>): Property<U, V>;
    flatMapFirst<X extends T & Property<T, any>>(): Property<ValueOfAnObservable<X>, any>;
    flatMapConcat<U, V>(fn: (value: T) => Property<U, V>): Property<U, V>;
    flatMapConcurLimit<U, V>(fn: (value: T) => Property<U, V>, limit: number): Property<U, V>;
    flatMapErrors<U, V>(transform: (error: S) => Property<U, V>): Property<U, V>;
    // Combine two properties
    filterBy<U>(otherObs: Observable<boolean, U>): Property<T, S>;
    sampledBy<U, V, W>(otherObs: Observable<U, V>, combinator?: (a: T, b: U) => W): Property<W, S>;
    skipUntilBy<U, V>(otherObs: Observable<U, V>): Property<U, V>;
    takeUntilBy<U, V>(otherObs: Observable<U, V>): Property<U, V>;
    bufferBy<U, V>(otherObs: Observable<U, V>, options?: { flushOnEnd: boolean }): Property<T[], S>;
    bufferWhileBy<U>(otherObs: Observable<boolean, U>, options?: { flushOnEnd?: boolean, flushOnChange?: boolean }): Property<T[], S>;
    awaiting<U, V>(otherObs: Observable<U, V>): Property<boolean, S>;
}

export interface ObservablePool<T, S> extends Observable<T, S> {
    plug(obs: Observable<T, S>): this;
    unPlug(obs: Observable<T, S>): this;
}

export interface Event<T> {
    type: string;
    value: T;
}

export interface Emitter<T, S> {
    emit(value: T): void;
    error(error: S): void;
    end(): void;
    emitEvent(event: { type: string, value: T | S }): void;
}

// Create a stream
export declare function never(): Stream<never, never>;
export declare function later<T>(wait: number, value: T): Stream<T, never>;
export declare function interval<T>(interval: number, value: T): Stream<T, never>;
export declare function sequentially<T>(interval: number, values: T[]): Stream<T, never>;
export declare function fromPoll<T>(interval: number, fn: () => T): Stream<T, never>;
export declare function withInterval<T, S>(interval: number, handler: (emitter: Emitter<T, S>) => void): Stream<T, S>;
export declare function fromCallback<T>(fn: (callback: (value: T) => void) => void): Stream<T, never>;
export declare function fromNodeCallback<T, S>(fn: (callback: (error: S, result: T) => void) => void): Stream<T, S>;
export declare function fromEvents<T, S>(target: EventTarget | NodeJS.EventEmitter | { on: Function, off: Function }, eventName: string, transform?: (value: T) => S): Stream<T, S>;
export declare function stream<T, S>(subscribe: (emitter: Emitter<T, S>) => Function | void): Stream<T, S>;
export declare function fromESObservable<T, S>(observable: any): Stream<T, S>

// Create a property
export declare function constant<T>(value: T): Property<T, never>;
export declare function constantError<T>(error: T): Property<never, T>;
export declare function fromPromise<T, S>(promise: Promise<T>): Property<T, S>;
// Combine observables
export declare function combine<T, S, U>(obss: Observable<T, S>[], passiveObss: Observable<T, S>[], combinator?: (...values: T[]) => U): Stream<U, S>;
export declare function combine<T, S, U>(obss: Observable<T, S>[], combinator: (...values: T[]) => U): Stream<U, S>;
export declare function combine<T extends { [name: string]: Observable<any, any> }>(obss: T): Stream<{ [P in keyof T]: ValueOfAnObservable<T[P]> }, any>;
export declare function combine<T extends [Observable<any, any>], P extends keyof T>(obss: T): Stream<[ValueOfAnObservable<T[0]>, ValueOfAnObservable<T[1]>], any>;
export declare function combine<T extends [Observable<any, any>, Observable<any, any>, Observable<any, any>, Observable<any, any>, Observable<any, any>, Observable<any, any>, Observable<any, any>, Observable<any, any>]>(obss: T): Stream<[ValueOfAnObservable<T[0]>, ValueOfAnObservable<T[1]>, ValueOfAnObservable<T[2]>, ValueOfAnObservable<T[3]>, ValueOfAnObservable<T[4]>, ValueOfAnObservable<T[5]>, ValueOfAnObservable<T[6]>, ValueOfAnObservable<T[7]>], any>;
export declare function combine<T extends [Observable<any, any>, Observable<any, any>, Observable<any, any>, Observable<any, any>, Observable<any, any>, Observable<any, any>, Observable<any, any>]>(obss: T): Stream<[ValueOfAnObservable<T[0]>, ValueOfAnObservable<T[1]>, ValueOfAnObservable<T[2]>, ValueOfAnObservable<T[3]>, ValueOfAnObservable<T[4]>, ValueOfAnObservable<T[5]>, ValueOfAnObservable<T[6]>], any>;
export declare function combine<T extends [Observable<any, any>, Observable<any, any>, Observable<any, any>, Observable<any, any>, Observable<any, any>, Observable<any, any>]>(obss: T): Stream<[ValueOfAnObservable<T[0]>, ValueOfAnObservable<T[1]>, ValueOfAnObservable<T[2]>, ValueOfAnObservable<T[3]>, ValueOfAnObservable<T[4]>, ValueOfAnObservable<T[5]>], any>;
export declare function combine<T extends [Observable<any, any>, Observable<any, any>, Observable<any, any>, Observable<any, any>, Observable<any, any>]>(obss: T): Stream<[ValueOfAnObservable<T[0]>, ValueOfAnObservable<T[1]>, ValueOfAnObservable<T[2]>, ValueOfAnObservable<T[3]>, ValueOfAnObservable<T[4]>], any>;
export declare function combine<T extends [Observable<any, any>, Observable<any, any>, Observable<any, any>, Observable<any, any>]>(obss: T): Stream<[ValueOfAnObservable<T[0]>, ValueOfAnObservable<T[1]>, ValueOfAnObservable<T[2]>, ValueOfAnObservable<T[3]>], any>;
export declare function combine<T extends [Observable<any, any>, Observable<any, any>, Observable<any, any>]>(obss: T): Stream<[ValueOfAnObservable<T[0]>, ValueOfAnObservable<T[1]>, ValueOfAnObservable<T[2]>], any>;
export declare function combine<T extends [Observable<any, any>, Observable<any, any>]>(obss: T): Stream<[ValueOfAnObservable<T[0]>, ValueOfAnObservable<T[1]>], any>;
export declare function combine<T extends [Observable<any, any>]>(obss: T): Stream<[ValueOfAnObservable<T[0]>], any>;
export declare function combine<T extends never[]>(obss: T): Stream<never, never>;
export declare function zip<T, S, U>(obss: Observable<T, S>[], passiveObss?: Observable<T, S>[], combinator?: (...values: T[]) => U): Observable<U, S>;
export declare function merge<T, S>(obss: Observable<T, S>[]): Observable<T, S>;
export declare function concat<T, S>(obss: Observable<T, S>[]): Observable<T, S>;
export declare function pool<T, S>(): ObservablePool<T, S>;
export declare function repeat<T, S>(generator: (i: number) => Observable<T, S> | boolean): Observable<T, S>;
