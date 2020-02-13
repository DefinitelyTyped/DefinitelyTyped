// Type definitions for graphql-deduplicator 2.0
// Project: https://github.com/gajus/graphql-deduplicator#readme
// Definitions by: Luis Fernando Alvarez D. <https://github.com/lfades>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export function deflate(response: object): {
    [key: string]: any;
};

export function inflate(response: object): {
    [key: string]: any;
};
