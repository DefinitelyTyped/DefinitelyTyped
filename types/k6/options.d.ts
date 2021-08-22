/*
 * Program options.
 * https://k6.io/docs/using-k6/options/
 */

import { CipherSuite } from './http';

/**
 * Program options.
 * https://k6.io/docs/using-k6/options/
 */
export interface Options {
    /** Maximum parallel `http.batch()` connections per VU. */
    batch?: number | undefined;

    /** Maximum parallel `http.batch()` host connections per VU. */
    batchPerHost?: number | undefined;

    /** Blacklist IP ranges from being called. */
    blacklistIPs?: string[] | undefined;

    /** Blacklist hostnames from being called. Wildcards are supported. */
    blockHostnames?: string[] | undefined;

    /** Discard response bodies. */
    discardResponseBodies?: boolean | undefined;

    /** DNS resolution behavior. https://k6.io/docs/using-k6/options#dns */
    dns?: {
        /** 0, inf, or any time duration(60s, 5m30s, 10m, 2h). */
        ttl: string;

        select: 'first' | 'random' |  'roundRobin';

        policy: 'preferIPv4' | 'preferIPv6' | 'onlyIPv4' | 'onlyIPv6' | 'any';
    } | undefined;

    /** Test duration. */
    duration?: string | undefined;

    /** Partition the test run in different segments. https://k6.io/docs/using-k6/options#execution-segment */
    executionSegment?: string | undefined;

    /** Define the sequence segment to run. https://k6.io/docs/using-k6/options#execution-segment */
    executionSegmentSequence?: string | undefined;

    /** Third party collector configuration. */
    ext?: { [name: string]: CollectorOptions } | undefined;

    /** Static hostname mapping. */
    hosts?: { [name: string]: string } | undefined;

    /** Log all HTTP requests and responses. */
    httpDebug?: string | undefined;

    /** Disable TLS verification. Insecure. */
    insecureSkipTLSVerify?: boolean | undefined;

    /** Iterations to execute. */
    iterations?: number | undefined;

    /** Persist the k6 process after test completion. */
    linger?: boolean | undefined;

    /** Maximum HTTP redirects to follow. */
    maxRedirects?: number | undefined;

    /** Minimum test iteration duration. */
    minIterationDuration?: string | undefined;

    /** Disable keepalive connections. */
    noConnectionReuse?: boolean | undefined;

    /** This disables the default behavior of resetting the cookie jar after each VU iteration. If it's enabled, saved cookies will be persisted across VU iterations.. */
    noCookiesReset?: boolean | undefined;

    /** Disable usage reports. */
    noUsageReport?: boolean | undefined;

    /** Disable cross-VU TCP connection reuse. */
    noVUConnectionReuse?: boolean | undefined;

    /** Start test in paused state. */
    paused?: boolean | undefined;

    /** Maximum requests per second across all VUs. */
    rps?: number | undefined;

    /** Scenario specifications. */
    scenarios?: { [name: string]: Scenario} | undefined;

    /** Setup function timeout. */
    setupTimeout?: string | undefined;

    /** Test stage specifications. Program of target VU stages. */
    stages?: Stage[] | undefined;

    /** Define stats for trend metrics. */
    summaryTrendStats?: string[] | undefined;

    /** Which system tags to include in collected metrics. */
    systemTags?: string[] | undefined;

    /** Tags to set test wide across all metrics. */
    tags?: { [name: string]: string } | undefined;

    /** Teardown function timeout. */
    teardownTimeout?: string | undefined;

    /** Threshold specifications. Defines pass and fail conditions. */
    thresholds?: { [name: string]: Threshold[] } | undefined;

    /** Throw error on failed HTTP request. */
    throw?: boolean | undefined;

    /** TLS client certificates. */
    tlsAuth?: Certificate[] | undefined;

    /** Allowed TLS cipher suites. */
    tlsCipherSuites?: CipherSuite[] | undefined;

    /** Allowed TLS version. Use `http.SSL_*` `http.TLS_*` constants. */
    tlsVersion?: string | { min: string; max: string } | undefined;

    /** User agent string to include in HTTP requests. */
    userAgent?: string | undefined;

    /** Number of VUs to run concurrently. */
    vus?: number | undefined;

    /** Maximum VUs. Preallocates VUs to enable faster scaling. */
    vusMax?: number | undefined;
}

/**
 * Third party collector configuration.
 */
export interface CollectorOptions {
    [name: string]: any;
}

/**
 * Test stage.
 */
export interface Stage {
    /** Stage duration. */
    duration: string;

    /** Target number of VUs. */
    target: number;
}

/**
 * Threshold specification.
 * https://k6.io/docs/using-k6/thresholds/
 */
export type Threshold = string | ObjectThreshold;

/**
 * Object form threshold specification.
 * https://k6.io/docs/using-k6/thresholds/
 */
export interface ObjectThreshold {
    /** Abort test if threshold violated. */
    abortOnFail?: boolean | undefined;

    /** Duration to delay evaluation. Enables collecting additional metrics. */
    delayAbortEval?: string | undefined;

    /** Threshold expression. */
    threshold: string;
}

/**
 * TLS client certificate.
 */
export interface Certificate {
    /** PEM encoded certificate. */
    cert: string;

    /** Domains certificate is valid for. */
    domains: string[];

    /** PEM encoded certificate key. */
    key: string;
}

export type ExecutorOptions = "shared-iterations" | "per-vu-iterations" | "constant-vus" | "ramping-vus" | "constant-arrival-rate" | "ramping-arrival-rate" | "externally-controlled";

/**
 * BaseScenario.
 *
 * https://k6.io/docs/using-k6/scenarios/
 */
export abstract class BaseScenario {
    /**
     * Executor type.  Options available:
     * - `shared-iterations`
     * - `per-vu-iterations`
     * - `constant-vus`
     * - `ramping-vus`
     * - `constant-arrival-rate`
     * - `ramping-arrival-rate`
     * - `externally-controlled`
     */
    executor: ExecutorOptions;

    /**
     * Time offset since the start of the test, at which point this scenario should begin execution.
     *
     * Default value is 0s.
     */
    startTime?: string | undefined;

    /**
     * Time to wait for iterations to finish executing before stopping them forcefully.
     * See https://k6.io/docs/using-k6/scenarios#graceful-stop-and-ramp-down/
     *
     * Default value is 30s
     */
    gracefulStop?: string | undefined;

    /**
     * Name of exported JS function to execute.
     *
     * The default value is "default".
     */
    exec?: string | undefined;

    /** Environment variables specific to this scenario.  */
    env?: { [name: string]: string } | undefined;

    /** Tags specific to this scenario. */
    tags?: { [name: string]: string } | undefined;
}

/**
 * A fixed amount of iterations are shared between a number of VUs.
 *
 * https://k6.io/docs/using-k6/scenarios/executors/shared-iterations/
 */
export interface SharedIterationsScenario extends BaseScenario {
    executor: "shared-iterations";
    /**
     * Number of VUs to run concurrently.
     *
     * The default value is 1.
     */
    vus?: number | undefined;

    /**
     * Number of iterations to execute across all VUs.
     *
     * The default value is 1.
     */
    iterations?: number | undefined;

    /**
     * Maximum scenario duration before it's forcibly stopped (excluding gracefulStop).
     *
     * The default value is 10m.
     */
    maxDuration?: string | undefined;
}

/**
 * Each VU executes an exact number of iterations.
 *
 * https://k6.io/docs/using-k6/scenarios/executors/per-vu-iterations/
 */
export interface PerVUIterationsScenario extends BaseScenario {
    executor: "per-vu-iterations";
    /**
     * Number of VUs to run concurrently.
     *
     * The default value is 1.
     */
    vus?: number | undefined;

    /**
     * Number of iterations to execute across per VU.
     *
     * The default value is 1.
     */
    iterations?: number | undefined;

    /**
     * Maximum scenario duration before it's forcibly stopped (excluding gracefulStop).
     *
     * The default value is 10m.
     */
    maxDuration?: string | undefined;
}

/**
 * A fixed number of VUs execute as many iterations as possible for a specified amount of time.
 *
 * https://k6.io/docs/using-k6/scenarios/executors/constant-vus/
 */
export interface ConstantVUsScenario extends BaseScenario {
    executor: "constant-vus";

    /**
     * Number of VUs to run concurrently.
     *
     * The default value is 1.
     */
    vus?: number | undefined;

    /**
     * Total scenario duration (excluding `gracefulStop`)
     */
    duration: string;
}

/**
 * A variable number of VUs execute as many iterations as possible for a specified amount of time.
 *
 * https://k6.io/docs/using-k6/scenarios/executors/ramping-vus/
 */
export interface RampingVUsScenario extends BaseScenario {
    executor: "ramping-vus";

    /** Array of objects that specify the number of VUs to ramp up or down to. */
    stages: Stage[];

    /**
     * Number of VUs to run at test start.
     *
     * The default value is 1.
     */
    startVUs?: number | undefined;

    /**
     * Time to wait for an already started iteration to finish before stopping it during a ramp down.
     *
     * The default value is 30s.
     */
    gracefulRampDown?: string | undefined;
}

/**
 * A fixed number of iterations are executed in a specified period of time.
 *
 * https://k6.io/docs/using-k6/scenarios/executors/constant-arrival-rate/
 */
export interface ConstantArrivalRateScenario extends BaseScenario {
    executor: "constant-arrival-rate";

    /** Total scenario duration (excluding `gracefulStop`) */
    duration: string;

    /** Number of iterations to execute each `timeUnit` period. */
    rate: number;

    /**
     * Period of time to apply the `rate` value.
     *
     * The default value is 1s.
     */
    timeUnit?: string | undefined;

    /** Number of VUs to pre-allocate before test start in order to preserve runtime resources. */
    preAllocatedVUs: number;

    /**
     * Maximum number of VUs to allow during the test run.
     *
     * The default value is the value of the `preAllocatedVUs` option.
     */
    maxVUs?: number | undefined;
}

/**
 * A variable number of iterations are executed in a specified period of time.
 *
 * https://k6.io/docs/using-k6/scenarios/executors/ramping-arrival-rate/
 */
export interface RampingArrivalRateScenario extends BaseScenario {
    executor: "ramping-arrival-rate";

    /** Maximum number of VUs to allow during the test run. */
    maxVUs?: number | undefined;

    /** Array of objects that specify the number of iterations to ramp up or down to. */
    stages: Stage[];

    /** Number of iterations to execute each `timeUnit` period at test start. */
    startRate?: number | undefined;

    /**
     * Period of time to apply the `startRate` the `stages` target value..
     *
     * The default value is 1s.
     */
    timeUnit?: string | undefined;

    /** Number of VUs to pre-allocate before test start in order to preserve runtime resources. */
    preAllocatedVUs: number;
}

/**
 * Control and scale execution at runtime via k6's REST API or the CLI.
 *
 * https://k6.io/docs/using-k6/scenarios/executors/externally-controlled/
 */
export interface ExternallyControlledScenario extends BaseScenario {
    executor: "externally-controlled";

    /**
     * Number of VUs to run concurrently.
     *
     * The default value is 1.
     */
    vus?: number | undefined;

    /** Total scenario duration (excluding `gracefulStop`) */
    duration: string;

    /** Maximum number of VUs to allow during the test run. */
    maxVUs?: number | undefined;
}

export type Scenario = SharedIterationsScenario |
                       PerVUIterationsScenario |
                       ConstantVUsScenario |
                       RampingVUsScenario |
                       ConstantArrivalRateScenario |
                       RampingArrivalRateScenario |
                       ExternallyControlledScenario;
