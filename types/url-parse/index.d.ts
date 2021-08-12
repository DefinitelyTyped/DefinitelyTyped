// Type definitions for url-parse 1.4
// Project: https://github.com/unshiftio/url-parse
// Definitions by: Pavlo Chernenko <https://github.com/ChernenkoPaul>
//                 Hari Sivaramakrishnan <https://github.com/harisiva>
//                 Dmitry Dushkin <https://github.com/DimitryDushkin>
//                 David Golightly <https://github.com/davidgoli>
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

    type QueryParser = (query: string) => object;

    type StringifyQuery = (query: object) => string;
}

interface URLParse {
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
    readonly query: { [key: string]: string | undefined };
    readonly slashes: boolean;
    readonly username: string;
    set(
        part: URLParse.URLPart,
        value: URLParse[URLParse.URLPart] | undefined,
        fn?: boolean | URLParse.QueryParser,
    ): URLParse;
    toString(stringify?: URLParse.StringifyQuery): string;
}

declare const URLParse: {
    new (address: string, parser?: boolean | URLParse.QueryParser): URLParse;
    new (address: string, location?: string | object, parser?: boolean | URLParse.QueryParser): URLParse;
    (address: string, parser?: boolean | URLParse.QueryParser): URLParse;
    (address: string, location?: string | object, parser?: boolean | URLParse.QueryParser): URLParse;

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
};

export = URLParse;
