// Type definitions for Async 3.0
// Project: https://github.com/caolan/async, https://caolan.github.io/async
// Definitions by: Boris Yankov <https://github.com/borisyankov>
//                 Arseniy Maximov <https://github.com/kern0>
//                 Joe Herman <https://github.com/Penryn>
//                 Angus Fenying <https://github.com/fenying>
//                 Pascal Martin <https://github.com/pascalmartin>
//                 Dmitri Trofimov <https://github.com/Dmitri1337>
//                 Etienne Rossignon <https://github.com/erossignon>
//                 Lifeng Zhu <https://github.com/Juliiii>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export as namespace async;

export interface Dictionary<T> { [key: string]: T; }
export type IterableCollection<T> = T[] | IterableIterator<T> | Dictionary<T>;

export interface ErrorCallback<E = Error> { (err?: E | null): void; }
export interface AsyncBooleanResultCallback<E = Error> { (err?: E | null, truthValue?: boolean): void; }
export interface AsyncResultCallback<T, E = Error> { (err?: E | null, result?: T): void; }
export interface AsyncResultArrayCallback<T, E = Error> { (err?: E | null, results?: Array<T | undefined>): void; }
export interface AsyncResultObjectCallback<T, E = Error> { (err: E | undefined, results: Dictionary<T | undefined>): void; }

export interface AsyncFunction<T, E = Error> { (callback: (err?: E | null, result?: T) => void): void; }
export interface AsyncFunctionEx<T, E = Error> { (callback: (err?: E | null, ...results: T[]) => void): void; }
export interface AsyncIterator<T, E = Error> { (item: T, callback: ErrorCallback<E>): void; }
export interface AsyncForEachOfIterator<T, E = Error> { (item: T, key: number|string, callback: ErrorCallback<E>): void; }
export interface AsyncResultIterator<T, R, E = Error> { (item: T, callback: AsyncResultCallback<R, E>): void; }
export interface AsyncMemoIterator<T, R, E = Error> { (memo: R | undefined, item: T, callback: AsyncResultCallback<R, E>): void; }
export interface AsyncBooleanIterator<T, E = Error> { (item: T, callback: AsyncBooleanResultCallback<E>): void; }

export interface AsyncWorker<T, E = Error> { (task: T, callback: ErrorCallback<E>): void; }
export interface AsyncVoidFunction<E = Error> { (callback: ErrorCallback<E>): void; }

export type AsyncAutoTasks<R extends Dictionary<any>, E> = { [K in keyof R]: AsyncAutoTask<R[K], R, E> };
export type AsyncAutoTask<R1, R extends Dictionary<any>, E> = AsyncAutoTaskFunctionWithoutDependencies<R1, E> | Array<keyof R | AsyncAutoTaskFunction<R1, R, E>>;
export interface AsyncAutoTaskFunctionWithoutDependencies<R1, E = Error> { (cb: AsyncResultCallback<R1, E> | ErrorCallback<E>): void; }
export interface AsyncAutoTaskFunction<R1, R extends Dictionary<any>, E = Error> { (results: R, cb: AsyncResultCallback<R1, E> | ErrorCallback<E>): void; }

export interface DataContainer<T> {
    data: T;
}

export interface CallbackContainer {
    callback: Function;
}

export interface PriorityContainer {
    priority: number;
}

export interface AsyncQueue<T> {
    length(): number;
    started: boolean;
    running(): number;
    idle(): boolean;
    concurrency: number;
    push<R, E = Error>(task: T | T[], callback?: AsyncResultCallback<R, E>): void;
    unshift<E = Error>(task: T | T[], callback?: ErrorCallback<E>): void;
    remove(filter: (node: DataContainer<T>) => boolean): void;

    saturated(): Promise<void>;
    saturated(handler: () => void): void;
    empty(): Promise<void>;
    empty(handler: () => void): void;
    drain(): Promise<void>;
    drain(handler: () => void): void;

    paused: boolean;
    pause(): void;
    resume(): void;
    kill(): void;
    workersList<TWorker extends DataContainer<T>, CallbackContainer>(): TWorker[];

    error(): Promise<void>;
    error(handler: (error: Error, task: T) => void): void;

    unsaturated(): void;
    buffer: number;
}

export interface AsyncPriorityQueue<T> {
    length(): number;
    concurrency: number;
    started: boolean;
    paused: boolean;
    push<R, E = Error>(task: T | T[], priority: number, callback?: AsyncResultArrayCallback<R, E>): void;
    saturated: () => any;
    empty: () => any;
    drain: () => any;
    running(): number;
    idle(): boolean;
    pause(): void;
    resume(): void;
    kill(): void;
    workersList<TWorker extends DataContainer<T>, CallbackContainer, PriorityContainer>(): TWorker[];
    error(error: Error, data: any): void;
    unsaturated(): void;
    buffer: number;
}

export interface AsyncCargo {
    length(): number;
    payload?: number;
    push(task: any, callback?: Function): void;
    saturated(): void;
    empty(): void;
    /**
     * a function that sets a callback that is called when the last item from the queue has returned from the worker.
     * If the callback is omitted, q.drain() returns a promise for the next occurrence.
     */
    drain(): Promise<void>;
    drain(handler: () => void): void;
    idle(): boolean;
    pause(): void;
    resume(): void;
    kill(): void;
}

// Collections
export function each<T, E = Error>(arr: IterableCollection<T>, iterator: AsyncIterator<T, E>, callback: ErrorCallback<E>): void;
export function each<T, E = Error>(arr: IterableCollection<T>, iterator: AsyncIterator<T, E>): Promise<void>;
export const eachSeries: typeof each;
export function eachLimit<T, E = Error>(arr: IterableCollection<T>, limit: number, iterator: AsyncIterator<T, E>, callback: ErrorCallback<E>): void;
export function eachLimit<T, E = Error>(arr: IterableCollection<T>, limit: number, iterator: AsyncIterator<T, E>): Promise<void>;
export const forEach: typeof each;
export const forEachSeries: typeof each;
export const forEachLimit: typeof eachLimit;
export function forEachOf<T, E = Error>(obj: IterableCollection<T>, iterator: AsyncForEachOfIterator<T, E>, callback: ErrorCallback<E>): void;
export function forEachOf<T, E = Error>(obj: IterableCollection<T>, iterator: AsyncForEachOfIterator<T, E>): Promise<void>;
export const forEachOfSeries: typeof forEachOf;
export function forEachOfLimit<T, E = Error>(obj: IterableCollection<T>, limit: number, iterator: AsyncForEachOfIterator<T, E>, callback: ErrorCallback<E>): void;
export function forEachOfLimit<T, E = Error>(obj: IterableCollection<T>, limit: number, iterator: AsyncForEachOfIterator<T, E>): Promise<void>;
export const eachOf: typeof forEachOf;
export const eachOfSeries: typeof forEachOf;
export const eachOfLimit: typeof forEachOfLimit;
export function map<T, R, E = Error>(arr: T[] | IterableIterator<T> | Dictionary<T>, iterator: AsyncResultIterator<T, R, E>, callback: AsyncResultArrayCallback<R, E>): void;
export function map<T, R, E = Error>(arr: T[] | IterableIterator<T> | Dictionary<T>, iterator: AsyncResultIterator<T, R, E>): Promise<R>;
export const mapSeries: typeof map;
export function mapLimit<T, R, E = Error>(arr: IterableCollection<T>, limit: number, iterator: AsyncResultIterator<T, R, E>, callback: AsyncResultArrayCallback<R, E>): void;
export function mapLimit<T, R, E = Error>(arr: IterableCollection<T>, limit: number, iterator: AsyncResultIterator<T, R, E>): Promise<R>;

export function mapValuesLimit<T, R, E = Error>(
    obj: Dictionary<T>,
    limit: number,
    iteratee: (value: T, key: string, callback: AsyncResultCallback<R, E>) => void,
    callback: AsyncResultObjectCallback<R, E>
    ): void;
export function mapValuesLimit<T, R, E = Error>(
	obj: Dictionary<T>,
	limit: number,
	iteratee: (value: T, key: string, callback: AsyncResultCallback<R, E>) => void
): Promise<R>;

export function mapValues<T, R, E = Error>(obj: Dictionary<T>, iteratee: (value: T, key: string, callback: AsyncResultCallback<R, E>) => void, callback: AsyncResultObjectCallback<R, E>): void;
export function mapValues<T, R, E = Error>(obj: Dictionary<T>, iteratee: (value: T, key: string, callback: AsyncResultCallback<R, E>) => void): Promise<R>;
export const mapValuesSeries: typeof mapValues;
export function filter<T, E = Error>(arr: IterableCollection<T>, iterator: AsyncBooleanIterator<T, E>, callback: AsyncResultArrayCallback<T, E>): void;
export function filter<T, E = Error>(arr: IterableCollection<T>, iterator: AsyncBooleanIterator<T, E>): Promise<T[]>;
export const filterSeries: typeof filter;
export function filterLimit<T, E = Error>(arr: IterableCollection<T>, limit: number, iterator: AsyncBooleanIterator<T, E>, callback: AsyncResultArrayCallback<T, E>): void;
export function filterLimit<T, E = Error>(arr: IterableCollection<T>, limit: number, iterator: AsyncBooleanIterator<T, E>): Promise<T[]>;
export const select: typeof filter;
export const selectSeries: typeof filter;
export const selectLimit: typeof filterLimit;
export const reject: typeof filter;
export const rejectSeries: typeof filter;
export const rejectLimit: typeof filterLimit;
export function reduce<T, R, E = Error>(arr: T[] | IterableIterator<T>, memo: R, iterator: AsyncMemoIterator<T, R, E>, callback?: AsyncResultCallback<R, E>): void;
export const inject: typeof reduce;
export const foldl: typeof reduce;
export const reduceRight: typeof reduce;
export const foldr: typeof reduce;
export function detect<T, E = Error>(arr: IterableCollection<T>, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultCallback<T, E>): void;
export const detectSeries: typeof detect;
export function detectLimit<T, E = Error>(arr: IterableCollection<T>, limit: number, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultCallback<T, E>): void;
export const find: typeof detect;
export const findSeries: typeof detect;
export const findLimit: typeof detectLimit;
export function sortBy<T, V, E = Error>(arr: T[] | IterableIterator<T>, iterator: AsyncResultIterator<T, V, E>, callback?: AsyncResultArrayCallback<T, E>): void;
export function some<T, E = Error>(arr: IterableCollection<T>, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncBooleanResultCallback<E>): void;
export const someSeries: typeof some;
export function someLimit<T, E = Error>(arr: IterableCollection<T>, limit: number, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncBooleanResultCallback<E>): void;
export const any: typeof some;
export const anySeries: typeof someSeries;
export const anyLimit: typeof someLimit;
export function every<T, E = Error>(arr: IterableCollection<T>, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncBooleanResultCallback<E>): void;
export const everySeries: typeof every;
export function everyLimit<T, E = Error>(arr: IterableCollection<T>, limit: number, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncBooleanResultCallback<E>): void;
export const all: typeof every;
export const allSeries: typeof every;
export const allLimit: typeof everyLimit;

export function concat<T, R, E = Error>(arr: IterableCollection<T>, iterator: AsyncResultIterator<T, R[], E>, callback?: AsyncResultArrayCallback<R, E>): void;
export function concatLimit<T, R, E = Error>(arr: IterableCollection<T>, limit: number, iterator: AsyncResultIterator<T, R[], E>, callback?: AsyncResultArrayCallback<R, E>): void;
export const concatSeries: typeof concat;

// Control Flow
export function series<T, E = Error>(tasks: Array<AsyncFunction<T, E>>, callback?: AsyncResultArrayCallback<T, E>): void;
export function series<T, E = Error>(tasks: Dictionary<AsyncFunction<T, E>>, callback?: AsyncResultObjectCallback<T, E>): void;
export function parallel<T, E = Error>(tasks: Array<AsyncFunction<T, E>>, callback?: AsyncResultArrayCallback<T, E>): void;
export function parallel<T, E = Error>(tasks: Dictionary<AsyncFunction<T, E>>, callback?: AsyncResultObjectCallback<T, E>): void;
export function parallelLimit<T, E = Error>(tasks: Array<AsyncFunction<T, E>>, limit: number, callback?: AsyncResultArrayCallback<T, E>): void;
export function parallelLimit<T, E = Error>(tasks: Dictionary<AsyncFunction<T, E>>, limit: number, callback?: AsyncResultObjectCallback<T, E>): void;
export function whilst<E = Error>(test: () => boolean, fn: AsyncVoidFunction<E>, callback: ErrorCallback<E>): void;
export function doWhilst<T, E = Error>(fn: AsyncFunctionEx<T, E>, test: (...results: T[]) => boolean, callback: ErrorCallback<E>): void;
export function until<E = Error>(test: () => boolean, fn: AsyncVoidFunction<E>, callback: ErrorCallback<E>): void;
export function doUntil<T, E = Error>(fn: AsyncFunctionEx<T, E>, test: (...results: T[]) => boolean, callback: ErrorCallback<E>): void;
export function during<E = Error>(test: (testCallback: AsyncBooleanResultCallback<E>) => void, fn: AsyncVoidFunction<E>, callback: ErrorCallback<E>): void;
export function doDuring<E = Error>(fn: AsyncVoidFunction<E>, test: (testCallback: AsyncBooleanResultCallback<E>) => void, callback: ErrorCallback<E>): void;
export function forever<E = Error>(next: (next: ErrorCallback<E>) => void, errBack: ErrorCallback<E>): void;
export function waterfall<T, E = Error>(tasks: Function[], callback?: AsyncResultCallback<T, E>): void;
export function compose(...fns: Function[]): Function;
export function seq(...fns: Function[]): Function;
export function applyEach(fns: Function[], ...argsAndCallback: any[]): void;           // applyEach(fns, args..., callback). TS does not support ... for a middle argument. Callback is optional.
export function applyEachSeries(fns: Function[], ...argsAndCallback: any[]): void;     // applyEachSeries(fns, args..., callback). TS does not support ... for a middle argument. Callback is optional.
export function queue<T, E = Error>(worker: AsyncWorker<T, E>, concurrency?: number): AsyncQueue<T>;
export function queue<T, R, E = Error>(worker: AsyncResultIterator<T, R, E>, concurrency?: number): AsyncQueue<T>;
export function priorityQueue<T, E = Error>(worker: AsyncWorker<T, E>, concurrency: number): AsyncPriorityQueue<T>;
export function cargo<E = Error>(worker: (tasks: any[], callback: ErrorCallback<E>) => void, payload?: number): AsyncCargo;
export function auto<R extends Dictionary<any>, E = Error>(tasks: AsyncAutoTasks<R, E>, concurrency?: number, callback?: AsyncResultCallback<R, E>): void;
export function auto<R extends Dictionary<any>, E = Error>(tasks: AsyncAutoTasks<R, E>, callback?: AsyncResultCallback<R, E>): void;
export function autoInject<E = Error>(tasks: any, callback?: AsyncResultCallback<any, E>): void;

export function retry<T, E = Error>(
    opts?:
        | number
        | {
              times?: number;
              interval?: number | ((retryCount: number) => number);
              errorFilter?: (error: Error) => boolean;
          },
    task?: (callback: AsyncResultCallback<T, E>, results: any) => void,
): Promise<void>;
export function retry<T, E = Error>(
    opts?:
        | number
        | {
              times?: number;
              interval?: number | ((retryCount: number) => number);
              errorFilter?: (error: Error) => boolean;
          },
    task?: (callback: AsyncResultCallback<T, E>, results: any) => void,
    callback?: AsyncResultCallback<any, E>,
): void;

export function retryable<T, E = Error>(opts: number | {times: number, interval: number}, task: AsyncFunction<T, E>): AsyncFunction<T, E>;
export function apply<E = Error>(fn: Function, ...args: any[]): AsyncFunction<any, E>;
export function nextTick(callback: Function, ...args: any[]): void;
export const setImmediate: typeof nextTick;

export function reflect<T, E = Error>(fn: AsyncFunction<T, E>): (callback: (err: null, result: {error?: E, value?: T}) => void) => void;
export function reflectAll<T, E = Error>(tasks: Array<AsyncFunction<T, E>>): Array<(callback: (err: null, result: {error?: E, value?: T}) => void) => void>;

export function timeout<T, E = Error>(fn: AsyncFunction<T, E>, milliseconds: number, info?: any): AsyncFunction<T, E>;
export function timeout<T, R, E = Error>(fn: AsyncResultIterator<T, R, E>, milliseconds: number, info?: any): AsyncResultIterator<T, R, E>;

export function times<T, E = Error>(n: number, iterator: AsyncResultIterator<number, T, E>, callback: AsyncResultArrayCallback<T, E>): void;
export function times<T, E = Error>(n: number, iterator: AsyncResultIterator<number, T, E>): Promise<T>;
export const timesSeries: typeof times;
export function timesLimit<T, E = Error>(n: number, limit: number, iterator: AsyncResultIterator<number, T, E>, callback: AsyncResultArrayCallback<T, E>): void;
export function timesLimit<T, E = Error>(n: number, limit: number, iterator: AsyncResultIterator<number, T, E>): Promise<T>;

export function transform<T, R, E = Error>(arr: T[], iteratee: (acc: R[], item: T, key: number, callback: (error?: E) => void) => void, callback?: AsyncResultArrayCallback<T, E>): void;
export function transform<T, R, E = Error>(arr: T[], acc: R[], iteratee: (acc: R[], item: T, key: number, callback: (error?: E) => void) => void, callback?: AsyncResultArrayCallback<T, E>): void;

export function transform<T, R, E = Error>(
    arr: {[key: string]: T},
    iteratee: (acc: {[key: string]: R}, item: T, key: string, callback: (error?: E) => void) => void,
    callback?: AsyncResultObjectCallback<T, E>
    ): void;

export function transform<T, R, E = Error>(
    arr: {[key: string]: T},
    acc: {[key: string]: R},
    iteratee: (acc: {[key: string]: R}, item: T, key: string, callback: (error?: E) => void) => void,
    callback?: AsyncResultObjectCallback<T, E>
    ): void;

export function race<T, E = Error>(tasks: Array<AsyncFunction<T, E>>, callback: AsyncResultCallback<T, E>): void;

// Utils
export function memoize(fn: Function, hasher?: Function): Function;
export function unmemoize(fn: Function): Function;
export function ensureAsync(fn: (... argsAndCallback: any[]) => void): Function;
export function constant(...values: any[]): AsyncFunction<any>;
export function asyncify(fn: Function): (...args: any[]) => any;
export function wrapSync(fn: Function): Function;
export function log(fn: Function, ...args: any[]): void;
export function dir(fn: Function, ...args: any[]): void;
