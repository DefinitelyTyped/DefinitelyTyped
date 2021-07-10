// Type definitions for ngCordova geolocation plugin
// Project: https://github.com/driftyco/ng-cordova
// Definitions by: Kapil Sachdeva <https://github.com/ksachdeva>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="angular" />

declare namespace ngCordova {

    export interface IGeoPositionError {
      code:number;
      message:string;
    }

    export interface IGeoCoordinates {
      latitude?:number | undefined;
      longitude?:number | undefined;
      accuracy?:number | undefined;
      altitude?:number | undefined;
      heading?:number | undefined;
      speed?:number | undefined;
      altitudeAccuracy?:number | undefined;
    }

    export interface IGeoPosition {
      coords:IGeoCoordinates;
      timestamp:Date;
    }

    export interface IGeolocationOptions {
        timeout?: number | undefined;
        maximumAge?: number | undefined;
        enableHighAccuracy?: boolean | undefined;
    }

    export interface IGeolocationService {
        getCurrentPosition(options?: IGeolocationOptions) : ng.IPromise<IGeoPosition>;
        watchPosition(options?: IGeolocationOptions)  : ng.IPromise<IGeoPosition>;
        clearWatch(watchID: {[key: string]: any}) : void;
    }

}
