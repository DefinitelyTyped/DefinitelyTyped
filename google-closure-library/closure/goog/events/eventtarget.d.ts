declare module goog {
    function require(name: 'goog.events.EventTarget'): typeof goog.events.EventTarget;
}

declare module goog.events {

    /**
     * An implementation of {@code goog.events.Listenable} with full W3C
     * EventTarget-like support (capture/bubble mechanism, stopping event
     * propagation, preventing default actions).
     *
     * You may subclass this class to turn your class into a Listenable.
     *
     * Unless propagation is stopped, an event dispatched by an
     * EventTarget will bubble to the parent returned by
     * {@code getParentEventTarget}. To set the parent, call
     * {@code setParentEventTarget}. Subclasses that don't support
     * changing the parent can override the setter to throw an error.
     *
     * Example usage:
     * <pre>
     *   var source = new goog.events.EventTarget();
     *   function handleEvent(e) {
     *     alert('Type: ' + e.type + '; Target: ' + e.target);
     *   }
     *   source.listen('foo', handleEvent);
     *   // Or: goog.events.listen(source, 'foo', handleEvent);
     *   ...
     *   source.dispatchEvent('foo');  // will call handleEvent
     *   ...
     *   source.unlisten('foo', handleEvent);
     *   // Or: goog.events.unlisten(source, 'foo', handleEvent);
     * </pre>
     *
     * @constructor
     * @extends {goog.Disposable}
     * @implements {goog.events.Listenable}
     */
    class EventTarget extends goog.Disposable {
        constructor();
        
        /**
         * Returns the parent of this event target to use for bubbling.
         *
         * @return {goog.events.EventTarget} The parent EventTarget or null if
         *     there is no parent.
         * @override
         */
        getParentEventTarget(): goog.events.EventTarget;
        
        /**
         * Sets the parent of this event target to use for capture/bubble
         * mechanism.
         * @param {goog.events.EventTarget} parent Parent listenable (null if none).
         */
        setParentEventTarget(parent: goog.events.EventTarget): void;
        
        /**
         * Adds an event listener to the event target. The same handler can only be
         * added once per the type. Even if you add the same handler multiple times
         * using the same type then it will only be called once when the event is
         * dispatched.
         *
         * @param {string} type The type of the event to listen for.
         * @param {function(?):?|{handleEvent:function(?):?}|null} handler The function
         *     to handle the event. The handler can also be an object that implements
         *     the handleEvent method which takes the event object as argument.
         * @param {boolean=} opt_capture In DOM-compliant browsers, this determines
         *     whether the listener is fired during the capture or bubble phase
         *     of the event.
         * @param {Object=} opt_handlerScope Object in whose scope to call
         *     the listener.
         * @deprecated Use {@code #listen} instead, when possible. Otherwise, use
         *     {@code goog.events.listen} if you are passing Object
         *     (instead of Function) as handler.
         */
        addEventListener(type: string, handler: ((arg0: any) => any)|{handleEvent: (arg0: any) => any}|void, opt_capture?: boolean, opt_handlerScope?: Object): void;
        
        /**
         * Removes an event listener from the event target. The handler must be the
         * same object as the one added. If the handler has not been added then
         * nothing is done.
         *
         * @param {string} type The type of the event to listen for.
         * @param {function(?):?|{handleEvent:function(?):?}|null} handler The function
         *     to handle the event. The handler can also be an object that implements
         *     the handleEvent method which takes the event object as argument.
         * @param {boolean=} opt_capture In DOM-compliant browsers, this determines
         *     whether the listener is fired during the capture or bubble phase
         *     of the event.
         * @param {Object=} opt_handlerScope Object in whose scope to call
         *     the listener.
         * @deprecated Use {@code #unlisten} instead, when possible. Otherwise, use
         *     {@code goog.events.unlisten} if you are passing Object
         *     (instead of Function) as handler.
         */
        removeEventListener(type: string, handler: ((arg0: any) => any)|{handleEvent: (arg0: any) => any}|void, opt_capture?: boolean, opt_handlerScope?: Object): void;
        
        /**
         * Sets the target to be used for {@code event.target} when firing
         * event. Mainly used for testing. For example, see
         * {@code goog.testing.events.mixinListenable}.
         * @param {!Object} target The target.
         */
        setTargetForTesting(target: Object): void;
    }
}
