// Tests by: Bart van der Schoor <https://github.com/Bartvds>

// Note: replicate changes to all overloads in both definition and test file
// Note: keep both static and instance members inline (so similar)

// Note: try to maintain the ordering and separators, and keep to the pattern

import * as Bluebird from "bluebird";

let obj: object = {};
let bool = false;
let num = 0;
let str = '';
let err: Error = new Error();
let x: any = 0;
let f: (...args: any[]) => any = () => {};
let asyncfunc: (...args: any[]) => Bluebird<any>;
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

let numProm: Bluebird<number>;
let strProm: Bluebird<string>;
let anyProm: Bluebird<any>;
let boolProm: Bluebird<boolean>;
let objProm: Bluebird<object> = Bluebird.resolve(obj);
let voidProm: Bluebird<void>;

let fooProm: Bluebird<Foo> = Bluebird.resolve(foo);
let barProm: Bluebird<Bar> = Bluebird.resolve(bar);
let fooOrBarProm: Bluebird<Foo | Bar>;
let bazProm: Bluebird<Baz> = Bluebird.resolve(baz);
let quxProm: Bluebird<Qux> = Bluebird.resolve(qux);

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

let numArrProm: Bluebird<number[]>;
let strArrProm: Bluebird<string[]>;
let anyArrProm: Bluebird<any[]>;

let fooArrProm: Bluebird<Foo[]> = Bluebird.resolve(fooArr);
let barArrProm: Bluebird<Bar[]>;
let fooOrNullArrProm: Bluebird<Array<Foo | null>> = Bluebird.resolve(fooArr);

// - - - - - - - - - - - - - - - - -

let numArrThen: PromiseLike<number[]>;
let strArrThen: PromiseLike<string[]>;
let anyArrThen: PromiseLike<any[]>;

let fooArrThen: PromiseLike<Foo[]> = fooArrProm;
let barArrThen: PromiseLike<Bar[]>;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

let numPromArr: Array<Bluebird<number>>;
let strPromArr: Array<Bluebird<string>>;
let anyPromArr: Array<Bluebird<any>>;

let fooPromArr: Array<Bluebird<Foo>>;
let barPromArr: Array<Bluebird<Bar>>;

// - - - - - - - - - - - - - - - - -

let numThenArr: Array<PromiseLike<number>>;
let strThenArr: Array<PromiseLike<string>>;
let anyThenArr: Array<PromiseLike<any>>;

let fooThenArr: Array<PromiseLike<Foo>> = [fooThen];
let barThenArr: Array<PromiseLike<Bar>>;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// booya!
let fooThenArrThen: PromiseLike<Array<PromiseLike<Foo>>> = Bluebird.resolve(fooThenArr);

let fooResolver: Bluebird.Resolver<Foo>;
let fooInspection: Bluebird.Inspection<Foo>;
let fooInspectionPromise: Bluebird<Bluebird.Inspection<Foo>>;

let fooInspectionArrProm: Bluebird<Array<Bluebird.Inspection<Foo>>>;

let BlueBird: typeof Bluebird;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

let nativeFooProm: Promise<Foo>;
let nativeBarProm: Promise<Bar>;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

let version: string = Bluebird.version;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

let nodeCallbackFunc = (callback: (err: any, result: string) => void) => {};
let nodeCallbackFuncErrorOnly = (callback: (err: any) => void) => {};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooThen = fooProm;
barThen = barProm;

nativeFooProm = fooProm;
nativeBarProm = barProm;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooProm = new Bluebird((resolve: (value: Foo) => void, reject: (reason: any) => void) => {
    if (bool) {
        resolve(foo);
    } else {
        reject(new Error(str));
    }
});
fooProm = new Bluebird((resolve: (value: Foo) => void) => {
    if (bool) {
        resolve(foo);
    }
});

// - - - - - - - - - - - - - - - - - - - - - - -

// needs a hint when used untyped?
fooProm = new Bluebird<Foo>((resolve, reject) => {
    if (bool) {
        resolve(fooThen);
    } else {
        reject(new Error(str));
    }
});
fooProm = new Bluebird<Foo>((resolve) => {
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
    return Bluebird.resolve(bar);
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
fooProm.catch(Bluebird.CancellationError, (reason: any) => {
    return;
});
// $ExpectType Bluebird<void | Foo>
fooProm.caught(Error, (reason: any) => {
    return;
});
// $ExpectType Bluebird<void | Foo>
fooProm.caught(Bluebird.CancellationError, (reason: any) => {
    return;
});

fooOrBarProm = fooProm.catch(Error, (reason: any) => {
    return bar;
});
fooOrBarProm = fooProm.catch(Bluebird.CancellationError, (reason: any) => {
    return bar;
});
fooOrBarProm = fooProm.caught(Error, (reason: any) => {
    return bar;
});
fooOrBarProm = fooProm.caught(Bluebird.CancellationError, (reason: any) => {
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
    return Bluebird.resolve("foo");
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

// $ExpectType Bluebird<Foo[]>
fooArrProm = fooArrProm.all();

// $ExpectType Bluebird<(Foo | null)[]>
fooOrNullArrProm = fooOrNullArrProm.all();

// $ExpectType Bluebird<never>
fooProm.all();

fooProm = fooArrProm.any();

// $ExpectType Bluebird<never>
fooProm.any();

// $ExpectType Bluebird<Foo[]>
fooArrProm = fooArrProm.some(num);

// $ExpectType Bluebird<(Foo | null)[]>
fooOrNullArrProm = fooOrNullArrProm.some(num);

// $ExpectType Bluebird<never>
fooProm.some(num);

fooProm = fooArrProm.race();

// $ExpectType Bluebird<never>
fooProm.race();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

let propsValue: { num: number, str: string };
Bluebird.resolve({ num: 1, str: Bluebird.resolve('a') }).props().then(val => { propsValue = val; });
Bluebird.props({ num: 1, str: Bluebird.resolve('a') }).then(val => { propsValue = val; });
Bluebird.props(Bluebird.props({ num: 1, str: Bluebird.resolve('a') })).then(val => { propsValue = val; });

let propsMapValue: Map<number, string>;
Bluebird.resolve(new Map<number, string>()).props().then(val => { propsMapValue = val; });
Bluebird.resolve(new Map<number, PromiseLike<string>>()).props().then(val => { propsMapValue = val; });
Bluebird.props(new Map<number, string>()).then(val => { propsMapValue = val; });
Bluebird.props(new Map<number, PromiseLike<string>>()).then(val => { propsMapValue = val; });

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

Bluebird.all([fooProm, barProm]).then(result => {
      foo = result[0];
      bar = result[1];
});

Bluebird.all([fooProm, fooProm]).then(result => {
    foo = result[0];
    foo = result[1];
});

Bluebird.all([fooProm, barProm, bazProm]).then(result => {
    foo = result[0];
    bar = result[1];
    baz = result[2];
});

Bluebird.all([fooProm, barProm, fooProm]).then(result => {
    foo = result[0];
    bar = result[1];
    foo = result[2];
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

Bluebird.allSettled([fooProm, barProm]).then(result => {
    foo = result[0].value();
    bar = result[1].value();
});

Bluebird.allSettled([fooProm, fooProm]).then(result => {
    foo = result[0].value();
    foo = result[1].value();
});

Bluebird.allSettled([fooProm, barProm, bazProm]).then(result => {
    foo = result[0].value();
    bar = result[1].value();
    baz = result[2].value();
});

Bluebird.allSettled([fooProm, barProm, fooProm]).then(result => {
    foo = result[0].value();
    bar = result[1].value();
    foo = result[2].value();
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
fooArrProm = fooArrProm.each((item: Foo, index: number, arrayLength: number): Bluebird<Bar> => barProm);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooProm = new Bluebird.Promise<Foo>((resolve, reject) => {
    resolve(foo);
});
fooProm = Bluebird.Promise.try<Foo>(() => {
    return foo;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function getMaybePromise(): Foo|Bluebird<Foo> {
    return foo;
}

fooProm = Bluebird.try(() => {
    return getMaybePromise();
});
fooProm = Bluebird.try<Foo>(() => {
    return getMaybePromise();
});
fooProm = Bluebird.try(() => {
    return foo;
});

// - - - - - - - - - - - - - - - - -

fooProm = Bluebird.try(() => {
    return fooThen;
});

// - - - - - - - - - - - - - - - - -

fooProm = Bluebird.try(() => {
    if (fooProm) {
        return fooProm;
    }
    return foo;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooProm = Bluebird.attempt(() => {
    return getMaybePromise();
});
fooProm = Bluebird.attempt<Foo>(() => {
    return getMaybePromise();
});
fooProm = Bluebird.attempt(() => {
    return foo;
});

// - - - - - - - - - - - - - - - - -

fooProm = Bluebird.attempt(() => {
    if (fooProm) {
        return fooProm;
    }
    return foo;
});

// - - - - - - - - - - - - - - - - -

fooProm = Bluebird.attempt(() => {
    return fooThen;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

asyncfunc = Bluebird.method(() => {});
{
    const noArg: () => Bluebird<void> = Bluebird.method(() => {});
    const oneArg: (x1: number) => Bluebird<void> = Bluebird.method((x1: number) => {});
    const twoArg: (x1: number, x2: string) => Bluebird<void> = Bluebird.method((x1: number, x2: string) => {});
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooProm = Bluebird.resolve(foo);
fooProm = Bluebird.resolve(fooThen);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

voidProm = Bluebird.reject(reason);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooResolver = Bluebird.defer<Foo>();

fooResolver.resolve(foo);

fooResolver.reject(err);

fooResolver.callback = (err: any, value: Foo) => {};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooProm = Bluebird.cast(foo);
fooProm = Bluebird.cast(fooThen);

voidProm = Bluebird.bind(x);

bool = Bluebird.is(value);

Bluebird.longStackTraces();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// TODO enable delay

fooProm = Bluebird.delay(num, fooThen);
fooProm = Bluebird.delay(num, foo);
voidProm = Bluebird.delay(num);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

asyncfunc = Bluebird.promisify(f);
asyncfunc = Bluebird.promisify(f, obj);

obj = Bluebird.promisifyAll(obj);
anyProm = Bluebird.fromNode(nodeCallbackFunc);
anyProm = Bluebird.fromNode(nodeCallbackFuncErrorOnly);
anyProm = Bluebird.fromNode(nodeCallbackFunc, {multiArgs : true});
anyProm = Bluebird.fromNode(nodeCallbackFuncErrorOnly, {multiArgs : true});

anyProm = Bluebird.fromCallback(nodeCallbackFunc);
anyProm = Bluebird.fromCallback(nodeCallbackFuncErrorOnly);
anyProm = Bluebird.fromCallback(nodeCallbackFunc, {multiArgs : true});
anyProm = Bluebird.fromCallback(nodeCallbackFuncErrorOnly, {multiArgs : true});

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
        return new Bluebird((resolve, reject) => {
            args.push(resolve, reject);
            originalMethod.apply(this, args);
        });
    };
}

obj = Bluebird.promisifyAll(obj, {
    suffix: "",
    filter: defaultFilter,
    promisifier: DOMPromisifier
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const generator1 = function*(a: number, b: string) { return "string"; };
const coroutine1 = Bluebird.coroutine<string, number, string>(generator1);
strProm = coroutine1(5, "foo");

const generator2 = function*(a: number, b: string) {
    yield foo;
    return bar;
};
const coroutine2 = Bluebird.coroutine<Bar, number, string>(generator2);
barProm = coroutine2(5, "foo");

const coroutineCustomYield = Bluebird.coroutine(generator1, { yieldHandler: (value) => "whatever" });
/*
 barProm = Bluebird.spawn<number>(f);
 */
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

BlueBird = Bluebird.getNewLibraryCopy();
BlueBird = Bluebird.noConflict();

Bluebird.onPossiblyUnhandledRejection((reason: any) => {});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// TODO expand tests to overloads
fooArrProm = Bluebird.all(fooThenArrThen);
fooArrProm = Bluebird.all(fooArrProm);
fooArrProm = Bluebird.all(fooThenArr);
fooArrProm = Bluebird.all(fooArr);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

objProm = Bluebird.props(objProm);
objProm = Bluebird.props(obj);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// TODO expand tests to overloads
fooProm = Bluebird.any(fooThenArrThen);
fooProm = Bluebird.any(fooArrProm);
fooProm = Bluebird.any(fooThenArr);
fooProm = Bluebird.any(fooArr);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// TODO expand tests to overloads
fooProm = Bluebird.race(fooThenArrThen);
fooProm = Bluebird.race(fooArrProm);
fooProm = Bluebird.race(fooThenArr);
fooProm = Bluebird.race(fooArr);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// TODO expand tests to overloads
fooArrProm = Bluebird.some(fooThenArrThen, num);
fooArrProm = Bluebird.some(fooThenArr, num);
fooArrProm = Bluebird.some(fooArr, num);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

fooArrProm = Bluebird.join(foo, foo, foo);
fooArrProm = Bluebird.join(fooThen, fooThen, fooThen);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// map()

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooThenArrThen

barArrProm = Bluebird.map(fooThenArrThen, (item: Foo) => {
    return bar;
});
barArrProm = Bluebird.map(fooThenArrThen, (item: Foo) => {
    return barThen;
});
barArrProm = Bluebird.map(fooThenArrThen, (item: Foo, index: number, arrayLength: number) => {
    return bar;
});
barArrProm = Bluebird.map(fooThenArrThen, (item: Foo, index: number, arrayLength: number) => {
    return barThen;
});

barArrProm = Bluebird.map(fooThenArrThen, (item: Foo) => {
    return bar;
}, {
    concurrency: 1
});
barArrProm = Bluebird.map(fooThenArrThen, (item: Foo) => {
    return barThen;
}, {
    concurrency: 1
});
barArrProm = Bluebird.map(fooThenArrThen, (item: Foo, index: number, arrayLength: number) => {
    return bar;
}, {
    concurrency: 1
});
barArrProm = Bluebird.map(fooThenArrThen, (item: Foo, index: number, arrayLength: number) => {
    return barThen;
}, {
    concurrency: 1
});
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooArrThen

barArrProm = Bluebird.map(fooArrThen, (item: Foo) => {
    return bar;
});
barArrProm = Bluebird.map(fooArrThen, (item: Foo) => {
    return barThen;
});
barArrProm = Bluebird.map(fooArrThen, (item: Foo, index: number, arrayLength: number) => {
    return bar;
});
barArrProm = Bluebird.map(fooArrThen, (item: Foo, index: number, arrayLength: number) => {
    return barThen;
});

barArrProm = Bluebird.map(fooArrThen, (item: Foo) => {
    return bar;
}, {
    concurrency: 1
});
barArrProm = Bluebird.map(fooArrThen, (item: Foo) => {
    return barThen;
}, {
    concurrency: 1
});
barArrProm = Bluebird.map(fooArrThen, (item: Foo, index: number, arrayLength: number) => {
    return bar;
}, {
    concurrency: 1
});
barArrProm = Bluebird.map(fooArrThen, (item: Foo, index: number, arrayLength: number) => {
    return barThen;
}, {
    concurrency: 1
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooThenArr

barArrProm = Bluebird.map(fooThenArr, (item: Foo) => {
    return bar;
});
barArrProm = Bluebird.map(fooThenArr, (item: Foo) => {
    return barThen;
});
barArrProm = Bluebird.map(fooThenArr, (item: Foo, index: number, arrayLength: number) => {
    return bar;
});
barArrProm = Bluebird.map(fooThenArr, (item: Foo, index: number, arrayLength: number) => {
    return barThen;
});

barArrProm = Bluebird.map(fooThenArr, (item: Foo) => {
    return bar;
}, {
    concurrency: 1
});
barArrProm = Bluebird.map(fooThenArr, (item: Foo) => {
    return barThen;
}, {
    concurrency: 1
});
barArrProm = Bluebird.map(fooThenArr, (item: Foo, index: number, arrayLength: number) => {
    return bar;
}, {
    concurrency: 1
});
barArrProm = Bluebird.map(fooThenArr, (item: Foo, index: number, arrayLength: number) => {
    return barThen;
}, {
    concurrency: 1
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooArr

barArrProm = Bluebird.map(fooArr, (item: Foo) => {
    return bar;
});
barArrProm = Bluebird.map(fooArr, (item: Foo) => {
    return barThen;
});
barArrProm = Bluebird.map(fooArr, (item: Foo, index: number, arrayLength: number) => {
    return bar;
});
barArrProm = Bluebird.map(fooArr, (item: Foo, index: number, arrayLength: number) => {
    return barThen;
});

barArrProm = Bluebird.map(fooArr, (item: Foo) => {
    return bar;
}, {
    concurrency: 1
});
barArrProm = Bluebird.map(fooArr, (item: Foo) => {
    return barThen;
}, {
    concurrency: 1
});
barArrProm = Bluebird.map(fooArr, (item: Foo, index: number, arrayLength: number) => {
    return bar;
}, {
    concurrency: 1
});
barArrProm = Bluebird.map(fooArr, (item: Foo, index: number, arrayLength: number) => {
    return barThen;
}, {
    concurrency: 1
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// mapSeries()

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooThenArrThen

barArrProm = Bluebird.mapSeries(fooThenArrThen, (item: Foo) => {
    return bar;
});
barArrProm = Bluebird.mapSeries(fooThenArrThen, (item: Foo) => {
    return barThen;
});
barArrProm = Bluebird.mapSeries(fooThenArrThen, (item: Foo, index: number, arrayLength: number) => {
    return bar;
});
barArrProm = Bluebird.mapSeries(fooThenArrThen, (item: Foo, index: number, arrayLength: number) => {
    return barThen;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooArrThen

barArrProm = Bluebird.mapSeries(fooArrThen, (item: Foo) => {
    return bar;
});
barArrProm = Bluebird.mapSeries(fooArrThen, (item: Foo) => {
    return barThen;
});
barArrProm = Bluebird.mapSeries(fooArrThen, (item: Foo, index: number, arrayLength: number) => {
    return bar;
});
barArrProm = Bluebird.mapSeries(fooArrThen, (item: Foo, index: number, arrayLength: number) => {
    return barThen;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooThenArr

barArrProm = Bluebird.mapSeries(fooThenArr, (item: Foo) => {
    return bar;
});
barArrProm = Bluebird.mapSeries(fooThenArr, (item: Foo) => {
    return barThen;
});
barArrProm = Bluebird.mapSeries(fooThenArr, (item: Foo, index: number, arrayLength: number) => {
    return bar;
});
barArrProm = Bluebird.mapSeries(fooThenArr, (item: Foo, index: number, arrayLength: number) => {
    return barThen;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooArr

barArrProm = Bluebird.mapSeries(fooArr, (item: Foo) => {
    return bar;
});
barArrProm = Bluebird.mapSeries(fooArr, (item: Foo) => {
    return barThen;
});
barArrProm = Bluebird.mapSeries(fooArr, (item: Foo, index: number, arrayLength: number) => {
    return bar;
});
barArrProm = Bluebird.mapSeries(fooArr, (item: Foo, index: number, arrayLength: number) => {
    return barThen;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// reduce()

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooThenArrThen

barProm = Bluebird.reduce(fooThenArrThen, (memo: Bar, item: Foo) => {
    return memo;
}, bar);
barProm = Bluebird.reduce(fooThenArrThen, (memo: Bar, item: Foo) => {
    return barThen;
}, bar);
barProm = Bluebird.reduce(fooThenArrThen, (memo: Bar, item: Foo, index: number, arrayLength: number) => {
    return memo;
}, bar);
barProm = Bluebird.reduce(fooThenArrThen, (memo: Bar, item: Foo, index: number, arrayLength: number) => {
    return barThen;
}, bar);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooArrThen

barProm = Bluebird.reduce(fooArrThen, (memo: Bar, item: Foo) => {
    return memo;
}, bar);
barProm = Bluebird.reduce(fooArrThen, (memo: Bar, item: Foo) => {
    return barThen;
}, bar);
barProm = Bluebird.reduce(fooArrThen, (memo: Bar, item: Foo, index: number, arrayLength: number) => {
    return memo;
}, bar);
barProm = Bluebird.reduce(fooArrThen, (memo: Bar, item: Foo, index: number, arrayLength: number) => {
    return barThen;
}, bar);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooThenArr

barProm = Bluebird.reduce(fooThenArr, (memo: Bar, item: Foo) => {
    return memo;
}, bar);
barProm = Bluebird.reduce(fooThenArr, (memo: Bar, item: Foo) => {
    return barThen;
}, bar);
barProm = Bluebird.reduce(fooThenArr, (memo: Bar, item: Foo, index: number, arrayLength: number) => {
    return memo;
}, bar);
barProm = Bluebird.reduce(fooThenArr, (memo: Bar, item: Foo, index: number, arrayLength: number) => {
    return barThen;
}, bar);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooArr

barProm = Bluebird.reduce(fooArr, (memo: Bar, item: Foo) => {
    return memo;
}, bar);
barProm = Bluebird.reduce(fooArr, (memo: Bar, item: Foo) => {
    return barThen;
}, bar);
barProm = Bluebird.reduce(fooArr, (memo: Bar, item: Foo, index: number, arrayLength: number) => {
    return memo;
}, bar);
barProm = Bluebird.reduce(fooArr, (memo: Bar, item: Foo, index: number, arrayLength: number) => {
    return barThen;
}, bar);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// filter()

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooThenArrThen

fooArrProm = Bluebird.filter(fooThenArrThen, (item: Foo) => {
    return bool;
});
fooArrProm = Bluebird.filter(fooThenArrThen, (item: Foo) => {
    return boolThen;
});
fooArrProm = Bluebird.filter(fooThenArrThen, (item: Foo, index: number, arrayLength: number) => {
    return bool;
});
fooArrProm = Bluebird.filter(fooThenArrThen, (item: Foo, index: number, arrayLength: number) => {
    return boolThen;
});

fooArrProm = Bluebird.filter(fooThenArrThen, (item: Foo) => {
    return bool;
}, {
    concurrency: 1
});
fooArrProm = Bluebird.filter(fooThenArrThen, (item: Foo) => {
    return boolThen;
}, {
    concurrency: 1
});
fooArrProm = Bluebird.filter(fooThenArrThen, (item: Foo, index: number, arrayLength: number) => {
    return bool;
}, {
    concurrency: 1
});
fooArrProm = Bluebird.filter(fooThenArrThen, (item: Foo, index: number, arrayLength: number) => {
    return boolThen;
}, {
    concurrency: 1
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooArrThen

fooArrProm = Bluebird.filter(fooArrThen, (item: Foo) => {
    return bool;
});
fooArrProm = Bluebird.filter(fooArrThen, (item: Foo) => {
    return boolThen;
});
fooArrProm = Bluebird.filter(fooArrThen, (item: Foo, index: number, arrayLength: number) => {
    return bool;
});
fooArrProm = Bluebird.filter(fooArrThen, (item: Foo, index: number, arrayLength: number) => {
    return boolThen;
});

fooArrProm = Bluebird.filter(fooArrThen, (item: Foo) => {
    return bool;
}, {
    concurrency: 1
});
fooArrProm = Bluebird.filter(fooArrThen, (item: Foo) => {
    return boolThen;
}, {
    concurrency: 1
});
fooArrProm = Bluebird.filter(fooArrThen, (item: Foo, index: number, arrayLength: number) => {
    return bool;
}, {
    concurrency: 1
});
fooArrProm = Bluebird.filter(fooArrThen, (item: Foo, index: number, arrayLength: number) => {
    return boolThen;
}, {
    concurrency: 1
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooThenArr

fooArrProm = Bluebird.filter(fooThenArr, (item: Foo) => {
    return bool;
});
fooArrProm = Bluebird.filter(fooThenArr, (item: Foo) => {
    return boolThen;
});
fooArrProm = Bluebird.filter(fooThenArr, (item: Foo, index: number, arrayLength: number) => {
    return bool;
});
fooArrProm = Bluebird.filter(fooThenArr, (item: Foo, index: number, arrayLength: number) => {
    return boolThen;
});

fooArrProm = Bluebird.filter(fooThenArr, (item: Foo) => {
    return bool;
}, {
    concurrency: 1
});
fooArrProm = Bluebird.filter(fooThenArr, (item: Foo) => {
    return boolThen;
}, {
    concurrency: 1
});
fooArrProm = Bluebird.filter(fooThenArr, (item: Foo, index: number, arrayLength: number) => {
    return bool;
}, {
    concurrency: 1
});
fooArrProm = Bluebird.filter(fooThenArr, (item: Foo, index: number, arrayLength: number) => {
    return boolThen;
}, {
    concurrency: 1
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooArr

fooArrProm = Bluebird.filter(fooArr, (item: Foo) => {
    return bool;
});
fooArrProm = Bluebird.filter(fooArr, (item: Foo) => {
    return boolThen;
});
fooArrProm = Bluebird.filter(fooArr, (item: Foo, index: number, arrayLength: number) => {
    return bool;
});
fooArrProm = Bluebird.filter(fooArr, (item: Foo, index: number, arrayLength: number) => {
    return boolThen;
});

fooArrProm = Bluebird.filter(fooArr, (item: Foo) => {
    return bool;
}, {
    concurrency: 1
});
fooArrProm = Bluebird.filter(fooArr, (item: Foo) => {
    return boolThen;
}, {
    concurrency: 1
});
fooArrProm = Bluebird.filter(fooArr, (item: Foo, index: number, arrayLength: number) => {
    return bool;
}, {
    concurrency: 1
});
fooArrProm = Bluebird.filter(fooArr, (item: Foo, index: number, arrayLength: number) => {
    return boolThen;
}, {
    concurrency: 1
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// each()

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooThenArrThen

fooArrThen = Bluebird.each(fooThenArrThen, (item: Foo) => bar);
fooArrThen = Bluebird.each(fooThenArrThen, (item: Foo) => barThen);
fooArrThen = Bluebird.each(fooThenArrThen, (item: Foo, index: number, arrayLength: number) => bar);
fooArrThen = Bluebird.each(fooThenArrThen, (item: Foo, index: number, arrayLength: number) => barThen);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooArrThen

fooArrThen = Bluebird.each(fooArrThen, (item: Foo) => bar);
fooArrThen = Bluebird.each(fooArrThen, (item: Foo) => barThen);
fooArrThen = Bluebird.each(fooArrThen, (item: Foo, index: number, arrayLength: number) => bar);
fooArrThen = Bluebird.each(fooArrThen, (item: Foo, index: number, arrayLength: number) => barThen);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooThenArr

fooArrThen = Bluebird.each(fooThenArr, (item: Foo) => bar);
fooArrThen = Bluebird.each(fooThenArr, (item: Foo) => barThen);
fooArrThen = Bluebird.each(fooThenArr, (item: Foo, index: number, arrayLength: number) => bar);
fooArrThen = Bluebird.each(fooThenArr, (item: Foo, index: number, arrayLength: number) => barThen);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// fooArr

fooArrThen = Bluebird.each(fooArr, (item: Foo) => bar);
fooArrThen = Bluebird.each(fooArr, (item: Foo) => barThen);
fooArrThen = Bluebird.each(fooArr, (item: Foo, index: number, arrayLength: number) => bar);
fooArrThen = Bluebird.each(fooArr, (item: Foo, index: number, arrayLength: number) => barThen);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
