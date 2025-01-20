import { Event as GuacamoleEvent } from "./Event";

export {};

/**
 * Provides cross-browser multi-touch events for a given element. The events of
 * the given element are automatically populated with handlers that translate
 * touch events into a non-browser-specific event provided by the
 * Guacamole.Touch instance.
 */
export class Touch extends GuacamoleEvent.Target {
    /**
     * The set of all active touches, stored by their unique identifiers.
     */
    touches: Record<number, Touch.State>;

    /**
     * The number of active touches currently stored within
     * {@link Touch#touches touches}.
     */
    activeTouches: number;

    /**
     * @param element The Element to use to provide touch events.
     */
    constructor(element: HTMLElement);
}

export namespace Touch {
    export {};

    /**
     * The current state of a touch contact.
     */
    export class State {
        /**
         * An arbitrary integer ID which uniquely identifies this contact relative
         * to other active contacts.
         *
         * @default 0
         */
        id: number;

        /**
         * The Y radius of the ellipse covering the general area of the touch
         * contact, in pixels.
         *
         * @default 0
         */
        radiusX: number;

        /**
         * The X radius of the ellipse covering the general area of the touch
         * contact, in pixels.
         *
         * @default 0
         */
        radiusY: number;

        /**
         * The rough angle of clockwise rotation of the general area of the touch
         * contact, in degrees.
         *
         * @default 0.0
         */
        angle: number;

        /**
         * The relative force exerted by the touch contact, where 0 is no force
         * (the touch has been lifted) and 1 is maximum force (the maximum amount
         * of force representable by the device).
         *
         * @default 1.0
         */
        force: number;

        /**
         * @param [template={}] The object whose properties should be copied within the new
         * Guacamole.Touch.State.
         */
        constructor(template?: State);
    }

    /**
     * An event which represents a change in state of a single touch contact,
     * including the creation or removal of that contact. If multiple contacts are
     * involved in a touch interaction, each contact will be associated with its
     * own event.
     */
    export class Event extends GuacamoleEvent.DOMEvent {
        /**
         * @param type
         *     The name of the touch event type. Possible values are "touchstart",
         *     "touchmove", and "touchend".
         *
         * @param event
         *     The DOM touch event that produced this Guacamole.Touch.Event.
         *
         * @param state
         *     The state of the touch contact associated with this event.
         */
        constructor(type: string, event: TouchEvent, state: State);

        /**
         * The state of the touch contact associated with this event.
         */
        state: State;
    }
}
