/// <reference types="node" />

/** Get dependants of a module on npm. */
declare function npmDependants(name: string): AsyncIterable<string>;

export = npmDependants;
