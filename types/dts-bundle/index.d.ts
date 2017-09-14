// Type definitions for dts-bundle
// Project: https://github.com/TypeStrong/dts-bundle
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


interface Options {
    name: string;
    main: string;
    baseDir?: string;
    exclude?: RegExp;
    externals?: boolean;
    indent?: string;
    newLine?: string;
    out?: string;
    prefix?: string;
    removeSource?: boolean;
    separator?: string;
    verbose?: boolean;
}

export declare function bundle(opts: Options): void;
