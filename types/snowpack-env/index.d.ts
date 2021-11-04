// Type definitions for snowpack 2.3
// Project: https://github.com/pikapkg/snowpack#readme
// Definitions by: Fred K. Schott <https://github.com/FredKSchott>
//                 Michael Stramel <https://github.com/stramel>
//                 Drew Powers <https://github.com/drwpow>
//                 Jack Works <https://github.com/Jack-Works>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7

interface ImportMetaHot {
    /** Accept the HMR update. */
    accept(
        callback?: (update: {
            /** The newer version of the current module */
            module: unknown;
        }) => void,
    ): void;
    /** Accept the HMR update with dependencies update. */
    accept(
        dependencies: readonly string[],
        callback: (update: {
            /** The newer version of the current module */
            module: unknown;
            /** The newer version of dependencies. Order is same as the first argument. */
            deps: unknown[];
        }) => void,
    ): void;
    /** Cleanup side-effects before load the newer version of this module. */
    dispose(callback: () => void): void;
    /** Mark the HMR as invalidated to reload the whole page. */
    invalidate(): void;
    /** Mark this module as HMR incompatible, always reload the page. */
    decline(): void;
    /** See https://github.com/pikapkg/esm-hmr#importmetahotdata */
    data: unknown;
}

interface ImportMeta {
    url: string;
    // TypeScript Bug: https://github.com/microsoft/TypeScript/issues/41468
    // When TS bug is fixed and ecosystem has upgraded, then it will be safe
    // to change `hot` to the more correct "possibly undefined" (hot?: ...).
    readonly hot: ImportMetaHot;
    readonly env: {
        readonly [key: string]: any;
        readonly SNOWPACK_PUBLIC_API_URL: string;
        readonly MODE: string;
        readonly NODE_ENV: string;
        readonly SSR?: boolean | undefined;
    };
}
