// Type definitions for signalfx 7.0
// Project: https://github.com/signalfx/signalfx-nodejs
// Definitions by: Vladimir Grenaderov <https://github.com/VladimirGrenaderov>
//                 Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export interface IngestOptions {
    enableAmazonUniqueId?: boolean | undefined;
    dimensions?: object | undefined;
    ingestEndpoint?: string | undefined;
    timeout?: number | undefined;
    batchSize?: number | undefined;
    userAgents?: string[] | undefined;
    proxy?: string | undefined;
}

export interface SignalMetric {
    metric: string;
    value: number;
    timestamp?: number | undefined;
    dimensions?: object | undefined;
}

export interface SignalReport {
    cumulative_counters?: SignalMetric[] | undefined;
    gauges?: SignalMetric[] | undefined;
    counters?: SignalMetric[] | undefined;
}

export interface SignalClient {
    send(report: SignalReport): void;
}

export class Ingest {
    constructor(token: string, options?: IngestOptions);
    send(report: SignalReport): void;
}

export class IngestJson {
    constructor(token: string, options?: IngestOptions);
    send(report: SignalReport): void;
}

export const CONSTANTS: {
    MESSAGE_TYPES: {
        CONTROL: string;
        DATA: string;
        EVENT: string;
        METADATA: string;
    };
};

export function SignalFlow(apiToken: any, options: any): any;
