// Type definitions for ngCordova network plugin
// Project: https://github.com/driftyco/ng-cordova
// Definitions by: Kapil Sachdeva <https://github.com/ksachdeva>
// Definitions: https://github.com/ksachdeva/DefinitelyTyped

/// <reference types="angular" />

declare namespace ngCordova {

  export interface INetworkInformationService {

      getNetwork(): string;
      isOnline(): boolean;
      isOffline(): boolean;
      clearOfflineWatch(): void;
      clearOnlineWatch(): void;
  }

}
