// Type definitions for angular-loading-bar
// Project: https://github.com/chieffancypants/angular-loading-bar
// Definitions by: Stephen Lautier <https://github.com/stephenlautier>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />


declare namespace angular {

	interface IRequestShortcutConfig {
		/**
		 * Indicates that the loading bar should be hidden.
		 */
		ignoreLoadingBar?: boolean;
	}
}

declare namespace angular.loadingBar {

	interface ILoadingBarProvider{
		/**
		* Turn the spinner on or off
		*/
		includeSpinner?: boolean;

		/**
		* Turn the loading bar on or off
		*/
		includeBar?: boolean;

		/**
		* HTML template
		*/
		spinnerTemplate?: string;

		/**
		* Latency Threshold
		*/
		latencyThreshold?: number;
	}

}
