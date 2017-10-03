// Type definitions for url-parse v1.1.9
// Project: https://github.com/unshiftio/url-parse
// Definitions by: Pavlo Chernenko <https://github.com/ChernenkoPaul/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="url-search-params" />

import URLSearchParams = require("url-search-params");

declare module "url-parse" {
    export type UrlQueryParamsParser = (url: string) => string;

    export interface Protocol {
        slashes: boolean;
        protocol: string;
        rest: string;
    }
    
    export class URL {
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
        set(property: string, value: string | object | number | undefined): URL;
        readonly slashes: boolean;
        readonly username: string;
        readonly searchParams: URLSearchParams;
        toString(): string;
    }
    
    type ParseFunctionType = (url: string, parseQueryString?: boolean, slashesDenoteHost?: boolean) => URL;
    
    interface ExtendedParseFunctionType extends ParseFunctionType {
        extractProtocol: (url: string) => Protocol;
        location: (url: string) => string;
        qs: any;
    }
    
    var parse: ExtendedParseFunctionType;
    
}

export default parse;
