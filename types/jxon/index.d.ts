// Type definitions for jxon 2.0
// Project: https://www.npmjs.com/package/jxon
// Definitions by: Definitions by: Max Uetrecht <https://github.com/phenomax>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export interface ConfigOptions {
    attrKey?: string;
    attrPrefix?: string;
    autoDate?: boolean;
    ignorePrefixedNodes?: boolean;
    lowerCaseTags?: boolean;
    parseValues?: boolean;
    trueIsEmpty?: boolean;
    valueKey?: string;
}

export function build(
    xMLParent: object,
    nverbosity?: number,
    freeze?: boolean,
    nesteAttributes?: boolean
): object;

export type FunctionType = (arg: any) => {};

export function config(cfg: ConfigOptions): void;

export function each(arr: any, func: FunctionType, thisArg: any): void;

export function jsToString(objTree: object, namespaceURI?: string, qualifiedName?: string, documentType?: object): string;

export function jsToXml(objTree: object, namespaceURI?: string, qualifiedName?: string, documentType?: object): any;

export function stringToJs(str: string): object;

export function stringToXml(xmlStr: string): any;

export function stringify(objTree: object, namespaceURI?: string, qualifiedName?: string, documentType?: object): string;

export function unbuild(objTree: object, namespaceURI?: string, qualifiedName?: string, documentType?: object): object;

export function xmlToJs(
    xmlDocument: any,
    verbosity?: number,
    freeze?: boolean,
    nestedAttributes?: boolean
): object;
