import { WorkboxEvent } from './WorkboxEvent';

interface EventListenerShim {
    (evt: WorkboxEvent): void;
}

/**
 * A minimal `EventTarget` shim.
 * This is necessary because not all browsers support constructable
 * `EventTarget`, so using a real `EventTarget` will error.
 */
declare class EventTargetShim {
    addEventListener(type: string, listener: EventListenerShim): void;
    removeEventListener(type: string, listener: EventListenerShim): void;
    dispatchEvent(evt: WorkboxEvent): void;
}

export { EventTargetShim };
