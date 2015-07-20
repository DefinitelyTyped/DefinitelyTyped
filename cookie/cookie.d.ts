// Type definitions for cookie v0.1.2
// Project: https://github.com/jshttp/cookie
// Definitions by: Pine Mizune <https://github.com/pine613>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface CookieSerializeOptions {
    encode?: (val: string) => string;
    path?: string;
    expires?: Date;
    maxAge?: number;
    domain?: string;
    secure?: boolean;
    httpOnly?: boolean;
}

interface CookieParseOptions {
    decode?: (val: string) => string;
}

interface CookieStatic {
    serialize(name: string, val: string, options?: CookieSerializeOptions): string;
    parse(str: string, options?: CookieParseOptions): { [key: string]: string };
}

declare module "cookie" {
    var cookie: CookieStatic;
    export = cookie;
}
