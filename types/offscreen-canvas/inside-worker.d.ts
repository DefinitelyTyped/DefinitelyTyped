declare function insideWorker(listener: (ev: MessageEvent) => any): WorkerInterface;
interface WorkerInterface {
    post(message: any, transfer: Transferable[]): void;
    post(message: any, options?: PostMessageOptions): void;
    isWorker: boolean;
}

export = insideWorker;
