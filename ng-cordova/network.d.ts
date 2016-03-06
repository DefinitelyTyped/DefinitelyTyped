// Type definitions for ngCordova network plugin
// Project: https://github.com/driftyco/ng-cordova
// Definitions by: Kapil Sachdeva <https://github.com/ksachdeva>
// Definitions: https://github.com/ksachdeva/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare module ngCordova {

  export interface INetworkInformationService {

      getNetwork(): string;
      isOnline(): boolean;
      isOffline(): boolean;
      clearOfflineWatch(): void;
      clearOnlineWatch(): void;
  }

}
