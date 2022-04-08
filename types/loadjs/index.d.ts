// Type definitions for loadjs 4.0
// Project: https://github.com/muicss/loadjs
// Definitions by: Christian Rackerseder <https://github.com/screendriver>
//                 Aziz Khambati <https://github.com/azizhk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

export as namespace loadjs;

export = loadjs;

declare function loadjs(
    files: string | string[],
    bundleIdOrLoaded: string | loadjs.LoadOptions | loadjs.LoadedFn,
): void;

declare function loadjs(
    files: string | string[],
    bundleId: string,
    optionsOrCallback: loadjs.LoadOptions | loadjs.LoadedFn
): void;

declare function loadjs(
    files: string | string[],
    options: loadjs.LoadOptions & {
        returnPromise: true
    }
): Promise<void>;

declare function loadjs(
    files: string | string[],
    bundleId: string,
    options: loadjs.LoadOptions & {
        returnPromise: true
    }
): Promise<void>;

declare namespace loadjs {
    type LoadedFn = () => void;

    interface LoadOptions {
        before?(path: string, scriptEl: HTMLElement): void;
        async?: boolean;
        numRetries?: number;
        success?(): void; // Arguments provided are different in case of returnPromise: true / false
        error?(depsNotFound: string[]): void;
    }

    interface ReadyOptions {
        success?(): void;
        error?(depsNotFound: string[]): void;
    }

    function ready(bundleIds: string | string[], optionsOrCallback: ReadyOptions | LoadedFn): typeof loadjs;
    function isDefined(bundleId: string): boolean;
    function done(bundleId: string): void;
    function reset(): void;
}
