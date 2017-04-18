declare module goog {
    function require(name: 'goog.events.Listenable'): typeof goog.events.Listenable;
    function require(name: 'goog.events.ListenableKey'): typeof goog.events.ListenableKey;
}

declare module goog.events {

    /**
     * A listenable interface. A listenable is an object with the ability
     * to dispatch/broadcast events to "event listeners" registered via
     * listen/listenOnce.
     *
     * The interface allows for an event propagation mechanism similar
     * to one offered by native browser event targets, such as
     * capture/bubble mechanism, stopping propagation, and preventing
     * default actions. Capture/bubble mechanism depends on the ancestor
     * tree constructed via {@code #getParentEventTarget}; this tree
     * must be directed acyclic graph. The meaning of default action(s)
     * in preventDefault is specific to a particular use case.
     *
     * Implementations that do not support capture/bubble or can not have
     * a parent listenable can simply not implement any ability to set the
     * parent listenable (and have {@code #getParentEventTarget} return
     * null).
     *
     * Implementation of this class can be used with or independently from
     * goog.events.
     *
     * Implementation must call {@code #addImplementation(implClass)}.
     *
     * @interface
     * @see goog.events
     * @see http://www.w3.org/TR/DOM-Level-2-Events/events.html
     */
    interface Listenable {
        
        /**
         * Adds an event listener. A listener can only be added once to an
         * object and if it is added again the key for the listener is
         * returned. Note that if the existing listener is a one-off listener
         * (registered via listenOnce), it will no longer be a one-off
         * listener after a call to listen().
         *
         * @param {string|!goog.events.EventId<EVENTOBJ>} type The event type id.
         * @param {function(this:SCOPE, EVENTOBJ):(boolean|undefined)} listener Callback
         *     method.
         * @param {boolean=} opt_useCapture Whether to fire in capture phase
         *     (defaults to false).
         * @param {SCOPE=} opt_listenerScope Object in whose scope to call the
         *     listener.
         * @return {goog.events.ListenableKey} Unique key for the listener.
         * @template SCOPE,EVENTOBJ
         */
        listen<SCOPE, EVENTOBJ>(type: string|goog.events.EventId<EVENTOBJ>, listener: (arg0: EVENTOBJ) => boolean|void, opt_useCapture?: boolean, opt_listenerScope?: SCOPE): goog.events.ListenableKey;
        
        /**
         * Adds an event listener that is removed automatically after the
         * listener fired once.
         *
         * If an existing listener already exists, listenOnce will do
         * nothing. In particular, if the listener was previously registered
         * via listen(), listenOnce() will not turn the listener into a
         * one-off listener. Similarly, if there is already an existing
         * one-off listener, listenOnce does not modify the listeners (it is
         * still a once listener).
         *
         * @param {string|!goog.events.EventId<EVENTOBJ>} type The event type id.
         * @param {function(this:SCOPE, EVENTOBJ):(boolean|undefined)} listener Callback
         *     method.
         * @param {boolean=} opt_useCapture Whether to fire in capture phase
         *     (defaults to false).
         * @param {SCOPE=} opt_listenerScope Object in whose scope to call the
         *     listener.
         * @return {goog.events.ListenableKey} Unique key for the listener.
         * @template SCOPE,EVENTOBJ
         */
        listenOnce<SCOPE, EVENTOBJ>(type: string|goog.events.EventId<EVENTOBJ>, listener: (arg0: EVENTOBJ) => boolean|void, opt_useCapture?: boolean, opt_listenerScope?: SCOPE): goog.events.ListenableKey;
        
        /**
         * Removes an event listener which was added with listen() or listenOnce().
         *
         * @param {string|!goog.events.EventId<EVENTOBJ>} type The event type id.
         * @param {function(this:SCOPE, EVENTOBJ):(boolean|undefined)} listener Callback
         *     method.
         * @param {boolean=} opt_useCapture Whether to fire in capture phase
         *     (defaults to false).
         * @param {SCOPE=} opt_listenerScope Object in whose scope to call
         *     the listener.
         * @return {boolean} Whether any listener was removed.
         * @template SCOPE,EVENTOBJ
         */
        unlisten<SCOPE, EVENTOBJ>(type: string|goog.events.EventId<EVENTOBJ>, listener: (arg0: EVENTOBJ) => boolean|void, opt_useCapture?: boolean, opt_listenerScope?: SCOPE): boolean;
        
        /**
         * Removes an event listener which was added with listen() by the key
         * returned by listen().
         *
         * @param {goog.events.ListenableKey} key The key returned by
         *     listen() or listenOnce().
         * @return {boolean} Whether any listener was removed.
         */
        unlistenByKey(key: goog.events.ListenableKey): boolean;
        
        /**
         * Dispatches an event (or event like object) and calls all listeners
         * listening for events of this type. The type of the event is decided by the
         * type property on the event object.
         *
         * If any of the listeners returns false OR calls preventDefault then this
         * function will return false.  If one of the capture listeners calls
         * stopPropagation, then the bubble listeners won't fire.
         *
         * @param {goog.events.EventLike} e Event object.
         * @return {boolean} If anyone called preventDefault on the event object (or
         *     if any of the listeners returns false) this will also return false.
         */
        dispatchEvent(e: goog.events.EventLike): boolean;
        
        /**
         * Removes all listeners from this listenable. If type is specified,
         * it will only remove listeners of the particular type. otherwise all
         * registered listeners will be removed.
         *
         * @param {string=} opt_type Type of event to remove, default is to
         *     remove all types.
         * @return {number} Number of listeners removed.
         */
        removeAllListeners(opt_type?: string): number;
        
        /**
         * Returns the parent of this event target to use for capture/bubble
         * mechanism.
         *
         * NOTE(chrishenry): The name reflects the original implementation of
         * custom event target ({@code goog.events.EventTarget}). We decided
         * that changing the name is not worth it.
         *
         * @return {goog.events.Listenable} The parent EventTarget or null if
         *     there is no parent.
         */
        getParentEventTarget(): goog.events.Listenable;
        
        /**
         * Fires all registered listeners in this listenable for the given
         * type and capture mode, passing them the given eventObject. This
         * does not perform actual capture/bubble. Only implementors of the
         * interface should be using this.
         *
         * @param {string|!goog.events.EventId<EVENTOBJ>} type The type of the
         *     listeners to fire.
         * @param {boolean} capture The capture mode of the listeners to fire.
         * @param {EVENTOBJ} eventObject The event object to fire.
         * @return {boolean} Whether all listeners succeeded without
         *     attempting to prevent default behavior. If any listener returns
         *     false or called goog.events.Event#preventDefault, this returns
         *     false.
         * @template EVENTOBJ
         */
        fireListeners<EVENTOBJ>(type: string|goog.events.EventId<EVENTOBJ>, capture: boolean, eventObject: EVENTOBJ): boolean;
        
        /**
         * Gets all listeners in this listenable for the given type and
         * capture mode.
         *
         * @param {string|!goog.events.EventId} type The type of the listeners to fire.
         * @param {boolean} capture The capture mode of the listeners to fire.
         * @return {!Array<goog.events.ListenableKey>} An array of registered
         *     listeners.
         * @template EVENTOBJ
         */
        getListeners<EVENTOBJ>(type: string|goog.events.EventId<any>, capture: boolean): Array<goog.events.ListenableKey>;
        
        /**
         * Gets the goog.events.ListenableKey for the event or null if no such
         * listener is in use.
         *
         * @param {string|!goog.events.EventId<EVENTOBJ>} type The name of the event
         *     without the 'on' prefix.
         * @param {function(this:SCOPE, EVENTOBJ):(boolean|undefined)} listener The
         *     listener function to get.
         * @param {boolean} capture Whether the listener is a capturing listener.
         * @param {SCOPE=} opt_listenerScope Object in whose scope to call the
         *     listener.
         * @return {goog.events.ListenableKey} the found listener or null if not found.
         * @template SCOPE,EVENTOBJ
         */
        getListener<SCOPE, EVENTOBJ>(type: string|goog.events.EventId<EVENTOBJ>, listener: (arg0: EVENTOBJ) => boolean|void, capture: boolean, opt_listenerScope?: SCOPE): goog.events.ListenableKey;
        
        /**
         * Whether there is any active listeners matching the specified
         * signature. If either the type or capture parameters are
         * unspecified, the function will match on the remaining criteria.
         *
         * @param {string|!goog.events.EventId<EVENTOBJ>=} opt_type Event type.
         * @param {boolean=} opt_capture Whether to check for capture or bubble
         *     listeners.
         * @return {boolean} Whether there is any active listeners matching
         *     the requested type and/or capture phase.
         * @template EVENTOBJ
         */
        hasListener<EVENTOBJ>(opt_type?: string|goog.events.EventId<EVENTOBJ>, opt_capture?: boolean): boolean;
    }

    /**
     * An interface that describes a single registered listener.
     * @interface
     */
    interface ListenableKey {
        
        /**
         * The source event target.
         * @type {!(Object|goog.events.Listenable|goog.events.EventTarget)}
         */
        src: Object|goog.events.Listenable|goog.events.EventTarget;
        
        /**
         * The event type the listener is listening to.
         * @type {string}
         */
        type: string;
        
        /**
         * The listener function.
         * @type {function(?):?|{handleEvent:function(?):?}|null}
         */
        listener: ((arg0: any) => any)|{handleEvent: (arg0: any) => any}|void;
        
        /**
         * Whether the listener works on capture phase.
         * @type {boolean}
         */
        capture: boolean;
        
        /**
         * The 'this' object for the listener function's scope.
         * @type {Object}
         */
        handler: Object;
        
        /**
         * A globally unique number to identify the key.
         * @type {number}
         */
        key: number;
    }
}

declare module goog.events.Listenable {

    /**
     * An expando property to indicate that an object implements
     * goog.events.Listenable.
     *
     * See addImplementation/isImplementedBy.
     *
     * @type {string}
     * @const
     */
    var IMPLEMENTED_BY_PROP: string;

    /**
     * Marks a given class (constructor) as an implementation of
     * Listenable, do that we can query that fact at runtime. The class
     * must have already implemented the interface.
     * @param {!Function} cls The class constructor. The corresponding
     *     class must have already implemented the interface.
     */
    function addImplementation(cls: Function): void;

    /**
     * @param {Object} obj The object to check.
     * @return {boolean} Whether a given instance implements Listenable. The
     *     class/superclass of the instance must call addImplementation.
     */
    function isImplementedBy(obj: Object): boolean;
}

declare module goog.events.ListenableKey {

    /**
     * Reserves a key to be used for ListenableKey#key field.
     * @return {number} A number to be used to fill ListenableKey#key
     *     field.
     */
    function reserveKey(): number;
}
