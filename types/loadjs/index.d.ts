// Type definitions for loadjs 3.5
// Project: https://github.com/muicss/loadjs
// Definitions by: Christian Rackerseder <https://github.com/screendriver>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

export as namespace loadjs;

export = loadjs;

declare function loadjs(files: string | string[], bundleIdOrLoaded: string | loadjs.LoadedFn): void;
declare function loadjs(files: string[], bundleId: string, optionsOrCallback: loadjs.LoadOptions | loadjs.LoadedFn): void;

declare namespace loadjs {
    type LoadedFn = () => void;

    interface LoadOptions {
        before?(path: string, scriptEl: string): void;
        success?(): void;
        error?(depsNotFound: string): void;
        async?: boolean;
        numRetries?: number;
    }

    interface ReadyOptions {
        success?(): void;
        error?(depsNotFound: string): void;
    }

    function ready(bundleIds: string | string[], optionsOrCallback: ReadyOptions | LoadedFn): typeof loadjs;
    function isDefined(bundleId: string): boolean;
    function done(bundleId: string): void;
    function reset(): void;
}
