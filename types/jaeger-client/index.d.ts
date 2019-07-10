// Type definitions for jaeger-client 3.15
// Project: https://github.com/jaegertracing/jaeger-client-node#readme
// Definitions by: jgeth <https://github.com/jgeth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

// opentracing requires typescript version ^2.1
import * as opentracing from "opentracing";
import * as prometheus from "prom-client";

// Counter tracks the number of times an event has occurred
export interface Counter {
    // Adds the given value to the counter.
    increment(delta: number): void;
}

// Gauge returns instantaneous measurements of something as an int64 value
export interface Gauge {
    // Update the gauge to the value passed in.
    update(value: number): void;
}

export interface Logger {
    info(msg: string): void;
    error(msg: string): void;
}

export interface MetricsFactory {
    createCounter(name: string, tags: any): Counter;
    createTimer(name: string, tags: any): Timer;
    createGauge(name: string, tags: any): Gauge;
}

export interface Reporter {
    // TODO: use span type opentracing.Span from package 'opentracing' which fails DTS linting on import 2019-05-28 jgeth
    report(span: opentracing.Span): void;
    close(callback?: () => void): void;
    setProcess(serviceName: string, tags: any): void;
}

export interface ReporterConfig {
    logSpans?: boolean;
    agentHost?: string;
    agentPort?: number;
    flushIntervalMs?: number;
}

export interface SamplerConfig {
    type: string;
    param: number;
    host?: string;
    port?: number;
    refreshIntervalMs?: number;
}

// Timer tracks how long an operation took and also computes percentiles.
export interface Timer {
    // Records the time passed in.
    record(value: number): void;
}

export interface TracingConfig {
    serviceName?: string;
    disable?: boolean;
    sampler?: SamplerConfig;
    reporter?: ReporterConfig;
}

export interface TracingOptions {
    reporter?: Reporter;
    metrics?: PrometheusMetricsFactory;
    logger?: Logger;
    tags?: any;
}

export function initTracer(
    tracingConfig: TracingConfig,
    tracingOptions: TracingOptions
): opentracing.Tracer;

export function initTracerFromEnv(
    tracingConfig: TracingConfig,
    tracingOptions: TracingOptions
): opentracing.Tracer;

export class PrometheusMetricsFactory {
    constructor(client: typeof prometheus, serviceName: string);
    createCounter(name: string, tags: {}): Counter;
    createGauge(name: string, tags: {}): Gauge;
}
