// Type definitions for promise v7.1.1
// Project: https://www.promisejs.org/
// Definitions by: Manuel Rueda <https://github.com/ManRueda>
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
		denodeify: (fn: Function) => (...args: any[]) => IThenable<any>;
		nodeify: (fn: Function) => Function;
	}

	export interface IThenable<T> {
		then<R>(onFulfilled?: (value: T) => IThenable<R>|R, onRejected?: (error: any) => IThenable<R>|R): IThenable<R>;
		catch<R>(onRejected?: (error: any) => IThenable<R>|R): IThenable<R>;
		done<R>(onFulfilled?: (value: T) => IThenable<R>|R, onRejected?: (error: any) => IThenable<R>|R): IThenable<R>;
		nodeify<R>(callback: Function): IThenable<R>;
	}
}
