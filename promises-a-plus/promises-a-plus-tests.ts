/// <reference path="promises-a-plus.d.ts"/>
/// <reference path="../rx.js/rx.async.d.ts"/>

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

	thenNum = obsNum.toPromise<PromisesAPlus.Thenable<number>>(impl);
	thenNum = obsNum.toPromise(impl);
	obsNum.toPromise(PromiseImpl);
}
