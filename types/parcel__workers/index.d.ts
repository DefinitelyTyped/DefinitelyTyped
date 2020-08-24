// Type definitions for @parcel/workers 2.0
// Project: https://github.com/parcel-bundler/parcel#readme
// Definitions by: Arjun Barrett <https://github.com/101arrowz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7
/// <reference types="node" />

// All type literals are intentional to encourage exact types
// tslint:disable:interface-over-type-literal

import { EventEmitter } from 'events';

export type FarmBackendType = 'process' | 'threads';

export type FarmOptions = {
    maxConcurrentWorkers?: number;
    maxConcurrentCallsPerWorker?: number;
    forcedKillTime?: number;
    useLocalWorker?: boolean;
    warmWorkers?: boolean;
    workerPath?: string;
    backend?: FarmBackendType;
    patchConsole?: boolean;
};

interface WorkerFarm {
    // TODO: better way?
    readonly '': unique symbol;
}
/**
 * A worker farm for use in various Parcel methods.
 * Please note that since Parcel's worker farms are not meant to be manipulated
 * by users, `WorkerFarm` does not document the actual API (this may change in
 * a future release).
 */
declare abstract class WorkerFarm extends EventEmitter {}

export default WorkerFarm;
