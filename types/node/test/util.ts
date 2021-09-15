import * as util from 'node:util';
import assert = require('node:assert');
import { readFile } from 'node:fs';

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
    maxStringLength: 123,
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

util.inspect({
    [util.inspect.custom]: <util.CustomInspectFunction> ((depth, opts) => opts.stylize('woop', 'module')),
});

util.format('%s:%s', 'foo');
util.format('%s:%s', 'foo', 'bar', 'baz');
util.format(1, 2, 3);
util.format('%% %s');
util.format();

util.formatWithOptions({ colors: true }, 'See object %O', { foo: 42 });

// util.callbackify
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
const arg1UnknownError: (arg: string) => Promise<number> = util.promisify((arg: string, cb: (err: Error | null, result: number) => void): void => { });
const arg1NoResult: (arg: string) => Promise<any> = util.promisify((arg: string, cb: (err: Error | null) => void): void => { });
const cbOptionalError: () => Promise<void | {}> = util.promisify((cb: (err?: Error | null) => void): void => { cb(); }); // tslint:disable-line void-return
assert(typeof util.promisify.custom === 'symbol');
// util.deprecate
const foo = () => {};
// $ExpectType () => void
util.deprecate(foo, 'foo() is deprecated, use bar() instead');
// $ExpectType <T extends Function>(fn: T, msg: string, code?: string | undefined) => T
util.deprecate(util.deprecate, 'deprecate() is deprecated, use bar() instead');
// $ExpectType <T extends Function>(fn: T, msg: string, code?: string | undefined) => T
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

const errorMap: Map<number, [string, string]> = util.getSystemErrorMap();

{
    const logger: util.DebugLogger = util.debuglog('section');
    logger.enabled; // $ExpectType boolean
    util.debuglog('section', (fn: util.DebugLoggerFunction) => { });
}

{
    const foo: string = util.toUSVString('foo');
}
