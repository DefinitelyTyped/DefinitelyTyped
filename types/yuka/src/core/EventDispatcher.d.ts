export interface EventInterface {
    type: string;
}

export interface DispatchedEventInterface extends EventInterface {
    target: EventDispatcher;
}

export type ListenerFunction = (event: DispatchedEventInterface) => void;

/**
 * Other classes can inherit from this class in order to provide an event based API. Useful for controls development.
 */
export class EventDispatcher {
    /**
     * Constructs a new event dispatcher.
     */
    constructor();

    /**
     * Adds an event listener for the given event type.
     *
     * @param type - The event type.
     * @param listener - The event listener to add.
     */
    addEventListener(type: string, listener: ListenerFunction): void;

    /**
     * Removes the given event listener for the given event type.
     *
     * @param type - The event type.
     * @param listener - The event listener to remove.
     */
    removeEventListener(type: string, listener: ListenerFunction): void;

    /**
     * Returns true if the given event listener is set for the given event type.
     *
     * @param type - The event type.
     * @param listener - The event listener to test.
     * @return Whether the given event listener is set for the given event type or not.
     */
    hasEventListener(type: string, listener: ListenerFunction): boolean;

    /**
     * Dispatches an event to all respective event listeners.
     *
     * @param event - The event object.
     */
    dispatchEvent(event: EventInterface): void;
}
