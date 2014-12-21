/// <reference path="../node/node.d.ts" />
/// <reference path="when.d.ts" />

import fs = require('fs');
import dns = require('dns');

import when = require("when");

class ForeignPromise<T> {
	constructor(private value: T) {
	}

	then<U>(onFulfilled: (value: T) => U, onRejected?: (reason: any) => U) { return new ForeignPromise<U>(onFulfilled(this.value)); }
};

var promise: when.Promise<number>;
var foreign = new ForeignPromise<number>(1);
var error = new Error("boom!");
var example: () => void;

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

/* * * * * * * * *
 *   when/node   *
 * * * * * * * * */

import nodefn = require('when/node');

/* node.lift */

// TODO: Again it's not possible to represent the return type of node.lift without union types.

var nodeFn0 = (callback: (err: any, result: number) => void) => callback(null, 0);
var nodeFn1 = (a: number, callback: (err: any, result: number) => void) => callback(null, a);
var nodeFn2 = (a: number, b: number, callback: (err: any, result: number) => void) => callback(null, a + b);
var nodeFn3 = (a: number, b: number, c: number, callback: (err: any, result: number) => void) => callback(null, a + b + c);

var promiseFunc0: () => when.Promise<number> = nodefn.lift(nodeFn0);
var promiseFunc1: (a: when.Promise<number>) => when.Promise<number> = nodefn.lift(nodeFn1);
var promiseFunc2: (a: when.Promise<number>, b: when.Promise<number>) => when.Promise<number> = nodefn.lift(nodeFn2);
var promiseFunc3: (a: when.Promise<number>, b: when.Promise<number>, c: when.Promise<number>) => when.Promise<number> = nodefn.lift(nodeFn3);

example = function() {
	var resolveAddress = nodefn.lift(dns.resolve);

	when.join(
		resolveAddress(when('twitter.com')),
		resolveAddress(when('facebook.com')),
		resolveAddress(when('google.com'))
	).then((addresses) => {
		// All addresses resolved
	}).catch((reason) => {
		// At least one of the lookups failed
	});
}

/* node.liftAll */

// Cannot be represented?

example = function() {
	// Lift the entire dns API
	var promisedDns = nodefn.liftAll(dns);

	when.join(
		promisedDns.resolve("twitter.com"),
		promisedDns.resolveNs("facebook.com"),
		promisedDns.resolveMx("google.com")
	).then((addresses) => {
		// All addresses resolved
	}).catch((reason) => {
		// At least one of the lookups failed
	});
}

example = function() {
	// Lift all of the fs methods, but name them with an 'Async' suffix
	var promisedFs = nodefn.liftAll(fs, (promisedFs: any, liftedFunc: Function, name: string) => {
		promisedFs[name + 'Async'] = liftedFunc;
		return promisedFs;
	});

	promisedFs.readFileAsync('file.txt').done(console.log.bind(console));
}

example = function() {
	// Lift all of the fs methods, but name them with an 'Async' suffix
	// and add them back onto fs!
	var promisedFs = nodefn.liftAll(fs, (promisedFs: any, liftedFunc: Function, name: string) => {
		promisedFs[name + 'Async'] = liftedFunc;
		return promisedFs;
	}, fs);

	if (promisedFs === fs) {
		promisedFs.readFileAsync('file.txt').done(console.log.bind(console));
	}
}

/* node.call */

promise = nodefn.call(nodeFn0);

promise = nodefn.call(nodeFn1, 1);
promise = nodefn.call(nodeFn1, when(1));

promise = nodefn.call(nodeFn2, 1, 2);
promise = nodefn.call(nodeFn2, 1, when(2));
promise = nodefn.call(nodeFn2, when(1), 2);
promise = nodefn.call(nodeFn2, when(1), when(2));

promise = nodefn.call(nodeFn3, 1, 2, 3);
promise = nodefn.call(nodeFn3, 1, when(2), 3);
promise = nodefn.call(nodeFn3, when(1), 2, 3);
promise = nodefn.call(nodeFn3, when(1), when(2), 3);
promise = nodefn.call(nodeFn3, 1, 2, when(3));
promise = nodefn.call(nodeFn3, 1, when(2), when(3));
promise = nodefn.call(nodeFn3, when(1), 2, when(3));
promise = nodefn.call(nodeFn3, when(1), when(2), when(3));

example = function () {
	var loadPasswd = nodefn.call(fs.readFile, '/etc/passwd');

	loadPasswd.done(
		(passwd: Buffer) => console.log('Contents of /etc/passwd:\n' + passwd),
		(error: any) => console.log('Something wrong happened: ' + error));
};

/* node.apply */

promise = nodefn.apply(nodeFn2, [1, 2]);

example = function () {
	var loadPasswd = nodefn.apply(fs.readFile, ['/etc/passwd']);

	loadPasswd.done(
		(passwd: Buffer) => console.log('Contents of /etc/passwd:\n' + passwd),
		(error: any) => console.log('Something wrong happened: ' + error));
};

/* node.liftCallback */

example = function () {
	var fetchData: (key: string) => when.Promise<number>;
	var handleData: (err: any, result: number) => void;

	var handlePromisedData: (result: when.Promise<number>) => when.Promise<number>;
	handlePromisedData = nodefn.liftCallback(handleData);

	handlePromisedData(fetchData('thing'));
};

/* node.bindCallback */

example = function () {
	var fetchData: (key: string) => when.Promise<number>;
	var handleData: (err: any, result: number) => void;

	nodefn.bindCallback(fetchData('thing'), handleData);
};

/* node.createCallback */

example = function () {
	when.promise((resolve, reject) =>
			nodeFn2(1, 2, nodefn.createCallback({ resolve: resolve, reject: reject })))
		.then(
			(value: number) => console.log(value),
			(err: any) => console.error(err));
};
