// Type definitions for Combokeys v1.1.7
// Project: https://github.com/substack/node-resolve
// Definitions by: Ian Clanton-Thuon <https://github.com/iclanton>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Resolve {
    interface ResolveFunc {
        /**
         * implements the node require.resolve() algorithm such that you can require.resolve() on behalf of a file asynchronously
         * 
         * @param {id} a module ID
         * @param {opts} resolve options
         * @param {cb} a callback function
         */
        (id: string, opts: IResolveOptsAsync, cb: (error: Error, resolution: string) => void): void;

        /**
         * implements the node require.resolve() algorithm such that you can require.resolve() on behalf of a file asynchronously
         * 
         * @param {id} a module ID
         * @param {cb} a callback function
         */
        (id: string, cb: (error: Error, resolution: string) => void): void;

        /**
         * implements the node require.resolve() algorithm such that you can require.resolve() on behalf of a file synchronously
         * 
         * @param {id} a module ID
         * @param {opts} resolve options
         * @returns the path to the module's "main" package
         */
        sync(id: string, opts?: IResolveOptsSync): string;

        /**
         * return whether a package is in core
         * 
         * @param {id} a module ID
         * @returns true if the package is in core, otherwise false
         */
        isCore(id: string): boolean;
    }

    interface IResolveOptsAsync extends IResolveOptsBase {
        /**
         * function to read files asynchronously
         * 
         * @param {filename} a file path
         * @param {encoding} the encoding of the file referenced in @see {@param filename}
         * @param {callback} a callback function
         */
        readFile?: (filename: string, encoding: string, callback: (err: Error, data: string) => void) => void;

        /**
         * function to asynchronously test whether a file exists
         * 
         * @param {filename} a file path
         * @param {callback} a callback function
         */
        isFile?: (filename: string, callback: (error: Error, isFile?: boolean) => void) => void;
    }

    interface IResolveOptsSync extends IResolveOptsBase {
        /**
         * function to read files synchronously
         * 
         * @param {filename} a file path
         * @param {encoding} the encoding of the file referenced in @see {@param filename}
         * @returns the contents of the file referenced in @see {@param filename}
         */
        readFile?: (filename: string, encoding: string) => string;

        /**
         * function to synchronously test whether a file exists
         * 
         * @param {filename} a file path
         * @returns true if the file referenced in @see {@param filename} exists, otherwise false
         */
        isFile?: (filename: string) => boolean;
    }

    interface IResolveOptsBase {
        /**
         * directory to begin resolving from
         */
        baseDir?: string;

        /**
         * package.json data applicable to the module being loaded
         */
        package?: any;

        /**
         * array of file extensions to search in order
         */
        extensions?: string[];

        /**
         * function to transform the parsed package.json contents before looking at the "main" field
         * 
         * @param {pkg} parsed package.json contents
         * @param {pkgFile} path to the package.json file
         */
        packageFilter?: (pkg: { main: string }, pkgFile?: string) => { main: string };

        /**
         * function to transform a path within a package
         * 
         * @param {pkg} parsed package.json contents
         * @param {pkgFile} the path being resolved
         * @param {relativePath} the path relative from the package.json location
         * @returns a relative path that will be joined from the package.json location
         */
        pathFilter?: (pkg: { main: string }, path: string, relativePath: string) => string;

        /**
         * require.paths array to use if nothing is found on the normal node_modules recursive walk (probably don't use this)
         */
        paths?: string[];

        /**
         * directory (or directories) in which to recursively look for modules. default: "node_modules"
         */
        moduleDirectory?: string | string[];
    }
}

declare var resolve: Resolve.ResolveFunc;

declare module "resolve" {
    export = resolve;
}
