// Type definitions for is-core-module 2.2
// Project: https://github.com/inspect-js/is-core-module
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Is this specifier a node.js core module?
 * Optionally provide a node version to check; defaults to the current node version.
 */
declare function isCore(x: string, nodeVersion?: string): boolean;

export = isCore;
