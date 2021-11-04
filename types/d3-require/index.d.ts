// Type definitions for d3-require 1.2
// Project: https://github.com/d3/d3-require
// Definitions by: Kindy Lin <https://github.com/kindy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

// Last module version validated against: 1.2.4

export interface require {
    (name: string, ...names: string[]): Promise<any>;

    /**
     * Returns a `require` with the specified *aliases*.
     * `require.alias({"react": React, "react-dom": ReactDOM})`
     */
    alias(aliases: {[k: string]: any}): require;

    /**
     * The resolver passed to `requireFrom`
     */
    resolve: resolver;
}

/**
 * Returns a promise to the URL to load the module with the specified *name*.
 */
export type resolver = (name: string, base?: string) => Promise<string>;
export type requireFrom = (resolver: resolver) => require;

export class RequireError extends Error {}

/**
 * Loads modules from jsDelivr.
 * Like `require('d3@5')`
 *
 * @param name Any package name optionally followed by the 'at sign' and a semver range
 * @returns A promise to the loaded module
 */
export const require: require;

/**
 * Returns a new `require` which loads modules from the specified `resolver`.
 * Like `requireFrom(name => ('https://unpkg.com/'+name))`
 */
export const requireFrom: requireFrom;
