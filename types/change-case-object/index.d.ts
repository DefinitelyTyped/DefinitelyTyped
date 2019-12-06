// Type definitions for change-case-object 2.0
// Project: https://github.com/BinaryThumb/change-case-object#readme
// Definitions by: James Chao <https://github.com/jameschao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function camelCase(s: string): string;
export function camelCase<T>(arr: ReadonlyArray<T>): T[];
export function camelCase(obj: object): object;

export function snakeCase(s: string): string;
export function snakeCase<T>(arr: ReadonlyArray<T>): T[];
export function snakeCase(obj: object): object;

export function paramCase(s: string): string;
export function paramCase<T>(arr: ReadonlyArray<T>): T[];
export function paramCase(obj: object): object;

export function camel(s: string): string;
export function camel<T>(arr: ReadonlyArray<T>): T[];
export function camel(obj: object): object;

export function snake(s: string): string;
export function snake<T>(arr: ReadonlyArray<T>): T[];
export function snake(obj: object): object;

export function param(s: string): string;
export function param<T>(arr: ReadonlyArray<T>): T[];
export function param(obj: object): object;
