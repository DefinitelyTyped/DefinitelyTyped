// Type definitions for signalfx 7.4
// Project: https://github.com/signalfx/signalfx-nodejs
// Definitions by: Max Boguslavskiy <https://github.com/maxbogus>
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

export type EventCategory = 'USER_DEFINED' | 'ALERT' | 'AUDIT' | 'JOB' | 'COLLECTD' | 'SERVICE_DISCOVERY' | 'EXCEPTION';

export interface SignalEvent {
    eventType: string;
    category?: EventCategory | undefined;
    dimensions?: object | undefined;
    properties?: object | undefined;
    timestamp?: number | undefined;
}

export interface SignalClient {
    send(report: SignalReport): Promise<void>;
    sendEvent(event: SignalEvent): Promise<void>;
}

export class Ingest implements SignalClient {
    constructor(token: string, options?: IngestOptions);
    send(report: SignalReport): Promise<void>;
    sendEvent(event: SignalEvent): Promise<void>;
}

export class IngestJson implements SignalClient {
    constructor(token: string, options?: IngestOptions);
    sendEvent(event: SignalEvent): Promise<void>;
    send(report: SignalReport): Promise<void>;
}

export const CONSTANTS: {
    MESSAGE_TYPES: {
        CONTROL: string;
        DATA: string;
        EVENT: string;
        METADATA: string;
    };
};

export interface SignalFlowOptions {
    signalflowEndpoint?: string | undefined;
    apiEndpoint?: string | undefined;
    webSocketErrorCallback?: (err: any) => void | undefined;
}

export interface RequestOptions {
    /** required for execute */
    program?: string | undefined;
    /** required for explain */
    incidentId?: string | undefined;
    start?: string | number | undefined;
    end?: string | number | undefined;
    range?: number | undefined;
    stop?: string | number | undefined;
    compress?: boolean | undefined;
    throttleOptions?: { rate: number };
    resolution?: number;
    maxDelay?: number;
    bigNumber?: boolean;
    immediate?: boolean;
}

export interface ExecuteOptions extends RequestOptions {
    program: string | undefined;
}

export interface ExplainOptions extends RequestOptions {
    incidentId: string | undefined;
}

export interface MetadataMessage {
    type: 'metadata';
    channel: string;
    tsId: string;
    properties: {
        jobId: string;
        sf_organizationID: string;
        sf_key: string[];
        sf_metric: string;
        sf_resolutionMs: number;
        sf_type: string;
        sf_isPreQuantized: boolean;
    };
}

export interface DataMessage {
    type: 'data';
    channel: string;
    data: [{ tsId: string; value: number }];
    logicalTimestampMs: number;
}

export interface ControlMessage {
    type: 'control-message';
    channel?: string;
    logicalTimestampMs: number;
    // TODO: this is really a fixed set with different values
    event: string;
    progress?: number;
    handle?: string;
    abortInfo?: {
        sf_job_abortReason: string;
        sf_job_abortState: string;
    };
}

export interface EventMessage {
    type: 'event';
    logicalTimestampMs: number;
    channel: string;
    tsId: string;
    properties: {
        incidentId: string;
        inputValues: string;
        is: 'ok' | 'anomalous';
        was: 'ok' | 'anomalous';
    };
}

export type StreamMessage = MetadataMessage | EventMessage | ControlMessage | DataMessage;

export type StreamCallback = (err?: { error: any }, data?: StreamMessage) => void;

export interface SignalfxHandle {
    close(): boolean;
    get_known_tsids(): string[];
    get_metadata(): object | undefined;
    stream(callback: StreamCallback): boolean;
}

export interface LiveTailOpts {
    query: { matcher: { params: { op: string; args: object } } };
    throttleOptions: { rate: number };
}

export interface LiveTail {
    close(): boolean;
    stream(callback: StreamCallback): boolean;
}

export class SignalFlow {
    constructor(apiToken: string, options?: SignalFlowOptions);
    disconnect(): void;
    execute(opts: ExecuteOptions): SignalfxHandle;
    explain(opts: ExplainOptions): SignalfxHandle;
    preflight(opts: RequestOptions): SignalfxHandle;
    livetail(opts: LiveTailOpts): LiveTail;
}
