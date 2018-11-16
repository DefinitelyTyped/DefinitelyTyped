// Type definitions for react-cache 2.0
// Project: https://github.com/facebook/react#readme
// Definitions by: Zhongliang Wang <https://github.com/Cryrivers>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Resource<I, V> {
    read: (input?: I) => V;
    preload: (input?: I) => void;
}
declare function setGlobalCacheLimit(limit: number): void;
declare function createResource<I, V>(
    fetch: (input: I) => Promise<V>,
    maybeHashInput?: (input: I) => string | number
): Resource<I, V>;
declare const unstable_createResource: typeof createResource;
declare const unstable_setGlobalCacheLimit: typeof setGlobalCacheLimit;
