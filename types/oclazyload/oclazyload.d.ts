/// <reference types="angular" />

declare namespace oc {
    interface ILazyLoad {
        /**
         * Loads a module or a list of modules into Angular.
         *
         * @param module The name of a predefined module config object, or a module config object, or an array of either
         * @param config Options to be used when loading the modules
         */
        load(module: string|ITypedModuleConfig|IModuleConfig|(string|ITypedModuleConfig|IModuleConfig)[], config?: IOptionsConfig): ng.IPromise<any>;

        /**
         * Defines a module config object.
         * @param config The module config object
         * @returns The module config object that was passed in
         */
        setModuleConfig(config: IModuleConfig): IModuleConfig;

        /**
         * Gets the specified module config object.
         * @param name The name of the module config object to get
         */
        getModuleConfig(name: string): IModuleConfig;

        /**
         * Gets the list of loaded module names.
         */
        getModules(): string[];

        /**
         * Checks if a module name, or list of modules names, has been previously loaded into Angular.
         */
        isLoaded(moduleName: string|string[]): boolean;

        /**
         * Injects a module with the associated name into Angular. Useful for manual injection when loading through RequireJS, SystemJS, etc. Useful in
         * conjunction with the toggleWatch() method.
         */
        inject(moduleName: string|string[]): ng.IPromise<any>;

        /**
         * Enables or disables watching Angular for new modules. Useful in conjunction with the inject() method. Make sure to not keep the watch enabled
         * indefinitely, or unexpected results may occur.
         */
        toggleWatch(watch: boolean): void;
    }

    interface ITypedModuleConfig extends IOptionsConfig {
        /**
         * The file extension, without the period. For example, 'html'.
         */
        type: string;

        /**
         * The file path, including file name.
         */
        path: string;
    }

    interface IModuleConfig extends IOptionsConfig {
        /**
         * The name of the module for easy retrieval later.
         */
        name?: string;

        /**
         * The list of files to be loaded for this module.
         */
        files?: string[];
    }

    interface IOptionsConfig extends ng.IRequestShortcutConfig {
        /**
         * If true, bypasses browser cache by appending a timestamp to URLs. Defaults to true.
         */
        cache?: boolean;

        /**
         * If true, a module config will be invoked each time the module is reloaded. Use with caution, as re-invoking configs can lead to unexpected results.
         * Defaults to false.
         */
        reconfig?: boolean;

        /**
         * If true, a module run block will be invoked each time the module is reloaded. Use with caution, as re-invoking run blocks can lead to unexpected results.
         * Defaults to false.
         */
        rerun?: boolean;

        /**
         * If true, will load files in a series, instead of in parallel. Defaults to false.
         */
        serie?: boolean;

        /**
         * If set, will insert files immediately before the provided CSS selector, instead of the default behavior of inserting files immediately before the
         * last child of the <head> element. Defaults to undefined.
         */
        insertBefore?: string;
    }

    interface ILazyLoadProvider {
        /**
         * Configures the main service provider.
         * @param config The configuration settings to use
         */
        config(config: IProviderConfig): void;
    }

    interface IProviderConfig {
        /**
         * If true, all errors will be logged to the console, in addition to rejecting a promise. Defaults to false.
         */
        debug?: boolean;

        /**
         * If true, an event will be broadcast whenever a module, component or file is loaded. Events that can be broadcast are: ocLazyLoad.moduleLoaded,
         * ocLazyLoad.moduleReloaded, ocLazyLoad.componentLoaded, ocLazyLoad.fileLoaded. Defaults to false.
         */
        events?: boolean;

        /**
         * Predefines a set of module configurations for later use. A name must be provided for each module so that it can be retrieved later.
         */
        modules?: IModuleConfig[];
    }
}
