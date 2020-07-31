// Type definitions for oc.LazyLoad 1.0.2
// Project: https://github.com/ocombe/ocLazyLoad
// Definitions by: Roland Zwaga <https://github.com/rolandzwaga>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="angular" />
/// <reference path="./oclazyload.d.ts" />

declare var _: string;
export = _;

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
        module(name: string, requires?: (string | oc.IModuleConfig)[], configFn?: Function): IModule;
    }
}
