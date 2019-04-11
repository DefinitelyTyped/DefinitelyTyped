declare module "assert" {
    function internal(value: any, message?: string | Error): void;
    namespace internal {
        export class AssertionError implements Error {
            name: string;
            message: string;
            actual: any;
            expected: any;
            operator: string;
            generatedMessage: boolean;
            code: 'ERR_ASSERTION';

            constructor(options?: {
                message?: string; actual?: any; expected?: any;
                operator?: string; stackStartFn?: Function
            });
        }

        export function fail(message?: string | Error): never;
        export function fail(actual: any, expected: any, message?: string | Error, operator?: string, stackStartFn?: Function): never;
        export function ok(value: any, message?: string | Error): void;
        export function equal(actual: any, expected: any, message?: string | Error): void;
        export function notEqual(actual: any, expected: any, message?: string | Error): void;
        export function deepEqual(actual: any, expected: any, message?: string | Error): void;
        export function notDeepEqual(actual: any, expected: any, message?: string | Error): void;
        export function strictEqual(actual: any, expected: any, message?: string | Error): void;
        export function notStrictEqual(actual: any, expected: any, message?: string | Error): void;
        export function deepStrictEqual(actual: any, expected: any, message?: string | Error): void;
        export function notDeepStrictEqual(actual: any, expected: any, message?: string | Error): void;

        export function throws(block: Function, message?: string | Error): void;
        export function throws(block: Function, error: RegExp | Function, message?: string | Error): void;
        export function doesNotThrow(block: Function, message?: string | Error): void;
        export function doesNotThrow(block: Function, error: RegExp | Function, message?: string | Error): void;

        export function ifError(value: any): void;
    }

    export = internal;
}
