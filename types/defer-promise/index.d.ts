// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
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
