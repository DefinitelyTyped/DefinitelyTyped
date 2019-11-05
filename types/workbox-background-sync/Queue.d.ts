export class Queue {
    constructor(name: string, options?: QueueOptions);
    readonly name: string;
    getAll(): Promise<QueueEntry[]>;
    popRequest<M = any>(): Promise<QueueEntry<M>>;
    pushRequest(entry: QueueEntry): Promise<void>;
    registerSync(): Promise<void>;
    shiftRequest<M = any>(): Promise<QueueEntry<M>>;
    unshiftRequest(entry: QueueEntry): Promise<void>;
}

export interface QueueOptions {
    maxRetentionTime?: number;
    onSync?: () => void;
}

export interface QueueEntry<M = any> {
    request: Request;
    metadata?: M;
    timestamp?: number;
}
