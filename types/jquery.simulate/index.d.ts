/// <reference types="jquery"/>

interface JQuery {
    /**
     * Simulates an event.
     *
     * @param type
     *            the type of event (eg: "mousemove", "keydown", etc...)
     * @param options
     *            the options for the event (these are event-specific)
     */
    simulate(type: string, options?: any): void;
}
