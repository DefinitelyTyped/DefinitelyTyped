// Type definitions for p-defer 1.0
// Project: https://github.com/sindresorhus/p-defer
// Definitions by: Sam Verschueren <https://github.com/SamVerschueren>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = pDefer;

declare function pDefer<T>(): pDefer.DeferredPromise<T>;

declare namespace pDefer {
    interface DeferredPromise<T> {
        resolve(value?: T | PromiseLike<T>): void;
        reject(reason: any): void;
        promise: Promise<T>;
    }
}
