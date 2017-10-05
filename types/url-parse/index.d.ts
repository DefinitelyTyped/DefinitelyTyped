// Type definitions for url-parse 1.1
// Project: https://github.com/unshiftio/url-parse
// Definitions by: Pavlo Chernenko <https://github.com/ChernenkoPaul>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import URLSearchParams = require("url-search-params");

type UrlQueryParamsParser = (url: string) => string;

declare class URL {
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
    set(property: string, value: string | object | number | undefined): URL;
    readonly slashes: boolean;
    readonly username: string;
    readonly searchParams: URLSearchParams;
    toString(): string;
}

type ParseFunctionNodeType = (url: string, parseQueryString?: boolean, slashesDenoteHost?: boolean) => URL;
type ParseFunctionType = (url: string, baseURL?: object | string, parser?: boolean | UrlQueryParamsParser) => URL;

interface Protocol {
    slashes: boolean;
    protocol: string;
    rest: string;
}

type ExtractProtocolFunctionType = (url: string) => Protocol;

type LocationFunctionType = (url: string) => string;

interface ExtendedParseFunctionType extends ParseFunctionNodeType, ParseFunctionType {
    extractProtocol: ExtractProtocolFunctionType;
    location: LocationFunctionType;
    qs: any;
}

declare const parse: ExtendedParseFunctionType;

export = parse;
