/// <reference path="highland.d.ts" />

// Note: try to maintain the ordering and separators

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

var _: HighlandStatic;

var obj: Object;
var err: Error;
var bool: boolean;
var num: number;
var str: string;
var x: any;
var f: Function;
var fn: Function;
var func: Function;
var arr: any[];
var exp: RegExp;
var anyArr: any[];
var strArr: string[];
var numArr: string[];
var funcArr: Function[];

var readable: NodeJS.ReadableStream;
var writable: NodeJS.WritableStream;
var emitter: NodeJS.EventEmitter;

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

var fooStreamStream: Highland.Stream<Highland.Stream<Foo>>;
var barStreamStream: Highland.Stream<Highland.Stream<Bar>>;

var fooArrStream: Highland.Stream<Foo[]>;
var barArrStream: Highland.Stream<Bar[]>;

var fooStreamArr: Highland.Stream<Foo>[];
var barStreamArr: Highland.Stream<Bar>[];

var strFooArrMapStream: Highland.Stream<StrFooArrMap>;
var strBarArrMapStream: Highland.Stream<StrBarArrMap>;

var fooThen: Highland.Thenable<Foo>;
var barThen: Highland.Thenable<Bar>;

var fooArrThen: Highland.Thenable<Foo[]>;
var barArrThen: Highland.Thenable<Bar[]>;

var fooThenArr: Highland.Thenable<Foo>[];
var barThenArr: Highland.Thenable<Bar>[];

var fooStreamThen: Highland.Thenable<Highland.Stream<Foo>>;
var barStreamThen: Highland.Thenable<Highland.Stream<Bar>>;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// curries
var objCurStr: (obj: Object) => string;
var objCurObj: (obj: Object) => Object;
var objCurAny: (obj: Object) => any;
var numCurNum: (num: number) => number;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

var steamError: Highland.StreamError;
var streamRedirect: Highland.StreamRedirect<Foo>;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

steamError = new Highland.StreamError(err);
err = steamError.error;

streamRedirect = new Highland.StreamRedirect(fooStream);
fooStream = streamRedirect.to;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// top-level module

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooStream = _<Foo>();
fooStream = _(fooArr);
fooStream = _<Foo>((push, next) => {
	push(null, foo);
	push(err);
	next();
});

fooStream = _(fooStream);
fooStream = _<Foo>(readable);
fooStream = _<Foo>(emitter);

fooStream = _(fooStreamThen);
fooStream = _(fooArrThen);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

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

bool = _.isStream(x);
bool = _.isStream(fooStream);

bool = _.isStreamError(x);
bool = _.isStreamError(fooStream);

bool = _.isStreamRedirect(x);
bool = _.isStreamRedirect(fooStream);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

anyStream = _.values(obj);
fooStream = _.values(fooArr);

strStream = _.keys(obj);

anyArrStream = _.pairs(obj);
anyArrStream = _.pairs(fooArr);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

obj = _.extend(obj, obj);

objCurObj = _.extend(obj);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

x = _.get(str, obj);

objCurObj = _.get(str);

obj = _.set(str, foo, obj);

objCurAny = _.set(str, foo);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

_.log(str);
_.log(str, num, foo);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

f = _.wrapCallback(func);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

num = _.add(num, num);

numCurNum = _.add(num);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// instance methods

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooStream.pause();
fooStream.resume();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooStream.end();

fooStream = fooStream.pipe(fooStream);
barStream = fooStream.pipe(barStream);

fooStream.destroy();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

barStream = fooStream.consume((err: Error, x: Foo, push: (err: Error, value?: Bar) => void, next: () => void) => {
	push(err);
	push(null, bar);
	next();
});

barStream = fooStream.consume<Bar>((err, x, push, next) => {
	push(err);
	push(null, bar);
	next();
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooStream.pull((err: Error, x: Foo) => {

});

fooStream.pull((err, x) => {

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

fooStream = fooStream.errors((err, push) => {
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

fooStream = fooStream.reject((x: Foo) => {
	return bool;
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

fooStream = fooStream.head();
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

fooStream = fooStream.merge(fooStreamStream);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

barStream = fooStream.invoke<Bar>(str, anyArr);

fooStream = fooStream.throttle(num);

fooStream = fooStream.debounce(num);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooStream = fooStream.latest();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
