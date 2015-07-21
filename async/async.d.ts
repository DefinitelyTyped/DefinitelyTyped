// Type definitions for Async 0.9.2
// Project: https://github.com/caolan/async
// Definitions by: Boris Yankov <https://github.com/borisyankov/>, Arseniy Maximov <https://github.com/kern0>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface Dictionary<T> { [key: string]: T; }

// Common interface between Arrays and Array-like objects
interface List<T> {
    [index: number]: T;
    length: number;
}

interface ErrorCallback { (err?: Error): void; }
interface AsyncResultCallback<T> { (err: Error, result: T): void; }
interface AsyncResultArrayCallback<T> { (err: Error, results: T[]): void; }
interface AsyncResultObjectCallback<T> { (err: Error, results: Dictionary<T>): void; }

interface AsyncIterator<T> { (item: T, callback: ErrorCallback): void; }
interface AsyncForEachOfIterator<T> { (item: T, index: number, callback: ErrorCallback): void; }
interface AsyncResultIterator<T, R> { (item: T, callback: AsyncResultCallback<R>): void; }
interface AsyncMemoIterator<T, R> { (memo: R, item: T, callback: AsyncResultCallback<R>): void; }

interface AsyncWorker<T> { (task: T, callback: ErrorCallback): void; }

interface AsyncFunction<T> { (callback: AsyncResultCallback<T>): void; }
interface AsyncVoidFunction { (callback: ErrorCallback): void; }

interface AsyncQueue<T> {
    length(): number;
    concurrency: number;
    started: boolean;
    paused: boolean;
    push(task: T, callback?: ErrorCallback): void;
    push(task: T[], callback?: ErrorCallback): void;
    unshift(task: T, callback?: ErrorCallback): void;
    unshift(task: T[], callback?: ErrorCallback): void;
    saturated: () => any;
    empty: () => any;
    drain: () => any;
    running(): number;
    idle(): boolean;
    pause(): void;
    resume(): void;
    kill(): void;
}

interface AsyncPriorityQueue<T> {
    length(): number;
    concurrency: number;
    started: boolean;
    paused: boolean;
    push(task: T, priority: number, callback?: AsyncResultArrayCallback<T>): void;
    push(task: T[], priority: number, callback?: AsyncResultArrayCallback<T>): void;
    saturated: () => any;
    empty: () => any;
    drain: () => any;
    running(): number;
    idle(): boolean;
    pause(): void;
    resume(): void;
    kill(): void;
}

interface Async {

    // Collections
    each<T>(arr: T[], iterator: AsyncIterator<T>, callback: ErrorCallback): void;
    eachSeries<T>(arr: T[], iterator: AsyncIterator<T>, callback: ErrorCallback): void;
    eachLimit<T>(arr: T[], limit: number, iterator: AsyncIterator<T>, callback: ErrorCallback): void;
    forEachOf<T>(obj: List<T>, iterator: AsyncForEachOfIterator<T>, callback: ErrorCallback): void;
    forEachOfSeries<T>(obj: List<T>, iterator: AsyncForEachOfIterator<T>, callback: ErrorCallback): void;
    forEachOfLimit<T>(obj: List<T>, limit: number, iterator: AsyncForEachOfIterator<T>, callback: ErrorCallback): void;
    map<T, R>(arr: T[], iterator: AsyncResultIterator<T, R>, callback: AsyncResultArrayCallback<R>): any;
    mapSeries<T, R>(arr: T[], iterator: AsyncResultIterator<T, R>, callback: AsyncResultArrayCallback<R>): any;
    mapLimit<T, R>(arr: T[], limit: number, iterator: AsyncResultIterator<T, R>, callback: AsyncResultArrayCallback<R>): any;
    filter<T>(arr: T[], iterator: AsyncResultIterator<T, boolean>, callback: (results: T[]) => any): any;
    select<T>(arr: T[], iterator: AsyncResultIterator<T, boolean>, callback: (results: T[]) => any): any;
    filterSeries<T>(arr: T[], iterator: AsyncResultIterator<T, boolean>, callback: (results: T[]) => any): any;
    selectSeries<T>(arr: T[], iterator: AsyncResultIterator<T, boolean>, callback: (results: T[]) => any): any;
    reject<T>(arr: T[], iterator: AsyncResultIterator<T, boolean>, callback: (results: T[]) => any): any;
    rejectSeries<T>(arr: T[], iterator: AsyncResultIterator<T, boolean>, callback: (results: T[]) => any): any;
    reduce<T, R>(arr: T[], memo: R, iterator: AsyncMemoIterator<T, R>, callback: AsyncResultCallback<R>): any;
    inject<T, R>(arr: T[], memo: R, iterator: AsyncMemoIterator<T, R>, callback: AsyncResultCallback<R>): any;
    foldl<T, R>(arr: T[], memo: R, iterator: AsyncMemoIterator<T, R>, callback: AsyncResultCallback<R>): any;
    reduceRight<T, R>(arr: T[], memo: R, iterator: AsyncMemoIterator<T, R>, callback: AsyncResultCallback<R>): any;
    foldr<T, R>(arr: T[], memo: R, iterator: AsyncMemoIterator<T, R>, callback: AsyncResultCallback<R>): any;
    detect<T>(arr: T[], iterator: AsyncResultIterator<T, boolean>, callback: AsyncResultArrayCallback<T>): any;
    detectSeries<T>(arr: T[], iterator: AsyncResultIterator<T, boolean>, callback: AsyncResultArrayCallback<T>): any;
    sortBy<T, V>(arr: T[], iterator: AsyncResultIterator<T, V>, callback: AsyncResultArrayCallback<T>): any;
    some<T>(arr: T[], iterator: AsyncResultIterator<T, boolean>, callback: AsyncResultArrayCallback<T>): any;
    any<T>(arr: T[], iterator: AsyncResultIterator<T, boolean>, callback: AsyncResultArrayCallback<T>): any;
    every<T>(arr: T[], iterator: AsyncResultIterator<T, boolean>, callback: (result: boolean) => any): any;
    all<T>(arr: T[], iterator: AsyncResultIterator<T, boolean>, callback: (result: boolean) => any): any;
    concat<T, R>(arr: T[], iterator: AsyncResultIterator<T, R[]>, callback: AsyncResultArrayCallback<R>): any;
    concatSeries<T, R>(arr: T[], iterator: AsyncResultIterator<T, R[]>, callback: AsyncResultArrayCallback<R>): any;

    // Control Flow
    series<T>(tasks: Array<AsyncFunction<T>>, callback?: AsyncResultArrayCallback<T>): void;
    series<T>(tasks: Dictionary<AsyncFunction<T>>, callback?: AsyncResultObjectCallback<T>): void;
    parallel<T>(tasks: Array<AsyncFunction<T>>, callback?: AsyncResultArrayCallback<T>): void;
    parallel<T>(tasks: Dictionary<AsyncFunction<T>>, callback?: AsyncResultObjectCallback<T>): void;
    parallelLimit<T>(tasks: Array<AsyncFunction<T>>, limit: number, callback?: AsyncResultArrayCallback<T>): void;
    parallelLimit<T>(tasks: Dictionary<AsyncFunction<T>>, limit: number, callback?: AsyncResultObjectCallback<T>): void;
    whilst(test: () => boolean, fn: AsyncVoidFunction, callback: (err: any) => void): void;
    doWhilst(fn: AsyncVoidFunction, test: () => boolean, callback: (err: any) => void): void;
    until(test: () => boolean, fn: AsyncVoidFunction, callback: (err: any) => void): void;
    doUntil(fn: AsyncVoidFunction, test: () => boolean, callback: (err: any) => void): void;
    waterfall(tasks: Function[], callback?: (err: any, ...arguments: any[]) => void): void;
    queue<T>(worker: AsyncWorker<T>, concurrency: number): AsyncQueue<T>;
    priorityQueue<T>(worker: AsyncWorker<T>, concurrency: number): AsyncPriorityQueue<T>;
    auto(tasks: any, callback?: AsyncResultArrayCallback<any>): void;
    iterator(tasks: Function[]): Function;
    apply(fn: Function, ...arguments: any[]): AsyncFunction<any>;
    nextTick(callback: Function): void;

    times<R> (n: number, iterator: AsyncResultIterator<number, R>, callback: AsyncResultArrayCallback<R>): void;
    timesSeries<R> (n: number, iterator: AsyncResultIterator<number, R>, callback: AsyncResultArrayCallback<R>): void;

    // Utils
    memoize(fn: Function, hasher?: Function): Function;
    unmemoize(fn: Function): Function;
    log(fn: Function, ...arguments: any[]): void;
    dir(fn: Function, ...arguments: any[]): void;
    noConflict(): Async;
}

declare var async: Async;

declare module "async" {
    export = async;
}
