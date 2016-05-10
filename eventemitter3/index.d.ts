// Type definitions for EventEmitter3 1.1.1
// Project: https://github.com/primus/eventemitter3
// Definitions by: Yuichi Murata <https://github.com/mrk21>, Leon Yu <https://github.com/leonyu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace EventEmitter3 {
    interface EventEmitter3Static {
        new (): EventEmitter;
        prefixed: string | boolean;
    }
    class EventEmitter {
        /**
         * Minimal EventEmitter interface that is molded against the Node.js
         * EventEmitter interface.
         *
         * @constructor
         * @api public
         */
        constructor();

        /**
         * Return a list of assigned event listeners.
         *
         * @param {String} event The events that should be listed.
         * @returns {Array}
         * @api public
         */
        listeners(event?: string): Function[];

        /**
         * Return a list of assigned event listeners.
         *
         * @param {String} event The events that should be listed.
         * @param {Boolean} exists We only need to know if there are listeners.
         * @returns {Boolean}
         * @api public
         */
        listeners(event: string, param: boolean): boolean;

        /**
         * Emit an event to all registered event listeners.
         *
         * @param {String} event The name of the event.
         * @returns {Boolean} Indication if we've emitted an event.
         * @api public
         */
        emit(event: string, ...args: any[]): boolean;

        /**
         * Register a new EventListener for the given event.
         *
         * @param {String} event Name of the event.
         * @param {Function} fn Callback function.
         * @param {Mixed} [context=this] The context of the function.
         * @api public
         */
        on(event: string, fn: Function, context?: any): EventEmitter;

        /**
         * Add an EventListener that's only called once.
         *
         * @param {String} event Name of the event.
         * @param {Function} fn Callback function.
         * @param {Mixed} [context=this] The context of the function.
         * @api public
         */
        once(event: string, fn: Function, context?: any): EventEmitter;

        /**
         * Remove event listeners.
         *
         * @param {String} event The event we want to remove.
         * @param {Function} fn The listener that we need to find.
         * @param {Mixed} context Only remove listeners matching this context.
         * @param {Boolean} once Only remove once listeners.
         * @api public
         */
        removeListener(event: string, fn?: Function, context?: any, once?: boolean): EventEmitter;

        /**
         * Remove all listeners or only the listeners for the specified event.
         *
         * @param {String} event The event want to remove all listeners for.
         * @api public
         */
        removeAllListeners(event?: string): EventEmitter;

        /**
         * Remove event listeners.
         *
         * @param {String} event The event we want to remove.
         * @param {Function} fn The listener that we need to find.
         * @param {Mixed} context Only remove listeners matching this context.
         * @param {Boolean} once Only remove once listeners.
         * @api public
         */
        off(event: string, fn?: Function, context?: any, once?: boolean): EventEmitter;

        /**
         * Register a new EventListener for the given event.
         *
         * @param {String} event Name of the event.
         * @param {Function} fn Callback function.
         * @param {Mixed} [context=this] The context of the function.
         * @api public
         */
        addListener(event: string, fn: Function, context?: any): EventEmitter;

        /**
         * This function doesn't apply anymore.
         * @deprecated
         */
        setMaxListeners(): EventEmitter;
    }
}

declare module 'eventemitter3' {
    //
    // Expose the module.
    //
    var EventEmitter3: EventEmitter3.EventEmitter3Static;
    export = EventEmitter3;
}
