// Type definitions for resolve-bin 0.4
// Project: https://github.com/thlorenz/resolve-bin
// Definitions by: Cameron Hunter <https://github.com/cameronhunter>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

interface Options {
    /**
     * (default: @name) executable name (e.g. 'buster-test')
     */
    executable?: string;
}

interface ResolveBin {
    /**
     * Resolves the full path to the bin file of a given package by inspecting the "bin" field in its package.json.
     *
     * @param name module name, i.e. 'tap'
     * @param cb called back with the full path to the bin file of the module or an error if it couldn't be resolved
     */
    (name: string, cb: (error: Error | null, path: string) => void): void;

    /**
     * Resolves the full path to the bin file of a given package by inspecting the "bin" field in its package.json.
     *
     * @param name module name, i.e. 'tap'
     * @param opts options
     * @param cb called back with the full path to the bin file of the module or an error if it couldn't be resolved
     */
    (name: string, opts: Options, cb: (error: Error | null, path: string) => void): void;

    /**
     * Synchronous version of resolveBin
     *
     * @param name module name, i.e. 'tap'
     * @param opts options
     */
    sync(name: string, opts?: Options): string | never;
}

/**
 * Resolves the full path to the bin file of a given package by inspecting the "bin" field in its package.json.
 */
declare const resolveBin: ResolveBin;

export = resolveBin;
