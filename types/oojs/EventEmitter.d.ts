declare namespace OO {
    interface EventEmitter {
        /**
         * Add a listener to events of a specific event.
         *
         * The listener can be a function or the string name of a method; if the latter, then the
         * name lookup happens at the time the listener is called.
         *
         * @param event Type of event to listen to
         * @param method Function or method name to call when event occurs
         * @param args Arguments to pass to listener, will be prepended to emitted arguments
         * @param context Context object for function or method call
         * @throws {Error} Listener argument is not a function or a valid method name
         */
        on<C = null>(event: string, method: EventHandler<C>, args?: any[], context?: C): this;

        /**
         * Add a one-time listener to a specific event.
         *
         * @param event Type of event to listen to
         * @param listener Listener to call when event occurs
         */
        once(event: string, listener: (this: null, ...args: any[]) => void): this;

        /**
         * Remove a specific listener from a specific event.
         *
         * @param event Type of event to remove listener from
         * @param method Listener to remove. Must be in the same form as was passed
         * to "{@link on}". Omit to remove all listeners.
         * @param context Context object function or method call
         * @throws {Error} Listener argument is not a function or a valid method name
         */
        off<C = null>(event: string, method?: EventHandler<C>, context?: C): this;

        /**
         * Emit an event.
         *
         * All listeners for the event will be called synchronously, in an
         * unspecified order. If any listeners throw an exception, this won't
         * disrupt the calls to the remaining listeners; however, the exception
         * won't be thrown until the next tick.
         *
         * Listeners should avoid mutating the emitting object, as this is
         * something of an anti-pattern which can easily result in
         * hard-to-understand code with hidden side-effects and dependencies.
         *
         * @param event Type of event
         * @param args Arguments passed to the event handler
         * @return Whether the event was handled by at least one listener
         */
        emit(event: string, ...args: any[]): boolean;

        /**
         * Emit an event, propagating the first exception some listener throws
         *
         * All listeners for the event will be called synchronously, in an
         * unspecified order. If any listener throws an exception, this won't
         * disrupt the calls to the remaining listeners. The first exception
         * thrown will be propagated back to the caller; any others won't be
         * thrown until the next tick.
         *
         * Listeners should avoid mutating the emitting object, as this is
         * something of an anti-pattern which can easily result in
         * hard-to-understand code with hidden side-effects and dependencies.
         *
         * @param event Type of event
         * @param args Arguments passed to the event handler
         * @return Whether the event was handled by at least one listener
         */
        emitThrow(event: string, ...args: any[]): boolean;

        /**
         * Connect event handlers to an object.
         *
         * @param context Object to call methods on when events occur
         * @param methods
         *  List of event bindings keyed by event name containing either method names, functions or
         *  arrays containing method name or function followed by a list of arguments to be passed to
         *  callback before emitted arguments.
         */
        connect<C>(context: C, methods: Record<string, EventHandler<C> | [EventHandler<C>, ...any[]]>): this;

        /**
         * Disconnect event handlers from an object.
         *
         * @param context Object to disconnect methods from
         * @param methods
         *  List of event bindings keyed by event name. Values can be either method names, functions or
         *  arrays containing a method name.
         *  NOTE: To allow matching call sites with {@link connect()}, array values are allowed to contain the
         *  parameters as well, but only the method name is used to find bindings. It is discouraged to
         *  have multiple bindings for the same event to the same listener, but if used (and only the
         *  parameters vary), disconnecting one variation of (event name, event listener, parameters)
         *  will disconnect other variations as well.
         */
        disconnect<C>(context: C, methods?: Record<string, EventHandler<C> | [EventHandler<C>, ...any[]]>): this;
    }

    interface EventEmitterConstructor {
        new(): EventEmitter;
        prototype: EventEmitter;
        static: {};
    }

    const EventEmitter: EventEmitterConstructor;
}
