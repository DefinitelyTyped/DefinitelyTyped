// Type definitions for angular-load v0.4.1
// Project: https://github.com/urish/angular-load
// Definitions by: david-gang <https://github.com/david-gang>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare module angular.load {

    interface IAngularLoadService {
        loadScript(url:string): ng.IPromise<any>;
        loadCss(url:string): ng.IPromise<any>;
    }

}
