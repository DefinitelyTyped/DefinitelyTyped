import { Workbox } from '../Workbox';

/**
 * A minimal `Event` subclass shim.
 * This doesn't *actually* subclass `Event` because not all browsers support
 * constructable `EventTarget`, and using a real `Event` will error.
 */
interface WorkboxEvent {
    /**
     * The original event.
     */
    readonly originalEvent: Event;

    /**
     * The event type.
     */
    readonly type: string;

    /**
     * The `Workbox` instance.
     */
    readonly target: Workbox;
}

export { WorkboxEvent };
