/// <reference path="promises-a-plus.d.ts"/>
/// <reference path="../rx.js/rx.async.d.ts"/>
/// <reference path="../es6-promises/es6-promises.d.ts"/>
/// <reference path="../q/Q.d.ts"/>
import When = require("../when/when");


var thenNum: PromisesAPlus.Thenable<number>; 
var thenStr: PromisesAPlus.Thenable<string>; 
var thenBool: PromisesAPlus.Thenable<boolean>; 

var impl: PromisesAPlus.PromiseImpl;

declare class PromiseImpl<R> {
	constructor(resolver: (resolvePromise: (value: R) => void, rejectPromise: (reason: any) => void) => void);

	then<U>(onFulfill: (value: R) => PromiseImpl<U>, onReject: (error: any) => PromiseImpl<U>): PromiseImpl<U>;
	then<U>(onFulfill: (value: R) => PromiseImpl<U>, onReject?: (error: any) => U): PromiseImpl<U>;
	then<U>(onFulfill: (value: R) => U, onReject: (error: any) => PromiseImpl<U>): PromiseImpl<U>;
	then<U>(onFulfill?: (value: R) => U, onReject?: (error: any) => U): PromiseImpl<U>;
}

function testCompatibleWithPromiseImpl() {
	var pNum: PromiseImpl<number> = thenNum;

	thenNum = pNum;

	impl = PromiseImpl;
}

function testCompatibleWithRxJS() {
	// from spec to Rx
	var rxThenNum: Rx.IPromise<number> = thenNum;
	var rxThenStr: Rx.IPromise<string> = thenStr;

	// from Rx to spec
	thenNum = rxThenNum;
	thenStr = rxThenStr;

	var obsNum: Rx.Observable<number>;

	// implementation usage
	thenNum = obsNum.toPromise<PromisesAPlus.Thenable<number>>(impl);
	thenNum = obsNum.toPromise(impl);
	obsNum.toPromise(PromiseImpl);
}

function testCompatibleWithES6Promises() {
	// from spec to ES6
	var es6ThenNum: Thenable<number> = thenNum;
	var es6ThenStr: Thenable<string> = thenStr;

	// from ES6 to spec
	thenNum = es6ThenNum;
	thenStr = es6ThenStr;

	// implementation
	impl = Promise;
}

function testCompatibleWithQ() {
	// from spec to ES6
	var qThenNum: Q.IPromise<number> = thenNum;
	var qThenStr: Q.IPromise<string> = thenStr;

	// from ES6 to spec
	thenNum = qThenNum;
	thenStr = qThenStr;

	// there's no standart implementation with constructor behaviour
}

function testCompatibleWithWhen() {
	var whenPromiseNum: When.Promise<number>;
	var whenPromiseStr: When.Promise<string>;

	// from ES6 to spec
	thenNum = whenPromiseNum;
	thenStr = whenPromiseStr;

	// there's no standart implementation with constructor behaviour
}
