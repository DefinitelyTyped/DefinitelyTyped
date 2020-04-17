export class Queue {
    constructor(name: string, options?: QueueOptions);
    readonly name: string;
    getAll(): Promise<QueueEntry[]>;
    popRequest(): Promise<QueueEntry>;
    pushRequest(entry: QueueEntry): Promise<void>;
    registerSync(): Promise<void>;
    shiftRequest(): Promise<QueueEntry>;
    unshiftRequest(entry: QueueEntry): Promise<void>;
}

export interface OnSyncCallbackOptions {
  queue: Queue;
}

export interface OnSyncCallback {
  (options: OnSyncCallbackOptions): void|Promise<void>;
}

export interface QueueOptions {
    maxRetentionTime?: number;
    onSync?: OnSyncCallback;
}

export interface QueueEntry<Metadata = any> {
    request: Request;
    metadata?: Metadata;
    timestamp?: number;
}
