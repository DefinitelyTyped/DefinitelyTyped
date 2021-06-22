// Type definitions for cluster-hub 0.1
// Project: https://github.com/sirian/node-cluster-hub#readme
// Definitions by: Chun-Kai Wang <https://github.com/chunkai1312>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import cluster = require('cluster');

export = Hub;

declare class Hub {
    constructor(messageKey?: string);
    on(type: string, listener: (...args: any[]) => void): this;
    sendToMaster(type: string, data?: any): boolean;
    sendToWorker(worker: cluster.Worker, type: string, data?: any): boolean;
    sendToRandomWorker(type: string, data?: any): boolean;
    sendToWorkers(type: string, data?: any): boolean;
    requestMaster(type: string, data?: any, callback?: Hub.Callback): boolean;
    requestWorker(worker: cluster.Worker, type: string, data?: any, callback?: Hub.Callback): boolean;
    requestAllWorkers(type: string, data?: any, callback?: Hub.Callback): boolean;
    requestRandomWorker(type: string, data?: any, callback?: Hub.Callback): boolean;
    lock(lockKey: string, callback?: (unlock: () => void) => void): boolean;
}

declare namespace Hub {
    type Callback = (err: Error | null, response: any) => void;
}
