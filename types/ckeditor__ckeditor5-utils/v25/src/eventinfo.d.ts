/**
 * The event object passed to event callbacks. It is used to provide information about the event as well as a tool to
 * manipulate it.
 */
export default class EventInfo<T> {
    constructor(source: T, name: string);
    /**
     * The object that fired the event.
     *
     */
    readonly source: T;
    /**
     * The event name.
     *
     */
    readonly name: string;
    /**
     * Path this event has followed. See {@link module:utils/emittermixin~EmitterMixin#delegate}.
     *
     */
    readonly path: object[];
    /**
     * Stops the event emitter to call further callbacks for this event interaction.
     *
     */
    stop: {
        (): void;
        called: boolean;
    };
    /**
     * Removes the current callback from future interactions of this event.
     *
     */
    off: {
        (): void;
        called: boolean;
    };
}
