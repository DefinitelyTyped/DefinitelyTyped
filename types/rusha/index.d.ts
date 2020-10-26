// Type definitions for rusha 0.8
// Project: https://github.com/srijs/rusha#readme
// Definitions by: Jacopo Scazzosi <https://github.com/jacoscaz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

interface Hash {
    update(value: string|number[]|ArrayBuffer|Buffer): Hash;
    digest(encoding?: undefined): ArrayBuffer;
    digest(encoding: 'hex'): string;
}

interface WorkerRequest {
    id: string;
    data: string|number[]|ArrayBuffer|Buffer;
}

interface WorkerResponse {
    id: string;
    hash: string;
}

interface Worker {
    onmessage?: (res: WorkerResponse) => void;
    postMessage(req: WorkerRequest): void;
    terminate(): Worker;
}

interface Rusha {
    createHash(): Hash;
    createWorker(): Worker;
    disableWorkerBehaviour(): void;
}

declare const rusha: Rusha;

export = rusha;
