// Type definitions for Async 0.1.23
// Project: https://github.com/caolan/async
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface AsyncMultipleResultsCallback<T> { (err: Error, results: T[]): any; }
interface AsyncSingleResultCallback<T> { (err: Error, result: T): void; }
interface AsyncTimesCallback<T> { (n: number, callback: AsyncMultipleResultsCallback<T>): void; }

interface AsyncIterator<T, R> { (item: T, callback: AsyncSingleResultCallback<R>): void; }
interface AsyncMemoIterator<T, R> { (memo: R, item: T, callback: AsyncSingleResultCallback<R>): void; }

interface AsyncWorker<T> { (task: T, callback: Function): void; }

interface AsyncQueue<T> {
    length(): number;
    concurrency: number;
    started: boolean;
    paused: boolean;
    push(task: T, callback?: AsyncMultipleResultsCallback<T>): void;
    push(task: T[], callback?: AsyncMultipleResultsCallback<T>): void;
    unshift(task: T, callback?: AsyncMultipleResultsCallback<T>): void;
    unshift(task: T[], callback?: AsyncMultipleResultsCallback<T>): void;
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
    push(task: T, priority: number, callback?: AsyncMultipleResultsCallback<T>): void;
    push(task: T[], priority: number, callback?: AsyncMultipleResultsCallback<T>): void;
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
    each<T,R>(arr: T[], iterator: AsyncIterator<T, R>, callback: AsyncMultipleResultsCallback<R>): void;
    eachSeries<T, R>(arr: T[], iterator: AsyncIterator<T, R>, callback: AsyncMultipleResultsCallback<R>): void;
    eachLimit<T, R>(arr: T[], limit: number, iterator: AsyncIterator<T, R>, callback: AsyncMultipleResultsCallback<R>): void;
    map<T, R>(arr: T[], iterator: AsyncIterator<T, R>, callback: AsyncMultipleResultsCallback<R>): any;
    mapSeries<T, R>(arr: T[], iterator: AsyncIterator<T, R>, callback: AsyncMultipleResultsCallback<R>): any;
    filter<T>(arr: T[], iterator: AsyncIterator<T, boolean>, callback: AsyncMultipleResultsCallback<T>): any;
    select<T, R>(arr: T[], iterator: AsyncIterator<T, boolean>, callback: AsyncMultipleResultsCallback<T>): any;
    filterSeries<T, R>(arr: T[], iterator: AsyncIterator<T, boolean>, callback: AsyncMultipleResultsCallback<T>): any;
    selectSeries<T, R>(arr: T[], iterator: AsyncIterator<T, boolean>, callback: AsyncMultipleResultsCallback<T>): any;
    reject<T>(arr: T[], iterator: AsyncIterator<T, boolean>, callback: AsyncMultipleResultsCallback<T>): any;
    rejectSeries<T>(arr: T[], iterator: AsyncIterator<T, boolean>, callback: AsyncMultipleResultsCallback<T>): any;
    reduce<T, R>(arr: T[], memo: R, iterator: AsyncMemoIterator<T, R>, callback: AsyncSingleResultCallback<R>): any;
    inject<T, R>(arr: T[], memo: R, iterator: AsyncMemoIterator<T, R>, callback: AsyncSingleResultCallback<R>): any;
    foldl<T, R>(arr: T[], memo: R, iterator: AsyncMemoIterator<T, R>, callback: AsyncSingleResultCallback<R>): any;
    reduceRight<T, R>(arr: T[], memo: R, iterator: AsyncMemoIterator<T, R>, callback: AsyncSingleResultCallback<R>): any;
    foldr<T, R>(arr: T[], memo: R, iterator: AsyncMemoIterator<T, R>, callback: AsyncSingleResultCallback<R>): any;
    detect<T>(arr: T[], iterator: AsyncIterator<T, boolean>, callback: AsyncMultipleResultsCallback<T>): any;
    detectSeries<T>(arr: T[], iterator: AsyncIterator<T, boolean>, callback: AsyncMultipleResultsCallback<T>): any;
    sortBy<T, V>(arr: T[], iterator: AsyncIterator<T, V>, callback: AsyncMultipleResultsCallback<T>): any;
    some<T>(arr: T[], iterator: AsyncIterator<T, boolean>, callback: AsyncMultipleResultsCallback<T>): any;
    any<T>(arr: T[], iterator: AsyncIterator<T, boolean>, callback: AsyncMultipleResultsCallback<T>): any;
    every<T>(arr: T[], iterator: AsyncIterator<T, boolean>, callback: (result: boolean) => any): any;
    all<T>(arr: T[], iterator: AsyncIterator<T, boolean>, callback: (result: boolean) => any): any;
    concat<T, R>(arr: T[], iterator: AsyncIterator<T, R[]>, callback: AsyncMultipleResultsCallback<R>): any;
    concatSeries<T, R>(arr: T[], iterator: AsyncIterator<T, R[]>, callback: AsyncMultipleResultsCallback<R>): any;

    // Control Flow
    series<T>(tasks: T[], callback?: AsyncMultipleResultsCallback<T>): void;
    series<T>(tasks: T, callback?: AsyncMultipleResultsCallback<T>): void;
    parallel<T>(tasks: T[], callback?: AsyncMultipleResultsCallback<T>): void;
    parallel<T>(tasks: T, callback?: AsyncMultipleResultsCallback<T>): void;
    parallelLimit<T>(tasks: T[], limit: number, callback?: AsyncMultipleResultsCallback<T>): void;
    parallelLimit<T>(tasks: T, limit: number, callback?: AsyncMultipleResultsCallback<T>): void;
    whilst(test: Function, fn: Function, callback: Function): void;
    until(test: Function, fn: Function, callback: Function): void;
    waterfall<T>(tasks: T[], callback?: AsyncMultipleResultsCallback<T>): void;
    waterfall<T>(tasks: T, callback?: AsyncMultipleResultsCallback<T>): void;
    queue<T>(worker: AsyncWorker<T>, concurrency: number): AsyncQueue<T>;
    priorityQueue<T>(worker: AsyncWorker<T>, concurrency: number): AsyncPriorityQueue<T>;
    // auto(tasks: any[], callback?: AsyncMultipleResultsCallback<T>): void;
    auto(tasks: any, callback?: AsyncMultipleResultsCallback<any>): void;
    iterator(tasks: Function[]): Function;
    apply(fn: Function, ...arguments: any[]): void;
    nextTick<T>(callback: Function): void;

    times<T> (n: number, callback: AsyncTimesCallback<T>): void;
    timesSeries<T> (n: number, callback: AsyncTimesCallback<T>): void;

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
