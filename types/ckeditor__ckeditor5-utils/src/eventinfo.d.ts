import { Emitter } from './emittermixin';

/**
 * The event object passed to event callbacks. It is used to provide information about the event as well as a tool to
 * manipulate it.
 */
export default class EventInfo<S extends Emitter | Node | Window = Emitter, N extends string = string> {
    constructor(source: S, name: N);
    /**
     * The object that fired the event.
     *
     */
    readonly source: S;
    /**
     * The event name.
     *
     */
    readonly name: N;
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

    /**
     * The value which will be returned by {@link module:utils/emittermixin~EmitterMixin#fire}.
     *
     * It's `undefined` by default and can be changed by an event listener:
     *
     *    dataController.fire( 'getSelectedContent', ( evt ) => {
     *      // This listener will make `dataController.fire( 'getSelectedContent' )`
     *      // always return an empty DocumentFragment.
     *      evt.return = new DocumentFragment();
     *
     *      // Make sure no other listeners are executed.
     *      evt.stop();
     *    } );
     */
    return?: unknown | undefined;
}
