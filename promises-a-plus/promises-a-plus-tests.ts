/// <reference types="rx"/>
/// <reference types="q"/>
/// <reference types="when"/>

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
	// define ES6 thenables
	var es6ThenNum: PromiseLike<number>;
	var es6ThenStr: PromiseLike<string>;

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
