// Type definitions for ngCordova AppAvailability plugin
// Project: https://github.com/driftyco/ng-cordova
// Definitions by: Kapil Sachdeva <https://github.com/ksachdeva>
// Definitions: https://github.com/ksachdeva/DefinitelyTyped

/// <reference types="angular" />

declare namespace ngCordova {

  export interface IAppAvailabilityService {
    check(urlScheme: string): ng.IPromise<any>;
  }

}
