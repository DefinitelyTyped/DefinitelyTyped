// Type definitions for Facebook Javascript SDK
// Project: https://developers.facebook.com/docs/javascript
// Definitions by: Joshua Strobl <https://github.com/JoshStrobl>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface FBInitParams{
	appId ?: string;
	authResponse ?: string;
	cookie ?: boolean;
	frictionlessRequests ?: boolean;
	hideFlashCallback ?: Function;
	logging ?: boolean;
	status ?: boolean;
	version ?: string;
	xfbml ?: boolean;
}

interface FBUIParams{
	method : string;
}

interface FBLoginOptions{
	auth_type ?: string;
	scopes ?: string;
	return_scopes ?: boolean;
	enable_profile_selector ?: boolean;
	profile_selector_ids ?: string;
}

interface FBSDKEvents{
	/* This method allows you to subscribe to a range of events, and define callback functions for when they fire. */
	subscribe(event : string, callback : (fbResponseObject : Object) => any) : void;

	/* This method allows you to un-subscribe a callback from any events previously subscribed to using .Event.subscribe(). */
	unsubscribe(event : string, callback : (fbResponseObject : Object) => any) : void;
}

interface FBSDKXFBML{
	/* This function parses and renders XFBML markup in a document on the fly. */
	parse(ParseElement ?: Element) : void;
	parse(ParseElement ?: HTMLElement) : void;
}

interface FBSDKCanvasPrefetcher{
	/* Tells Facebook that the current page uses a specified resource. */
	addStaticResource(res : string) : void;

	/* Controls how statistics are collected on resources used by your application. */
	setCollectionMode(option : string) : void;
}

interface FBSDKCanvasSize{
	height ?: Number;
	width ?: Number;
}

interface FBSDKCanvasDoneLoading{
	time_delta_ms : Number;
}

interface FBSDKCanvas{
	Prefetcher : FBSDKCanvasPrefetcher;

	/* Hides the HTML element passed in via the elem param from view. */
	hideFlashElement(element : Element) : void;
	hideFlashElement(element : HTMLElement) : void;

	/* Displays the HTML element passed in via the elem param, after it has been hidden via FB.Canvas.hideFlashElement. */
	showFlashElement(element : Element) : void;
	showFlashElement(element : HTMLElement) : void;

	/* Tells Facebook to scroll to a specific location of your canvas page. */
	scrollTo(x : Number, y : Number) : void;

	/* Starts or stops a timer which will grow your iframe to fit the content every few milliseconds. */
	setAutoGrow(stopTimer : boolean) : void;
	setAutoGrow(diffInterval : Number) : void;
	setAutoGrow(stopTimer : boolean, diffInterval : Number) : void

	/* Tells Facebook to resize your iframe. */
	setSize(canvasSizeOptions : FBSDKCanvasSize) : void;

	/* Registers the callback for inline processing (i.e. without page reload) of user actions when they click on any link to the current app from Canvas */
	setUrlHandler(handler ?: Function) : string;

	/* Calls you back with an integer, in milliseconds, of the timing of the page load, beginning from the time when the first bytes arrive on
		the client, and ending from the point at which you call this function.
	*/
	setDoneLoading(handler ?: Function) : FBSDKCanvasDoneLoading;

	/* Call startTimer to resume the timer after a period of time for the page load that you didn't wish to measure, which you began by calling stopTimer. */
	startTimer() : void;

	/* Call stopTimer when you wish to stop timing the page load for a period of time */
	stopTimer(handler ?: (fbResponseObject : Object) => any) : void;
}

interface FBSDK{
	/* This method is used to initialize and setup the SDK. */
	init(fbInitObject : FBInitParams) : void;

	/* This method lets you make calls to the Graph API. */
	api(path : string, method : string, callback : (fbResponseObject : Object) => any) :  Object;
	api(path : string, params : Object, callback : (fbResponseObject : Object) => any) :  Object;
	api(path : string, method : string, params : Object, callback : (fbResponseObject : Object) => any) : Object;

	/* This method is used to trigger different forms of Facebook created UI dialogs. */
	ui(params : FBUIParams, handler : (fbResponseObject : Object) => any) : void;

	/* Allows you to determine if a user is logged in to Facebook and has authenticated your app */
	getLoginStatus(handler : Function, force ?: Boolean) : void;

	/* Calling FB.login prompts the user to authenticate your application using the Login Dialog. */
	login(handler : (fbResponseObject : Object) => any, params ?: FBLoginOptions): void;

	/* Log the user out of your site and Facebook */
	logout(handler : (fbResponseObject : Object) => any) : void;

	/* Synchronous accessor for the current authResponse. */
	getAuthResponse() : Object;

	Event : FBSDKEvents;
	XFBML : FBSDKXFBML;
	Canvas : FBSDKCanvas;
}

interface Window{
	fbAsyncInit() : any;
}

declare module "FB" {
	export = FB;
}

declare var FB : FBSDK;