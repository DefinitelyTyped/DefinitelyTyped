// Type definitions for prop-types v15.5.4
// Project: https://github.com/reactjs/prop-types
// Definitions by: DovydasNavickas <https://github.com/DovydasNavickas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export type Validator<T> = (object: T, key: string, componentName: string, ...rest: any[]) => Error | null;

export interface Requireable<T> extends Validator<T> {
    isRequired: Validator<T>;
}

export type ValidationMap<T> = {[K in keyof T]?: Validator<T> };

export let any: Requireable<any>;
export let array: Requireable<any>;
export let bool: Requireable<any>;
export let func: Requireable<any>;
export let number: Requireable<any>;
export let object: Requireable<any>;
export let string: Requireable<any>;
export let node: Requireable<any>;
export let element: Requireable<any>;
export function instanceOf(expectedClass: {}): Requireable<any>;
export function oneOf(types: any[]): Requireable<any>;
export function oneOfType(types: Array<Validator<any>>): Requireable<any>;
export function arrayOf(type: Validator<any>): Requireable<any>;
export function objectOf(type: Validator<any>): Requireable<any>;
export function shape(type: ValidationMap<any>): Requireable<any>;
