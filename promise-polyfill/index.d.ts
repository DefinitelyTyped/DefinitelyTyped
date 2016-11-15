// Type definitions for promise v6.0.2
// Project: https://www.npmjs.com/package/promise-polyfill
// Definitions by: Steve Jenkins <https://github.com/skysteve>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace Promise;

export = Promise;
declare var Promise: Promise.IPromise;

declare namespace Promise {
	export interface IPromise {
		new <T>(resolver: (resolve: (value: T) => void, reject: (reason: any) => void) => void): IThenable<T>;
		resolve: <T>(value: T) => IThenable<T>;
		reject: <T>(value: T) => IThenable<T>;
		all: (array: Array<IThenable<any>>) => IThenable<Array<any>>;
	}

	export interface IThenable<T> {
		then<R>(onFulfilled?: (value: T) => IThenable<R>|R, onRejected?: (error: any) => IThenable<R>|R): IThenable<R>;
		catch<R>(onRejected?: (error: any) => IThenable<R>|R): IThenable<R>;
	}
}
