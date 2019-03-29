import 'events';

declare module 'events' {
    interface InferrerableEmitter<O extends { [key: string]: any[] }> {
        on<K extends keyof O>(key: K, fn: (...args: O[K]) => void): this;
    }

    interface StaticEmitter {
        once(emitter: NodeJS.EventEmitter, event: string | symbol): Promise<any>;
    }

    const internal: StaticEmitter;
}
