// Type definitions for @adeira/js 1.2
// Project: https://github.com/adeira/universe/tree/master/src/js
// Definitions by: Martin Zlámal <https://github.com/mrtnzlml>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.4

type Maybe<T> = null | undefined | T;

export function invariant(condition: boolean, format: string, ...args: ReadonlyArray<any>): void;

export function isBrowser(): boolean;

export function isNumeric(value: any): boolean;

export function isObject(value: any): boolean;

export function isObjectEmpty(value: any): boolean;

export function nullthrows<T>(x: Maybe<T>, message?: string): T extends null | undefined ? never : T;

export function sprintf(format: string, ...args: ReadonlyArray<any>): string;

export function warning(condition: boolean, format: string, ...args: ReadonlyArray<any>): void;

export {};
