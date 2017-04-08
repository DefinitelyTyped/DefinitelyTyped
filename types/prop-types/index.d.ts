// Type definitions for prop-types v15.5.4
// Project: https://github.com/reactjs/prop-types
// Definitions by: DovydasNavickas <https://github.com/DovydasNavickas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare module 'prop-types' {
    
    type Validator<T> = (object: T, key: string, componentName: string, ...rest: any[]) => Error | null;
    
    interface Requireable<T> extends Validator<T> {
        isRequired: Validator<T>;
    }
    
    type ValidationMap<T> = {[K in keyof T]?: Validator<T> };
    
    var any: Requireable<any>;
    var array: Requireable<any>;
    var bool: Requireable<any>;
    var func: Requireable<any>;
    var number: Requireable<any>;
    var object: Requireable<any>;
    var string: Requireable<any>;
    var node: Requireable<any>;
    var element: Requireable<any>;
    function instanceOf(expectedClass: {}): Requireable<any>;
    function oneOf(types: any[]): Requireable<any>;
    function oneOfType(types: Array<Validator<any>>): Requireable<any>;
    function arrayOf(type: Validator<any>): Requireable<any>;
    function objectOf(type: Validator<any>): Requireable<any>;
    function shape(type: ValidationMap<any>): Requireable<any>;
}
