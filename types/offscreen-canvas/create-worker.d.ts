// Ensures it works on both TS4.5 and below
// tslint:disable-next-line:no-empty-interface
interface WindowPostMessageOptions {}
// tslint:disable-next-line:no-empty-interface
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
