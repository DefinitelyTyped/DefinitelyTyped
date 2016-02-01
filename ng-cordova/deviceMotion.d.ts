// Type definitions for ngCordova device motion plugin
// Project: https://github.com/driftyco/ng-cordova
// Definitions by: Michel Vidailhet <https://github.com/mvidailhet>, Kapil Sachdeva <https://github.com/ksachdeva>
// Definitions: https://github.com/ksachdeva/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare module ngCordova {

  export interface IDeviceMotionAcceleration {
        x: number;
        y: number;
        z: number;
        timestamp: number;
    }

    export interface IDeviceMotionAccelerometerOptions {
        frequency: number;
    }

    export interface IDeviceMotionWatchPromise extends ng.IPromise<IDeviceMotionAcceleration> {
        watchID: number;
        cancel: () => void;
        clearWatch: (watchId?: number) => void;
    }

    export interface IDeviceMotionService {
        getCurrentAcceleration(): ng.IPromise<IDeviceMotionAcceleration>;
        watchAcceleration(options: IDeviceMotionAccelerometerOptions): IDeviceMotionWatchPromise;
        clearWatch(watchId: number): void;
    }

}
