// Type definitions for dts-bundle
// Project: https://github.com/TypeStrong/dts-bundle
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


interface Options {
    name: string;
    main: string;
    baseDir?: string;
    out?: string;
    externals?: boolean;
    referenceExternals?: boolean;
    exclude?: RegExp | ((file: string, external: boolean) => boolean);
    removeSource?: boolean;
    newLine?: string;
    indent?: string;
    prefix?: string;
    separator?: string;
    verbose?: boolean;
    emitOnIncludedFileNotFound?: boolean;
    emitOnNoIncludedFileNotFound?: boolean;
    outputAsModuleFolder?: boolean;
    headerPath?: string;
    headerText?: string;
}

export declare function bundle(opts: Options): void;
