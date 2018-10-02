// Type definitions for saywhen 1.1
// Project: https://github.com/pushtechnology/saywhen
// Definitions by: Sean Sobey <https://github.com/SeanSobey>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jasmine" />

type Func = (...args: any[]) => any;

declare function when<T extends Func>(spy: T & jasmine.Spy): CallHandler<T>;

declare namespace when {
	function captor<T>(val?: T): MatcherProxy<T>;

	function noConflict(): void;

	function is<T>(val: T): boolean;
}

interface CallHandler<T extends Func> {
	readonly isCalled: Proxy<T>;
	isCalledWith(...args: any[]): Proxy<T>;
}

interface Proxy<T extends Func> {
	then(fn: T): Proxy<T>;
	thenReturn(val: any): Proxy<T>;
	thenThrow(err: Error): Proxy<T>;
}

interface MatcherProxy<T> {
	(arg: T): boolean;
	readonly latest: T;
	values(): T[];
}

export = when;
