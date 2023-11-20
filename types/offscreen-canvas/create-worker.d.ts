// Ensures it works on both TS4.5 and below
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface WindowPostMessageOptions {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PostMessageOptions extends WindowPostMessageOptions {}

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
