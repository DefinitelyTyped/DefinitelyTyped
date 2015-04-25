// Type definitions for oc.LazyLoad
// Project: https://github.com/ocombe/ocLazyLoad
// Definitions by: Roland Zwaga <https://github.com/rolandzwaga>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare module oc {

    interface ILazyLoadConfig {
        asyncLoader:any;
        loadedModules?:string[];
        modules?:ILazyLoadModuleConfig[];
    }

    interface ILazyLoadModuleConfig {
        name:string;
        files:string[];
    }

    interface ILazyLoad {
        load(module:any):ng.IPromise<any>;
        loadTemplateFile(url:string, config:ILazyLoadModuleConfig):ng.IPromise<any>;
        loadTemplateFile(urls:string[], config:ILazyLoadModuleConfig):ng.IPromise<any>;
        getModuleName(moduleName:string):string;
        getModules():string[];
        getModuleConfig(name:string):ILazyLoadModuleConfig;
        setModuleConfig(config:ILazyLoadModuleConfig):void;
    }

    interface ILazyLoadProvider {
        config(config:ILazyLoadConfig):void;
    }
}