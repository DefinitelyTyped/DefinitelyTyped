export function fail(message?: string): never;
export function ok(value: any, message?: string): void;
export function equal(value: any, expected: any, message?: string): void;
export function notEqual(value: any, expected: any, message?: string): void;
export function strictEqual(value: any, expected: any, message?: string): void;
export function notStrictEqual(value: any, expected: any, message?: string): void;
export function throwsExceptions(func: () => any, message?: string): void;
export function AssertionError(options: any): void;
export class AssertionError {
    private constructor();
    private _name;
    private _error;
    private _details;
}
