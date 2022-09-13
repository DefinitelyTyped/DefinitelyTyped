// Type definitions for cluster-hub 0.1
// Project: https://github.com/sirian/node-cluster-hub#readme
// Definitions by: Chun-Kai Wang <https://github.com/chunkai1312>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Worker } from 'cluster';
import { EventEmitter } from 'events';

export = Hub;

declare class Hub extends EventEmitter {
    constructor(messageKey?: string);
    sendToMaster(type: string | symbol, data?: any): boolean;
    sendToWorker(worker: Worker, type: string | symbol, data?: any): boolean;
    sendToRandomWorker(type: string | symbol, data?: any): boolean;
    sendToWorkers(type: string | symbol, data?: any): boolean;
    requestMaster(type: string | symbol, data?: any, callback?: Hub.Callback): boolean;
    requestWorker(worker: Worker, type: string | symbol, data?: any, callback?: Hub.Callback): boolean;
    requestAllWorkers(type: string | symbol, data?: any, callback?: Hub.Callback): boolean;
    requestRandomWorker(type: string | symbol, data?: any, callback?: Hub.Callback): boolean;
    lock(lockKey: string, callback?: (unlock: () => void) => void): boolean;
}

declare namespace Hub {
    type Callback = (err: Error | null, response: any) => void;
}
