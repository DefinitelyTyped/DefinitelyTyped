// Type definitions for jQuery 1.10.x / 2.0.x
// Project: http://jquery.com/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>, Christian Hoffmeister <https://github.com/choffmeister>, Steve Fenton <https://github.com/Steve-Fenton>, Diullei Gomes <https://github.com/Diullei>, Tass Iliopoulos <https://github.com/tasoili>, Jason Swearingen <https://github.com/jasons-novaleaf>, Sean Hill <https://github.com/seanski>, Guus Goossens <https://github.com/Guuz>, Kelly Summerlin <https://github.com/ksummerlin>, Basarat Ali Syed <https://github.com/basarat>, Nicholas Wolverson <https://github.com/nwolverson>, Derek Cicerone <https://github.com/derekcicerone>, Andrew Gaspar <https://github.com/AndrewGaspar>, James Harrison Fisher <https://github.com/jameshfisher>, Seikichi Kondo <https://github.com/seikichi>, Benjamin Jackman <https://github.com/benjaminjackman>, Poul Sorensen <https://github.com/s093294>, Josh Strobl <https://github.com/JoshStrobl>, John Reilly <https://github.com/johnnyreilly/>, Dick van den Brink <https://github.com/DickvdBrink>, Thomas Schulz <https://github.com/King2500>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */


/**
 * Interface for the AJAX setting that will configure the AJAX request
 * @see {@link https://api.jquery.com/jQuery.ajax/#jQuery-ajax-settings}
 */
interface JQueryAjaxSettings {
    /**
     * The content type sent in the request header that tells the server what kind of response it will accept in return. If the accepts setting needs modification, it is recommended to do so once in the $.ajaxSetup() method.
     */
    accepts?: any;
    /**
     * By default, all requests are sent asynchronously (i.e. this is set to true by default). If you need synchronous requests, set this option to false. Cross-domain requests and dataType: "jsonp" requests do not support synchronous operation. Note that synchronous requests may temporarily lock the browser, disabling any actions while the request is active. As of jQuery 1.8, the use of async: false with jqXHR ($.Deferred) is deprecated; you must use the success/error/complete callback options instead of the corresponding methods of the jqXHR object such as jqXHR.done() or the deprecated jqXHR.success().
     */
    async?: boolean;
    /**
     * A pre-request callback function that can be used to modify the jqXHR (in jQuery 1.4.x, XMLHTTPRequest) object before it is sent. Use this to set custom headers, etc. The jqXHR and settings objects are passed as arguments. This is an Ajax Event. Returning false in the beforeSend function will cancel the request. As of jQuery 1.5, the beforeSend option will be called regardless of the type of request.
     */
    beforeSend? (jqXHR: JQueryXHR, settings: JQueryAjaxSettings): any;
    /**
     * If set to false, it will force requested pages not to be cached by the browser. Note: Setting cache to false will only work correctly with HEAD and GET requests. It works by appending "_={timestamp}" to the GET parameters. The parameter is not needed for other types of requests, except in IE8 when a POST is made to a URL that has already been requested by a GET.
     */
    cache?: boolean;
    /**
     * A function to be called when the request finishes (after success and error callbacks are executed). The function gets passed two arguments: The jqXHR (in jQuery 1.4.x, XMLHTTPRequest) object and a string categorizing the status of the request ("success", "notmodified", "error", "timeout", "abort", or "parsererror"). As of jQuery 1.5, the complete setting can accept an array of functions. Each function will be called in turn. This is an Ajax Event.
     */
    complete? (jqXHR: JQueryXHR, textStatus: string): any;
    /**
     * An object of string/regular-expression pairs that determine how jQuery will parse the response, given its content type. (version added: 1.5)
     */
    contents?: { [key: string]: any; };
    //According to jQuery.ajax source code, ajax's option actually allows contentType to set to "false"
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/742
    /**
     * When sending data to the server, use this content type. Default is "application/x-www-form-urlencoded; charset=UTF-8", which is fine for most cases. If you explicitly pass in a content-type to $.ajax(), then it is always sent to the server (even if no data is sent). The W3C XMLHttpRequest specification dictates that the charset is always UTF-8; specifying another charset will not force the browser to change the encoding.
     */
    contentType?: any;
    /**
     * This object will be made the context of all Ajax-related callbacks. By default, the context is an object that represents the ajax settings used in the call ($.ajaxSettings merged with the settings passed to $.ajax).
     */
    context?: any;
    /**
     * An object containing dataType-to-dataType converters. Each converter's value is a function that returns the transformed value of the response. (version added: 1.5)
     */
    converters?: { [key: string]: any; };
    /**
     * If you wish to force a crossDomain request (such as JSONP) on the same domain, set the value of crossDomain to true. This allows, for example, server-side redirection to another domain. (version added: 1.5)
     */
    crossDomain?: boolean;
    /**
     * Data to be sent to the server. It is converted to a query string, if not already a string. It's appended to the url for GET-requests. See processData option to prevent this automatic processing. Object must be key-value pairs. If value is an Array, jQuery serializes multiple values with same key based on the value of the traditional setting (described below).
     */
    data?: any;
    /**
     * A function to be used to handle the raw response data of XMLHttpRequest.This is a pre-filtering function to sanitize the response. You should return the sanitized data. The function accepts two arguments: The raw data returned from the server and the 'dataType' parameter.
     */
    dataFilter? (data: any, ty: any): any;
    /**
     * The type of data that you're expecting back from the server. If none is specified, jQuery will try to infer it based on the MIME type of the response (an XML MIME type will yield XML, in 1.4 JSON will yield a JavaScript object, in 1.4 script will execute the script, and anything else will be returned as a string).
     */
    dataType?: string;
    /**
     * A function to be called if the request fails. The function receives three arguments: The jqXHR (in jQuery 1.4.x, XMLHttpRequest) object, a string describing the type of error that occurred and an optional exception object, if one occurred. Possible values for the second argument (besides null) are "timeout", "error", "abort", and "parsererror". When an HTTP error occurs, errorThrown receives the textual portion of the HTTP status, such as "Not Found" or "Internal Server Error." As of jQuery 1.5, the error setting can accept an array of functions. Each function will be called in turn. Note: This handler is not called for cross-domain script and cross-domain JSONP requests. This is an Ajax Event.
     */
    error? (jqXHR: JQueryXHR, textStatus: string, errorThrown: string): any;
    /**
     * Whether to trigger global Ajax event handlers for this request. The default is true. Set to false to prevent the global handlers like ajaxStart or ajaxStop from being triggered. This can be used to control various Ajax Events.
     */
    global?: boolean;
    /**
     * An object of additional header key/value pairs to send along with requests using the XMLHttpRequest transport. The header X-Requested-With: XMLHttpRequest is always added, but its default XMLHttpRequest value can be changed here. Values in the headers setting can also be overwritten from within the beforeSend function. (version added: 1.5)
     */
    headers?: { [key: string]: any; };
    /**
     * Allow the request to be successful only if the response has changed since the last request. This is done by checking the Last-Modified header. Default value is false, ignoring the header. In jQuery 1.4 this technique also checks the 'etag' specified by the server to catch unmodified data.
     */
    ifModified?: boolean;
    /**
     * Allow the current environment to be recognized as "local," (e.g. the filesystem), even if jQuery does not recognize it as such by default. The following protocols are currently recognized as local: file, *-extension, and widget. If the isLocal setting needs modification, it is recommended to do so once in the $.ajaxSetup() method. (version added: 1.5.1)
     */
    isLocal?: boolean;
    /**
     * Override the callback function name in a jsonp request. This value will be used instead of 'callback' in the 'callback=?' part of the query string in the url. So {jsonp:'onJSONPLoad'} would result in 'onJSONPLoad=?' passed to the server. As of jQuery 1.5, setting the jsonp option to false prevents jQuery from adding the "?callback" string to the URL or attempting to use "=?" for transformation. In this case, you should also explicitly set the jsonpCallback setting. For example, { jsonp: false, jsonpCallback: "callbackName" }
     */
    jsonp?: any;
    /**
     * Specify the callback function name for a JSONP request. This value will be used instead of the random name automatically generated by jQuery. It is preferable to let jQuery generate a unique name as it'll make it easier to manage the requests and provide callbacks and error handling. You may want to specify the callback when you want to enable better browser caching of GET requests. As of jQuery 1.5, you can also use a function for this setting, in which case the value of jsonpCallback is set to the return value of that function.
     */
    jsonpCallback?: any;
    /**
     * The HTTP method to use for the request (e.g. "POST", "GET", "PUT"). (version added: 1.9.0)
     */
    method?: string;
    /**
     * A MIME type to override the XHR MIME type. (version added: 1.5.1)
     */
    mimeType?: string;
    /**
     * A password to be used with XMLHttpRequest in response to an HTTP access authentication request.
     */
    password?: string;
    /**
     * By default, data passed in to the data option as an object (technically, anything other than a string) will be processed and transformed into a query string, fitting to the default content-type "application/x-www-form-urlencoded". If you want to send a DOMDocument, or other non-processed data, set this option to false.
     */
    processData?: boolean;
    /**
     * Only applies when the "script" transport is used (e.g., cross-domain requests with "jsonp" or "script" dataType and "GET" type). Sets the charset attribute on the script tag used in the request. Used when the character set on the local page is not the same as the one on the remote script.
     */
    scriptCharset?: string;
    /**
     * An object of numeric HTTP codes and functions to be called when the response has the corresponding code. f the request is successful, the status code functions take the same parameters as the success callback; if it results in an error (including 3xx redirect), they take the same parameters as the error callback. (version added: 1.5)
     */
    statusCode?: { [key: string]: any; };
    /**
     * A function to be called if the request succeeds. The function gets passed three arguments: The data returned from the server, formatted according to the dataType parameter; a string describing the status; and the jqXHR (in jQuery 1.4.x, XMLHttpRequest) object. As of jQuery 1.5, the success setting can accept an array of functions. Each function will be called in turn. This is an Ajax Event.
     */
    success? (data: any, textStatus: string, jqXHR: JQueryXHR): any;
    /**
     * Set a timeout (in milliseconds) for the request. This will override any global timeout set with $.ajaxSetup(). The timeout period starts at the point the $.ajax call is made; if several other requests are in progress and the browser has no connections available, it is possible for a request to time out before it can be sent. In jQuery 1.4.x and below, the XMLHttpRequest object will be in an invalid state if the request times out; accessing any object members may throw an exception. In Firefox 3.0+ only, script and JSONP requests cannot be cancelled by a timeout; the script will run even if it arrives after the timeout period.
     */
    timeout?: number;
    /**
     * Set this to true if you wish to use the traditional style of parameter serialization.
     */
    traditional?: boolean;
    /**
     * The type of request to make ("POST" or "GET"), default is "GET". Note: Other HTTP request methods, such as PUT and DELETE, can also be used here, but they are not supported by all browsers.
     */
    type?: string;
    /**
     * A string containing the URL to which the request is sent.
     */
    url?: string;
    /**
     * A username to be used with XMLHttpRequest in response to an HTTP access authentication request.
     */
    username?: string;
    /**
     * Callback for creating the XMLHttpRequest object. Defaults to the ActiveXObject when available (IE), the XMLHttpRequest otherwise. Override to provide your own implementation for XMLHttpRequest or enhancements to the factory.
     */
    xhr?: any;
    /**
     * An object of fieldName-fieldValue pairs to set on the native XHR object. For example, you can use it to set withCredentials to true for cross-domain requests if needed. In jQuery 1.5, the withCredentials property was not propagated to the native XHR and thus CORS requests requiring it would ignore this flag. For this reason, we recommend using jQuery 1.5.1+ should you require the use of it. (version added: 1.5.1)
     */
    xhrFields?: { [key: string]: any; };
}

/**
 * Interface for the jqXHR object
 * @see {@link https://api.jquery.com/jQuery.ajax/#jqXHR}
 */
interface JQueryXHR extends XMLHttpRequest, JQueryPromise<any> {
    /**
     * The .overrideMimeType() method may be used in the beforeSend() callback function, for example, to modify the response content-type header. As of jQuery 1.5.1, the jqXHR object also contains the overrideMimeType() method (it was available in jQuery 1.4.x, as well, but was temporarily removed in jQuery 1.5).
     */
    overrideMimeType(mimeType: string): any;
    /**
     * Cancel the request.
     *
     * @param statusText A string passed as the textStatus parameter for the done callback. Default value: "canceled"
     */
    abort(statusText?: string): void;
    /**
     * Incorporates the functionality of the .done() and .fail() methods, allowing (as of jQuery 1.8) the underlying Promise to be manipulated. Refer to deferred.then() for implementation details.
     */
    then<R>(doneCallback: (data: any, textStatus: string, jqXHR: JQueryXHR) => R|JQueryPromise<R>, failCallback?: (jqXHR: JQueryXHR, textStatus: string, errorThrown: any) => void): JQueryPromise<R>;
    /**
     * Property containing the parsed response if the response content type is json
     */
    responseJSON?: any;
    /**
     * A function to be called if the request fails.
     */
    error(xhr: JQueryXHR, textStatus: string, errorThrown: string): void;
}

/**
 * Interface for the JQuery callback
 * @see {@link https://api.jquery.com/category/callbacks-object/}
 */
interface JQueryCallback {
    /**
     * Add a callback or a collection of callbacks to a callback list.
     *
     * @param callbacks A function, or array of functions, that are to be added to the callback list.
     * @see {@link https://api.jquery.com/callbacks.add/}
     */
    add(callbacks: Function): JQueryCallback;
    /**
     * Add a callback or a collection of callbacks to a callback list.
     *
     * @param callbacks A function, or array of functions, that are to be added to the callback list.
     * @see {@link https://api.jquery.com/callbacks.add/}
     */
    add(callbacks: Function[]): JQueryCallback;

    /**
     * Disable a callback list from doing anything more.
     * @see {@link https://api.jquery.com/callbacks.disable/}
     */
    disable(): JQueryCallback;

    /**
     * Determine if the callbacks list has been disabled.
     * @see {@link https://api.jquery.com/callbacks.disabled/}
     */
    disabled(): boolean;

    /**
     * Remove all of the callbacks from a list.
     * @see {@link https://api.jquery.com/callbacks.empty/}
     */
    empty(): JQueryCallback;

    /**
     * Call all of the callbacks with the given arguments
     *
     * @param arguments The argument or list of arguments to pass back to the callback list.
     * @see {@link https://api.jquery.com/callbacks.fire/}
     */
    fire(...arguments: any[]): JQueryCallback;

    /**
     * Determine if the callbacks have already been called at least once.
     * @see {@link https://api.jquery.com/callbacks.fired/}
     */
    fired(): boolean;

    /**
     * Call all callbacks in a list with the given context and arguments.
     *
     * @param context A reference to the context in which the callbacks in the list should be fired.
     * @param arguments An argument, or array of arguments, to pass to the callbacks in the list.
     * @see {@link https://api.jquery.com/callbacks.fireWith/}
     */
    fireWith(context?: any, args?: any[]): JQueryCallback;

    /**
     * Determine whether a supplied callback is in a list
     *
     * @param callback The callback to search for.
     * @see {@link https://api.jquery.com/callbacks.has/}
     */
    has(callback: Function): boolean;

    /**
     * Lock a callback list in its current state.
     * @see {@link https://api.jquery.com/callbacks.lock/}
     */
    lock(): JQueryCallback;

    /**
     * Determine if the callbacks list has been locked.
     * @see {@link https://api.jquery.com/callbacks.locked/}
     */
    locked(): boolean;

    /**
     * Remove a callback or a collection of callbacks from a callback list.
     *
     * @param callbacks A function, or array of functions, that are to be removed from the callback list.
     * @see {@link https://api.jquery.com/callbacks.remove/}
     */
    remove(callbacks: Function): JQueryCallback;
    /**
     * Remove a callback or a collection of callbacks from a callback list.
     *
     * @param callbacks A function, or array of functions, that are to be removed from the callback list.
     * @see {@link https://api.jquery.com/callbacks.remove/}
     */
    remove(callbacks: Function[]): JQueryCallback;
}

/**
 * Allows jQuery Promises to interop with non-jQuery promises
 */
interface JQueryGenericPromise<T> {
    /**
     * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
     *
     * @param doneFilter A function that is called when the Deferred is resolved.
     * @param failFilter An optional function that is called when the Deferred is rejected.
     * @see {@link https://api.jquery.com/deferred.then/#deferred-then-doneFilter-failFilter-progressFilter}
     */
    then<U>(doneFilter: (value?: T, ...values: any[]) => U|JQueryPromise<U>, failFilter?: (...reasons: any[]) => any, progressFilter?: (...progression: any[]) => any): JQueryPromise<U>;

    /**
     * Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
     *
     * @param doneFilter A function that is called when the Deferred is resolved.
     * @param failFilter An optional function that is called when the Deferred is rejected.
     * @see {@link https://api.jquery.com/deferred.then/#deferred-then-doneFilter-failFilter-progressFilter}
     */
    then(doneFilter: (value?: T, ...values: any[]) => void, failFilter?: (...reasons: any[]) => any, progressFilter?: (...progression: any[]) => any): JQueryPromise<void>;
}

/**
 * Interface for the JQuery promise/deferred callbacks
 */
interface JQueryPromiseCallback<T> {
    (value?: T, ...args: any[]): void;
}

interface JQueryPromiseOperator<T, U> {
    (callback1: JQueryPromiseCallback<T>|JQueryPromiseCallback<T>[], ...callbacksN: Array<JQueryPromiseCallback<any>|JQueryPromiseCallback<any>[]>): JQueryPromise<U>;
}

/**
 * Interface for the JQuery promise, part of callbacks
 * @see {@link https://api.jquery.com/category/deferred-object/}
 */
interface JQueryPromise<T> extends JQueryGenericPromise<T> {
    /**
     * Determine the current state of a Deferred object.
     * @see {@link https://api.jquery.com/deferred.state/}
     */
    state(): string;
    /**
     * Add handlers to be called when the Deferred object is either resolved or rejected.
     *
     * @param alwaysCallback1 A function, or array of functions, that is called when the Deferred is resolved or rejected.
     * @param alwaysCallbackN Optional additional functions, or arrays of functions, that are called when the Deferred is resolved or rejected.
     * @see {@link https://api.jquery.com/deferred.always/}
     */
    always(alwaysCallback1?: JQueryPromiseCallback<any>|JQueryPromiseCallback<any>[], ...alwaysCallbackN: Array<JQueryPromiseCallback<any>|JQueryPromiseCallback<any>[]>): JQueryPromise<T>;
    /**
     * Add handlers to be called when the Deferred object is resolved.
     *
     * @param doneCallback1 A function, or array of functions, that are called when the Deferred is resolved.
     * @param doneCallbackN Optional additional functions, or arrays of functions, that are called when the Deferred is resolved.
     * @see {@link https://api.jquery.com/deferred.done/}
     */
    done(doneCallback1?: JQueryPromiseCallback<T>|JQueryPromiseCallback<T>[], ...doneCallbackN: Array<JQueryPromiseCallback<T>|JQueryPromiseCallback<T>[]>): JQueryPromise<T>;
    /**
     * Add handlers to be called when the Deferred object is rejected.
     *
     * @param failCallback1 A function, or array of functions, that are called when the Deferred is rejected.
     * @param failCallbackN Optional additional functions, or arrays of functions, that are called when the Deferred is rejected.
     * @see {@link https://api.jquery.com/deferred.fail/}
     */
    fail(failCallback1?: JQueryPromiseCallback<any>|JQueryPromiseCallback<any>[], ...failCallbackN: Array<JQueryPromiseCallback<any>|JQueryPromiseCallback<any>[]>): JQueryPromise<T>;
    /**
     * Add handlers to be called when the Deferred object generates progress notifications.
     *
     * @param progressCallback1 A function, or array of functions, to be called when the Deferred generates progress notifications.
     * @param progressCallbackN Optional additional functions, or arrays of functions, to be called when the Deferred generates progress notifications.
     * @see {@link https://api.jquery.com/deferred.progress/}
     */
    progress(progressCallback1?: JQueryPromiseCallback<any>|JQueryPromiseCallback<any>[], ...progressCallbackN: Array<JQueryPromiseCallback<any>|JQueryPromiseCallback<any>[]>): JQueryPromise<T>;

    // Deprecated - given no typings
    pipe(doneFilter?: (x: any) => any, failFilter?: (x: any) => any, progressFilter?: (x: any) => any): JQueryPromise<any>;

    /**
     * Return a Deferred's Promise object.
     *
     * @param target Object onto which the promise methods have to be attached
     * @see {@link https://api.jquery.com/deferred.promise/}
     */
    promise(target?: any): JQueryPromise<T>;
}

/**
 * Interface for the JQuery deferred, part of callbacks
 * @see {@link https://api.jquery.com/category/deferred-object/}
 */
interface JQueryDeferred<T> extends JQueryGenericPromise<T> {
    /**
     * Determine the current state of a Deferred object.
     * @see {@link https://api.jquery.com/deferred.state/}
     */
    state(): string;
    /**
     * Add handlers to be called when the Deferred object is either resolved or rejected.
     *
     * @param alwaysCallback1 A function, or array of functions, that is called when the Deferred is resolved or rejected.
     * @param alwaysCallbackN Optional additional functions, or arrays of functions, that are called when the Deferred is resolved or rejected.
     * @see {@link https://api.jquery.com/deferred.always/}
     */
    always(alwaysCallback1?: JQueryPromiseCallback<any>|JQueryPromiseCallback<any>[], ...alwaysCallbackN: Array<JQueryPromiseCallback<any>|JQueryPromiseCallback<any>[]>): JQueryDeferred<T>;
    /**
     * Add handlers to be called when the Deferred object is resolved.
     *
     * @param doneCallback1 A function, or array of functions, that are called when the Deferred is resolved.
     * @param doneCallbackN Optional additional functions, or arrays of functions, that are called when the Deferred is resolved.
     * @see {@link https://api.jquery.com/deferred.done/}
     */
    done(doneCallback1?: JQueryPromiseCallback<T>|JQueryPromiseCallback<T>[], ...doneCallbackN: Array<JQueryPromiseCallback<T>|JQueryPromiseCallback<T>[]>): JQueryDeferred<T>;
    /**
     * Add handlers to be called when the Deferred object is rejected.
     *
     * @param failCallback1 A function, or array of functions, that are called when the Deferred is rejected.
     * @param failCallbackN Optional additional functions, or arrays of functions, that are called when the Deferred is rejected.
     * @see {@link https://api.jquery.com/deferred.fail/}
     */
    fail(failCallback1?: JQueryPromiseCallback<any>|JQueryPromiseCallback<any>[], ...failCallbackN: Array<JQueryPromiseCallback<any>|JQueryPromiseCallback<any>[]>): JQueryDeferred<T>;
    /**
     * Add handlers to be called when the Deferred object generates progress notifications.
     *
     * @param progressCallback1 A function, or array of functions, to be called when the Deferred generates progress notifications.
     * @param progressCallbackN Optional additional functions, or arrays of functions, to be called when the Deferred generates progress notifications.
     * @see {@link https://api.jquery.com/deferred.progress/}
     */
    progress(progressCallback1?: JQueryPromiseCallback<any>|JQueryPromiseCallback<any>[], ...progressCallbackN: Array<JQueryPromiseCallback<any>|JQueryPromiseCallback<any>[]>): JQueryDeferred<T>;

    /**
     * Call the progressCallbacks on a Deferred object with the given args.
     *
     * @param args Optional arguments that are passed to the progressCallbacks.
     * @see {@link https://api.jquery.com/deferred.notify/}
     */
    notify(value?: any, ...args: any[]): JQueryDeferred<T>;

    /**
     * Call the progressCallbacks on a Deferred object with the given context and args.
     *
     * @param context Context passed to the progressCallbacks as the this object.
     * @param args Optional arguments that are passed to the progressCallbacks.
     * @see {@link https://api.jquery.com/deferred.notifyWith/}
     */
    notifyWith(context: any, args?: any[]): JQueryDeferred<T>;

    /**
     * Reject a Deferred object and call any failCallbacks with the given args.
     *
     * @param args Optional arguments that are passed to the failCallbacks.
     * @see {@link https://api.jquery.com/deferred.reject/}
     */
    reject(value?: any, ...args: any[]): JQueryDeferred<T>;
    /**
     * Reject a Deferred object and call any failCallbacks with the given context and args.
     *
     * @param context Context passed to the failCallbacks as the this object.
     * @param args An optional array of arguments that are passed to the failCallbacks.
     * @see {@link https://api.jquery.com/deferred.rejectWith/}
     */
    rejectWith(context: any, args?: any[]): JQueryDeferred<T>;

    /**
     * Resolve a Deferred object and call any doneCallbacks with the given args.
     *
     * @param value First argument passed to doneCallbacks.
     * @param args Optional subsequent arguments that are passed to the doneCallbacks.
     * @see {@link https://api.jquery.com/deferred.resolve/}
     */
    resolve(value?: T, ...args: any[]): JQueryDeferred<T>;

    /**
     * Resolve a Deferred object and call any doneCallbacks with the given context and args.
     *
     * @param context Context passed to the doneCallbacks as the this object.
     * @param args An optional array of arguments that are passed to the doneCallbacks.
     * @see {@link https://api.jquery.com/deferred.resolveWith/}
     */
    resolveWith(context: any, args?: T[]): JQueryDeferred<T>;

    /**
     * Return a Deferred's Promise object.
     *
     * @param target Object onto which the promise methods have to be attached
     * @see {@link https://api.jquery.com/deferred.promise/}
     */
    promise(target?: any): JQueryPromise<T>;

    // Deprecated - given no typings
    pipe(doneFilter?: (x: any) => any, failFilter?: (x: any) => any, progressFilter?: (x: any) => any): JQueryPromise<any>;
}

/**
 * Interface of the JQuery extension of the W3C event object
 * @see {@link https://api.jquery.com/category/events/event-object/}
 */
interface BaseJQueryEventObject extends Event {
    /**
     * The current DOM element within the event bubbling phase.
     * @see {@link https://api.jquery.com/event.currentTarget/}
     */
    currentTarget: Element;
    /**
     * An optional object of data passed to an event method when the current executing handler is bound.
     * @see {@link https://api.jquery.com/event.data/}
     */
    data: any;
    /**
     * The element where the currently-called jQuery event handler was attached.
     * @see {@link https://api.jquery.com/event.delegateTarget/}
     */
    delegateTarget: Element;
    /**
     * Returns whether event.preventDefault() was ever called on this event object.
     * @see {@link https://api.jquery.com/event.isDefaultPrevented/}
     */
    isDefaultPrevented(): boolean;
    /**
     * Returns whether event.stopImmediatePropagation() was ever called on this event object.
     * @see {@link https://api.jquery.com/event.isImmediatePropagationStopped/}
     */
    isImmediatePropagationStopped(): boolean;
    /**
     * Returns whether event.stopPropagation() was ever called on this event object.
     * @see {@link https://api.jquery.com/event.isPropagationStopped/}
     */
    isPropagationStopped(): boolean;
    /**
     * The namespace specified when the event was triggered.
     * @see {@link https://api.jquery.com/event.namespace/}
     */
    namespace: string;
    /**
     * The browser's original Event object.
     * @see {@link https://api.jquery.com/category/events/event-object/}
     */
    originalEvent: Event;
    /**
     * If this method is called, the default action of the event will not be triggered.
     * @see {@link https://api.jquery.com/event.preventDefault/}
     */
    preventDefault(): any;
    /**
     * The other DOM element involved in the event, if any.
     * @see {@link https://api.jquery.com/event.relatedTarget/}
     */
    relatedTarget: Element;
    /**
     * The last value returned by an event handler that was triggered by this event, unless the value was undefined.
     * @see {@link https://api.jquery.com/event.result/}
     */
    result: any;
    /**
     * Keeps the rest of the handlers from being executed and prevents the event from bubbling up the DOM tree.
     * @see {@link https://api.jquery.com/event.stopImmediatePropagation/}
     */
    stopImmediatePropagation(): void;
    /**
     * Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.
     * @see {@link https://api.jquery.com/event.stopPropagation/}
     */
    stopPropagation(): void;
    /**
     * The DOM element that initiated the event.
     * @see {@link https://api.jquery.com/event.target/}
     */
    target: Element;
    /**
     * The mouse position relative to the left edge of the document.
     * @see {@link https://api.jquery.com/event.pageX/}
     */
    pageX: number;
    /**
     * The mouse position relative to the top edge of the document.
     * @see {@link https://api.jquery.com/event.pageY/}
     */
    pageY: number;
    /**
     * For key or mouse events, this property indicates the specific key or button that was pressed.
     * @see {@link https://api.jquery.com/event.which/}
     */
    which: number;
    /**
     * Indicates whether the META key was pressed when the event fired.
     * @see {@link https://api.jquery.com/event.metaKey/}
     */
    metaKey: boolean;
}

interface JQueryInputEventObject extends BaseJQueryEventObject {
    altKey: boolean;
    ctrlKey: boolean;
    metaKey: boolean;
    shiftKey: boolean;
}

interface JQueryMouseEventObject extends JQueryInputEventObject {
    button: number;
    clientX: number;
    clientY: number;
    offsetX: number;
    offsetY: number;
    pageX: number;
    pageY: number;
    screenX: number;
    screenY: number;
}

interface JQueryKeyEventObject extends JQueryInputEventObject {
    char: any;
    charCode: number;
    key: any;
    keyCode: number;
}

interface JQueryEventObject extends BaseJQueryEventObject, JQueryInputEventObject, JQueryMouseEventObject, JQueryKeyEventObject{
}

/**
 * A collection of properties that represent the presence of different browser features or bugs.
 *
 * Intended for jQuery's internal use; specific properties may be removed when they are no longer needed internally
 * to improve page startup performance. For your own project's feature-detection needs, we strongly recommend the
 * use of an external library such as {@link http://modernizr.com/|Modernizr} instead of dependency on properties
 * in jQuery.support.
 *
 * @deprecated since version 1.9
 */
interface JQuerySupport {
    ajax?: boolean;
    boxModel?: boolean;
    changeBubbles?: boolean;
    checkClone?: boolean;
    checkOn?: boolean;
    cors?: boolean;
    cssFloat?: boolean;
    hrefNormalized?: boolean;
    htmlSerialize?: boolean;
    leadingWhitespace?: boolean;
    noCloneChecked?: boolean;
    noCloneEvent?: boolean;
    opacity?: boolean;
    optDisabled?: boolean;
    optSelected?: boolean;
    scriptEval? (): boolean;
    style?: boolean;
    submitBubbles?: boolean;
    tbody?: boolean;
}

interface JQueryParam {
    /**
     * Create a serialized representation of an array or object, suitable for use in a URL query string or Ajax request.
     *
     * @param obj An array or object to serialize.
     */
    (obj: any): string;

    /**
     * Create a serialized representation of an array or object, suitable for use in a URL query string or Ajax request.
     *
     * @param obj An array or object to serialize.
     * @param traditional A Boolean indicating whether to perform a traditional "shallow" serialization.
     */
    (obj: any, traditional: boolean): string;
}

/**
 * The interface used to construct jQuery events (with $.Event). It is
 * defined separately instead of inline in JQueryStatic to allow
 * overriding the construction function with specific strings
 * returning specific event objects.
 */
interface JQueryEventConstructor {
    (name: string, eventProperties?: any): JQueryEventObject;
    new (name: string, eventProperties?: any): JQueryEventObject;
}

/**
 * The interface used to specify coordinates.
 */
interface JQueryCoordinates {
    left: number;
    top: number;
}

/**
 * Elements in the array returned by serializeArray()
 */
interface JQuerySerializeArrayElement {
    name: string;
    value: string;
}

/**
 * @see {@link https://api.jquery.com/animate/}
 */
interface JQueryAnimationOptions {
    /**
     * A string or number determining how long the animation will run.
     */
    duration?: any;
    /**
     * A string indicating which easing function to use for the transition.
     */
    easing?: string;
    /**
     * A function to call once the animation is complete.
     */
    complete?: Function;
    /**
     * A function to be called for each animated property of each animated element. This function provides an opportunity to modify the Tween object to change the value of the property before it is set.
     */
    step?: (now: number, tween: any) => any;
    /**
     * A function to be called after each step of the animation, only once per animated element regardless of the number of animated properties. (version added: 1.8)
     */
    progress?: (animation: JQueryPromise<any>, progress: number, remainingMs: number) => any;
    /**
     * A function to call when the animation begins. (version added: 1.8)
     */
    start?: (animation: JQueryPromise<any>) => any;
    /**
     * A function to be called when the animation completes (its Promise object is resolved). (version added: 1.8)
     */
    done?: (animation: JQueryPromise<any>, jumpedToEnd: boolean) => any;
    /**
     * A function to be called when the animation fails to complete (its Promise object is rejected). (version added: 1.8)
     */
    fail?: (animation: JQueryPromise<any>, jumpedToEnd: boolean) => any;
    /**
     * A function to be called when the animation completes or stops without completing (its Promise object is either resolved or rejected). (version added: 1.8)
     */
    always?: (animation: JQueryPromise<any>, jumpedToEnd: boolean) => any;
    /**
     * A Boolean indicating whether to place the animation in the effects queue. If false, the animation will begin immediately. As of jQuery 1.7, the queue option can also accept a string, in which case the animation is added to the queue represented by that string. When a custom queue name is used the animation does not automatically start; you must call .dequeue("queuename") to start it.
     */
    queue?: any;
    /**
     * A map of one or more of the CSS properties defined by the properties argument and their corresponding easing functions. (version added: 1.4)
     */
    specialEasing?: Object;
}

interface JQueryEasingFunction {
    ( percent: number ): number;
}

interface JQueryEasingFunctions {
    [ name: string ]: JQueryEasingFunction;
    linear: JQueryEasingFunction;
    swing: JQueryEasingFunction;
}

/**
 * Static members of jQuery (those on $ and jQuery themselves)
 *
 * @see {@link https://api.jquery.com/Types/#jQuery}
 */
interface JQueryStatic {

    /**
     * Perform an asynchronous HTTP (Ajax) request.
     *
     * @param settings A set of key/value pairs that configure the Ajax request. All settings are optional. A default can be set for any option with $.ajaxSetup().
     * @see {@link https://api.jquery.com/jQuery.ajax/#jQuery-ajax-settings}
     */
    ajax(settings: JQueryAjaxSettings): JQueryXHR;
    /**
     * Perform an asynchronous HTTP (Ajax) request.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param settings A set of key/value pairs that configure the Ajax request. All settings are optional. A default can be set for any option with $.ajaxSetup().
     * @see {@link https://api.jquery.com/jQuery.ajax/#jQuery-ajax-url-settings}
     */
    ajax(url: string, settings?: JQueryAjaxSettings): JQueryXHR;

    /**
     * Handle custom Ajax options or modify existing options before each request is sent and before they are processed by $.ajax().
     *
     * @param dataTypes An optional string containing one or more space-separated dataTypes
     * @param handler A handler to set default values for future Ajax requests.
     * @see {@link https://api.jquery.com/jQuery.ajaxPrefilter/}
     */
    ajaxPrefilter(dataTypes: string, handler: (opts: any, originalOpts: JQueryAjaxSettings, jqXHR: JQueryXHR) => any): void;
    /**
     * Handle custom Ajax options or modify existing options before each request is sent and before they are processed by $.ajax().
     *
     * @param handler A handler to set default values for future Ajax requests.
     * @see {@link https://api.jquery.com/jQuery.ajaxPrefilter/}
     */
    ajaxPrefilter(handler: (opts: any, originalOpts: JQueryAjaxSettings, jqXHR: JQueryXHR) => any): void;

     /**
     * Creates an object that handles the actual transmission of Ajax data.
     *
     * @param dataType A string identifying the data type to use.
     * @param handler A handler to return the new transport object to use with the data type provided in the first argument.
     * @see {@link https://api.jquery.com/jQuery.ajaxTransport/}
     */
    ajaxTransport(dataType: string, handler: (opts: any, originalOpts: JQueryAjaxSettings, jqXHR: JQueryXHR) => any): void;
    
    ajaxSettings: JQueryAjaxSettings;

     /**
      * Set default values for future Ajax requests. Its use is not recommended.
      *
      * @param options A set of key/value pairs that configure the default Ajax request. All options are optional.
      * @see {@link https://api.jquery.com/jQuery.ajaxSetup/}
      */
    ajaxSetup(options: JQueryAjaxSettings): void;

    /**
     * Load data from the server using a HTTP GET request.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param success A callback function that is executed if the request succeeds.
     * @param dataType The type of data expected from the server. Default: Intelligent Guess (xml, json, script, or html).
     * @see {@link https://api.jquery.com/jQuery.get/#jQuery-get-url-data-success-dataType}
     */
    get(url: string, success?: (data: any, textStatus: string, jqXHR: JQueryXHR) => any, dataType?: string): JQueryXHR;
    /**
     * Load data from the server using a HTTP GET request.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param data A plain object or string that is sent to the server with the request.
     * @param success A callback function that is executed if the request succeeds.
     * @param dataType The type of data expected from the server. Default: Intelligent Guess (xml, json, script, or html).
     * @see {@link https://api.jquery.com/jQuery.get/#jQuery-get-url-data-success-dataType}
     */
    get(url: string, data?: Object|string, success?: (data: any, textStatus: string, jqXHR: JQueryXHR) => any, dataType?: string): JQueryXHR;
    /**
     * Load data from the server using a HTTP GET request.
     *
     * @param settings The JQueryAjaxSettings to be used for the request
     * @see {@link https://api.jquery.com/jQuery.get/#jQuery-get-settings}
     */
    get(settings : JQueryAjaxSettings): JQueryXHR;
    /**
     * Load JSON-encoded data from the server using a GET HTTP request.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param success A callback function that is executed if the request succeeds.
     * @see {@link https://api.jquery.com/jQuery.getJSON/}
     */
    getJSON(url: string, success?: (data: any, textStatus: string, jqXHR: JQueryXHR) => any): JQueryXHR;
    /**
     * Load JSON-encoded data from the server using a GET HTTP request.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param data A plain object or string that is sent to the server with the request.
     * @param success A callback function that is executed if the request succeeds.
     * @see {@link https://api.jquery.com/jQuery.getJSON/}
     */
    getJSON(url: string, data?: Object|string, success?: (data: any, textStatus: string, jqXHR: JQueryXHR) => any): JQueryXHR;
    /**
     * Load a JavaScript file from the server using a GET HTTP request, then execute it.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param success A callback function that is executed if the request succeeds.
     * @see {@link https://api.jquery.com/jQuery.getScript/}
     */
    getScript(url: string, success?: (script: string, textStatus: string, jqXHR: JQueryXHR) => any): JQueryXHR;

    /**
     * Create a serialized representation of an array or object, suitable for use in a URL query string or Ajax request.
     *
     * @see {@link https://api.jquery.com/jQuery.param/}
     */
    param: JQueryParam;

    /**
     * Load data from the server using a HTTP POST request.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param success A callback function that is executed if the request succeeds. Required if dataType is provided, but can be null in that case.
     * @param dataType The type of data expected from the server. Default: Intelligent Guess (xml, json, script, text, html).
     * @see {@link https://api.jquery.com/jQuery.post/#jQuery-post-url-data-success-dataType}
     */
    post(url: string, success?: (data: any, textStatus: string, jqXHR: JQueryXHR) => any, dataType?: string): JQueryXHR;
    /**
     * Load data from the server using a HTTP POST request.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param data A plain object or string that is sent to the server with the request.
     * @param success A callback function that is executed if the request succeeds. Required if dataType is provided, but can be null in that case.
     * @param dataType The type of data expected from the server. Default: Intelligent Guess (xml, json, script, text, html).
     * @see {@link https://api.jquery.com/jQuery.post/#jQuery-post-url-data-success-dataType}
     */
    post(url: string, data?: Object|string, success?: (data: any, textStatus: string, jqXHR: JQueryXHR) => any, dataType?: string): JQueryXHR;
    /**
     * Load data from the server using a HTTP POST request.
     *
     * @param settings The JQueryAjaxSettings to be used for the request
     * @see {@link https://api.jquery.com/jQuery.post/#jQuery-post-settings}
     */
    post(settings : JQueryAjaxSettings): JQueryXHR;
    /**
     * A multi-purpose callbacks list object that provides a powerful way to manage callback lists.
     *
     * @param flags An optional list of space-separated flags that change how the callback list behaves.
     * @see {@link https://api.jquery.com/jQuery.Callbacks/}
     */
    Callbacks(flags?: string): JQueryCallback;

    /**
     * Holds or releases the execution of jQuery's ready event.
     *
     * @param hold Indicates whether the ready hold is being requested or released
     * @see {@link https://api.jquery.com/jQuery.holdReady/}
     */
    holdReady(hold: boolean): void;

    /**
     * Accepts a string containing a CSS selector which is then used to match a set of elements.
     *
     * @param selector A string containing a selector expression
     * @param context A DOM Element, Document, or jQuery to use as context
     * @see {@link https://api.jquery.com/jQuery/#jQuery-selector-context}
     */
    (selector: string, context?: Element|JQuery): JQuery;

    /**
     * Accepts a string containing a CSS selector which is then used to match a set of elements.
     *
     * @param element A DOM element to wrap in a jQuery object.
     * @see {@link https://api.jquery.com/jQuery/#jQuery-element}
     */
    (element: Element): JQuery;

    /**
     * Accepts a string containing a CSS selector which is then used to match a set of elements.
     *
     * @param elementArray An array containing a set of DOM elements to wrap in a jQuery object.
     * @see {@link https://api.jquery.com/jQuery/#jQuery-elementArray}
     */
    (elementArray: Element[]): JQuery;

    /**
     * Binds a function to be executed when the DOM has finished loading.
     *
     * @param callback A function to execute after the DOM is ready.
     * @see {@link https://api.jquery.com/jQuery/#jQuery-callback}
     */
    (callback: (jQueryAlias?: JQueryStatic) => any): JQuery;

    /**
     * Accepts a string containing a CSS selector which is then used to match a set of elements.
     *
     * @param object A plain object to wrap in a jQuery object.
     * @see {@link https://api.jquery.com/jQuery/#jQuery-object}
     */
    (object: {}): JQuery;

    /**
     * Accepts a string containing a CSS selector which is then used to match a set of elements.
     *
     * @param object An existing jQuery object to clone.
     * @see {@link https://api.jquery.com/jQuery/#jQuery-object}
     */
    (object: JQuery): JQuery;

    /**
     * Specify a function to execute when the DOM is fully loaded.
     * @see {@link https://api.jquery.com/jQuery/#jQuery}
     */
    (): JQuery;

    /**
     * Creates DOM elements on the fly from the provided string of raw HTML.
     *
     * @param html A string of HTML to create on the fly. Note that this parses HTML, not XML.
     * @param ownerDocument A document in which the new elements will be created.
     * @see {@link https://api.jquery.com/jQuery/#jQuery-html-ownerDocument}
     */
    (html: string, ownerDocument?: Document): JQuery;

    /**
     * Creates DOM elements on the fly from the provided string of raw HTML.
     *
     * @param html A string defining a single, standalone, HTML element (e.g. <div/> or <div></div>).
     * @param attributes An object of attributes, events, and methods to call on the newly-created element.
     * @see {@link https://api.jquery.com/jQuery/#jQuery-html-attributes}
     */
    (html: string, attributes: Object): JQuery;

    /**
     * Relinquish jQuery's control of the $ variable.
     *
     * @param removeAll A Boolean indicating whether to remove all jQuery variables from the global scope (including jQuery itself).
     * @see {@link https://api.jquery.com/jQuery.noConflict/}
     */
    noConflict(removeAll?: boolean): JQueryStatic;

    /**
     * Provides a way to execute callback functions based on one or more objects, usually Deferred objects that represent asynchronous events.
     *
     * @param deferreds One or more Deferred objects, or plain JavaScript objects.
     * @see {@link https://api.jquery.com/jQuery.when/}
     */
    when<T>(...deferreds: Array<T|JQueryPromise<T>/* as JQueryDeferred<T> */>): JQueryPromise<T>;

    /**
     * Hook directly into jQuery to override how particular CSS properties are retrieved or set, normalize CSS property naming, or create custom properties.
     * @see {@link https://api.jquery.com/jQuery.cssHooks/}
     */
    cssHooks: { [key: string]: any; };

    /**
     * An object containing all CSS properties that may be used without a unit. The .css() method uses this object to see if it may append px to unitless values.
     * @see {@link https://api.jquery.com/jQuery.cssNumber/}
     */
    cssNumber: any;

    /**
     * Store arbitrary data associated with the specified element. Returns the value that was set.
     *
     * @param element The DOM element to associate with the data.
     * @param key A string naming the piece of data to set.
     * @param value The new data value.
     * @see {@link https://api.jquery.com/jQuery.data/#jQuery-data-element-key-value}
     */
    data<T>(element: Element, key: string, value: T): T;
    /**
     * Returns value at named data store for the element, as set by jQuery.data(element, name, value), or the full data store for the element.
     *
     * @param element The DOM element to associate with the data.
     * @param key A string naming the piece of data to set.
     * @see {@link https://api.jquery.com/jQuery.data/#jQuery-data-element-key}
     */
    data(element: Element, key: string): any;
    /**
     * Returns value at named data store for the element, as set by jQuery.data(element, name, value), or the full data store for the element.
     *
     * @param element The DOM element to associate with the data.
     * @see {@link https://api.jquery.com/jQuery.data/#jQuery-data-element}
     */
    data(element: Element): any;

    /**
     * Execute the next function on the queue for the matched element.
     *
     * @param element A DOM element from which to remove and execute a queued function.
     * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     * @see {@link https://api.jquery.com/jQuery.dequeue/}
     */
    dequeue(element: Element, queueName?: string): void;

    /**
     * Determine whether an element has any jQuery data associated with it.
     *
     * @param element A DOM element to be checked for data.
     * @see {@link https://api.jquery.com/jQuery.hasData/}
     */
    hasData(element: Element): boolean;

    /**
     * Show the queue of functions to be executed on the matched element.
     *
     * @param element A DOM element to inspect for an attached queue.
     * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     * @see {@link https://api.jquery.com/jQuery.queue/#jQuery-queue-element-queueName}
     */
    queue(element: Element, queueName?: string): any[];
    /**
     * Manipulate the queue of functions to be executed on the matched element.
     *
     * @param element A DOM element where the array of queued functions is attached.
     * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     * @param newQueue An array of functions to replace the current queue contents.
     * @see {@link https://api.jquery.com/jQuery.queue/#jQuery-queue-element-queueName-newQueue}
     */
    queue(element: Element, queueName: string, newQueue: Function[]): JQuery;
    /**
     * Manipulate the queue of functions to be executed on the matched element.
     *
     * @param element A DOM element on which to add a queued function.
     * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     * @param callback The new function to add to the queue.
     * @see {@link https://api.jquery.com/jQuery.queue/#jQuery-queue-element-queueName-callback}
     */
    queue(element: Element, queueName: string, callback: Function): JQuery;

    /**
     * Remove a previously-stored piece of data.
     *
     * @param element A DOM element from which to remove data.
     * @param name A string naming the piece of data to remove.
     * @see {@link https://api.jquery.com/jQuery.removeData/}
     */
    removeData(element: Element, name?: string): JQuery;

    /**
     * A constructor function that returns a chainable utility object with methods to register multiple callbacks into callback queues, invoke callback queues, and relay the success or failure state of any synchronous or asynchronous function.
     *
     * @param beforeStart A function that is called just before the constructor returns.
     * @see {@link https://api.jquery.com/jQuery.Deferred/}
     */
    Deferred<T>(beforeStart?: (deferred: JQueryDeferred<T>) => any): JQueryDeferred<T>;

    /**
     * Effects
     */

    easing: JQueryEasingFunctions;

    fx: {
        tick: () => void;
        /**
         * The rate (in milliseconds) at which animations fire.
         * @see {@link https://api.jquery.com/jQuery.fx.interval/}
         */
        interval: number;
        stop: () => void;
        speeds: { slow: number; fast: number; };
        /**
         * Globally disable all animations.
         * @see {@link https://api.jquery.com/jQuery.fx.off/}
         */
        off: boolean;
        step: any;
    };

    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param func The function whose context will be changed.
     * @param context The object to which the context (this) of the function should be set.
     * @param additionalArguments Any number of arguments to be passed to the function referenced in the function argument.
     * @see {@link https://api.jquery.com/jQuery.proxy/#jQuery-proxy-function-context-additionalArguments}
     */
    proxy(func: (...args: any[]) => any, context: Object, ...additionalArguments: any[]): any;
    /**
     * Takes a function and returns a new one that will always have a particular context.
     *
     * @param context The object to which the context (this) of the function should be set.
     * @param name The name of the function whose context will be changed (should be a property of the context object).
     * @param additionalArguments Any number of arguments to be passed to the function named in the name argument.
     * @see {@link https://api.jquery.com/jQuery.proxy/#jQuery-proxy-context-name-additionalArguments}
     */
    proxy(context: Object, name: string, ...additionalArguments: any[]): any;

    Event: JQueryEventConstructor;

    /**
     * Takes a string and throws an exception containing it.
     *
     * @param message The message to send out.
     * @see {@link https://api.jquery.com/jQuery.error/}
     */
    error(message: any): JQuery;

    expr: any;
    fn: any;  //TODO: Decide how we want to type this

    isReady: boolean;

    // Properties
    support: JQuerySupport;

    /**
     * Check to see if a DOM element is a descendant of another DOM element.
     *
     * @param container The DOM element that may contain the other element.
     * @param contained The DOM element that may be contained by (a descendant of) the other element.
     * @see {@link https://api.jquery.com/jQuery.contains/}
     */
    contains(container: Element, contained: Element): boolean;

    /**
     * A generic iterator function, which can be used to seamlessly iterate over both objects and arrays. Arrays and array-like objects with a length property (such as a function's arguments object) are iterated by numeric index, from 0 to length-1. Other objects are iterated via their named properties.
     *
     * @param collection The object or array to iterate over.
     * @param callback The function that will be executed on every object.
     * @see {@link https://api.jquery.com/jQuery.each/#jQuery-each-array-callback}
     */
    each<T>(
        collection: T[],
        callback: (indexInArray: number, valueOfElement: T) => any
        ): any;

    /**
     * A generic iterator function, which can be used to seamlessly iterate over both objects and arrays. Arrays and array-like objects with a length property (such as a function's arguments object) are iterated by numeric index, from 0 to length-1. Other objects are iterated via their named properties.
     *
     * @param collection The object or array to iterate over.
     * @param callback The function that will be executed on every object.
     * @see {@link https://api.jquery.com/jQuery.each/#jQuery-each-object-callback}
     */
    each(
        collection: any,
        callback: (indexInArray: any, valueOfElement: any) => any
        ): any;

    /**
     * Merge the contents of two or more objects together into the first object.
     *
     * @param target An object that will receive the new properties if additional objects are passed in or that will extend the jQuery namespace if it is the sole argument.
     * @param object1 An object containing additional properties to merge in.
     * @param objectN Additional objects containing properties to merge in.
     * @see {@link https://api.jquery.com/jQuery.extend/#jQuery-extend-target-object1-objectN}
     */
    extend(target: any, object1?: any, ...objectN: any[]): any;
    /**
     * Merge the contents of two or more objects together into the first object.
     *
     * @param deep If true, the merge becomes recursive (aka. deep copy).
     * @param target The object to extend. It will receive the new properties.
     * @param object1 An object containing additional properties to merge in.
     * @param objectN Additional objects containing properties to merge in.
     * @see {@link https://api.jquery.com/jQuery.extend/#jQuery-extend-deep-target-object1-objectN}
     */
    extend(deep: boolean, target: any, object1?: any, ...objectN: any[]): any;

    /**
     * Execute some JavaScript code globally.
     *
     * @param code The JavaScript code to execute.
     * @see {@link https://api.jquery.com/jQuery.globalEval/}
     */
    globalEval(code: string): any;

    /**
     * Finds the elements of an array which satisfy a filter function. The original array is not affected.
     *
     * @param array The array to search through.
     * @param func The function to process each item against. The first argument to the function is the item, and the second argument is the index. The function should return a Boolean value.  this will be the global window object.
     * @param invert If "invert" is false, or not provided, then the function returns an array consisting of all elements for which "callback" returns true. If "invert" is true, then the function returns an array consisting of all elements for which "callback" returns false.
     * @see {@link https://api.jquery.com/jQuery.grep/}
     */
    grep<T>(array: T[], func: (elementOfArray?: T, indexInArray?: number) => boolean, invert?: boolean): T[];

    /**
     * Search for a specified value within an array and return its index (or -1 if not found).
     *
     * @param value The value to search for.
     * @param array An array through which to search.
     * @param fromIndex The index of the array at which to begin the search. The default is 0, which will search the whole array.
     * @see {@link https://api.jquery.com/jQuery.inArray/}
     */
    inArray<T>(value: T, array: T[], fromIndex?: number): number;

    /**
     * Determine whether the argument is an array.
     *
     * @param obj Object to test whether or not it is an array.
     * @see {@link https://api.jquery.com/jQuery.isArray/}
     */
    isArray(obj: any): boolean;
    /**
     * Check to see if an object is empty (contains no enumerable properties).
     *
     * @param obj The object that will be checked to see if it's empty.
     * @see {@link https://api.jquery.com/jQuery.isEmptyObject/}
     */
    isEmptyObject(obj: any): boolean;
    /**
     * Determine if the argument passed is a JavaScript function object.
     *
     * @param obj Object to test whether or not it is a function.
     * @see {@link https://api.jquery.com/jQuery.isFunction/}
     */
    isFunction(obj: any): boolean;
    /**
     * Determines whether its argument is a number.
     *
     * @param value The value to be tested.
     * @see {@link https://api.jquery.com/jQuery.isNumeric/}
     */
    isNumeric(value: any): boolean;
    /**
     * Check to see if an object is a plain object (created using "{}" or "new Object").
     *
     * @param obj The object that will be checked to see if it's a plain object.
     * @see {@link https://api.jquery.com/jQuery.isPlainObject/}
     */
    isPlainObject(obj: any): boolean;
    /**
     * Determine whether the argument is a window.
     *
     * @param obj Object to test whether or not it is a window.
     * @see {@link https://api.jquery.com/jQuery.isWindow/}
     */
    isWindow(obj: any): boolean;
    /**
     * Check to see if a DOM node is within an XML document (or is an XML document).
     *
     * @param node The DOM node that will be checked to see if it's in an XML document.
     * @see {@link https://api.jquery.com/jQuery.isXMLDoc/}
     */
    isXMLDoc(node: Node): boolean;

    /**
     * Convert an array-like object into a true JavaScript array.
     *
     * @param obj Any object to turn into a native Array.
     * @see {@link https://api.jquery.com/jQuery.makeArray/}
     */
    makeArray(obj: any): any[];

    /**
     * Translate all items in an array or object to new array of items.
     *
     * @param array The Array to translate.
     * @param callback The function to process each item against. The first argument to the function is the array item, the second argument is the index in array The function can return any value. Within the function, this refers to the global (window) object.
     * @see {@link https://api.jquery.com/jQuery.map/#jQuery-map-array-callback}
     */
    map<T, U>(array: T[], callback: (elementOfArray?: T, indexInArray?: number) => U): U[];
    /**
     * Translate all items in an array or object to new array of items.
     *
     * @param arrayOrObject The Array or Object to translate.
     * @param callback The function to process each item against. The first argument to the function is the value; the second argument is the index or key of the array or object property. The function can return any value to add to the array. A returned array will be flattened into the resulting array. Within the function, this refers to the global (window) object.
     * @see {@link https://api.jquery.com/jQuery.map/#jQuery-map-object-callback}
     */
    map(arrayOrObject: any, callback: (value?: any, indexOrKey?: any) => any): any;

    /**
     * Merge the contents of two arrays together into the first array.
     *
     * @param first The first array to merge, the elements of second added.
     * @param second The second array to merge into the first, unaltered.
     * @see {@link https://api.jquery.com/jQuery.merge/}
     */
    merge<T>(first: T[], second: T[]): T[];

    /**
     * An empty function.
     * @see {@link https://api.jquery.com/jQuery.noop/}
     */
    noop(): any;

    /**
     * Return a number representing the current time.
     * @see {@link https://api.jquery.com/jQuery.now/}
     */
    now(): number;

    /**
     * Takes a well-formed JSON string and returns the resulting JavaScript object.
     *
     * @param json The JSON string to parse.
     * @see {@link https://api.jquery.com/jQuery.parseJSON/}
     */
    parseJSON(json: string): any;

    /**
     * Parses a string into an XML document.
     *
     * @param data a well-formed XML string to be parsed
     * @see {@link https://api.jquery.com/jQuery.parseXML/}
     */
    parseXML(data: string): XMLDocument;

    /**
     * Remove the whitespace from the beginning and end of a string.
     *
     * @param str Remove the whitespace from the beginning and end of a string.
     * @see {@link https://api.jquery.com/jQuery.trim/}
     */
    trim(str: string): string;

    /**
     * Determine the internal JavaScript [[Class]] of an object.
     *
     * @param obj Object to get the internal JavaScript [[Class]] of.
     * @see {@link https://api.jquery.com/jQuery.type/}
     */
    type(obj: any): string;

    /**
     * Sorts an array of DOM elements, in place, with the duplicates removed. Note that this only works on arrays of DOM elements, not strings or numbers.
     *
     * @param array The Array of DOM elements.
     * @see {@link https://api.jquery.com/jQuery.unique/}
     */
    unique(array: Element[]): Element[];

    /**
     * Parses a string into an array of DOM nodes.
     *
     * @param data HTML string to be parsed
     * @param context DOM element to serve as the context in which the HTML fragment will be created
     * @param keepScripts A Boolean indicating whether to include scripts passed in the HTML string
     * @see {@link https://api.jquery.com/jQuery.parseHTML/}
     */
    parseHTML(data: string, context?: HTMLElement, keepScripts?: boolean): any[];

    /**
     * Parses a string into an array of DOM nodes.
     *
     * @param data HTML string to be parsed
     * @param context DOM element to serve as the context in which the HTML fragment will be created
     * @param keepScripts A Boolean indicating whether to include scripts passed in the HTML string
     * @see {@link https://api.jquery.com/jQuery.parseHTML/}
     */
    parseHTML(data: string, context?: Document, keepScripts?: boolean): any[];
}

/**
 * The jQuery instance members
 *
 * @see {@link https://api.jquery.com/Types/#jQuery}
 */
interface JQuery {
    /**
     * Register a handler to be called when Ajax requests complete. This is an AjaxEvent.
     *
     * @param handler The function to be invoked.
     * @see {@link https://api.jquery.com/ajaxComplete/}
     */
    ajaxComplete(handler: (event: JQueryEventObject, XMLHttpRequest: XMLHttpRequest, ajaxOptions: any) => any): JQuery;
    /**
     * Register a handler to be called when Ajax requests complete with an error. This is an Ajax Event.
     *
     * @param handler The function to be invoked.
     * @see {@link https://api.jquery.com/ajaxError/}
     */
    ajaxError(handler: (event: JQueryEventObject, jqXHR: JQueryXHR, ajaxSettings: JQueryAjaxSettings, thrownError: any) => any): JQuery;
    /**
     * Attach a function to be executed before an Ajax request is sent. This is an Ajax Event.
     *
     * @param handler The function to be invoked.
     * @see {@link https://api.jquery.com/ajaxSend/}
     */
    ajaxSend(handler: (event: JQueryEventObject, jqXHR: JQueryXHR, ajaxOptions: JQueryAjaxSettings) => any): JQuery;
    /**
     * Register a handler to be called when the first Ajax request begins. This is an Ajax Event.
     *
     * @param handler The function to be invoked.
     * @see {@link https://api.jquery.com/ajaxStart/}
     */
    ajaxStart(handler: () => any): JQuery;
    /**
     * Register a handler to be called when all Ajax requests have completed. This is an Ajax Event.
     *
     * @param handler The function to be invoked.
     * @see {@link https://api.jquery.com/ajaxStop/}
     */
    ajaxStop(handler: () => any): JQuery;
    /**
     * Attach a function to be executed whenever an Ajax request completes successfully. This is an Ajax Event.
     *
     * @param handler The function to be invoked.
     * @see {@link https://api.jquery.com/ajaxSuccess/}
     */
    ajaxSuccess(handler: (event: JQueryEventObject, XMLHttpRequest: XMLHttpRequest, ajaxOptions: JQueryAjaxSettings) => any): JQuery;

    /**
     * Load data from the server and place the returned HTML into the matched element.
     *
     * @param url A string containing the URL to which the request is sent.
     * @param data A plain object or string that is sent to the server with the request.
     * @param complete A callback function that is executed when the request completes.
     * @see {@link https://api.jquery.com/load/}
     */
    load(url: string, data?: string|Object, complete?: (responseText: string, textStatus: string, XMLHttpRequest: XMLHttpRequest) => any): JQuery;

    /**
     * Encode a set of form elements as a string for submission.
     * @see {@link https://api.jquery.com/serialize/}
     */
    serialize(): string;
    /**
     * Encode a set of form elements as an array of names and values.
     * @see {@link https://api.jquery.com/serializeArray/}
     */
    serializeArray(): JQuerySerializeArrayElement[];

    /**
     * Adds the specified class(es) to each of the set of matched elements.
     *
     * @param className One or more space-separated classes to be added to the class attribute of each matched element.
     * @see {@link https://api.jquery.com/addClass/#addClass-className}
     */
    addClass(className: string): JQuery;
    /**
     * Adds the specified class(es) to each of the set of matched elements.
     *
     * @param func A function returning one or more space-separated class names to be added to the existing class name(s). Receives the index position of the element in the set and the existing class name(s) as arguments. Within the function, this refers to the current element in the set.
     * @see {@link https://api.jquery.com/addClass/#addClass-function}
     */
    addClass(func: (index: number, className: string) => string): JQuery;

    /**
     * Add the previous set of elements on the stack to the current set, optionally filtered by a selector.
     * @see {@link https://api.jquery.com/addBack/}
     */
    addBack(selector?: string): JQuery;

    /**
     * Get the value of an attribute for the first element in the set of matched elements.
     *
     * @param attributeName The name of the attribute to get.
     * @see {@link https://api.jquery.com/attr/#attr-attributeName}
     */
    attr(attributeName: string): string;
    /**
     * Set one or more attributes for the set of matched elements.
     *
     * @param attributeName The name of the attribute to set.
     * @param value A value to set for the attribute. If this is `null`, the attribute will be deleted.
     * @see {@link https://api.jquery.com/attr/#attr-attributeName-value}
     */
    attr(attributeName: string, value: string|number|null): JQuery;
    /**
     * Set one or more attributes for the set of matched elements.
     *
     * @param attributeName The name of the attribute to set.
     * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old attribute value as arguments.
     * @see {@link https://api.jquery.com/attr/#attr-attributeName-function}
     */
    attr(attributeName: string, func: (index: number, attr: string) => string|number): JQuery;
    /**
     * Set one or more attributes for the set of matched elements.
     *
     * @param attributes An object of attribute-value pairs to set.
     * @see {@link https://api.jquery.com/attr/#attr-attributes}
     */
    attr(attributes: Object): JQuery;

    /**
     * Determine whether any of the matched elements are assigned the given class.
     *
     * @param className The class name to search for.
     * @see {@link https://api.jquery.com/hasClass/}
     */
    hasClass(className: string): boolean;

    /**
     * Get the HTML contents of the first element in the set of matched elements.
     * @see {@link https://api.jquery.com/html/#html}
     */
    html(): string;
    /**
     * Set the HTML contents of each element in the set of matched elements.
     *
     * @param htmlString A string of HTML to set as the content of each matched element.
     * @see {@link https://api.jquery.com/html/#html-htmlString}
     */
    html(htmlString: string): JQuery;
    /**
     * Set the HTML contents of each element in the set of matched elements.
     *
     * @param func A function returning the HTML content to set. Receives the index position of the element in the set and the old HTML value as arguments. jQuery empties the element before calling the function; use the oldhtml argument to reference the previous content. Within the function, this refers to the current element in the set.
     * @see {@link https://api.jquery.com/html/#html-function}
     */
    html(func: (index: number, oldhtml: string) => string): JQuery;

    /**
     * Get the value of a property for the first element in the set of matched elements.
     *
     * @param propertyName The name of the property to get.
     * @see {@link https://api.jquery.com/prop/#prop-propertyName}
     */
    prop(propertyName: string): any;
    /**
     * Set one or more properties for the set of matched elements.
     *
     * @param propertyName The name of the property to set.
     * @param value A value to set for the property.
     * @see {@link https://api.jquery.com/prop/#prop-propertyName-value}
     */
    prop(propertyName: string, value: string|number|boolean): JQuery;
    /**
     * Set one or more properties for the set of matched elements.
     *
     * @param properties An object of property-value pairs to set.
     * @see {@link https://api.jquery.com/prop/#prop-properties}
     */
    prop(properties: Object): JQuery;
    /**
     * Set one or more properties for the set of matched elements.
     *
     * @param propertyName The name of the property to set.
     * @param func A function returning the value to set. Receives the index position of the element in the set and the old property value as arguments. Within the function, the keyword this refers to the current element.
     * @see {@link https://api.jquery.com/prop/#prop-propertyName-function}
     */
    prop(propertyName: string, func: (index: number, oldPropertyValue: any) => any): JQuery;

    /**
     * Remove an attribute from each element in the set of matched elements.
     *
     * @param attributeName An attribute to remove; as of version 1.7, it can be a space-separated list of attributes.
     * @see {@link https://api.jquery.com/removeAttr/}
     */
    removeAttr(attributeName: string): JQuery;

    /**
     * Remove a single class, multiple classes, or all classes from each element in the set of matched elements.
     *
     * @param className One or more space-separated classes to be removed from the class attribute of each matched element.
     * @see {@link https://api.jquery.com/removeClass/#removeClass-className}
     */
    removeClass(className?: string): JQuery;
    /**
     * Remove a single class, multiple classes, or all classes from each element in the set of matched elements.
     *
     * @param func A function returning one or more space-separated class names to be removed. Receives the index position of the element in the set and the old class value as arguments.
     * @see {@link https://api.jquery.com/removeClass/#removeClass-function}
     */
    removeClass(func: (index: number, className: string) => string): JQuery;

    /**
     * Remove a property for the set of matched elements.
     *
     * @param propertyName The name of the property to remove.
     * @see {@link https://api.jquery.com/removeProp/}
     */
    removeProp(propertyName: string): JQuery;

    /**
     * Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the switch argument.
     *
     * @param className One or more class names (separated by spaces) to be toggled for each element in the matched set.
     * @param swtch A Boolean (not just truthy/falsy) value to determine whether the class should be added or removed.
     * @see {@link https://api.jquery.com/toggleClass/#toggleClass-className}
     */
    toggleClass(className: string, swtch?: boolean): JQuery;
    /**
     * Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the switch argument.
     *
     * @param swtch A boolean value to determine whether the class should be added or removed.
     * @see {@link https://api.jquery.com/toggleClass/#toggleClass-state}
     */
    toggleClass(swtch?: boolean): JQuery;
    /**
     * Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the switch argument.
     *
     * @param func A function that returns class names to be toggled in the class attribute of each element in the matched set. Receives the index position of the element in the set, the old class value, and the switch as arguments.
     * @param swtch A boolean value to determine whether the class should be added or removed.
     * @see {@link https://api.jquery.com/toggleClass/#toggleClass-function-state}
     */
    toggleClass(func: (index: number, className: string, swtch: boolean) => string, swtch?: boolean): JQuery;

    /**
     * Get the current value of the first element in the set of matched elements.
     * @see {@link https://api.jquery.com/val/#val}
     */
    val(): any;
    /**
     * Set the value of each element in the set of matched elements.
     *
     * @param value A string of text, an array of strings or number corresponding to the value of each matched element to set as selected/checked.
     * @see {@link https://api.jquery.com/val/#val-value}
     */
    val(value: string|string[]|number): JQuery;
    /**
     * Set the value of each element in the set of matched elements.
     *
     * @param func A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.
     * @see {@link https://api.jquery.com/val/#val-function}
     */
    val(func: (index: number, value: string) => string): JQuery;

    /**
     * Get the value of style properties for the first element in the set of matched elements.
     *
     * @param propertyName A CSS property.
     * @see {@link https://api.jquery.com/css/#css-propertyName}
     */
    css(propertyName: string): string;
    /**
     * Set one or more CSS properties for the set of matched elements.
     *
     * @param propertyName A CSS property name.
     * @param value A value to set for the property.
     * @see {@link https://api.jquery.com/css/#css-propertyName-value}
     */
    css(propertyName: string, value: string|number): JQuery;
    /**
     * Set one or more CSS properties for the set of matched elements.
     *
     * @param propertyName A CSS property name.
     * @param value A function returning the value to set. this is the current element. Receives the index position of the element in the set and the old value as arguments.
     * @see {@link https://api.jquery.com/css/#css-propertyName-function}
     */
    css(propertyName: string, value: (index: number, value: string) => string|number): JQuery;
    /**
     * Set one or more CSS properties for the set of matched elements.
     *
     * @param properties An object of property-value pairs to set.
     * @see {@link https://api.jquery.com/css/#css-properties}
     */
    css(properties: Object): JQuery;

    /**
     * Get the current computed height for the first element in the set of matched elements.
     * @see {@link https://api.jquery.com/height/#height}
     */
    height(): number;
    /**
     * Set the CSS height of every matched element.
     *
     * @param value An integer representing the number of pixels, or an integer with an optional unit of measure appended (as a string).
     * @see {@link https://api.jquery.com/height/#height-value}
     */
    height(value: number|string): JQuery;
    /**
     * Set the CSS height of every matched element.
     *
     * @param func A function returning the height to set. Receives the index position of the element in the set and the old height as arguments. Within the function, this refers to the current element in the set.
     * @see {@link https://api.jquery.com/height/#height-function}
     */
    height(func: (index: number, height: number) => number|string): JQuery;

    /**
     * Get the current computed height for the first element in the set of matched elements, including padding but not border.
     * @see {@link https://api.jquery.com/innerHeight/#innerHeight}
     */
    innerHeight(): number;

    /**
     * Sets the inner height on elements in the set of matched elements, including padding but not border.
     *
     * @param value An integer representing the number of pixels, or an integer along with an optional unit of measure appended (as a string).
     * @see {@link https://api.jquery.com/innerHeight/#innerHeight-value}
     */
    innerHeight(value: number|string): JQuery;

    /**
     * Get the current computed width for the first element in the set of matched elements, including padding but not border.
     * @see {@link https://api.jquery.com/innerWidth/#innerWidth}
     */
    innerWidth(): number;

    /**
     * Sets the inner width on elements in the set of matched elements, including padding but not border.
     *
     * @param value An integer representing the number of pixels, or an integer along with an optional unit of measure appended (as a string).
     * @see {@link https://api.jquery.com/innerWidth/#innerWidth-value}
     */
    innerWidth(value: number|string): JQuery;

    /**
     * Get the current coordinates of the first element in the set of matched elements, relative to the document.
     * @see {@link https://api.jquery.com/offset/#offset}
     */
    offset(): JQueryCoordinates;
    /**
     * An object containing the properties top and left, which are integers indicating the new top and left coordinates for the elements.
     *
     * @param coordinates An object containing the properties top and left, which are integers indicating the new top and left coordinates for the elements.
     * @see {@link https://api.jquery.com/offset/#offset-coordinates}
     */
    offset(coordinates: JQueryCoordinates): JQuery;
    /**
     * An object containing the properties top and left, which are integers indicating the new top and left coordinates for the elements.
     *
     * @param func A function to return the coordinates to set. Receives the index of the element in the collection as the first argument and the current coordinates as the second argument. The function should return an object with the new top and left properties.
     * @see {@link https://api.jquery.com/offset/#offset-function}
     */
    offset(func: (index: number, coords: JQueryCoordinates) => JQueryCoordinates): JQuery;

    /**
     * Get the current computed height for the first element in the set of matched elements, including padding, border, and optionally margin. Returns an integer (without "px") representation of the value or null if called on an empty set of elements.
     *
     * @param includeMargin A Boolean indicating whether to include the element's margin in the calculation.
     * @see {@link https://api.jquery.com/outerHeight/#outerHeight-includeMargin}
     */
    outerHeight(includeMargin?: boolean): number;

    /**
     * Sets the outer height on elements in the set of matched elements, including padding and border.
     *
     * @param value An integer representing the number of pixels, or an integer along with an optional unit of measure appended (as a string).
     * @see {@link https://api.jquery.com/outerHeight/#outerHeight-value}
     */
    outerHeight(value: number|string): JQuery;

    /**
     * Get the current computed width for the first element in the set of matched elements, including padding and border.
     *
     * @param includeMargin A Boolean indicating whether to include the element's margin in the calculation.
     * @see {@link https://api.jquery.com/outerWidth/#outerWidth-includeMargin}
     */
    outerWidth(includeMargin?: boolean): number;

    /**
     * Sets the outer width on elements in the set of matched elements, including padding and border.
     *
     * @param value An integer representing the number of pixels, or an integer along with an optional unit of measure appended (as a string).
     * @see {@link https://api.jquery.com/outerWidth/#outerWidth-value}
     */
    outerWidth(value: number|string): JQuery;

    /**
     * Get the current coordinates of the first element in the set of matched elements, relative to the offset parent.
     * @see {@link https://api.jquery.com/position/}
     */
    position(): JQueryCoordinates;

    /**
     * Get the current horizontal position of the scroll bar for the first element in the set of matched elements or set the horizontal position of the scroll bar for every matched element.
     * @see {@link https://api.jquery.com/scrollLeft/#scrollLeft}
     */
    scrollLeft(): number;
    /**
     * Set the current horizontal position of the scroll bar for each of the set of matched elements.
     *
     * @param value An integer indicating the new position to set the scroll bar to.
     * @see {@link https://api.jquery.com/scrollLeft/#scrollLeft-value}
     */
    scrollLeft(value: number): JQuery;

    /**
     * Get the current vertical position of the scroll bar for the first element in the set of matched elements or set the vertical position of the scroll bar for every matched element.
     * @see {@link https://api.jquery.com/scrollTop/#scrollTop}
     */
    scrollTop(): number;
    /**
     * Set the current vertical position of the scroll bar for each of the set of matched elements.
     *
     * @param value An integer indicating the new position to set the scroll bar to.
     * @see {@link https://api.jquery.com/scrollTop/#scrollTop-value}
     */
    scrollTop(value: number): JQuery;

    /**
     * Get the current computed width for the first element in the set of matched elements.
     * @see {@link https://api.jquery.com/width/#width}
     */
    width(): number;
    /**
     * Set the CSS width of each element in the set of matched elements.
     *
     * @param value An integer representing the number of pixels, or an integer along with an optional unit of measure appended (as a string).
     * @see {@link https://api.jquery.com/width/#width-value}
     */
    width(value: number|string): JQuery;
    /**
     * Set the CSS width of each element in the set of matched elements.
     *
     * @param func A function returning the width to set. Receives the index position of the element in the set and the old width as arguments. Within the function, this refers to the current element in the set.
     * @see {@link https://api.jquery.com/width/#width-function}
     */
    width(func: (index: number, width: number) => number|string): JQuery;

    /**
     * Remove from the queue all items that have not yet been run.
     *
     * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     * @see {@link https://api.jquery.com/clearQueue/}
     */
    clearQueue(queueName?: string): JQuery;

    /**
     * Store arbitrary data associated with the matched elements.
     *
     * @param key A string naming the piece of data to set.
     * @param value The new data value; it can be any JavaScript type including Array or Object.
     * @see {@link https://api.jquery.com/data/#data-key-value}
     */
    data(key: string, value: any): JQuery;
    /**
     * Return the value at the named data store for the first element in the jQuery collection, as set by data(name, value) or by an HTML5 data-* attribute.
     *
     * @param key Name of the data stored.
     * @see {@link https://api.jquery.com/data/#data-key}
     */
    data(key: string): any;
    /**
     * Store arbitrary data associated with the matched elements.
     *
     * @param obj An object of key-value pairs of data to update.
     * @see {@link https://api.jquery.com/data/#data-obj}
     */
    data(obj: { [key: string]: any; }): JQuery;
    /**
     * Return the value at the named data store for the first element in the jQuery collection, as set by data(name, value) or by an HTML5 data-* attribute.
     * @see {@link https://api.jquery.com/data/#data}
     */
    data(): any;

    /**
     * Execute the next function on the queue for the matched elements.
     *
     * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     * @see {@link https://api.jquery.com/dequeue/}
     */
    dequeue(queueName?: string): JQuery;

    /**
     * Remove a previously-stored piece of data.
     *
     * @param name A string naming the piece of data to delete or space-separated string naming the pieces of data to delete.
     * @see {@link https://api.jquery.com/removeData/#removeData-name}
     */
    removeData(name: string): JQuery;
    /**
     * Remove a previously-stored piece of data.
     *
     * @param list An array of strings naming the pieces of data to delete.
     * @see {@link https://api.jquery.com/removeData/#removeData-list}
     */
    removeData(list: string[]): JQuery;
    /**
     * Remove all previously-stored piece of data.
     * @see {@link https://api.jquery.com/removeData/}
     */
    removeData(): JQuery;

    /**
     * Return a Promise object to observe when all actions of a certain type bound to the collection, queued or not, have finished.
     *
     * @param type The type of queue that needs to be observed. (default: fx)
     * @param target Object onto which the promise methods have to be attached
     * @see {@link https://api.jquery.com/promise/}
     */
    promise(type?: string, target?: Object): JQueryPromise<any>;

    /**
     * Perform a custom animation of a set of CSS properties.
     *
     * @param properties An object of CSS properties and values that the animation will move toward.
     * @param duration A string or number determining how long the animation will run.
     * @param complete A function to call once the animation is complete.
     * @see {@link https://api.jquery.com/animate/#animate-properties-duration-easing-complete}
     */
    animate(properties: Object, duration?: string|number, complete?: Function): JQuery;
    /**
     * Perform a custom animation of a set of CSS properties.
     *
     * @param properties An object of CSS properties and values that the animation will move toward.
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition. (default: swing)
     * @param complete A function to call once the animation is complete.
     * @see {@link https://api.jquery.com/animate/#animate-properties-duration-easing-complete}
     */
    animate(properties: Object, duration?: string|number, easing?: string, complete?: Function): JQuery;
    /**
     * Perform a custom animation of a set of CSS properties.
     *
     * @param properties An object of CSS properties and values that the animation will move toward.
     * @param options A map of additional options to pass to the method.
     * @see {@link https://api.jquery.com/animate/#animate-properties-options}
     */
    animate(properties: Object, options: JQueryAnimationOptions): JQuery;

    /**
     * Set a timer to delay execution of subsequent items in the queue.
     *
     * @param duration An integer indicating the number of milliseconds to delay execution of the next item in the queue.
     * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     * @see {@link https://api.jquery.com/delay/}
     */
    delay(duration: number, queueName?: string): JQuery;

    /**
     * Display the matched elements by fading them to opaque.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param complete A function to call once the animation is complete.
     * @see {@link https://api.jquery.com/fadeIn/#fadeIn-duration-complete}
     */
    fadeIn(duration?: number|string, complete?: Function): JQuery;
    /**
     * Display the matched elements by fading them to opaque.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete.
     * @see {@link https://api.jquery.com/fadeIn/#fadeIn-duration-easing-complete}
     */
    fadeIn(duration?: number|string, easing?: string, complete?: Function): JQuery;
    /**
     * Display the matched elements by fading them to opaque.
     *
     * @param options A map of additional options to pass to the method.
     * @see {@link https://api.jquery.com/fadeIn/#fadeIn-options}
     */
    fadeIn(options: JQueryAnimationOptions): JQuery;

    /**
     * Hide the matched elements by fading them to transparent.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param complete A function to call once the animation is complete.
     * @see {@link https://api.jquery.com/fadeOut/#fadeOut-duration-complete}
     */
    fadeOut(duration?: number|string, complete?: Function): JQuery;
    /**
     * Hide the matched elements by fading them to transparent.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete.
     * @see {@link https://api.jquery.com/fadeOut/#fadeOut-duration-easing-complete}
     */
    fadeOut(duration?: number|string, easing?: string, complete?: Function): JQuery;
    /**
     * Hide the matched elements by fading them to transparent.
     *
     * @param options A map of additional options to pass to the method.
     * @see {@link https://api.jquery.com/fadeOut/#fadeOut-options}
     */
    fadeOut(options: JQueryAnimationOptions): JQuery;

    /**
     * Adjust the opacity of the matched elements.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param opacity A number between 0 and 1 denoting the target opacity.
     * @param complete A function to call once the animation is complete.
     * @see {@link https://api.jquery.com/fadeTo/#fadeTo-duration-opacity-complete}
     */
    fadeTo(duration: string|number, opacity: number, complete?: Function): JQuery;
    /**
     * Adjust the opacity of the matched elements.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param opacity A number between 0 and 1 denoting the target opacity.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete.
     * @see {@link https://api.jquery.com/fadeTo/#fadeTo-duration-opacity-easing-complete}
     */
    fadeTo(duration: string|number, opacity: number, easing?: string, complete?: Function): JQuery;

    /**
     * Display or hide the matched elements by animating their opacity.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param complete A function to call once the animation is complete.
     * @see {@link https://api.jquery.com/fadeToggle/#fadeToggle-duration-easing-complete}
     */
    fadeToggle(duration?: number|string, complete?: Function): JQuery;
    /**
     * Display or hide the matched elements by animating their opacity.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete.
     * @see {@link https://api.jquery.com/fadeToggle/#fadeToggle-duration-easing-complete}
     */
    fadeToggle(duration?: number|string, easing?: string, complete?: Function): JQuery;
    /**
     * Display or hide the matched elements by animating their opacity.
     *
     * @param options A map of additional options to pass to the method.
     * @see {@link https://api.jquery.com/fadeToggle/#fadeToggle-options}
     */
    fadeToggle(options: JQueryAnimationOptions): JQuery;

    /**
     * Stop the currently-running animation, remove all queued animations, and complete all animations for the matched elements.
     *
     * @param queue The name of the queue in which to stop animations.
     * @see {@link https://api.jquery.com/finish/}
     */
    finish(queue?: string): JQuery;

    /**
     * Hide the matched elements.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param complete A function to call once the animation is complete.
     * @see {@link https://api.jquery.com/hide/#hide}
     */
    hide(duration?: number|string, complete?: Function): JQuery;
    /**
     * Hide the matched elements.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete.
     * @see {@link https://api.jquery.com/hide/#hide-duration-easing-complete}
     */
    hide(duration?: number|string, easing?: string, complete?: Function): JQuery;
    /**
     * Hide the matched elements.
     *
     * @param options A map of additional options to pass to the method.
     * @see {@link https://api.jquery.com/hide/#hide-options}
     */
    hide(options: JQueryAnimationOptions): JQuery;

    /**
     * Display the matched elements.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param complete A function to call once the animation is complete.
     * @see {@link https://api.jquery.com/show/#show}
     */
    show(duration?: number|string, complete?: Function): JQuery;
    /**
     * Display the matched elements.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete.
     * @see {@link https://api.jquery.com/show/#show-duration-easing-complete}
     */
    show(duration?: number|string, easing?: string, complete?: Function): JQuery;
    /**
     * Display the matched elements.
     *
     * @param options A map of additional options to pass to the method.
     * @see {@link https://api.jquery.com/show/#show-options}
     */
    show(options: JQueryAnimationOptions): JQuery;

    /**
     * Display the matched elements with a sliding motion.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param complete A function to call once the animation is complete.
     * @see {@link https://api.jquery.com/slideDown/#slideDown-duration-complete}
     */
    slideDown(duration?: number|string, complete?: Function): JQuery;
    /**
     * Display the matched elements with a sliding motion.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete.
     * @see {@link https://api.jquery.com/slideDown/#slideDown-duration-easing-complete}
     */
    slideDown(duration?: number|string, easing?: string, complete?: Function): JQuery;
    /**
     * Display the matched elements with a sliding motion.
     *
     * @param options A map of additional options to pass to the method.
     * @see {@link https://api.jquery.com/slideDown/#slideDown-options}
     */
    slideDown(options: JQueryAnimationOptions): JQuery;

    /**
     * Display or hide the matched elements with a sliding motion.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param complete A function to call once the animation is complete.
     * @see {@link https://api.jquery.com/slideToggle/#slideToggle-duration-complete}
     */
    slideToggle(duration?: number|string, complete?: Function): JQuery;
    /**
     * Display or hide the matched elements with a sliding motion.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete.
     * @see {@link https://api.jquery.com/slideToggle/#slideToggle-duration-easing-complete}
     */
    slideToggle(duration?: number|string, easing?: string, complete?: Function): JQuery;
    /**
     * Display or hide the matched elements with a sliding motion.
     *
     * @param options A map of additional options to pass to the method.
     * @see {@link https://api.jquery.com/slideToggle/#slideToggle-options}
     */
    slideToggle(options: JQueryAnimationOptions): JQuery;

    /**
     * Hide the matched elements with a sliding motion.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param complete A function to call once the animation is complete.
     * @see {@link https://api.jquery.com/slideUp/#slideUp-duration-complete}
     */
    slideUp(duration?: number|string, complete?: Function): JQuery;
    /**
     * Hide the matched elements with a sliding motion.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete.
     * @see {@link https://api.jquery.com/slideUp/#slideUp-duration-easing-complete}
     */
    slideUp(duration?: number|string, easing?: string, complete?: Function): JQuery;
    /**
     * Hide the matched elements with a sliding motion.
     *
     * @param options A map of additional options to pass to the method.
     * @see {@link https://api.jquery.com/slideUp/#slideUp-options}
     */
    slideUp(options: JQueryAnimationOptions): JQuery;

    /**
     * Stop the currently-running animation on the matched elements.
     *
     * @param clearQueue A Boolean indicating whether to remove queued animation as well. Defaults to false.
     * @param jumpToEnd A Boolean indicating whether to complete the current animation immediately. Defaults to false.
     * @see {@link https://api.jquery.com/stop/#stop-clearQueue-jumpToEnd}
     */
    stop(clearQueue?: boolean, jumpToEnd?: boolean): JQuery;
    /**
     * Stop the currently-running animation on the matched elements.
     *
     * @param queue The name of the queue in which to stop animations.
     * @param clearQueue A Boolean indicating whether to remove queued animation as well. Defaults to false.
     * @param jumpToEnd A Boolean indicating whether to complete the current animation immediately. Defaults to false.
     * @see {@link https://api.jquery.com/stop/#stop-queue-clearQueue-jumpToEnd}
     */
    stop(queue?: string, clearQueue?: boolean, jumpToEnd?: boolean): JQuery;

    /**
     * Display or hide the matched elements.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param complete A function to call once the animation is complete.
     * @see {@link https://api.jquery.com/toggle/#toggle-duration-complete}
     */
    toggle(duration?: number|string, complete?: Function): JQuery;
    /**
     * Display or hide the matched elements.
     *
     * @param duration A string or number determining how long the animation will run.
     * @param easing A string indicating which easing function to use for the transition.
     * @param complete A function to call once the animation is complete.
     * @see {@link https://api.jquery.com/toggle/#toggle-duration-easing-complete}
     */
    toggle(duration?: number|string, easing?: string, complete?: Function): JQuery;
    /**
     * Display or hide the matched elements.
     *
     * @param options A map of additional options to pass to the method.
     * @see {@link https://api.jquery.com/toggle/#toggle-options}
     */
    toggle(options: JQueryAnimationOptions): JQuery;
    /**
     * Display or hide the matched elements.
     *
     * @param showOrHide A Boolean indicating whether to show or hide the elements.
     * @see {@link https://api.jquery.com/toggle/#toggle-display}
     */
    toggle(showOrHide: boolean): JQuery;

    /**
     * Attach a handler to an event for the elements.
     *
     * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/bind/#bind-eventType-eventData-handler}
     */
    bind(eventType: string, eventData: any, handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Attach a handler to an event for the elements.
     *
     * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/bind/#bind-eventType-eventData-handler}
     */
    bind(eventType: string, handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Attach a handler to an event for the elements.
     *
     * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
     * @param eventData An object containing data that will be passed to the event handler.
     * @param preventBubble Setting the third argument to false will attach a function that prevents the default action from occurring and stops the event from bubbling. The default is true.
     * @see {@link https://api.jquery.com/bind/#bind-eventType-eventData-preventBubble}
     */
    bind(eventType: string, eventData: any, preventBubble: boolean): JQuery;
    /**
     * Attach a handler to an event for the elements.
     *
     * @param eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
     * @param preventBubble Setting the third argument to false will attach a function that prevents the default action from occurring and stops the event from bubbling. The default is true.
     * @see {@link https://api.jquery.com/bind/#bind-eventType-eventData-preventBubble}
     */
    bind(eventType: string, preventBubble: boolean): JQuery;
    /**
     * Attach a handler to an event for the elements.
     *
     * @param events An object containing one or more DOM event types and functions to execute for them.
     * @see {@link https://api.jquery.com/bind/#bind-events}
     */
    bind(events: any): JQuery;

    /**
     * Trigger the "blur" event on an element
     * @see {@link https://api.jquery.com/blur/#blur}
     */
    blur(): JQuery;
    /**
     * Bind an event handler to the "blur" JavaScript event
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/blur/#blur-handler}
     */
    blur(handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "blur" JavaScript event
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/blur/#blur-eventData-handler}
     */
    blur(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Trigger the "change" event on an element.
     * @see {@link https://api.jquery.com/change/#change}
     */
    change(): JQuery;
    /**
     * Bind an event handler to the "change" JavaScript event
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/change/#change-handler}
     */
    change(handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "change" JavaScript event
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/change/#change-eventData-handler}
     */
    change(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Trigger the "click" event on an element.
     * @see {@link https://api.jquery.com/click/#click}
     */
    click(): JQuery;
    /**
     * Bind an event handler to the "click" JavaScript event
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/click/#click-handler}
     */
    click(handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "click" JavaScript event
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/click/#click-eventData-handler}
     */
    click(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Trigger the "contextmenu" event on an element.
     * @see {@link https://api.jquery.com/contextmenu/#contextmenu}
     */
    contextmenu(): JQuery;
    /**
     * Bind an event handler to the "contextmenu" JavaScript event.
     *
     * @param handler A function to execute when the event is triggered.
     * @see {@link https://api.jquery.com/contextmenu/#contextmenu-handler}
     */
    contextmenu(handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "contextmenu" JavaScript event.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute when the event is triggered.
     * @see {@link https://api.jquery.com/contextmenu/#contextmenu-eventData-handler}
     */
    contextmenu(eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any): JQuery;

    /**
     * Trigger the "dblclick" event on an element.
     * @see {@link https://api.jquery.com/dblclick/#dblclick}
     */
    dblclick(): JQuery;
    /**
     * Bind an event handler to the "dblclick" JavaScript event
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/dblclick/#dblclick-handler}
     */
    dblclick(handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "dblclick" JavaScript event
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/dblclick/#dblclick-eventData-handler}
     */
    dblclick(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Attach a handler to one or more events for all elements that match the selector, now or in the future, based on a specific set of root elements.
     * @see {@link https://api.jquery.com/delegate/#delegate-selector-eventType-handler}
     */
    delegate(selector: any, eventType: string, handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Attach a handler to one or more events for all elements that match the selector, now or in the future, based on a specific set of root elements.
     * @see {@link https://api.jquery.com/delegate/#delegate-selector-eventType-eventData-handler}
     */
    delegate(selector: any, eventType: string, eventData: any, handler: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Trigger the "focus" event on an element.
     * @see {@link https://api.jquery.com/focus/#focus}
     */
    focus(): JQuery;
    /**
     * Bind an event handler to the "focus" JavaScript event
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/focus/#focus-handler}
     */
    focus(handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "focus" JavaScript event
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/focus/#focus-eventData-handler}
     */
    focus(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Trigger the "focusin" event on an element.
     * @see {@link https://api.jquery.com/focusin/#focusin}
     */
    focusin(): JQuery;
    /**
     * Bind an event handler to the "focusin" JavaScript event
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/focusin/#focusin-handler}
     */
    focusin(handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "focusin" JavaScript event
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/focusin/#focusin-eventData-handler}
     */
    focusin(eventData: Object, handler: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Trigger the "focusout" event on an element.
     * @see {@link https://api.jquery.com/focusout/#focusout}
     */
    focusout(): JQuery;
    /**
     * Bind an event handler to the "focusout" JavaScript event
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/focusout/#focusout-handler}
     */
    focusout(handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "focusout" JavaScript event
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/focusout/#focusout-eventData-handler}
     */
    focusout(eventData: Object, handler: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Bind two handlers to the matched elements, to be executed when the mouse pointer enters and leaves the elements.
     *
     * @param handlerIn A function to execute when the mouse pointer enters the element.
     * @param handlerOut A function to execute when the mouse pointer leaves the element.
     * @see {@link https://api.jquery.com/hover/#hover-handlerIn-handlerOut}
     */
    hover(handlerIn: (eventObject: JQueryEventObject) => any, handlerOut: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Bind a single handler to the matched elements, to be executed when the mouse pointer enters or leaves the elements.
     *
     * @param handlerInOut A function to execute when the mouse pointer enters or leaves the element.
     * @see {@link https://api.jquery.com/hover/#hover-handlerInOut}
     */
    hover(handlerInOut: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Trigger the "keydown" event on an element.
     * @see {@link https://api.jquery.com/keydown/#keydown}
     */
    keydown(): JQuery;
    /**
     * Bind an event handler to the "keydown" JavaScript event
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/keydown/#keydown-handler}
     */
    keydown(handler: (eventObject: JQueryKeyEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "keydown" JavaScript event
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/keydown/#keydown-eventData-handler}
     */
    keydown(eventData?: any, handler?: (eventObject: JQueryKeyEventObject) => any): JQuery;

    /**
     * Trigger the "keypress" event on an element.
     * @see {@link https://api.jquery.com/keypress/#keypress}
     */
    keypress(): JQuery;
    /**
     * Bind an event handler to the "keypress" JavaScript event
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/keypress/#keypress-handler}
     */
    keypress(handler: (eventObject: JQueryKeyEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "keypress" JavaScript event
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/keypress/#keypress-eventData-handler}
     */
    keypress(eventData?: any, handler?: (eventObject: JQueryKeyEventObject) => any): JQuery;

    /**
     * Trigger the "keyup" event on an element.
     * @see {@link https://api.jquery.com/keyup/#keyup}
     */
    keyup(): JQuery;
    /**
     * Bind an event handler to the "keyup" JavaScript event
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/keyup/#keyup-handler}
     */
    keyup(handler: (eventObject: JQueryKeyEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "keyup" JavaScript event
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/keyup/#keyup-eventData-handler}
     */
    keyup(eventData?: any, handler?: (eventObject: JQueryKeyEventObject) => any): JQuery;

    /**
     * Bind an event handler to the "load" JavaScript event.
     *
     * @param handler A function to execute when the event is triggered.
     * @see {@link https://api.jquery.com/load/}
     */
    load(handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "load" JavaScript event.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute when the event is triggered.
     * @see {@link https://api.jquery.com/load/}
     */
    load(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Trigger the "mousedown" event on an element.
     * @see {@link https://api.jquery.com/mousedown/#mousedown}
     */
    mousedown(): JQuery;
    /**
     * Bind an event handler to the "mousedown" JavaScript event.
     *
     * @param handler A function to execute when the event is triggered.
     * @see {@link https://api.jquery.com/mousedown/#mousedown-handler}
     */
    mousedown(handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "mousedown" JavaScript event.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute when the event is triggered.
     * @see {@link https://api.jquery.com/mousedown/#mousedown-eventData-handler}
     */
    mousedown(eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any): JQuery;

    /**
     * Trigger the "mouseenter" event on an element.
     * @see {@link https://api.jquery.com/mouseenter/#mouseenter}
     */
    mouseenter(): JQuery;
    /**
     * Bind an event handler to be fired when the mouse enters an element.
     *
     * @param handler A function to execute when the event is triggered.
     * @see {@link https://api.jquery.com/mouseenter/#mouseenter-handler}
     */
    mouseenter(handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
    /**
     * Bind an event handler to be fired when the mouse enters an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute when the event is triggered.
     * @see {@link https://api.jquery.com/mouseenter/#mouseenter-eventData-handler}
     */
    mouseenter(eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any): JQuery;

    /**
     * Trigger the "mouseleave" event on an element.
     * @see {@link https://api.jquery.com/mouseleave/#mouseleave}
     */
    mouseleave(): JQuery;
    /**
     * Bind an event handler to be fired when the mouse leaves an element.
     *
     * @param handler A function to execute when the event is triggered.
     * @see {@link https://api.jquery.com/mouseleave/#mouseleave-handler}
     */
    mouseleave(handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
    /**
     * Bind an event handler to be fired when the mouse leaves an element.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute when the event is triggered.
     * @see {@link https://api.jquery.com/mouseleave/#mouseleave-eventData-handler}
     */
    mouseleave(eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any): JQuery;

    /**
     * Trigger the "mousemove" event on an element.
     * @see {@link https://api.jquery.com/mousemove/#mousemove}
     */
    mousemove(): JQuery;
    /**
     * Bind an event handler to the "mousemove" JavaScript event.
     *
     * @param handler A function to execute when the event is triggered.
     * @see {@link https://api.jquery.com/mousemove/#mousemove-handler}
     */
    mousemove(handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "mousemove" JavaScript event.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute when the event is triggered.
     * @see {@link https://api.jquery.com/mousemove/#mousemove-eventData-handler}
     */
    mousemove(eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any): JQuery;

    /**
     * Trigger the "mouseout" event on an element.
     * @see {@link https://api.jquery.com/mouseout/#mouseout}
     */
    mouseout(): JQuery;
    /**
     * Bind an event handler to the "mouseout" JavaScript event.
     *
     * @param handler A function to execute when the event is triggered.
     * @see {@link https://api.jquery.com/mouseout/#mouseout-handler}
     */
    mouseout(handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "mouseout" JavaScript event.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute when the event is triggered.
     * @see {@link https://api.jquery.com/mouseout/#mouseout-eventData-handler}
     */
    mouseout(eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any): JQuery;

    /**
     * Trigger the "mouseover" event on an element.
     * @see {@link https://api.jquery.com/mouseover/#mouseover}
     */
    mouseover(): JQuery;
    /**
     * Bind an event handler to the "mouseover" JavaScript event.
     *
     * @param handler A function to execute when the event is triggered.
     * @see {@link https://api.jquery.com/mouseover/#mouseover-handler}
     */
    mouseover(handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "mouseover" JavaScript event.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute when the event is triggered.
     * @see {@link https://api.jquery.com/mouseover/#mouseover-eventData-handler}
     */
    mouseover(eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any): JQuery;

    /**
     * Trigger the "mouseup" event on an element.
     * @see {@link https://api.jquery.com/mouseup/#mouseup}
     */
    mouseup(): JQuery;
    /**
     * Bind an event handler to the "mouseup" JavaScript event.
     *
     * @param handler A function to execute when the event is triggered.
     * @see {@link https://api.jquery.com/mouseup/#mouseup-handler}
     */
    mouseup(handler: (eventObject: JQueryMouseEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "mouseup" JavaScript event.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute when the event is triggered.
     * @see {@link https://api.jquery.com/mouseup/#mouseup-eventData-handler}
     */
    mouseup(eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any): JQuery;

    /**
     * Remove an event handler.
     * @see {@link https://api.jquery.com/off/#off}
     */
    off(): JQuery;
    /**
     * Remove an event handler.
     *
     * @param events One or more space-separated event types and optional namespaces, or just namespaces, such as "click", "keydown.myPlugin", or ".myPlugin".
     * @param selector A selector which should match the one originally passed to .on() when attaching event handlers.
     * @param handler A handler function previously attached for the event(s), or the special value false.
     * @see {@link https://api.jquery.com/off/#off-events-selector-handler}
     */
    off(events: string, selector?: string, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Remove an event handler.
     *
     * @param events One or more space-separated event types and optional namespaces, or just namespaces, such as "click", "keydown.myPlugin", or ".myPlugin".
     * @param handler A handler function previously attached for the event(s), or the special value false. Takes handler with extra args that can be attached with on().
     * @see {@link https://api.jquery.com/off/#off-events-selector-handler}
     */
    off(events: string, handler: (eventObject: JQueryEventObject, ...args: any[]) => any): JQuery;
    /**
     * Remove an event handler.
     *
     * @param events One or more space-separated event types and optional namespaces, or just namespaces, such as "click", "keydown.myPlugin", or ".myPlugin".
     * @param handler A handler function previously attached for the event(s), or the special value false.
     * @see {@link https://api.jquery.com/off/#off-events-selector-handler}
     */
    off(events: string, handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Remove an event handler.
     *
     * @param events An object where the string keys represent one or more space-separated event types and optional namespaces, and the values represent handler functions previously attached for the event(s).
     * @param selector A selector which should match the one originally passed to .on() when attaching event handlers.
     * @see {@link https://api.jquery.com/off/#off-events-selector}
     */
    off(events: { [key: string]: any; }, selector?: string): JQuery;

    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false. Rest parameter args is for optional parameters passed to jQuery.trigger(). Note that the actual parameters on the event handler function must be marked as optional (? syntax).
     * @see {@link https://api.jquery.com/on/#on-events-selector-data-handler}
     */
    on(events: string, handler: (eventObject: JQueryEventObject, ...args: any[]) => any): JQuery;
    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
     * @see {@link https://api.jquery.com/on/#on-events-selector-data-handler}
    */
    on(events: string, data : any, handler: (eventObject: JQueryEventObject, ...args: any[]) => any): JQuery;
    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
     * @see {@link https://api.jquery.com/on/#on-events-selector-data-handler}
     */
    on(events: string, selector: string, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any): JQuery;
    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
     * @see {@link https://api.jquery.com/on/#on-events-selector-data-handler}
     */
    on(events: string, selector: string, data: any, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any): JQuery;
    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param events An object in which the string keys represent one or more space-separated event types and optional namespaces, and the values represent a handler function to be called for the event(s).
     * @param selector A selector string to filter the descendants of the selected elements that will call the handler. If the selector is null or omitted, the handler is always called when it reaches the selected element.
     * @param data Data to be passed to the handler in event.data when an event occurs.
     * @see {@link https://api.jquery.com/on/#on-events-selector-data}
     */
    on(events: { [key: string]: any; }, selector?: string, data?: any): JQuery;
    /**
     * Attach an event handler function for one or more events to the selected elements.
     *
     * @param events An object in which the string keys represent one or more space-separated event types and optional namespaces, and the values represent a handler function to be called for the event(s).
     * @param data Data to be passed to the handler in event.data when an event occurs.
     * @see {@link https://api.jquery.com/on/#on-events-selector-data}
     */
    on(events: { [key: string]: any; }, data?: any): JQuery;

    /**
     * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
     *
     * @param events A string containing one or more JavaScript event types, such as "click" or "submit," or custom event names.
     * @param handler A function to execute at the time the event is triggered.
     * @see {@link https://api.jquery.com/one/#one-events-data-handler}
     */
    one(events: string, handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
     *
     * @param events A string containing one or more JavaScript event types, such as "click" or "submit," or custom event names.
     * @param data An object containing data that will be passed to the event handler.
     * @param handler A function to execute at the time the event is triggered.
     * @see {@link https://api.jquery.com/one/#one-events-data-handler}
     */
    one(events: string, data: Object, handler: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
     * @see {@link https://api.jquery.com/one/#one-events-selector-data-handler}
     */
    one(events: string, selector: string, handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
     *
     * @param events One or more space-separated event types and optional namespaces, such as "click" or "keydown.myPlugin".
     * @param selector A selector string to filter the descendants of the selected elements that trigger the event. If the selector is null or omitted, the event is always triggered when it reaches the selected element.
     * @param data Data to be passed to the handler in event.data when an event is triggered.
     * @param handler A function to execute when the event is triggered. The value false is also allowed as a shorthand for a function that simply does return false.
     * @see {@link https://api.jquery.com/one/#one-events-selector-data-handler}
     */
    one(events: string, selector: string, data: any, handler: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
     *
     * @param events An object in which the string keys represent one or more space-separated event types and optional namespaces, and the values represent a handler function to be called for the event(s).
     * @param selector A selector string to filter the descendants of the selected elements that will call the handler. If the selector is null or omitted, the handler is always called when it reaches the selected element.
     * @param data Data to be passed to the handler in event.data when an event occurs.
     * @see {@link https://api.jquery.com/one/#one-events-selector-data}
     */
    one(events: { [key: string]: any; }, selector?: string, data?: any): JQuery;

    /**
     * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
     *
     * @param events An object in which the string keys represent one or more space-separated event types and optional namespaces, and the values represent a handler function to be called for the event(s).
     * @param data Data to be passed to the handler in event.data when an event occurs.
     * @see {@link https://api.jquery.com/one/#one-events-selector-data}
     */
    one(events: { [key: string]: any; }, data?: any): JQuery;


    /**
     * Specify a function to execute when the DOM is fully loaded.
     *
     * @param handler A function to execute after the DOM is ready.
     * @see {@link https://api.jquery.com/ready/}
     */
    ready(handler: (jQueryAlias?: JQueryStatic) => any): JQuery;

    /**
     * Trigger the "resize" event on an element.
     * @see {@link https://api.jquery.com/resize/#resize}
     */
    resize(): JQuery;
    /**
     * Bind an event handler to the "resize" JavaScript event.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/resize/#resize-handler}
     */
    resize(handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "resize" JavaScript event.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/resize/#resize-eventData-handler}
     */
    resize(eventData: Object, handler: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Trigger the "scroll" event on an element.
     * @see {@link https://api.jquery.com/scroll/#scroll}
     */
    scroll(): JQuery;
    /**
     * Bind an event handler to the "scroll" JavaScript event.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/scroll/#scroll-handler}
     */
    scroll(handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "scroll" JavaScript event.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/scroll/#scroll-eventData-handler}
     */
    scroll(eventData: Object, handler: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Trigger the "select" event on an element.
     * @see {@link https://api.jquery.com/select/#select}
     */
    select(): JQuery;
    /**
     * Bind an event handler to the "select" JavaScript event.
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/select/#select-handler}
     */
    select(handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "select" JavaScript event.
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/select/#select-eventData-handler}
     */
    select(eventData: Object, handler: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Trigger the "submit" event on an element.
     * @see {@link https://api.jquery.com/submit/#submit}
     */
    submit(): JQuery;
    /**
     * Bind an event handler to the "submit" JavaScript event
     *
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/submit/#submit-handler}
     */
    submit(handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "submit" JavaScript event
     *
     * @param eventData An object containing data that will be passed to the event handler.
     * @param handler A function to execute each time the event is triggered.
     * @see {@link https://api.jquery.com/submit/#submit-eventData-handler}
     */
    submit(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Execute all handlers and behaviors attached to the matched elements for the given event type.
     *
     * @param eventType A string containing a JavaScript event type, such as click or submit.
     * @param extraParameters Additional parameters to pass along to the event handler.
     * @see {@link https://api.jquery.com/trigger/#trigger-eventType-extraParameters}
     */
    trigger(eventType: string, extraParameters?: any[]|Object): JQuery;
    /**
     * Execute all handlers and behaviors attached to the matched elements for the given event type.
     *
     * @param event A jQuery.Event object.
     * @param extraParameters Additional parameters to pass along to the event handler.
     * @see {@link https://api.jquery.com/trigger/#trigger-event-extraParameters}
     */
    trigger(event: JQueryEventObject, extraParameters?: any[]|Object): JQuery;

    /**
     * Execute all handlers attached to an element for an event.
     *
     * @param eventType A string containing a JavaScript event type, such as click or submit.
     * @param extraParameters An array of additional parameters to pass along to the event handler.
     * @see {@link https://api.jquery.com/triggerHandler/#triggerHandler-eventType-extraParameters}
     */
    triggerHandler(eventType: string, ...extraParameters: any[]): Object;

    /**
     * Execute all handlers attached to an element for an event.
     *
     * @param event A jQuery.Event object.
     * @param extraParameters An array of additional parameters to pass along to the event handler.
     * @see {@link https://api.jquery.com/triggerHandler/#triggerHandler-event-extraParameters}
     */
    triggerHandler(event: JQueryEventObject, ...extraParameters: any[]): Object;

    /**
     * Remove a previously-attached event handler from the elements.
     *
     * @param eventType A string containing a JavaScript event type, such as click or submit.
     * @param handler The function that is to be no longer executed.
     * @see {@link https://api.jquery.com/unbind/#unbind-eventType-handler}
     */
    unbind(eventType?: string, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Remove a previously-attached event handler from the elements.
     *
     * @param eventType A string containing a JavaScript event type, such as click or submit.
     * @param fls Unbinds the corresponding 'return false' function that was bound using .bind( eventType, false ).
     * @see {@link https://api.jquery.com/unbind/#unbind-eventType-false}
     */
    unbind(eventType: string, fls: boolean): JQuery;
    /**
     * Remove a previously-attached event handler from the elements.
     *
     * @param evt A JavaScript event object as passed to an event handler.
     * @see {@link https://api.jquery.com/unbind/#unbind-event}
     */
    unbind(evt: any): JQuery;

    /**
     * Remove a handler from the event for all elements which match the current selector, based upon a specific set of root elements.
     * @see {@link https://api.jquery.com/undelegate/#undelegate}
     */
    undelegate(): JQuery;
    /**
     * Remove a handler from the event for all elements which match the current selector, based upon a specific set of root elements.
     *
     * @param selector A selector which will be used to filter the event results.
     * @param eventType A string containing a JavaScript event type, such as "click" or "keydown"
     * @param handler A function to execute at the time the event is triggered.
     * @see {@link https://api.jquery.com/undelegate/#undelegate-selector-eventType}
     */
    undelegate(selector: string, eventType: string, handler?: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Remove a handler from the event for all elements which match the current selector, based upon a specific set of root elements.
     *
     * @param selector A selector which will be used to filter the event results.
     * @param events An object of one or more event types and previously bound functions to unbind from them.
     * @see {@link https://api.jquery.com/undelegate/#undelegate-selector-events}
     */
    undelegate(selector: string, events: Object): JQuery;
    /**
     * Remove a handler from the event for all elements which match the current selector, based upon a specific set of root elements.
     *
     * @param namespace A string containing a namespace to unbind all events from.
     * @see {@link https://api.jquery.com/undelegate/#undelegate-namespace}
     */
    undelegate(namespace: string): JQuery;

    /**
     * Bind an event handler to the "unload" JavaScript event. (DEPRECATED from v1.8)
     *
     * @param handler A function to execute when the event is triggered.
     * @see {@link https://api.jquery.com/unload/#unload-handler}
     */
    unload(handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "unload" JavaScript event. (DEPRECATED from v1.8)
     *
     * @param eventData A plain object of data that will be passed to the event handler.
     * @param handler A function to execute when the event is triggered.
     * @see {@link https://api.jquery.com/unload/#unload-eventData-handler}
     */
    unload(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * The DOM node context originally passed to jQuery(); if none was passed then context will likely be the document. (DEPRECATED from v1.10)
     * @see {@link https://api.jquery.com/context/}
     */
    context: Element;

    jquery: string;

    /**
     * Bind an event handler to the "error" JavaScript event. (DEPRECATED from v1.8)
     *
     * @param handler A function to execute when the event is triggered.
     * @see {@link https://api.jquery.com/error/#error-handler}
     */
    error(handler: (eventObject: JQueryEventObject) => any): JQuery;
    /**
     * Bind an event handler to the "error" JavaScript event. (DEPRECATED from v1.8)
     *
     * @param eventData A plain object of data that will be passed to the event handler.
     * @param handler A function to execute when the event is triggered.
     * @see {@link https://api.jquery.com/error/#error-eventData-handler}
     */
    error(eventData: any, handler: (eventObject: JQueryEventObject) => any): JQuery;

    /**
     * Add a collection of DOM elements onto the jQuery stack.
     *
     * @param elements An array of elements to push onto the stack and make into a new jQuery object.
     * @see {@link https://api.jquery.com/pushStack/#pushStack-elements}
     */
    pushStack(elements: any[]): JQuery;
    /**
     * Add a collection of DOM elements onto the jQuery stack.
     *
     * @param elements An array of elements to push onto the stack and make into a new jQuery object.
     * @param name The name of a jQuery method that generated the array of elements.
     * @param arguments The arguments that were passed in to the jQuery method (for serialization).
     * @see {@link https://api.jquery.com/pushStack/#pushStack-elements-name-arguments}
     */
    pushStack(elements: any[], name: string, arguments: any[]): JQuery;

    /**
     * Insert content, specified by the parameter, after each element in the set of matched elements.
     *
     * @param content1 HTML string, DOM element, DocumentFragment, array of elements, or jQuery object to insert after each element in the set of matched elements.
     * @param content2 One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert after each element in the set of matched elements.
     * @see {@link https://api.jquery.com/after/#after-content-content}
     */
    after(content1: JQuery|any[]|Element|DocumentFragment|Text|string, ...content2: any[]): JQuery;
    /**
     * Insert content, specified by the parameter, after each element in the set of matched elements.
     *
     * @param func A function that returns an HTML string, DOM element(s), or jQuery object to insert after each element in the set of matched elements. Receives the index position of the element in the set as an argument. Within the function, this refers to the current element in the set.
     * @see {@link https://api.jquery.com/after/#after-function}
     */
    after(func: (index: number, html: string) => string|Element|JQuery): JQuery;

    /**
     * Insert content, specified by the parameter, to the end of each element in the set of matched elements.
     *
     * @param content1 DOM element, DocumentFragment, array of elements, HTML string, or jQuery object to insert at the end of each element in the set of matched elements.
     * @param content2 One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert at the end of each element in the set of matched elements.
     * @see {@link https://api.jquery.com/append/#append-content-content}
     */
    append(content1: JQuery|any[]|Element|DocumentFragment|Text|string, ...content2: any[]): JQuery;
    /**
     * Insert content, specified by the parameter, to the end of each element in the set of matched elements.
     *
     * @param func A function that returns an HTML string, DOM element(s), or jQuery object to insert at the end of each element in the set of matched elements. Receives the index position of the element in the set and the old HTML value of the element as arguments. Within the function, this refers to the current element in the set.
     * @see {@link https://api.jquery.com/append/#append-function}
     */
    append(func: (index: number, html: string) => string|Element|JQuery): JQuery;

    /**
     * Insert every element in the set of matched elements to the end of the target.
     *
     * @param target A selector, element, HTML string, array of elements, or jQuery object; the matched set of elements will be inserted at the end of the element(s) specified by this parameter.
     * @see {@link https://api.jquery.com/appendTo/}
     */
    appendTo(target: JQuery|any[]|Element|string): JQuery;

    /**
     * Insert content, specified by the parameter, before each element in the set of matched elements.
     *
     * @param content1 HTML string, DOM element, DocumentFragment, array of elements, or jQuery object to insert before each element in the set of matched elements.
     * @param content2 One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert before each element in the set of matched elements.
     * @see {@link https://api.jquery.com/before/#before-content-content}
     */
    before(content1: JQuery|any[]|Element|DocumentFragment|Text|string, ...content2: any[]): JQuery;
    /**
     * Insert content, specified by the parameter, before each element in the set of matched elements.
     *
     * @param func A function that returns an HTML string, DOM element(s), or jQuery object to insert before each element in the set of matched elements. Receives the index position of the element in the set as an argument. Within the function, this refers to the current element in the set.
     * @see {@link https://api.jquery.com/before/#before-function}
     */
    before(func: (index: number, html: string) => string|Element|JQuery): JQuery;

    /**
     * Create a deep copy of the set of matched elements.
     *
     * @param withDataAndEvents A Boolean indicating whether event handlers and data should be copied along with the elements. The default value is false.
     * @param deepWithDataAndEvents A Boolean indicating whether event handlers and data for all children of the cloned element should be copied. By default its value matches the first argument's value (which defaults to false).
     * @see {@link https://api.jquery.com/clone/}
     */
    clone(withDataAndEvents?: boolean, deepWithDataAndEvents?: boolean): JQuery;

    /**
     * Remove the set of matched elements from the DOM.
     *
     * @param selector A selector expression that filters the set of matched elements to be removed.
     * @see {@link https://api.jquery.com/detach/}
     */
    detach(selector?: string): JQuery;

    /**
     * Remove all child nodes of the set of matched elements from the DOM.
     * @see {@link https://api.jquery.com/empty/}
     */
    empty(): JQuery;

    /**
     * Insert every element in the set of matched elements after the target.
     *
     * @param target A selector, element, array of elements, HTML string, or jQuery object; the matched set of elements will be inserted after the element(s) specified by this parameter.
     * @see {@link https://api.jquery.com/insertAfter/}
     */
    insertAfter(target: JQuery|any[]|Element|Text|string): JQuery;

    /**
     * Insert every element in the set of matched elements before the target.
     *
     * @param target A selector, element, array of elements, HTML string, or jQuery object; the matched set of elements will be inserted before the element(s) specified by this parameter.
     * @see {@link https://api.jquery.com/insertBefore/}
     */
    insertBefore(target: JQuery|any[]|Element|Text|string): JQuery;

    /**
     * Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.
     *
     * @param content1 DOM element, DocumentFragment, array of elements, HTML string, or jQuery object to insert at the beginning of each element in the set of matched elements.
     * @param content2 One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert at the beginning of each element in the set of matched elements.
     * @see {@link https://api.jquery.com/prepend/#prepend-content-content}
     */
    prepend(content1: JQuery|any[]|Element|DocumentFragment|Text|string, ...content2: any[]): JQuery;
    /**
     * Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.
     *
     * @param func A function that returns an HTML string, DOM element(s), or jQuery object to insert at the beginning of each element in the set of matched elements. Receives the index position of the element in the set and the old HTML value of the element as arguments. Within the function, this refers to the current element in the set.
     * @see {@link https://api.jquery.com/prepend/#prepend-function}
     */
    prepend(func: (index: number, html: string) => string|Element|JQuery): JQuery;

    /**
     * Insert every element in the set of matched elements to the beginning of the target.
     *
     * @param target A selector, element, HTML string, array of elements, or jQuery object; the matched set of elements will be inserted at the beginning of the element(s) specified by this parameter.
     * @see {@link https://api.jquery.com/prependTo/}
     */
    prependTo(target: JQuery|any[]|Element|string): JQuery;

    /**
     * Remove the set of matched elements from the DOM.
     *
     * @param selector A selector expression that filters the set of matched elements to be removed.
     * @see {@link https://api.jquery.com/remove/}
     */
    remove(selector?: string): JQuery;

    /**
     * Replace each target element with the set of matched elements.
     *
     * @param target A selector string, jQuery object, DOM element, or array of elements indicating which element(s) to replace.
     * @see {@link https://api.jquery.com/replaceAll/}
     */
    replaceAll(target: JQuery|any[]|Element|string): JQuery;

    /**
     * Replace each element in the set of matched elements with the provided new content and return the set of elements that was removed.
     *
     * @param newContent The content to insert. May be an HTML string, DOM element, array of DOM elements, or jQuery object.
     * @see {@link https://api.jquery.com/replaceWith/#replaceWith-newContent}
     */
    replaceWith(newContent: JQuery|any[]|Element|Text|string): JQuery;
    /**
     * Replace each element in the set of matched elements with the provided new content and return the set of elements that was removed.
     *
     * @param func A function that returns content with which to replace the set of matched elements.
     * @see {@link https://api.jquery.com/replaceWith/#replaceWith-function}
     */
    replaceWith(func: () => Element|JQuery): JQuery;

    /**
     * Get the combined text contents of each element in the set of matched elements, including their descendants.
     * @see {@link https://api.jquery.com/text/#text}
     */
    text(): string;
    /**
     * Set the content of each element in the set of matched elements to the specified text.
     *
     * @param text The text to set as the content of each matched element. When Number or Boolean is supplied, it will be converted to a String representation.
     * @see {@link https://api.jquery.com/text/#text-text}
     */
    text(text: string|number|boolean): JQuery;
    /**
     * Set the content of each element in the set of matched elements to the specified text.
     *
     * @param func A function returning the text content to set. Receives the index position of the element in the set and the old text value as arguments.
     * @see {@link https://api.jquery.com/text/#text-function}
     */
    text(func: (index: number, text: string) => string): JQuery;

    /**
     * Retrieve all the elements contained in the jQuery set, as an array.
     * @name toArray
     * @see {@link https://api.jquery.com/toArray/}
     */
    toArray(): HTMLElement[];

    /**
     * Remove the parents of the set of matched elements from the DOM, leaving the matched elements in their place.
     * @see {@link https://api.jquery.com/unwrap/}
     */
    unwrap(): JQuery;

    /**
     * Wrap an HTML structure around each element in the set of matched elements.
     *
     * @param wrappingElement A selector, element, HTML string, or jQuery object specifying the structure to wrap around the matched elements.
     * @see {@link https://api.jquery.com/wrap/#wrap-wrappingElement}
     */
    wrap(wrappingElement: JQuery|Element|string): JQuery;
    /**
     * Wrap an HTML structure around each element in the set of matched elements.
     *
     * @param func A callback function returning the HTML content or jQuery object to wrap around the matched elements. Receives the index position of the element in the set as an argument. Within the function, this refers to the current element in the set.
     * @see {@link https://api.jquery.com/wrap/#wrap-function}
     */
    wrap(func: (index: number) => string|JQuery): JQuery;

    /**
     * Wrap an HTML structure around all elements in the set of matched elements.
     *
     * @param wrappingElement A selector, element, HTML string, or jQuery object specifying the structure to wrap around the matched elements.
     * @see {@link https://api.jquery.com/wrapAll/#wrapAll-wrappingElement}
     */
    wrapAll(wrappingElement: JQuery|Element|string): JQuery;
    /**
     * Wrap an HTML structure around all elements in the set of matched elements.
     *
     * @param func A callback function returning the HTML content or jQuery object to wrap around all the matched elements. Within the function, this refers to the first element in the set.
     * @see {@link https://api.jquery.com/wrapAll/#wrapAll-function}
     */
    wrapAll(func: (index: number) => string): JQuery;

    /**
     * Wrap an HTML structure around the content of each element in the set of matched elements.
     *
     * @param wrappingElement An HTML snippet, selector expression, jQuery object, or DOM element specifying the structure to wrap around the content of the matched elements.
     * @see {@link https://api.jquery.com/wrapInner/#wrapInner-wrappingElement}
     */
    wrapInner(wrappingElement: JQuery|Element|string): JQuery;
    /**
     * Wrap an HTML structure around the content of each element in the set of matched elements.
     *
     * @param func A callback function which generates a structure to wrap around the content of the matched elements. Receives the index position of the element in the set as an argument. Within the function, this refers to the current element in the set.
     * @see {@link https://api.jquery.com/wrapInner/#wrapInner-function}
     */
    wrapInner(func: (index: number) => string): JQuery;

    /**
     * Iterate over a jQuery object, executing a function for each matched element.
     *
     * @param func A function to execute for each matched element.
     * @see {@link https://api.jquery.com/each/}
     */
    each(func: (index: number, elem: Element) => any): JQuery;

    /**
     * Retrieve one of the elements matched by the jQuery object.
     *
     * @param index A zero-based integer indicating which element to retrieve.
     * @see {@link https://api.jquery.com/get/#get-index}
     */
    get(index: number): HTMLElement;
    /**
     * Retrieve the elements matched by the jQuery object.
     * @alias toArray
     * @see {@link https://api.jquery.com/get/#get}
     */
    get(): HTMLElement[];

    /**
     * Search for a given element from among the matched elements.
     * @see {@link https://api.jquery.com/index/#index}
     */
    index(): number;
    /**
     * Search for a given element from among the matched elements.
     *
     * @param selector A selector representing a jQuery collection in which to look for an element.
     * @see {@link https://api.jquery.com/index/#index-selector}
     */
    index(selector: string|JQuery|Element): number;

    /**
     * The number of elements in the jQuery object.
     * @see {@link https://api.jquery.com/length/}
     */
    length: number;
    /**
     * A selector representing selector passed to jQuery(), if any, when creating the original set.
     * version deprecated: 1.7, removed: 1.9
     * @see {@link https://api.jquery.com/selector/}
     */
    selector: string;
    [index: string]: any;
    [index: number]: HTMLElement;

    /**
     * Add elements to the set of matched elements.
     *
     * @param selector A string representing a selector expression to find additional elements to add to the set of matched elements.
     * @param context The point in the document at which the selector should begin matching; similar to the context argument of the $(selector, context) method.
     * @see {@link https://api.jquery.com/add/#add-selector}
     */
    add(selector: string, context?: Element): JQuery;
    /**
     * Add elements to the set of matched elements.
     *
     * @param elements One or more elements to add to the set of matched elements.
     * @see {@link https://api.jquery.com/add/#add-elements}
     */
    add(...elements: Element[]): JQuery;
    /**
     * Add elements to the set of matched elements.
     *
     * @param html An HTML fragment to add to the set of matched elements.
     * @see {@link https://api.jquery.com/add/#add-html}
     */
    add(html: string): JQuery;
    /**
     * Add elements to the set of matched elements.
     *
     * @param obj An existing jQuery object to add to the set of matched elements.
     * @see {@link https://api.jquery.com/add/#add-selection}
     */
    add(obj: JQuery): JQuery;

    /**
     * Get the children of each element in the set of matched elements, optionally filtered by a selector.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @see {@link https://api.jquery.com/children/}
     */
    children(selector?: string): JQuery;

    /**
     * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @see {@link https://api.jquery.com/closest/#closest-selector}
     */
    closest(selector: string): JQuery;
    /**
     * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @param context A DOM element within which a matching element may be found. If no context is passed in then the context of the jQuery set will be used instead.
     * @see {@link https://api.jquery.com/closest/#closest-selector-context}
     */
    closest(selector: string, context?: Element): JQuery;
    /**
     * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
     *
     * @param obj A jQuery object to match elements against.
     * @see {@link https://api.jquery.com/closest/#closest-selection}
     */
    closest(obj: JQuery): JQuery;
    /**
     * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
     *
     * @param element An element to match elements against.
     * @see {@link https://api.jquery.com/closest/#closest-element}
     */
    closest(element: Element): JQuery;

    /**
     * Get an array of all the elements and selectors matched against the current element up through the DOM tree.
     *
     * @param selectors An array or string containing a selector expression to match elements against (can also be a jQuery object).
     * @param context A DOM element within which a matching element may be found. If no context is passed in then the context of the jQuery set will be used instead.
     * @see {@link https://api.jquery.com/closest/#closest-selectors-context}
     */
    closest(selectors: any, context?: Element): any[];

    /**
     * Get the children of each element in the set of matched elements, including text and comment nodes.
     * @see {@link https://api.jquery.com/contents/}
     */
    contents(): JQuery;

    /**
     * End the most recent filtering operation in the current chain and return the set of matched elements to its previous state.
     * @see {@link https://api.jquery.com/end/}
     */
    end(): JQuery;

    /**
     * Reduce the set of matched elements to the one at the specified index.
     *
     * @param index An integer indicating the 0-based position of the element. OR An integer indicating the position of the element, counting backwards from the last element in the set.
     * @see {@link https://api.jquery.com/eq/}
     */
    eq(index: number): JQuery;

    /**
     * Reduce the set of matched elements to those that match the selector or pass the function's test.
     *
     * @param selector A string containing a selector expression to match the current set of elements against.
     * @see {@link https://api.jquery.com/filter/#filter-selector}
     */
    filter(selector: string): JQuery;
    /**
     * Reduce the set of matched elements to those that match the selector or pass the function's test.
     *
     * @param func A function used as a test for each element in the set. this is the current DOM element.
     * @see {@link https://api.jquery.com/filter/#filter-function}
     */
    filter(func: (index: number, element: Element) => any): JQuery;
    /**
     * Reduce the set of matched elements to those that match the selector or pass the function's test.
     *
     * @param element An element to match the current set of elements against.
     * @see {@link https://api.jquery.com/filter/#filter-elements}
     */
    filter(element: Element): JQuery;
    /**
     * Reduce the set of matched elements to those that match the selector or pass the function's test.
     *
     * @param obj An existing jQuery object to match the current set of elements against.
     * @see {@link https://api.jquery.com/filter/#filter-selection}
     */
    filter(obj: JQuery): JQuery;

    /**
     * Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @see {@link https://api.jquery.com/find/#find-selector}
     */
    find(selector: string): JQuery;
    /**
     * Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.
     *
     * @param element An element to match elements against.
     * @see {@link https://api.jquery.com/find/#find-element}
     */
    find(element: Element): JQuery;
    /**
     * Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.
     *
     * @param obj A jQuery object to match elements against.
     * @see {@link https://api.jquery.com/find/#find-element}
     */
    find(obj: JQuery): JQuery;

    /**
     * Reduce the set of matched elements to the first in the set.
     * @see {@link https://api.jquery.com/first/}
     */
    first(): JQuery;

    /**
     * Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @see {@link https://api.jquery.com/has/#has-selector}
     */
    has(selector: string): JQuery;
    /**
     * Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element.
     *
     * @param contained A DOM element to match elements against.
     * @see {@link https://api.jquery.com/has/#has-contained}
     */
    has(contained: Element): JQuery;

    /**
     * Check the current matched set of elements against a selector, element, or jQuery object and return true if at least one of these elements matches the given arguments.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @see {@link https://api.jquery.com/is/#is-selector}
     */
    is(selector: string): boolean;
    /**
     * Check the current matched set of elements against a selector, element, or jQuery object and return true if at least one of these elements matches the given arguments.
     *
     * @param func A function used as a test for the set of elements. It accepts one argument, index, which is the element's index in the jQuery collection.Within the function, this refers to the current DOM element.
     * @see {@link https://api.jquery.com/is/#is-function}
     */
    is(func: (index: number, element: Element) => boolean): boolean;
    /**
     * Check the current matched set of elements against a selector, element, or jQuery object and return true if at least one of these elements matches the given arguments.
     *
     * @param obj An existing jQuery object to match the current set of elements against.
     * @see {@link https://api.jquery.com/is/#is-selection}
     */
    is(obj: JQuery): boolean;
    /**
     * Check the current matched set of elements against a selector, element, or jQuery object and return true if at least one of these elements matches the given arguments.
     *
     * @param elements One or more elements to match the current set of elements against.
     * @see {@link https://api.jquery.com/is/#is-elements}
     */
    is(elements: any): boolean;

    /**
     * Reduce the set of matched elements to the final one in the set.
     * @see {@link https://api.jquery.com/last/}
     */
    last(): JQuery;

    /**
     * Pass each element in the current matched set through a function, producing a new jQuery object containing the return values.
     *
     * @param callback A function object that will be invoked for each element in the current set.
     * @see {@link https://api.jquery.com/map/}
     */
    map(callback: (index: number, domElement: Element) => any): JQuery;

    /**
     * Get the immediately following sibling of each element in the set of matched elements. If a selector is provided, it retrieves the next sibling only if it matches that selector.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @see {@link https://api.jquery.com/next/}
     */
    next(selector?: string): JQuery;

    /**
     * Get all following siblings of each element in the set of matched elements, optionally filtered by a selector.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @see {@link https://api.jquery.com/nextAll/}
     */
    nextAll(selector?: string): JQuery;

    /**
     * Get all following siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object passed.
     *
     * @param selector A string containing a selector expression to indicate where to stop matching following sibling elements.
     * @param filter A string containing a selector expression to match elements against.
     * @see {@link https://api.jquery.com/nextUntil/#nextUntil-selector-filter}
     */
    nextUntil(selector?: string, filter?: string): JQuery;
    /**
     * Get all following siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object passed.
     *
     * @param element A DOM node or jQuery object indicating where to stop matching following sibling elements.
     * @param filter A string containing a selector expression to match elements against.
     * @see {@link https://api.jquery.com/nextUntil/#nextUntil-element-filter}
     */
    nextUntil(element?: Element, filter?: string): JQuery;
    /**
     * Get all following siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object passed.
     *
     * @param obj A DOM node or jQuery object indicating where to stop matching following sibling elements.
     * @param filter A string containing a selector expression to match elements against.
     * @see {@link https://api.jquery.com/nextUntil/#nextUntil-element-filter}
     */
    nextUntil(obj?: JQuery, filter?: string): JQuery;

    /**
     * Remove elements from the set of matched elements.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @see {@link https://api.jquery.com/not/#not-selector}
     */
    not(selector: string): JQuery;
    /**
     * Remove elements from the set of matched elements.
     *
     * @param func A function used as a test for each element in the set. this is the current DOM element.
     * @see {@link https://api.jquery.com/not/#not-function}
     */
    not(func: (index: number, element: Element) => boolean): JQuery;
    /**
     * Remove elements from the set of matched elements.
     *
     * @param elements One or more DOM elements to remove from the matched set.
     * @see {@link https://api.jquery.com/not/#not-selection}
     */
    not(elements: Element|Element[]): JQuery;
    /**
     * Remove elements from the set of matched elements.
     *
     * @param obj An existing jQuery object to match the current set of elements against.
     * @see {@link https://api.jquery.com/not/#not-selection}
     */
    not(obj: JQuery): JQuery;

    /**
     * Get the closest ancestor element that is positioned.
     * @see {@link https://api.jquery.com/offsetParent/}
     */
    offsetParent(): JQuery;

    /**
     * Get the parent of each element in the current set of matched elements, optionally filtered by a selector.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @see {@link https://api.jquery.com/parent/}
     */
    parent(selector?: string): JQuery;

    /**
     * Get the ancestors of each element in the current set of matched elements, optionally filtered by a selector.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @see {@link https://api.jquery.com/parents/}
     */
    parents(selector?: string): JQuery;

    /**
     * Get the ancestors of each element in the current set of matched elements, up to but not including the element matched by the selector, DOM node, or jQuery object.
     *
     * @param selector A string containing a selector expression to indicate where to stop matching ancestor elements.
     * @param filter A string containing a selector expression to match elements against.
     * @see {@link https://api.jquery.com/parentsUntil/#parentsUntil-selector-filter}
     */
    parentsUntil(selector?: string, filter?: string): JQuery;
    /**
     * Get the ancestors of each element in the current set of matched elements, up to but not including the element matched by the selector, DOM node, or jQuery object.
     *
     * @param element A DOM node or jQuery object indicating where to stop matching ancestor elements.
     * @param filter A string containing a selector expression to match elements against.
     * @see {@link https://api.jquery.com/parentsUntil/#parentsUntil-element-filter}
     */
    parentsUntil(element?: Element, filter?: string): JQuery;
    /**
     * Get the ancestors of each element in the current set of matched elements, up to but not including the element matched by the selector, DOM node, or jQuery object.
     *
     * @param obj A DOM node or jQuery object indicating where to stop matching ancestor elements.
     * @param filter A string containing a selector expression to match elements against.
     * @see {@link https://api.jquery.com/parentsUntil/#parentsUntil-element-filter}
     */
    parentsUntil(obj?: JQuery, filter?: string): JQuery;

    /**
     * Get the immediately preceding sibling of each element in the set of matched elements, optionally filtered by a selector.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @see {@link https://api.jquery.com/prev/}
     */
    prev(selector?: string): JQuery;

    /**
     * Get all preceding siblings of each element in the set of matched elements, optionally filtered by a selector.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @see {@link https://api.jquery.com/prevAll/}
     */
    prevAll(selector?: string): JQuery;

    /**
     * Get all preceding siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object.
     *
     * @param selector A string containing a selector expression to indicate where to stop matching preceding sibling elements.
     * @param filter A string containing a selector expression to match elements against.
     * @see {@link https://api.jquery.com/prevUntil/#prevUntil-selector-filter}
     */
    prevUntil(selector?: string, filter?: string): JQuery;
    /**
     * Get all preceding siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object.
     *
     * @param element A DOM node or jQuery object indicating where to stop matching preceding sibling elements.
     * @param filter A string containing a selector expression to match elements against.
     * @see {@link https://api.jquery.com/prevUntil/#prevUntil-element-filter}
     */
    prevUntil(element?: Element, filter?: string): JQuery;
    /**
     * Get all preceding siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object.
     *
     * @param obj A DOM node or jQuery object indicating where to stop matching preceding sibling elements.
     * @param filter A string containing a selector expression to match elements against.
     * @see {@link https://api.jquery.com/prevUntil/#prevUntil-element-filter}
     */
    prevUntil(obj?: JQuery, filter?: string): JQuery;

    /**
     * Get the siblings of each element in the set of matched elements, optionally filtered by a selector.
     *
     * @param selector A string containing a selector expression to match elements against.
     * @see {@link https://api.jquery.com/siblings/}
     */
    siblings(selector?: string): JQuery;

    /**
     * Reduce the set of matched elements to a subset specified by a range of indices.
     *
     * @param start An integer indicating the 0-based position at which the elements begin to be selected. If negative, it indicates an offset from the end of the set.
     * @param end An integer indicating the 0-based position at which the elements stop being selected. If negative, it indicates an offset from the end of the set. If omitted, the range continues until the end of the set.
     * @see {@link https://api.jquery.com/slice/}
     */
    slice(start: number, end?: number): JQuery;

    /**
     * Show the queue of functions to be executed on the matched elements.
     *
     * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     * @see {@link https://api.jquery.com/queue/#queue-queueName}
     */
    queue(queueName?: string): any[];
    /**
     * Manipulate the queue of functions to be executed, once for each matched element.
     *
     * @param newQueue An array of functions to replace the current queue contents.
     * @see {@link https://api.jquery.com/queue/#queue-queueName-newQueue}
     */
    queue(newQueue: Function[]): JQuery;
    /**
     * Manipulate the queue of functions to be executed, once for each matched element.
     *
     * @param callback The new function to add to the queue, with a function to call that will dequeue the next item.
     * @see {@link https://api.jquery.com/queue/#queue-queueName-callback}
     */
    queue(callback: Function): JQuery;
    /**
     * Manipulate the queue of functions to be executed, once for each matched element.
     *
     * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     * @param newQueue An array of functions to replace the current queue contents.
     * @see {@link https://api.jquery.com/queue/#queue-queueName-newQueue}
     */
    queue(queueName: string, newQueue: Function[]): JQuery;
    /**
     * Manipulate the queue of functions to be executed, once for each matched element.
     *
     * @param queueName A string containing the name of the queue. Defaults to fx, the standard effects queue.
     * @param callback The new function to add to the queue, with a function to call that will dequeue the next item.
     * @see {@link https://api.jquery.com/queue/#queue-queueName-callback}
     */
    queue(queueName: string, callback: Function): JQuery;
}
declare module "jquery" {
    export = $;
}
declare var jQuery: JQueryStatic;
declare var $: JQueryStatic;
