// Type definitions for dynamodb-lock-client 0.7
// Project: https://github.com/tristanls/dynamodb-lock-client
// Definitions by: Vadym Abramchuk <https://github.com/devbranch-vadym>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import * as AWS from 'aws-sdk';
import * as events from 'events';

export interface FailClosedConfig {
    owner?: string;
    dynamodb: AWS.DynamoDB.DocumentClient;
    lockTable: string;
    partitionKey: string;
    retryCount?: number;
    acquirePeriodMs: number;
}

export interface FailOpenConfig {
    owner?: string;
    dynamodb: AWS.DynamoDB.DocumentClient;
    lockTable: string;
    partitionKey: string;
    retryCount?: number;
    sortKey?: string;
    heartbeatPeriodMs?: number;
    leaseDurationMs: number;
    trustLocalTime?: boolean;
}

export type LockAcquiredCallback = (error: Error | undefined, lock: Lock) => void;

export class FailClosed {
    constructor(config: FailClosedConfig);
    acquireLock(id: string, callback: LockAcquiredCallback): void;
}

export class FailOpen {
    constructor(config: FailOpenConfig);
    acquireLock(id: string, callback: LockAcquiredCallback): void;
}

export class Lock extends events.EventEmitter {
    release(callback: (error?: Error) => void): void;
}
