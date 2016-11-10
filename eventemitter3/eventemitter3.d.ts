// Type definitions for EventEmitter3 1.2.0
// Project: https://github.com/primus/eventemitter3
// Definitions by: Yuichi Murata <https://github.com/mrk21>, Leon Yu <https://github.com/leonyu>, Boriss Nazarovs <https://github.com/Stubb0rn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace EventEmitter3 {
    /**
     * Minimal EventEmitter interface that is molded against the Node.js
     * EventEmitter interface.
     */
    class EventEmitter {
        constructor();

        /**
         * Return an array listing the events for which the emitter has registered listeners.
         *
         * @returns {(string|symbol)[]}
         */
        eventNames(): (string|symbol)[];

        /**
         * Return the listeners registered for a given event.
         *
         * @param {(string|symbol)} event The event name.
         * @returns {Function[]}
         */
        listeners(event: string|symbol): Function[];

        /**
         * Check if there listeners for a given event.
         * If `exists` argument is not `true` lists listeners.
         *
         * @param {(string|symbol)} event The event name.
         * @param {boolean} exists Only check if there are listeners.
         * @returns {boolean}
         */
        listeners(event: string|symbol, exists: boolean): boolean;

        /**
         * Calls each of the listeners registered for a given event.
         *
         * @param {(string|symbol)} event The event name.
         * @param {...*} args Arguments that are passed to registered listeners
         * @returns {boolean} `true` if the event had listeners, else `false`.
         */
        emit(event: string|symbol, ...args: any[]): boolean;

        /**
         * Add a listener for a given event.
         *
         * @param {(string|symbol)} event The event name.
         * @param {Function} fn The listener function.
         * @param {*} [context=this] The context to invoke the listener with.
         * @returns {EventEmitter} `this`.
         */
        on(event: string|symbol, fn: Function, context?: any): this;

        /**
         * Add a one-time listener for a given event.
         *
         * @param {(string|symbol)} event The event name.
         * @param {Function} fn The listener function.
         * @param {*} [context=this] The context to invoke the listener with.
         * @returns {EventEmitter} `this`.
         */
        once(event: string|symbol, fn: Function, context?: any): this;

        /**
         * Remove the listeners of a given event.
         *
         * @param {(string|symbol)} event The event name.
         * @param {Function} fn Only remove the listeners that match this function.
         * @param {*} context Only remove the listeners that have this context.
         * @param {boolean} once Only remove one-time listeners.
         * @returns {EventEmitter} `this`.
         */
        removeListener(event: string|symbol, fn?: Function, context?: any, once?: boolean): this;

        /**
         * Remove all listeners, or those of the specified event.
         *
         * @param {(string|symbol)} event The event name.
         * @returns {EventEmitter} `this`.
         */
        removeAllListeners(event?: string|symbol): this;

        /**
         * Alias method for `removeListener`
         */
        off(event: string|symbol, fn?: Function, context?: any, once?: boolean): this;

        /**
         * Alias method for `on`
         */
        addListener(event: string|symbol, fn: Function, context?: any): this;

        /**
         * This function doesn't apply anymore.
         * @deprecated
         */
        setMaxListeners(): this;

        static prefixed: string|boolean;
    }
}

declare module 'eventemitter3' {
    export = EventEmitter3.EventEmitter;
}
