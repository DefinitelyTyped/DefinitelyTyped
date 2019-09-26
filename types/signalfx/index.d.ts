// Type definitions for signalfx 7.0.1
// Project: https://github.com/signalfx/signalfx-nodejs
// Definitions by: Vladimir Grenaderov <https://github.com/VladimirGrenaderov>
//                 Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

interface IngestOptions {
    enableAmazonUniqueId?: boolean;
    dimensions?: object;
    ingestEndpoint?: string;
    timeout?: number;
    batchSize?: number;
    userAgents?: string[];
    proxy?: string;
}

interface SignalMetric {
    metric: string;
    value: number;
    timestamp?: number;
}

interface SignalReport {
    cumulative_counters?: SignalMetric[];
    gauges?: SignalMetric[];
    counters?: SignalMetric[];
}

interface SignalClient {
    send(report: SignalReport): void;
}

export class Ingest {
    constructor(token: string, options?: IngestOptions);
    send(report: SignalReport): void;
}

export class IngestJson {
    constructor(token: string, options?: IngestOptions);
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
