// Type definitions for url-parse 1.4
// Project: https://github.com/unshiftio/url-parse
// Definitions by: Pavlo Chernenko <https://github.com/ChernenkoPaul>, Hari Sivaramakrishnan <https://github.com/harisiva>, Dmitry Dushkin <https://github.com/DimitryDushkin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

type UrlPart = 'auth'
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

declare class BaseUrl {
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
    readonly slashes: boolean;
    readonly username: string;
    toString(): string;
}

declare class Url extends BaseUrl {
    readonly query: string;
    set(part: UrlPart, value: string | object | number | undefined, fn?: boolean | QueryParser): Url;
}

declare class UrlParseWithParsedQuery extends BaseUrl {
    readonly query: { [key: string]: string | undefined };
    set(part: UrlPart, value: string | object | number | undefined, fn?: boolean | QueryParser): UrlParseWithParsedQuery;
}

declare const parse: {
    new (address: string, location?: string | object): Url;
    new <P extends boolean | QueryParser>(address: string, location: string | object | undefined, parser: P):
        P extends true ? UrlParseWithParsedQuery :
        P extends QueryParser ? UrlParseWithParsedQuery :
        Url;
    <P extends boolean | QueryParser>(address: string, parser?: P):
        P extends undefined ? Url :
        P extends true ? UrlParseWithParsedQuery :
        P extends QueryParser ? UrlParseWithParsedQuery :
        Url;

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
