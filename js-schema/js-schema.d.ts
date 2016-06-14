// Type definitions for js-schema
// Project: https://github.com/molnarg/js-schema
// Definitions by: Marcin Porebski <https://github.com/marcinporebski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare module 'js-schema'
{
    export interface Schema
    {
        (obj: any): boolean; // test obj against the schema
    }

    export default function schema(definition: any): Schema
}

interface NumberConstructor
{
    min(n: number): NumberConstructor;
    max(n: number): NumberConstructor;
    below(n: number): NumberConstructor;
    above(n: number): NumberConstructor;
    step(n: number): NumberConstructor;
}

interface StringConstructor
{
    of(charset: string): StringConstructor;
    of(length: number, charset: string): StringConstructor;
    of(minLength: number, maxLength: number, charset: string): StringConstructor;
}

interface ArrayConstructor
{
    like(arr: Array<any>): ArrayConstructor;
    of(pattern: any): ArrayConstructor;
    of(length: number, pattern: any): ArrayConstructor;
    of(minLength: number, maxLength: number, pattern: any): ArrayConstructor;
}

interface ObjectConstructor
{
    like(obj: any): ObjectConstructor;
    reference(obj: any): ObjectConstructor;
}

interface FunctionConstructor
{
    reference(func: Function): FunctionConstructor;
}
