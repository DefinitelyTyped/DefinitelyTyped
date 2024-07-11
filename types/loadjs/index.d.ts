export as namespace loadjs;

export = loadjs;

declare function loadjs(
    files: string | string[],
    bundleIdOrLoaded: string | loadjs.LoadOptions | loadjs.LoadedFn,
): void;

declare function loadjs(
    files: string | string[],
    bundleId: string,
    optionsOrCallback: loadjs.LoadOptions | loadjs.LoadedFn,
): void;

declare function loadjs(
    files: string | string[],
    options: loadjs.LoadOptions & {
        returnPromise: true;
    },
): Promise<void>;

declare function loadjs(
    files: string | string[],
    bundleId: string,
    options: loadjs.LoadOptions & {
        returnPromise: true;
    },
): Promise<void>;

declare namespace loadjs {
    type LoadedFn = () => void;

    interface LoadOptions {
        before?(path: string, scriptEl: HTMLElement): void;
        async?: boolean | undefined;
        numRetries?: number | undefined;
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
