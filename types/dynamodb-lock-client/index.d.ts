// Type definitions for dynamodb-lock-client 0.7
// Project: https://github.com/tristanls/dynamodb-lock-client#readme
// Definitions by: RyoshiKayo <https://github.com/RyoshiKayo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { DynamoDB } from "aws-sdk";
import { EventEmitter } from "events";

export interface Lock extends EventEmitter {
    release(callback: (error: Error) => void): void;
    fencingToken: number;
}

interface GenericConfig {
    dynamodb: DynamoDB.DocumentClient;
    lockTable: string;
    partitionKey: string;
    sortKey?: string;
    owner?: string;
}

export interface FailClosedConfig extends GenericConfig {
    acquirePeriodMs: number;
}

export interface FailOpenConfig extends GenericConfig {
    heartbeatPeriodMs?: number;
    leaseDurationMs: number;
    trustLocalTime?: boolean;
}

export class LockClient<PartitionTableKeyType extends string | number> {
    acquireLock(id: PartitionTableKeyType, callback: (error: Error, lock: Lock) => void): void;
}

export class FailClosed<PartitionTableKeyType extends string | number> extends LockClient<PartitionTableKeyType> {
    constructor(config: FailClosedConfig);
}

export class FailOpen<PartitionTableKeyType extends string | number> extends LockClient<PartitionTableKeyType> {
    constructor(config: FailOpenConfig);
}

// Disabled automatic exporting
export {};
