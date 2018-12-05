// Tests by: Bart van der Schoor <https://github.com/Bartvds>

// Note: replicate changes to all overloads in both definition and test file
// Note: keep both static and instance members inline (so similar)

// Note: try to maintain the ordering and separators, and keep to the pattern

import Promise = require("bluebird");

let obj: object = {};
let bool = false;
let num = 0;
let str = '';
let err: Error = new Error();
let x: any = 0;
let f: (...args: any[]) => any = () => {};
let asyncfunc: (...args: any[]) => Promise<any>;
let arr: any[];
let exp: RegExp;
let anyArr: any[];
let strArr: string[];
let numArr: number[];

// - - - - - - - - - - - - - - - - -

let value: any;
let reason: any;

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
interface Qux {
	qux: string;
}

// - - - - - - - - - - - - - - - - -

interface StrFooMap {
	[key: string]: Foo;
}

interface StrBarMap {
	[key: string]: Bar;
}

// - - - - - - - - - - - - - - - - -

interface StrFooArrMap {
	[key: string]: Foo[];
}

interface StrBarArrMap {
	[key: string]: Bar[];
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

let foo: Foo = { foo() { return 'foo'; } };
let bar: Bar = { bar() { return 'bar'; } };
let baz: Baz = { baz() { return 'baz'; } };
let qux: Qux = { qux: 'quix' };

let fooArr: Foo[] = [foo];
let barArr: Bar[];

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

let numProm: Promise<number>;
let strProm: Promise<string>;
let anyProm: Promise<any>;
let boolProm: Promise<boolean>;
let objProm: Promise<object> = Promise.resolve(obj);
let voidProm: Promise<void>;

let fooProm: Promise<Foo> = Promise.resolve(foo);
let barProm: Promise<Bar> = Promise.resolve(bar);
let fooOrBarProm: Promise<Foo | Bar>;
let bazProm: Promise<Baz> = Promise.resolve(baz);
let quxProm: Promise<Qux> = Promise.resolve(qux);

// - - - - - - - - - - - - - - - - -

let numThen: PromiseLike<number>;
let strThen: PromiseLike<string>;
let anyThen: PromiseLike<any>;
let boolThen: PromiseLike<boolean>;
let objThen: PromiseLike<object>;
let voidThen: PromiseLike<void>;

let fooThen: PromiseLike<Foo> = fooProm;
let barThen: PromiseLike<Bar> = barProm;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

let numArrProm: Promise<number[]>;
let strArrProm: Promise<string[]>;
let anyArrProm: Promise<any[]>;

let fooArrProm: Promise<Foo[]> = Promise.resolve(fooArr);
let barArrProm: Promise<Bar[]>;

// - - - - - - - - - - - - - - - - -

let numArrThen: PromiseLike<number[]>;
let strArrThen: PromiseLike<string[]>;
let anyArrThen: PromiseLike<any[]>;

let fooArrThen: PromiseLike<Foo[]> = fooArrProm;
let barArrThen: PromiseLike<Bar[]>;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

let numPromArr: Array<Promise<number>>;
let strPromArr: Array<Promise<string>>;
let anyPromArr: Array<Promise<any>>;

let fooPromArr: Array<Promise<Foo>>;
let barPromArr: Array<Promise<Bar>>;

// - - - - - - - - - - - - - - - - -

let numThenArr: Array<PromiseLike<number>>;
let strThenArr: Array<PromiseLike<string>>;
let anyThenArr: Array<PromiseLike<any>>;

let fooThenArr: Array<PromiseLike<Foo>> = [fooThen];
let barThenArr: Array<PromiseLike<Bar>>;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// booya!
let fooThenArrThen: PromiseLike<Array<PromiseLike<Foo>>> = Promise.resolve(fooThenArr);

let fooResolver: Promise.Resolver<Foo>;
let fooInspection: Promise.Inspection<Foo>;
let fooInspectionPromise: Promise<Promise.Inspection<Foo>>;

let fooInspectionArrProm: Promise<Array<Promise.Inspection<Foo>>>;

let BlueBird: typeof Promise;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

let version: string = Promise.version;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

let nodeCallbackFunc = (callback: (err: any, result: string) => void) => {};
let nodeCallbackFuncErrorOnly = (callback: (err: any) => void) => {};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooThen = fooProm;
barThen = barProm;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooProm = new Promise((resolve: (value: Foo) => void, reject: (reason: any) => void) => {
	if (bool) {
		resolve(foo);
	} else {
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
	} else {
		reject(new Error(str));
	}
});
fooProm = new Promise<Foo>((resolve) => {
	resolve(fooThen);
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooInspectionPromise = fooProm.reflect();

fooInspectionPromise.then(value => {
	fooInspection = value;
	bool = fooInspection.isFulfilled();
	bool = fooInspection.isRejected();
	bool = fooInspection.isPending();
	foo = fooInspection.value();
	x = fooInspection.reason();
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

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
// $ExpectType Bluebird<void | Bar>
fooProm.then((value: Foo) => {
	return bar;
}, (reason: any) => {
	return;
});
// $ExpectType Bluebird<void | Bar>
fooProm.then((value: Foo) => {
	return bar;
}, (reason: any) => {
	return voidProm;
});
barProm = fooProm.then((value: Foo) => {
	return bar;
});
barProm = barProm.then((value: Bar) => {
	if (value) return value;
	return Promise.resolve(bar);
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// $ExpectType Bluebird<void | Foo>
fooProm.catch((reason: any) => {
	return;
});

// $ExpectType Bluebird<void | Foo>
fooProm.caught((reason: any) => {
	return;
});
// $ExpectType Bluebird<void | Foo>
fooProm.catch((error: any) => {
	return true;
}, (reason: any) => {
	return;
});
// $ExpectType Bluebird<void | Foo>
fooProm.caught((error: any) => {
	return true;
}, (reason: any) => {
	return;
});

// $ExpectType Bluebird<void | Foo>
fooProm.catch((reason: any) => {
	return voidProm;
});
// $ExpectType Bluebird<void | Foo>
fooProm.caught((reason: any) => {
	return voidProm;
});
// $ExpectType Bluebird<void | Foo>
fooProm.catch((error: any) => {
	return true;
}, (reason: any) => {
	return voidProm;
});
// $ExpectType Bluebird<void | Foo>
fooProm.caught((error: any) => {
	return true;
}, (reason: any) => {
	return voidProm;
});

// $ExpectType Bluebird<void | Foo>
fooProm.catch<void | Foo>((reason: any) => { // tslint:disable-line:void-return
	// handle multiple valid return types simultaneously
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

// $ExpectType Bluebird<void | Foo>
fooProm.catch(Error, (reason: any) => {
	return;
});
// $ExpectType Bluebird<void | Foo>
fooProm.catch(Promise.CancellationError, (reason: any) => {
	return;
});
// $ExpectType Bluebird<void | Foo>
fooProm.caught(Error, (reason: any) => {
	return;
});
// $ExpectType Bluebird<void | Foo>
fooProm.caught(Promise.CancellationError, (reason: any) => {
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

class CustomError extends Error {
	customField: number;
}
// $ExpectType Bluebird<void | Foo>
fooProm.catch(CustomError, reason => {
	let a: number = reason.customField;
});

class CustomErrorWithConstructor extends Error {
	arg1: boolean;
	arg2: number;
	constructor(arg1: boolean, arg2: number) {
		super();
		this.arg1 = arg1;
		this.arg2 = arg2;
	}
}
// $ExpectType Bluebird<void | Foo>
fooProm.catch(CustomErrorWithConstructor, reason => {
	let a: boolean = reason.arg1;
	let b: number = reason.arg2;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

class CustomError1 extends Error {}
class CustomError2 extends Error {}
class CustomError3 extends Error {}
class CustomError4 extends Error {}
class CustomError5 extends Error {}

// $ExpectType Bluebird<void | Foo>
fooProm.catch(CustomError1, error => {});
// $ExpectType Bluebird<void | Foo>
fooProm.catch(CustomError1, CustomError2, error => {});
// $ExpectType Bluebird<void | Foo>
fooProm.catch(CustomError1, CustomError2, CustomError3, error => {});
// $ExpectType Bluebird<void | Foo>
fooProm.catch(CustomError1, CustomError2, CustomError3, CustomError4, error => {});
// $ExpectType Bluebird<void | Foo>
fooProm.catch(CustomError1, CustomError2, CustomError3, CustomError4, CustomError5, error => {});

const booPredicate1 = (error: CustomError1) => true;
const booPredicate2 = (error: [number]) => true;
const booPredicate3 = (error: string) => true;
const booPredicate4 = (error: object) => true;
const booPredicate5 = (error: any) => true;

// $ExpectType Bluebird<void | Foo>
fooProm.catch(booPredicate1, error => {});
// $ExpectType Bluebird<void | Foo>
fooProm.catch(booPredicate1, booPredicate2, error => {});
// $ExpectType Bluebird<void | Foo>
fooProm.catch(booPredicate1, booPredicate2, booPredicate3, error => {});
// $ExpectType Bluebird<void | Foo>
fooProm.catch(booPredicate1, booPredicate2, booPredicate3, booPredicate4, error => {});
// $ExpectType Bluebird<void | Foo>
fooProm.catch(booPredicate1, booPredicate2, booPredicate3, booPredicate4, booPredicate5, error => {});

const booObject1 = new CustomError1();
const booObject2 = [400, 500];
const booObject3 = ["Error1", "Error2"];
const booObject4 = {code: 400};
const booObject5: any = null;

// $ExpectType Bluebird<void | Foo>
fooProm.catch(booObject1, error => {});
// $ExpectType Bluebird<void | Foo>
fooProm.catch(booObject1, booObject2, error => {});
// $ExpectType Bluebird<void | Foo>
fooProm.catch(booObject1, booObject2, booObject3, error => {});
// $ExpectType Bluebird<void | Foo>
fooProm.catch(booObject1, booObject2, booObject3, booObject4, error => {});
// $ExpectType Bluebird<void | Foo>
fooProm.catch(booObject1, booObject2, booObject3, booObject4, booObject5, error => {});

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

// $ExpectType void
fooProm.done((value: Foo) => {
	return bar;
}, (reason: any) => {
	return bar;
});
// $ExpectType void
fooProm.done((value: Foo) => {
	return bar;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// $ExpectType void
fooProm.done((value: Foo) => {
	return barThen;
}, (reason: any) => {
	return barThen;
});
// $ExpectType void
fooProm.done((value: Foo) => {
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

fooProm = fooProm.tapCatch((err) => {
	return "foo";
});

fooProm = fooProm.tapCatch(err => {
	return Promise.resolve("foo");
});

fooProm.tapCatch(CustomError, (err: CustomError) => {
	return err.customField;
});

fooProm.tapCatch((e: any) => e instanceof CustomError, (err: CustomError) => {
	return err.customField;
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

// $ExpectType void
fooProm.cancel();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

bool = fooProm.isCancelled();
bool = fooProm.isFulfilled();
bool = fooProm.isRejected();
bool = fooProm.isPending();
bool = fooProm.isResolved();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

strProm = fooProm.call("foo");
strProm = fooProm.call("foo", 1, 2, 3);

// $ExpectType Bluebird<never>
quxProm.call("qux");

strProm = fooProm.get("foo").then(method => method());

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

fooOrBarProm = fooProm.return(foo).catchReturn(bar);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooProm
fooProm = fooProm.catchThrow(err);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

str = fooProm.toString();

obj = fooProm.toJSON();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

barProm = fooArrProm.spread((one: Foo, two: Foo, twotwo: Foo) => {
	return bar;
});

// - - - - - - - - - - - - - - - - -

barProm = fooArrProm.spread((one: Foo, two: Foo, twotwo: Foo) => {
	return barThen;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooArrProm = fooArrProm.all();

// $ExpectType Bluebird<never>
fooProm.all();

fooProm = fooArrProm.any();

// $ExpectType Bluebird<never>
fooProm.any();

fooArrProm = fooArrProm.some(num);

// $ExpectType Bluebird<never>
fooProm.some(num);

fooProm = fooArrProm.race();

// $ExpectType Bluebird<never>
fooProm.race();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

let propsValue: { num: number, str: string };
Promise.resolve({ num: 1, str: Promise.resolve('a') }).props().then(val => { propsValue = val; });
Promise.props({ num: 1, str: Promise.resolve('a') }).then(val => { propsValue = val; });
Promise.props(Promise.props({ num: 1, str: Promise.resolve('a') })).then(val => { propsValue = val; });

let propsMapValue: Map<number, string>;
Promise.resolve(new Map<number, string>()).props().then(val => { propsMapValue = val; });
Promise.resolve(new Map<number, PromiseLike<string>>()).props().then(val => { propsMapValue = val; });
Promise.props(new Map<number, string>()).then(val => { propsMapValue = val; });
Promise.props(new Map<number, PromiseLike<string>>()).then(val => { propsMapValue = val; });

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

Promise.all([fooProm, barProm]).then(result => {
  	foo = result[0];
  	bar = result[1];
});

Promise.all([fooProm, fooProm]).then(result => {
	foo = result[0];
	foo = result[1];
});

Promise.all([fooProm, barProm, bazProm]).then(result => {
	foo = result[0];
	bar = result[1];
	baz = result[2];
});

Promise.all([fooProm, barProm, fooProm]).then(result => {
	foo = result[0];
	bar = result[1];
	foo = result[2];
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

barArrProm = fooArrProm.map((item: Foo, index: number, arrayLength: number) => {
	return bar;
});
barArrProm = fooArrProm.map((item: Foo) => {
	return bar;
});

barArrProm = fooArrProm.map((item: Foo, index: number, arrayLength: number) => {
	return bar;
}, {
	concurrency: 1
});
barArrProm = fooArrProm.map((item: Foo) => {
	return bar;
}, {
	concurrency: 1
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

barArrProm = fooArrProm.mapSeries((item: Foo, index: number, arrayLength: number) => {
	return bar;
});
barArrProm = fooArrProm.mapSeries((item: Foo) => {
	return bar;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

barProm = fooArrProm.reduce((memo: Bar, item: Foo, index: number, arrayLength: number) => {
	return memo;
});
barProm = fooArrProm.reduce((memo: Bar, item: Foo) => {
	return memo;
}, bar);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooArrProm = fooArrProm.filter((item: Foo, index: number, arrayLength: number) => {
	return bool;
});
fooArrProm = fooArrProm.filter((item: Foo) => {
	return bool;
});

fooArrProm = fooArrProm.filter((item: Foo, index: number, arrayLength: number) => {
	return bool;
}, {
	concurrency: 1
});
fooArrProm = fooArrProm.filter((item: Foo) => {
	return bool;
}, {
	concurrency: 1
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooArrProm = fooArrProm.each((item: Foo): Bar => bar);
fooArrProm = fooArrProm.each((item: Foo, index: number) => index ? bar : null);
fooArrProm = fooArrProm.each((item: Foo, index: number, arrayLength: number): Bar => bar);
fooArrProm = fooArrProm.each((item: Foo, index: number, arrayLength: number): Promise<Bar> => barProm);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooProm = new Promise.Promise<Foo>((resolve, reject) => {
	resolve(foo);
});
fooProm = Promise.Promise.try<Foo>(() => {
	return foo;
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

// - - - - - - - - - - - - - - - - -

fooProm = Promise.try(() => {
	return fooThen;
});

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

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

asyncfunc = Promise.method(() => {});
{
	const noArg: () => Promise<void> = Promise.method(() => {});
	const oneArg: (x1: number) => Promise<void> = Promise.method((x1: number) => {});
	const twoArg: (x1: number, x2: string) => Promise<void> = Promise.method((x1: number, x2: string) => {});
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooProm = Promise.resolve(foo);
fooProm = Promise.resolve(fooThen);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

voidProm = Promise.reject(reason);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooResolver = Promise.defer<Foo>();

fooResolver.resolve(foo);

fooResolver.reject(err);

fooResolver.callback = (err: any, value: Foo) => {};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooProm = Promise.cast(foo);
fooProm = Promise.cast(fooThen);

voidProm = Promise.bind(x);

bool = Promise.is(value);

Promise.longStackTraces();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// TODO enable delay

fooProm = Promise.delay(num, fooThen);
fooProm = Promise.delay(num, foo);
voidProm = Promise.delay(num);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

asyncfunc = Promise.promisify(f);
asyncfunc = Promise.promisify(f, obj);

obj = Promise.promisifyAll(obj);
anyProm = Promise.fromNode(nodeCallbackFunc);
anyProm = Promise.fromNode(nodeCallbackFuncErrorOnly);
anyProm = Promise.fromNode(nodeCallbackFunc, {multiArgs : true});
anyProm = Promise.fromNode(nodeCallbackFuncErrorOnly, {multiArgs : true});

anyProm = Promise.fromCallback(nodeCallbackFunc);
anyProm = Promise.fromCallback(nodeCallbackFuncErrorOnly);
anyProm = Promise.fromCallback(nodeCallbackFunc, {multiArgs : true});
anyProm = Promise.fromCallback(nodeCallbackFuncErrorOnly, {multiArgs : true});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

declare let util: any;

function defaultFilter(name: string, func: (...args: any[]) => any) {
    return util.isIdentifier(name) &&
        name.charAt(0) !== "_" &&
        !util.isClass(func);
}

function DOMPromisifier(originalMethod: (...args: any[]) => any) {
    // return a function
    return function promisified(this: object, ...args: any[]) {
        // which returns a promise
        return new Promise((resolve, reject) => {
            args.push(resolve, reject);
            originalMethod.apply(this, args);
        });
    };
}

obj = Promise.promisifyAll(obj, {
	suffix: "",
	filter: defaultFilter,
	promisifier: DOMPromisifier
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const generator1 = function*(a: number, b: string) { return "string"; };
const coroutine1 = Promise.coroutine<string, number, string>(generator1);
strProm = coroutine1(5, "foo");

const generator2 = function*(a: number, b: string) {
	yield foo;
	return bar;
};
const coroutine2 = Promise.coroutine<Bar, number, string>(generator2);
barProm = coroutine2(5, "foo");

const coroutineCustomYield = Promise.coroutine(generator1, { yieldHandler: (value) => "whatever" });
/*
 barProm = Promise.spawn<number>(f);
 */
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

BlueBird = Promise.getNewLibraryCopy();
BlueBird = Promise.noConflict();

Promise.onPossiblyUnhandledRejection((reason: any) => {});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// TODO expand tests to overloads
fooArrProm = Promise.all(fooThenArrThen);
fooArrProm = Promise.all(fooArrProm);
fooArrProm = Promise.all(fooThenArr);
fooArrProm = Promise.all(fooArr);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

objProm = Promise.props(objProm);
objProm = Promise.props(obj);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// TODO expand tests to overloads
fooProm = Promise.any(fooThenArrThen);
fooProm = Promise.any(fooArrProm);
fooProm = Promise.any(fooThenArr);
fooProm = Promise.any(fooArr);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// TODO expand tests to overloads
fooProm = Promise.race(fooThenArrThen);
fooProm = Promise.race(fooArrProm);
fooProm = Promise.race(fooThenArr);
fooProm = Promise.race(fooArr);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// TODO expand tests to overloads
fooArrProm = Promise.some(fooThenArrThen, num);
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
