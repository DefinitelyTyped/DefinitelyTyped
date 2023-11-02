export {};

/**
 * An arbitrary event, emitted by a {@link Event.Target}. This object
 * should normally serve as the base class for a different object that is more
 * specific to the event type.
 */
export class Event {
    /**
     * The unique name of this event type.
     */
    type: string;

    /**
     * @param type The unique name of this event type.
     */
    constructor(type: string);
}

export namespace Event {
    export {};

    /**
     * A {@link Event} that may relate to one or more DOM events.
     * Continued propagation and default behavior of the related DOM events may be
     * prevented with {@link Event.DOMEvent#stopPropagation stopPropagation()}
     * and {@link Event.DOMEvent#preventDefault preventDefault()}
     * respectively.
     */
    export class DOMEvent extends Event {
        /**
         * @param type The unique name of this event type.
         *
         * @param [events=[]] The DOM events that are related to this event, if any. Future calls to
         * {@link Event.DOMEvent#preventDefault preventDefault()} and
         * {@link Event.DOMEvent#stopPropagation stopPropagation()} will affect these events.
         */
        constructor(type: string, events?: Event | Event[]);

        /**
         * Requests that the default behavior of related DOM events be prevented.
         * Whether this request will be honored by the browser depends on the
         * nature of those events and the timing of the request.
         */
        preventDefault(): void;

        /**
         * Stops further propagation of related events through the DOM. Only events
         * that are directly related to this event will be stopped.
         */
        stopPropagation(): void;
    }

    /**
     * A callback function which handles an event dispatched by an event
     * target.
     *
     * @param event The event that was dispatched.
     *
     * @param target The object that dispatched the event.
     */
    type TargetListener = (event: Event, target: Target) => void;

    /**
     * An object which can dispatch {@link Event} objects. Listeners
     * registered with {@link Event.Target#on on()} will automatically
     * be invoked based on the type of {@link Event} passed to
     * {@link Event.Target#dispatch dispatch()}. It is normally
     * subclasses of Event.Target that will dispatch events, and usages
     * of those subclasses that will catch dispatched events with on().
     */
    export class Target {
        constructor();

        /**
         * Registers a listener for events having the given type, as dictated by
         * the {@link Event#type type} property of {@link Event}
         * provided to {@link Event.Target#dispatch dispatch()}.
         *
         * @param type The unique name of this event type.
         *
         * @param listener The function to invoke when an event having the given type is dispatched.
         * The {@link Event} object provided to {@link Event.Target#dispatch dispatch()} will be passed to
         * this function, along with the dispatching Event.Target.
         */
        on(type: string, listener: TargetListener): void;

        /**
         * Registers a listener for events having the given types, as dictated by
         * the {@link Event#type type} property of {@link Event}
         * provided to {@link Event.Target#dispatch dispatch()}.
         * <p>
         * Invoking this function is equivalent to manually invoking
         * {@link Event.Target#on on()} for each of the provided types.
         *
         * @param types The unique names of the event types to associate with the given
         * listener.
         *
         * @param listener The function to invoke when an event having any of the given types is dispatched.
         * The {@link Event} object provided to {@link Event.Target#dispatch dispatch()} will be passed to
         * this function, along with the dispatching Event.Target.
         */
        onEach(types: string[], listener: TargetListener): void;
    }
}
