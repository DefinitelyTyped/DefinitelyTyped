// Type definitions for Toastr 2.0.1
// Project: https://github.com/CodeSeven/toastr
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts" />

interface ToastrOptions {
	/**
	* Optionally override the animation easing to show or hide the toasts. Default is swing. swing and linear are built into jQuery.
	*/
	showEasing?: string;
	/**
	* Optionally override the animation easing to show or hide the toasts. Default is swing. swing and linear are built into jQuery.
	*/
	hideEasing?: string;
	/**
	* Use the jQuery show/hide method of your choice. These default to fadeIn/fadeOut. The methods fadeIn/fadeOut, slideDown/slideUp, and show/hide are built into jQuery.
	*/
	showMethod?: string;
	/**
	* Use the jQuery show/hide method of your choice. These default to fadeIn/fadeOut. The methods fadeIn/fadeOut, slideDown/slideUp, and show/hide are built into jQuery.
	*/
	hideMethod?: string;
	/**
	* Should a close button be shown
	*/
	closeButton?: boolean;
	/**
	* Html for the close button
	*/
	closeHtml?: string;
	/**
	* Should clicking on toast dismiss it?
	*/
	tapToDismiss?: boolean;
	/**
	* CSS class the toast element will be given
	*/
	toastClass?: string;
	/**
	* Id toast container will be given
	*/
	containerId?: string;
	/**
	* Should debug details be outputted to the console
	*/
	debug?: boolean;
	/**
	* Time in milliseconds the toast should take to show
	*/
	showDuration?: number;
	/**
	* onShown function callback
	**/
	onShown?: () => void;
	/**
	* Time in milliseconds the toast should take to hide
	*/
	hideDuration?: number;
	/**
	* onHidden function callback
	**/
	onHidden?: () => void;
	/**
	* Time in milliseconds the toast should be displayed after mouse over
	*/
	extendedTimeOut?: number;
	iconClasses?: {
		/**
		* Icon to use on error toasts
		*/
		error: string;
		/**
		* Icon to use on info toasts
		*/
		info: string;
		/**
		* Icon to use on success toasts
		*/
		success: string;
		/**
		* Icon to use on warning toasts
		*/
		warning: string;
	};
	/**
	* Icon to use for toast
	*/
	iconClass?: string;
	/**
	* Where toast should be displayed
	*/
	positionClass?: string;
	/**
	* Where toast should be displayed - background
	*/
	backgroundpositionClass?: string;
	/**
	* Time in milliseconds that the toast should be displayed
	*/
	timeOut?: number;
	/**
	* CSS class the title element will be given
	*/
	titleClass?: string;
	/**
	* CSS class the message element will be given
	*/
	messageClass?: string;
	/**
	* Set newest toast to appear on top
	**/
	newestOnTop?: boolean;
	/**
	* The element to put the toastr container
	**/
	target?: string;
	/**
	* Rather than having identical toasts stack, set the preventDuplicates property to true. Duplicates are matched to the previous toast based on their message content.
	*/
	preventDuplicates?: boolean;
	/**
	* Visually indicates how long before a toast expires.
	*/
	progressBar?: boolean;
	/**
	* Function to execute on toast click
	*/
	onclick?: () => void;
	/**
	* Set if toastr should parse containing html 
	**/
	allowHtml?: boolean;
}

interface ToastrDisplayMethod {
	/**
	* Create a toast
	*
	* @param message Message to display in toast
	*/
	(message: string): JQuery;
	/**
	* Create a toast
	*
	* @param message Message to display in toast
	* @param title Title to display on toast
	*/
	(message: string, title: string): JQuery;
	/**
	* Create a toast
	*
	* @param message Message to display in toast
	* @param title Title to display on toast
	* @param overrides Option values for toast
	*/
	(message: string, title: string, overrides: ToastrOptions): JQuery;
}

interface Toastr {
	/**
	* Clear toasts
	*/
	clear: {
		/**
		* Clear all toasts
		*/
		(): void;
		/**
		* Clear specific toast
		* 
		* @param toast Toast to clear
		*/
		(toast: JQuery): void;
	};
	/**
	* Create an error toast
	*/
	error: ToastrDisplayMethod;
	/**
	* Create an info toast
	*/
	info: ToastrDisplayMethod;
	/**
	* Create an options object
	*/
	options: ToastrOptions;
	/**
	* Create a success toast
	*/
	success: ToastrDisplayMethod;
	/**
	* Create a warning toast
	*/
	warning: ToastrDisplayMethod;
	/**
	* Get toastr version 
	*/
	version: string;
}

declare var toastr: Toastr;
declare module "toastr" {
	export = toastr;
}
