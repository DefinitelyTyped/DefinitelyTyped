// Type definitions for assert-plus 1.0
// Project: https://github.com/mcavage/node-assert-plus#readme
// Definitions by: Костя Третяк <https://github.com/KostyaTretyak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function array(options: any[], message ?: string): void;
export function bool(options: boolean, message ?: string): void;
export function buffer(options: any, message ?: string): void;
export function func(options: any, message ?: string): void;
export function number(options: number, message ?: string): void;
export function finite(options: any, message ?: string): void;
export function object(options: any, message ?: string): void;
export function string(options: string, message ?: string): void;
export function stream(options: any, message ?: string): void;
export function date(options: string | number, message ?: string): void;
export function regexp(options: any, message ?: string): void;
export function uuid(options: string, message ?: string): void;
export function arrayOfArray(options: any[], message ?: string): void;
export function arrayOfBool(options: boolean[], message ?: string): void;
export function arrayOfBuffer(options: any[], message ?: string): void;
export function arrayOfFunc(options: any[], message ?: string): void;
export function arrayOfNumber(options: number[], message ?: string): void;
export function arrayOfFinite(options: any[], message ?: string): void;
export function arrayOfObject(options: any[], message ?: string): void;
export function arrayOfString(options: string[], message ?: string): void;
export function arrayOfStream(options: any[], message ?: string): void;
export function arrayOfDate(options: Array<string | number>, message ?: string): void;
export function arrayOfRegexp(options: any[], message ?: string): void;
export function arrayOfUuid(options: string[], message ?: string): void;
export function optionalArray(options: any, message ?: string): void;
export function optionalBool(options: any, message ?: string): void;
export function optionalBuffer(options: any, message ?: string): void;
export function optionalFunc(options: any, message ?: string): void;
export function optionalNumber(options: any, message ?: string): void;
export function optionalFinite(options: any, message ?: string): void;
export function optionalObject(options: any, message ?: string): void;
export function optionalString(options: any, message ?: string): void;
export function optionalStream(options: any, message ?: string): void;
export function optionalDate(options: any, message ?: string): void;
export function optionalRegexp(options: any, message ?: string): void;
export function optionalUuid(options: any, message ?: string): void;
export function optionalArrayOfArray(options: any, message ?: string): void;
export function optionalArrayOfBool(options: any, message ?: string): void;
export function optionalArrayOfBuffer(options: any, message ?: string): void;
export function optionalArrayOfFunc(options: any, message ?: string): void;
export function optionalArrayOfNumber(options: any, message ?: string): void;
export function optionalArrayOfFinite(options: any, message ?: string): void;
export function optionalArrayOfObject(options: any, message ?: string): void;
export function optionalArrayOfString(options: any, message ?: string): void;
export function optionalArrayOfStream(options: any, message ?: string): void;
export function optionalArrayOfDate(options: any, message ?: string): void;
export function optionalArrayOfRegexp(options: any, message ?: string): void;
export function optionalArrayOfUuid(options: any, message ?: string): void;
export function AssertionError(options: any, message ?: string): void;
export function fail(actual: any, expected: any, message: any, operator: any): void;
export function ok(options: any, message ?: string): void;
export function equal(actual: any, expected: any, message ?: string): void;
export function notEqual(actual: any, expected: any, message ?: string): void;
export function deepEqual(actual: any, expected: any, message ?: string): void;
export function notDeepEqual(actual: any, expected: any, message ?: string): void;
export function strictEqual(actual: any, expected: any, message ?: string): void;
export function notStrictEqual(actual: any, expected: any, message ?: string): void;
export function throws(block: any, error ?: any, message ?: string): void;
export function doesNotThrow(block: any, error ?: any, message ?: string): void;
export function ifError(value: any): void;

export as namespace AssertPlus;
