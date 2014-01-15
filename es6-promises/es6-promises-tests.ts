/// <reference path="promises.d.ts" />

var promiseString: Promise<string>,
 	promiseStringArr: Promise<string[]>,
	arrayOfPromise: Promise<string>[],
	promiseNumber: Promise<number>,
	promiseAny: Promise<any>,
	thenable: Thenable<string>;

// constructor test
var constructResult = new Promise<string>((resolve, reject) => {
	resolve('a string');
});
promiseString = constructResult;


var constructResult1 = new Promise<string>((resolve:(promise: Thenable<string>) => void , reject) => {
	resolve(Promise.resolve('a string'));
});
promiseString = constructResult1;

//cast test
var castResult = Promise.cast('a string');
promiseString = castResult;
var castResult1 = Promise.cast(Promise.resolve('a string'));
promiseString = castResult1;

//resolve test
var resolveResult = Promise.resolve('a string');
promiseString = resolveResult;

var resolveResult1 = Promise.resolve(thenable);
promiseString = resolveResult1;

//reject test
var rejectResult = Promise.reject('there is an error');
promiseAny = rejectResult;

//all test
var allResult = Promise.all(arrayOfPromise);
promiseStringArr = allResult;

//race test
var raceResult = Promise.race(arrayOfPromise);
promiseString = raceResult;


//then test
var thenWithPromiseResult = promiseString.then(word => Promise.resolve(word.length));
promiseNumber = thenWithPromiseResult;

var thenWithPromiseResultAndVoidReject = promiseString.then(word => Promise.resolve(word.length), error => console.log(error));
promiseNumber = thenWithPromiseResultAndVoidReject;

var thenWithPromiseResultAndPromiseReject = promiseString.then(word => Promise.resolve(word.length), error => Promise.resolve(10));
promiseNumber = thenWithPromiseResultAndPromiseReject;	

var thenWithPromiseResultAndSimpleReject = promiseString.then(word => Promise.resolve(word.length), error => 10);
promiseNumber = thenWithPromiseResultAndSimpleReject;	
	
var thenWithSimpleResult = promiseString.then(word => word.length);
promiseNumber = thenWithSimpleResult;

var thenWithSimpleResultAndVoidReject = promiseString.then(word => word.length, error => console.log(error));
promiseNumber = thenWithSimpleResultAndVoidReject;

var thenWithSimpleResultAndPromiseReject = promiseString.then(word => word.length, error => Promise.resolve(10));
promiseNumber = thenWithSimpleResultAndPromiseReject;	

var thenWithSimpleResultAndSimpleReject = promiseString.then(word => word.length, error => 10);
promiseNumber = thenWithSimpleResultAndSimpleReject;	

//catch test
var catchWithSimpleResult = promiseString.catch(error => 10);	
promiseNumber = catchWithSimpleResult;

var catchWithPromiseResult = promiseString.catch(error => Promise.resolve(10));	
promiseNumber = catchWithPromiseResult;
