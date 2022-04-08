// Type definitions for ngCordova device orientation plugin
// Project: https://github.com/driftyco/ng-cordova
// Definitions by: Michel Vidailhet <https://github.com/mvidailhet>, Kapil Sachdeva <https://github.com/ksachdeva>
// Definitions: https://github.com/ksachdeva/DefinitelyTyped

/// <reference types="angular" />

declare namespace ngCordova {

  export interface IDeviceOrientationHeading {
      magneticHeading: number;
      trueHeading?: number;
      headingAccuracy?: number;
      timestamp?: number;
  }

  export interface IDeviceOrientationWatchOptions {
      frequency?: number;
      filter?: number;
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
