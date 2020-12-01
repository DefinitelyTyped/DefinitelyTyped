import * as assert from 'assert';

/**
 * The `expectType` function from https://www.npmjs.com/package/tsd,
 * except instead of returning `void`, it returns `T`.
 */
export declare function expectType<T>(value: T): T;

assert(true, "it's working");

assert.ok(true, 'inner functions work as well');

assert.throws(() => {});
assert.throws(() => {}, /Regex test/);
assert.throws(
    () => {},
    () => {},
    'works wonderfully',
);

assert['fail'](true, true, 'works like a charm');

{
    const a = null as any;
    assert.ifError(a);
    a; // $ExpectType null | undefined
}

{
    const a = true as boolean;
    assert(a);
    a; // $ExpectType true
}

{
    const a = 13 as number | null | undefined;
    assert(a);
    a; // $ExpectType number
}

{
    const a = true as boolean;
    assert.ok(a);
    a; // $ExpectType true
}

{
    const a = 13 as number | null | undefined;
    assert.ok(a);
    a; // $ExpectType number
}

{
    const a = 'test' as any;
    assert.strictEqual(a, 'test');
    a; // $ExpectType string
}

{
    const a = { b: 2 } as any;
    assert.deepStrictEqual(a, { b: 2 });
    a; // $ExpectType { b: number; }
}

import { promisify } from "util";

// Test cases from https://github.com/microsoft/TypeScript/issues/41563#issuecomment-729270419
{
    function parseString(str: any, cb?: (...args: any[]) => any): void {}
    const parseStringP = promisify(parseString);
    parseStringP; // $ExpectType (str: any) => Promise<any>
    const x = parseStringP("abc");
    x; // $ExpectType Promise<any>

    const arg1UnknownError = promisify((arg: string, cb: (err: unknown, result: number) => void): void => { });
    arg1UnknownError; // $ExpectType (arg: string) => Promise<number>

    const arg1AnyError = promisify((arg: string, cb: (err: any, result: number) => void): void => { });
    arg1AnyError; // $ExpectType (arg: string) => Promise<number>

    const arg0 = promisify((cb: (err: Error | null, result: number) => void): void => { });
    arg0; // $ExpectType () => Promise<number>

    const arg0NoResult = promisify((cb: (err: Error | null) => void): void => { });
    arg0NoResult; // $ExpectType () => Promise<void>

    const arg1 = promisify((arg: string, cb: (err: Error | null, result: number) => void): void => { });
    arg1; // $ExpectType (arg: string) => Promise<number>

    const arg1UnknownError2 = promisify((arg: string, cb: (err: Error | null, result: number) => void): void => { });
    arg1UnknownError2; // $ExpectType (arg: string) => Promise<number>

    const arg1NoResult = promisify((arg: string, cb: (err: Error | null) => void): void => { });
    arg1NoResult; // $ExpectType (arg: string) => Promise<void>

    const cbOptionalError = promisify((cb: (err?: Error | null) => void): void => { cb(); });
    cbOptionalError; // $ExpectType () => Promise<void>
}
