interface Options {
    emitDelay?: number | undefined;
    strictMode?: boolean | undefined;
}

type Listener = (...args: any[]) => void;

declare class EventEmitter {
    constructor(options?: Options);
    on(type: string, listener: Listener): void;
    once(type: string, listener: Listener): void;
    off(type: string, listener?: Listener): void;
    emit(type: string, ...eventArgs: any[]): void;
    emitSync(type: string, ...eventArgs: any[]): void;
    destroy(): void;
}

export = EventEmitter;
