/// <reference types="node" />

import cluster = require("cluster");

interface Config {
    count?: number | undefined;
    respawn?: boolean | undefined;
    verbose?: boolean | undefined;
    workerListener?(): void;
    outputStream?: NodeJS.WritableStream | undefined;
}

type WorkerFunction = (worker: cluster.Worker) => void;

interface Cluster {
    (fn: WorkerFunction, config: Config): void;
    (config: Config, fn: WorkerFunction): void;
}

declare const c: Cluster;
export = c;
