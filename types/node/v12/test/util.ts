import * as util from 'util';
import assert = require('assert');
import { readFile } from 'fs';

{
    // Old and new util.inspect APIs
    util.inspect(["This is nice"], false, 5);
    util.inspect(["This is nice"], false, null);
    util.inspect(["This is nice"], {
        colors: true,
        depth: 5,
        customInspect: false,
        showProxy: true,
        maxArrayLength: 10,
        breakLength: 20,
        compact: true,
        sorted(a, b) {
            return b.localeCompare(a);
        },
        getters: false,
    });
    util.inspect(["This is nice"], {
        colors: true,
        depth: null,
        customInspect: false,
        showProxy: true,
        maxArrayLength: null,
        breakLength: Infinity,
        compact: false,
        sorted: true,
        getters: 'set',
    });
    util.inspect(["This is nice"], {
        compact: 42,
    });
    assert(typeof util.inspect.custom === 'symbol');

    util.inspect.replDefaults = {
        colors: true,
    };

    util.format('%s:%s', 'foo');
    util.format('%s:%s', 'foo', 'bar', 'baz');
    util.format(1, 2, 3);
    util.format('%% %s');
    util.format();

    util.formatWithOptions({ colors: true }, 'See object %O', { foo: 42 });

    // util.callbackify
    // tslint:disable-next-line no-unnecessary-class
    class callbackifyTest {
        static fn(): Promise<void> {
            assert(arguments.length === 0);

            return Promise.resolve();
        }

        static fnE(): Promise<void> {
            assert(arguments.length === 0);

            return Promise.reject(new Error('fail'));
        }

        static fnT1(arg1: string): Promise<void> {
            assert(arguments.length === 1 && arg1 === 'parameter');

            return Promise.resolve();
        }

        static fnT1E(arg1: string): Promise<void> {
            assert(arguments.length === 1 && arg1 === 'parameter');

            return Promise.reject(new Error('fail'));
        }

        static fnTResult(): Promise<string> {
            assert(arguments.length === 0);

            return Promise.resolve('result');
        }

        static fnTResultE(): Promise<string> {
            assert(arguments.length === 0);

            return Promise.reject(new Error('fail'));
        }

        static fnT1TResult(arg1: string): Promise<string> {
            assert(arguments.length === 1 && arg1 === 'parameter');

            return Promise.resolve('result');
        }

        static fnT1TResultE(arg1: string): Promise<string> {
            assert(arguments.length === 1 && arg1 === 'parameter');

            return Promise.reject(new Error('fail'));
        }

        static test(): void {
            const cfn = util.callbackify(callbackifyTest.fn);
            const cfnE = util.callbackify(callbackifyTest.fnE);
            const cfnT1 = util.callbackify(callbackifyTest.fnT1);
            const cfnT1E = util.callbackify(callbackifyTest.fnT1E);
            const cfnTResult = util.callbackify(callbackifyTest.fnTResult);
            const cfnTResultE = util.callbackify(callbackifyTest.fnTResultE);
            const cfnT1TResult = util.callbackify(callbackifyTest.fnT1TResult);
            const cfnT1TResultE = util.callbackify(callbackifyTest.fnT1TResultE);

            cfn((err: NodeJS.ErrnoException | null, ...args: string[]) => assert(err === null && args.length === 1 && args[0] === undefined));
            cfnE((err: NodeJS.ErrnoException, ...args: string[]) => assert(err.message === 'fail' && args.length === 0));
            cfnT1('parameter', (err: NodeJS.ErrnoException | null, ...args: string[]) => assert(err === null && args.length === 1 && args[0] === undefined));
            cfnT1E('parameter', (err: NodeJS.ErrnoException, ...args: string[]) => assert(err.message === 'fail' && args.length === 0));
            cfnTResult((err: NodeJS.ErrnoException | null, ...args: string[]) => assert(err === null && args.length === 1 && args[0] === 'result'));
            cfnTResultE((err: NodeJS.ErrnoException, ...args: string[]) => assert(err.message === 'fail' && args.length === 0));
            cfnT1TResult('parameter', (err: NodeJS.ErrnoException | null, ...args: string[]) => assert(err === null && args.length === 1 && args[0] === 'result'));
            cfnT1TResultE('parameter', (err: NodeJS.ErrnoException, ...args: string[]) => assert(err.message === 'fail' && args.length === 0));
        }
    }
    callbackifyTest.test();

    // util.promisify
    const readPromised = util.promisify(readFile);
    const sampleRead: Promise<any> = readPromised(__filename).then((data: Buffer): void => { }).catch((error: Error): void => { });
    const arg0: () => Promise<number> = util.promisify((cb: (err: Error | null, result: number) => void): void => { });
    const arg0NoResult: () => Promise<any> = util.promisify((cb: (err: Error | null) => void): void => { });
    const arg1: (arg: string) => Promise<number> = util.promisify((arg: string, cb: (err: Error | null, result: number) => void): void => { });
    const arg1UnknownError: (arg: string) => Promise<number> = util.promisify((arg: string, cb: (err: unknown, result: number) => void): void => { });
    const arg1NoResult: (arg: string) => Promise<any> = util.promisify((arg: string, cb: (err: Error | null) => void): void => { });
    const cbOptionalError: () => Promise<void | {}> = util.promisify((cb: (err?: Error | null) => void): void => { cb(); }); // tslint:disable-line void-return
    assert(typeof util.promisify.custom === 'symbol');
    // util.deprecate
    const foo = () => {};
    // $ExpectType () => void
    util.deprecate(foo, 'foo() is deprecated, use bar() instead');
    // $ExpectType <T extends Function>(fn: T, message: string, code?: string | undefined) => T
    util.deprecate(util.deprecate, 'deprecate() is deprecated, use bar() instead');
    // $ExpectType <T extends Function>(fn: T, message: string, code?: string | undefined) => T
    util.deprecate(util.deprecate, 'deprecate() is deprecated, use bar() instead', 'DEP0001');

    // util.isDeepStrictEqual
    util.isDeepStrictEqual({foo: 'bar'}, {foo: 'bar'});

    // util.TextDecoder()
    const td = new util.TextDecoder();
    new util.TextDecoder("utf-8");
    new util.TextDecoder("utf-8", { fatal: true });
    new util.TextDecoder("utf-8", { fatal: true, ignoreBOM: true });
    const ignoreBom: boolean = td.ignoreBOM;
    const fatal: boolean = td.fatal;
    const encoding: string = td.encoding;
    td.decode(new Int8Array(1));
    td.decode(new Int16Array(1));
    td.decode(new Int32Array(1));
    td.decode(new Uint8Array(1));
    td.decode(new Uint16Array(1));
    td.decode(new Uint32Array(1));
    td.decode(new Uint8ClampedArray(1));
    td.decode(new Float32Array(1));
    td.decode(new Float64Array(1));
    td.decode(new DataView(new Int8Array(1).buffer));
    td.decode(new ArrayBuffer(1));
    td.decode(null);
    td.decode(null, { stream: true });
    td.decode(new Int8Array(1), { stream: true });
    const decode: string = td.decode(new Int8Array(1));

    // util.TextEncoder()
    const te = new util.TextEncoder();
    const teEncoding: string = te.encoding;
    const teEncodeRes: Uint8Array = te.encode("TextEncoder");

    const encIntoRes: util.EncodeIntoResult = te.encodeInto('asdf', new Uint8Array(16));

    // util.types
    let b: boolean;
    b = util.types.isBigInt64Array(15);
    b = util.types.isBigUint64Array(15);
    b = util.types.isModuleNamespaceObject(15);

    const f = (v: any) => {
        if (util.types.isArrayBufferView(v)) {
            const abv: ArrayBufferView  = v;
        }
    };

    // tslint:disable-next-line:no-construct
    const maybeBoxed: number | Number = new Number(1);
    if (util.types.isBoxedPrimitive(maybeBoxed)) {
        const boxed: Number = maybeBoxed;
    }
    const maybeBoxed2: number | Number = 1;
    if (!util.types.isBoxedPrimitive(maybeBoxed2)) {
        const boxed: number = maybeBoxed2;
    }
}

function testUtilTypes(
    object: unknown,
    readonlySetOrArray: ReadonlySet<any> | ReadonlyArray<any>,
    readonlyMapOrRecord: ReadonlyMap<any, any> | Record<any, any>,
) {
    if (util.types.isAnyArrayBuffer(object)) {
        const expected: ArrayBufferLike = object;
    }
    if (util.types.isArgumentsObject(object)) {
        object; // $ExpectType IArguments
    }
    if (util.types.isArrayBufferView(object)) {
        object; // $ExpectType ArrayBufferView
    }
    if (util.types.isBigInt64Array(object)) {
        object; // $ExpectType BigInt64Array
    }
    if (util.types.isBigUint64Array(object)) {
        object; // $ExpectType BigUint64Array
    }
    if (util.types.isBooleanObject(object)) {
        object; // $ExpectType Boolean
    }
    if (util.types.isBoxedPrimitive(object)) {
        object; // $ExpectType String | Number | Boolean | BigInt | Symbol
    }
    if (util.types.isDataView(object)) {
        object; // $ExpectType DataView
    }
    if (util.types.isDate(object)) {
        object; // $ExpectType Date
    }
    if (util.types.isFloat32Array(object)) {
        object; // $ExpectType Float32Array
    }
    if (util.types.isFloat64Array(object)) {
        object; // $ExpectType Float64Array
    }
    if (util.types.isGeneratorFunction(object)) {
        object; // $ExpectType GeneratorFunction
    }
    if (util.types.isGeneratorObject(object)) {
        object; // $ExpectType Generator<unknown, any, unknown>
    }
    if (util.types.isInt8Array(object)) {
        object; // $ExpectType Int8Array
    }
    if (util.types.isInt16Array(object)) {
        object; // $ExpectType Int16Array
    }
    if (util.types.isInt32Array(object)) {
        object; // $ExpectType Int32Array
    }
    if (util.types.isMap(object)) {
        object; // $ExpectType Map<any, any>

        if (util.types.isMap(readonlyMapOrRecord)) {
            readonlyMapOrRecord; // $ExpectType ReadonlyMap<any, any>
        }
    }
    if (util.types.isNativeError(object)) {
        object; // $ExpectType Error

        ([
            new EvalError(),
            new RangeError(),
            new ReferenceError(),
            new SyntaxError(),
            new TypeError(),
            new URIError(),
        ] as const).forEach((nativeError: EvalError | RangeError | ReferenceError | SyntaxError | TypeError | URIError) => {
            if (!util.types.isNativeError(nativeError)) {
                nativeError; // $ExpectType never
            }
        });
    }
    if (util.types.isNumberObject(object)) {
        object; // $ExpectType Number
    }
    if (util.types.isPromise(object)) {
        object; // $ExpectType Promise<any>
    }
    if (util.types.isRegExp(object)) {
        object; // $ExpectType RegExp
    }
    if (util.types.isSet(object)) {
        object; // $ExpectType Set<any>

        if (util.types.isSet(readonlySetOrArray)) {
            readonlySetOrArray; // $ExpectType ReadonlySet<any>
        }
    }
    if (util.types.isSharedArrayBuffer(object)) {
        object; // $ExpectType SharedArrayBuffer
    }
    if (util.types.isStringObject(object)) {
        object; // $ExpectType String
    }
    if (util.types.isSymbolObject(object)) {
        object; // $ExpectType Symbol
    }
    if (util.types.isTypedArray(object)) {
        object; // $ExpectType TypedArray
    }
    if (util.types.isUint8Array(object)) {
        object; // $ExpectType Uint8Array
    }
    if (util.types.isUint8ClampedArray(object)) {
        object; // $ExpectType Uint8ClampedArray
    }
    if (util.types.isUint16Array(object)) {
        object; // $ExpectType Uint16Array
    }
    if (util.types.isUint32Array(object)) {
        object; // $ExpectType Uint32Array
    }
    if (util.types.isWeakMap(object)) {
        object; // $ExpectType WeakMap<any, any>
    }
    if (util.types.isWeakSet(object)) {
        object; // $ExpectType WeakSet<any>
    }
}
