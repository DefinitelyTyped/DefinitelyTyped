// Type definitions for express-cluster 0.0
// Project: https://github.com/Flipboard/express-cluster
// Definitions by: Miloslav Nenadál <https://github.com/nenadalm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import cluster = require('cluster');

interface Config {
    count?: number;
    respawn?: boolean;
    verbose?: boolean;
    workerListener?(): void;
    outputStream?: NodeJS.WritableStream;
}

type WorkerFunction = (worker: cluster.Worker) => void;

interface Cluster {
    (fn: WorkerFunction, config: Config): void;
    (config: Config, fn: WorkerFunction): void;
}

declare const c: Cluster;
export = c;
