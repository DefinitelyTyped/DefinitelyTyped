// Type definitions for ngCordova datepicker plugin
// Project: https://github.com/driftyco/ng-cordova
// Definitions by: Jacques Kang <https://www.linkedin.com/in/jacqueskang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare module ngCordova {
    export interface IAppVersionService {
        getVersionNumber(): ng.IPromise<string>;
        getVersionCode(): ng.IPromise<string>;
    }
}
