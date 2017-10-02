// Type definitions for tspromise 0.0.4
// Project: https://github.com/soywiz/tspromise
// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
declare class Thenable<T> {
	then<TR>(onFulfilled: (value: T) => Thenable<TR>, onRejected?: (error: Error) => TR): Thenable<TR>;
	then<TR>(onFulfilled: (value: T) => Thenable<TR>, onRejected?: (error: Error) => void): Thenable<TR>;
	then<TR>(onFulfilled: (value: T) => TR, onRejected?: (error: Error) => void): Thenable<TR>;
	then<TR>(onFulfilled: (value: T) => TR, onRejected?: (error: Error) => TR): Thenable<TR>;
	catch(onRejected: (error: Error) => void): Thenable<T>;
}

interface NodeCallback<T> {
	(err: Error, value: T): void;
}

declare module "tspromise" {
	class Promise<T> extends Thenable<T> {
		constructor(callback: (resolve: (value?: T) => void, reject?: (error: Error) => void) => void);
		static resolve<T>(value?: T): Thenable<T>;
		static resolve<T>(promise: Thenable<T>): Thenable<T>;
		static reject<T>(error: Error): Thenable<T>;
		static all(promises: Thenable<any>[]): Thenable<any[]>;
		static async<TR>(callback: () => TR): () => Thenable<TR>;
		static async<T1, TR>(callback: (p1: T1) => TR): (p1: T1) => Thenable<TR>;
		static async<T1, T2, TR>(callback: (p1: T1, p2: T2) => TR): (p1: T1, p2: T2) => Thenable<TR>;
		static async<T1, T2, T3, TR>(callback: (p1: T1, p2: T2, p3: T3) => TR): (p1: T1, p2: T2, p3: T3) => Thenable<TR>;
		static async<T1, T2, T3, T4, TR>(callback: (p1: T1, p2: T2, p3: T3, p4: T4) => TR): (p1: T1, p2: T2, p3: T3, p4: T4) => Thenable<TR>;
		static spawn<TR>(generatorFunction: () => TR): Thenable<TR>;
		static rewriteFolderSync(path: string): void;
		static waitAsync(time: number): Thenable<{}>;
		static nfcall<T>(obj: any, methodName: String, ...args: any[]): Thenable<T>;
	}

	export = Promise;
}

declare function yield<T>(promise: Thenable<T>): T;
