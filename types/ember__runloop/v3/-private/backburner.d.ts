export interface QueueItem {
    method: string;
    target: object;
    args: object[];
    stack: string | undefined;
}

export interface DeferredActionQueues {
    [index: string]: any;
    queues: object;
    schedule(queueName: string, target: any, method: any, args: any, onceFlag: boolean, stack: any): any;
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
