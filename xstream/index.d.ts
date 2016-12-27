// Type definitions for xstream 9.3
// Project: https://github.com/staltz/xstream#readme
// Definitions by: Mohamed Hegazy <https://github.com/mhegazy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Listener<T> {
    next: (value: T) => void;
    error: (err: any) => void;
    complete: () => void;
}

export interface Producer<T> {
    start: (listener: Listener<T>) => void;
    stop: () => void;
}

export class MemoryStream<T> {
    constructor(producer: Producer<T>);
    debug(labelOrSpy: string | ((e: any) => void)): MemoryStream<T>;
    endWhen(other: Stream<any>): Stream<T>
    map<U>(project: (t: T) => U): MemoryStream<U>;
    mapTo<U>(projectedValue: U): MemoryStream<U>;
    remember(): MemoryStream<T>;
    replaceError(replace: (err: any) => Stream<T>): MemoryStream<T>;
    take(amount: number): MemoryStream<T>;
    static combine<U>(...args: Array<MemoryStream<U>>): MemoryStream<U>;
    static create<U>(producer: Producer<U>): MemoryStream<U>;
    static createWithMemory<U>(producer: Producer<U>): MemoryStream<U>;
    static empty(): MemoryStream<undefined>;
    static from<U>(input: U[] | Promise<U>): MemoryStream<U>;
    static from(input: any): MemoryStream<any>;
    static fromArray<U>(array: U[]): MemoryStream<U>;
    static fromObservable(observable: any): MemoryStream<any>;
    static fromPromise<U>(promise: Promise<U>): MemoryStream<U>;
    static merge<U>(...args: Array<MemoryStream<U>>): MemoryStream<U>;
    static never(): MemoryStream<never>;
    static of<U>(...args: U[]): MemoryStream<U>;
    static periodic(period: number): MemoryStream<number>;
}

export class Stream<T> {
    constructor(producer: Producer<T>);
    addListener(listener: Listener<T>): void;
    compose<U>(operator: (s: Stream<T>) => Stream<U>): Stream<U>;
    ctor(): any;
    debug(labelOrSpy: string | ((e: any) => void)): Stream<T>;
    drop(amount: number): Stream<T>;
    endWhen(other: Stream<any>): Stream<T>;
    filter(passes: (value: T) => boolean): Stream<T>;
    flatten(): Stream<T>;
    fold<U>(accumulate: (acc: U, t: T) => U, seed: U): MemoryStream<U>;
    imitate(target: Stream<T>): void;
    last(): Stream<T>;
    map<U>(project: (t: T) => U): Stream<U>;
    mapTo<U>(projectedValue: U): Stream<U>;
    remember(): MemoryStream<T>;
    removeListener(listener: Listener<T>): void;
    replaceError(replace: (err: any) => Stream<T>): Stream<T>;
    setDebugListener(listener: Listener<T>): void;
    shamefullySendComplete(): void;
    shamefullySendError(error: any): void;
    shamefullySendNext(value: T): void;
    startWith(initial: T): MemoryStream<T>;
    subscribe(listener: Listener<T>): any;
    take(amount: number): Stream<T>;
    static combine<U>(...args: Array<Stream<U>>): Stream<U>;
    static create<U>(producer: Producer<U>): Stream<U>;
    static createWithMemory<U>(producer: Producer<U>): Stream<U>;
    static empty(): Stream<undefined>;
    static from<U>(input: U[] | Promise<U>): Stream<U>;
    static from(input: any): Stream<any>;
    static fromArray<U>(array: U[]): Stream<U>;
    static fromObservable(observable: any): Stream<any>;
    static fromPromise<U>(promise: Promise<U>): Stream<U>;
    static merge<U>(...args: Array<Stream<U>>): Stream<U>;
    static never(): Stream<never>;
    static of<U>(...args: U[]): Stream<U>;
    static periodic(period: number): Stream<number>;
}

export default Stream;