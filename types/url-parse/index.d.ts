// Type definitions for url-parse 1.1
// Project: https://github.com/unshiftio/url-parse
// Definitions by: Pavlo Chernenko <https://github.com/ChernenkoPaul>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import URLSearchParams = require("url-search-params");

export type UrlQueryParamsParser = (url: string) => string;

export class URL {
    constructor(url: string, parseQueryString?: boolean, slashesDenoteHost?: boolean);
    constructor(url: string, baseURL?: object | string, parser?: boolean | UrlQueryParamsParser);
    readonly auth: string;
    readonly hash: string;
    readonly host: string;
    readonly hostname: string;
    readonly href: string;
    readonly origin: string;
    readonly password: string;
    readonly pathname: string;
    readonly port: string;
    readonly protocol: string;
    query: { [key: string]: string | undefined };
    readonly search: string;
    set(property: string, value: string | object | number | boolean | undefined): URL;
    readonly slashes: boolean;
    readonly username: string;
    readonly searchParams: URLSearchParams;
    toString(): string;
}

export type ParseFunctionNodeType = (url: string, parseQueryString?: boolean, slashesDenoteHost?: boolean) => URL;
export type ParseFunctionType = (url: string, baseURL?: object | string, parser?: boolean | UrlQueryParamsParser) => URL;

export interface Protocol {
    slashes: boolean;
    protocol: string;
    rest: string;
}

export type ExtractProtocolFunctionType = (url: string) => Protocol;

export type LocationFunctionType = (url: string) => string;

export interface ExtendedParseFunctionType extends ParseFunctionNodeType, ParseFunctionType {
    extractProtocol: ExtractProtocolFunctionType;
    location: LocationFunctionType;
    qs: any;
}

export const parse: ExtendedParseFunctionType;
