// Type definitions for Parcel (module API)
// Project: https://github.com/parcel/parcel-bundler
// Definitions by: Fathy Boundjadj <https://github.com/fathyb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Based on @types/webpack-env

/**
 * Parcel module API - variables and global functions available inside modules
 */

declare namespace __ParcelModuleApi {
    interface RequireFunction {
        /**
         * Returns the exports from a dependency. The call is sync. No request to the server is fired. The compiler ensures that the dependency is available.
         */
        (path: string): any;
        <T>(path: string): T;
    }

    interface Module {
        exports: any;
        require(id: string): any;
        require<T>(id: string): T;
        id: string;
        filename: string;
        loaded: boolean;
        parent: any;
        children: any[];
        hot?: Hot;
    }
    type ModuleId = string|number;

    interface Hot {
        /**
         * Accept code updates for the specified dependencies. The callback is called when dependencies were replaced.
         * @param dependencies
         * @param callback
         */
        accept(dependencies: string[], callback: (updatedDependencies: ModuleId[]) => void): void;
        /**
         * Accept code updates for the specified dependencies. The callback is called when dependencies were replaced.
         * @param dependency
         * @param callback
         */
        accept(dependency: string, callback: () => void): void;
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

interface NodeRequire extends __ParcelModuleApi.RequireFunction {
}

declare var require: NodeRequire;

interface NodeModule extends __ParcelModuleApi.Module {}

declare var module: NodeModule;

/**
* Declare process variable
*/
declare namespace NodeJS {
    interface Process extends __ParcelModuleApi.NodeProcess {}
}
declare var process: NodeJS.Process;
