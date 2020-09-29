// Type definitions for angular.throttle
// Project: https://github.com/BaggersIO/angular.throttle
// Definitions by: Stefan Steinhart <https://github.com/reppners>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="angular" />

import * as angular from 'angular';

declare module 'angular' {
    interface IAngularStatic {
        throttle:( fn:Function, throttle:number, options?:{leading?:boolean; trailing?:boolean;} ) => Function;
    }
}
