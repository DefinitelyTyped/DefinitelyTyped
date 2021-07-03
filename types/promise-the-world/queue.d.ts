declare namespace queue {
    class Queue {
        maxPending: number;
        maxQueued: number;
        length: number;
        pending: number;
        add<T = any>(factory: () => Promise<T>): Promise<T>;
    }
}

declare function queue(maxPending?: number, maxQueued?: number): queue.Queue;

export = queue;
