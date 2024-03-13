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

    interface ParcelRequireFunction {
        (moduleId: string, jumped?: boolean): any;
        cache: Record<string, Module>;
        hotData: Record<string, any>;
        parent: boolean;
    }

    interface Module {
        id: string;
        exports: any;
        bundle: ParcelRequireFunction;
        hot?: Hot | undefined;
    }

    type DependentModule = [ParcelRequireFunction, string];

    interface Hot {
        /**
         * Accept code updates and specify which parent modules should also potentially be hot reloaded. The callback is called when dependencies were replaced.
         */
        accept(callback?: ((getParents: () => DependentModule[]) => DependentModule[]) | (() => void)): void;
        /**
         * Add a one time handler, which is executed when the current module code is replaced.
         * Here you should destroy/remove any persistent resource you have claimed/created.
         * If you want to transfer state to the new module, add it to data object.
         * The data will be available at module.hot.data on the new module.
         * @param callback
         */
        dispose(callback: (data: any) => void): void;
        dispose(callback: <T>(data: T) => void): void;
        data: any;
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

interface NodeRequire extends __ParcelModuleApi.RequireFunction {}

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
