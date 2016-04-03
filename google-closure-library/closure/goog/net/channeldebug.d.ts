declare module goog {
    function require(name: 'goog.net.ChannelDebug'): typeof goog.net.ChannelDebug;
}

declare module goog.net {

    /**
     * Logs and keeps a buffer of debugging info for the Channel.
     *
     * @constructor
     */
    class ChannelDebug {
        constructor();
        
        /**
         * Gets the logger used by this ChannelDebug.
         * @return {goog.debug.Logger} The logger used by this ChannelDebug.
         */
        getLogger(): goog.debug.Logger;
        
        /**
         * Logs that the browser went offline during the lifetime of a request.
         * @param {goog.Uri} url The URL being requested.
         */
        browserOfflineResponse(url: goog.Uri): void;
        
        /**
         * Logs an XmlHttp request..
         * @param {string} verb The request type (GET/POST).
         * @param {goog.Uri} uri The request destination.
         * @param {string|number|undefined} id The request id.
         * @param {number} attempt Which attempt # the request was.
         * @param {?string} postData The data posted in the request.
         */
        xmlHttpChannelRequest(verb: string, uri: goog.Uri, id: string|number|void, attempt: number, postData: string): void;
        
        /**
         * Logs the meta data received from an XmlHttp request.
         * @param {string} verb The request type (GET/POST).
         * @param {goog.Uri} uri The request destination.
         * @param {string|number|undefined} id The request id.
         * @param {number} attempt Which attempt # the request was.
         * @param {goog.net.XmlHttp.ReadyState} readyState The ready state.
         * @param {number} statusCode The HTTP status code.
         */
        xmlHttpChannelResponseMetaData(verb: string, uri: goog.Uri, id: string|number|void, attempt: number, readyState: goog.net.XmlHttp.ReadyState, statusCode: number): void;
        
        /**
         * Logs the response data received from an XmlHttp request.
         * @param {string|number|undefined} id The request id.
         * @param {?string} responseText The response text.
         * @param {?string=} opt_desc Optional request description.
         */
        xmlHttpChannelResponseText(id: string|number|void, responseText: string, opt_desc?: string): void;
        
        /**
         * Logs a Trident ActiveX request.
         * @param {string} verb The request type (GET/POST).
         * @param {goog.Uri} uri The request destination.
         * @param {string|number|undefined} id The request id.
         * @param {number} attempt Which attempt # the request was.
         */
        tridentChannelRequest(verb: string, uri: goog.Uri, id: string|number|void, attempt: number): void;
        
        /**
         * Logs the response text received from a Trident ActiveX request.
         * @param {string|number|undefined} id The request id.
         * @param {string} responseText The response text.
         */
        tridentChannelResponseText(id: string|number|void, responseText: string): void;
        
        /**
         * Logs the done response received from a Trident ActiveX request.
         * @param {string|number|undefined} id The request id.
         * @param {boolean} successful Whether the request was successful.
         */
        tridentChannelResponseDone(id: string|number|void, successful: boolean): void;
        
        /**
         * Logs a request timeout.
         * @param {goog.Uri} uri The uri that timed out.
         */
        timeoutResponse(uri: goog.Uri): void;
        
        /**
         * Logs a debug message.
         * @param {string} text The message.
         */
        debug(text: string): void;
        
        /**
         * Logs an exception
         * @param {Error} e The error or error event.
         * @param {string=} opt_msg The optional message, defaults to 'Exception'.
         */
        dumpException(e: Error, opt_msg?: string): void;
        
        /**
         * Logs an info message.
         * @param {string} text The message.
         */
        info(text: string): void;
        
        /**
         * Logs a warning message.
         * @param {string} text The message.
         */
        warning(text: string): void;
        
        /**
         * Logs a severe message.
         * @param {string} text The message.
         */
        severe(text: string): void;
    }
}
