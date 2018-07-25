// Type definitions for url-parse 1.4
// Project: https://github.com/unshiftio/url-parse
// Definitions by: Pavlo Chernenko <https://github.com/ChernenkoPaul>, Hari Sivaramakrishnan <https://github.com/harisiva>, Dmitry Dushkin <https://github.com/DimitryDushkin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

type URLPart = 'auth'
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

declare class URLParse {
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
    set(part: URLPart, value: string | object | number | undefined, fn?: boolean | QueryParser): URLParse;
    toString(): string;
}

declare const parse: {
    new(address: string, location?: string | object, parser?: boolean | QueryParser): URLParse;
    (address: string, location?: string | object, parser?: boolean | QueryParser): URLParse;

    extractProtocol(url: string): {
        slashes: boolean;
        protocol: string;
        rest: string;
    };
    location(url: string): object;
    qs: {
        parse: QueryParser;
        stringify(query: object): string;
    };
};

export = parse;
