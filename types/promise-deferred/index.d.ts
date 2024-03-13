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
    new<T>(): DeferredCtor.Deferred<T>;

    Promise: typeof Promise;
};

declare namespace DeferredCtor {
    interface Deferred<T> {
        readonly promise: Promise<T>;
        resolve(value: T | PromiseLike<T>): void;
        reject(reason?: any): void;
    }
}
