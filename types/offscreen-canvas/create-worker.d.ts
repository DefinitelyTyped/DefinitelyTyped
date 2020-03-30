declare function createWorker(
    canvas: HTMLCanvasElement,
    workerUrl: string,
    listener: (ev: MessageEvent) => any,
): WorkerInterface;
interface WorkerInterface {
    post(message: any, transfer: Transferable[]): void;
    post(message: any, options?: PostMessageOptions): void;
}

export = createWorker;
