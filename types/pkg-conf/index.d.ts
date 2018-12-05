// Type definitions for pkg-conf 2.1
// Project: https://github.com/sindresorhus/pkg-conf#readme
// Definitions by: Jorge Gonzalez <https://github.com/jorgegonzalez>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare namespace pkgConf {
    type AnyJson = boolean | number | string | null | JsonArray | JsonMap;
    interface JsonArray extends Array<AnyJson> { }
    interface JsonMap {
        [key: string]: AnyJson;
    }

    interface Options {
        // Directory to start looking up for a package.json file.
        // Default: process.cwd()
        cwd?: string;
        // Default config.
        defaults?: object;
        // Skip package.json files that have the namespaced config explicitly set to false.
        skipOnFalse?: boolean;
    }

    // Returns the config.
    function sync(namespace: string, options?: Options): JsonMap;
    // Pass in the config returned from any of the above methods.
    // Returns the filepath to the package.json file or null when not found.
    function filepath(config: JsonMap): string | null;
}

// Returns a Promise for the config.
declare function pkgConf(namespace: string, options?: pkgConf.Options): Promise<pkgConf.JsonMap>;

export = pkgConf;
