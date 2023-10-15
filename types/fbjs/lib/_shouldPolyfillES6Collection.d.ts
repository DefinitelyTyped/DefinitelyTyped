/**
 * Checks whether a collection name (e.g. "Map" or "Set") has a native polyfill
 * that is safe to be used.
 */
declare function _shouldPolyfillES6Collection(collectionName: string): boolean;

declare namespace _shouldPolyfillES6Collection {}

export = _shouldPolyfillES6Collection;
