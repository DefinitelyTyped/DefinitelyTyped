declare module goog.events {

    /**
     * Interface for event wrappers.
     * @interface
     */
    interface EventWrapper {
        
        /**
         * Adds an event listener using the wrapper on a DOM Node or an object that has
         * implemented {@link goog.events.EventTarget}. A listener can only be added
         * once to an object.
         *
         * @param {goog.events.ListenableType} src The node to listen to events on.
         * @param {function(?):?|{handleEvent:function(?):?}|null} listener Callback
         *     method, or an object with a handleEvent function.
         * @param {boolean=} opt_capt Whether to fire in capture phase (defaults to
         *     false).
         * @param {Object=} opt_scope Element in whose scope to call the listener.
         * @param {goog.events.EventHandler=} opt_eventHandler Event handler to add
         *     listener to.
         */
        listen(src: goog.events.ListenableType, listener: ((arg0: any) => any)|{handleEvent: (arg0: any) => any}|void, opt_capt?: boolean, opt_scope?: Object, opt_eventHandler?: goog.events.EventHandler<any>): void;
        
        /**
         * Removes an event listener added using goog.events.EventWrapper.listen.
         *
         * @param {goog.events.ListenableType} src The node to remove listener from.
         * @param {function(?):?|{handleEvent:function(?):?}|null} listener Callback
         *     method, or an object with a handleEvent function.
         * @param {boolean=} opt_capt Whether to fire in capture phase (defaults to
         *     false).
         * @param {Object=} opt_scope Element in whose scope to call the listener.
         * @param {goog.events.EventHandler=} opt_eventHandler Event handler to remove
         *     listener from.
         */
        unlisten(src: goog.events.ListenableType, listener: ((arg0: any) => any)|{handleEvent: (arg0: any) => any}|void, opt_capt?: boolean, opt_scope?: Object, opt_eventHandler?: goog.events.EventHandler<any>): void;
    }
}
