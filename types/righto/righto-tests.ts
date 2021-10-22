import { ErrBack, Righto } from "righto";
import righto = require("righto");

function noReturnCPS(callback: ErrBack<[], undefined>) {
    callback();
}

function noArgsCPS(callback: ErrBack<[number], undefined>) {
    callback(void 0, 5);
}

function multiReturnCPS(a: number, callback: ErrBack<[number, string, boolean], Error>) {
    if (a < 0)
        callback(new Error("Cannot call this with an argument of 0!"));
    else
        callback(void 0, a + 1, a.toString(), true);
}

function divideNumbersCPS(a: number, b: number, callback: ErrBack<[number], Error>) {
    if (b === 0)
        callback(new Error("Cannot divide by a negative number"));
    else
        callback(void 0, a / b);
}

function divideNumbers(a: number, b: number) {
    return a / b;
}

//#region Test righto constructor
    // $ExpectType Righto<[number], Error>
    const rDivideNumbers1 = righto(divideNumbersCPS, 1, 1);
    // $ExpectType Righto<[number], Error>
    const rDivideNumbers2 = righto(divideNumbersCPS, 2, 1);

    // $ExpectType Righto<[number], Error>
    righto(divideNumbersCPS, rDivideNumbers1, rDivideNumbers2);
    // $ExpectType Righto<[number], Error>
    righto(divideNumbersCPS, rDivideNumbers1, new Promise<number>(r => r(5)));
    // $ExpectType Righto<[boolean], null>
    const rBool = righto<[], [boolean], null>((fn) => fn(null, true));
    // $ExpectError
    righto(divideNumbersCPS, rDivideNumbers1, "");
    // $ExpectError
    righto(divideNumbersCPS, rDivideNumbers1);
    // $ExpectError
    righto(divideNumbersCPS, rDivideNumbers1, 2, 3);
    // $ExpectError
    righto(divideNumbers, 5, 6);

    // $ExpectType Righto<[number, string, boolean], Error>
    const rMultiReturn = righto(multiReturnCPS, 1);
    // $ExpectType Righto<[], undefined>
    const rNoReturn = righto(noReturnCPS);
    // $ExpectType Righto<[number], undefined>
    righto(noArgsCPS);
    // $ExpectError
    righto(noArgsCPS, 5);

    righto(divideNumbersCPS, righto.after(rDivideNumbers1), rDivideNumbers1, rDivideNumbers2);
    righto(divideNumbersCPS, rDivideNumbers1, rDivideNumbers2, righto.after(rDivideNumbers1));
    righto(divideNumbersCPS, righto.after(rDivideNumbers1), rDivideNumbers1, rDivideNumbers2, righto.after(rDivideNumbers1));
    // $ExpectError
    righto(divideNumbersCPS, righto.after(rDivideNumbers1), rDivideNumbers1, righto.after(rDivideNumbers1), rDivideNumbers2);
//#endregion

//#region Test righto.fork
    // $ExpectType Promise<number>
    const promise = new Promise(righto.fork(rDivideNumbers1));
    // $ExpectType Promise<undefined>
    const promise2 = new Promise(righto.fork(rNoReturn));
    // $ExpectType Promise<number>
    const promise3 = new Promise(righto.fork(rMultiReturn));
//#endregion

//#region Test righto.iterate
    const generated = righto.iterate(function*(a: string, b: string, c: string): Generator<Righto<[string], never>, string, string> {
        const x = yield righto((done) => {
            done(void 0, 'x');
        });

        const y = yield righto((done) => {
            done(void 0, 'y');
        });

        return x + y + a + b + c;
    });

    // $ExpectType Righto<[string], never>
    const result = generated('a', 'b', 'c');

    result((error, result) => {
        result === 'xyabc';
    });
//#endregion

//#region Test immediate execution
    rMultiReturn();
    rMultiReturn((error, result) => {});
//#endregion

//#region Test righto.take
    // $ExpectType Righto<[any, any], Error>
    const taken = righto.take(rMultiReturn, 0, 1);
//#endregion

//#region Test righto.reduce
    function reduceTestFunc1(callback: ErrBack<[number], null>) {
        callback(null, 1);
    }
    function reduceTestFunc2(callback: ErrBack<[number], null>) {
        callback(null, 2);
    }
    // $ExpectType Righto<[number], null>
    const reduced1 = righto.reduce([righto(reduceTestFunc1), righto(reduceTestFunc2)]);

    function reduceTestFunc3(last: number, callback: ErrBack<[number], null>) {
        callback(null, last);
    }

    function reduceTestFunc4(last: number, callback: ErrBack<[number], null>) {
        callback(null, last + 2);
    }

    // $ExpectType Righto<[number], null>
    const reduced2 = righto.reduce(
            [reduceTestFunc3, reduceTestFunc4],
            (result, next) => { // Reducer
                return righto(next, result);
            },
            5 // Seed
        );
//#endregion

//#region Test righto.all
    // $ExpectType Righto<[number[]], Error>
    const rAll1 = righto.all([rDivideNumbers1, rDivideNumbers2]);
    // $ExpectType Righto<[any[]], any>
    const rAll2 = righto.all([rDivideNumbers1, rBool]);
//#endregion

//#region Test righto.sync
    const someNumber = righto((done: ErrBack<[number], null>) => {
        done(null, 5);
    });

    function numToString(value: number) {
        return value.toString();
    }

    // $ExpectType Righto<[string], any>
    const syncTask = righto.sync(numToString, someNumber);
    righto.sync(numToString, 5);
    // $ExpectError
    righto.sync(numToString, rBool);
//#endregion

//#region Test righto.from
    // $ExpectType Righto<[boolean], null>
    righto.from(rBool);
    // $ExpectType Righto<[number], any>
    righto.from(new Promise<number>(r => r(5)));
    // $ExpectType Righto<[string], undefined>
    righto.from("test");
    // $ExpectType Righto<[{ a: number; b: { a: number; }; }], undefined>
    righto.from({a: 5, b: {a: 5}});
//#endregion

//#region Test righto.value
    const rightoValue = righto.value(rBool);

    const rValIn = righto((value, callback) => {
        // $ExpectType Righto<[boolean], null>
        value;
    }, rightoValue);
//#endregion

//#region Test righto.get
    const rGetObj = righto((cb: ErrBack<[{a: number, b: number, c: number}], never>) => cb(void 0, {a: 1, b: 2, c: 3}));
    // $ExpectType Righto<[number], never>
    rGetObj.get(x => x.a);
    // $ExpectType Righto<[any], never>
    rGetObj.get('a');
    // $ExpectType Righto<[any], never>
    rGetObj.get(rDivideNumbers1);
//#endregion

//#region Test righto.surely
    // $ExpectType Righto<[[Error, string]], Error>
    const errorOrX = righto.surely((done: ErrBack<[string], Error>) => {
        done(new Error('borked'));
    });

    // $ExpectType Righto<[[Error, string]], Error>
    const errorOrY = righto.surely((done: ErrBack<[string], Error>) => {
        done(void 0, 'y');
    });

    const z = righto(([xError, x], [yError, y]) => {
        // $ExpectType Error
        xError;
        // $ExpectType string
        x;
        // $ExpectType Error
        yError;
        // $ExpectType string
        y;
    }, errorOrX, errorOrY);
//#endregion

//#region Test righto.handle
    function mightFail(callback: ErrBack<[string], string>) {
        if (Math.random() > 0.5) {
            callback('borked');
        } else {
            callback(void 0, 'result');
        }
    }

    function defaultString(error: string, callback: ErrBack<[string], string>) {
        callback(void 0, '');
    }

    const maybeAString = righto(mightFail);
    const aString = righto.handle(maybeAString, defaultString);

    aString((error, result) => {
        // $ExpectType string | undefined
        error;
        // $ExpectType string | undefined
        result;
    });
//#endregion

//#region Test righto.resolve
    const obj2Resolve = {
        rNum: rDivideNumbers1,
        str: "string",
        obj: {
            rBool,
            obj: {
                rNum: rDivideNumbers1
            }
        }
    };

    const resolvedObj = righto.resolve(obj2Resolve, false);
    // $ExpectType number
    resolvedObj.rNum;
    // $ExpectType Righto<[boolean], null>
    resolvedObj.obj.rBool;

    const resolvedObjRecursive = righto.resolve(obj2Resolve, true);
    // $ExpectType number
    resolvedObjRecursive.rNum;
    // $ExpectType number
    resolvedObjRecursive.obj.obj.rNum;
//#endregion

//#region Test righto.mate
    // $ExpectType Righto<[number, number], Error>
    const rMate = righto.mate<[number, number], Error>(rDivideNumbers1, rDivideNumbers2);

    rMate((error, stuff, otherStuff) => {
        // $ExpectType Error | undefined
        error;
        // $ExpectType number | undefined
        stuff;
        // $ExpectType number | undefined
        otherStuff;
    });
//#endregion

//#region Test righto.fail
    const testFail = rDivideNumbers1.get((value) => {
        if (!value) {
            return righto.fail('was falsey');
        }

        return value;
    });
//#endregion

//#region Test righto.proxy
    const rightoProxy = righto.proxy;
    // $ExpectType any
    const foo = rightoProxy((done: ErrBack<[object], null>) => {
            done(null, {
                    foo: {
                        bar: {
                            baz: 'hello'
                        }
                    }
                });
        });
//#endregion

//#region Test righto is functions
    // $ExpectType boolean
    righto.isRighto(rDivideNumbers1);
    // $ExpectType boolean
    righto.isThenable(rDivideNumbers1);
    // $ExpectType boolean
    righto.isResolvable(rDivideNumbers1);
//#endregion

//#region Test righto debug features
    righto._debug = true;
    rDivideNumbers1();
    rDivideNumbers1._trace();

    rDivideNumbers1._traceOnError = true;
    righto._autotraceOnError = true;
//#endregion
