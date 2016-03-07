declare module goog {
    function require(name: 'goog.events'): typeof goog.events;
    function require(name: 'goog.events.CaptureSimulationMode'): typeof goog.events.CaptureSimulationMode;
}

declare module goog.events {

    /**
     * @enum {number} Different capture simulation mode for IE8-.
     */
    type CaptureSimulationMode = number;
    var CaptureSimulationMode: {
        OFF_AND_FAIL: CaptureSimulationMode;
        OFF_AND_SILENT: CaptureSimulationMode;
        ON: CaptureSimulationMode;
    };

    /**
     * @typedef {number|goog.events.ListenableKey}
     */
    type Key = number|goog.events.ListenableKey;

    /**
     * @typedef {EventTarget|goog.events.Listenable}
     */
    type ListenableType = goog.globalEventTarget|goog.events.Listenable;

    /**
     * Adds an event listener for a specific event on a native event
     * target (such as a DOM element) or an object that has implemented
     * {@link goog.events.Listenable}. A listener can only be added once
     * to an object and if it is added again the key for the listener is
     * returned. Note that if the existing listener is a one-off listener
     * (registered via listenOnce), it will no longer be a one-off
     * listener after a call to listen().
     *
     * @param {EventTarget|goog.events.Listenable} src The node to listen
     *     to events on.
     * @param {string|Array<string>|
     *     !goog.events.EventId<EVENTOBJ>|!Array<!goog.events.EventId<EVENTOBJ>>}
     *     type Event type or array of event types.
     * @param {function(this:T, EVENTOBJ):?|{handleEvent:function(?):?}|null}
     *     listener Callback method, or an object with a handleEvent function.
     *     WARNING: passing an Object is now softly deprecated.
     * @param {boolean=} opt_capt Whether to fire in capture phase (defaults to
     *     false).
     * @param {T=} opt_handler Element in whose scope to call the listener.
     * @return {goog.events.Key} Unique key for the listener.
     * @template T,EVENTOBJ
     */
    function listen<T, EVENTOBJ>(src: goog.globalEventTarget|goog.events.Listenable, type: string|Array<string>|goog.events.EventId<EVENTOBJ>|Array<goog.events.EventId<EVENTOBJ>>, listener: ((arg0: EVENTOBJ) => any)|{handleEvent: (arg0: any) => any}|void, opt_capt?: boolean, opt_handler?: T): goog.events.Key;

    /**
     * Helper function for returning a proxy function.
     * @return {!Function} A new or reused function object.
     */
    function getProxy(): Function;

    /**
     * Adds an event listener for a specific event on a native event
     * target (such as a DOM element) or an object that has implemented
     * {@link goog.events.Listenable}. After the event has fired the event
     * listener is removed from the target.
     *
     * If an existing listener already exists, listenOnce will do
     * nothing. In particular, if the listener was previously registered
     * via listen(), listenOnce() will not turn the listener into a
     * one-off listener. Similarly, if there is already an existing
     * one-off listener, listenOnce does not modify the listeners (it is
     * still a once listener).
     *
     * @param {EventTarget|goog.events.Listenable} src The node to listen
     *     to events on.
     * @param {string|Array<string>|
     *     !goog.events.EventId<EVENTOBJ>|!Array<!goog.events.EventId<EVENTOBJ>>}
     *     type Event type or array of event types.
     * @param {function(this:T, EVENTOBJ):?|{handleEvent:function(?):?}|null}
     *     listener Callback method.
     * @param {boolean=} opt_capt Fire in capture phase?.
     * @param {T=} opt_handler Element in whose scope to call the listener.
     * @return {goog.events.Key} Unique key for the listener.
     * @template T,EVENTOBJ
     */
    function listenOnce<T, EVENTOBJ>(src: goog.globalEventTarget|goog.events.Listenable, type: string|Array<string>|goog.events.EventId<EVENTOBJ>|Array<goog.events.EventId<EVENTOBJ>>, listener: ((arg0: EVENTOBJ) => any)|{handleEvent: (arg0: any) => any}|void, opt_capt?: boolean, opt_handler?: T): goog.events.Key;

    /**
     * Adds an event listener with a specific event wrapper on a DOM Node or an
     * object that has implemented {@link goog.events.Listenable}. A listener can
     * only be added once to an object.
     *
     * @param {EventTarget|goog.events.Listenable} src The target to
     *     listen to events on.
     * @param {goog.events.EventWrapper} wrapper Event wrapper to use.
     * @param {function(this:T, ?):?|{handleEvent:function(?):?}|null} listener
     *     Callback method, or an object with a handleEvent function.
     * @param {boolean=} opt_capt Whether to fire in capture phase (defaults to
     *     false).
     * @param {T=} opt_handler Element in whose scope to call the listener.
     * @template T
     */
    function listenWithWrapper<T>(src: goog.globalEventTarget|goog.events.Listenable, wrapper: goog.events.EventWrapper, listener: ((arg0: any) => any)|{handleEvent: (arg0: any) => any}|void, opt_capt?: boolean, opt_handler?: T): void;

    /**
     * Removes an event listener which was added with listen().
     *
     * @param {EventTarget|goog.events.Listenable} src The target to stop
     *     listening to events on.
     * @param {string|Array<string>|
     *     !goog.events.EventId<EVENTOBJ>|!Array<!goog.events.EventId<EVENTOBJ>>}
     *     type Event type or array of event types to unlisten to.
     * @param {function(?):?|{handleEvent:function(?):?}|null} listener The
     *     listener function to remove.
     * @param {boolean=} opt_capt In DOM-compliant browsers, this determines
     *     whether the listener is fired during the capture or bubble phase of the
     *     event.
     * @param {Object=} opt_handler Element in whose scope to call the listener.
     * @return {?boolean} indicating whether the listener was there to remove.
     * @template EVENTOBJ
     */
    function unlisten<EVENTOBJ>(src: goog.globalEventTarget|goog.events.Listenable, type: string|Array<string>|goog.events.EventId<EVENTOBJ>|Array<goog.events.EventId<EVENTOBJ>>, listener: ((arg0: any) => any)|{handleEvent: (arg0: any) => any}|void, opt_capt?: boolean, opt_handler?: Object): boolean;

    /**
     * Removes an event listener which was added with listen() by the key
     * returned by listen().
     *
     * @param {goog.events.Key} key The key returned by listen() for this
     *     event listener.
     * @return {boolean} indicating whether the listener was there to remove.
     */
    function unlistenByKey(key: goog.events.Key): boolean;

    /**
     * Removes an event listener which was added with listenWithWrapper().
     *
     * @param {EventTarget|goog.events.Listenable} src The target to stop
     *     listening to events on.
     * @param {goog.events.EventWrapper} wrapper Event wrapper to use.
     * @param {function(?):?|{handleEvent:function(?):?}|null} listener The
     *     listener function to remove.
     * @param {boolean=} opt_capt In DOM-compliant browsers, this determines
     *     whether the listener is fired during the capture or bubble phase of the
     *     event.
     * @param {Object=} opt_handler Element in whose scope to call the listener.
     */
    function unlistenWithWrapper(src: goog.globalEventTarget|goog.events.Listenable, wrapper: goog.events.EventWrapper, listener: ((arg0: any) => any)|{handleEvent: (arg0: any) => any}|void, opt_capt?: boolean, opt_handler?: Object): void;

    /**
     * Removes all listeners from an object. You can also optionally
     * remove listeners of a particular type.
     *
     * @param {Object|undefined} obj Object to remove listeners from. Must be an
     *     EventTarget or a goog.events.Listenable.
     * @param {string|!goog.events.EventId=} opt_type Type of event to remove.
     *     Default is all types.
     * @return {number} Number of listeners removed.
     */
    function removeAll(obj: Object|void, opt_type?: string|goog.events.EventId<any>): number;

    /**
     * Gets the listeners for a given object, type and capture phase.
     *
     * @param {Object} obj Object to get listeners for.
     * @param {string|!goog.events.EventId} type Event type.
     * @param {boolean} capture Capture phase?.
     * @return {Array<goog.events.Listener>} Array of listener objects.
     */
    function getListeners(obj: Object, type: string|goog.events.EventId<any>, capture: boolean): Array<goog.events.Listener>;

    /**
     * Gets the goog.events.Listener for the event or null if no such listener is
     * in use.
     *
     * @param {EventTarget|goog.events.Listenable} src The target from
     *     which to get listeners.
     * @param {?string|!goog.events.EventId<EVENTOBJ>} type The type of the event.
     * @param {function(EVENTOBJ):?|{handleEvent:function(?):?}|null} listener The
     *     listener function to get.
     * @param {boolean=} opt_capt In DOM-compliant browsers, this determines
     *                            whether the listener is fired during the
     *                            capture or bubble phase of the event.
     * @param {Object=} opt_handler Element in whose scope to call the listener.
     * @return {goog.events.ListenableKey} the found listener or null if not found.
     * @template EVENTOBJ
     */
    function getListener<EVENTOBJ>(src: goog.globalEventTarget|goog.events.Listenable, type: string|goog.events.EventId<EVENTOBJ>, listener: ((arg0: EVENTOBJ) => any)|{handleEvent: (arg0: any) => any}|void, opt_capt?: boolean, opt_handler?: Object): goog.events.ListenableKey;

    /**
     * Returns whether an event target has any active listeners matching the
     * specified signature. If either the type or capture parameters are
     * unspecified, the function will match on the remaining criteria.
     *
     * @param {EventTarget|goog.events.Listenable} obj Target to get
     *     listeners for.
     * @param {string|!goog.events.EventId=} opt_type Event type.
     * @param {boolean=} opt_capture Whether to check for capture or bubble-phase
     *     listeners.
     * @return {boolean} Whether an event target has one or more listeners matching
     *     the requested type and/or capture phase.
     */
    function hasListener(obj: goog.globalEventTarget|goog.events.Listenable, opt_type?: string|goog.events.EventId<any>, opt_capture?: boolean): boolean;

    /**
     * Provides a nice string showing the normalized event objects public members
     * @param {Object} e Event Object.
     * @return {string} String of the public members of the normalized event object.
     */
    function expose(e: Object): string;

    /**
     * Fires an object's listeners of a particular type and phase
     *
     * @param {Object} obj Object whose listeners to call.
     * @param {string|!goog.events.EventId} type Event type.
     * @param {boolean} capture Which event phase.
     * @param {Object} eventObject Event object to be passed to listener.
     * @return {boolean} True if all listeners returned true else false.
     */
    function fireListeners(obj: Object, type: string|goog.events.EventId<any>, capture: boolean, eventObject: Object): boolean;

    /**
     * Fires a listener with a set of arguments
     *
     * @param {goog.events.Listener} listener The listener object to call.
     * @param {Object} eventObject The event object to pass to the listener.
     * @return {boolean} Result of listener.
     */
    function fireListener(listener: goog.events.Listener, eventObject: Object): boolean;

    /**
     * Gets the total number of listeners currently in the system.
     * @return {number} Number of listeners.
     * @deprecated This returns estimated count, now that Closure no longer
     * stores a central listener registry. We still return an estimation
     * to keep existing listener-related tests passing. In the near future,
     * this function will be removed.
     */
    function getTotalListenerCount(): number;

    /**
     * Dispatches an event (or event like object) and calls all listeners
     * listening for events of this type. The type of the event is decided by the
     * type property on the event object.
     *
     * If any of the listeners returns false OR calls preventDefault then this
     * function will return false.  If one of the capture listeners calls
     * stopPropagation, then the bubble listeners won't fire.
     *
     * @param {goog.events.Listenable} src The event target.
     * @param {goog.events.EventLike} e Event object.
     * @return {boolean} If anyone called preventDefault on the event object (or
     *     if any of the handlers returns false) this will also return false.
     *     If there are no handlers, or if all handlers return true, this returns
     *     true.
     */
    function dispatchEvent(src: goog.events.Listenable, e: goog.events.EventLike): boolean;

    /**
     * Installs exception protection for the browser event entry point using the
     * given error handler.
     *
     * @param {goog.debug.ErrorHandler} errorHandler Error handler with which to
     *     protect the entry point.
     */
    function protectBrowserEventEntryPoint(errorHandler: goog.debug.ErrorHandler): void;

    /**
     * Handles an event and dispatches it to the correct listeners. This
     * function is a proxy for the real listener the user specified.
     *
     * @param {goog.events.Listener} listener The listener object.
     * @param {Event=} opt_evt Optional event object that gets passed in via the
     *     native event handlers.
     * @return {boolean} Result of the event handler.
     * @this {EventTarget} The object or Element that fired the event.
     * @private
     */
    function handleBrowserEvent_(listener: goog.events.Listener, opt_evt?: Event): boolean;

    /**
     * Creates a unique event id.
     *
     * @param {string} identifier The identifier.
     * @return {string} A unique identifier.
     * @idGenerator
     */
    function getUniqueId(identifier: string): string;

    /**
     * @param {Object|Function} listener The listener function or an
     *     object that contains handleEvent method.
     * @return {!Function} Either the original function or a function that
     *     calls obj.handleEvent. If the same listener is passed to this
     *     function more than once, the same function is guaranteed to be
     *     returned.
     */
    function wrapListener(listener: Object|Function): Function;
}
