type Params =
    | Array<[string, string | ReadonlyArray<string>]>
    | { [key: string]: string | ReadonlyArray<string> };
export { Params };

export interface TokenOptions {
    scheme: string;
    token?: string | undefined;
    params?: Params | undefined;
}

export interface Token {
    scheme: string;
    params: { [key: string]: string | string[] };
    token: null | string | string[];
}

export function format(token: TokenOptions): string;
export function format(scheme: string, token?: string, params?: Params): string;

export function parse(header: string): Token;
