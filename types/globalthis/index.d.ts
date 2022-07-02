// Type definitions for globalthis 1.0
// Project: https://github.com/ljharb/System.global#readme
// Definitions by: ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

/**
 * Gets the `globalThis` object.
 */
declare function getGlobal(): typeof globalThis;

declare namespace getGlobal {
    /**
     * Gets the `globalThis` object.
     */
    function getPolyfill(): ReturnType<typeof import('./polyfill')>;

    /**
     * The `globalThis` object.
     */
    const implementation: typeof import('./implementation');

    /**
     * Installs the `globalThis` property onto the global object.
     */
    function shim(): ReturnType<typeof import('./shim')>;
}

export = getGlobal;
