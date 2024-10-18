/**
 * Gets the `globalThis` object.
 */
declare function getGlobal(): typeof globalThis;

declare namespace getGlobal {
    /**
     * Gets the `globalThis` object.
     */
    function getPolyfill(): ReturnType<typeof import("./polyfill")>;

    /**
     * The `globalThis` object.
     */
    const implementation: typeof import("./implementation");

    /**
     * Installs the `globalThis` property onto the global object.
     */
    function shim(): ReturnType<typeof import("./shim")>;
}

export = getGlobal;
