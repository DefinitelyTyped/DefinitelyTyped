// Type definitions for prop-types v15.5.4
// Project: https://github.com/reactjs/prop-types
// Definitions by: DovydasNavickas <https://github.com/DovydasNavickas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

interface Validator<T> {
    (object: T, key: string, componentName: string, ...rest: any[]): Error | null;
}

interface Requireable<T> extends Validator<T> {
    isRequired: Validator<T>;
}

type ValidationMap<T> = {[K in keyof T]?: Validator<T> };

declare namespace ReactPropTypes {
    export var any: Requireable<any>;
    export var array: Requireable<any>;
    export var bool: Requireable<any>;
    export var func: Requireable<any>;
    export var number: Requireable<any>;
    export var object: Requireable<any>;
    export var string: Requireable<any>;
    export var node: Requireable<any>;
    export var element: Requireable<any>;
    export function instanceOf(expectedClass: {}): Requireable<any>;
    export function oneOf(types: any[]): Requireable<any>;
    export function oneOfType(types: Validator<any>[]): Requireable<any>;
    export function arrayOf(type: Validator<any>): Requireable<any>;
    export function objectOf(type: Validator<any>): Requireable<any>;
    export function shape(type: ValidationMap<any>): Requireable<any>;
}

export = ReactPropTypes;

