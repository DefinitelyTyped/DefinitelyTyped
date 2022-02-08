import { EmberMethod, EmberMethodParams } from "ember/-private/type-utils";

export interface QueueItem {
    method: string;
    target: object;
    args: object[];
    stack: string | undefined;
}

export interface DeferredActionQueues {
    [index: string]: unknown;
    queues: object;
    schedule<T, M extends EmberMethod<T>>(
        ...args: [
            queueName: string,
            target: T,
            method: M,
            ...methodArgs: EmberMethodParams<T, M>,
            onceFlag: boolean,
            stack: unknown
        ]
    ): any;
    flush(fromAutorun: boolean): any;
}

export interface DebugInfo {
    autorun: Error | undefined | null;
    counters: object;
    timers: QueueItem[];
    instanceStack: DeferredActionQueues[];
}

export interface Backburner {
    join(...args: any[]): void;
    on(...args: any[]): void;
    scheduleOnce(...args: any[]): void;
    schedule(queueName: string, target: object | null, method: () => void | string): void;
    ensureInstance(): void;
    DEBUG: boolean;
    getDebugInfo(): DebugInfo;
}
