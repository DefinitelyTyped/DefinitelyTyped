declare module "events" {
    class internal extends NodeJS.EventEmitter { }

    namespace internal {
        export class EventEmitter extends internal {
            static listenerCount(emitter: EventEmitter, event: string | symbol): number; // deprecated
            static defaultMaxListeners: number;

            addListener(event: string | symbol, listener: Function): this;
            on(event: string | symbol, listener: Function): this;
            once(event: string | symbol, listener: Function): this;
            prependListener(event: string | symbol, listener: Function): this;
            prependOnceListener(event: string | symbol, listener: Function): this;
            removeListener(event: string | symbol, listener: Function): this;
            removeAllListeners(event?: string | symbol): this;
            setMaxListeners(n: number): this;
            getMaxListeners(): number;
            listeners(event: string | symbol): Function[];
            emit(event: string | symbol, ...args: any[]): boolean;
            eventNames(): (string | symbol)[];
            listenerCount(type: string | symbol): number;
        }
    }

    export = internal;
}
