// Type definitions for dlv 1.1
// Project: https://github.com/developit/dlv#readme
// Definitions by: Ryan Sonshine <https://github.com/ryansonshine>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/**
 * Safely get a dot-notated path within a nested object, with ability to
 * return a default if the full key path does not exist or the value is
 * undefined
 */
export = dlv;
declare function dlv(object: object, key: string | Array<string | number>, defaultValue?: any): any;
