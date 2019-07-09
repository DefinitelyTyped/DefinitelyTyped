export interface Options {
    batch: number;
    batchPerHost: number;
    blacklistIPs: string[];
    discardResponseBodies: boolean;
    duration: string;
    ext: { [name: string]: CollectorOptions };
    hosts: { [name: string]: string };
    httpDebug: string;
    insecureSkipTLSVerify: boolean;
    iterations: number;
    linger: boolean;
    maxRedirects: number;
    minIterationDuration: string;
    noConnectionReuse: boolean;
    noUsageReport: boolean;
    noVUConnectionReuse: boolean;
    paused: boolean;
    rps: number;
    setupTimeout: string;
    stages: Stage[];
    summaryTrendStats: string[];
    systemTags: string[];
    tags: { [name: string]: string };
    teardownTimeout: string;
    thresholds: { [name: string]: Threshold[] };
    throw: boolean;
    tlsAuth: Certificate[];
    tlsCipherSuites: string[];
    tlsVersion: string | { min: string; max: string };
    userAgent: string;
    vus: number;
    vusMax: number;
}

export interface CollectorOptions {
    [name: string]: any;
}

export interface Stage {
    duration: string;
    target: number;
}

export type Threshold = string | ObjectThreshold;
export interface ObjectThreshold {
    abortOnFail?: boolean;
    delayAbortEval?: string;
    threshold: string;
}

export interface Certificate {
    cert: string;
    domains: string[];
    key: string;
}
