// Type definitions for es6-promise
// Project: https://github.com/jakearchibald/ES6-Promise
// Definitions by: François de Campredon <https://github.com/fdecampredon/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface Thenable<R> {
	then<U>(onResolve: (value: R) => Thenable<U>,  onReject: (error: any) => Thenable<U>): Thenable<U>;
	then<U>(onResolve: (value: R) => Thenable<U>, onReject?: (error: any) => U): Thenable<U>;
	then<U>(onResolve: (value: R) => U, onReject: (error: any) => Thenable<U>): Thenable<U>;
	then<U>(onResolve?: (value: R) => U, onReject?: (error: any) => U): Thenable<U>;
}

declare class Promise<R> implements Thenable<R> {
	/**
	 * If you call resolve in the body of the callback passed to the constructor, 
	 * your promise is fulfilled with result object passed to resolve.
	 * If you call reject your promise is rejected with the object passed to resolve. 
	 * For consistency and debugging (eg stack traces), obj should be an instanceof Error. 
	 * Any errors thrown in the constructor callback will be implicitly passed to reject().
	 */
	constructor(callback: (resolve : (result: R) => void, reject: (error: any) => void) => void);
	/**
	 * If you call resolve in the body of the callback passed to the constructor, 
	 * your promise will be fulfilled/rejected with the outcome of thenable passed to resolve.
	 * If you call reject your promise is rejected with the object passed to resolve. 
	 * For consistency and debugging (eg stack traces), obj should be an instanceof Error. 
	 * Any errors thrown in the constructor callback will be implicitly passed to reject().
	 */
	constructor(callback: (resolve : (result: Thenable<R>) => void, reject: (error: any) => void) => void);

	/**
	 * onResolve is called when/if "promise" resolves. onReject is called when/if "promise" rejects. 
	 * Both are optional, if either/both are omitted the next onResolve/onReject in the chain is called. 
	 * Both callbacks have a single parameter , the fulfillment value or rejection reason. 
	 * "then" returns a new promise equivalent to the value you return from onResolve/onReject after being passed through Promise.resolve. 
	 * If an error is thrown in the callback, the returned promise rejects with that error.
	 * 
	 * @param onResolve called when/if "promise" resolves
	 * @param onReject called when/if "promise" rejects
	 */
	then<U>(onResolve: (value: R) => Thenable<U>,  onReject: (error: any) => Thenable<U>): Promise<U>;
	/**
	 * onResolve is called when/if "promise" resolves. onReject is called when/if "promise" rejects. 
	 * Both are optional, if either/both are omitted the next onResolve/onReject in the chain is called. 
	 * Both callbacks have a single parameter , the fulfillment value or rejection reason. 
	 * "then" returns a new promise equivalent to the value you return from onResolve/onReject after being passed through Promise.resolve. 
	 * If an error is thrown in the callback, the returned promise rejects with that error.
	 * 
	 * @param onResolve called when/if "promise" resolves
	 * @param onReject called when/if "promise" rejects
	 */
	then<U>(onResolve: (value: R) => Thenable<U>, onReject?: (error: any) => U): Promise<U>;
	/**
	 * onResolve is called when/if "promise" resolves. onReject is called when/if "promise" rejects. 
	 * Both are optional, if either/both are omitted the next onResolve/onReject in the chain is called. 
	 * Both callbacks have a single parameter , the fulfillment value or rejection reason. 
	 * "then" returns a new promise equivalent to the value you return from onResolve/onReject after being passed through Promise.resolve. 
	 * If an error is thrown in the callback, the returned promise rejects with that error.
	 * 
	 * @param onResolve called when/if "promise" resolves
	 * @param onReject called when/if "promise" rejects
	 */
	then<U>(onResolve: (value: R) => U, onReject: (error: any) => Thenable<U>): Promise<U>;
	/**
	 * onResolve is called when/if "promise" resolves. onReject is called when/if "promise" rejects. 
	 * Both are optional, if either/both are omitted the next onResolve/onReject in the chain is called. 
	 * Both callbacks have a single parameter , the fulfillment value or rejection reason. 
	 * "then" returns a new promise equivalent to the value you return from onResolve/onReject after being passed through Promise.resolve. 
	 * If an error is thrown in the callback, the returned promise rejects with that error.
	 * 
	 * @param onResolve called when/if "promise" resolves
	 * @param onReject called when/if "promise" rejects
	 */
	then<U>(onResolve?: (value: R) => U, onReject?: (error: any) => U): Promise<U>;
	
	/**
	 * Sugar for promise.then(undefined, onReject)
	 * 
	 * @param onReject called when/if "promise" rejects
	 */
	catch<U>(onReject?: (error: any) => Thenable<U>): Promise<U>;
	/**
	 * Sugar for promise.then(undefined, onReject)
	 * 
	 * @param onReject called when/if "promise" rejects
	 */
	catch<U>(onReject?: (error: any) => U): Promise<U>;
}

declare module Promise {
	/**
	 * Returns promise (only if promise.constructor == Promise)
	 */
	function cast<R>(promise: Promise<R>): Promise<R>;
	/**
	 * Make a promise that fulfills to obj.
	 */
	function cast<R>(object?: R): Promise<R>;

	/**
	 * Make a new promise from the thenable. 
	 * A thenable is promise-like in as far as it has a "then" method. 
	 * This also creates a new promise if you pass it a genuine JavaScript promise, making it less efficient for casting than Promise.cast.
	 */
	function resolve<R>(thenable: Thenable<R>): Promise<R>;
	/**
	 * Make a promise that fulfills to obj. Same as Promise.cast(obj) in this situation.
	 */
	function resolve<R>(object?: R): Promise<R>;
	
	/**
	 * Make a promise that rejects to obj. For consistency and debugging (eg stack traces), obj should be an instanceof Error
	 */
	function reject(error?: any): Promise<any>;
	
	/**
	 * Make a promise that fulfills when every item in the array fulfills, and rejects if (and when) any item rejects. 
	 * the array passed to all can be a mixture of promise-like objects and other objects. 
	 * The fulfillment value is an array (in order) of fulfillment values. The rejection value is the first rejection value.
	 */
	function all<R>(promises: Promise<R>[]): Promise<R[]>;
	
	/**
	 * Make a Promise that fulfills when any item fulfills, and rejects if any item rejects.
	 */
	function race<R>(promises: Promise<R>[]): Promise<R>;
}

declare module 'es6-promise' {
	var foo: typeof Promise; // Temp variable to reference Promise in local context
	module rsvp {
		export var Promise: typeof foo;
	}
	export = rsvp;
}
