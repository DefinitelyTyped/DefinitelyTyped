// Type definitions for npm-dependants 2.1
// Project: https://github.com/juliangruber/npm-dependants#readme
// Definitions by: Christoph Thiede <https://github.com/LinqLover>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/** Get dependants of a module on npm. */
declare function npmDependants(name: string): AsyncIterable<string>;

export = npmDependants;
