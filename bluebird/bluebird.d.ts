// Type definitions for bluebird 1.0.0
// Project: https://github.com/petkaantonov/bluebird
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Note: these are preliminary non-generic typings using `any`: the generic versions are ready but need (tsc >= v1.0.0) due to issues in the compiler
// - https://github.com/borisyankov/DefinitelyTyped/issues/1563
// - https://github.com/borisyankov/DefinitelyTyped/tree/def/bluebird/bluebird

declare class Promise {
	/**
	 * Create a new promise. The passed in function will receive functions `resolve` and `reject` as its arguments which can be called to seal the fate of the created promise.
	 */
	constructor(resolver: (resolve: (value: any) => void, reject: (reason: any) => any) => void);
	/**
	 * Promises/A+ `.then()` with progress handler. Returns a new promise chained from this promise. The new promise will be rejected or resolved dedefer on the passed `fulfilledHandler`, `rejectedHandler` and the state of this promise.
	 */
	then(fulfilledHandler?: (value: any) => any, rejectedHandler?: (reason: any) => any, progressHandler?: (note: any) => any):Promise;

	/**
	 * This is a catch-all exception handler, shortcut for calling `.then(null, handler)` on this promise. Any exception happening in a `.then`-chain will propagate to nearest `.catch` handler.
	 *
	 * Alias `.caught();` for compatibility with earlier ECMAScript version.
	 */
	catch(handler: (reason: any) => any):Promise;
	caught(handler: (reason: any) => any):Promise;

	/**
	 * This extends `.catch` to work more like catch-clauses in languages like Java or C#. Instead of manually checking `instanceof` or `.name === "SomeError"`, you may specify a number of error constructors which are eligible for this catch handler. The catch handler that is first met that has eligible constructors specified, is the one that will be called.
	 *
	 * This method also supports predicate-based filters. If you pass a predicate function instead of an error constructor, the predicate will receive the error as an argument. The return result of the predicate will be used determine whether the error handler should be called.
	 *
	 * Alias `.caught();` for compatibility with earlier ECMAScript version.
	 */
		//TODO expand this complex overload (weird)
	catch(predicate: (reason: any) => boolean, handler: (reason: any) => any): Promise;
	caught(predicate: (reason: any) => boolean, handler: (reason: any) => any): Promise;

	catch(ErrorClass: Function, handler: (reason: any) => any): Promise;
	caught(ErrorClass: Function, handler: (reason: any) => any): Promise;

	/**
	 * Like `.catch` but instead of catching all types of exceptions, it only catches those that don't originate from thrown errors but rather from explicit rejections.
	 */
	error(rejectedHandler: (reason: any) => any): Promise;

	/**
	 * Pass a handler that will be called regardless of this promise's fate. Returns a new promise chained from this promise. There are special semantics for `.finally()` in that the final value cannot be modified from the handler.
	 *
	 * Alias `.lastly();` for compatibility with earlier ECMAScript version.
	 */
	finally(handler: (value: any) => any): Promise;
	lastly(handler: (value: any) => any): Promise;

	/**
	 * Create a promise that follows this promise, but is bound to the given `thisArg` value. A bound promise will call its handlers with the bound value set to `this`. Additionally promises derived from a bound promise will also be bound promises with the same `thisArg` binding as the original promise.
	 */
	bind(thisArg: any): Promise;

	/**
	 * Like `.then()`, but any unhandled rejection that ends up here will be thrown as an error.
	 */
	done(fulfilledHandler?: (value: any) => any, rejectedHandler?: (reason: any) => any, progressHandler?: (note: any) => any): Promise;

	/**
	 * Shorthand for `.then(null, null, handler);`. Attach a progress handler that will be called if this promise is progressed. Returns a new promise chained from this promise.
	 */
	progressed(handler: (note: any) => any): Promise;

	/**
	 * Same as calling `Promise.delay(this, ms)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
	 */
	delay(ms: number): Promise;

	/**
	 * Returns a promise that will be fulfilled with this promise's fulfillment value or rejection reason. However, if this promise is not fulfilled or rejected within `ms` milliseconds, the returned promise is rejected with a `Promise.TimeoutError` instance.
	 *
	 * You may specify a custom error message with the `message` parameter.
	 */

	timeout(ms: number, message?: string): Promise;

	/**
	 * Register a node-style callback on this promise. When this promise is is either fulfilled or rejected, the node callback will be called back with the node.js convention where error reason is the first argument and success value is the second argument. The error argument will be `null` in case of success.
	 * Returns back this promise instead of creating a new one. If the `callback` argument is not a function, this method does not do anything.
	 */
	nodeify(callback?: Function): Promise;

	/**
	 * Marks this promise as cancellable. Promises by default are not cancellable after v0.11 and must be marked as such for `.cancel()` to have any effect. Marking a promise as cancellable is infectious and you don't need to remark any descendant promise.
	 */
	cancellable(): Promise;

	/**
	 * Cancel this promise. The cancellation will propagate to farthest cancellable ancestor promise which is still pending.
	 *
	 * That ancestor will then be rejected with a `CancellationError` (get a reference from `Promise.CancellationError`) object as the rejection reason.
	 *
	 * In a promise rejection handler you may check for a cancellation by seeing if the reason object has `.name === "Cancel"`.
	 *
	 * Promises are by default not cancellable. Use `.cancellable()` to mark a promise as cancellable.
	 */
	cancel(): Promise;

	/**
	 * Like `.then()`, but cancellation of the the returned promise or any of its descendant will not propagate cancellation to this promise or this promise's ancestors.
	 */
	fork(fulfilledHandler?: (value: any) => any, rejectedHandler?: (reason: any) => any, progressHandler?: (note: any) => any): Promise;

	/**
	 * Create an uncancellable promise based on this promise.
	 */
	uncancellable(): Promise;

	/**
	 * See if this promise can be cancelled.
	 */
	isCancellable(): boolean;

	/**
	 * See if this `promise` has been fulfilled.
	 */
	isFulfilled(): boolean;

	/**
	 * See if this `promise` has been rejected.
	 */
	isRejected(): boolean;

	/**
	 * See if this `promise` is still defer.
	 */
	isPending(): boolean;

	/**
	 * See if this `promise` is resolved -> either fulfilled or rejected.
	 */
	isResolved(): boolean;

	/**
	 * Synchronously inspect the state of this `promise`. The `Promise.Inspection` will represent the state of the promise as snapshotted at the time of calling `.inspect()`.
	 */
	inspect(): Promise.Inspection;

	/**
	 * This is a convenience method for doing:
	 *
	 * <code>
	 * promise.then(function(obj){
	 *     return obj[propertyName].call(obj, arg...);
	 * });
	 * </code>
	 */
	call(propertyName: string, ...args: any[]): Promise;

	/**
	 * This is a convenience method for doing:
	 *
	 * <code>
	 * promise.then(function(obj){
	 *     return obj[propertyName];
	 * });
	 * </code>
	 */
	get(propertyName: string): Promise;

	/**
	 * Convenience method for:
	 *
	 * <code>
	 * .then(function() {
	 *    return value;
	 * });
	 * </code>
	 *
	 * in the case where `value` doesn't change its value. That means `value` is bound at the time of calling `.return()`
	 *
	 * Alias `.thenReturn();` for compatibility with earlier ECMAScript version.
	 */
	return(value: any): Promise;
	thenReturn(): Promise;

	/**
	 * Convenience method for:
	 *
	 * <code>
	 * .then(function() {
	 *    throw reason;
	 * });
	 * </code>
	 * Same limitations apply as with `.return()`.
	 *
	 * Alias `.thenThrow();` for compatibility with earlier ECMAScript version.
	 */
	throw(reason: any): Promise;
	thenThrow(): Promise;

	/**
	 * Convert to String.
	 */
	toString(): string;

	/**
	 * This is implicitly called by `JSON.stringify` when serializing the object. Returns a serialized representation of the `Promise`.
	 */
	toJSON(): Object;

	/**
	 * Same as calling `Promise.all(thisPromise)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
	 */
	all(): Promise;

	/**
	 * Same as calling `Promise.props(thisPromise)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
	 */
	props(): Promise;

	/**
	 * Same as calling `Promise.settle(thisPromise)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
	 */
	settle(): Promise;

	/**
	 * Same as calling `Promise.any(thisPromise)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
	 */
	any(): Promise;

	/**
	 * Same as calling `Promise.race(thisPromise)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
	 */
	some(count: number): Promise;

	/**
	 * Same as calling `Promise.some(thisPromise, count)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
	 */
	race(): Promise;

	/**
	 * Like calling `.then`, but the fulfillment value or rejection reason is assumed to be an array, which is flattened to the formal parameters of the handlers.
	 */
	spread(fulfilledHandler?: (value: any) => any, rejectedHandler?: (reason: any) => any): Promise;

	/**
	 * Same as calling `Promise.map(thisPromise, mapper)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
	 */
	map(mapper: (item: any, index: number, arrayLength: number) => any): Promise;

	/**
	 * Same as calling `Promise.reduce(thisPromise, Function reducer, initialValue)`. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
	 */
	reduce(reducer: (total: number, current: any, index: number, arrayLength: number) => any, initialValue?: any): Promise;

	/**
	 * Same as calling ``Promise.filter(thisPromise, filterer)``. With the exception that if this promise is bound to a value, the returned promise is bound to that value too.
	 */
	filter(filterer: (item: any, index: number, arrayLength: number) => any): Promise;
}

declare module Promise {

	interface Resolver {
		/**
		 * Resolve the underlying promise with `value` as the resolution value. If `value` is a thenable or a promise, the underlying promise will assume its state.
		 */
		resolve(value: any): void;

		/**
		 * Reject the underlying promise with `reason` as the rejection reason.
		 */
		reject(reason: any): void;

		/**
		 * Progress the underlying promise with `value` as the progression value.
		 */
		progress(value: any): void;

		/**
		 * Gives you a callback representation of the `Promise.Resolver`. Note that this is not a method but a property. The callback accepts error object in first argument and success values on the 2nd parameter and the rest, I.E. node js conventions.
		 *
		 * If the the callback is called with multiple success values, the resolver fullfills its promise with an array of the values.
		 */
		callback:Function;
	}

	interface Inspection {
		/**
		 * See if the underlying promise was fulfilled at the creation time of this inspection object.
		 */
		isFulfilled(): boolean;

		/**
		 * See if the underlying promise was rejected at the creation time of this inspection object.
		 */
		isRejected(): boolean;

		/**
		 * See if the underlying promise was defer at the creation time of this inspection object.
		 */
		isPending(): boolean;

		/**
		 * Get the fulfillment value of the underlying promise. Throws if the promise wasn't fulfilled at the creation time of this inspection object.
		 *
		 * throws `TypeError`
		 */
		value(): any;

		/**
		 * Get the rejection reason for the underlying promise. Throws if the promise wasn't rejected at the creation time of this inspection object.
		 *
		 * throws `TypeError`
		 */
		error(): any;
	}

	/**
	 * Start the chain of promises with `Promise.try`. Any synchronous exceptions will be turned into rejections on the returned promise.
	 *
	 * Note about second argument: if it's specifically a true array, its values become respective arguments for the function call. Otherwise it is passed as is as the first argument for the function call.
	 *
	 * Alias for `attempt();` for compatibility with earlier ECMAScript version.
	 */
		// function try(fn: () => any, args?: any[], ctx?: any): Promise;

	function attempt(fn: () => any, args?: any[], ctx?: any): Promise;

	/**
	 * Returns a new function that wraps the given function `fn`. The new function will always return a promise that is fulfilled with the original functions return values or rejected with thrown exceptions from the original function.
	 * This method is convenient when a function can sometimes return synchronously or throw synchronously.
	 */
	function method(fn: Function): Function;

	/**
	 * Create a promise that is resolved with the given `value`. If `value` is a thenable or promise, the returned promise will assume its state.
	 */
	function resolve(value: any): Promise;

	/**
	 * Create a promise that is rejected with the given `reason`.
	 */
	function reject(reason: any): Promise;

	/**
	 * Create a promise with undecided fate and return a `Promise.Resolver` to control it. See resolution?:Promise(#promise-resolution).
	 */
	function defer(): Promise.Resolver;

	/**
	 * Cast the given `value` to a trusted promise. If `value` is already a trusted `Promise`, it is returned as is. If `value` is not a thenable, a fulfilled is:Promise returned with `value` as its fulfillment value. If `value` is a thenable (Promise-like object, like those returned by jQuery's `$.ajax`), returns a trusted that:Promise assimilates the state of the thenable.
	 */
	function cast(value: any): Promise;

	/**
	 * Sugar for `Promise.resolve(undefined).bind(thisArg);`. See `.bind()`.
	 */
	function bind(thisArg: any): Promise;

	/**
	 * See if `value` is a trusted Promise.
	 */
	function is(value: any): boolean;

	/**
	 * Call this right after the library is loaded to enabled long stack traces. Long stack traces cannot be disabled after being enabled, and cannot be enabled after promises have alread been created. Long stack traces imply a substantial performance penalty, around 4-5x for throughput and 0.5x for latency.
	 */
	function longStackTraces(): void;

	/**
	 * Returns a promise that will be fulfilled with `value` (or `undefined`) after given `ms` milliseconds. If `value` is a promise, the delay will start counting down when it is fulfilled and the returned promise will be fulfilled with the fulfillment value of the `value` promise.
	 */
	function delay(value: Promise, ms: number): Promise;

	function delay(value: any, ms: number): Promise;

	function delay(ms: number): Promise;

	/**
	 * Returns a function that will wrap the given `nodeFunction`. Instead of taking a callback, the returned function will return a promise whose fate is decided by the callback behavior of the given node function. The node function should conform to node.js convention of accepting a callback as last argument and calling that callback with error as the first argument and success value on the second argument.
	 *
	 * If the `nodeFunction` calls its callback with multiple success values, the fulfillment value will be an array of them.
	 *
	 * If you pass a `receiver`, the `nodeFunction` will be called as a method on the `receiver`.
	 */
	function promisify(nodeFunction: Function, receiver?: any): Function;

	/**
	 * This overload has been **deprecated**. The overload will continue working for now. The recommended method for promisifying multiple methods at once is ``Promise.promisifyAll(Object target)``
	 */
	function promisify(target: Object): Object;

	/**
	 * Promisifies the entire object by going through the object's properties and creating an async equivalent of each function on the object and its prototype chain. The promisified method name will be the original method name postfixed with `Async`. Returns the input object.
	 *
	 * Note that the original methods on the object are not overwritten but new methods are created with the `Async`-postfix. For example, if you `promisifyAll()` the node.js `fs` object use `fs.statAsync()` to call the promisified `stat` method.
	 */
	function promisifyAll(target: Object): Object;

	/**
	 * Returns a function that can use `yield` to run asynchronous code synchronously. This feature requires the support of generators which are drafted in the next version of the language. Node version greater than `0.11.2` is required and needs to be executed with the `--harmony-generators` (or `--harmony`) command-line switch.
	 */
	function coroutine(generatorFunction: Function): Function;

	/**
	 * Spawn a coroutine which may yield promises to run asynchronous code synchronously. This feature requires the support of generators which are drafted in the next version of the language. Node version greater than `0.11.2` is required and needs to be executed with the `--harmony-generators` (or `--harmony`) command-line switch.
	 */
	function spawn(generatorFunction: Function): Promise;

	/**
	 * This is relevant to browser environments with no module loader.
	 *
	 * Release control of the `Promise` namespace to whatever it was before this library was loaded. Returns a reference to the library namespace so you can attach it to something else.
	 */
	function noConflict(): Object;

	/**
	 * Add `handler` as the handler to call when there is a possibly unhandled rejection. The default handler logs the error stack to stderr or `console.error` in browsers.
	 *
	 * Passing no value or a non-function will have the effect of removing any kind of handling for possibly unhandled rejections.
	 */
	function onPossiblyUnhandledRejection(handler: (reason: any) => any): void;

	/**
	 * Given an array, or a promise of an array, which contains promises (or a mix of promises and values) return a promise that is fulfilled when all the items in the array are fulfilled. The promise's fulfillment value is an array with fulfillment values at respective positions to the original array. If any promise in the array rejects, the returned promise is rejected with the rejection reason.
	 */
	function all(values: any[]): Promise;

	/**
	 * Like ``Promise.all`` but for object properties instead of array items. Returns a promise that is fulfilled when all the properties of the object are fulfilled. The promise's fulfillment value is an object with fulfillment values at respective keys to the original object. If any promise in the object rejects, the returned promise is rejected with the rejection reason.
	 *
	 * If `object` is a trusted `Promise`, then it will be treated as a promise for object rather than for its properties. All other objects are treated for their properties as is returned by `Object.keys` - the object's own enumerable properties.
	 *
	 * *The original object is not modified.*
	 */
	function props(object: Promise): Promise;

	function props(object: Object): Promise;

	/**
	 * Given an array, or a promise of an array, which contains promises (or a mix of promises and values) return a promise that is fulfilled when all the items in the array are either fulfilled or rejected. The fulfillment value is an array of ``Promise.Inspection`` instances at respective positions in relation to the input array.
	 *
	 * *original:The array is not modified. The input array sparsity is retained in the resulting array.*
	 */
	function settle(values: any[]): Promise;

	/**
	 * Like `Promise.some()`, with 1 as `count`. However, if the promise fulfills, the fulfillment value is not an array of 1 but the value directly.
	 */
	function any(values: any[]): Promise;

	/**
	 * Given an array, or a promise of an array, which contains promises (or a mix of promises and values) return a promise that is fulfilled or rejected as soon as a promise in the array is fulfilled or rejected with the respective rejection reason or fulfillment value.
	 *
	 * **Note** If you pass empty array or a sparse array with no values, or a promise/thenable for such, it will be forever pending.
	 */
	function race(values: any[]): Promise;

	/**
	 * Initiate a competetive race between multiple promises or values (values will become immediately fulfilled promises). When `count` amount of promises have been fulfilled, the returned promise is fulfilled with an array that contains the fulfillment values of the winners in order of resolution.
	 *
	 * If too many promises are rejected so that the promise can never become fulfilled, it will be immediately rejected with an array of rejection reasons in the order they were thrown in.
	 *
	 * *The original array is not modified.*
	 */
	function some(values: any[], count: number): Promise;

	/**
	 * Like `Promise.all()` but instead of having to pass an array, the array is generated from the passed variadic arguments.
	 */
	function join(...values: any[]): Promise;

	/**
	 * Map an array, or a promise of an array, which contains a promises (or a mix of promises and values) with the given `mapper` function with the signature `(item, index, arrayLength)` where `item` is the resolved value of a respective promise in the input array. If any promise in the input array is rejected the returned promise is rejected as well.
	 *
	 * If the `mapper` function returns promises or thenables, the returned promise will wait for all the mapped results to be resolved as well.
	 *
	 * *The original array is not modified.*
	 */
	function map(values: any[], mapper: (item: any, index: number, arrayLength: number) => any): Promise;

	/**
	 * Reduce an array, or a promise of an array, which contains a promises (or a mix of promises and values) with the given `reducer` function with the signature `(total, current, index, arrayLength)` where `item` is the resolved value of a respective promise in the input array. If any promise in the input array is rejected the returned promise is rejected as well.
	 *
	 * If the reducer function returns a promise or a thenable, the result for the promise is awaited for before continuing with next iteration.
	 *
	 * *The original array is not modified. If no `intialValue` is given and the array doesn't contain at least 2 items, the callback will not be called and `undefined` is returned. If `initialValue` is given and the array doesn't have at least 1 item, `initialValue` is returned.*
	 */
	function reduce(values: any[], reducer: (total: number, current: any, index: number, arrayLength: number) => any, initialValue?: any): Promise;

	/**
	 * Filter an array, or a promise of an array, which contains a promises (or a mix of promises and values) with the given `filterer` function with the signature `(item, index, arrayLength)` where `item` is the resolved value of a respective promise in the input array. If any promise in the input array is rejected the returned promise is rejected as well.
	 *
	 * The return values from the filtered functions are coerced to booleans, with the exception of promises and thenables which are awaited for their eventual result.
	 *
	 * *The original array is not modified.
	 */
	function filter(values: any[], filterer: (item: any, index?: number, arrayLength?: number) => any): Promise;
}

declare module 'bluebird' {
export = Promise;
}
