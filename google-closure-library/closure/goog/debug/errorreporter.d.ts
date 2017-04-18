declare module goog {
    function require(name: 'goog.debug.ErrorReporter'): typeof goog.debug.ErrorReporter;
    function require(name: 'goog.debug.ErrorReporter.ExceptionEvent'): typeof goog.debug.ErrorReporter.ExceptionEvent;
}

declare module goog.debug {

    /**
     * Constructs an error reporter. Internal Use Only. To install an error
     * reporter see the {@see #install} method below.
     *
     * @param {string} handlerUrl The URL to which all errors will be reported.
     * @param {function(!Error, !Object<string, string>)=}
     *     opt_contextProvider When a report is to be sent to the server,
     *     this method will be called, and given an opportunity to modify the
     *     context object before submission to the server.
     * @param {boolean=} opt_noAutoProtect Whether to automatically add handlers for
     *     onerror and to protect entry points.  If apps have other error reporting
     *     facilities, it may make sense for them to set these up themselves and use
     *     the ErrorReporter just for transmission of reports.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class ErrorReporter extends goog.events.EventTarget {
        constructor(handlerUrl: string, opt_contextProvider?: (arg0: Error, arg1: {[index: string]: string}) => any, opt_noAutoProtect?: boolean);
        
        /**
         * Installs exception protection for an entry point function in addition
         * to those that are protected by default.
         * Has no effect in IE because window.onerror is used for reporting
         * exceptions in that case.
         *
         * @this {goog.debug.ErrorReporter}
         * @param {Function} fn An entry point function to be protected.
         * @return {Function} A protected wrapper function that calls the entry point
         *     function or null if the entry point could not be protected.
         */
        protectAdditionalEntryPoint: any;
        
        /**
         * Installs an error reporter to catch all JavaScript errors raised.
         *
         * @param {string} loggingUrl The URL to which the errors caught will be
         *     reported.
         * @param {function(!Error, !Object<string, string>)=}
         *     opt_contextProvider When a report is to be sent to the server,
         *     this method will be called, and given an opportunity to modify the
         *     context object before submission to the server.
         * @param {boolean=} opt_noAutoProtect Whether to automatically add handlers for
         *     onerror and to protect entry points.  If apps have other error reporting
         *     facilities, it may make sense for them to set these up themselves and use
         *     the ErrorReporter just for transmission of reports.
         * @return {!goog.debug.ErrorReporter} The error reporter.
         */
        static install(loggingUrl: string, opt_contextProvider?: (arg0: Error, arg1: {[index: string]: string}) => any, opt_noAutoProtect?: boolean): goog.debug.ErrorReporter;
        
        /**
         * Default implementation of XHR sender interface.
         *
         * @param {string} uri URI to make request to.
         * @param {string} method Send method.
         * @param {string} content Post data.
         * @param {Object|goog.structs.Map=} opt_headers Map of headers to add to the
         *     request.
         */
        static defaultXhrSender(uri: string, method: string, content: string, opt_headers?: Object|goog.structs.Map<any, any>): void;
        
        /**
         * Add headers to the logging url.
         * @param {Object|goog.structs.Map} loggingHeaders Extra headers to send
         *     to the logging URL.
         */
        setLoggingHeaders(loggingHeaders: Object|goog.structs.Map<any, any>): void;
        
        /**
         * Set the function used to send error reports to the server.
         * @param {function(string, string, string, (Object|goog.structs.Map)=)}
         *     xhrSender If provided, this will be used to send a report to the
         *     server instead of the default method. The function will be given the URI,
         *     HTTP method request content, and (optionally) request headers to be
         *     added.
         */
        setXhrSender(xhrSender: (arg0: string, arg1: string, arg2: string, arg3?: Object|goog.structs.Map<any, any>) => any): void;
        
        /**
         * Handler for caught exceptions. Sends report to the LoggingServlet and
         * notifies any listeners.
         *
         * @param {Object} e The exception.
         * @param {!Object<string, string>=} opt_context Context values to optionally
         *     include in the error report.
         */
        handleException(e: Object, opt_context?: {[index: string]: string}): void;
        
        /**
         * Sends an error report to the logging URL.  This will not consult the context
         * provider, the report will be sent exactly as specified.
         *
         * @param {string} message Error description.
         * @param {string} fileName URL of the JavaScript file with the error.
         * @param {number} line Line number of the error.
         * @param {string=} opt_trace Call stack trace of the error.
         * @param {!Object<string, string>=} opt_context Context information to include
         *     in the request.
         */
        sendErrorReport(message: string, fileName: string, line: number, opt_trace?: string, opt_context?: {[index: string]: string}): void;
        
        /**
         * @param {string} prefix The prefix to appear prepended to all context
         *     variables in the error report body.
         */
        setContextPrefix(prefix: string): void;
        
        /**
         * @param {?number} limit Size in bytes to begin truncating POST body.  Set to
         *     null to prevent truncation.  The limit must be >= 0.
         */
        setTruncationLimit(limit: number): void;
        
        /**
         * @param {!Object<string,string>} urlArgs Set of key-value pairs to append
         *     to handlerUrl_ before sending XHR.
         */
        setAdditionalArguments(urlArgs: {[index: string]: string}): void;
    }
}

declare module goog.debug.ErrorReporter {

    /**
     * Event broadcast when an exception is logged.
     * @param {Error} error The exception that was was reported.
     * @param {!Object<string, string>} context The context values sent to the
     *     server alongside this error.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class ExceptionEvent extends goog.events.Event {
        constructor(error: Error, context: {[index: string]: string});
        
        /**
         * Event type for notifying of a logged exception.
         * @type {string}
         */
        static TYPE: string;
    }
}
