import * as assert from 'assert';
import { promisify } from "util";

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

// Test cases from https://github.com/microsoft/TypeScript/issues/41563#issuecomment-729270419
{
    function parseString(str: any, cb?: (...args: any[]) => any): void {}
    const parseStringP: (str: any) => Promise<any> = promisify(parseString);
    parseStringP("abc");

    const arg1UnknownError: (arg: string) => Promise<number> = promisify((arg: string, cb: (err: unknown, result: number) => void): void => { });
    const arg1AnyError: (arg: string) => Promise<number> = promisify((arg: string, cb: (err: any, result: number) => void): void => { });
    const arg0: () => Promise<number> = promisify((cb: (err: Error | null, result: number) => void): void => { });
    const arg0NoResult: () => Promise<void> = promisify((cb: (err: Error | null) => void): void => { });
    const arg1: (arg: string) => Promise<number> = promisify((arg: string, cb: (err: Error | null, result: number) => void): void => { });
    const arg1UnknownError2: (arg: string) => Promise<number> = promisify((arg: string, cb: (err: Error | null, result: number) => void): void => { });
    const arg1NoResult: (arg: string) => Promise<void> = promisify((arg: string, cb: (err: Error | null) => void): void => { });
    const cbOptionalError: () => Promise<void> = promisify((cb: (err?: Error | null) => void): void => { cb(); });
}
