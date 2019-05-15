// Type definitions for object-keys-mapping 3.0
// Project: https://github.com/coderhaoxin/object-keys-mapping#readme
// Definitions by: newraina <https://github.com/newraina>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export function trim(origin: object, ignore?: (v: any) => boolean): object;
export function trim(origin: ReadonlyArray<object>, ignore?: (v: any) => boolean): object[];

export function toCamelcase(origin: object): object;
export function toCamelcase(origin: ReadonlyArray<object>): object[];

export function reverseCamelcase(origin: object): object;
export function reverseCamelcase(origin: ReadonlyArray<object>): object[];

export interface OperatorOptions {
    camelcase?: boolean;
    mapping?: object;
}

export class Operator {
    constructor(opts?: { camelcase?: boolean });

    map(origin: object): object;
    map(origin: ReadonlyArray<object>): object[];

    mapField(path: string): string;

    mapObject(origin: object, path: string): object;

    mapArray(origin: ReadonlyArray<object>): object[];
}
