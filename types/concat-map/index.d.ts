// Type definitions for concat-map 0.0
// Project: https://github.com/substack/node-concat-map
// Definitions by: Claas Ahlrichs <https://github.com/claasahl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

export = concat_map;

declare function concat_map<T, R>(xs: T[], fn: (x: T) => R | R[]): R[];
