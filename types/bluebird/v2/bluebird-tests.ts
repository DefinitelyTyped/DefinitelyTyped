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
var voidVar: void;

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
interface Baz {
  baz(): string;
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
var baz: Baz;

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
var fooOrBarProm: Promise<Foo|Bar>;
var bazProm: Promise<Baz>;

// - - - - - - - - - - - - - - - - -

var numThen: PromiseLike<number>;
var strThen: PromiseLike<string>;
var anyThen: PromiseLike<any>;
var boolThen: PromiseLike<boolean>;
var objThen: PromiseLike<Object>;
var voidThen: PromiseLike<void>;

var fooThen: PromiseLike<Foo>;
var barThen: PromiseLike<Bar>;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

var numArrProm: Promise<number[]>;
var strArrProm: Promise<string[]>;
var anyArrProm: Promise<any[]>;

var fooArrProm: Promise<Foo[]>;
var barArrProm: Promise<Bar[]>;

// - - - - - - - - - - - - - - - - -

var numArrThen: PromiseLike<number[]>;
var strArrThen: PromiseLike<string[]>;
var anyArrThen: PromiseLike<any[]>;

var fooArrThen: PromiseLike<Foo[]>;
var barArrThen: PromiseLike<Bar[]>;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

var numPromArr: Promise<number>[];
var strPromArr: Promise<string>[];
var anyPromArr: Promise<any>[];

var fooPromArr: Promise<Foo>[];
var barPromArr: Promise<Bar>[];

// - - - - - - - - - - - - - - - - -

var numThenArr: PromiseLike<number>[];
var strThenArr: PromiseLike<string>[];
var anyThenArr: PromiseLike<any>[];

var fooThenArr: PromiseLike<Foo>[];
var barThenArr: PromiseLike<Bar>[];

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// booya!
var fooThenArrThen: PromiseLike<PromiseLike<Foo>[]>;
var barThenArrThen: PromiseLike<PromiseLike<Bar>[]>;

var fooResolver: Promise.Resolver<Foo>;
var barResolver: Promise.Resolver<Bar>;

var fooInspection: Promise.Inspection<Foo>;
var barInspection: Promise.Inspection<Bar>;

var fooInspectionArrProm: Promise<Promise.Inspection<Foo>[]>;
var barInspectionArrProm: Promise<Promise.Inspection<Bar>[]>;

var BlueBird: typeof Promise;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

var nodeCallbackFunc = (callback: (err: any, result: string) => void) => {}
var nodeCallbackFuncErrorOnly = (callback: (err: any) => void) => {}

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

x = fooInspection.reason();

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
}, (reason: any) => {
	return barProm;
});
barProm = fooProm.then((value: Foo) => {
	return bar;
}, (reason: any) => {
	return;
});
barProm = fooProm.then((value: Foo) => {
	return bar;
}, (reason: any) => {
	return voidProm;
});
barProm = fooProm.then((value: Foo) => {
	return bar;
});
barProm = barProm.then((value: Bar) => {
	if (value) return value;
	var b:Bar;
	return Promise.resolve(b);
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooProm = fooProm.catch((reason: any) => {
	return;
});

fooProm = fooProm.caught((reason: any) => {
	return;
});
fooProm = fooProm.catch((error: any) => {
	return true;
}, (reason: any) => {
	return;
});
fooProm = fooProm.caught((error: any) => {
	return true;
}, (reason: any) => {
	return;
});

fooProm = fooProm.catch((reason: any) => {
	return voidProm;
});

fooProm = fooProm.caught((reason: any) => {
	return voidProm;
});
fooProm = fooProm.catch((error: any) => {
	return true;
}, (reason: any) => {
	return voidProm;
});
fooProm = fooProm.caught((error: any) => {
	return true;
}, (reason: any) => {
	return voidProm;
});

fooProm = fooProm.catch((reason: any) => {
	//handle multiple valid return types simultaneously
	if (foo === null) {
		return;
	} else if (!reason) {
		return voidProm;
	} else if (foo) {
		return foo;
	}
});

fooOrBarProm = fooProm.catch((reason: any) => {
	return bar;
});
fooOrBarProm = fooProm.caught((reason: any) => {
	return bar;
});

fooOrBarProm = fooProm.catch((error: any) => {
	return true;
}, (reason: any) => {
	return bar;
});
fooOrBarProm = fooProm.caught((error: any) => {
	return true;
}, (reason: any) => {
	return bar;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooProm = fooProm.catch(Error, (reason: any) => {
	return;
});
fooProm = fooProm.catch(Promise.CancellationError, (reason: any) => {
	return;
});
fooProm = fooProm.caught(Error, (reason: any) => {
	return;
});
fooProm = fooProm.caught(Promise.CancellationError, (reason: any) => {
	return;
});

fooOrBarProm = fooProm.catch(Error, (reason: any) => {
	return bar;
});
fooOrBarProm = fooProm.catch(Promise.CancellationError, (reason: any) => {
	return bar;
});
fooOrBarProm = fooProm.caught(Error, (reason: any) => {
	return bar;
});
fooOrBarProm = fooProm.caught(Promise.CancellationError, (reason: any) => {
	return bar;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

barProm = fooProm.error((reason: any) => {
	return bar;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooProm = fooProm.finally(() => {
	// non-Thenable return is ignored
	return "foo";
});
fooProm = fooProm.finally(() => {
	return fooThen;
});
fooProm = fooProm.finally(() => {
	// non-Thenable return is ignored
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooProm = fooProm.lastly(() => {
	// non-Thenable return is ignored
	return "foo";
});
fooProm = fooProm.lastly(() => {
	return fooThen;
});
fooProm = fooProm.lastly(() => {
	// non-Thenable return is ignored
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooProm = fooProm.bind(obj);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

voidVar = fooProm.done((value: Foo) => {
	return bar;
}, (reason: any) => {
	return bar;
}, (note: any) => {

});
voidVar = fooProm.done((value: Foo) => {
	return bar;
}, (reason: any) => {
	return bar;
});
voidVar = fooProm.done((value: Foo) => {
	return bar;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

voidVar = fooProm.done((value: Foo) => {
	return barThen;
}, (reason: any) => {
	return barThen;
}, (note: any) => {

});
voidVar = fooProm.done((value: Foo) => {
	return barThen;
}, (reason: any) => {
	return barThen;
});
voidVar = fooProm.done((value: Foo) => {
	return barThen;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooProm = fooProm.tap((value: Foo) => {
	// non-Thenable return is ignored
	return "foo";
});
fooProm = fooProm.tap((value: Foo) => {
	return fooThen;
});
fooProm = fooProm.tap((value: Foo) => {
	return voidThen;
});
fooProm = fooProm.tap(() => {
	// non-Thenable return is ignored
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
fooProm = fooProm.nodeify((err: any) => { });
fooProm = fooProm.nodeify((err: any, foo?: Foo) => { });

fooProm.nodeify({ spread: true });
fooProm = fooProm.nodeify((err: any) => { }, { spread: true });
fooProm = fooProm.nodeify((err: any, foo?: Foo) => { }, { spread: true });

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

Promise.all([fooProm, barProm]).then(result => {
  result[0].foo();
  result[1].bar();
});

Promise.all([fooProm, fooProm]).then(result => {
  result[0].foo();
  result[1].foo();
});

Promise.all([fooProm, barProm, bazProm]).then(result => {
  result[0].foo();
  result[1].bar();
  result[2].baz();
});

Promise.all([fooProm, barProm, fooProm]).then(result => {
  result[0].foo();
  result[1].bar();
  result[2].foo();
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//TODO fix collection inference

barArrProm = fooArrProm.map<Foo, Bar>((item: Foo, index: number, arrayLength: number) => {
	return bar;
});
barArrProm = fooArrProm.map<Foo, Bar>((item: Foo) => {
	return bar;
});

barArrProm = fooArrProm.map<Foo, Bar>((item: Foo, index: number, arrayLength: number) => {
	return bar;
}, {
	concurrency: 1
});
barArrProm = fooArrProm.map<Foo, Bar>((item: Foo) => {
	return bar;
}, {
	concurrency: 1
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

barArrProm = fooArrProm.mapSeries<Foo, Bar>((item: Foo, index: number, arrayLength: number) => {
	return bar;
});
barArrProm = fooArrProm.mapSeries<Foo, Bar>((item: Foo) => {
	return bar;
});


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

barProm = fooArrProm.reduce<Foo, Bar>((memo: Bar, item: Foo, index: number, arrayLength: number) => {
	return memo;
});
barProm = fooArrProm.reduce<Foo, Bar>((memo: Bar, item: Foo) => {
	return memo;
}, bar);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooArrProm = fooArrProm.filter<Foo>((item: Foo, index: number, arrayLength: number) => {
	return bool;
});
fooArrProm = fooArrProm.filter<Foo>((item: Foo) => {
	return bool;
});

fooArrProm = fooArrProm.filter<Foo>((item: Foo, index: number, arrayLength: number) => {
	return bool;
}, {
	concurrency: 1
});
fooArrProm = fooArrProm.filter<Foo>((item: Foo) => {
	return bool;
}, {
	concurrency: 1
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooArrProm = fooArrProm.each<Foo, Bar>((item: Foo): Bar => bar);
fooArrProm = fooArrProm.each<Foo, Bar>((item: Foo, index: number): Bar => index ? bar : null);
fooArrProm = fooArrProm.each<Foo, Bar>((item: Foo, index: number, arrayLength: number): Bar => bar);
fooArrProm = fooArrProm.each<Foo, Bar>((item: Foo, index: number, arrayLength: number): Promise<Bar> => barProm);

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

// - - - - - - - - - - - - - - - - -

fooProm = Promise.try(() => {
    if (fooProm) {
        return fooProm;
    }
    return foo;
});

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
    if (fooProm) {
        return fooProm;
    }
    return foo;
});

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

fooProm = Promise.delay(num, fooThen);
fooProm = Promise.delay(num, foo);
voidProm = Promise.delay(num);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

func = Promise.promisify(f);
func = Promise.promisify(f, obj);

obj = Promise.promisifyAll(obj);
anyProm = Promise.fromNode(callback => nodeCallbackFunc(callback));
anyProm = Promise.fromNode(callback => nodeCallbackFuncErrorOnly(callback));
anyProm = Promise.fromNode(callback => nodeCallbackFunc(callback), {multiArgs : true});
anyProm = Promise.fromNode(callback => nodeCallbackFuncErrorOnly(callback), {multiArgs : true});

anyProm = Promise.fromCallback(callback => nodeCallbackFunc(callback));
anyProm = Promise.fromCallback(callback => nodeCallbackFuncErrorOnly(callback));
anyProm = Promise.fromCallback(callback => nodeCallbackFunc(callback), {multiArgs : true});
anyProm = Promise.fromCallback(callback => nodeCallbackFuncErrorOnly(callback), {multiArgs : true});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

declare var util: any;

function defaultFilter(name: string, func: Function) {
    return util.isIdentifier(name) &&
        name.charAt(0) !== "_" &&
        !util.isClass(func);
}

function DOMPromisifier(originalMethod: Function) {
    // return a function
    return function promisified() {
        var args = [].slice.call(arguments);
        // Needed so that the original method can be called with the correct receiver
        var self = this;
        // which returns a promise
        return new Promise(function(resolve, reject) {
            args.push(resolve, reject);
            originalMethod.apply(self, args);
        });
    };
}

obj = Promise.promisifyAll(obj, {
	suffix: "",
	filter: defaultFilter,
	promisifier: DOMPromisifier
});

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

barArrProm = Promise.map(fooThenArrThen, (item: Foo) => {
	return bar;
}, {
	concurrency: 1
});
barArrProm = Promise.map(fooThenArrThen, (item: Foo) => {
	return barThen;
}, {
	concurrency: 1
});
barArrProm = Promise.map(fooThenArrThen, (item: Foo, index: number, arrayLength: number) => {
	return bar;
}, {
	concurrency: 1
});
barArrProm = Promise.map(fooThenArrThen, (item: Foo, index: number, arrayLength: number) => {
	return barThen;
}, {
	concurrency: 1
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

barArrProm = Promise.map(fooArrThen, (item: Foo) => {
	return bar;
}, {
	concurrency: 1
});
barArrProm = Promise.map(fooArrThen, (item: Foo) => {
	return barThen;
}, {
	concurrency: 1
});
barArrProm = Promise.map(fooArrThen, (item: Foo, index: number, arrayLength: number) => {
	return bar;
}, {
	concurrency: 1
});
barArrProm = Promise.map(fooArrThen, (item: Foo, index: number, arrayLength: number) => {
	return barThen;
}, {
	concurrency: 1
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

barArrProm = Promise.map(fooThenArr, (item: Foo) => {
	return bar;
}, {
	concurrency: 1
});
barArrProm = Promise.map(fooThenArr, (item: Foo) => {
	return barThen;
}, {
	concurrency: 1
});
barArrProm = Promise.map(fooThenArr, (item: Foo, index: number, arrayLength: number) => {
	return bar;
}, {
	concurrency: 1
});
barArrProm = Promise.map(fooThenArr, (item: Foo, index: number, arrayLength: number) => {
	return barThen;
}, {
	concurrency: 1
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

barArrProm = Promise.map(fooArr, (item: Foo) => {
	return bar;
}, {
	concurrency: 1
});
barArrProm = Promise.map(fooArr, (item: Foo) => {
	return barThen;
}, {
	concurrency: 1
});
barArrProm = Promise.map(fooArr, (item: Foo, index: number, arrayLength: number) => {
	return bar;
}, {
	concurrency: 1
});
barArrProm = Promise.map(fooArr, (item: Foo, index: number, arrayLength: number) => {
	return barThen;
}, {
	concurrency: 1
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// mapSeries()

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooThenArrThen

barArrProm = Promise.mapSeries(fooThenArrThen, (item: Foo) => {
	return bar;
});
barArrProm = Promise.mapSeries(fooThenArrThen, (item: Foo) => {
	return barThen;
});
barArrProm = Promise.mapSeries(fooThenArrThen, (item: Foo, index: number, arrayLength: number) => {
	return bar;
});
barArrProm = Promise.mapSeries(fooThenArrThen, (item: Foo, index: number, arrayLength: number) => {
	return barThen;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooArrThen

barArrProm = Promise.mapSeries(fooArrThen, (item: Foo) => {
	return bar;
});
barArrProm = Promise.mapSeries(fooArrThen, (item: Foo) => {
	return barThen;
});
barArrProm = Promise.mapSeries(fooArrThen, (item: Foo, index: number, arrayLength: number) => {
	return bar;
});
barArrProm = Promise.mapSeries(fooArrThen, (item: Foo, index: number, arrayLength: number) => {
	return barThen;
});


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooThenArr

barArrProm = Promise.mapSeries(fooThenArr, (item: Foo) => {
	return bar;
});
barArrProm = Promise.mapSeries(fooThenArr, (item: Foo) => {
	return barThen;
});
barArrProm = Promise.mapSeries(fooThenArr, (item: Foo, index: number, arrayLength: number) => {
	return bar;
});
barArrProm = Promise.mapSeries(fooThenArr, (item: Foo, index: number, arrayLength: number) => {
	return barThen;
});


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooArr

barArrProm = Promise.mapSeries(fooArr, (item: Foo) => {
	return bar;
});
barArrProm = Promise.mapSeries(fooArr, (item: Foo) => {
	return barThen;
});
barArrProm = Promise.mapSeries(fooArr, (item: Foo, index: number, arrayLength: number) => {
	return bar;
});
barArrProm = Promise.mapSeries(fooArr, (item: Foo, index: number, arrayLength: number) => {
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

fooArrProm = Promise.filter(fooThenArrThen, (item: Foo) => {
	return bool;
}, {
	concurrency: 1
});
fooArrProm = Promise.filter(fooThenArrThen, (item: Foo) => {
	return boolThen;
}, {
	concurrency: 1
});
fooArrProm = Promise.filter(fooThenArrThen, (item: Foo, index: number, arrayLength: number) => {
	return bool;
}, {
	concurrency: 1
});
fooArrProm = Promise.filter(fooThenArrThen, (item: Foo, index: number, arrayLength: number) => {
	return boolThen;
}, {
	concurrency: 1
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

fooArrProm = Promise.filter(fooArrThen, (item: Foo) => {
	return bool;
}, {
	concurrency: 1
});
fooArrProm = Promise.filter(fooArrThen, (item: Foo) => {
	return boolThen;
}, {
	concurrency: 1
});
fooArrProm = Promise.filter(fooArrThen, (item: Foo, index: number, arrayLength: number) => {
	return bool;
}, {
	concurrency: 1
});
fooArrProm = Promise.filter(fooArrThen, (item: Foo, index: number, arrayLength: number) => {
	return boolThen;
}, {
	concurrency: 1
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

fooArrProm = Promise.filter(fooThenArr, (item: Foo) => {
	return bool;
}, {
	concurrency: 1
});
fooArrProm = Promise.filter(fooThenArr, (item: Foo) => {
	return boolThen;
}, {
	concurrency: 1
});
fooArrProm = Promise.filter(fooThenArr, (item: Foo, index: number, arrayLength: number) => {
	return bool;
}, {
	concurrency: 1
});
fooArrProm = Promise.filter(fooThenArr, (item: Foo, index: number, arrayLength: number) => {
	return boolThen;
}, {
	concurrency: 1
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

fooArrProm = Promise.filter(fooArr, (item: Foo) => {
	return bool;
}, {
	concurrency: 1
});
fooArrProm = Promise.filter(fooArr, (item: Foo) => {
	return boolThen;
}, {
	concurrency: 1
});
fooArrProm = Promise.filter(fooArr, (item: Foo, index: number, arrayLength: number) => {
	return bool;
}, {
	concurrency: 1
});
fooArrProm = Promise.filter(fooArr, (item: Foo, index: number, arrayLength: number) => {
	return boolThen;
}, {
	concurrency: 1
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// each()

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooThenArrThen

fooArrThen = Promise.each(fooThenArrThen, (item: Foo) => bar);
fooArrThen = Promise.each(fooThenArrThen, (item: Foo) => barThen);
fooArrThen = Promise.each(fooThenArrThen, (item: Foo, index: number, arrayLength: number) => bar);
fooArrThen = Promise.each(fooThenArrThen, (item: Foo, index: number, arrayLength: number) => barThen);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooArrThen

fooArrThen = Promise.each(fooArrThen, (item: Foo) => bar);
fooArrThen = Promise.each(fooArrThen, (item: Foo) => barThen);
fooArrThen = Promise.each(fooArrThen, (item: Foo, index: number, arrayLength: number) => bar);
fooArrThen = Promise.each(fooArrThen, (item: Foo, index: number, arrayLength: number) => barThen);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooThenArr

fooArrThen = Promise.each(fooThenArr, (item: Foo) => bar);
fooArrThen = Promise.each(fooThenArr, (item: Foo) => barThen);
fooArrThen = Promise.each(fooThenArr, (item: Foo, index: number, arrayLength: number) => bar);
fooArrThen = Promise.each(fooThenArr, (item: Foo, index: number, arrayLength: number) => barThen);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooArr

fooArrThen = Promise.each(fooArr, (item: Foo) => bar);
fooArrThen = Promise.each(fooArr, (item: Foo) => barThen);
fooArrThen = Promise.each(fooArr, (item: Foo, index: number, arrayLength: number) => bar);
fooArrThen = Promise.each(fooArr, (item: Foo, index: number, arrayLength: number) => barThen);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
