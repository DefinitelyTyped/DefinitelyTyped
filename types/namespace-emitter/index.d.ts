declare namespace createNamespaceEmitter {
    type Listener = (
        this: Listener & { event: string },
        arg1?: any,
        arg2?: any,
        arg3?: any,
        arg4?: any,
        arg5?: any,
        arg6?: any,
    ) => void;

    interface Emitter {
        /**
         * Emit an event. Optionally namespace the event. Handlers are fired in the order in which they were added with exact matches taking precedence. Separate the namespace and event with a `:`
         *
         * @param event the name of the event, with optional namespace
         * @param data up to 6 arguments that are passed to the event listener
         * @example
         * emitter.emit('example')
         * emitter.emit('demo:test')
         * emitter.emit('data', { example: true }, 'a string', 1)
         */
        emit(event: string, arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any, arg6?: any): void;

        /**
         * Create en event listener.
         *
         * @example
         * emitter.on('example', function () {})
         * emitter.on('demo', function () {})
         */
        on(event: string, listener: Listener): void;

        /**
         * Create en event listener that fires once.
         *
         * @example
         * emitter.once('example', function () {})
         * emitter.once('demo', function () {})
         */
        once(event: string, listener: Listener): void;

        /**
         * Stop listening to an event. Stop all listeners on an event by only passing the event name. Stop a single listener by passing that event handler as a callback.
         * You must be explicit about what will be unsubscribed: `emitter.off('demo')` will unsubscribe an `emitter.on('demo')` listener,
         * `emitter.off('demo:example')` will unsubscribe an `emitter.on('demo:example')` listener
         *
         * @example
         * emitter.off('example')
         * emitter.off('demo', function () {})
         */
        off(event: string, listener?: Listener): void;
    }
}

/**
 * Create an event emitter with namespaces
 *
 * @example
 * var emitter = require('./index')()
 *
 * emitter.on('*', function () {
 *   console.log('all events emitted', this.event)
 * })
 *
 * emitter.on('example', function () {
 *   console.log('example event emitted')
 * })
 */
declare function createNamespaceEmitter(): createNamespaceEmitter.Emitter;

export = createNamespaceEmitter;
