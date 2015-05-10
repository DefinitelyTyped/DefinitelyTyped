// Type definitions for jsurl 1.2.2
// Project: https://github.com/Mikhus/jsurl
// Definitions by: Alexey Gorshkov <https://github.com/agorshkov23>
// Definitions: https://github.com/agorshkov23/DefinitelyTyped

declare class Url {
    constructor(url?: string);
    query: any;
    protocol: string;
    user: string;
    pass: string;
    host: string;
    port: string;
    path: string;
    hash: string;
    href: string;
    toString(): string;
}