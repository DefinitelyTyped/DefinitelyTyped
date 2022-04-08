declare var assert: {
  equal<T>(a: T, b: T): void;
  ok(cond: boolean): void;
};
declare var console: { log(x: any): void };
declare function setTimeout(action: () => void, timeout: number): void;

import Promise = require('mpromise');

function ex1() {
  var promise = new Promise;
}

function ex2() {
  var promise = new Promise<number, string> (function(reason: string, ...args: number[]) {
    return;
  });
}

function ex3() {
  var promise = new Promise<number, string>();
  promise.onResolve(function(reason: string, ...args: number[]) {
    return;
  });
}

function fulfill() {
  var promise = new Promise<number, Error>();
  promise.fulfill(1, 2, 3);
}

function reject() {
  var promise = new Promise<number, string>();
  promise.reject('reason');
}

function onFulfill1<R>() {
  var promise = new Promise<number, R>();
  promise.onFulfill(function (...args: number[]) {
    assert.equal(3, args[0] + args[1]);
  });
  promise.fulfill(1, 2);
}

function onFulfill2() {
  var promise = new Promise<string, Error>();
  promise.fulfill(" :D ");
  promise.onFulfill(function (arg: string) {
    console.log(arg); // logs " :D "
  });
}

function onReject1<F>() {
  var promise = new Promise<F, string>();
  promise.onReject(function (reason: string) {
    assert.equal('sad', reason);
  });
  promise.reject('sad');
}

function onReject2() {
  var promise = new Promise<string, string>();
  promise.reject(" :( ");
  promise.onReject(function (reason: string) {
    console.log(reason); // logs " :( "
  });
}

function onResolve1<R>() {
  var promise = new Promise<number, R>();
  promise.onResolve(function (err: R, ...args: number[]) {
    console.log(args[0] + args[1]); // logs 3
  });
  promise.fulfill(1, 2);
}

function onResolve2<F>() {
  // rejection
  var promise = new Promise<F, Error>();
  promise.onResolve(function (err: Error) {
    if (err) {
      console.log(err.message); // logs "failed"
    }
  });
  promise.reject(new Error('failed'));
}

function then() {
  var promise = new Promise<number, Error>();

  promise.then(function (arg: number) {
    return arg + 1;
  }).then(function (arg: number) {
    throw new Error(arg + ' is an error!');
  }).then(null, function (err: Error) {
    assert.ok(err instanceof Error);
    assert.equal('2 is an error', err.message);
  });
  promise.fulfill(1);
}

function end1() {
  var promise = new Promise<number, Error>();
  promise.then(function(){ throw new Error('shucks') });
  setTimeout(function () {
    promise.fulfill();
    // error was caught and swallowed by the promise returned from
    // p.then(). we either have to always register handlers on
    // the returned promises or we can do the following...
  }, 10);
}

function end2() {
  // this time we use .end() which prevents catching thrown errors
  var promise = new Promise<any, Error>();
  setTimeout(function () {
    promise.fulfill(); // throws "shucks"
  }, 10);
  return promise.then(function(){ throw new Error('shucks') }).end(); // <--
}

function chain() {
  function makeMeAPromise(i: number) {
    var p = new Promise<number, Error>();
    p.fulfill(i);
    return p;
  }

  var initialPromise = new Promise<number, Error>();
  var returnPromise = initialPromise;
  for (var i=0; i<10; ++i) {
    returnPromise = returnPromise.chain(makeMeAPromise(i));
  }

  initialPromise.fulfill();
  return returnPromise;
}
