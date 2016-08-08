// Type definitions for angular.throttle
// Project: https://github.com/BaggersIO/angular.throttle
// Definitions by: Stefan Steinhart <https://github.com/reppners>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path='../angularjs/angular.d.ts' />

declare namespace angular {
	interface IAngularStatic {
		throttle:( fn:Function, throttle:number, options?:{leading?:boolean; trailing?:boolean;} ) => Function;
	}
}
