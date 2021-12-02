// Type definitions for deasync-promise 1.0
// Project: https://github.com/jakwuh/deasync-promise
// Definitions by: ArthurKa <https://github.com/ArthurKa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function deasyncPromise<T>(promise: PromiseLike<T>): T;
export = deasyncPromise;
