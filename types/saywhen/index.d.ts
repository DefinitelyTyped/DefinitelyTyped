// Type definitions for saywhen 1.1
// Project: https://github.com/pushtechnology/saywhen
// Definitions by: Sean Sobey <https://github.com/SeanSobey>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="jasmine" />

declare function when<T extends (...args: any[]) => any>(spy: T & jasmine.Spy): CallHandler<T>;

declare namespace when {
	function captor(val?: any): MatcherProxy;

	function noConflict(): void;
}

declare class CallHandler<T extends (...args: any[]) => any> {
	readonly isCalled: Proxy<T>;
	isCalledWith(...args: any[]): Proxy<T>;
}

interface Proxy<T extends (...args: any[]) => any> {
	then(fn: T): Proxy<T>;
	thenReturn(val: any): Proxy<T>;
	thenThrow(err: Error): Proxy<T>;
}

interface MatcherProxy {
	(arg: any): boolean;
	readonly latest: any | undefined;
	values(): any[];
}

export = when;
