/// <reference types="node" />

import { EventEmitter } from "events";

export interface Lock extends EventEmitter {
    release(callback: (error: Error) => void): void;
    fencingToken: number;
}

interface GenericConfig {
    dynamodb: {
        delete: (...args: any[]) => any;
        get: (...args: any[]) => any;
        put: (...args: any[]) => any;
    };
    lockTable: string;
    partitionKey: string;
    sortKey?: string | undefined;
    owner?: string | undefined;
    retryCount?: number | undefined;
}

export interface FailClosedConfig extends GenericConfig {
    acquirePeriodMs: number;
}

export interface FailOpenConfig extends GenericConfig {
    heartbeatPeriodMs?: number | undefined;
    leaseDurationMs: number;
    trustLocalTime?: boolean | undefined;
}

export class LockClient<
    PartitionTableKeyType extends string | number | Buffer | Record<string, string | Buffer | number>,
> {
    acquireLock(id: PartitionTableKeyType, callback: (error: Error, lock: Lock) => void): void;
}

export class FailClosed<
    PartitionTableKeyType extends string | number | Buffer | Record<string, string | Buffer | number>,
> extends LockClient<PartitionTableKeyType> {
    constructor(config: FailClosedConfig);
}

export class FailOpen<PartitionTableKeyType extends string | number | Buffer | Record<string, string | Buffer | number>>
    extends LockClient<PartitionTableKeyType>
{
    constructor(config: FailOpenConfig);
}

// Disabled automatic exporting
export {};
