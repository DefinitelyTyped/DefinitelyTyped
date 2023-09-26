type Listener = (...args: any[]) => void;

/**
 * A Node.js EventEmitter instance or an `eventemitter3` instance.
 */
interface EventEmitter {
    on(event: string | symbol, fn: Listener): void;
    once(event: string | symbol, fn: Listener): void;
    removeListener(event: string | symbol, fn: Listener): void;
    listeners(event: string | symbol): any[];
    eventNames?(): Array<string | symbol>;
}

/**
 * Ultron is high-intelligence robot. It gathers intelligence so it can start improving
 * upon his rudimentary design. It will learn from your EventEmitting patterns
 * and exterminate them.
 */
interface Ultron {
    /**
     * Register a new EventListener for the given event.
     *
     * @param event Name of the event.
     * @param fn Callback function.
     * @param context The context of the function.
     */
    on(event: string | symbol, fn: Listener, context?: any): this;

    /**
     * Add an EventListener that's only called once.
     *
     * @param event Name of the event.
     * @param fn Callback function.
     * @param context The context of the function.
     */
    once(event: string | symbol, fn: Listener, context?: any): this;

    /**
     * Remove the listeners we assigned for the given event(s).
     */
    remove(...names: Array<string | symbol>): this;

    /**
     * Destroy the Ultron instance, remove all listeners and release all references.
     */
    destroy(): boolean;
}

declare const Ultron: {
    /**
     * @param ee EventEmitter instance we need to wrap.
     */
    (ee: EventEmitter): Ultron;

    /**
     * @param ee EventEmitter instance we need to wrap.
     */
    new(ee: EventEmitter): Ultron;
};

declare namespace Ultron {
    export { EventEmitter, Listener };
}

export = Ultron;
