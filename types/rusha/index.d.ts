// Type definitions for rusha 0.8
// Project: https://github.com/srijs/rusha#readme
// Definitions by: Jacopo Scazzosi <https://github.com/jacoscaz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.0

interface Hash {
    update(value: string|number[]|ArrayBuffer): Hash;
    digest(encoding?: undefined): ArrayBuffer;
    digest(encoding: 'hex'): string;
}

interface RushaWorkerRequest {
    id: string;
    data: string|number[]|ArrayBuffer|Blob;
}

interface RushaWorkerResponse {
    id: string;
    hash: string;
}

interface RushaWorker extends Worker {
    onmessage: ((this: RushaWorker, res: MessageEvent<RushaWorkerResponse>) => void)|null;
    postMessage(req: RushaWorkerRequest): void;
    terminate(): void;
}

interface Rusha {
    createHash(): Hash;
    createWorker(): RushaWorker;
    disableWorkerBehaviour(): void;
}

declare const Rusha: Rusha;

export = Rusha;
