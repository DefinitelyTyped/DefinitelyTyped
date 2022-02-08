export { AssertionError };
export function fail(options: any): never;
export function ok(value: any, opt_message?: string): void;
export function equal(value: any, expected: any, opt_message?: string): void;
export function notEqual(value: any, expected: any, opt_message?: string): void;
export function strictEqual(value: any, expected: any, opt_message?: string): void;
export function notStrictEqual(value: any, expected: any, opt_message?: string): void;
export function throwsExceptions(f: () => any, message?: string): void;
import AssertionError = require('./AssertionError.js');
