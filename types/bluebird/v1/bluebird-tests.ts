

// Tests by: Bart van der Schoor <https://github.com/Bartvds>

// Note: replicate changes to all overloads in both definition and test file
// Note: keep both static and instance members inline (so similar)

// Note: try to maintain the ordering and separators, and keep to the pattern

var obj: Object;
var bool: boolean;
var num: number;
var str: string;
var err: Error;
var x: any;
var f: Function;
var func: Function;
var arr: any[];
var exp: RegExp;
var anyArr: any[];
var strArr: string[];
var numArr: number[];

// - - - - - - - - - - - - - - - - -

var value: any;
var reason: any;
var insanity: any;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

interface Foo {
    foo(): string;
}
interface Bar {
    bar(): string;
}

// - - - - - - - - - - - - - - - - -

interface StrFooMap {
    [key:string]:Foo;
}

interface StrBarMap {
    [key:string]:Bar;
}

// - - - - - - - - - - - - - - - - -

interface StrFooArrMap {
    [key:string]:Foo[];
}

interface StrBarArrMap {
    [key:string]:Bar[];
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

var foo: Foo;
var bar: Bar;

var fooArr: Foo[];
var barArr: Bar[];

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

var numProm: Promise<number>;
var strProm: Promise<string>;
var anyProm: Promise<any>;
var boolProm: Promise<boolean>;
var objProm: Promise<Object>;
var voidProm: Promise<void>;

var fooProm: Promise<Foo>;
var barProm: Promise<Bar>;

// - - - - - - - - - - - - - - - - -

var numThen: Promise.Thenable<number>;
var strThen: Promise.Thenable<string>;
var anyThen: Promise.Thenable<any>;
var boolThen: Promise.Thenable<boolean>;
var objThen: Promise.Thenable<Object>;
var voidThen: Promise.Thenable<void>;

var fooThen: Promise.Thenable<Foo>;
var barThen: Promise.Thenable<Bar>;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

var numArrProm: Promise<number[]>;
var strArrProm: Promise<string[]>;
var anyArrProm: Promise<any[]>;

var fooArrProm: Promise<Foo[]>;
var barArrProm: Promise<Bar[]>;

// - - - - - - - - - - - - - - - - -

var numArrThen: Promise.Thenable<number[]>;
var strArrThen: Promise.Thenable<string[]>;
var anyArrThen: Promise.Thenable<any[]>;

var fooArrThen: Promise.Thenable<Foo[]>;
var barArrThen: Promise.Thenable<Bar[]>;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

var numPromArr: Promise<number>[];
var strPromArr: Promise<string>[];
var anyPromArr: Promise<any>[];

var fooPromArr: Promise<Foo>[];
var barPromArr: Promise<Bar>[];

// - - - - - - - - - - - - - - - - -

var numThenArr: Promise.Thenable<number>[];
var strThenArr: Promise.Thenable<string>[];
var anyThenArr: Promise.Thenable<any>[];

var fooThenArr: Promise.Thenable<Foo>[];
var barThenArr: Promise.Thenable<Bar>[];

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// booya!
var fooThenArrThen: Promise.Thenable<Promise.Thenable<Foo>[]>;
var barThenArrThen: Promise.Thenable<Promise.Thenable<Bar>[]>;

var fooResolver: Promise.Resolver<Foo>;
var barResolver: Promise.Resolver<Bar>;

var fooInspection: Promise.Inspection<Foo>;
var barInspection: Promise.Inspection<Bar>;

var fooInspectionArrProm: Promise<Promise.Inspection<Foo>[]>;
var barInspectionArrProm: Promise<Promise.Inspection<Bar>[]>;

var BlueBird: typeof Promise;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooThen = fooProm;
barThen = barProm;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooProm = new Promise((resolve: (value: Foo) => void, reject: (reason: any) => void) => {
    if (bool) {
        resolve(foo);
    }
    else {
        reject(new Error(str));
    }
});
fooProm = new Promise((resolve: (value: Foo) => void) => {
    if (bool) {
        resolve(foo);
    }
});

// - - - - - - - - - - - - - - - - - - - - - - -

// needs a hint when used untyped?
fooProm = new Promise<Foo>((resolve, reject) => {
    if (bool) {
        resolve(fooThen);
    }
    else {
        reject(new Error(str));
    }
});
fooProm = new Promise<Foo>((resolve) => {
    resolve(fooThen);
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooResolver.resolve(foo);

fooResolver.reject(err);

fooResolver.progress(bar);

fooResolver.callback = (err: any, value: Foo) => {

};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

bool = fooInspection.isFulfilled();

bool = fooInspection.isRejected();

bool = fooInspection.isPending();

foo = fooInspection.value();

x = fooInspection.error();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

barProm = fooProm.then((value: Foo) => {
    return bar;
}, (reason: any) => {
    return bar;
}, (note: any) => {
    return bar;
});
barProm = fooProm.then((value: Foo) => {
    return bar;
}, (reason: any) => {
    return bar;
});
barProm = fooProm.then((value: Foo) => {
    return bar;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

barProm = fooProm.catch((reason: any) => {
    return bar;
});
barProm = fooProm.caught((reason: any) => {
    return bar;
});

barProm = fooProm.catch((reason: any) => {
    return bar;
}, (reason: any) => {
    return bar;
});
barProm = fooProm.caught((reason: any) => {
    return bar;
}, (reason: any) => {
    return bar;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

barProm = fooProm.catch(Error, (reason: any) => {
    return bar;
});
barProm = fooProm.caught(Error, (reason: any) => {
    return bar;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

barProm = fooProm.error((reason: any) => {
    return bar;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooProm = fooProm.finally((value: Foo) => {
    // return is ignored
    return foo;
});
fooProm = fooProm.finally((value: Foo) => {
    // return is ignored
    return fooThen;
});
fooProm = fooProm.finally((value: Foo) => {
    // return is ignored
});
fooProm = fooProm.finally(() => {
    // return is ignored
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooProm = fooProm.lastly((value: Foo) => {
    // return is ignored
    return foo;
});
fooProm = fooProm.lastly((value: Foo) => {
    // return is ignored
    return fooThen;
});
fooProm = fooProm.lastly((value: Foo) => {
    // return is ignored
});
fooProm = fooProm.lastly(() => {
    // return is ignored
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooProm = fooProm.bind(obj);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

barProm = fooProm.done((value: Foo) => {
    return bar;
}, (reason: any) => {
    return bar;
}, (note: any) => {

});
barProm = fooProm.done((value: Foo) => {
    return bar;
}, (reason: any) => {
    return bar;
});
barProm = fooProm.done((value: Foo) => {
    return bar;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

barProm = fooProm.done((value: Foo) => {
    return barThen;
}, (reason: any) => {
    return barThen;
}, (note: any) => {

});
barProm = fooProm.done((value: Foo) => {
    return barThen;
}, (reason: any) => {
    return barThen;
});
barProm = fooProm.done((value: Foo) => {
    return barThen;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooProm = fooProm.progressed((note: any) => {
    return foo;
});
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooProm = fooProm.delay(num);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooProm = fooProm.timeout(num);
fooProm = fooProm.timeout(num, str);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooProm.nodeify();
fooProm = fooProm.nodeify((err: any) => {

});
fooProm = fooProm.nodeify((err: any, foo?: Foo) => {

});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

barProm = fooProm.fork((value: Foo) => {
    return bar;
}, (reason: any) => {
    return bar;
}, (note: any) => {

});
barProm = fooProm.fork((value: Foo) => {
    return bar;
}, (reason: any) => {
    return bar;
});
barProm = fooProm.fork((value: Foo) => {
    return bar;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

barProm = fooProm.fork((value: Foo) => {
    return barThen;
}, (reason: any) => {
    return barThen;
}, (note: any) => {

});
barProm = fooProm.fork((value: Foo) => {
    return barThen;
}, (reason: any) => {
    return barThen;
});
barProm = fooProm.fork((value: Foo) => {
    return barThen;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

barProm = fooProm.cancel<Bar>();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooProm = fooProm.cancellable();
fooProm = fooProm.uncancellable();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

bool = fooProm.isCancellable();
bool = fooProm.isFulfilled();
bool = fooProm.isRejected();
bool = fooProm.isPending();
bool = fooProm.isResolved();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooInspection = fooProm.inspect();

anyProm = fooProm.call(str);
anyProm = fooProm.call(str, 1, 2, 3);

//TODO enable get() test when implemented
// barProm = fooProm.get(str);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

barProm = fooProm.return(bar);
barProm = fooProm.thenReturn(bar);

voidProm = fooProm.return();
voidProm = fooProm.thenReturn();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooProm
fooProm = fooProm.throw(err);
fooProm = fooProm.thenThrow(err);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

str = fooProm.toString();

obj = fooProm.toJSON();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

barProm = fooArrProm.spread<Bar>((one: Foo, two: Bar) => {
    return bar;
}, (reason: any) => {
    return bar;
});
barProm = fooArrProm.spread<Bar>((one: Foo, two: Bar, twotwo: Foo) => {
    return bar;
});

// - - - - - - - - - - - - - - - - -

barProm = fooArrProm.spread<Bar>((one: Foo, two: Bar) => {
    return barThen;
}, (reason: any) => {
    return barThen;
});
barProm = fooArrProm.spread<Bar>((one: Foo, two: Bar, twotwo: Foo) => {
    return barThen;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//TODO fix collection inference

barArrProm = fooProm.all<Bar>();

objProm = fooProm.props();

barInspectionArrProm = fooProm.settle<Bar>();

barProm = fooProm.any<Bar>();

barArrProm = fooProm.some<Bar>(num);

barProm = fooProm.race<Bar>();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//TODO fix collection inference

barArrProm = fooProm.map<Foo, Bar>((item: Foo, index: number, arrayLength: number) => {
    return bar;
});
barArrProm = fooProm.map<Foo, Bar>((item: Foo) => {
    return bar;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

barProm = fooProm.reduce<Foo, Bar>((memo: Bar, item: Foo, index: number, arrayLength: number) => {
    return memo;
});
barProm = fooProm.reduce<Foo, Bar>((memo: Bar, item: Foo) => {
    return memo;
}, bar);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooArrProm = fooArrProm.filter<Foo>((item: Foo, index: number, arrayLength: number) => {
    return bool;
});
fooArrProm = fooArrProm.filter<Foo>((item: Foo) => {
    return bool;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function getMaybePromise(): Foo|Promise<Foo> {
    return foo;
}

fooProm = Promise.try(() => {
    return getMaybePromise();
});
fooProm = Promise.try<Foo>(() => {
    return getMaybePromise();
});
fooProm = Promise.try(() => {
    return foo;
});
fooProm = Promise.try(() => {
    return foo;
}, arr);
fooProm = Promise.try(() => {
    return foo;
}, arr, x);

// - - - - - - - - - - - - - - - - -

fooProm = Promise.try(() => {
    return fooThen;
});
fooProm = Promise.try(() => {
    return fooThen;
}, arr);
fooProm = Promise.try(() => {
    return fooThen;
}, arr, x);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooProm = Promise.attempt(() => {
    return getMaybePromise();
});
fooProm = Promise.attempt<Foo>(() => {
    return getMaybePromise();
});
fooProm = Promise.attempt(() => {
    return foo;
});
fooProm = Promise.attempt(() => {
    return foo;
}, arr);
fooProm = Promise.attempt(() => {
    return foo;
}, arr, x);

// - - - - - - - - - - - - - - - - -

fooProm = Promise.attempt(() => {
    return fooThen;
});
fooProm = Promise.attempt(() => {
    return fooThen;
}, arr);
fooProm = Promise.attempt(() => {
    return fooThen;
}, arr, x);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

func = Promise.method(function () {

});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooProm = Promise.resolve(foo);
fooProm = Promise.resolve(fooThen);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

voidProm = Promise.reject(reason);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooResolver = Promise.defer<Foo>();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooProm = Promise.cast(foo);
fooProm = Promise.cast(fooThen);

voidProm = Promise.bind(x);

bool = Promise.is(value);

Promise.longStackTraces();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//TODO enable delay

fooProm = Promise.delay(fooThen, num);
fooProm = Promise.delay(foo, num);
voidProm = Promise.delay(num);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

func = Promise.promisify(f);
func = Promise.promisify(f, obj);
;

obj = Promise.promisifyAll(obj);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//TODO enable generator
/*
 func = Promise.coroutine(f);

 barProm = Promise.spawn<number>(f);
 */
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

BlueBird = Promise.noConflict();

Promise.onPossiblyUnhandledRejection((reason: any) => {

});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//TODO expand tests to overloads
fooArrProm = Promise.all(fooThenArrThen);
fooArrProm = Promise.all(fooArrProm);
fooArrProm = Promise.all(fooThenArr);
fooArrProm = Promise.all(fooArr);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

objProm = Promise.props(objProm);
objProm = Promise.props(obj);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//TODO expand tests to overloads
fooInspectionArrProm = Promise.settle(fooThenArrThen);
fooInspectionArrProm = Promise.settle(fooArrProm);
fooInspectionArrProm = Promise.settle(fooThenArr);
fooInspectionArrProm = Promise.settle(fooArr);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//TODO expand tests to overloads
fooProm = Promise.any(fooThenArrThen);
fooProm = Promise.any(fooArrProm);
fooProm = Promise.any(fooThenArr);
fooProm = Promise.any(fooArr);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//TODO expand tests to overloads
fooProm = Promise.race(fooThenArrThen);
fooProm = Promise.race(fooArrProm);
fooProm = Promise.race(fooThenArr);
fooProm = Promise.race(fooArr);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//TODO expand tests to overloads
fooArrProm = Promise.some(fooThenArrThen, num);
fooArrProm = Promise.some(fooArrThen, num);
fooArrProm = Promise.some(fooThenArr, num);
fooArrProm = Promise.some(fooArr, num);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooArrProm = Promise.join(foo, foo, foo);
fooArrProm = Promise.join(fooThen, fooThen, fooThen);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// map()

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooThenArrThen

barArrProm = Promise.map(fooThenArrThen, (item: Foo) => {
    return bar;
});
barArrProm = Promise.map(fooThenArrThen, (item: Foo) => {
    return barThen;
});
barArrProm = Promise.map(fooThenArrThen, (item: Foo, index: number, arrayLength: number) => {
    return bar;
});
barArrProm = Promise.map(fooThenArrThen, (item: Foo, index: number, arrayLength: number) => {
    return barThen;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooArrThen

barArrProm = Promise.map(fooArrThen, (item: Foo) => {
    return bar;
});
barArrProm = Promise.map(fooArrThen, (item: Foo) => {
    return barThen;
});
barArrProm = Promise.map(fooArrThen, (item: Foo, index: number, arrayLength: number) => {
    return bar;
});
barArrProm = Promise.map(fooArrThen, (item: Foo, index: number, arrayLength: number) => {
    return barThen;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooThenArr

barArrProm = Promise.map(fooThenArr, (item: Foo) => {
    return bar;
});
barArrProm = Promise.map(fooThenArr, (item: Foo) => {
    return barThen;
});
barArrProm = Promise.map(fooThenArr, (item: Foo, index: number, arrayLength: number) => {
    return bar;
});
barArrProm = Promise.map(fooThenArr, (item: Foo, index: number, arrayLength: number) => {
    return barThen;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooArr

barArrProm = Promise.map(fooArr, (item: Foo) => {
    return bar;
});
barArrProm = Promise.map(fooArr, (item: Foo) => {
    return barThen;
});
barArrProm = Promise.map(fooArr, (item: Foo, index: number, arrayLength: number) => {
    return bar;
});
barArrProm = Promise.map(fooArr, (item: Foo, index: number, arrayLength: number) => {
    return barThen;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// reduce()

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooThenArrThen

barProm = Promise.reduce(fooThenArrThen, (memo: Bar, item: Foo) => {
    return memo;
}, bar);
barProm = Promise.reduce(fooThenArrThen, (memo: Bar, item: Foo) => {
    return barThen;
}, bar);
barProm = Promise.reduce(fooThenArrThen, (memo: Bar, item: Foo, index: number, arrayLength: number) => {
    return memo;
}, bar);
barProm = Promise.reduce(fooThenArrThen, (memo: Bar, item: Foo, index: number, arrayLength: number) => {
    return barThen;
}, bar);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooArrThen

barProm = Promise.reduce(fooArrThen, (memo: Bar, item: Foo) => {
    return memo;
}, bar);
barProm = Promise.reduce(fooArrThen, (memo: Bar, item: Foo) => {
    return barThen;
}, bar);
barProm = Promise.reduce(fooArrThen, (memo: Bar, item: Foo, index: number, arrayLength: number) => {
    return memo;
}, bar);
barProm = Promise.reduce(fooArrThen, (memo: Bar, item: Foo, index: number, arrayLength: number) => {
    return barThen;
}, bar);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooThenArr

barProm = Promise.reduce(fooThenArr, (memo: Bar, item: Foo) => {
    return memo;
}, bar);
barProm = Promise.reduce(fooThenArr, (memo: Bar, item: Foo) => {
    return barThen;
}, bar);
barProm = Promise.reduce(fooThenArr, (memo: Bar, item: Foo, index: number, arrayLength: number) => {
    return memo;
}, bar);
barProm = Promise.reduce(fooThenArr, (memo: Bar, item: Foo, index: number, arrayLength: number) => {
    return barThen;
}, bar);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooArr

barProm = Promise.reduce(fooArr, (memo: Bar, item: Foo) => {
    return memo;
}, bar);
barProm = Promise.reduce(fooArr, (memo: Bar, item: Foo) => {
    return barThen;
}, bar);
barProm = Promise.reduce(fooArr, (memo: Bar, item: Foo, index: number, arrayLength: number) => {
    return memo;
}, bar);
barProm = Promise.reduce(fooArr, (memo: Bar, item: Foo, index: number, arrayLength: number) => {
    return barThen;
}, bar);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// filter()

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooThenArrThen

fooArrProm = Promise.filter(fooThenArrThen, (item: Foo) => {
    return bool;
});
fooArrProm = Promise.filter(fooThenArrThen, (item: Foo) => {
    return boolThen;
});
fooArrProm = Promise.filter(fooThenArrThen, (item: Foo, index: number, arrayLength: number) => {
    return bool;
});
fooArrProm = Promise.filter(fooThenArrThen, (item: Foo, index: number, arrayLength: number) => {
    return boolThen;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooArrThen

fooArrProm = Promise.filter(fooArrThen, (item: Foo) => {
    return bool;
});
fooArrProm = Promise.filter(fooArrThen, (item: Foo) => {
    return boolThen;
});
fooArrProm = Promise.filter(fooArrThen, (item: Foo, index: number, arrayLength: number) => {
    return bool;
});
fooArrProm = Promise.filter(fooArrThen, (item: Foo, index: number, arrayLength: number) => {
    return boolThen;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooThenArr

fooArrProm = Promise.filter(fooThenArr, (item: Foo) => {
    return bool;
});
fooArrProm = Promise.filter(fooThenArr, (item: Foo) => {
    return boolThen;
});
fooArrProm = Promise.filter(fooThenArr, (item: Foo, index: number, arrayLength: number) => {
    return bool;
});
fooArrProm = Promise.filter(fooThenArr, (item: Foo, index: number, arrayLength: number) => {
    return boolThen;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooArr

fooArrProm = Promise.filter(fooArr, (item: Foo) => {
    return bool;
});
fooArrProm = Promise.filter(fooArr, (item: Foo) => {
    return boolThen;
});
fooArrProm = Promise.filter(fooArr, (item: Foo, index: number, arrayLength: number) => {
    return bool;
});
fooArrProm = Promise.filter(fooArr, (item: Foo, index: number, arrayLength: number) => {
    return boolThen;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
