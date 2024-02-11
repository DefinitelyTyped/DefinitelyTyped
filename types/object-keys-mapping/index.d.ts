export function trim(origin: object, ignore?: (v: any) => boolean): object;
export function trim(origin: readonly object[], ignore?: (v: any) => boolean): object[];

export function toCamelcase(origin: object): object;
export function toCamelcase(origin: readonly object[]): object[];

export function reverseCamelcase(origin: object): object;
export function reverseCamelcase(origin: readonly object[]): object[];

export interface OperatorOptions {
    camelcase?: boolean | undefined;
    mapping?: object | undefined;
}

export class Operator {
    constructor(opts?: { camelcase?: boolean | undefined });

    map(origin: object): object;
    map(origin: readonly object[]): object[];

    mapField(path: string): string;

    mapObject(origin: object, path: string): object;

    mapArray(origin: readonly object[]): object[];
}
