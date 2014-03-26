// Type definitions for Async 0.1.23
// Project: https://github.com/caolan/async
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface AsyncMultipleResultsCallback<T> { (err: string, results: T[]): any; }
interface AsyncSingleResultCallback<T> { (err: string, result: T): void; }
interface AsyncTimesCallback<T> { (n: number, callback: AsyncMultipleResultsCallback<T>): void; }

interface AsyncIterator<T, R> { (item: T, callback: AsyncSingleResultCallback<R>): void; }
interface AsyncMemoIterator<T, R> { (memo: R, item: T, callback: AsyncSingleResultCallback<R>): void; }

interface AsyncWorker<T> { (task: T, callback: Function): void; }

interface AsyncQueue<T> {
    length(): number;
    concurrency: number;
    push(task: T, callback?: AsyncMultipleResultsCallback<T>): void;
    saturated: AsyncMultipleResultsCallback<T>;
    empty: AsyncMultipleResultsCallback<T>;
    drain: AsyncMultipleResultsCallback<T>;
}

interface Async {

    // Collections
    forEach<T,R>(arr: T[], iterator: AsyncIterator<T, R>, callback: AsyncMultipleResultsCallback<R>): void;
    forEachSeries<T, R>(arr: T[], iterator: AsyncIterator<T, R>, callback: AsyncMultipleResultsCallback<R>): void;
    forEachLimit<T, R>(arr: T[], limit: number, iterator: AsyncIterator<T, R>, callback: AsyncMultipleResultsCallback<R>): void;
    map<T, R>(arr: T[], iterator: AsyncIterator<T, R>, callback: AsyncMultipleResultsCallback<R>);
    mapSeries<T, R>(arr: T[], iterator: AsyncIterator<T, R>, callback: AsyncMultipleResultsCallback<R>);
    filter<T>(arr: T[], iterator: AsyncIterator<T, boolean>, callback: AsyncMultipleResultsCallback<T>);
    select<T, R>(arr: T[], iterator: AsyncIterator<T, boolean>, callback: AsyncMultipleResultsCallback<T>);
    filterSeries<T, R>(arr: T[], iterator: AsyncIterator<T, boolean>, callback: AsyncMultipleResultsCallback<T>);
    selectSeries<T, R>(arr: T[], iterator: AsyncIterator<T, boolean>, callback: AsyncMultipleResultsCallback<T>);
    reject<T>(arr: T[], iterator: AsyncIterator<T, boolean>, callback: AsyncMultipleResultsCallback<T>);
    rejectSeries<T>(arr: T[], iterator: AsyncIterator<T, boolean>, callback: AsyncMultipleResultsCallback<T>);
    reduce<T, R>(arr: T[], memo: R, iterator: AsyncMemoIterator<T, R>, callback: AsyncSingleResultCallback<R>);
    inject<T, R>(arr: T[], memo: R, iterator: AsyncMemoIterator<T, R>, callback: AsyncSingleResultCallback<R>);
    foldl<T, R>(arr: T[], memo: R, iterator: AsyncMemoIterator<T, R>, callback: AsyncSingleResultCallback<R>);
    reduceRight<T, R>(arr: T[], memo: R, iterator: AsyncMemoIterator<T, R>, callback: AsyncSingleResultCallback<R>);
    foldr<T, R>(arr: T[], memo: R, iterator: AsyncMemoIterator<T, R>, callback: AsyncSingleResultCallback<R>);
    detect<T>(arr: T[], iterator: AsyncIterator<T, boolean>, callback: AsyncMultipleResultsCallback<T>);
    detectSeries<T>(arr: T[], iterator: AsyncIterator<T, boolean>, callback: AsyncMultipleResultsCallback<T>);
    sortBy<T, V>(arr: T[], iterator: AsyncIterator<T, V>, callback: AsyncMultipleResultsCallback<T>);
    some<T>(arr: T[], iterator: AsyncIterator<T, boolean>, callback: AsyncMultipleResultsCallback<T>);
    any<T>(arr: T[], iterator: AsyncIterator<T, boolean>, callback: AsyncMultipleResultsCallback<T>);
    every<T>(arr: T[], iterator: AsyncIterator<T, boolean>, callback: (result: boolean) => any);
    all<T>(arr: T[], iterator: AsyncIterator<T, boolean>, callback: (result: boolean) => any);
    concat<T, R>(arr: T[], iterator: AsyncIterator<T, R[]>, callback: AsyncMultipleResultsCallback<R>);
    concatSeries<T, R>(arr: T[], iterator: AsyncIterator<T, R[]>, callback: AsyncMultipleResultsCallback<R>);

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
