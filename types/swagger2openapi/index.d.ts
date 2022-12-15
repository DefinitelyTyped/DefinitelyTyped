// Type definitions for swagger2openapi 7.0
// Project: https://github.com/Mermade/oas-kit/tree/main/packages/swagger2openapi
// Definitions by: rxliuli <https://github.com/rxliuli>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Definitions by: rxliuli <https://github.com/rxliuli>

// /*~ If this module is a UMD module that exposes a global variable 'myLib' when
//  *~ loaded outside a module loader environment, declare that global here.
//  *~ Otherwise, delete this declaration.
//  */
// export as namespace myLib;

// /*~ If this module has methods, declare them as functions like so.
//  */
// export function myMethod(a: string): string;
// export function myOtherMethod(a: number): number;

// /*~ You can declare types that are available via importing the module */
// export interface someType {
//     name: string;
//     length: number;
//     extras?: string[];
// }

// /*~ You can declare properties of the module using const, let, or var */
// export const myField: number;

// /*~ If there are types, properties, or methods inside dotted names
//  *~ of the module, declare them inside a 'namespace'.
//  */
// export namespace subProp {
//     /*~ For example, given this definition, someone could write:
//      *~   import { subProp } from 'yourModule';
//      *~   subProp.foo();
//      *~ or
//      *~   import * as yourMod from 'yourModule';
//      *~   yourMod.subProp.foo();
//      */
//     function foo(): void;
// }

export class S2OError extends Error {}

import { OpenAPIV2, OpenAPIV3 } from 'openapi-types';

export interface ConvertObjOptions {
    patch?: boolean;
    warnOnly?: boolean;
}

export function convertObj(
    schema: OpenAPIV2.Document,
    options: ConvertObjOptions,
): Promise<{
    original: OpenAPIV2.Document;
    text: string;
    openapi: OpenAPIV3.Document;
}>;
export function convertObj(
    schema: OpenAPIV2.Document,
    options: ConvertObjOptions,
    callback: (
        err: S2OError | undefined,
        options: {
            original: OpenAPIV2.Document;
            text: string;
            openapi: OpenAPIV3.Document;
        },
    ) => void,
): void;
