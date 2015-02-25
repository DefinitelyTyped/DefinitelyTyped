// Type definitions for JSDataAngular v2.1.0
// Project: https://github.com/js-data/js-data-angular
// Definitions by: Stefan Steinhart <https://github.com/reppners>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../js-data/js-data.d.ts" />
/// <reference path="../angularjs/angular.d.ts" />

declare module JSData {

    class ngDS extends DS {

        // sync methods
        bindAll<T>(scope:ng.IScope, expr:string, resourceName:string, params:DSFilterParams, cb?:(err:DSError, items:Array<T>)=>void):Function;

        bindOne<T>(scope:ng.IScope, expr:string, resourceName:string, id:string, cb?:(err:DSError, item:T)=>void):Function;
        bindOne<T>(scope:ng.IScope, expr:string, resourceName:string, id:number, cb?:(err:DSError, item:T)=>void):Function;
    }
}