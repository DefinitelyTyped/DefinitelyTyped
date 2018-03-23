// Type definitions for cosmiconfig 4.0
// Project: https://github.com/davidtheclark/cosmiconfig
// Definitions by: ozum <https://github.com/ozum>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

interface Options {
    packageProp?: string | false;
    rc?: string | false;
    js?: string | false;
    rcStrictJson?: boolean;
    rcExtensions?: boolean;
    stopDir?: string;
    cache?: boolean;
    sync?: boolean;
    transform?: (result: Result) => Promise<Result> | Result;
    configPath?: string;
    format?: "json" | "yaml" | "js";
}

interface Result {
    config: object;
    filePath: string;
}

interface Explorer {
    // You should provide either searchPath or configPath for load method. To disallow both, overloaded definitions added.
    load(searchPath?: string): Promise<Result>;
    load(searchPath: null | undefined, configPath?: string): Promise<Result>;

    clearFileCache(): void;
    clearDirectoryCache(): void;
    clearCaches(): void;
}

declare function cosmiconfig(moduleName: string, options?: Options): Explorer;

export = cosmiconfig;
