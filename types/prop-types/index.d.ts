// Type definitions for prop-types 15.5
// Project: https://github.com/reactjs/prop-types
// Definitions by: DovydasNavickas <https://github.com/DovydasNavickas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export type Validator<T> = (object: T, key: string, componentName: string, ...rest: any[]) => Error | null;

export interface Requireable<T> extends Validator<T> {
    isRequired: Validator<T>;
}

export type ValidationMap<T> = {[K in keyof T]?: Validator<T> };

export const any: Requireable<any>;
export const array: Requireable<any>;
export const bool: Requireable<any>;
export const func: Requireable<any>;
export const number: Requireable<any>;
export const object: Requireable<any>;
export const string: Requireable<any>;
export const node: Requireable<any>;
export const element: Requireable<any>;
export function instanceOf(expectedClass: {}): Requireable<any>;
export function oneOf(types: any[]): Requireable<any>;
export function oneOfType(types: Array<Validator<any>>): Requireable<any>;
export function arrayOf(type: Validator<any>): Requireable<any>;
export function objectOf(type: Validator<any>): Requireable<any>;
export function shape(type: ValidationMap<any>): Requireable<any>;
