// Type definitions for JSDataAngular v2.1.0
// Project: https://github.com/js-data/js-data-angular
// Definitions by: Stefan Steinhart <https://github.com/reppners>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="js-data" />
/// <reference types="angular" />

import * as JSData from 'js-data';
import * as ng from 'angular';

declare module 'js-data' {

    interface DSProvider {
        defaults:DSConfiguration;
    }

    interface DS {
        bindAll<T>(resourceName:string, params:DSFilterParams, scope:ng.IScope, expr:string, cb?:(err:DSError, items:Array<T & DSInstanceShorthands<T>>)=>void):Function;
        bindOne<T>(resourceName:string, id:string | number, scope:ng.IScope, expr:string, cb?:(err:DSError, item:T & DSInstanceShorthands<T>)=>void):Function;
    }

    interface DSResourceDefinition<T> {
        bindAll(params:DSFilterParams, scope:ng.IScope, expr:string, cb?:(err:DSError, items:Array<T & DSInstanceShorthands<T>>)=>void):Function;
        bindOne(id:string | number, scope:ng.IScope, expr:string, cb?:(err:DSError, item:T & DSInstanceShorthands<T>)=>void):Function;
    }
}
