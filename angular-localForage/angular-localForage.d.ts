// Type definitions for angular-localForage 1.2.2
// Project: https://github.com/ocombe/angular-localForage
// Definitions by: Stefan Steinhart <https://github.com/reppners>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../localForage/localForage.d.ts" />
/// <reference path="../angularjs/angular.d.ts" />

declare module angular.localForage {

    interface LocalForageConfig {
        driver?:string;
        name?:string | number;
        version?:number;
        storeName?:string;
        description?:string;
    }

    interface ILocalForageProvider {
        config(config:LocalForageConfig):void;
        setNotify(onItemSet:boolean, onItemRemove:boolean):void;
    }

    interface ILocalForageService {
        setDriver(driver:string):angular.IPromise<void>;
        driver<T>():lf.ILocalForage<T>;

        setItem(key:string, value:any):angular.IPromise<void>;
        setItem(keys:Array<string>, values:Array<any>):angular.IPromise<void>;

        getItem(key:string):angular.IPromise<any>;
        getItem(keys:Array<string>):angular.IPromise<Array<any>>;

        removeItem(key:string | Array<string>):angular.IPromise<void>;

        pull(key:string):angular.IPromise<any>;
        pull(keys:Array<string>):angular.IPromise<Array<any>>;

        clear():angular.IPromise<void>;

        key(n:number):angular.IPromise<string>;

        keys():angular.IPromise<string>;

        length():angular.IPromise<number>;

        iterate<T>(iteratorCallback:(value:string | number, key:string)=>T):angular.IPromise<T>;

        bind($scope:ng.IScope, key:string):angular.IPromise<any>;

        bind($scope:ng.IScope, config:{
            key:string;
            defaultValue?:any;
            scopeKey?:string;
            name?:string;
        }):angular.IPromise<any>;

        unbind($scope:ng.IScope, key:string, scopeKey?:string):void;

        createInstance(config:LocalForageConfig):ILocalForageService;
        instance(name:string):ILocalForageService;
    }
}
