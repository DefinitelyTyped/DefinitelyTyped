// Type definitions for EventEmitter3 0.1.6
// Project: https://github.com/primus/eventemitter3
// Definitions by: Yuichi Murata <https://github.com/mrk21>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module EventEmitter3 {
    export class EventEmitter {
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
        listeners(event: string): Function[];
        
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
         * @param {Functon} fn Callback function.
         * @param {Mixed} context The context of the function.
         * @api public
         */
        on(event: string, fn: Function, context?: any): EventEmitter;
        
        /**
         * Add an EventListener that's only called once.
         *
         * @param {String} event Name of the event.
         * @param {Function} fn Callback function.
         * @param {Mixed} context The context of the function.
         * @api public
         */
        once(event: string, fn: Function, context?: any): EventEmitter;
        
        /**
         * Remove event listeners.
         *
         * @param {String} event The event we want to remove.
         * @param {Function} fn The listener that we need to find.
         * @param {Boolean} once Only remove once listeners.
         * @api public
         */
        removeListener(event: string, fn: Function, once?: boolean): EventEmitter;
        
        /**
         * Remove all listeners or only the listeners for the specified event.
         *
         * @param {String} event The event want to remove all listeners for.
         * @api public
         */
        removeAllListeners(event: string): EventEmitter;
        
        //
        // Alias methods names because people roll like that.
        //
        off(event: string, fn: Function, once?: boolean): EventEmitter;
        addListener(event: string, fn: Function, context?: any): EventEmitter;
        
        //
        // This function doesn't apply anymore.
        //
        setMaxListeners(): EventEmitter;
    }
    export module EventEmitter {
        //
        // Expose the module.
        //
        export class EventEmitter extends EventEmitter3.EventEmitter {}
        export class EventEmitter2 extends EventEmitter3.EventEmitter {}
        export class EventEmitter3 extends EventEmitter3.EventEmitter {}
    }
}

declare module 'eventemitter3' {
    //
    // Expose the module.
    //
    class EventEmitter extends EventEmitter3.EventEmitter {}
    export = EventEmitter;
}
