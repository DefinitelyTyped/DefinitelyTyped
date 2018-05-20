// Type definitions for loadjs 3.5
// Project: https://github.com/muicss/loadjs
// Definitions by: Christian Rackerseder <https://github.com/screendriver>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace loadjs;

export = loadjs;

declare function loadjs(file: string, loaded: loadjs.LoadedFn): void;
declare function loadjs(files: string[], loaded: loadjs.LoadedFn): void;
declare function loadjs(files: string[], bundleId: string): void;
declare function loadjs(files: string[], bundleId: string, loaded: loadjs.LoadedFn): void;
declare function loadjs(files: string[], bundleId: string, options: loadjs.LoadOptions): void;

declare namespace loadjs {
    export type LoadedFn = () => void;

    export interface LoadOptions {
        before?(path: string, scriptEl: string): void;
        success?(): void;
        error?(depsNotFound: string): void;
        async?: boolean;
        numRetries?: number;
    }

    export interface ReadyOptions {
        success?(): void;
        error?(depsNotFound: string): void;
    }

    export function ready(bundleId: string, callback: LoadedFn): void;
    export function ready(bundleIds: string[], callback: LoadedFn): void;
    export function ready(bundleId: string, options: ReadyOptions): void;
    export function isDefined(bundleId: string): boolean;
    export function done(bundleId: string): void;
    export function reset(): void;
}
