declare module "events" {
    interface internal extends NodeJS.EventEmitter {}
    class internal { }

    interface NodeEventTarget {
        once(event: string | symbol, listener: (...args: any[]) => void): this;
    }

    interface DOMEventTarget {
        addEventListener(event: string, listener: (...args: any[]) => void, opts?: { once: boolean }): any;
    }

    namespace internal {
        interface EventEmitterOptions {
            /** It enables automatic capturing of promise rejection. Default: false. */
            captureRejections?: boolean;
        }
        const captureRejectionSymbol: unique symbol;
        let captureRejections: boolean;

        function once(emitter: NodeEventTarget, event: string | symbol): Promise<any[]>;
        function once(emitter: DOMEventTarget, event: string): Promise<any[]>;
        class EventEmitter extends internal {
            constructor(options?: EventEmitterOptions);
            /** @deprecated since v4.0.0 */
            static listenerCount(emitter: EventEmitter, event: string | symbol): number;
            static defaultMaxListeners: number;

            addListener(event: string | symbol, listener: (...args: any[]) => void): this;
            on(event: string | symbol, listener: (...args: any[]) => void): this;
            once(event: string | symbol, listener: (...args: any[]) => void): this;
            prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
            prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
            removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
            off(event: string | symbol, listener: (...args: any[]) => void): this;
            removeAllListeners(event?: string | symbol): this;
            setMaxListeners(n: number): this;
            getMaxListeners(): number;
            listeners(event: string | symbol): Function[];
            rawListeners(event: string | symbol): Function[];
            emit(event: string | symbol, ...args: any[]): boolean;
            eventNames(): Array<string | symbol>;
            listenerCount(type: string | symbol): number;
            [captureRejectionSymbol]: (error: Error, event: string | symbol, ...args: unknown[]) => void;
        }
    }

    export = internal;
}
