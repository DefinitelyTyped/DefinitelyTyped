// Type definitions for jquery.fullscreen
// Project: https://github.com/private-face/jquery.fullscreen
// Definitions by: Piraveen Kamalathas <https://github.com/piraveen>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

/**
 * Extends jQuery interface
 * i.e: To use $elem.fullscreen()
 */
interface JQuery {
	fullscreen(options?: Object): void;
}

/**
 * Interface for the jquery plugin
 */
interface JQueryFullscreen {
	/**
	 * [open Activate fullscreen mode in a specific element through static method]
	 * @param {Element} element [description]
	 * @param {Object}  options [description]
	 */
	open(element: Element, options?: Object): void;

	/**
	 * [close Deactivate fullscreen mode]
	 * TODO: have to check for params
	 */
	close(): void;

	/**
	 * [isFullScreen Get fullscreen status]
	 * @return {boolean} [description]
	 */
	isFullScreen(): boolean;

	/**
	 * [isNativelySupported Check if fullscreen is supported by the browser]
	 * @return {boolean} [description]
	 */
	isNativelySupported(): boolean;

	/**
	 * [exit Deactivate and destroy all fullscreen instances]
	 */
	exit(): void;
}

/**
 * Extends JqueryStatic ($)
 * i.e: To use $.fullscreen.functionName()
 */
interface JQueryStatic {
	fullscreen: JQueryFullscreen;
}
