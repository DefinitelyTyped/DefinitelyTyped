// Type definitions for angular-load v0.4.1
// Project: https://github.com/urish/angular-load
// Definitions by: david-gang <https://github.com/david-gang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="angular" />

declare namespace angular.load {

    interface IAngularLoadService {
        loadScript(url:string): ng.IPromise<any>;
        loadCSS(url:string): ng.IPromise<any>;
    }

}
