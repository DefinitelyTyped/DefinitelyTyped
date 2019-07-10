// Type definitions for auth-header 1.0
// Project: https://github.com/izaakschroeder/auth-header
// Definitions by: ForbesLindesay <https://github.com/ForbesLindesay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

type Params =
    | Array<[string, string | ReadonlyArray<string>]>
    | {[key: string]: string | ReadonlyArray<string>};
export { Params };

export interface TokenOptions {
    scheme: string;
    token?: string;
    params?: Params;
}

export interface Token {
    scheme: string;
    params: {[key: string]: string | string[]};
    token: null | string | string[];
}

export function format(token: TokenOptions): string;
export function format(scheme: string, token?: string, params?: Params): string;

export function parse(header: string): Token;
