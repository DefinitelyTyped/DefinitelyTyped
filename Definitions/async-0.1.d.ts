// Type definitions for Async 0.1
// Project: https://github.com/caolan/async
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare module async {

    export interface Errback { (err: string): any; }

    // Collections
    export function forEach(arr: any[], iterator: (item, callback: Function) => void, callback: Errback): void;
    export function forEachSeries(arr: any[], iterator: (item, callback: Function) => void , callback: Errback): void;
    export function forEachLimit(arr, limit, iterator, callback);
    export function map(arr, iterator, callback);
    export function mapSeries(arr, iterator, callback);
    export function filter(arr, iterator, callback);
    export function filterSeries(arr, iterator, callback);
    export function reject(arr, iterator, callback);
    export function rejectSeries(arr, iterator, callback);
    export function reduce(arr, memo, iterator, callback);
    export function reduceRight(arr, memo, iterator, callback);
    export function detect(arr, iterator, callback);
    export function detectSeries(arr, iterator, callback);
    export function sortBy(arr, iterator, callback);
    export function some(arr, iterator, callback);
    export function every(arr, iterator, callback);
    export function concat(arr, iterator, callback);
    export function concatSeries(arr, iterator, callback);

    // Control Flow
    export function series(tasks, callback? );
    export function parallel(tasks, callback? );
    export function whilst(test, fn, callback);
    export function until(test, fn, callback);
    export function waterfall(tasks, callback? );
    export function queue(worker, concurrency);
    export function auto(tasks, callback? );
    export function iterator(tasks);
    export function apply(fn, ...arguments: any[]);
    export function nextTick(callback);

    // Utils
    export function memoize(fn, hasher? );
    export function unmemoize(fn);
    export function log(fn, ...arguments: any[]);
    export function dir(fn, ...arguments: any[]);
    export function noConflict();
}
