// Type definitions for prop-types v15.5.4
// Project: https://github.com/reactjs/prop-types
// Definitions by: DovydasNavickas <https://github.com/DovydasNavickas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare type Validator<T> = (object: T, key: string, componentName: string, ...rest: any[]) => Error | null;

declare interface Requireable<T> extends Validator<T> {
    isRequired: Validator<T>;
}

type ValidationMap<T> = {[K in keyof T]?: Validator<T> };

declare var any: Requireable<any>;
declare var array: Requireable<any>;
declare var bool: Requireable<any>;
declare var func: Requireable<any>;
declare var number: Requireable<any>;
declare var object: Requireable<any>;
declare var string: Requireable<any>;
declare var node: Requireable<any>;
declare var element: Requireable<any>;
declare function instanceOf(expectedClass: {}): Requireable<any>;
declare function oneOf(types: any[]): Requireable<any>;
declare function oneOfType(types: Array<Validator<any>>): Requireable<any>;
declare function arrayOf(type: Validator<any>): Requireable<any>;
declare function objectOf(type: Validator<any>): Requireable<any>;
declare function shape(type: ValidationMap<any>): Requireable<any>;
