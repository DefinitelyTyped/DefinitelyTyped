// Type definitions for Async 2.0.1
// Project: https://github.com/caolan/async
// Definitions by: Boris Yankov <https://github.com/borisyankov>, Arseniy Maximov <https://github.com/kern0>, Joe Herman <https://github.com/Penryn>, Angus Fenying <https://github.com/fenying>, Pascal Martin <https://github.com/pascalmartin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export as namespace async;

export interface Dictionary<T> { [key: string]: T; }

export interface ErrorCallback<T> { (err?: T): void; }
export interface AsyncBooleanResultCallback<E> { (err?: E, truthValue?: boolean): void; }
export interface AsyncResultCallback<T, E> { (err?: E, result?: T): void; }
export interface AsyncResultArrayCallback<T, E> { (err?: E, results?: Array<T | undefined>): void; }
export interface AsyncResultObjectCallback<T, E> { (err: E | undefined, results: Dictionary<T | undefined>): void; }

export interface AsyncFunction<T, E> { (callback: (err?: E, result?: T) => void): void; }
export interface AsyncFunctionEx<T, E> { (callback: (err?: E, ...results: T[]) => void): void; }
export interface AsyncIterator<T, E> { (item: T, callback: ErrorCallback<E>): void; }
export interface AsyncForEachOfIterator<T, E> { (item: T, key: number|string, callback: ErrorCallback<E>): void; }
export interface AsyncResultIterator<T, R, E> { (item: T, callback: AsyncResultCallback<R, E>): void; }
export interface AsyncMemoIterator<T, R, E> { (memo: R | undefined, item: T, callback: AsyncResultCallback<R, E>): void; }
export interface AsyncBooleanIterator<T, E> { (item: T, callback: AsyncBooleanResultCallback<E>): void; }

export interface AsyncWorker<T, E> { (task: T, callback: ErrorCallback<E>): void; }
export interface AsyncVoidFunction<E> { (callback: ErrorCallback<E>): void; }

export type AsyncAutoTasks<R extends Dictionary<any>, E> = { [K in keyof R]: AsyncAutoTask<R[K], R, E> }
export type AsyncAutoTask<R1, R extends Dictionary<any>, E> = AsyncAutoTaskFunctionWithoutDependencies<R1, E> | (keyof R | AsyncAutoTaskFunction<R1, R, E>)[];
export interface AsyncAutoTaskFunctionWithoutDependencies<R1, E> { (cb: AsyncResultCallback<R1, E> | ErrorCallback<E>): void; }
export interface AsyncAutoTaskFunction<R1, R extends Dictionary<any>, E> { (results: R, cb: AsyncResultCallback<R1, E> | ErrorCallback<E>): void; }

export interface AsyncQueue<T> {
    length(): number;
    started: boolean;
    running(): number;
    idle(): boolean;
    concurrency: number;
    push<E>(task: T, callback?: ErrorCallback<E>): void;
    push<R,E>(task: T, callback?: AsyncResultCallback<R, E>): void;
    push<E>(task: T[], callback?: ErrorCallback<E>): void;
    unshift<E>(task: T, callback?: ErrorCallback<E>): void;
    unshift<E>(task: T[], callback?: ErrorCallback<E>): void;
    saturated: () => any;
    empty: () => any;
    drain: () => any;
    paused: boolean;
    pause(): void
    resume(): void;
    kill(): void;
    workersList(): {
        data: T,
        callback: Function
    }[];
    error(error: Error, data: any): void;
    unsaturated(): void;
    buffer: number;
}

export interface AsyncPriorityQueue<T> {
    length(): number;
    concurrency: number;
    started: boolean;
    paused: boolean;
    push<R,E>(task: T, priority: number, callback?: AsyncResultArrayCallback<R, E>): void;
    push<R,E>(task: T[], priority: number, callback?: AsyncResultArrayCallback<R, E>): void;
    saturated: () => any;
    empty: () => any;
    drain: () => any;
    running(): number;
    idle(): boolean;
    pause(): void;
    resume(): void;
    kill(): void;
    workersList(): {
        data: T,
        priority: number,
        callback: Function
    }[];
    error(error: Error, data: any): void;
    unsaturated(): void;
    buffer: number;
}

export interface AsyncCargo {
    length(): number;
    payload?: number;
    push(task: any, callback? : Function): void;
    push(task: any[], callback? : Function): void;
    saturated(): void;
    empty(): void;
    drain(): void;
    idle(): boolean;
    pause(): void;
    resume(): void;
    kill(): void;
}

// Collections
export function each<T, E>(arr: T[] | IterableIterator<T>, iterator: AsyncIterator<T, E>, callback?: ErrorCallback<E>): void;
export function each<T, E>(arr: Dictionary<T>, iterator: AsyncIterator<T, E>, callback?: ErrorCallback<E>): void;
export const eachSeries: typeof each;
export function eachLimit<T, E>(arr: T[] | IterableIterator<T>, limit: number, iterator: AsyncIterator<T, E>, callback?: ErrorCallback<E>): void;
export function eachLimit<T, E>(arr: Dictionary<T>, limit: number, iterator: AsyncIterator<T, E>, callback?: ErrorCallback<E>): void;
export const forEach: typeof each;
export const forEachSeries: typeof each;
export const forEachLimit: typeof eachLimit;
export function forEachOf<T, E>(obj: T[] | IterableIterator<T>, iterator: AsyncForEachOfIterator<T, E>, callback?: ErrorCallback<E>): void;
export function forEachOf<T, E>(obj: Dictionary<T>, iterator: AsyncForEachOfIterator<T, E>, callback?: ErrorCallback<E>): void;
export const forEachOfSeries: typeof forEachOf;
export function forEachOfLimit<T, E>(obj: T[] | IterableIterator<T>, limit: number, iterator: AsyncForEachOfIterator<T, E>, callback?: ErrorCallback<E>): void;
export function forEachOfLimit<T, E>(obj: Dictionary<T>, limit: number, iterator: AsyncForEachOfIterator<T, E>, callback?: ErrorCallback<E>): void;
export const eachOf: typeof forEachOf;
export const eachOfSeries: typeof forEachOf;
export const eachOfLimit: typeof forEachOfLimit;
export function map<T, R, E>(arr: T[] | IterableIterator<T>, iterator: AsyncResultIterator<T, R, E>, callback?: AsyncResultArrayCallback<R, E>): void;
export function map<T, R, E>(arr: Dictionary<T>, iterator: AsyncResultIterator<T, R, E>, callback?: AsyncResultArrayCallback<R, E>): void;
export const mapSeries: typeof map;
export function mapLimit<T, R, E>(
    arr: T[] | Dictionary<T> | IterableIterator<T>,
    limit: number,
    iterator: AsyncResultIterator<T, R, E>,
    callback?: AsyncResultArrayCallback<R, E>
): void;
export function mapValuesLimit<T, R, E>(obj: Dictionary<T>, limit: number, iteratee: (value: T, key: string, callback: AsyncResultCallback<R, E>) => void, callback: AsyncResultObjectCallback<R, E>): void;
export function mapValues<T, R, E>(obj: Dictionary<T>, iteratee: (value: T, key: string, callback: AsyncResultCallback<R, E>) => void, callback: AsyncResultObjectCallback<R, E>): void;
export const mapValuesSeries: typeof mapValues;
export function filter<T, E>(arr: T[] | IterableIterator<T>, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultArrayCallback<T, E>): void;
export function filter<T, E>(arr: Dictionary<T>, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultArrayCallback<T, E>): void;
export const filterSeries: typeof filter;
export function filterLimit<T, E>(arr: T[] | IterableIterator<T>, limit: number, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultArrayCallback<T, E>): void;
export function filterLimit<T, E>(arr: Dictionary<T>, limit: number, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultArrayCallback<T, E>): void;
export const select: typeof filter;
export const selectSeries: typeof filter;
export const selectLimit: typeof filterLimit;
export const reject: typeof filter;
export const rejectSeries: typeof filter;
export const rejectLimit: typeof filterLimit;
export function reduce<T, R, E>(arr: T[] | IterableIterator<T>, memo: R, iterator: AsyncMemoIterator<T, R, E>, callback?: AsyncResultCallback<R, E>): void;
export const inject: typeof reduce;
export const foldl: typeof reduce;
export const reduceRight: typeof reduce;
export const foldr: typeof reduce;
export function detect<T, E>(arr: T[] | IterableIterator<T>, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultCallback<T, E>): void;
export function detect<T, E>(arr: Dictionary<T>, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultCallback<T, E>): void;
export const detectSeries: typeof detect;
export function detectLimit<T, E>(arr: T[] | IterableIterator<T>, limit: number, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultCallback<T, E>): void;
export function detectLimit<T, E>(arr: Dictionary<T>, limit: number, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultCallback<T, E>): void;
export const find: typeof detect;
export const findSeries: typeof detect;
export const findLimit: typeof detectLimit;
export function sortBy<T, V, E>(arr: T[] | IterableIterator<T>, iterator: AsyncResultIterator<T, V, E>, callback?: AsyncResultArrayCallback<T, E>): void;
export function some<T, E>(arr: T[] | IterableIterator<T>, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncBooleanResultCallback<E>): void;
export function some<T, E>(arr: Dictionary<T>, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncBooleanResultCallback<E>): void;
export const someSeries: typeof some;
export function someLimit<T, E>(arr: T[] | IterableIterator<T>, limit: number, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncBooleanResultCallback<E>): void;
export function someLimit<T, E>(arr: Dictionary<T>, limit: number, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncBooleanResultCallback<E>): void;
export const any: typeof some;
export const anySeries: typeof someSeries;
export const anyLimit: typeof someLimit;
export function every<T, E>(arr: T[] | IterableIterator<T>, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncBooleanResultCallback<E>): void;
export function every<T, E>(arr: Dictionary<T>, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncBooleanResultCallback<E>): void;
export const everySeries: typeof every;
export function everyLimit<T, E>(arr: T[] | IterableIterator<T>, limit: number, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncBooleanResultCallback<E>): void;
export function everyLimit<T, E>(arr: Dictionary<T>, limit: number, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncBooleanResultCallback<E>): void;
export const all: typeof every;
export const allSeries: typeof every;
export const allLimit: typeof everyLimit;

export function concat<T, R, E>(arr: T[] | IterableIterator<T>, iterator: AsyncResultIterator<T, R[], E>, callback?: AsyncResultArrayCallback<R, E>): void;
export function concat<T, R, E>(arr: Dictionary<T>, iterator: AsyncResultIterator<T, R[], E>, callback?: AsyncResultArrayCallback<R, E>): void;
export function concatLimit<T, R, E>(arr: T[] | IterableIterator<T>, limit: number, iterator: AsyncResultIterator<T, R[], E>, callback?: AsyncResultArrayCallback<R, E>): void;
export function concatLimit<T, R, E>(arr: Dictionary<T>, limit: number,iterator: AsyncResultIterator<T, R[], E>, callback?: AsyncResultArrayCallback<R, E>): void;
export const concatSeries: typeof concat;

// Control Flow
export function series<T, E>(tasks: AsyncFunction<T, E>[], callback?: AsyncResultArrayCallback<T, E>): void;
export function series<T, E>(tasks: Dictionary<AsyncFunction<T, E>>, callback?: AsyncResultObjectCallback<T, E>): void;
export function parallel<T, E>(tasks: Array<AsyncFunction<T, E>>, callback?: AsyncResultArrayCallback<T, E>): void;
export function parallel<T, E>(tasks: Dictionary<AsyncFunction<T, E>>, callback?: AsyncResultObjectCallback<T, E>): void;
export function parallelLimit<T, E>(tasks: Array<AsyncFunction<T, E>>, limit: number, callback?: AsyncResultArrayCallback<T, E>): void;
export function parallelLimit<T, E>(tasks: Dictionary<AsyncFunction<T, E>>, limit: number, callback?: AsyncResultObjectCallback<T, E>): void;
export function whilst<E>(test: () => boolean, fn: AsyncVoidFunction<E>, callback: ErrorCallback<E>): void;
export function doWhilst<T, E>(fn: AsyncFunctionEx<T, E>, test: (...results: T[]) => boolean, callback: ErrorCallback<E>): void;
export function until<E>(test: () => boolean, fn: AsyncVoidFunction<E>, callback: ErrorCallback<E>): void;
export function doUntil<T, E>(fn: AsyncFunctionEx<T, E>, test: (...results: T[]) => boolean, callback: ErrorCallback<E>): void;
export function during<E>(test: (testCallback : AsyncBooleanResultCallback<E>) => void, fn: AsyncVoidFunction<E>, callback: ErrorCallback<E>): void;
export function doDuring<E>(fn: AsyncVoidFunction<E>, test: (testCallback: AsyncBooleanResultCallback<E>) => void, callback: ErrorCallback<E>): void;
export function forever<E>(next: (next : ErrorCallback<E>) => void, errBack: ErrorCallback<E>) : void;
export function waterfall<T, E>(tasks: Function[], callback?: AsyncResultCallback<T, E | Error>): void;
export function compose(...fns: Function[]): Function;
export function seq(...fns: Function[]): Function;
export function applyEach(fns: Function[], argsAndCallback: any[]): void;           // applyEach(fns, args..., callback). TS does not support ... for a middle argument. Callback is optional.
export function applyEachSeries(fns: Function[], argsAndCallback: any[]): void;     // applyEachSeries(fns, args..., callback). TS does not support ... for a middle argument. Callback is optional.
export function queue<T, E>(worker: AsyncWorker<T, E>, concurrency?: number): AsyncQueue<T>;
export function queue<T, R, E>(worker: AsyncResultIterator<T, R, E>, concurrency?: number): AsyncQueue<T>;
export function priorityQueue<T, E>(worker: AsyncWorker<T, E>, concurrency: number): AsyncPriorityQueue<T>;
export function cargo<E>(worker : (tasks: any[], callback : ErrorCallback<E>) => void, payload? : number) : AsyncCargo;
export function auto<R extends Dictionary<any>, E>(tasks: AsyncAutoTasks<R, E>, concurrency?: number, callback?: AsyncResultCallback<R, E>): void;
export function autoInject<E>(tasks: any, callback?: AsyncResultCallback<any, E>): void;
export function retry<T, E>(opts: number, task: (callback : AsyncResultCallback<T, E>, results: any) => void, callback:  AsyncResultCallback<any, E | Error>): void;
export function retry<T, E>(opts: { times: number, interval: number|((retryCount: number) => number) }, task: (callback: AsyncResultCallback<T, E>, results : any) => void, callback:  AsyncResultCallback<any, E | Error>): void;
export function retryable<T, E>(opts: number | {times: number, interval: number}, task: AsyncFunction<T, E>): AsyncFunction<T, E | Error>;
export function apply<E>(fn: Function, ...args: any[]): AsyncFunction<any,E | Error>;
export function nextTick(callback: Function, ...args: any[]): void;
export const setImmediate: typeof nextTick;

export function reflect<T, E>(fn: AsyncFunction<T, E>) : (callback: (err: null, result: {error?: E, value?: T}) => void) => void;
export function reflectAll<T, E>(tasks: AsyncFunction<T, E>[]): ((callback: (err: null, result: {error?: E, value?: T}) => void) => void)[];

export function timeout<T, E>(fn: AsyncFunction<T, E>, milliseconds: number, info?: any): AsyncFunction<T, E | Error>;
export function timeout<T, R, E>(fn: AsyncResultIterator<T, R, E>, milliseconds: number, info?: any): AsyncResultIterator<T, R, E | Error>;

export function times<T, E> (n: number, iterator: AsyncResultIterator<number, T, E>, callback: AsyncResultArrayCallback<T, E>): void;
export function timesSeries<T, E>(n: number, iterator: AsyncResultIterator<number, T, E>, callback: AsyncResultArrayCallback<T, E>): void;
export function timesLimit<T, E>(n: number, limit: number, iterator: AsyncResultIterator<number, T, E>, callback: AsyncResultArrayCallback<T, E>): void;

export function transform<T, R, E>(arr: T[], iteratee: (acc: R[], item: T, key: number, callback: (error?: E) => void) => void, callback?: AsyncResultArrayCallback<T, E>): void;
export function transform<T, R, E>(arr: T[], acc: R[], iteratee: (acc: R[], item: T, key: number, callback: (error?: E) => void) => void, callback?: AsyncResultArrayCallback<T, E>): void;

export function transform<T, R, E>(arr: {[key: string] : T}, iteratee: (acc: {[key: string] : R}, item: T, key: string, callback: (error?: E) => void) => void, callback?: AsyncResultObjectCallback<T, E>): void;
export function transform<T, R, E>(arr: {[key: string] : T}, acc: {[key: string] : R}, iteratee: (acc: {[key: string] : R}, item: T, key: string, callback: (error?: E) => void) => void, callback?: AsyncResultObjectCallback<T, E>): void;

export function race<T, E>(tasks: (AsyncFunction<T, E>)[], callback: AsyncResultCallback<T, E | Error>) : void;

// Utils
export function memoize(fn: Function, hasher?: Function): Function;
export function unmemoize(fn: Function): Function;
export function ensureAsync(fn: (... argsAndCallback: any[]) => void): Function;
export function constant(...values: any[]): Function;
export function asyncify(fn: Function): (...args: any[]) => any;
export function wrapSync(fn: Function): Function;
export function log(fn: Function, ...args: any[]): void;
export function dir(fn: Function, ...args: any[]): void;
