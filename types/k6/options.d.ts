/*
 * Program options.
 * https://docs.k6.io/docs/options
 */

import { CipherSuite } from './http';

/**
 * Program options.
 * https://docs.k6.io/docs/options
 * @public
 */
export interface Options {
    /** Maximum parallel `http.batch()` connections per VU. */
    batch: number;

    /** Maximum parallel `http.batch()` host connections per VU. */
    batchPerHost: number;

    /** Blacklist IP ranges from being called. */
    blacklistIPs: string[];

    /** Discard response bodies. */
    discardResponseBodies: boolean;

    /** Test duration. */
    duration: string;

    /** Third party collector configuration. */
    ext: { [name: string]: CollectorOptions };

    /** Static hostname mapping. */
    hosts: { [name: string]: string };

    /** Log all HTTP requests and responses. */
    httpDebug: string;

    /** Disable TLS verification. Insecure. */
    insecureSkipTLSVerify: boolean;

    /** Iterations to execute. */
    iterations: number;

    /** Persist the k6 process after test completion. */
    linger: boolean;

    /** Maximum HTTP redirects to follow. */
    maxRedirects: number;

    /** Minimum test iteration duration. */
    minIterationDuration: string;

    /** Disable keepalive connections. */
    noConnectionReuse: boolean;

    /** Disable usage reports. */
    noUsageReport: boolean;

    /** Disable cross-VU TCP connection reuse. */
    noVUConnectionReuse: boolean;

    /** Start test in paused state. */
    paused: boolean;

    /** Maximum requests per second across all VUs. */
    rps: number;

    /** Setup function timeout. */
    setupTimeout: string;

    /** Test stage specifications. Program of target VU stages. */
    stages: Stage[];

    /** Define stats for trend metrics. */
    summaryTrendStats: string[];

    /** Which system tags to include in collected metrics. */
    systemTags: string[];

    /** Tags to set test wide across all metrics. */
    tags: { [name: string]: string };

    /** Teardown function timeout. */
    teardownTimeout: string;

    /** Threshold specifications. Defines pass and fail conditions. */
    thresholds: { [name: string]: Threshold[] };

    /** Throw error on failed HTTP request. */
    throw: boolean;

    /** TLS client certificates. */
    tlsAuth: Certificate[];

    /** Allowed TLS cipher suites. */
    tlsCipherSuites: CipherSuite[];

    /** Allowed TLS version. Use `http.SSL_*` `http.TLS_*` constants. */
    tlsVersion: string | { min: string; max: string };

    /** User agent string to include in HTTP requests. */
    userAgent: string;

    /** Number of VUs to run concurrently. */
    vus: number;

    /** Maximum VUs. Preallocates VUs to enable faster scaling. */
    vusMax: number;
}

/**
 * Third party collector configuration.
 * @public
 */
export interface CollectorOptions {
    [name: string]: any;
}

/**
 * Test stage.
 * @public
 */
export interface Stage {
    /** Stage duration. */
    duration: string;

    /** Target number of VUs. */
    target: number;
}

/**
 * Threshold specification.
 * https://docs.k6.io/docs/thresholds
 * @public
 */
export type Threshold = string | ObjectThreshold;

/**
 * Object form threshold specification.
 * https://docs.k6.io/docs/thresholds
 * @public
 */
export interface ObjectThreshold {
    /** Abort test if threshold violated. */
    abortOnFail?: boolean;

    /** Duration to delay evaluation. Enables collecting additional metrics. */
    delayAbortEval?: string;

    /** Threshold expression. */
    threshold: string;
}

/**
 * TLS client certificate.
 * @public
 */
export interface Certificate {
    /** PEM encoded certificate. */
    cert: string;

    /** Domains certificate is valid for. */
    domains: string[];

    /** PEM encoded certificate key. */
    key: string;
}
