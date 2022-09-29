// Type definitions for url-parse 1.4
// Project: https://github.com/unshiftio/url-parse
// Definitions by: Hari Sivaramakrishnan <https://github.com/harisiva>
//                 Dmitry Dushkin <https://github.com/DimitryDushkin>
//                 David Golightly <https://github.com/davidgoli>
//                 Kit Song <https://github.com/kitsong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare namespace URLParse {
    type URLPart =
        | 'auth'
        | 'hash'
        | 'host'
        | 'hostname'
        | 'href'
        | 'origin'
        | 'password'
        | 'pathname'
        | 'port'
        | 'protocol'
        | 'query'
        | 'slashes'
        | 'username';

    type QueryParser<T = Record<string, string | undefined>> = (query: string) => T;

    type StringifyQuery = (query: object) => string;
}

interface URLParse<Query> {
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
    readonly query: Query;
    readonly slashes: boolean;
    readonly username: string;
    set<Part extends URLParse.URLPart>(part: Part, value: URLParse<Query>[Part] | undefined, fn?: false): URLParse<Query>;
    set<Part extends URLParse.URLPart, T>(part: Part, value: URLParse<T>[Part] | undefined, fn?: URLParse.QueryParser<T>): URLParse<T>;
    toString(stringify?: URLParse.StringifyQuery): string;
}

declare const URLParse: {
    new(address: string, parser?: false): URLParse<string>;
    new(address: string, parser: true): URLParse<Record<string, string | undefined>>;
    new <T>(address: string, parser?: URLParse.QueryParser<T>): URLParse<T>;
    new(address: string, location?: string | object, parser?: false): URLParse<string>;
    new(address: string, location: string | object | undefined, parser: true): URLParse<Record<string, string | undefined>>;
    new <T>(address: string, location: string | object | undefined, parser: URLParse.QueryParser<T>): URLParse<T>;
    (address: string, parser?: false): URLParse<string>;
    (address: string, parser: true): URLParse<Record<string, string | undefined>>;
    <T>(address: string, parser: URLParse.QueryParser<T>): URLParse<T>;
    (address: string, location?: string | object, parser?: false): URLParse<string>;
    (address: string, location: string | object | undefined, parser: true): URLParse<Record<string, string | undefined>>;
    <T>(address: string, location: string | object | undefined, parser: URLParse.QueryParser<T>): URLParse<T>;

    extractProtocol(url: string): {
        slashes: boolean;
        protocol: string;
        rest: string;
    };
    location(url: string): object;
    qs: {
        parse: URLParse.QueryParser;
        stringify: URLParse.StringifyQuery;
    };
    trimLeft(url: string): string;
};

export = URLParse;
