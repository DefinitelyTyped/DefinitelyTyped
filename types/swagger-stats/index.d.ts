// TypeScript Version: 2.9

/// <reference types="node" />

import { Server } from "@hapi/hapi";
import { RequestHandler } from "express";
import { FastifyInstance } from "fastify";
import { IncomingHttpHeaders, IncomingMessage, OutgoingHttpHeaders, ServerResponse } from "http";
import * as PromClient from "prom-client";

export type SWStats = Partial<{
    /**
     * Hostname. Will attempt to detect if not provided.
     */
    hostname: string;
    /**
     * Your service name. Defaults to hostname if not specified. Will be returned in stats as specified.
     */
    name: string;
    /**
     * Your service version. Will be returned in stats as specified.
     */
    version: string;
    /**
     * IP Address. Will attempt to detect if not provided.
     */
    ip: string;
    /**
     * Swagger specification object. Should be pre-validated and with resolved references. Optional.
     */
    swaggerSpec: Record<any, any>;
    /**
     * Base path for swagger-stats APIs.
     * If specified, will be used to serve UI, stats and metrics like this:
     * /{uriPath}/ui, /{uriPath}/stats, /{uriPath}/metrics
     *
     * @default /swagger-stats
     */
    uriPath: string;
    /**
     * Duration of timeline bucket in milliseconds.
     * Timeline always stores 60 last time buckets, with this option you may adjust timeline granularity and length.
     *
     * @default 60000 (1 min) making timeline 1 hour.
     */
    timelineBucketDuration: number;
    /**
     * Buckets for duration histogram metrics, in Milliseconds.
     * The default buckets are tailored to broadly measure API response time.Most likely needs to be defined per app to account for application specifics.
     *
     * @default [5, 10, 25, 50, 100, 250, 500, 1000, 2500, 5000, 10000]
     */
    durationBuckets: number[];
    /**
     * Buckets for request size histogram metric, in Bytes.
     * The default buckets are tailored to broadly measure API request size.Most likely needs to be defined per app to account for application specifics.
     *
     * @default [5, 10, 25, 50, 100, 250, 500, 1000, 2500, 5000, 10000]
     */
    requestSizeBuckets: number[];
    /**
     * Buckets for response size histogram metric, in Bytes.
     * The default buckets are tailored to broadly measure API response size.Most likely needs to be defined per app to account for application specifics.
     *
     * @default [5, 10, 25, 50, 100, 250, 500, 1000, 2500, 5000, 10000]
     */
    responseSizeBuckets: number[];
    /**
     * Apdex Threshold, in milliseconds. In Apdex calculation, request is considered satisfied if it is answered in less then this
     * threshold, and request is tolerating if it's answered in less than threshold * 4.
     * Make sure both threshold and threshold * 4 are buckets in durationBuckets, so Apdex calculation can be done using Prometheus metrics.
     *
     * @default 25
     */
    apdexThreshold: number;
    /**
     * Callback to invoke when response is finished.
     * Application may implement it to trace Request Response Record (RRR), which is passed as parameter.
     * The following parameters are passed to this callback:
     * onResponseFinish(req,res,rrr)
     * - req - request
     * - res - response
     * - rrr - Request Response Record (RRR)
     */
    onResponseFinish: (req: IncomingMessage, res: ServerResponse, rrr: RequestResponseRecord) => void;
    /**
     * Enable Basic authentication.
     *
     * @default false
     */
    authentication: boolean;
    /**
     * If authentication is enabled, callback to authenticate request to /swagger-stats/stats and /swagger-stats/metrics.
     * Application must implement onAuthenticate to validate user credentials.
     * The following parameters are passed to this callback:
     * onAuthenticate(req,username,password)
     * - req - request
     * - username - username
     * - password - password
     * Must return true if user authenticated, false if not.
     */
    onAuthenticate: (req: IncomingMessage, username: string, password: string) => boolean | Promise<boolean>;
    /**
     * If authentication is enabled, max age of the session, in seconds.
     *
     * @default 900
     */
    sessionMaxAge: number;
    /**
     * Elasticsearch URL. If specified, enables storing of request response records in Elasticsearch.
     *
     * @default disabled
     */
    elasticsearch: string;
    /**
     * Elasticsearch index prefix.
     */
    elasticsearchIndexPrefix: string;
    /**
     * Username to authenticate with Elasticsearch.
     */
    elasticsearchUsername: string;
    /**
     * Password to authenticate with Elasticsearch.
     */
    elasticsearchPassword: string;
    /**
     * Set to true to track only requests defined in swagger spec.
     *
     * @default false
     */
    swaggerOnly: boolean;
    /**
     * Prometheus metrics prefix. Will be prepended to metric name if specified.
     */
    metricsPrefix: string;
    /**
     * Enables Egress HTTP monitoring.
     *
     * @default false
     */
    enableEgress: boolean;
    // Setting these currently has no effect
    // pathUI: string;
    // pathDist: string;
    // pathUX: string;
    // pathStats: string;
    // pathMetrics: string;
    // pathLogout: string;
}>;

export namespace getHapiPlugin {
    const name: string;
    const version: string;
    function register(server: Server, opts?: SWStats): Promise<void>;
}

export function getFastifyPlugin(
    fastify: FastifyInstance,
    opts: SWStats,
    done: () => void,
): void;

export function getMiddleware(opts?: SWStats): RequestHandler;

export interface ReqResStats {
    requests: number;
    responses: number;
    errors: number;
    info: number;
    success: number;
    redirect: number;
    client_error: number;
    server_error: number;
    total_time: number;
    max_time: number;
    avg_time: number;
    total_req_clength: number;
    max_req_clength: number;
    avg_req_clength: number;
    total_res_clength: number;
    max_res_clength: number;
    avg_res_clength: number;
    req_rate: number;
    err_rate: number;
    apdex_threshold: number;
    apdex_satisfied: number;
    apdex_tolerated: number;
    apdex_score: number;
}

export interface SysStats {
    rss: number;
    heapTotal: number;
    heapUsed: number;
    external: number;
    cpu: number;
}

export interface TimelineStatsData {
    stats: ReqResStats;
    sys: SysStats;
}

export interface TimelineStats {
    settings: {
        bucket_duration: number;
        bucket_current: number;
        length: number;
    };
    data: Record<string, TimelineStatsData>;
}

type HTTPMethodSubset = "GET" | "POST" | "PUT" | "DELETE";
export type HTTPMethod =
    | HTTPMethodSubset
    | "HEAD"
    | "OPTIONS"
    | "TRACE"
    | "PATCH";

export interface RequestResponseRecord {
    path: string;
    method: string;
    query: string;
    startts: number;
    endts: number;
    responsetime: number;
    node: {
        name: string;
        version: string;
        hostname: string;
        ip: string;
    };
    http: {
        request: {
            url: string;
            headers?: IncomingHttpHeaders | undefined;
            clength?: number | undefined;
            route_path?: string | undefined;
            params?: Record<string, any> | undefined;
            query?: Record<string, any> | undefined;
            body?: any;
        };
        response: {
            code: string;
            class: string;
            phrase: string;
            headers?: OutgoingHttpHeaders | undefined;
            clength?: number | undefined;
        };
    };
    ip: string;
    real_ip: string;
    port: string;
    "@timestamp": string;
    api: {
        path: string;
        query: string;
        swagger?: string | undefined;
        deprecated?: string | undefined;
        operationId?: string | undefined;
        tags?: string | undefined;
        params?: string | undefined;
    };
    attrs?: Record<string, string> | undefined;
    attrsint?: Record<string, number> | undefined;
    [field: string]: any;
}

export interface APIOperationDefinition {
    swagger: boolean;
    deprecated: boolean;
    description?: string | undefined;
    operationId?: string | undefined;
    summary?: string | undefined;
    tags?: any;
}

export interface ErrorsStats {
    statuscode: Record<number, number>;
    topnotfound: Record<string, number>;
    topservererror: Record<string, number>;
}

export interface APIOperationStats {
    defs?: APIOperationDefinition | undefined;
    stats?: APIOperationDefinition | undefined;
    details?: APIOperationDefinition | undefined;
}

export interface CoreStats {
    startts: number;
    all: ReqResStats;
    egress: ReqResStats;
    sys: SysStats;
    name: string;
    version: string;
    hostname: string;
    ip: string;
    apdexThreshold: number;
    method?: Record<HTTPMethodSubset, ReqResStats> | undefined;
    timeline?: TimelineStats | undefined;
    lasterrors?: RequestResponseRecord[] | undefined;
    longestreq?: RequestResponseRecord[] | undefined;
    apidefs?: Record<string, Record<HTTPMethod, APIOperationDefinition>> | undefined;
    apistats?: Record<string, Record<HTTPMethod, ReqResStats>> | undefined;
    errors?: ErrorsStats | undefined;
    apiop?: Record<string, Record<HTTPMethod, APIOperationStats>> | undefined;
}

export function getCoreStats(): CoreStats;

export function getPromStats(): string;

export function getPromClient(): typeof PromClient;

export function stop(): void;

export {};
