/*!
 * elasticlunr.EventEmitter
 * Copyright (C) @YEAR Oliver Nightingale
 * Copyright (C) @YEAR Wei Song
 */
export declare class EventEmitter {
    events: {
        [eventName: string]: Function[];
    };
    /**
     * elasticlunr.EventEmitter is an event emitter for elasticlunr.
     * It manages adding and removing event handlers and triggering events and their handlers.
     *
     * Each event could has multiple corresponding functions,
     * these functions will be called as the sequence that they are added into the event.
     *
     * @constructor
     */
    constructor();
    /**
     * Binds a handler function to a specific event(s).
     *
     * Can bind a single function to many different events in one call.
     *
     * @param {String} [eventName] The name(s) of events to bind this function to.
     * @param {Function} fn The function to call when an event is fired.
     * @memberOf EventEmitter
     */
    addListener(): void;
    /**
     * Removes a handler function from a specific event.
     *
     * @param {String} eventName The name of the event to remove this function from.
     * @param {Function} fn The function to remove from an event.
     * @memberOf EventEmitter
     */
    removeListener(name: string, fn: Function): void;
    /**
     * Call all functions that bounded to the given event.
     *
     * Additional data can be passed to the event handler as arguments to `emit`
     * after the event name.
     *
     * @param {String} eventName The name of the event to emit.
     * @memberOf EventEmitter
     */
    emit(name: string): void;
    /**
     * Checks whether a handler has ever been stored against an event.
     *
     * @param {String} eventName The name of the event to check.
     * @private
     * @memberOf EventEmitter
     */
    hasHandler(name: string): boolean;
}
