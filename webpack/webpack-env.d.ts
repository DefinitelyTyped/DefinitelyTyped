// Type definitions for webpack 1.12.2 (module API)
// Project: https://github.com/webpack/webpack
// Definitions by: use-strict <https://github.com/use-strict>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * Webpack module API - variables and global functions available inside modules
 */

declare namespace __WebpackModuleApi {
    interface RequireContext {
        keys(): string[];
        <T>(id: string): T;
        resolve(id: string): string;
    }

    interface RequireFunction {
        /**
         * Returns the exports from a dependency. The call is sync. No request to the server is fired. The compiler ensures that the dependency is available.
         */
        <T>(path: string): T;
        /**
         * Behaves similar to require.ensure, but the callback is called with the exports of each dependency in the paths array. There is no option to provide a chunk name.
         */
        (paths: string[], callback: (...modules: any[]) => void): void;
        /**
         * Download additional dependencies on demand. The paths array lists modules that should be available. When they are, callback is called. If the callback is a function expression, dependencies in that source part are extracted and also loaded on demand. A single request is fired to the server, except if all modules are already available.
         *
         * This creates a chunk. The chunk can be named. If a chunk with this name already exists, the dependencies are merged into that chunk and that chunk is used.
         */
        ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void, chunkName?: string) => void;
        context: (path: string, deep?: boolean, filter?: RegExp) => RequireContext;
        /**
         * Returns the module id of a dependency. The call is sync. No request to the server is fired. The compiler ensures that the dependency is available.
         *
         * The module id is a number in webpack (in contrast to node.js where it is a string, the filename).
         */
        resolve(path: string): number;
        /**
         * Like require.resolve, but doesn’t include the module into the bundle. It’s a weak dependency.
         */
        resolveWeak(path: string): number;
        /**
         * Ensures that the dependency is available, but don’t execute it. This can be use for optimizing the position of a module in the chunks.
         */
        include(path: string): void;
        /**
         * Multiple requires to the same module result in only one module execution and only one export. Therefore a cache in the runtime exists. Removing values from this cache cause new module execution and a new export. This is only needed in rare cases (for compatibility!).
         */
        cache: {
            [id: string]: any;
        }
    }
}

declare var require: __WebpackModuleApi.RequireFunction;

/**
 * The resource query of the current module.
 *
 * e.g. __resourceQuery === "?test" // Inside "file.js?test"
 */
declare var __resourceQuery: string;

/**
 * Equals the config options output.publicPath.
 */
declare var __webpack_public_path__: string;

/**
 * The raw require function. This expression isn’t parsed by the Parser for dependencies.
 */
declare var __webpack_require__: any;

/**
 * The internal chunk loading function
 *
 * @param chunkId The id for the chunk to load.
 * @param callback A callback function called once the chunk is loaded.
 */
declare var __webpack_chunk_load__: (chunkId: any, callback: (require: (id: string) => any) => void) => void;

/**
 * Access to the internal object of all modules.
 */
declare var __webpack_modules__: any[];

/**
 * Access to the hash of the compilation.
 *
 * Only available with the HotModuleReplacementPlugin or the ExtendedAPIPlugin
 */
declare var __webpack_hash__: any;

/**
 * Generates a require function that is not parsed by webpack. Can be used to do cool stuff with a global require function if available.
 */
declare var __non_webpack_require__: any;

/**
 * Equals the config option debug
 */
declare var DEBUG: boolean;
