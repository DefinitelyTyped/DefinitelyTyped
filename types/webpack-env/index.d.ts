// Type definitions for webpack (module API) 1.15
// Project: https://github.com/webpack/webpack
// Definitions by: use-strict <https://github.com/use-strict>
//                 rhonsby <https://github.com/rhonsby>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/**
 * Webpack module API - variables and global functions available inside modules
 */

declare namespace __WebpackModuleApi {
    interface RequireResolve {
        (id: string): string | number;
    }

    interface RequireContext {
        keys(): string[];
        (id: string): any;
        <T>(id: string): T;
        resolve(id: string): string;
        /** The module id of the context module. This may be useful for module.hot.accept. */
        id: string;
    }

    interface RequireFunction {
        /**
         * Returns the exports from a dependency. The call is sync. No request to the server is fired. The compiler ensures that the dependency is available.
         */
        (path: string): any;
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
        ensure(paths: string[], callback: (require: NodeRequire) => void, chunkName?: string): void;
        ensure(paths: string[], callback: (require: NodeRequire) => void, errorCallback?: (error: any) => void, chunkName?: string): void;
        context(path: string, deep?: boolean, filter?: RegExp, mode?: "sync" | "eager" | "weak" | "lazy" | "lazy-once"): RequireContext;
        /**
         * Returns the module id of a dependency. The call is sync. No request to the server is fired. The compiler ensures that the dependency is available.
         *
         * The module id is a number in webpack (in contrast to node.js where it is a string, the filename).
         */
        resolve: NodeJS.RequireResolve;
        /**
         * Like require.resolve, but doesn’t include the module into the bundle. It’s a weak dependency.
         */
        resolveWeak(path: string): number | string;
        /**
         * Ensures that the dependency is available, but don’t execute it. This can be use for optimizing the position of a module in the chunks.
         */
        include(path: string): void;
        /**
         * Multiple requires to the same module result in only one module execution and only one export. Therefore a cache in the runtime exists. Removing values from this cache cause new module execution and a new export. This is only needed in rare cases (for compatibility!).
         */
        cache: {
            [id: string]: NodeModule;
        }
    }

    interface Module {
        exports: any;
        id: string;
        filename: string;
        loaded: boolean;
        parent: NodeModule | null;
        children: NodeModule[];
        hot?: Hot;
    }
    type ModuleId = string|number;

    interface HotNotifierInfo {
        type:
          | 'self-declined'
          | 'declined'
          | 'unaccepted'
          | 'accepted'
          | 'disposed'
          | 'accept-errored'
          | 'self-accept-errored'
          | 'self-accept-error-handler-errored';
        /**
         * The module in question.
         */
        moduleId: number;
        /**
         * For errors: the module id owning the accept handler.
         */
        dependencyId?: number;
        /**
         * For declined/accepted/unaccepted: the chain from where the update was propagated.
         */
        chain?: number[];
        /**
         * For declined: the module id of the declining parent
         */
        parentId?: number;
        /**
         * For accepted: the modules that are outdated and will be disposed
         */
        outdatedModules?: number[];
        /**
         * For accepted: The location of accept handlers that will handle the update
         */
        outdatedDependencies?: {
          [dependencyId: number]: number[];
        };
        /**
         * For errors: the thrown error
         */
        error?: Error;
        /**
         * For self-accept-error-handler-errored: the error thrown by the module
         * before the error handler tried to handle it.
         */
        originalError?: Error;
      }

    interface Hot {
        /**
         * Accept code updates for the specified dependencies. The callback is called when dependencies were replaced.
         * @param dependencies
         * @param callback
         */
        accept(dependencies: string[], callback?: (updatedDependencies: ModuleId[]) => void): void;
        /**
         * Accept code updates for the specified dependencies. The callback is called when dependencies were replaced.
         * @param dependency
         * @param callback
         */
        accept(dependency: string, callback?: () => void): void;
        /**
         * Accept code updates for this module without notification of parents.
         * This should only be used if the module doesn’t export anything.
         * The errHandler can be used to handle errors that occur while loading the updated module.
         * @param errHandler
         */
        accept(errHandler?: (err: Error) => void): void;
        /**
         * Do not accept updates for the specified dependencies. If any dependencies is updated, the code update fails with code "decline".
         */
        decline(dependencies: string[]): void;
        /**
         * Do not accept updates for the specified dependencies. If any dependencies is updated, the code update fails with code "decline".
         */
        decline(dependency: string): void;
        /**
         * Flag the current module as not update-able. If updated the update code would fail with code "decline".
         */
        decline(): void;
        /**
         * Add a one time handler, which is executed when the current module code is replaced.
         * Here you should destroy/remove any persistent resource you have claimed/created.
         * If you want to transfer state to the new module, add it to data object.
         * The data will be available at module.hot.data on the new module.
         * @param callback
         */
        dispose(callback: (data: any) => void): void;
        dispose(callback: <T>(data: T) => void): void;
        /**
         * Add a one time handler, which is executed when the current module code is replaced.
         * Here you should destroy/remove any persistent resource you have claimed/created.
         * If you want to transfer state to the new module, add it to data object.
         * The data will be available at module.hot.data on the new module.
         * @param callback
         */
        addDisposeHandler(callback: (data: any) => void): void;
        addDisposeHandler<T>(callback: (data: T) => void): void;
        /**
         * Remove a handler.
         * This can useful to add a temporary dispose handler. You could i. e. replace code while in the middle of a multi-step async function.
         * @param callback
         */
        removeDisposeHandler(callback: (data: any) => void): void;
        removeDisposeHandler<T>(callback: (data: T) => void): void;
        /**
         * Throws an exceptions if status() is not idle.
         * Check all currently loaded modules for updates and apply updates if found.
         * If no update was found, the callback is called with null.
         * If autoApply is truthy the callback will be called with all modules that were disposed.
         * apply() is automatically called with autoApply as options parameter.
         * If autoApply is not set the callback will be called with all modules that will be disposed on apply().
         * @param autoApply
         * @param callback
         */
        check(autoApply: boolean, callback: (err: Error, outdatedModules: ModuleId[]) => void): void;
        /**
         * Throws an exceptions if status() is not idle.
         * Check all currently loaded modules for updates and apply updates if found.
         * If no update was found, the callback is called with null.
         * The callback will be called with all modules that will be disposed on apply().
         * @param callback
         */
        check(callback: (err: Error, outdatedModules: ModuleId[]) => void): void;
        /**
         * If status() != "ready" it throws an error.
         * Continue the update process.
         * @param options
         * @param callback
         */
        apply(options: AcceptOptions, callback: (err: Error, outdatedModules: ModuleId[]) => void): void;
        /**
         * If status() != "ready" it throws an error.
         * Continue the update process.
         * @param callback
         */
        apply(callback: (err: Error, outdatedModules: ModuleId[]) => void): void;
        /**
         * Return one of idle, check, watch, watch-delay, prepare, ready, dispose, apply, abort or fail.
         */
        status(): string;
        /** Register a callback on status change. */
        status(callback: (status: string) => void): void;
        /** Register a callback on status change. */
        addStatusHandler(callback: (status: string) => void): void;
        /**
         * Remove a registered status change handler.
         * @param callback
         */
        removeStatusHandler(callback: (status: string) => void): void;

        active: boolean;
        data: any;
    }

    interface AcceptOptions {
        /**
         * If true the update process continues even if some modules are not accepted (and would bubble to the entry point).
         */
        ignoreUnaccepted?: boolean;
        /**
         * Ignore changes made to declined modules.
         */
        ignoreDeclined?: boolean;
        /**
         *  Ignore errors throw in accept handlers, error handlers and while reevaluating module.
         */
        ignoreErrored?: boolean;
        /**
         * Notifier for declined modules.
         */
        onDeclined?: (info: HotNotifierInfo) => void;
        /**
         * Notifier for unaccepted modules.
         */
        onUnaccepted?: (info: HotNotifierInfo) => void;
        /**
         * Notifier for accepted modules.
         */
        onAccepted?: (info: HotNotifierInfo) => void;
        /**
         * Notifier for disposed modules.
         */
        onDisposed?: (info: HotNotifierInfo) => void;
        /**
         * Notifier for errors.
         */
        onErrored?: (info: HotNotifierInfo) => void;
        /**
         * Indicates that apply() is automatically called by check function
         */
        autoApply?: boolean;
    }
    /**
    * Inside env you can pass any variable
    */
    interface NodeProcess {
        env?: any;
    }

    type __Require1 = (id: string) => any;
    type __Require2 = <T>(id: string) => T;
    type RequireLambda = __Require1 & __Require2;
}

interface NodeRequire extends NodeJS.Require {}

declare var require: NodeRequire;

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
declare var __webpack_chunk_load__: (chunkId: any, callback: (require: __WebpackModuleApi.RequireLambda) => void) => void;

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
 * Adds nonce to all scripts that webpack loads.
 *
 * To activate the feature a __webpack_nonce__ variable needs to be set in your entry script.
 */
declare var __webpack_nonce__: string;

/**
 * Equals the config option debug
 */
declare var DEBUG: boolean;

interface NodeModule extends NodeJS.Module {}

declare var module: NodeModule;

/**
* Declare process variable
*/
declare namespace NodeJS {
    interface Process extends __WebpackModuleApi.NodeProcess {}
    interface RequireResolve extends __WebpackModuleApi.RequireResolve {}
    interface Module extends __WebpackModuleApi.Module {}
    interface Require extends __WebpackModuleApi.RequireFunction {}
}
declare var process: NodeJS.Process;
