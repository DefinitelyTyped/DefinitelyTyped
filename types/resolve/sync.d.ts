interface ToString {
    toString(): string;
}

type StringOrToString = string | ToString;

/**
 * Synchronously resolve the module path string id, returning the result and throwing an error when id can't be resolved.
 *
 * @param id Identifier to resolve
 * @param options Options to use for resolving, optional.
 */
declare function resolveSync(id: string, opts?: resolveSync.SyncOpts): string;

// https://github.com/Microsoft/TypeScript/issues/3496#issuecomment-128553540
type JSONValue = string | number | boolean | JSONObject | JSONArray;
interface JSONObject {
    [x: string]: JSONValue;
}
interface JSONArray extends Array<JSONValue> {}

declare namespace resolveSync {
    export type PackageJSON = JSONObject;

    interface Opts {
        /** directory to begin resolving from (defaults to __dirname) */
        basedir?: string | undefined;
        /** package.json data applicable to the module being loaded */
        package?: any;
        /** set to false to exclude node core modules (e.g. fs) from the search */
        includeCoreModules?: boolean | undefined;
        /** array of file extensions to search in order (defaults to ['.js']) */
        extensions?: string | readonly string[] | undefined;
        /** transform the parsed package.json contents before looking at the "main" field */
        packageFilter?: ((pkg: PackageJSON, pkgFile: string, dir: string) => PackageJSON) | undefined;
        /** transform a path within a package */
        pathFilter?: ((pkg: PackageJSON, path: string, relativePath: string) => string) | undefined;
        /** require.paths array to use if nothing is found on the normal node_modules recursive walk (probably don't use this) */
        paths?: string | readonly string[] | undefined;
        /** return the list of candidate paths where the packages sources may be found (probably don't use this) */
        packageIterator?:
            | ((request: string, start: string, getPackageCandidates: () => string[], opts: Opts) => string[])
            | undefined;
        /** directory (or directories) in which to recursively look for modules. (default to 'node_modules') */
        moduleDirectory?: string | readonly string[] | undefined;
        /**
         * if true, doesn't resolve `basedir` to real path before resolving.
         * This is the way Node resolves dependencies when executed with the --preserve-symlinks flag.
         *
         * Note: this property is currently true by default but it will be changed to false in the next major version because Node's resolution
         * algorithm does not preserve symlinks by default.
         */
        preserveSymlinks?: boolean | undefined;
    }

    interface BaseSyncOpts extends Opts {
        /** function to synchronously test whether a file exists */
        isFile?: ((file: string) => boolean) | undefined;
        /** function to synchronously test whether a directory exists */
        isDirectory?: ((directory: string) => boolean) | undefined;
        /** function to synchronously resolve a potential symlink to its real path */
        realpathSync?: ((file: string) => string) | undefined;
    }

    export type SyncOpts =
        & BaseSyncOpts
        & ({
            /** how to read files synchronously (defaults to fs.readFileSync) */
            readFileSync?: ((file: string) => StringOrToString) | undefined;
            /** function to synchronously read and parse a package.json file */
            readPackageSync?: never | undefined;
        } | {
            /** how to read files synchronously (defaults to fs.readFileSync) */
            readFileSync?: never | undefined;
            /** function to synchronously read and parse a package.json file */
            readPackageSync?:
                | ((
                    readFileSync: (file: string) => StringOrToString,
                    pkgfile: string,
                ) => Record<string, unknown> | undefined)
                | undefined;
        });
}

export = resolveSync;
