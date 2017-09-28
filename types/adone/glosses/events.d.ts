declare namespace adone {
    namespace event {
        class EventEmitter {
            static listenerCount(emitter: EventEmitter, event: string | symbol): number;
            static defaultMaxListeners: number;

            addListener(event: string | symbol, listener: (...args: any[]) => void): this;
            on(event: string | symbol, listener: (...args: any[]) => void): this;
            once(event: string | symbol, listener: (...args: any[]) => void): this;
            prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
            prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
            removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
            removeAllListeners(event?: string | symbol): this;
            setMaxListeners(n: number): this;
            getMaxListeners(): number;
            listeners(event: string | symbol): Array<(...args: any[]) => any>;
            emit(event: string | symbol, ...args: any[]): boolean;
            eventNames(): Array<string | symbol>;
            listenerCount(type: string | symbol): number;
        }

        class AsyncEmitter extends EventEmitter {
            constructor(concurrency?: number);

            setConcurrency(max?: number): this;

            emitParallel(event: string, ...args: any[]): Promise<any[]>;

            emitSerial(event: string, ...args: any[]): Promise<any[]>;

            emitReduce(event: string, ...args: any[]): Promise<any>;

            emitReduceRight(event: string, ...args: any[]): Promise<any>;

            subscribe(event: string, listener: (...args: any[]) => void, once?: boolean): () => void;
        }
    }
}
