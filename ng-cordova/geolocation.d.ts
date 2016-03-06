// Type definitions for ngCordova geolocation plugin
// Project: https://github.com/driftyco/ng-cordova
// Definitions by: Kapil Sachdeva <https://github.com/ksachdeva>
// Definitions: https://github.com/ksachdeva/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare module ngCordova {

    export interface IGeoPositionError {
      code:number;
      message:string;
    }

    export interface IGeoCoordinates {
      latitude?:number;
      longitude?:number;
      accuracy?:number;
      altitude?:number;
      heading?:number;
      speed?:number;
      altitudeAccuracy?:number;
    }

    export interface IGeoPosition {
      coords:IGeoCoordinates;
      timestamp:Date;
    }

    export interface IGeolocationOptions {
        timeout?: number;
        maximumAge?: number;
        enableHighAccuracy?: boolean;
    }

    export interface IGeolocationService {
        getCurrentPosition(options?: IGeolocationOptions) : ng.IPromise<IGeoPosition>;
        watchPosition(options?: IGeolocationOptions)  : ng.IPromise<IGeoPosition>;
        clearWatch(watchID: {[key: string]: any}) : void;
    }

}
