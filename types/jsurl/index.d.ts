// Type definitions for jsurl 1.2.7
// Project: https://github.com/Mikhus/jsurl
// Definitions by: Alexey Gorshkov <https://github.com/agorshkov23>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface UrlQuery {
    clear: () => void;
}

declare class Url<T> {
    constructor();
    constructor(url: string);
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
}
