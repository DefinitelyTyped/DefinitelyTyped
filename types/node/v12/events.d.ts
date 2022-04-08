declare module 'node:events' {
    import EventEmitter = require('events');
    export = EventEmitter;
}

declare module 'events' {
    interface NodeEventTarget {
        once(event: string | symbol, listener: (...args: any[]) => void): this;
    }

    interface DOMEventTarget {
        addEventListener(event: string, listener: (...args: any[]) => void, opts?: { once: boolean }): any;
    }

    class EventEmitter extends NodeJS.EventEmitter {
        constructor();

        static once(emitter: NodeEventTarget, event: string | symbol): Promise<any[]>;
        static once(emitter: DOMEventTarget, event: string): Promise<any[]>;
        static on(emitter: NodeJS.EventEmitter, event: string): AsyncIterableIterator<any>;

        /** @deprecated since v4.0.0 */
        static listenerCount(emitter: NodeJS.EventEmitter, event: string | symbol): number;

        /**
         * This symbol shall be used to install a listener for only monitoring `'error'`
         * events. Listeners installed using this symbol are called before the regular
         * `'error'` listeners are called.
         *
         * Installing a listener using this symbol does not change the behavior once an
         * `'error'` event is emitted, therefore the process will still crash if no
         * regular `'error'` listener is installed.
         */
        static readonly errorMonitor: unique symbol;
        static readonly captureRejectionSymbol: unique symbol;

        /**
         * Sets or gets the default captureRejection value for all emitters.
         */
        // TODO: These should be described using static getter/setter pairs:
        static captureRejections: boolean;
        static defaultMaxListeners: number;
    }

    import internal = require('events');
    namespace EventEmitter {
        // Should just be `export { EventEmitter }`, but that doesn't work in TypeScript 3.4
        export { internal as EventEmitter };
    }

    export = EventEmitter;
}
