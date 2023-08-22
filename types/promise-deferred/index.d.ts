// Type definitions for promise-deferred 2.0
// Project: https://github.com/ljharb/promise-deferred
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = DeferredCtor;

/**
 * @example
 * import Deferred = require('promise-deferred');
 * const deferred = new Deferred<string>();
 *
 * // set up handlers
 * deferred.promise.then((value) => {}, (error) => {});
 *
 * // resolve
 * deferred.resolve('a value');
 *
 * // reject
 * deferred.reject(new Error('oh noes'));
 */
declare const DeferredCtor: {
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    <T>(): DeferredCtor.Deferred<T>;
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    new <T>(): DeferredCtor.Deferred<T>;

    Promise: typeof Promise;
};

declare namespace DeferredCtor {
    interface Deferred<T> {
        readonly promise: Promise<T>;
        resolve(value: T | PromiseLike<T>): void;
        reject(reason?: any): void;
    }
}
