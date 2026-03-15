/// <reference types="node" />

/**
 * Find the module that exported a given value by searching require.cache.
 * Returns the Module object if found, or null.
 */
declare function whichModule(exported: any): NodeModule | null;
export = whichModule;
