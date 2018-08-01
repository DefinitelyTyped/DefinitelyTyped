// Type definitions for cosmiconfig 4.0
// Project: https://github.com/davidtheclark/cosmiconfig
// Definitions by: ozum <https://github.com/ozum>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

interface Result {
    config: object;
    filePath: string;
}

interface Options {
    packageProp?: string | false;
    rc?: string | false;
    js?: string | false;
    rcStrictJson?: boolean;
    rcExtensions?: boolean;
    stopDir?: string;
    cache?: boolean;
    transform?: (result: Result) => Promise<Result> | Result;
    configPath?: string;
    format?: "json" | "yaml" | "js";
}

// Default is false and makes load() method async
interface AsyncOptions extends Options {
    sync?: false;
}

// Makes load() method sync
interface SyncOptions extends Options {
    sync: true;
}

interface Explorer {
    clearFileCache(): void;
    clearDirectoryCache(): void;
    clearCaches(): void;
}

interface AsyncExplorer extends Explorer {
    // You should provide either searchPath or configPath for load method. To disallow both, overloaded definitions added.
    load(searchPath?: string): Promise<Result>;
    load(searchPath: null | undefined, configPath?: string): Promise<Result>;
}

interface SyncExplorer extends Explorer {
    // You should provide either searchPath or configPath for load method. To disallow both, overloaded definitions added.
    load(searchPath?: string): Result;
    load(searchPath: null | undefined, configPath?: string): Result;
}

declare function cosmiconfig(
    moduleName: string,
    options: SyncOptions
): SyncExplorer;

declare function cosmiconfig(
    moduleName: string,
    options?: AsyncOptions
): AsyncExplorer;

export = cosmiconfig;
