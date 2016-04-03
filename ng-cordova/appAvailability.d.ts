// Type definitions for ngCordova AppAvailability plugin
// Project: https://github.com/driftyco/ng-cordova
// Definitions by: Kapil Sachdeva <https://github.com/ksachdeva>
// Definitions: https://github.com/ksachdeva/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare module ngCordova {

  export interface IAppAvailabilityService {
    check(urlScheme: string): ng.IPromise<any>;
  }

}
