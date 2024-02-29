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
