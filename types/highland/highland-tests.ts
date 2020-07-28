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
var readwritable: NodeJS.ReadWriteStream;
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
interface Baz {
    foo(): string;
    bar: number;
    baz: boolean;
}

interface StrFooArrMap {
    [key: string]: Foo[];
}

interface StrBarArrMap {
    [key: string]: Bar[];
}

declare class MyPromise<T> implements PromiseLike<T> {
    constructor(executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (err: any) => void) => void);
    then<TResult1 = T, TResult2 = never>(onfulfilled?: (value: T) => TResult1 | PromiseLike<TResult1>, onrejected?: (reason: any) => TResult2 | PromiseLike<TResult2>): PromiseLike<TResult1 | TResult2>;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

var foo: Foo;
var bar: Bar;

var fooArr: Foo[];
var barArr: Bar[];

var fooStream: Highland.Stream<Foo>;
var barStream: Highland.Stream<Bar>;
var bazStream: Highland.Stream<Baz>;
var voidStream: Highland.Stream<void>;

var fooStreamStream: Highland.Stream<Highland.Stream<Foo>>;
var barStreamStream: Highland.Stream<Highland.Stream<Bar>>;
var barStreamArrStream: Highland.Stream<Highland.Stream<Bar>[]>;

var fooArrStream: Highland.Stream<Foo[]>;
var barArrStream: Highland.Stream<Bar[]>;

var fooStreamArr: Highland.Stream<Foo>[];
var barStreamArr: Highland.Stream<Bar>[];

var strFooArrMapStream: Highland.Stream<StrFooArrMap>;
var strBarArrMapStream: Highland.Stream<StrBarArrMap>;

var fooThen: PromiseLike<Foo>;
var barThen: PromiseLike<Bar>;

var fooArrThen: PromiseLike<Foo[]>;
var barArrThen: PromiseLike<Bar[]>;

var fooThenArr: PromiseLike<Foo>[];
var barThenArr: PromiseLike<Bar>[];

var fooStreamThen: PromiseLike<Highland.Stream<Foo>>;
var barStreamThen: PromiseLike<Highland.Stream<Bar>>;

var fooIterable: Iterable<Foo>;
var fooIterator: Iterator<Foo>;

var isBaz: (obj: Foo) => obj is Baz;

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
fooStream = _<Foo>(readable, (r, cb) => {
        return;
});
fooStream = _<Foo>(readable, (r, cb) => {
        return () => { return; }
});
fooStream = _<Foo>(readable, (r, cb) => {
        return { continueOnError: true };
});
fooStream = _<Foo>(readable, (r, cb) => {
        return { onDestroy: () => { return; } };
});
fooStream = _<Foo>(str, emitter);
fooStream = _<Foo>(str, emitter, num);
fooStream = _<Foo>(str, emitter, strArr);
fooStream = _<Foo>(str, emitter, f);

fooStream = _(fooStreamThen);
fooStream = _(fooThen);

fooArrStream = _(fooArrThen);

fooStream = _(fooIterable);
fooStream = _(fooIterator);

// $ExpectType Stream<Stream<Foo>>
_([fooStream]);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// STREAM OBJECTS
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooStream.destroy();

fooStream.end();

fooStream.pause();

fooStream.resume();

bool = fooStream.write(foo);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// TRANSFORMS
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooStream = fooStream.append(foo);

fooArrStream = fooStream.batch(2);

fooArrStream = fooStream.batchWithTimeOrCount(10, 2);

fooArrStream = fooStream.collect();

fooStream = fooStream.compact();

barStream = fooStream.consume(
    (
        err: Error,
        x: Foo | Highland.Nil,
        push: (err: Error, value?: Bar | Highland.Nil) => void,
        next: () => void
    ) => {
        push(err);
        push(null, bar);
        next();
    }
);

barStream = fooStream.consume<Bar>((err, x, push, next) => {
    push(err);
    push(null, bar);
    next();
});

fooStream = fooStream.debounce(num);

fooStream = fooStream.doto((x: Foo) => {});

fooStream = fooStream.drop(2);

fooStream = fooStream.errors(
    (err: Error, push: (e: Error, x?: Foo) => void) => {
        push(err);
        push(null, x);
        push(null, foo);
    }
);

fooStream = fooStream.errors((err, push) => {
    push(err);
    push(null, x);
    push(null, foo);
});

fooStream = fooStream.filter((x: Foo) => {
    return bool;
});

// $ExpectType Stream<number>
numStream = numStream.filter((n: number) => n < 3);

// $ExpectType Stream<Baz>
fooStream.filter(isBaz);

fooStream = fooStream.find((x: Foo) => {
    return bool;
});

fooStream = fooStream.findWhere(obj);

strFooArrMapStream = fooStream.group((x: Foo) => {
    return str;
});
strFooArrMapStream = fooStream.group(str);

fooStream = fooStream.head();

// $ExpectType Stream<Foo>
fooStream = fooStream.intersperse(foo);

// $ExpectType Stream<Foo | Bar>
fooStream.intersperse(bar)

barStream = fooStream.invoke<Bar>(str, anyArr);

fooStream = fooStream.last();

fooStream = fooStream.latest();

barStream = fooStream.map((x: Foo) => {
    return bar;
});

// $ExpectType Stream<Pick<Baz, "foo" | "bar">>
bazStream.pick(['foo', 'bar']);

// $ExpectType Stream<Partial<Foo>>
fooStream.pickBy((key, value) => key === 'foo');

// $ExpectType Stream<() => string>
fooStream.pluck('foo');
barStream = fooStream.pluck<Bar>(str);

fooStream = fooStream.ratelimit(3, 1000);

// $ExpectType Stream<Foo>
fooStream = fooStream.reduce1((memo: Foo, x: Foo) => {
    return memo;
});

// $ExpectType Stream<Bar>
barStream = fooStream.reduce1((memo: Foo | Bar, x: Foo) => {
    return bar;
});

fooStream = fooStream.reject((x: Foo) => {
    return bool;
});

barStream = fooStream.scan(bar, (memo: Bar, x: Foo) => {
    return memo;
});

// $ExpectType Stream<Foo>
fooStream = fooStream.scan1((memo: Foo, x: Foo) => {
    return memo;
});

// $ExpectType Stream<Bar>
barStream = fooStream.scan1((memo: Foo | Bar, x: Foo) => {
    return bar;
});

// $ExpectType Stream<Foo>
fooStream = fooStream.slice(10, 100);

// $ExpectType Stream<Foo>
fooStream = fooStream.sort();

// $ExpectType Stream<Foo>
fooStream = fooStream.sortBy((a: Foo, b: Foo) => 1);

// $ExpectError
fooStream.split();

// $ExpectType Stream<string>
_(['']).split();

// $ExpectError
fooStream.splitBy(",")

// $ExpectType Stream<string>
_(['']).splitBy(',')

// $ExpectType Stream<string>
_(['']).splitBy(/,/)

fooStream = fooStream.stopOnError((e: Error) => {});

fooStream = fooStream.take(num);

fooStream.tap((x: Foo) => {});

fooStream = fooStream.throttle(num);

fooStream = fooStream.where(obj);

bazStream = bazStream.where({baz: true});

fooStream = fooStream.uniq();

fooStream = fooStream.uniqBy((a: Foo, b: Foo) => true);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// HIGHER-ORDER STREAMS
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooStream = fooStream.concat(fooStream);

fooStream = fooStream.concat(fooArr);

fooStream = fooStream.flatFilter((x: Foo) => {
    return boolStream;
});

barStream = fooStream.flatMap((x: Foo) => {
    return barStream;
});

barStream = fooStream.flatMap((x: Foo) => {
    return bar;
});

barStream = barArrStream.flatten<Bar>();
barStream = barArrStream.flatten();
barStream = barStreamStream.flatten();
barStream = barStreamArrStream.flatten();

// $ExpectError
barArrStream.flatten<Foo>();

fooStream = fooStream.fork();

fooStream = fooStreamStream.merge();

// $ExpectError
fooStream.merge();

fooStream = fooStreamStream.mergeWithLimit(1);

// $ExpectError
fooStream.mergeWithLimit(1);

fooStream = fooStream.observe();

fooStream = fooStream.otherwise(fooStream);

fooStream = fooStreamStream.parallel(num);

barStream = barStreamStream.sequence();

barStream = barStreamStream.series<Bar>();

// $ExpectError
fooStream.sequence();
// $ExpectError
barStream.series();
// $ExpectError
fooStreamStream.sequence<Bar>();

bar = fooStream.through((x: Highland.Stream<Foo>) => bar);
barStream = fooStream.through(readwritable);

// $ExpectError
fooStream.through((x: Highland.Stream<Bar>) => bar);

// $ExpectType Stream<[Foo, Foo]>
fooStream.zip(fooStream);

// $ExpectType Stream<[Foo, Bar]>
fooStream.zip(barStream);

fooArrStream = fooStream.zipAll([[foo, foo], [foo, foo]]);
fooArrStream = fooStream.zipAll(_([[foo, foo], [foo, foo]]));

// $ExpectType Stream<(Foo | Bar)[]>
fooStream.zipAll(barStreamStream);

// $ExpectType Stream<Foo[]>
fooStreamStream.zipAll0();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// CONSUMPTION
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooStream.apply(func);

fooStream.done(() => {});

fooStream.each((x: Foo) => {});

fooStream = fooStream.pipe(fooStream);
barStream = fooStream.pipe(barStream);

// $ExpectType Stream<Foo>
fooStream.pipe(_<Foo>());
// $ExpectType ReadWriteStream
fooStream.pipe(readwritable);
// $ExpectType WritableStream
fooStream.pipe(writable, { end: false });

fooStream.pull((err: Error, x: Foo) => {});

fooStream.pull((err, x) => {});

fooStream.toArray((arr: Foo[]) => {});

fooStream.toCallback((err: Error, x: Foo) => {});
fooStream.toCallback((err: Error) => {});

fooStream.toNodeStream();
fooStream.toNodeStream({objectMode: false});
fooStream.toNodeStream({objectMode: true});

fooStream.toPromise(Promise).then((foo: Foo) => {})

// Type inference for the generic parameter only seems to work with TS 3.5 or above.
// Rather than bump the required version, I'm not testing type inference here.

// Test that the generic parameter is optional:
fooStream.toPromise(MyPromise);

// $ExpectType Promise<Foo>
fooStream.toPromise<Promise<Foo>>(Promise);
// $ExpectType MyPromise<Foo>
fooStream.toPromise<MyPromise<Foo>>(MyPromise);
// $ExpectError
fooStream.toPromise<Promise<Foo>>(MyPromise);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// UTILS
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

bool = _.isNil(x);

bool = _.isStream(x);
bool = _.isStream(fooStream);

bool = _.isStreamError(x);
bool = _.isStreamError(fooStream);

bool = _.isStreamRedirect(x);
bool = _.isStreamRedirect(fooStream);

_.log(str);
_.log(str, num, foo);

obj = _.nil;

f = _.wrapCallback(func);
f = _.wrapCallback(func, num);
f = _.wrapCallback(func, strArr);
f = _.wrapCallback(func, fn);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// OBJECTS
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

obj = _.extend(obj, obj);
objCurObj = _.extend(obj);

x = _.get(str, obj);
objCurObj = _.get(str);

strStream = _.keys(obj);

anyArrStream = _.pairs(obj);
anyArrStream = _.pairs(fooArr);

obj = _.set(str, foo, obj);
objCurAny = _.set(str, foo);

anyStream = _.values(obj);
fooStream = _.values(fooArr);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// FUNCTIONS
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

f = _.compose(f);
f = _.compose(f, f);

f = _.curry(fn, foo);
f = _.curry(fn, foo, bar);

f = _.flip(fn, foo);
f = _.flip(fn, foo, bar);

f = _.ncurry(num, fn, foo);
f = _.ncurry(num, fn, foo, bar);

f = _.partial(f, foo);
f = _.partial(f, foo, bar);

f = _.seq(f);
f = _.seq(f, f);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// OPERATORS
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
num = _.add(num, num);

numCurNum = _.add(num);

//missing not
