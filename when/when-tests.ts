/// <reference path="when.d.ts" />

import when = require("when");

class ForeignPromise<T> {
	constructor(private value: T) {
	}

	then<U>(onFulfilled: (value: T) => U, onRejected?: (reason: any) => U) { return new ForeignPromise<U>(onFulfilled(this.value)); }
};

var promise: when.Promise<number>;
var foreign = new ForeignPromise<number>(1);
var error = new Error("boom!");

// TODO: with TypeScript 1.4 a lot of these functions should change to use PromiseOrValue<T>
//    type PromiseOrValue<T> = Promise<T> | T;

/* * * * * * *
 *   Core    *
 * * * * * * */

/* when(x) */

promise = when(1);
promise = when(when(1));
promise = when(foreign);

/* when(x, f) */

promise = when(1, val => val + val);
promise = when(when(1), val => val + val);
promise = when(foreign, val => val + val);

/* when.try(f, ...args) */

promise = when.attempt(() => 1);

promise = when.attempt((a: number) => a + a, 1);
promise = when.attempt((a: number) => a + a, when(1));

promise = when.attempt((a: number, b: number) => a + b, 1, 2);
promise = when.attempt((a: number, b: number) => a + b, 1, when(2));
promise = when.attempt((a: number, b: number) => a + b, when(1), 2);
promise = when.attempt((a: number, b: number) => a + b, when(1), when(2));

promise = when.attempt((a: number, b: number, c: number) => a + b + c, 1, 2, 3);
promise = when.attempt((a: number, b: number, c: number) => a + b + c, 1, when(2), 3);
promise = when.attempt((a: number, b: number, c: number) => a + b + c, when(1), 2, 3);
promise = when.attempt((a: number, b: number, c: number) => a + b + c, when(1), when(2), 3);
promise = when.attempt((a: number, b: number, c: number) => a + b + c, 1, 2, when(3));
promise = when.attempt((a: number, b: number, c: number) => a + b + c, 1, when(2), when(3));
promise = when.attempt((a: number, b: number, c: number) => a + b + c, when(1), 2, when(3));
promise = when.attempt((a: number, b: number, c: number) => a + b + c, when(1), when(2), when(3));

/* when.lift(f) */

// TODO: This is the major issue with lack of union types, it's not possible to represent the return type of when.lift without them.

var liftedFunc0: () => when.Promise<number> = when.lift(() => 2);
var liftedFunc1: (a: when.Promise<number>) => when.Promise<number> = when.lift((a: number) => a + a);
var liftedFunc2: (a: when.Promise<number>, b: when.Promise<number>) => when.Promise<number> = when.lift((a: number, b: number) => a + b);
var liftedFunc3: (a: when.Promise<number>, b: when.Promise<number>, c: when.Promise<number>) => when.Promise<number> = when.lift((a: number, b: number, c: number) => a + b + c);

/* when.join(...promises) */

var joinedPromise: when.Promise<number[]> = when.join(when(1), when(2), when(3));

/* when.promise(resolver) */

promise = when.promise<number>(resolve => resolve(5));
promise = when.promise<number>((resolve, reject) => reject(error));

/* when.resolve(x) */

promise = when.resolve(1);
promise = when.resolve(promise);
promise = when.resolve(foreign);

/* when.reject(error) */

promise = when.reject<number>(error);

/* when.defer() */

var deferred = when.defer<number>();
promise = deferred.promise;
deferred.resolve(1);
deferred.reject(error);

/* * * * * * * *
 *   Promise   *
 * * * * * * * */

/* promise.done(handleResult, handleError) */

when(1).done((val: number) => console.log(val));
when(1).done((val: number) => console.log(val), (err: any) => console.log(err));

/* promise.then(onFulfilled) */

promise = when(1).then((val: number) => val + val);
promise = when(1).then((val: number) => when(val + val));

promise = when(1).then((val: number) => val + val, (err: any) => 2);
promise = when(1).then((val: number) => when(val + val), (err: any) => 2);

/* promise.spread(onFulfilledArray) */

// TODO: Work out how to do this...
// promise = when([1, 2, 3]).spread((a: number, b: number) => a + b);
// promise = when([1, 2, 3]).spread((a: number, b: number) => when(a + b));

/* promise.fold(combine, promise2) */

promise = when(1).fold((a: number, b: number) => a + b, 2);
promise = when(1).fold((a: number, b: number) => a + b, when(2));

promise = when(1).fold((a: number, b: number) => when(a + b), 2);
promise = when(1).fold((a: number, b: number) => when(a + b), when(2));

/* promise.catch(onRejected) */

promise = when(1).catch((err: any) => 2);
promise = when(1).catch((err: any) => when(2));

promise = when(1).catch((err: any) => err.good, (err: any) => 2);
promise = when(1).catch((err: any) => err.good, (err: any) => when(2));

//TODO: error constructor predicate

promise = when(1).otherwise((err: any) => 2);
promise = when(1).otherwise((err: any) => when(2));

promise = when(1).otherwise((err: any) => err.good, (err: any) => 2);
promise = when(1).otherwise((err: any) => err.good, (err: any) => when(2));

/* promise.finally(cleanup) */

promise = when(1).finally(() => console.log('Cleaning up'));

promise = when(1).ensure(() => console.log('Cleaning up'));

/* promise.yield(x) */

promise = when(true).yield(1);
promise = when(true).yield(when(2));

/* promise.else(x) */

promise = when(1).else(2);
promise = when(1).else(2);

promise = when(1).orElse(2);
promise = when(1).orElse(2);

/* promise.tap(onFulfilledSideEffect) */

promise = when(1).tap(val => console.log(val));

/* promise.delay(milliseconds) */

promise = when(1).delay(1000);

/* promise.timeout(milliseconds, reason) */

promise = when(1).timeout(1000);
promise = when(1).timeout(1000, new Error('Too SLOW!'));

/* promise.inspect() */

var status: {
	state: string;
	value?: number;
	reason?: any;
};

status = when(1).inspect()

/* promise.with(thisArg) */

promise = when(1).with(2);

promise = when(1).withThis(2);
