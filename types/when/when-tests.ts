/// <reference types="node" />


import fs = require('fs');
import dns = require('dns');

import when = require("when");

class ForeignPromise<T> {
	constructor(private readonly value: T) {
	}

	then<U>(onFulfilled?: (value: T) => U, onRejected?: (reason: any) => U): ForeignPromise<U>
	then(onFulfilled?: (value: T) => T, onRejected?: (reason: any) => T): ForeignPromise<T> {
		return new ForeignPromise(onFulfilled ? onFulfilled(this.value) : this.value);
	}
}

interface IData {
	timestamp: number;
}

class Data implements IData {
	timestamp: number;
	date: Date;

	constructor({ timestamp }: IData) {
		this.timestamp = timestamp;
		this.date = new Date(timestamp);
	}
}

var promise: when.Promise<number>;
var promise2: when.Promise<Data>;
var emptyPromise: when.Promise<void>;
var foreign = new ForeignPromise<number>(1);
var promiseOrValue = 1 as number | when.Promise<number>;
var error = new Error("boom!");
var example: () => void;
var native: Promise<number>;

/* * * * * * *
 *   Core    *
 * * * * * * */

/* when() */

emptyPromise = when();

/* when(x) */

promise = when(1);
promise = when(when(1));
promise = when(foreign);
promise = when(promiseOrValue);

/* when(x, f) */

promise = when(1, val => val + val);
promise = when(when(1), val => val + val);
promise = when(foreign, val => val + val);
promise = when(promiseOrValue, val => val + val);

/* when.try(f, ...args) */

promise = when.attempt(() => 1);

promise = when.attempt((a: number) => a + a, 1);
promise = when.attempt((a: number) => a + a, when(1));

promise = when.attempt((a: number, b: string) => a, 1, '2');
promise = when.attempt((a: number, b: string) => a, 1, when('2'));
promise = when.attempt((a: number, b: string) => a, when(1), '2');
promise = when.attempt((a: number, b: string) => a, when(1), when('2'));

promise = when.attempt((a: number, b: string, c: boolean) => a, 1, '2', true);
promise = when.attempt((a: number, b: string, c: boolean) => a, 1, when('2'), true);
promise = when.attempt((a: number, b: string, c: boolean) => a, when(1), '2', true);
promise = when.attempt((a: number, b: string, c: boolean) => a, when(1), when('2'), true);
promise = when.attempt((a: number, b: string, c: boolean) => a, 1, '2', when(true));
promise = when.attempt((a: number, b: string, c: boolean) => a, 1, when('2'), when(true));
promise = when.attempt((a: number, b: string, c: boolean) => a, when(1), '2', when(true));
promise = when.attempt((a: number, b: string, c: boolean) => a, when(1), when('2'), when(true));

promise = when.attempt((a: number, b: string, c: boolean, d: number, e: string) => a, when(1), when('2'), when(true), when(4), when('5'));

/* when.lift(f) */

var liftedFunc0 = when.lift(() => 0);
var liftedFunc1 = when.lift((a: number) => a);
var liftedFunc2 = when.lift((a: number, b: string) => a);
var liftedFunc3 = when.lift((a: number, b: string, c: boolean) => a);

var liftedFunc5 = when.lift((a: number, b: string, c: boolean, d: number, e: string) => a);

promise = liftedFunc0();

promise = liftedFunc1(1);
promise = liftedFunc1(when(1));

promise = liftedFunc2(1, '2');
promise = liftedFunc2(when(1), '2');
promise = liftedFunc2(1, when('2'));
promise = liftedFunc2(when(1), when('2'));

promise = liftedFunc3(1, '2', true);
promise = liftedFunc3(when(1), '2', true);
promise = liftedFunc3(1, when('2'), true);
promise = liftedFunc3(when(1), when('2'), true);
promise = liftedFunc3(1, '2', when(true));
promise = liftedFunc3(when(1), '2', when(true));
promise = liftedFunc3(1, when('2'), when(true));
promise = liftedFunc3(when(1), when('2'), when(true));

promise = liftedFunc5(when(1), when('2'), when(true), when(4), when('5'));

/* when.join(...promises) */

var joinedPromise: when.Promise<number[]> = when.join(when(1), when(2), when(3));

/* when.all(arr) */
when.all<number[]>([when(1), when(2), when(3)]).then(results => {
	return results.reduce((r, x) => r + x, 0);
});

/* when.map(arr, fn) */
when.map<number[]>([when(1), 2, 3], (num: number, index: number) => num * index).then((results) => {
	return results.reduce((r, x) => r + x, 0);
});
when.map<number[]>([when(1), 2, 3], (num: number) => num * num).then((results) => {
	return results.reduce((r, x) => r + x, 0);
});

/* when.reduce(arr, reduceFunc, initialValue) */
when.reduce<number>([when(1), 2, 3], (reduction: number, value: number, index: number) => {
	return reduction += value * index;
}, 0).then((result: number) => {
	return result;
});
when.reduce<number>([when(1), 2, 3], (reduction: number, value: number) => {
	return reduction += value;
}, 0).then((result: number) => {
	return result;
});

/* when.reduceRight(arr, reduceFunc, initialValue) */
when.reduceRight<number>([when(1), 2, 3], (reduction: number, value: number, index: number) => {
	return when(value * index)
	.then((v) => reduction += v);
}, 0).then((result: number) => {
	return result;
});
when.reduceRight<number>([when(1), 2, 3], (reduction: number, value: number) => {
	return when(value)
	.then((v) => reduction += v);
}, 0).then((result: number) => {
	return result;
});

/* when.settle(arr) */
when.settle<number>([when(1), when(2), when.reject(new Error("Foo"))]).then(descriptors => {
	return descriptors.reduce((r, d) => {
		if (d.state === 'fulfilled') {
			return r + d.value;
		} else {
			console.error(d.reason);
			return r;
		}
	}, 0);
});
when.settle<number>([when(1), when(2), when.reject(new Error("Foo"))]).then(descriptors => {
	return descriptors.reduce((r, d) => {
		if (d.state === 'rejected') {
			console.error(d.reason);
			return r;
		} else {
			return r + d.value;
		}
	}, 0);
});

/* when.iterate(f, predicate, handler, seed) */

when.iterate(function (x) {
	return x + 1;
}, function (x) {
	// Stop when x >= 100000000000
	return x >= 100000000000;
}, function (x) {
	console.log(x);
}, 0).done(function (x) {
	console.log(x === 100000000000);
}, function (err) {
	console.log(err);
});

when.unfold(function (x) {
	return [{foo: 'bar'}, x + 1];
}, function (x) {
	return x < 10;
}, function (y) {
	delete y.foo;
}, 0);

/* when.promise(resolver) */

promise = when.promise<number>(resolve => resolve(5));
promise = when.promise<number>((resolve, reject) => reject(error));

/* when.resolve() */

emptyPromise = when.resolve();

/* when.resolve(x) */

promise = when.resolve(1);
promise = when.resolve(promise);
promise = when.resolve(foreign);
promise = when.resolve(promiseOrValue);

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

when(1).done();
when(1).done((val: number) => console.log(val));
when(1).done(undefined, (err: any) => console.log(err));
when(1).done((val: number) => console.log(val), (err: any) => console.log(err));

/* promise.then(onFulfilled) */

promise = when(1).then();
promise = when(1).then((val: number) => val + val);
promise = when(1).then((val: number) => when(val + val));

promise = when(1).then(undefined, (err: any) => 2);
promise = when(1).then((val: number) => val + val, (err: any) => 2);
promise = when(1).then((val: number) => when(val + val), (err: any) => 2);

promise = when('1').then((val: string) => parseInt(val));

// Tests for when TResult is a subtype of T
const subData: IData = { timestamp: Date.now() };
const errorData: Data = new Data({ timestamp: -1 });

promise2 = when(subData).then((val: IData) => new Data(val));
promise2 = when(subData).then((val: IData) => when(new Data(val)));
promise2 = when(subData).then((val: IData) => new Data(val), (err: any) => errorData);
promise2 = when(subData).then((val: IData) => when(new Data(val)), (err: any) => errorData);

/* promise.spread(onFulfilledArray) */

promise = when([]).spread(() => 2);
promise = when([1]).spread((a: number) => a);
promise = when([1, '2']).spread((a: number, b: string) => a);
promise = when([1, '2', true]).spread((a: number, b: string, c: boolean) => a);
promise = when([1, '2', true]).spread((a: number, b: string, c: boolean) => when(a));

/* promise.fold(combine, promise2) */

promise = when(1).fold((a: number, b: string) => a, '2');
promise = when(1).fold((a: number, b: string) => a, when('2'));

promise = when(1).fold((a: number, b: string) => when(a), '2');
promise = when(1).fold((a: number, b: string) => when(a), when('2'));

/* promise.catch(onRejected) */

promise = when(1).catch((err: any) => 2);
promise = when(1).catch((err: any) => when(2));

promise = when(1).catch((err: any) => err.good, (err: any) => 2);
promise = when(1).catch((err: any) => err.good, (err: any) => when(2));

promise = when(1).catch(Error, (err: any) => 2);
promise = when(1).catch(Error, (err: any) => when(2));

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

var status2: when.Snapshot<number>;

status2 = when(1).inspect();
if (status2.state === 'fulfilled') {
	console.log(status2.value + 2);
} else if (status2.state === 'rejected') {
	console.log(status2.reason);
} else {
	console.log(status2.state === 'pending');
}

/* promise.with(thisArg) */

promise = when(1).with(2);

promise = when(1).withThis(2);

/* * * * * * * * *
 *   when/node   *
 * * * * * * * * */

import nodefn = require('when/node');

/* node.lift */

var nodeFn0 = (callback: (err: any, result: number) => void) => callback(null, 0);
var nodeFn1 = (a: number, callback: (err: any, result: number) => void) => callback(null, a);
var nodeFn2 = (a: number, b: string, callback: (err: any, result: number) => void) => callback(null, a);
var nodeFn3 = (a: number, b: string, c: boolean, callback: (err: any, result: number) => void) => callback(null, a);

var nodeFn5 = (a: number, b: string, c: boolean, d: number, e: string, callback: (err: any, result: number) => void) => callback(null, a);

var liftedNodeFunc0 = nodefn.lift(nodeFn0);
var liftedNodeFunc1 = nodefn.lift(nodeFn1);
var liftedNodeFunc2 = nodefn.lift(nodeFn2);
var liftedNodeFunc3 = nodefn.lift(nodeFn3);

var liftedNodeFunc5 = nodefn.lift(nodeFn5);

promise = liftedNodeFunc0();

promise = liftedNodeFunc1(1);
promise = liftedNodeFunc1(when(1));

promise = liftedNodeFunc2(1, '2');
promise = liftedNodeFunc2(when(1), '2');
promise = liftedNodeFunc2(1, when('2'));
promise = liftedNodeFunc2(when(1), when('2'));

promise = liftedNodeFunc3(1, '2', true);
promise = liftedNodeFunc3(when(1), '2', true);
promise = liftedNodeFunc3(1, when('2'), true);
promise = liftedNodeFunc3(when(1), when('2'), true);
promise = liftedNodeFunc3(1, '2', when(true));
promise = liftedNodeFunc3(when(1), '2', when(true));
promise = liftedNodeFunc3(1, when('2'), when(true));
promise = liftedNodeFunc3(when(1), when('2'), when(true));

promise = liftedNodeFunc5(when(1), when('2'), when(true), when(4), when('5'));

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

promise = nodefn.call(nodeFn2, 1, '2');
promise = nodefn.call(nodeFn2, 1, when('2'));
promise = nodefn.call(nodeFn2, when(1), '2');
promise = nodefn.call(nodeFn2, when(1), when('2'));

promise = nodefn.call(nodeFn3, 1, '2', true);
promise = nodefn.call(nodeFn3, 1, when('2'), true);
promise = nodefn.call(nodeFn3, when(1), '2', true);
promise = nodefn.call(nodeFn3, when(1), when('2'), true);
promise = nodefn.call(nodeFn3, 1, '2', when(true));
promise = nodefn.call(nodeFn3, 1, when('2'), when(true));
promise = nodefn.call(nodeFn3, when(1), '2', when(true));
promise = nodefn.call(nodeFn3, when(1), when('2'), when(true));

promise = nodefn.call(nodeFn5, when(1), when('2'), when(true), when(4), when('5'));

example = function () {
	var loadPasswd = nodefn.call(fs.readFile, '/etc/passwd');

	loadPasswd.done(
		(passwd: Buffer) => console.log('Contents of /etc/passwd:\n' + passwd),
		(error: any) => console.log('Something wrong happened: ' + error));
};

/* node.apply */

promise = nodefn.apply(nodeFn2, [1, '2']);

example = function() {
	nodefn.apply(fs.read, arguments);
}

example = function () {
	var loadPasswd = nodefn.apply(fs.readFile, ['/etc/passwd']);

	loadPasswd.done(
		(passwd: Buffer) => console.log('Contents of /etc/passwd:\n' + passwd),
		(error: any) => console.log('Something wrong happened: ' + error));
};

/* node.liftCallback */

example = function () {
	var fetchData: (key: string) => when.Promise<number> = () => when(1);
	var handleData: (err: any, result: number) => void = () => undefined;

	var handlePromisedData: (result: when.Promise<number>) => when.Promise<number>;
	handlePromisedData = nodefn.liftCallback(handleData);

	handlePromisedData(fetchData('thing'));
};

/* node.bindCallback */

example = function () {
	var fetchData: (key: string) => when.Promise<number> = () => when(1);
	var handleData: (err: any, result: number) => void = () => undefined;

	nodefn.bindCallback(fetchData('thing'), handleData);
};

/* node.createCallback */

example = function () {
	when.promise<number>((resolve, reject) =>
			nodeFn2(1, '2', nodefn.createCallback({ resolve: resolve, reject: reject })))
		.then(
			(value: number) => console.log(value),
			(err: any) => console.error(err));
};

/* * * * * * * * * * *
 *  Native Promises  *
 * * * * * * * * * * */

native = Promise.resolve(when(1));
native = Promise.all([when(1)]).then(([x]) => x);
