interface TestExcludeOptions {
    cwd?: string;
    include?: string | string[];
    extension?: string | string[];
    exclude?: string | string[];
    excludeNodeModules?: boolean;
    relativePath?: boolean;
}
declare class TestExclude {
    constructor(options?: TestExcludeOptions);

    shouldInstrument(filename: string): boolean;
    globSync(cwd?: string): string[];
    glob(cwd?: string): Promise<string[]>;
}

declare const _TestExclude: typeof TestExclude;
export = _TestExclude;
