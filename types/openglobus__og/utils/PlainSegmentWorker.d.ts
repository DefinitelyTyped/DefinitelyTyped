export class PlainSegmentWorker {
    constructor(numWorkers?: number);
    _id: number;
    _segments: {};
    _workerQueue: Worker[];
    _pendingQueue: any[];
    check(): void;
    setGeoid(geoid: any): void;
    make(segment: any): void;
}
