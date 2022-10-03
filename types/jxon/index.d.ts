// Type definitions for jxon 2.0
// Project: https://www.npmjs.com/package/jxon
// Definitions by: Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

export type FunctionType = (arg: unknown) => void;
export type VerbosityType = 0 | 1 | 2 | 3;

export interface ConfigOptions {
    attrKey?: string | undefined;
    attrPrefix?: string | undefined;
    autoDate?: boolean | undefined;
    ignorePrefixedNodes?: boolean | undefined;
    lowerCaseTags?: boolean | undefined;
    parseValues?: boolean | undefined;
    trueIsEmpty?: boolean | undefined;
    valueKey?: string | undefined;
}

export function config(cfg: ConfigOptions): void;

export function stringToJs(str: string): object;

export function jsToString(
    objTree: object,
    namespaceURI?: string,
    qualifiedName?: string,
    documentType?: object,
): string;
export function stringify(objTree: object, namespaceURI?: string, qualifiedName?: string, documentType?: object): string;

export function xmlToJs(
    xmlDocument: any,
    verbosity?: VerbosityType,
    freeze?: boolean,
    nestedAttributes?: boolean,
): object;
export function build(xMLParent: any, verbosity?: VerbosityType, freeze?: boolean, nesteAttributes?: boolean): object;

export function jsToXml(objTree: object, namespaceURI?: string, qualifiedName?: string, documentType?: object): any;
export function unbuild(objTree: object, namespaceURI?: string, qualifiedName?: string, documentType?: object): any;

export function stringToXml(xmlStr: string): any;

export function xmlToString(xmlObj: any): string;

export function each(obj: any, func: FunctionType, thisArg: any): void;
