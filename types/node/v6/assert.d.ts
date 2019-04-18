declare module "assert" {
    function internal(value: any, message?: string): void;
    namespace internal {
        export class AssertionError implements Error {
            name: string;
            message: string;
            actual: any;
            expected: any;
            operator: string;
            generatedMessage: boolean;

            constructor(options?: {
                message?: string; actual?: any; expected?: any;
                operator?: string; stackStartFn?: Function
            });
        }

        export function fail(message?: string): never;
        export function fail(actual: any, expected: any, message?: string, operator?: string, stackStartFn?: Function): never;
        export function ok(value: any, message?: string): void;
        export function equal(actual: any, expected: any, message?: string): void;
        export function notEqual(actual: any, expected: any, message?: string): void;
        export function deepEqual(actual: any, expected: any, message?: string): void;
        export function notDeepEqual(actual: any, expected: any, message?: string): void;
        export function strictEqual(actual: any, expected: any, message?: string): void;
        export function notStrictEqual(actual: any, expected: any, message?: string): void;
        export function deepStrictEqual(actual: any, expected: any, message?: string): void;
        export function notDeepStrictEqual(actual: any, expected: any, message?: string): void;

        export function throws(block: Function, message?: string): void;
        export function throws(block: Function, error: RegExp | Function, message?: string): void;
        export function doesNotThrow(block: Function, message?: string): void;
        export function doesNotThrow(block: Function, error: RegExp | Function, message?: string): void;

        export function ifError(value: any): void;
    }

    export = internal;
}
