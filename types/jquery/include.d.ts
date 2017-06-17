/// <reference path="index.d.ts" />

export {};

declare global {
    namespace jQuery {
        type TypeOrArray<T> = JQuery.TypeOrArray<T>;

        type htmlString = JQuery.htmlString;
        type Selector = JQuery.Selector;
        type Thenable<T> = JQuery.Thenable<T>;
        type PlainObject<T = any> = JQuery.PlainObject<T>;

        type AjaxCompleteCallback<TContext> = JQuery.AjaxCompleteCallback<TContext>;
        type AjaxErrorCallback<TContext> = JQuery.AjaxErrorCallback<TContext>;
        type AjaxSuccessCallback<TContext> = JQuery.AjaxSuccessCallback<TContext>;
        // Default context for AjaxSettings is the settings object itself but
        // TContext = AjaxSettings causes the compiler to crash
        type AjaxSettings<TContext = any> = JQuery.AjaxSettings<TContext>;
        type Transport = JQuery.Transport;
        type jqXHR = JQuery.jqXHR;

        type CSSHook = JQuery.CSSHook;

        type Duration = JQuery.Duration;
        type QueueFunction = JQuery.QueueFunction;
        type Queue = JQuery.Queue;
        type EffectsOptions = JQuery.EffectsOptions;
        type Tween = JQuery.Tween;
        type SpeedSettings = JQuery.SpeedSettings;

        // Should this be named something more specific (e.g. DOMEventHandler)?
        type EventHandler<TData = null> = JQuery.EventHandler<TData>;
        type NameValuePair = JQuery.NameValuePair;
        type Coordinates = JQuery.Coordinates;
        type Promise<T> = JQuery.Promise<T>;
        type PromiseCallback<T> = JQuery.PromiseCallback<T>;

        type Mouse = JQuery.Mouse;
        type Key = JQuery.Key;

        type ValHook = JQuery.ValHook;
        type AnimationHook = JQuery.AnimationHook;
    }

    // region Legacy types

    type JQueryAjaxSettings = jQuery.AjaxSettings;
    type JQueryAnimationOptions = jQuery.EffectsOptions;
    type JQueryCoordinates = jQuery.Coordinates;
    type JQueryGenericPromise<T> = jQuery.Thenable<T>;
    type JQueryXHR = jQuery.jqXHR;
    type JQueryPromise<T> = jQuery.Promise<T>;
    type JQuerySerializeArrayElement = jQuery.NameValuePair;
    type JQueryPromiseCallback<T> = jQuery.PromiseCallback<T>;

    // This is never directly referenced in the old type definitions.
    type JQueryPromiseOperator<T, U> = (callback1: jQuery.TypeOrArray<JQueryPromiseCallback<T>>,
                                        ...callbacksN: Array<jQuery.TypeOrArray<JQueryPromiseCallback<any>>>) => JQueryPromise<U>;

    // region Easing

    // $.easing appears to be entirely internal (never referenced in documentation). The following interfaces are related.

    type JQueryEasingFunction = (percent: number) => number;

    interface JQueryEasingFunctions {
        [ name: string ]: JQueryEasingFunction;
        linear: JQueryEasingFunction;
        swing: JQueryEasingFunction;
    }

    // endregion

    // endregion
}

export namespace JQuery {
    type TypeOrArray<T> = T | T[];

    /**
     * A string is designated htmlString in jQuery documentation when it is used to represent one or more
     * DOM elements, typically to be created and inserted in the document. When passed as an argument of
     * the jQuery() function, the string is identified as HTML if it starts with <tag ... >) and is parsed
     * as such until the final > character. Prior to jQuery 1.9, a string was considered to be HTML if it
     * contained <tag ... > anywhere within the string.
     */
    type htmlString = string;
    /**
     * A selector is used in jQuery to select DOM elements from a DOM document. That document is, in most
     * cases, the DOM document present in all browsers, but can also be an XML document received via Ajax.
     */
    type Selector = string;
    /**
     * Any object that has a then method.
     */
    type Thenable<T> = PromiseLike<T>;

    /**
     * The PlainObject type is a JavaScript object containing zero or more key-value pairs. The plain
     * object is, in other words, an Object object. It is designated "plain" in jQuery documentation to
     * distinguish it from other kinds of JavaScript objects: for example, null, user-defined arrays, and
     * host objects such as document, all of which have a typeof value of "object."
     */
    interface PlainObject<T = any> {
        [key: string]: T;
    }

    // region Ajax

    type AjaxCompleteCallback<TContext> = (this: TContext, jqXHR: jQuery.jqXHR, textStatus: 'success' | 'notmodified' | 'nocontent' | 'error' | 'timeout' | 'abort' | 'parsererror') => void;
    type AjaxErrorCallback<TContext> = (this: TContext, jqXHR: jQuery.jqXHR, textStatus: 'timeout' | 'error' | 'abort' | 'parsererror' | null, errorThrown: string) => void;
    type AjaxSuccessCallback<TContext> = (this: TContext, data: any, textStatus: string, jqXHR: jQuery.jqXHR) => void;

    /**
     * @see {@link http://api.jquery.com/jquery.ajax/#jQuery-ajax-settings}
     */
    interface AjaxSettings<TContext = any> {
        /**
         * A set of key/value pairs that map a given dataType to its MIME type, which gets sent in the Accept
         * request header. This header tells the server what kind of response it will accept in return.
         */
        accepts?: jQuery.PlainObject<string>;
        /**
         * By default, all requests are sent asynchronously (i.e. this is set to true by default). If you need
         * synchronous requests, set this option to false. Cross-domain requests and dataType: "jsonp" requests
         * do not support synchronous operation. Note that synchronous requests may temporarily lock the
         * browser, disabling any actions while the request is active. As of jQuery 1.8, the use of async:
         * false with jqXHR ($.Deferred) is deprecated; you must use the success/error/complete callback
         * options instead of the corresponding methods of the jqXHR object such as jqXHR.done().
         */
        async?: boolean;
        /**
         * A pre-request callback function that can be used to modify the jqXHR (in jQuery 1.4.x,
         * XMLHTTPRequest) object before it is sent. Use this to set custom headers, etc. The jqXHR and
         * settings objects are passed as arguments. This is an Ajax Event. Returning false in the beforeSend
         * function will cancel the request. As of jQuery 1.5, the beforeSend option will be called regardless
         * of the type of request.
         */
        beforeSend?(this: TContext, jqXHR: jQuery.jqXHR, settings: jQuery.AjaxSettings<TContext>): false | void;
        /**
         * If set to false, it will force requested pages not to be cached by the browser. Note: Setting cache
         * to false will only work correctly with HEAD and GET requests. It works by appending "_={timestamp}"
         * to the GET parameters. The parameter is not needed for other types of requests, except in IE8 when a
         * POST is made to a URL that has already been requested by a GET.
         */
        cache?: boolean;
        /**
         * A function to be called when the request finishes (after success and error callbacks are executed).
         * The function gets passed two arguments: The jqXHR (in jQuery 1.4.x, XMLHTTPRequest) object and a
         * string categorizing the status of the request ("success", "notmodified", "nocontent", "error",
         * "timeout", "abort", or "parsererror"). As of jQuery 1.5, the complete setting can accept an array of
         * functions. Each function will be called in turn. This is an Ajax Event.
         */
        complete?: jQuery.TypeOrArray<AjaxCompleteCallback<TContext>>;
        /**
         * An object of string/regular-expression pairs that determine how jQuery will parse the response,
         * given its content type.
         */
        contents?: jQuery.PlainObject<RegExp>;
        /**
         * When sending data to the server, use this content type. Default is
         * "application/x-www-form-urlencoded; charset=UTF-8", which is fine for most cases. If you explicitly
         * pass in a content-type to $.ajax(), then it is always sent to the server (even if no data is sent).
         * As of jQuery 1.6 you can pass false to tell jQuery to not set any content type header. Note: The W3C
         * XMLHttpRequest specification dictates that the charset is always UTF-8; specifying another charset
         * will not force the browser to change the encoding. Note: For cross-domain requests, setting the
         * content type to anything other than application/x-www-form-urlencoded, multipart/form-data, or
         * text/plain will trigger the browser to send a preflight OPTIONS request to the server.
         */
        contentType?: string | false;
        /**
         * This object will be the context of all Ajax-related callbacks. By default, the context is an object
         * that represents the Ajax settings used in the call ($.ajaxSettings merged with the settings passed to $.ajax).
         */
        context?: TContext;
        /**
         * An object containing dataType-to-dataType converters. Each converter's value is a function that
         * returns the transformed value of the response.
         */
        converters?: jQuery.PlainObject<((value: any) => any) | true>;
        /**
         * If you wish to force a crossDomain request (such as JSONP) on the same domain, set the value of
         * crossDomain to true. This allows, for example, server-side redirection to another domain.
         */
        crossDomain?: boolean;
        /**
         * Data to be sent to the server. It is converted to a query string, if not already a string. It's
         * appended to the url for GET-requests. See processData option to prevent this automatic processing.
         * Object must be Key/Value pairs. If value is an Array, jQuery serializes multiple values with same
         * key based on the value of the traditional setting (described below).
         */
        data?: jQuery.PlainObject | string | any[];
        /**
         * A function to be used to handle the raw response data of XMLHttpRequest. This is a pre-filtering
         * function to sanitize the response. You should return the sanitized data. The function accepts two
         * arguments: The raw data returned from the server and the 'dataType' parameter.
         */
        dataFilter?(data: string, type: string): any;
        /**
         * The type of data that you're expecting back from the server. If none is specified, jQuery will try
         * to infer it based on the MIME type of the response (an XML MIME type will yield XML, in 1.4 JSON
         * will yield a JavaScript object, in 1.4 script will execute the script, and anything else will be
         * returned as a string). The available types (and the result passed as the first argument to your
         * success callback) are:
         *
         * "xml": Returns a XML document that can be processed via jQuery.
         *
         * "html": Returns HTML as plain text; included script tags are evaluated when inserted in the DOM.
         *
         * "script": Evaluates the response as JavaScript and returns it as plain text. Disables caching by
         * appending a query string parameter, _=[TIMESTAMP], to the URL unless the cache option is set to
         * true. Note: This will turn POSTs into GETs for remote-domain requests.
         *
         * "json": Evaluates the response as JSON and returns a JavaScript object. Cross-domain "json" requests
         * are converted to "jsonp" unless the request includes jsonp: false in its request options. The JSON
         * data is parsed in a strict manner; any malformed JSON is rejected and a parse error is thrown. As of
         * jQuery 1.9, an empty response is also rejected; the server should return a response of null or {}
         * instead. (See json.org for more information on proper JSON formatting.)
         *
         * "jsonp": Loads in a JSON block using JSONP. Adds an extra "?callback=?" to the end of your URL to
         * specify the callback. Disables caching by appending a query string parameter, "_=[TIMESTAMP]", to
         * the URL unless the cache option is set to true.
         *
         * "text": A plain text string.
         *
         * multiple, space-separated values: As of jQuery 1.5, jQuery can convert a dataType from what it
         * received in the Content-Type header to what you require. For example, if you want a text response to
         * be treated as XML, use "text xml" for the dataType. You can also make a JSONP request, have it
         * received as text, and interpreted by jQuery as XML: "jsonp text xml". Similarly, a shorthand string
         * such as "jsonp xml" will first attempt to convert from jsonp to xml, and, failing that, convert from
         * jsonp to text, and then from text to xml.
         */
        dataType?: 'xml' | 'html' | 'script' | 'json' | 'jsonp' | 'text' | string;
        /**
         * A function to be called if the request fails. The function receives three arguments: The jqXHR (in
         * jQuery 1.4.x, XMLHttpRequest) object, a string describing the type of error that occurred and an
         * optional exception object, if one occurred. Possible values for the second argument (besides null)
         * are "timeout", "error", "abort", and "parsererror". When an HTTP error occurs, errorThrown receives
         * the textual portion of the HTTP status, such as "Not Found" or "Internal Server Error." As of jQuery
         * 1.5, the error setting can accept an array of functions. Each function will be called in turn. Note:
         * This handler is not called for cross-domain script and cross-domain JSONP requests. This is an Ajax Event.
         */
        error?: jQuery.TypeOrArray<AjaxErrorCallback<TContext>>;
        /**
         * Whether to trigger global Ajax event handlers for this request. The default is true. Set to false to
         * prevent the global handlers like ajaxStart or ajaxStop from being triggered. This can be used to
         * control various Ajax Events.
         */
        global?: boolean;
        /**
         * An object of additional header key/value pairs to send along with requests using the XMLHttpRequest
         * transport. The header X-Requested-With: XMLHttpRequest is always added, but its default
         * XMLHttpRequest value can be changed here. Values in the headers setting can also be overwritten from
         * within the beforeSend function.
         */
        headers?: jQuery.PlainObject;
        /**
         * Allow the request to be successful only if the response has changed since the last request. This is
         * done by checking the Last-Modified header. Default value is false, ignoring the header. In jQuery
         * 1.4 this technique also checks the 'etag' specified by the server to catch unmodified data.
         */
        ifModified?: boolean;
        /**
         * Allow the current environment to be recognized as "local," (e.g. the filesystem), even if jQuery
         * does not recognize it as such by default. The following protocols are currently recognized as local:
         * file, *-extension, and widget. If the isLocal setting needs modification, it is recommended to do so
         * once in the $.ajaxSetup() method.
         */
        isLocal?: boolean;
        /**
         * Override the callback function name in a JSONP request. This value will be used instead of
         * 'callback' in the 'callback=?' part of the query string in the url. So {jsonp:'onJSONPLoad'} would
         * result in 'onJSONPLoad=?' passed to the server. As of jQuery 1.5, setting the jsonp option to false
         * prevents jQuery from adding the "?callback" string to the URL or attempting to use "=?" for
         * transformation. In this case, you should also explicitly set the jsonpCallback setting. For example,
         * { jsonp: false, jsonpCallback: "callbackName" }. If you don't trust the target of your Ajax
         * requests, consider setting the jsonp property to false for security reasons.
         */
        jsonp?: string | boolean;
        /**
         * Specify the callback function name for a JSONP request. This value will be used instead of the
         * random name automatically generated by jQuery. It is preferable to let jQuery generate a unique name
         * as it'll make it easier to manage the requests and provide callbacks and error handling. You may
         * want to specify the callback when you want to enable better browser caching of GET requests. As of
         * jQuery 1.5, you can also use a function for this setting, in which case the value of jsonpCallback
         * is set to the return value of that function.
         */
        jsonpCallback?: string | ((this: TContext) => string);
        /**
         * The HTTP method to use for the request (e.g. "POST", "GET", "PUT").
         */
        method?: string;
        /**
         * A mime type to override the XHR mime type.
         */
        mimeType?: string;
        /**
         * A password to be used with XMLHttpRequest in response to an HTTP access authentication request.
         */
        password?: string;
        /**
         * By default, data passed in to the data option as an object (technically, anything other than a
         * string) will be processed and transformed into a query string, fitting to the default content-type
         * "application/x-www-form-urlencoded". If you want to send a DOMDocument, or other non-processed data,
         * set this option to false.
         */
        processData?: boolean;
        /**
         * Only applies when the "script" transport is used (e.g., cross-domain requests with "jsonp" or
         * "script" dataType and "GET" type). Sets the charset attribute on the script tag used in the request.
         * Used when the character set on the local page is not the same as the one on the remote script.
         */
        scriptCharset?: string;
        /**
         * An object of numeric HTTP codes and functions to be called when the response has the corresponding
         * code.
         *
         * If the request is successful, the status code functions take the same parameters as the success
         * callback; if it results in an error (including 3xx redirect), they take the same parameters as the error callback.
         */
        statusCode?: jQuery.PlainObject;
        /**
         * A function to be called if the request succeeds. The function gets passed three arguments: The data
         * returned from the server, formatted according to the dataType parameter or the dataFilter callback
         * function, if specified; a string describing the status; and the jqXHR (in jQuery 1.4.x,
         * XMLHttpRequest) object. As of jQuery 1.5, the success setting can accept an array of functions. Each
         * function will be called in turn. This is an Ajax Event.
         */
        success?: jQuery.TypeOrArray<AjaxSuccessCallback<TContext>>;
        /**
         * Set a timeout (in milliseconds) for the request. A value of 0 means there will be no timeout. This
         * will override any global timeout set with $.ajaxSetup(). The timeout period starts at the point the
         * $.ajax call is made; if several other requests are in progress and the browser has no connections
         * available, it is possible for a request to time out before it can be sent. In jQuery 1.4.x and
         * below, the XMLHttpRequest object will be in an invalid state if the request times out; accessing any
         * object members may throw an exception. In Firefox 3.0+ only, script and JSONP requests cannot be
         * cancelled by a timeout; the script will run even if it arrives after the timeout period.
         */
        timeout?: number;
        /**
         * Set this to true if you wish to use the traditional style of param serialization.
         */
        traditional?: boolean;
        /**
         * An alias for method. You should use type if you're using versions of jQuery prior to 1.9.0.
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
         * Callback for creating the XMLHttpRequest object. Defaults to the ActiveXObject when available (IE),
         * the XMLHttpRequest otherwise. Override to provide your own implementation for XMLHttpRequest or
         * enhancements to the factory.
         */
        xhr?(): XMLHttpRequest;
        /**
         * An object of fieldName-fieldValue pairs to set on the native XHR object.
         *
         * In jQuery 1.5, the withCredentials property was not propagated to the native XHR and thus CORS
         * requests requiring it would ignore this flag. For this reason, we recommend using jQuery 1.5.1+
         * should you require the use of it.
         */
        xhrFields?: jQuery.PlainObject;
    }

    type AjaxTransportSuccessCallback = (status: number, statusText: string, responses?: jQuery.PlainObject, headers?: string) => void;

    interface Transport {
        send(headers: jQuery.PlainObject, completeCallback: AjaxTransportSuccessCallback): void;
        abort(): void;
    }

    type jqXHRDoneCallback = (data: any, textStatus: string, jqXHR: jQuery.jqXHR) => void;
    type jqXHRFailCallback = (jqXHR: jQuery.jqXHR, textStatus: string, errorThrown: any) => void;

    // TODO: Verify types of abort, getAllResponseHeaders, statusCode
    // Note: statusCode is not defined in lib.es6.d.ts
    /**
     * @see {@link http://api.jquery.com/jquery.ajax/#jqXHR}
     */
    interface jqXHR extends Pick<jQuery.Deferred<any>, 'catch' | 'pipe'>,
        Pick<XMLHttpRequest, 'readyState' | 'responseXML' | 'responseText' | 'status' | 'statusText' | 'getResponseHeader' | 'overrideMimeType' | 'setRequestHeader'> {
        responseJSON: any;
        /**
         * An alternative construct to the complete callback option, the .always() method replaces the
         * deprecated .complete() method.
         *
         * In response to a successful request, the function's arguments are the same as those of .done():
         * data, textStatus, and the jqXHR object. For failed requests the arguments are the same as those of
         * .fail(): the jqXHR object, textStatus, and errorThrown. Refer to deferred.always() for
         * implementation details.
         *
         * @param alwaysCallback
         * @see {@link http://api.jquery.com/jQuery.ajax/#jqXHR}
         * @since 1.6
         */
        always(alwaysCallback: jqXHRDoneCallback | jqXHRFailCallback): this;
        /**
         * An alternative construct to the success callback option, refer to deferred.done() for implementation details.
         *
         * @param doneCallback
         * @see {@link http://api.jquery.com/jQuery.ajax/#jqXHR}
         * @since 1.0
         */
        done(doneCallback: jqXHRDoneCallback): this;
        /**
         * An alternative construct to the error callback option, the .fail() method replaces the deprecated
         * .error() method. Refer to deferred.fail() for implementation details.
         *
         * @param failCallback
         * @see {@link http://api.jquery.com/jQuery.ajax/#jqXHR}
         * @since 1.0
         */
        fail(failCallback: jqXHRFailCallback): this;
        /**
         * Incorporates the functionality of the .done() and .fail() methods, allowing (as of jQuery 1.8) the
         * underlying Promise to be manipulated. Refer to deferred.then() for implementation details.
         *
         * @param doneCallback
         * @param failCallback
         * @see {@link http://api.jquery.com/jQuery.ajax/#jqXHR}
         * @since 1.0
         */
        then(doneCallback: jqXHRDoneCallback | null,
             failCallback?: jqXHRFailCallback): this;
    }

    // endregion

    // region CSS

    interface CSSHook {
        get(this: this, elem: HTMLElement, computed: any, extra: any): any;
        set(this: this, elem: HTMLElement, value: any): void;
    }

    // endregion

    // region Deferred

    /**
     * This object provides a subset of the methods of the Deferred object (then, done, fail, always,
     * pipe, progress, state and promise) to prevent users from changing the state of the Deferred.
     *
     * @see {@link http://api.jquery.com/Types/#Promise}
     */
        // tslint:disable-next-line:no-empty-interface
    interface Promise<T> extends Pick<jQuery.Deferred<T>, 'then' | 'done' | 'fail' | 'always' | 'pipe' | 'progress' | 'state' | 'promise'> { }

    type PromiseCallback<T> = <TResult1 = T>(value: T, ...args: any[]) => TResult1 | jQuery.Thenable<TResult1>;

    // endregion

    // region Effects

    type Duration = number | 'fast' | 'slow';
    type QueueFunction = (this: HTMLElement, next: () => void) => void;
    type Queue = { 0: string; } & QueueFunction[];

    /**
     * @see {@link https://api.jquery.com/animate/#animate-properties-options}
     */
    interface EffectsOptions {
        /**
         * A function to be called when the animation on an element completes or stops without completing (its
         * Promise object is either resolved or rejected).
         */
        always?(this: HTMLElement, animation: jQuery.Promise<any>, jumpedToEnd: boolean): void;
        /**
         * A function that is called once the animation on an element is complete.
         */
        complete?(this: HTMLElement): void;
        /**
         * A function to be called when the animation on an element completes (its Promise object is resolved).
         */
        done?(this: HTMLElement, animation: jQuery.Promise<any>, jumpedToEnd: boolean): void;
        /**
         * A string or number determining how long the animation will run.
         */
        duration?: jQuery.Duration;
        /**
         * A string indicating which easing function to use for the transition.
         */
        easing?: string;
        /**
         * A function to be called when the animation on an element fails to complete (its Promise object is rejected).
         */
        fail?(this: HTMLElement, animation: jQuery.Promise<any>, jumpedToEnd: boolean): void;
        /**
         * A function to be called after each step of the animation, only once per animated element regardless
         * of the number of animated properties.
         */
        progress?(this: HTMLElement, animation: jQuery.Promise<any>, progress: number, remainingMs: number): void;
        /**
         * A Boolean indicating whether to place the animation in the effects queue. If false, the animation
         * will begin immediately. As of jQuery 1.7, the queue option can also accept a string, in which case
         * the animation is added to the queue represented by that string. When a custom queue name is used the
         * animation does not automatically start; you must call .dequeue("queuename") to start it.
         */
        queue?: boolean | string;
        /**
         * An object containing one or more of the CSS properties defined by the properties argument and their
         * corresponding easing functions.
         */
        specialEasing?: jQuery.PlainObject;
        /**
         * A function to call when the animation on an element begins.
         */
        start?(this: HTMLElement, animation: jQuery.Promise<any>): void;
        /**
         * A function to be called for each animated property of each animated element. This function provides
         * an opportunity to modify the Tween object to change the value of the property before it is set.
         */
        step?(this: HTMLElement, now: number, tween: jQuery.Tween): void;
    }

    // Undocumented
    // https://github.com/jquery/api.jquery.com/issues/391
    // https://github.com/jquery/api.jquery.com/issues/61
    class Tween {
        easing: string;
        elem: HTMLElement;
        end: number;
        now: number;
        options: EffectsOptions;
        pos: number;
        prop: string;
        start: number;
        unit: string;
    }

    interface SpeedSettings {
        /**
         * A string or number determining how long the animation will run.
         */
        duration?: jQuery.Duration;
        /**
         * A string indicating which easing function to use for the transition.
         */
        easing?: string;
        /**
         * A function to call once the animation is complete.
         */
        complete?(this: HTMLElement): void;
    }

    // endregion

    // region Events

    // Extra parameters can be passed from trigger()
    type EventHandler<TData = null> = (this: HTMLElement, eventObject: jQuery.Event<TData>, ...args: any[]) => void | false | any;

    // Provided for convenience for use with jQuery.Event.which
    const enum Mouse {
        None = 0,
        Left = 1,
        Middle = 2,
        Right = 3
    }

    // Provided for convenience for use with jQuery.Event.which
    const enum Key {
        Backspace = 8,
        Tab = 9,
        Enter = 13,
        Shift = 16,
        Control = 17,
        Alt = 18,
        CapsLock = 20,
        Escape = 27,
        Space = 32,
        PageUp = 33,
        PageDown = 34,
        End = 35,
        Home = 36,
        ArrowLeft = 37,
        ArrowUp = 38,
        ArrowRight = 39,
        ArrowDown = 40,

        Semicolon = 186,
        Colon = 186,
        EqualsSign = 187,
        Plus = 187,
        Comma = 188,
        LessThanSign = 188,
        Minus = 189,
        Underscore = 189,
        Period = 190,
        GreaterThanSign = 190,
        ForwardSlash = 191,
        QuestionMark = 191,
        Backtick = 192,
        Tilde = 192,
        OpeningSquareBracket = 219,
        OpeningCurlyBrace = 219,
        Backslash = 220,
        Pipe = 220,
        ClosingSquareBracket = 221,
        ClosingCurlyBrace = 221,
        SingleQuote = 222,
        DoubleQuote = 222,

        Pause = 19,
        PrintScreen = 44,
        Insert = 45,
        Delete = 46,
        Num0 = 48,
        Num1 = 49,
        Num2 = 50,
        Num3 = 51,
        Num4 = 52,
        Num5 = 53,
        Num6 = 54,
        Num7 = 55,
        Num8 = 56,
        Num9 = 57,
        A = 65,
        B = 66,
        C = 67,
        D = 68,
        E = 69,
        F = 70,
        G = 71,
        H = 72,
        I = 73,
        J = 74,
        K = 75,
        L = 76,
        M = 77,
        N = 78,
        O = 79,
        P = 80,
        Q = 81,
        R = 82,
        S = 83,
        T = 84,
        U = 85,
        V = 86,
        W = 87,
        X = 88,
        Y = 89,
        Z = 90,
        MetaLeft = 91,
        MetaRight = 92,
        ContextMenu = 93,
        Numpad0 = 96,
        Numpad1 = 97,
        Numpad2 = 98,
        Numpad3 = 99,
        Numpad4 = 100,
        Numpad5 = 101,
        Numpad6 = 102,
        Numpad7 = 103,
        Numpad8 = 104,
        Numpad9 = 105,
        NumpadMultiply = 106,
        NumpadAdd = 107,
        NumpadSubtract = 109,
        NumpadDecimal = 110,
        NumpadDivide = 111,
        F1 = 112,
        F2 = 113,
        F3 = 114,
        F4 = 115,
        F5 = 116,
        F6 = 117,
        F7 = 118,
        F8 = 119,
        F9 = 120,
        F10 = 121,
        F11 = 122,
        F12 = 123,
        NumLock = 144,
        ScrollLock = 145
    }

    // endregion

    interface NameValuePair {
        name: string;
        value: string;
    }

    interface Coordinates {
        left: number;
        top: number;
    }

    interface ValHook {
        get?(elem: HTMLElement): any;
        set?(elem: HTMLElement, value: any): any;
    }

    type AnimationHook = ((fx: jQuery.Tween) => void);
}
