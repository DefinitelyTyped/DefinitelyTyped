// Type definitions for saywhen 1.1.0
// Project: https://github.com/pushtechnology/saywhen
// Definitions by: Sean Sobey <https://github.com/SeanSobey>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module saywhen {

	function when<T extends Function>(spy: T & jasmine.Spy): CallHandler<T>;

	namespace when {

		function captor(val?: any): MatcherProxy;

		function noConflict(): void;
	}
	
	class CallHandler<T extends Function> {
		readonly isCalled: Proxy<T>;
		isCalledWith(...args: Array<any>): Proxy<T>;
	}

	interface Proxy<T extends Function> {
		//tslint:disable:ban-types
		then(fn: T): Proxy<T>;
		thenReturn(val: any): Proxy<T>;
		thenThrow(err: Error): Proxy<T>;
	}

	interface MatcherProxy {
		(arg: any): boolean;
		readonly latest: any | undefined;
		values(): Array<any>;
	}
}

export = saywhen.when;