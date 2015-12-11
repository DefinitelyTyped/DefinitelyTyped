// Type definitions for ngCordova badge plugin
// Project: https://github.com/driftyco/ng-cordova
// Definitions by: Phil McCloghry-Laing <https://github.com/pmccloghrylaing>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare module ngCordova {
    export interface IBadgeService {
        hasPermission(): ng.IPromise<boolean>;
        promptForPermission(): ng.IPromise<any>;
        set(badge: number, callback?: Function, scope?: {}): ng.IPromise<any>;
        get(): ng.IPromise<number>;
        clear(callback?: Function, scope?: {}): ng.IPromise<any>;
        increase(count?: number, callback?: Function, scope?: {}): ng.IPromise<any>;
        decrease(count?: number, callback?: Function, scope?: {}): ng.IPromise<any>;
    }
}
