// Type definitions for EventEmitter2 v2.2.0
// Project: https://github.com/asyncly/EventEmitter2
// Definitions by: ryiwamoto <https://github.com/ryiwamoto/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface EventEmitter2Configuration {
    /**
     * use wildcards
     */
    wildcard?: boolean;

    /**
     * the delimiter used to segment namespaces, defaults to `.`.
     */
    delimiter?: string;

    /**
     * if you want to emit the newListener event set to true.
     */
    newListener?: boolean;

    /**
     * max listeners that can be assigned to an event, default 10.
     */
    maxListeners?: number;

    /**
     * show event name in memory leak message when more than maximum amount of listeners is assigned, default false
     */
    verboseMemoryLeak?: boolean;
}

declare class EventEmitter2 {
    /**
     * @param conf
     */
    constructor(conf?: EventEmitter2Configuration);

    /**
     * Adds a listener to the end of the listeners array for the specified event.
     * @param event
     * @param listener
     */
    addListener(event: string, listener: Function): EventEmitter2;

    /**
     * Adds a listener to the end of the listeners array for the specified event.
     * @param event
     * @param listener
     */
    on(event: string | string[], listener: Function): EventEmitter2;

    /**
     * Adds a listener that will be fired when any event is emitted.
     * @param listener
     */
    onAny(listener: Function): EventEmitter2;

    /**
     * Removes the listener that will be fired when any event is emitted.
     * @param listener
     */
    offAny(listener?: Function): EventEmitter2;

    /**
     * Adds a one time listener for the event.
     * The listener is invoked only the first time the event is fired, after which it is removed.
     * @param event
     * @param listener
     */
    once(event: string, listener: Function): EventEmitter2;

    /**
     * Adds a listener that will execute n times for the event before being removed.
     * The listener is invoked only the first n times the event is fired, after which it is removed.
     * @param event
     * @param timesToListen
     * @param listener
     */
    many(event: string, timesToListen: number, listener: Function): EventEmitter2;

    /**
     * Remove a listener from the listener array for the specified event.
     * Caution: changes array indices in the listener array behind the listener.
     * @param event
     * @param listener
     */
    removeListener(event: string, listener: Function): EventEmitter2;

    /**
     * Remove a listener from the listener array for the specified event.
     * Caution: changes array indices in the listener array behind the listener.
     * @param event
     * @param listener
     */
    off(event: string, listener: Function): EventEmitter2;

    /**
     * Removes all listeners, or those of the specified event.
     * @param event
     */
    removeAllListeners(event?: string): EventEmitter2;

    /**
     * Removes all listeners, or those of the specified event.
     * @param events
     */
    removeAllListeners(events: string[]): EventEmitter2;

    /**
     * By default EventEmitters will print a warning if more than 10 listeners are added to it.
     * This is a useful default which helps finding memory leaks.
     * Obviously not all Emitters should be limited to 10. This function allows that to be increased.
     * Set to zero for unlimited.
     * @param n
     */
    setMaxListeners(n: number): void;

    /**
     * Returns an array of listeners for the specified event. This array can be manipulated, e.g. to remove listeners.
     * @param event
     */
    listeners(event: string): Function[];

    /**
     * Returns an array of listeners that are listening for any event that is specified.
     * This array can be manipulated, e.g. to remove listeners.
     */
    listenersAny(): Function[];

    /**
     * Execute each of the listeners that may be listening for the specified event name in order with the list of arguments.
     * @param event
     * @param args
     */
    emit(event: string | string[], ...args: any[]): boolean;

    /**
     * Execute each of the listeners that may be listening for the specified event name in order with the list of arguments.
     * @param event
     */
    emit(event: string[]): boolean;
}

declare module "eventemitter2" {
    export class EventEmitter2 {
        /**
         * @param conf
         */
        constructor(conf?: EventEmitter2Configuration);

        /**
         * Adds a listener to the end of the listeners array for the specified event.
         * @param event
         * @param listener
         */
        addListener(event: string, listener: Function): EventEmitter2;

        /**
         * Adds a listener to the end of the listeners array for the specified event.
         * @param event
         * @param listener
         */
        on(event: string | string[], listener: Function): EventEmitter2;

        /**
         * Adds a listener that will be fired when any event is emitted.
         * @param listener
         */
        onAny(listener: Function): EventEmitter2;

        /**
         * Removes the listener that will be fired when any event is emitted.
         * @param listener
         */
        offAny(listener: Function): EventEmitter2;

        /**
         * Adds a one time listener for the event.
         * The listener is invoked only the first time the event is fired, after which it is removed.
         * @param event
         * @param listener
         */
        once(event: string, listener: Function): EventEmitter2;

        /**
         * Adds a listener that will execute n times for the event before being removed.
         * The listener is invoked only the first n times the event is fired, after which it is removed.
         * @param event
         * @param timesToListen
         * @param listener
         */
        many(event: string, timesToListen: number, listener: Function): EventEmitter2;

        /**
         * Remove a listener from the listener array for the specified event.
         * Caution: changes array indices in the listener array behind the listener.
         * @param event
         * @param listener
         */
        removeListener(event: string, listener: Function): EventEmitter2;

        /**
         * Remove a listener from the listener array for the specified event.
         * Caution: changes array indices in the listener array behind the listener.
         * @param event
         * @param listener
         */
        off(event: string, listener: Function): EventEmitter2;

        /**
         * Removes all listeners, or those of the specified event.
         * @param event
         */
        removeAllListeners(event?: string): EventEmitter2;

        /**
         * Removes all listeners, or those of the specified event.
         * @param events
         */
        removeAllListeners(events: string[]): EventEmitter2;

        /**
         * By default EventEmitters will print a warning if more than 10 listeners are added to it.
         * This is a useful default which helps finding memory leaks.
         * Obviously not all Emitters should be limited to 10. This function allows that to be increased.
         * Set to zero for unlimited.
         * @param n
         */
        setMaxListeners(n: number): void;

        /**
         * Returns an array of listeners for the specified event. This array can be manipulated, e.g. to remove listeners.
         * @param event
         */
        listeners(event: string): Function[];

        /**
         * Returns an array of listeners that are listening for any event that is specified.
         * This array can be manipulated, e.g. to remove listeners.
         */
        listenersAny(): Function[];

        /**
         * Execute each of the listeners that may be listening for the specified event name in order with the list of arguments.
         * @param event
         * @param args
         */
        emit(event: string | string[], ...args: any[]): boolean;

        /**
         * Execute each of the listeners that may be listening for the specified event name in order with the list of arguments.
         * @param event
         */
        emit(event: string[]): boolean;
    }
}

