// Type definitions for Async 0.1
// Project: https://github.com/caolan/async
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


interface AsyncCallback { (err: string, results: any): any; }
interface AsyncIterator { (item, callback: AsyncCallback): void; }
interface AsyncMemoIterator { (memo: any, item: any, callback: AsyncCallback): void; }
interface AsyncWorker { (task: any, callback: Function): void; }

interface AsyncQueue {
    length(): number;
    concurrency: number;
    push(task: any, callback: AsyncCallback): void;
    saturated: AsyncCallback;
    empty: AsyncCallback;
    drain: AsyncCallback;
}

interface Async {

    // Collections
    forEach(arr: any[], iterator: AsyncIterator, callback: AsyncCallback): void;
    forEachSeries(arr: any[], iterator: AsyncIterator, callback: AsyncCallback): void;
    forEachLimit(arr: any[], limit: number, iterator: AsyncIterator, callback: AsyncCallback): void;
    map(arr: any[], iterator: AsyncIterator, callback: AsyncCallback);
    mapSeries(arr: any[], iterator: AsyncIterator, callback: AsyncCallback);
    filter(arr: any[], iterator: AsyncIterator, callback: AsyncCallback);
    select(arr: any[], iterator: AsyncIterator, callback: AsyncCallback);
    filterSeries(arr: any[], iterator: AsyncIterator, callback: AsyncCallback);
    selectSeries(arr: any[], iterator: AsyncIterator, callback: AsyncCallback);
    reject(arr: any[], iterator: AsyncIterator, callback: AsyncCallback);
    rejectSeries(arr: any[], iterator: AsyncIterator, callback: AsyncCallback);
    reduce(arr: any[], memo: any, iterator: AsyncMemoIterator, callback: AsyncCallback);
    inject(arr: any[], memo: any, iterator: AsyncMemoIterator, callback: AsyncCallback);
    foldl(arr: any[], memo: any, iterator: AsyncMemoIterator, callback: AsyncCallback);
    reduceRight(arr: any[], memo: any, iterator: AsyncMemoIterator, callback: AsyncCallback);
    foldr(arr: any[], memo: any, iterator: AsyncMemoIterator, callback: AsyncCallback);
    detect(arr: any[], iterator: AsyncIterator, callback: AsyncCallback);
    detectSeries(arr: any[], iterator: AsyncIterator, callback: AsyncCallback);
    sortBy(arr: any[], iterator: AsyncIterator, callback: AsyncCallback);
    some(arr: any[], iterator: AsyncIterator, callback: AsyncCallback);
    any(arr: any[], iterator: AsyncIterator, callback: AsyncCallback);
    every(arr: any[], iterator: AsyncIterator, callback: AsyncCallback);
    all(arr: any[], iterator: AsyncIterator, callback: AsyncCallback);
    concat(arr: any[], iterator: AsyncIterator, callback: AsyncCallback);
    concatSeries(arr: any[], iterator: AsyncIterator, callback: AsyncCallback);

    // Control Flow
    series(tasks: any[], callback?: AsyncCallback): void;
    series(tasks: any, callback?: AsyncCallback): void;
    parallel(tasks: any[], callback?: AsyncCallback): void;
    parallel(tasks: any, callback?: AsyncCallback): void;
    whilst(test: Function, fn: Function, callback: AsyncCallback): void;
    until(test: Function, fn: Function, callback: AsyncCallback): void;
    waterfall(tasks: any[], callback?: AsyncCallback): void;
    waterfall(tasks: any, callback?: AsyncCallback): void;
    queue(worker: AsyncWorker, concurrency: number): AsyncQueue;
    //auto(tasks: any[], callback?: AsyncCallback): void;
    auto(tasks: any, callback?: AsyncCallback): void;
    iterator(tasks): Function;
    apply(fn: Function, ...arguments: any[]): void;
    nextTick(callback: AsyncCallback): void;

    // Utils
    memoize(fn: Function, hasher?: Function): Function;
    unmemoize(fn: Function): Function;
    log(fn: Function, ...arguments: any[]): void;
    dir(fn: Function, ...arguments: any[]): void;
    noConflict(): Async;
}

declare var async: Async;