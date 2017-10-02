// Type definitions for url-parse v1.1.9
// Project: https://github.com/unshiftio/url-parse
// Definitions by: Pavlo Chernenko <https://github.com/ChernenkoPaul/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="url-search-params" />

import URLSearchParams = require("url-search-params");

declare module "url-parse" {
    export default class URL {
        constructor(url: string, baseURL?: Object | string, parser?: boolean | Function);
        hash: string;
        host: string;
        hostname: string;
        href: string;
        readonly origin: string;
        password: string;
        pathname: string;
        port: string;
        protocol: string;
        query: { [key: string]: string | undefined };
        search: string;
        set(key: string, value: string): void;
        username: string;
        readonly searchParams: URLSearchParams;
        toString(): string;
    }

    export function parse(url: string, parseQueryString?: boolean, slashesDenoteHost?: boolean): URL;
}
