// Type definitions for Safari extension development
// Definitions by: Lionel Seguin <https://github.com/lseguin42>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="safari.d.ts" />

declare module safari {

	/**
	 * The SafariExtensionBar object that owns the DOM window that this instance of the SafariNamespace class was accessed from.
	 */
	let self: SafariExtensionBar;
}