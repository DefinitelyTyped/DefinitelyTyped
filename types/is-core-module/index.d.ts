/**
 * Is this specifier a node.js core module?
 * Optionally provide a node version to check; defaults to the current node version.
 */
declare function isCore(x: string, nodeVersion?: string): boolean;

export = isCore;
