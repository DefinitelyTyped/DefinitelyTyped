// Type definitions for ngCordova toast plugin
// Project: https://github.com/driftyco/ng-cordova
// Definitions by: Kapil Sachdeva <https://github.com/ksachdeva>
// Definitions: https://github.com/ksachdeva/DefinitelyTyped

/// <reference types="angular" />

declare namespace ngCordova {

	interface IToastService {

		showShortTop(message:string):angular.IPromise<any>;
		showShortCenter(message:string):angular.IPromise<any>;
		showShortBottom(message:string):angular.IPromise<any>;

	  	showLongTop(message:string):angular.IPromise<any>;
		showLongCenter(message:string):angular.IPromise<any>;
		showLongBottom(message:string):angular.IPromise<any>;

	  	show(message:string, duration:string, position:string):angular.IPromise<any>;
	}
}
