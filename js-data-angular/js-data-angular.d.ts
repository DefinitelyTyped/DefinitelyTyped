// Type definitions for JSDataAngular v2.1.0
// Project: https://github.com/js-data/js-data-angular
// Definitions by: Stefan Steinhart <https://github.com/reppners>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../js-data/js-data.d.ts" />
/// <reference path="../angularjs/angular.d.ts" />

declare module JSData {

    interface DSProvider {
        defaults:DSConfiguration;
    }

    interface DS {

        bindAll<T>(resourceName:string, params:DSFilterParams, scope:ng.IScope, expr:string, cb?:(err:DSError, items:Array<T>)=>void):Function;

        bindOne<T>(resourceName:string, id:string | number, scope:ng.IScope, expr:string, cb?:(err:DSError, item:T)=>void):Function;
    }

    interface DSResourceDefinition<T> {

        bindAll<T>(params:DSFilterParams, scope:ng.IScope, expr:string, cb?:(err:DSError, items:Array<T>)=>void):Function;

        bindOne<T>(id:string | number, scope:ng.IScope, expr:string, cb?:(err:DSError, item:T)=>void):Function;
    }
}