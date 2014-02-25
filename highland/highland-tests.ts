/// <reference path="highland.d.ts" />

// Note: try to maintain the ordering and separators

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

import _ = require('highland');

var obj: Object;
var err: Error;
var bool: boolean;
var num;
var str: string;
var x: any;
var f: Function;
var fn;
var func: Function;
var arr: any[];
var exp: RegExp;
var anyArr: any[];
var strArr: string[];
var numArr: string[];
var funcArr: Function[];

// - - - - - - - - - - - - - - - - -

var value: any;
var reason: any;
var insanity: any;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

var numStream: Highland.Stream<number>;
var strStream: Highland.Stream<string>;
var anyStream: Highland.Stream<any>;
var boolStream: Highland.Stream<boolean>;
var objStream: Highland.Stream<Object>;
var voidStream: Highland.Stream<void>;

// - - - - - - - - - - - - - - - - -

var anyArrStream: Highland.Stream<any[]>;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

interface Foo {
	foo(): string;
}
interface Bar {
	bar(): string;
}

interface StrFooArrMap {
	[key:string]: Foo[];
}

interface StrBarArrMap {
	[key:string]: Bar[];
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

var foo: Foo;
var bar: Bar;

var fooArr: Foo[];
var barArr: Bar[];

var fooStream: Highland.Stream<Foo>;
var barStream: Highland.Stream<Bar>;

var fooArrStream: Highland.Stream<Foo[]>;
var barArrStream: Highland.Stream<Bar[]>;

var fooStreamArr: Highland.Stream<Foo>[];
var barStreamArr: Highland.Stream<Bar>[];

var fooStreamArr: Highland.Stream<Foo>[];
var barStreamArr: Highland.Stream<Bar>[];

var strFooArrMapStream: Highland.Stream<StrFooArrMap>;
var strBarArrMapStream: Highland.Stream<StrBarArrMap>;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// curries
var objCurStr: (obj: Object) => string;
var objCurObj: (obj: Object) => Object;
var objCurAny: (obj: Object) => any;
var numCurNum: (num) => number;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

var steamError: Highland.StreamError;
var streamRedirect: Highland.StreamRedirect<Foo>;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/*
 interface Highland {

 (xs: R[]): Highland.Stream<number>;
 (xs: (push: (err:Error, x?:R) => void, next:() => void) => void): Highland.Stream<number>;
 (xs: Highland.Stream<number>): Highland.Stream<number>;

 <R>(xs: ReadableStream): Highland.Stream<number>;
 <R>(xs: NodeEventEmitter): Highland.Stream<number>;

 (xs: Thenable<R[]>): Highland.Stream<number>;
 (xs: Thenable<Highland.Stream<number>>): Highland.Stream<number>;

 <R>(): Highland.Stream<number>;
 }

 fooStream = _([1, 2, 3]);
 */

obj = _.nil;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

f = _.curry(fn, foo);
f = _.curry(fn, foo, bar);

f = _.ncurry(num, fn, foo);
f = _.ncurry(num, fn, foo, bar);

f = _.partial(f, foo);
f = _.partial(f, foo, bar);

f = _.flip(fn, foo);
f = _.flip(fn, foo, bar);

f = _.compose(f);
f = _.compose(f, f);

f = _.seq(f);
f = _.seq(f, f);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

steamError = new Highland.StreamError(err);
err = steamError.error;

streamRedirect = new Highland.StreamRedirect(fooStream);
fooStream = streamRedirect.to;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

bool = _.isStream(x);
bool = _.isStream(fooStream);

bool = _.isStreamError(x);
bool = _.isStreamError(fooStream);

bool = _.isStreamRedirect(x);
bool = _.isStreamRedirect(fooStream);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooStream.pause();
fooStream.resume();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooStream.end();

fooStream = fooStream.pipe(fooStream);

fooStream.destroy();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

barStream = fooStream.consume((err: Error, x: Foo, push: (err: Error, value?: Bar) => void, next: () => void) => {
	push(err);
	push(null, bar);
	next();
});

fooStream.pull((err: Error, x: Foo) => {

});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

bool = fooStream.write(foo);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooStream = fooStream.fork();

fooStream = fooStream.observe();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooStream = fooStream.errors((err: Error, push: (e: Error, x?: Foo) => void) => {
	push(err);
	push(null, x);
	push(null, foo);
});

fooStream = fooStream.stopOnError((e: Error) => {

});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooStream.each((x: Foo) => {

});

fooStream.apply(func);

fooStream.toArray((arr: Foo[]) => {

});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

barStream = fooStream.map((x: Foo) => {
	return bar;
});

barStream = fooStream.flatMap((x: Foo) => {
	return barStream;
});

barStream = fooStream.flatMap((x: Foo) => {
	return bar;
});

barStream = fooStream.pluck<Bar>(str);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooStream = fooStream.filter((x: Foo) => {
	return bool;
});

fooStream = fooStream.flatFilter((x: Foo) => {
	return boolStream;
});

fooStream = fooStream.find((x: Foo) => {
	return bool;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

strFooArrMapStream = fooStream.group((x: Foo) => {
	return str;
});
strFooArrMapStream = fooStream.group(str);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooStream = fooStream.compact();

fooStream = fooStream.where(obj);

fooStream = fooStream.zip(fooStream);
fooStream = fooStream.zip([foo, foo]);

fooStream = fooStream.take(num);

fooStream = fooStream.last();

barStream = fooStream.sequence<Bar>();

barStream = fooStream.series<Bar>();

barStream = fooStream.flatten<Bar>();

fooStream = fooStream.parallel(num);

fooStream = fooStream.otherwise(fooStream);

fooStream = fooStream.append(foo);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

barStream = fooStream.reduce(bar, (memo: Bar, x: Foo) => {
	return memo;
});

barStream = fooStream.reduce1(bar, (memo: Bar, x: Foo) => {
	return memo;
});

fooArrStream = fooStream.collect();

barStream = fooStream.scan(bar, (memo: Bar, x: Foo) => {
	return memo;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooStream = fooStream.concat(fooStream);

fooStream = fooStream.concat(fooArr);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

barStream = fooStream.invoke<Bar>(str, anyArr);

fooStream = fooStream.throttle(num);

fooStream = fooStream.debounce(num);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooStream = fooStream.latest();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

anyStream = _.values(obj);
fooStream = _.values(fooArr);

strStream = _.keys(obj);

anyArrStream = _.pairs(obj);
anyArrStream = _.pairs(fooArr);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

obj = _.extend(obj, obj);

objCurObj = _.extend(obj);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

x = _.get(str, obj);

objCurObj = _.get(str);

obj = _.set(str, foo, obj);

objCurAny = _.set(str, foo);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

_.log(str);
_.log(str, num, foo);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

f = _.wrapCallback(func);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

num = _.add(num, num);

numCurNum = _.add(num);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
