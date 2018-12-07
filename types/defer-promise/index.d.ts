// Type definitions for defer-promise 1.0
// Project: https://github.com/75lb/defer-promise#readme
// Definitions by: Niklas Fiekas <https://github.com/niklasf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

// tslint:disable-next-line no-unnecessary-generics
declare function defer<T>(): DeferPromise.Deferred<T>;

export = defer;

declare global {
    namespace DeferPromise {
        interface Deferred<T> {
            promise: Promise<T>;
            resolve(value: T | PromiseLike<T>): void;
            resolve(this: Deferred<void>): void;
            reject(reason?: any): void;
        }
    }
}
