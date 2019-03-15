// Type definitions for domurl
// Project: https://github.com/Mikhus/domurl
// Definitions by: Mikhus <ttps://github.com/Mikhus>
// Definitions: https://github.com/Mikhus/DefinitelyTyped

declare class QueryString {
    constructor(qs?: string);
    toString: () => string;
}

declare class Url<T> {
    constructor(url?: string);
    query: T;
    protocol: string;
    user: string;
    pass: string;
    host: string;
    port: string;
    path: string;
    hash: string;
    href: string;
    toString: () => string;
    encode: (s: string) => string;
    decode: (s: string) => string;
    isAbsolute: () => boolean;
    paths: (paths?: [string]) => [string];
    isEmptyQuery: () => boolean;
    queryLength: () => number;
    clearQuery: () => Url<T>;
}
