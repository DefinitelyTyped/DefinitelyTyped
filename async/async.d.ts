// Type definitions for Async 0.1.23
// Project: https://github.com/caolan/async
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface Dict<T> { [key: string]: T; }

interface ErrorCallback { (err?: Error): void; }
interface AsyncResultCallback<T> { (err: Error, result: T): void; }
interface AsyncResultArrayCallback<T> { (err: Error, results: T[]): void; }
interface AsyncResultDictCallback<T> { (err: Error, results: Dict<T>): void; }
interface AsyncTimesCallback<T> { (n: number, callback: AsyncResultArrayCallback<T>): void; }

interface AsyncIterator<T> { (item: T, callback: ErrorCallback): void; }
interface AsyncResultIterator<T, R> { (item: T, callback: AsyncResultCallback<R>): void; }
interface AsyncMemoIterator<T, R> { (memo: R, item: T, callback: AsyncResultCallback<R>): void; }

interface AsyncWorker<T> { (task: T, callback: Function): void; }

interface AsyncTaskFn<T> { (callback: AsyncResultCallback<T>): void; }

interface AsyncQueue<T> {
    length(): number;
    concurrency: number;
    started: boolean;
    paused: boolean;
    push(task: T, callback?: AsyncResultArrayCallback<T>): void;
    push(task: T[], callback?: AsyncResultArrayCallback<T>): void;
    unshift(task: T, callback?: AsyncResultArrayCallback<T>): void;
    unshift(task: T[], callback?: AsyncResultArrayCallback<T>): void;
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
    series<T>(tasks: Array<AsyncTaskFn<T>>, callback?: AsyncResultArrayCallback<T>): void;
    series<T>(tasks: Dict<AsyncTaskFn<T>>, callback?: AsyncResultDictCallback<T>): void;
    parallel<T>(tasks: Array<AsyncTaskFn<T>>, callback?: AsyncResultArrayCallback<T>): void;
    parallel<T>(tasks: Dict<AsyncTaskFn<T>>, callback?: AsyncResultDictCallback<T>): void;
    parallelLimit<T>(tasks: Array<AsyncTaskFn<T>>, limit: number, callback?: AsyncResultArrayCallback<T>): void;
    parallelLimit<T>(tasks: Dict<AsyncTaskFn<T>>, limit: number, callback?: AsyncResultDictCallback<T>): void;
    whilst(test: Function, fn: Function, callback: Function): void;
    until(test: Function, fn: Function, callback: Function): void;
    waterfall<T>(tasks: Function[], callback?: AsyncResultArrayCallback<T>): void;
    waterfall<T>(tasks: Function, callback?: AsyncResultArrayCallback<T>): void;
    queue<T>(worker: AsyncWorker<T>, concurrency: number): AsyncQueue<T>;
    priorityQueue<T>(worker: AsyncWorker<T>, concurrency: number): AsyncPriorityQueue<T>;
    // auto(tasks: any[], callback?: AsyncResultArrayCallback<T>): void;
    auto(tasks: any, callback?: AsyncResultArrayCallback<any>): void;
    iterator(tasks: Function[]): Function;
    apply<T>(fn: Function, ...arguments: any[]): AsyncTaskFn<T>;
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
