// Type definitions for oc.LazyLoad
// Project: https://github.com/ocombe/ocLazyLoad
// Definitions by: Roland Zwaga <https://github.com/rolandzwaga>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="angular" />

import * as ng from 'angular';

export as namespace oc;

export interface ILazyLoad {
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

export interface ITypedModuleConfig extends IOptionsConfig {
    /**
     * The file extension, without the period. For example, 'html'.
     */
    type: string;

    /**
     * The file path, including file name.
     */
    path: string;
}

export interface IModuleConfig extends IOptionsConfig {
    /**
     * The name of the module for easy retrieval later.
     */
    name?: string;

    /**
     * The list of files to be loaded for this module.
     */
    files: string[];
}

export interface IOptionsConfig extends ng.IRequestShortcutConfig {
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

export interface ILazyLoadProvider {
    /**
     * Configures the main service provider.
     * @param config The configuration settings to use
     */
    config(config: IProviderConfig): void;
}

export interface IProviderConfig {
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

declare module 'angular' {
    interface IAngularStatic {
        /**
         * The angular.module is a global place for creating, registering and retrieving Angular modules. All modules (angular core or 3rd party) that should be available to an application must be registered using this mechanism.
         *
         * When passed two or more arguments, a new module is created. If passed only one argument, an existing module (the name passed as the first argument to module) is retrieved.
         *
         * @param name The name of the module to create or retrieve.
         * @param requires The names of modules this module depends on, and/or ocLazyLoad module configurations. If specified then new module is being created. If unspecified then the module is being retrieved for further configuration.
         * @param configFn Optional configuration function for the module.
         */
        module(name: string, requires?: (string | IModuleConfig)[], configFn?: Function): IModule;
    }
}
