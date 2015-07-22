// Type definitions for ngCordova datepicker plugin
// Project: http://ngcordova.com
// Definitions by: Pascal Vantrepote
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../../cordova/plugins/DatePicker.d.ts"/>
/// <reference path="../../angularjs/angular.d.ts"/>

declare module ngCordova.plugins {
	
	interface IDatePicker {
		
		show(options: Object) : angular.IPromise<Date>;
		
	}
	
}