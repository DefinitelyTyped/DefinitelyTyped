/**
 * @author Deepkolos / https://github.com/deepkolos
 */

export class WorkerPool {
    pool: number;
    quene: Array<{
        resolve: (e: any) => void;
        msg: any;
        transfer: Array<Transferable>;
    }>;
    workers: Array<Worker>;
    workersResolve: Array<(e: any) => void>;
    workerStatus: number;

    constructor(pool?: number);

    _initWorker(workerId: number): void;
    workerCreator(): Worker;
    _getIdleWorker(): void;
    _onMessage(workerId: number, msg: any): void;
    setWorkerCreator(workerCreator: () => Worker): void;
    setWorkerLimit(pool: number): void;
    postMessage(msg: any, transfer?: Array<Transferable>): Promise<MessageEvent>;
    dispose(): void;
}
