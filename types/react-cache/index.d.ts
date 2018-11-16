// Type definitions for react-cache 2.0
// Project: https://github.com/facebook/react#readme
// Definitions by: Zhongliang Wang <https://github.com/Cryrivers>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "react-cache" {
    interface Resource<I, V> {
        read: (input?: I) => V;
        preload: (input?: I) => void;
    }
    export function setGlobalCacheLimit(limit: number): void;
    export function createResource<I, K extends string | number, V>(
        fetch: (input: I) => Promise<V>,
        maybeHashInput?: (input: I) => K
    ): Resource<I, V>;
    export const unstable_createResource: typeof createResource;
    export const unstable_setGlobalCacheLimit: typeof setGlobalCacheLimit;
}
