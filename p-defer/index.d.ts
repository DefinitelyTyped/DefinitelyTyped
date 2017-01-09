// Type definitions for p-defer 1.0
// Project: https://github.com/sindresorhus/p-defer
// Definitions by: Sam Verschueren <https://github.com/SamVerschueren>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface DeferredPromise<T> {
	resolve<U>(value: U | PromiseLike<U>): Promise<U>;
	reject(reason: any): Promise<never>;
	promise: Promise<T>;
}

declare function pDefer<T>(): DeferredPromise<T>;

export = pDefer;
