export class TerrainWorker {
    constructor(numWorkers?: number);
    _id: number;
    _segments: {};
    _workerQueue: Worker[];
    _pendingQueue: any[];
    check(): void;
    make(segment: any, elevations: any): void;
}
