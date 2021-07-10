// Type definitions for ngCordova device orientation plugin
// Project: https://github.com/driftyco/ng-cordova
// Definitions by: Michel Vidailhet <https://github.com/mvidailhet>, Kapil Sachdeva <https://github.com/ksachdeva>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="angular" />

declare namespace ngCordova {

  export interface IDeviceOrientationHeading {
      magneticHeading: number;
      trueHeading?: number | undefined;
      headingAccuracy?: number | undefined;
      timestamp?: number | undefined;
  }

  export interface IDeviceOrientationWatchOptions {
      frequency?: number | undefined;
      filter?: number | undefined;
  }

  export interface IDeviceOrientationWatchPromise extends ng.IPromise<IDeviceOrientationHeading> {
      watchID: number;
      cancel: () => void;
      clearWatch: (watchId?: number) => void;
  }

  export interface IDeviceOrientationService {
      getCurrentHeading(): ng.IPromise<IDeviceOrientationHeading>;
      watchHeading(options: IDeviceOrientationWatchOptions): IDeviceOrientationWatchPromise;
      clearWatch(watchID: number): void;
  }

}
