declare module goog {
    function require(name: 'goog.net.XhrManager'): typeof goog.net.XhrManager;
    function require(name: 'goog.net.XhrManager.Event'): typeof goog.net.XhrManager.Event;
    function require(name: 'goog.net.XhrManager.Request'): typeof goog.net.XhrManager.Request;
}

declare module goog.net {

    /**
     * A manager of an XhrIoPool.
     * @param {number=} opt_maxRetries Max. number of retries (Default: 1).
     * @param {goog.structs.Map=} opt_headers Map of default headers to add to every
     *     request.
     * @param {number=} opt_minCount Min. number of objects (Default: 1).
     * @param {number=} opt_maxCount Max. number of objects (Default: 10).
     * @param {number=} opt_timeoutInterval Timeout (in ms) before aborting an
     *     attempt (Default: 0ms).
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class XhrManager extends goog.events.EventTarget {
        constructor(opt_maxRetries?: number, opt_headers?: goog.structs.Map<any, any>, opt_minCount?: number, opt_maxCount?: number, opt_timeoutInterval?: number);
        
        /**
         * Sets the number of milliseconds after which an incomplete request will be
         * aborted. Zero means no timeout is set.
         * @param {number} ms Timeout interval in milliseconds; 0 means none.
         */
        setTimeoutInterval(ms: number): void;
        
        /**
         * Returns the number of requests either in flight, or waiting to be sent.
         * The count will include the current request if used within a COMPLETE event
         * handler or callback.
         * @return {number} The number of requests in flight or pending send.
         */
        getOutstandingCount(): number;
        
        /**
         * Returns an array of request ids that are either in flight, or waiting to
         * be sent. The id of the current request will be included if used within a
         * COMPLETE event handler or callback.
         * @return {!Array<string>} Request ids in flight or pending send.
         */
        getOutstandingRequestIds(): Array<string>;
        
        /**
         * Registers the given request to be sent. Throws an error if a request
         * already exists with the given ID.
         * NOTE: It is not sent immediately. It is queued and will be sent when an
         * XhrIo object becomes available, taking into account the request's
         * priority.
         * @param {string} id The id of the request.
         * @param {string} url Uri to make the request too.
         * @param {string=} opt_method Send method, default: GET.
         * @param {ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string=}
         *     opt_content Post data.
         * @param {Object|goog.structs.Map=} opt_headers Map of headers to add to the
         *     request.
         * @param {number=} opt_priority The priority of the request. A smaller value
         *     means a higher priority.
         * @param {Function=} opt_callback Callback function for when request is
         *     complete. The only param is the event object from the COMPLETE event.
         * @param {number=} opt_maxRetries The maximum number of times the request
         *     should be retried.
         * @param {goog.net.XhrIo.ResponseType=} opt_responseType The response type of
         *     this request; defaults to goog.net.XhrIo.ResponseType.DEFAULT.
         * @return {!goog.net.XhrManager.Request} The queued request object.
         */
        send(id: string, url: string, opt_method?: string, opt_content?: ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string, opt_headers?: Object|goog.structs.Map<any, any>, opt_priority?: number, opt_callback?: Function, opt_maxRetries?: number, opt_responseType?: goog.net.XhrIo.ResponseType): goog.net.XhrManager.Request;
        
        /**
         * Aborts the request associated with id.
         * @param {string} id The id of the request to abort.
         * @param {boolean=} opt_force If true, remove the id now so it can be reused.
         *     No events are fired and the callback is not called when forced.
         */
        abort(id: string, opt_force?: boolean): void;
    }
}

declare module goog.net.XhrManager {

    /**
     * An event dispatched by XhrManager.
     *
     * @param {goog.net.EventType} type Event Type.
     * @param {goog.net.XhrManager} target Reference to the object that is the
     *     target of this event.
     * @param {string} id The id of the request this event is for.
     * @param {goog.net.XhrIo} xhrIo The XhrIo object of the request.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class Event extends goog.events.Event {
        constructor(type: goog.net.EventType, target: goog.net.XhrManager, id: string, xhrIo: goog.net.XhrIo);
    }

    /**
     * An encapsulation of everything needed to make a Xhr request.
     * NOTE: This is used internal to the XhrManager.
     *
     * @param {string} url Uri to make the request too.
     * @param {Function} xhrEventCallback Callback attached to the events of the
     *     XhrIo object of the request.
     * @param {string=} opt_method Send method, default: GET.
     * @param {ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string=}
     *     opt_content Post data.
     * @param {Object|goog.structs.Map=} opt_headers Map of headers to add to the
     *     request.
     * @param {Function=} opt_callback Callback function for when request is
     *     complete. NOTE: Only 1 callback supported across all events.
     * @param {number=} opt_maxRetries The maximum number of times the request
     *     should be retried (Default: 1).
     * @param {goog.net.XhrIo.ResponseType=} opt_responseType The response type of
     *     this request; defaults to goog.net.XhrIo.ResponseType.DEFAULT.
     *
     * @constructor
     * @final
     */
    class Request {
        constructor(url: string, xhrEventCallback: Function, opt_method?: string, opt_content?: ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string, opt_headers?: Object|goog.structs.Map<any, any>, opt_callback?: Function, opt_maxRetries?: number, opt_responseType?: goog.net.XhrIo.ResponseType);
        
        /**
         * Gets the uri.
         * @return {string} The uri to make the request to.
         */
        getUrl(): string;
        
        /**
         * Gets the send method.
         * @return {string} The send method.
         */
        getMethod(): string;
        
        /**
         * Gets the post data.
         * @return {ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string|undefined}
         *     The post data.
         */
        getContent(): ArrayBuffer|ArrayBufferView|Blob|Document|FormData|string|void;
        
        /**
         * Gets the map of headers.
         * @return {Object|goog.structs.Map} The map of headers.
         */
        getHeaders(): Object|goog.structs.Map<any, any>;
        
        /**
         * Gets the maximum number of times the request should be retried.
         * @return {number} The maximum number of times the request should be retried.
         */
        getMaxRetries(): number;
        
        /**
         * Gets the number of attempts so far.
         * @return {number} The number of attempts so far.
         */
        getAttemptCount(): number;
        
        /**
         * Increases the number of attempts so far.
         */
        increaseAttemptCount(): void;
        
        /**
         * Returns whether the request has reached the maximum number of retries.
         * @return {boolean} Whether the request has reached the maximum number of
         *     retries.
         */
        hasReachedMaxRetries(): boolean;
        
        /**
         * Sets the completed status.
         * @param {boolean} complete The completed status.
         */
        setCompleted(complete: boolean): void;
        
        /**
         * Gets the completed status.
         * @return {boolean} The completed status.
         */
        getCompleted(): boolean;
        
        /**
         * Sets the aborted status.
         * @param {boolean} aborted True if the request was aborted, otherwise False.
         */
        setAborted(aborted: boolean): void;
        
        /**
         * Gets the aborted status.
         * @return {boolean} True if request was aborted, otherwise False.
         */
        getAborted(): boolean;
        
        /**
         * Gets the callback attached to the events of the XhrIo object.
         * @return {Function} The callback attached to the events of the
         *     XhrIo object.
         */
        getXhrEventCallback(): Function;
        
        /**
         * Gets the callback for when the request is complete.
         * @return {Function|undefined} The callback for when the request is complete.
         */
        getCompleteCallback(): Function|void;
        
        /**
         * Gets the response type that will be set on this request's XhrIo when it's
         * available.
         * @return {!goog.net.XhrIo.ResponseType} The response type to be set
         *     when an XhrIo becomes available to this request.
         */
        getResponseType(): goog.net.XhrIo.ResponseType;
    }
}
