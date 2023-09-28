// Type definitions for dts-bundle
// Project: https://github.com/TypeStrong/dts-bundle
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Options {
    name: string;
    main: string;
    baseDir?: string | undefined;
    out?: string | undefined;
    externals?: boolean | undefined;
    referenceExternals?: boolean | undefined;
    exclude?: RegExp | ((file: string, external: boolean) => boolean) | undefined;
    removeSource?: boolean | undefined;
    newLine?: string | undefined;
    indent?: string | undefined;
    prefix?: string | undefined;
    separator?: string | undefined;
    verbose?: boolean | undefined;
    emitOnIncludedFileNotFound?: boolean | undefined;
    emitOnNoIncludedFileNotFound?: boolean | undefined;
    outputAsModuleFolder?: boolean | undefined;
    headerPath?: string | undefined;
    headerText?: string | undefined;
}

export declare function bundle(opts: Options): void;
