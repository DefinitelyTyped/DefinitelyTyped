// Type definitions for jaeger-client 3.18
// Project: https://github.com/jaegertracing/jaeger-client-node#readme
// Definitions by: jgeth <https://github.com/jgeth>
//                 tsachis <https://github.com/tsachi>
//                 MiLk <https://github.com/MiLk>
//                 doochik <https://github.com/doochik>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

// This extracts the core definitions from express to prevent a circular dependency between express and serve-static
/// <reference types="node" />

// opentracing requires typescript version ^2.1
import { SocketOptions, SocketType } from "dgram";
import * as opentracing from "opentracing";
import * as prometheus from "prom-client";

export { opentracing };
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
    logSpans?: boolean | undefined;
    agentHost?: string | undefined;
    agentPort?: number | undefined;
    agentSocketType?: SocketType | SocketOptions | undefined;
    collectorEndpoint?: string | undefined;
    username?: string | undefined;
    password?: string | undefined;
    flushIntervalMs?: number | undefined;
}

export interface SamplerConfig {
    type: string;
    param: number;
    hostPort?: string | undefined;
    host?: string | undefined;
    port?: number | undefined;
    refreshIntervalMs?: number | undefined;
}

// Timer tracks how long an operation took and also computes percentiles.
export interface Timer {
    // Records the time passed in.
    record(value: number): void;
}

export interface TracingConfig {
    serviceName?: string | undefined;
    disable?: boolean | undefined;
    sampler?: SamplerConfig | undefined;
    reporter?: ReporterConfig | undefined;
    traceId128bit?: boolean | undefined;
    shareRpcSpan?: boolean | undefined;
}

export interface TracingOptions {
    reporter?: Reporter | undefined;
    metrics?: PrometheusMetricsFactory | undefined;
    logger?: Logger | undefined;
    tags?: any;
    traceId128bit?: boolean | undefined;
    contextKey?: string;
}

export interface Injector {
    inject(spanContext: opentracing.SpanContext, carrier: any): void;
}

export interface Extractor {
    extract(carrier: any): opentracing.SpanContext | null;
}

export class JaegerTracer extends opentracing.Tracer {
    registerInjector(format: string, injector: Injector): void;
    registerExtractor(format: string, extractor: Extractor): void;
    close(callback?: () => void): void;
}

export function initTracer(
    tracingConfig: TracingConfig,
    tracingOptions: TracingOptions
): JaegerTracer;

export function initTracerFromEnv(
    tracingConfig: TracingConfig,
    tracingOptions: TracingOptions
): JaegerTracer;

export class PrometheusMetricsFactory {
    constructor(client: typeof prometheus, serviceName?: string);
    createCounter(name: string, tags: {}): Counter;
    createGauge(name: string, tags: {}): Gauge;
}

export interface TextMapCodecOptions {
    urlEncoding?: boolean | undefined;
    contextKey?: string | undefined;
    baggagePrefix?: string | undefined;
    metrics?: MetricsFactory | undefined;
}

export class TextMapCodec implements Injector, Extractor {
    constructor(options: TextMapCodecOptions);
    inject(spanContext: opentracing.SpanContext, carrier: any): void;
    extract(carrier: any): opentracing.SpanContext | null;
}

export interface ZipkinB3TextMapCodecOptions {
    urlEncoding?: boolean | undefined;
    baggagePrefix?: string | undefined;
    metrics?: MetricsFactory | undefined;
}

export class ZipkinB3TextMapCodec implements Injector, Extractor {
    constructor(options: ZipkinB3TextMapCodecOptions);
    inject(spanContext: opentracing.SpanContext, carrier: any): void;
    extract(carrier: any): opentracing.SpanContext | null;
}
