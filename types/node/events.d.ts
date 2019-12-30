declare module "events" {
    interface EventEmitterOptions {
        /**
         * Enables automatic capturing of promise rejection.
         */
        captureRejections?: boolean;
    }

    interface NodeEventTarget {
        once(event: string | symbol, listener: (...args: any[]) => void): this;
    }

    interface DOMEventTarget {
        addEventListener(event: string, listener: (...args: any[]) => void, opts?: { once: boolean }): any;
    }

    namespace EventEmitter {
        function once(emitter: NodeEventTarget, event: string | symbol): Promise<any[]>;
        function once(emitter: DOMEventTarget, event: string): Promise<any[]>;
        const captureRejectionSymbol: unique symbol;
        /**
         * Sets or gets the default captureRejection value for all emitters.
         */
        let captureRejections: boolean;

        interface EventEmitter extends NodeJS.EventEmitter {
        }

        class EventEmitter {
            constructor(options?: EventEmitterOptions);
            /** @deprecated since v4.0.0 */
            static listenerCount(emitter: EventEmitter, event: string | symbol): number;
            static defaultMaxListeners: number;
        }
    }

    export = EventEmitter;
}
