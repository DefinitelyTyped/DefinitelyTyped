/// <reference path="promisify.d.ts" />

import { promisify } from "util";

// Test cases from https://github.com/microsoft/TypeScript/issues/41563#issuecomment-729270419
{
    function parseString(str: any, cb?: (...args: any[]) => any): void {}
    const parseStringP = promisify(parseString);
    parseStringP; // $ExpectType (str: any) => Promise<any>
    const x = parseStringP("abc");
    x; // $ExpectType Promise<string>

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
