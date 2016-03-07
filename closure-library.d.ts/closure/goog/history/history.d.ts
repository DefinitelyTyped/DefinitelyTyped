declare module goog {
    function require(name: 'goog.History'): typeof goog.History;
    function require(name: 'goog.History.EventType'): typeof goog.History.EventType;
    function require(name: 'goog.History.Event'): typeof goog.History.Event;
}

declare module goog {

    /**
     * A history management object. Can be instantiated in user-visible mode (uses
     * the address fragment to manage state) or in hidden mode. This object should
     * be created from a script in the document body before the document has
     * finished loading.
     *
     * To store the hidden states in browsers other than IE, a hidden iframe is
     * used. It must point to a valid html page on the same domain (which can and
     * probably should be blank.)
     *
     * Sample instantiation and usage:
     *
     * <pre>
     * // Instantiate history to use the address bar for state.
     * var h = new goog.History();
     * goog.events.listen(h, goog.history.EventType.NAVIGATE, navCallback);
     * h.setEnabled(true);
     *
     * // Any changes to the location hash will call the following function.
     * function navCallback(e) {
     *   alert('Navigated to state "' + e.token + '"');
     * }
     *
     * // The history token can also be set from code directly.
     * h.setToken('foo');
     * </pre>
     *
     * @param {boolean=} opt_invisible True to use hidden history states instead of
     *     the user-visible location hash.
     * @param {string=} opt_blankPageUrl A URL to a blank page on the same server.
     *     Required if opt_invisible is true.  This URL is also used as the src
     *     for the iframe used to track history state in IE (if not specified the
     *     iframe is not given a src attribute).  Access is Denied error may
     *     occur in IE7 if the window's URL's scheme is https, and this URL is
     *     not specified.
     * @param {HTMLInputElement=} opt_input The hidden input element to be used to
     *     store the history token.  If not provided, a hidden input element will
     *     be created using document.write.
     * @param {HTMLIFrameElement=} opt_iframe The hidden iframe that will be used by
     *     IE for pushing history state changes, or by all browsers if opt_invisible
     *     is true. If not provided, a hidden iframe element will be created using
     *     document.write.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class History extends goog.events.EventTarget {
        constructor(opt_invisible?: boolean, opt_blankPageUrl?: string, opt_input?: HTMLInputElement, opt_iframe?: HTMLIFrameElement);
        
        /**
         * Whether the current browser is Internet Explorer prior to version 8. Many IE
         * specific workarounds developed before version 8 are unnecessary in more
         * current versions.
         * @type {boolean}
         */
        static LEGACY_IE: boolean;
        
        /**
         * Whether the browser always requires the hash to be present. Internet Explorer
         * before version 8 will reload the HTML page if the hash is omitted.
         * @type {boolean}
         */
        static HASH_ALWAYS_REQUIRED: boolean;
        
        /**
         * Whether the browser supports HTML5 history management's onhashchange event.
         * {@link http://www.w3.org/TR/html5/history.html}. IE 9 in compatibility mode
         * indicates that onhashchange is in window, but testing reveals the event
         * isn't actually fired.
         * @return {boolean} Whether onhashchange is supported.
         */
        static isOnHashChangeSupported(): boolean;
        
        /**
         * Starts or stops the History polling loop. When enabled, the History object
         * will immediately fire an event for the current location. The caller can set
         * up event listeners between the call to the constructor and the call to
         * setEnabled.
         *
         * On IE, actual startup may be delayed until the iframe and hidden input
         * element have been loaded and can be polled. This behavior is transparent to
         * the caller.
         *
         * @param {boolean} enable Whether to enable the history polling loop.
         */
        setEnabled(enable: boolean): void;
        
        /**
         * Callback for the window onload event in IE. This is necessary to read the
         * value of the hidden input after restoring a history session. The value of
         * input elements is not viewable until after window onload for some reason (the
         * iframe state is similarly unavailable during the loading phase.)  If
         * setEnabled is called before the iframe has completed loading, the history
         * object will actually be enabled at this point.
         * @protected
         */
        onDocumentLoaded(): void;
        
        /**
         * @return {string} The current token.
         */
        getToken(): string;
        
        /**
         * Sets the history state. When user visible states are used, the URL fragment
         * will be set to the provided token.  Sometimes it is necessary to set the
         * history token before the document title has changed, in this case IE's
         * history drop down can be out of sync with the token.  To get around this
         * problem, the app can pass in a title to use with the hidden iframe.
         * @param {string} token The history state identifier.
         * @param {string=} opt_title Optional title used when setting the hidden iframe
         *     title in IE.
         */
        setToken(token: string, opt_title?: string): void;
        
        /**
         * Replaces the current history state without affecting the rest of the history
         * stack.
         * @param {string} token The history state identifier.
         * @param {string=} opt_title Optional title used when setting the hidden iframe
         *     title in IE.
         */
        replaceToken(token: string, opt_title?: string): void;
    }
}

declare module goog.History {

    /**
     * Types of polling. The values are in ms of the polling interval.
     * @enum {number}
     */
    type PollingType = number;
    var PollingType: {
        NORMAL: PollingType;
        LONG: PollingType;
    };

    /**
     * Constant for the history change event type.
     * @enum {string}
     * @deprecated Use goog.history.EventType.
     */
    export import EventType = goog.history.EventType;

    /**
     * Constant for the history change event type.
     * @param {string} token The string identifying the new history state.
     * @extends {goog.events.Event}
     * @constructor
     * @deprecated Use goog.history.Event.
     * @final
     */
    class Event extends goog.events.Event {
        constructor(token: string);
    }
}
