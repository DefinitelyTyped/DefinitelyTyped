// Type definitions for dd-trace-js 0.6
// Project: https://github.com/DataDog/dd-trace-js
// Definitions by: Colin Bradley <https://github.com/ColinBradley>
//                 Eloy Durán <https://github.com/alloy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

// Prettified with:
// $ prettier --parser typescript --tab-width 4 --semi --trailing-comma es5 --write --print-width 120 types/dd-trace/{,*}/*.ts*

import { Tracer, Span, SpanContext } from "opentracing";
import DatadogSpanContext = require("./src/opentracing/span_context");

declare var trace: TraceProxy;
export = trace;

declare class TraceProxy extends Tracer {
    /**
     * Initializes the tracer. This should be called before importing other libraries.
     */
    init(options?: TracerOptions): this;

    /**
     * Enable and optionally configure a plugin.
     * @param plugin The name of a built-in plugin.
     * @param config Configuration options.
     */
    use<P extends Plugin>(plugin: P, config: PluginConfiguration[P]): this;

    /**
     * Initiate a trace and creates a new span.
     * @param operationName The operation name to be used for this span.
     * @param options Configuration options. These will take precedence over environment variables.
     */
    trace(operationName: string, options: TraceOptions): Promise<Span>;

    /**
     * Initiate a trace and creates a new span.
     * @param operationName The operation name to be used for this span.
     * @param options Configuration options. These will take precedence over environment variables.
     */
    trace(operationName: string, options: TraceOptions, callback: (span: Span) => void): void;

    /**
     * Get the span from the current context.
     * @returns The current span or null if outside a trace context.
     */
    currentSpan(): Span | null;

    /**
     * Get the scope manager to manager context propagation for the tracer.
     */
    scopeManager(): ScopeManager;
}

interface TracerOptions {
    /**
     * Enable debug logging in the tracer.
     * @default false
     */
    debug?: boolean;

    /**
     * The service name to be used for this program.
     */
    service?: string;

    /**
     * The address of the trace agent that the tracer will submit to.
     * @default 'localhost'
     */
    hostname?: string;

    /**
     * The port of the trace agent that the tracer will submit to.
     * @default 8126
     */
    port?: number | string;

    /**
     * Percentage of spans to sample as a float between 0 and 1.
     * @default 1
     */
    sampleRate?: number;

    /**
     * Interval in milliseconds at which the tracer will submit traces to the agent.
     * @default 2000
     */
    flushInterval?: number;

    /**
     * Experimental features can be enabled all at once by using true or individually using key / value pairs.
     * @default {}
     */
    experimental?: ExperimentalOptions | boolean;

    /**
     * Whether to load all built-in plugins.
     * @default true
     */
    plugins?: boolean;

    /**
     * Custom logger to be used by the tracer (if debug = true),
     * should support debug() and error() methods
     * see https://datadog.github.io/dd-trace-js/#custom-logging__anchor
     */
    logger?: {
        debug: (message: string) => void;
        error: (err: Error) => void;
    };
}

interface ExperimentalOptions {}

interface TraceOptions {
    /**
     * The service name to be used for this span.
     * The service name from the tracer will be used if this is not provided.
     */
    service?: string;

    /**
     * The resource name to be used for this span.
     * The operation name will be used if this is not provided.
     */
    resource?: string;

    /**
     * The span type to be used for this span.
     */
    type?: string;

    /**
     * The parent span or span context for the new span. Generally this is not needed as it will be
     * fetched from the current context.
     * If creating your own, this must be an instance of DatadogSpanContext from ./src/opentracing/span_context
     * See: https://github.com/DataDog/dd-trace-js/blob/master/src/opentracing/tracer.js#L99
     */
    childOf?: Span | SpanContext | DatadogSpanContext;

    /**
     * Global tags that should be assigned to every span.
     */
    tags?: { [key: string]: any } | string;
}

declare class ScopeManager {
    /**
     * Get the current active scope or null if there is none.
     *
     * @todo The dd-trace source returns null, but opentracing's childOf span
     *       option is typed as taking undefined or a scope, so using undefined
     *       here instead.
     */
    active(): Scope | undefined;

    /**
     * Activate a new scope wrapping the provided span.
     *
     * @param span The span for which to activate the new scope.
     * @param finishSpanOnClose Whether to automatically finish the span when the scope is closed.
     */
    activate(span: Span, finishSpanOnClose?: boolean): Scope;
}

declare class Scope {
    /**
     * Get the span wrapped by this scope.
     */
    span(): Span;

    /**
     * Close the scope, and finish the span if the scope was created with `finishSpanOnClose` set to true.
     */
    close(): void;
}

type Plugin =
    | "amqp10"
    | "amqplib"
    | "elasticsearch"
    | "express"
    | "graphql"
    | "hapi"
    | "http"
    | "ioredis"
    | "koa"
    | "memcached"
    | "mongodb-core"
    | "mysql"
    | "mysql2"
    | "pg"
    | "redis"
    | "restify";

interface BasePluginOptions {
    /**
     * The service name to be used for this plugin.
     */
    service?: string;
}

interface BaseWebFrameworkPluginOptions extends BasePluginOptions {
    /**
     * An array of headers to include in the span metadata.
     */
    headers?: string[];

    /**
     * Callback function to determine if there was an error. It should take a
     * status code as its only parameter and return `true` for success or `false`
     * for errors.
     */
    validateStatus?: (code: number) => boolean;
}

interface ExpressPluginOptions extends BaseWebFrameworkPluginOptions {}

interface HapiPluginOptions extends BaseWebFrameworkPluginOptions {}

interface KoaPluginOptions extends BaseWebFrameworkPluginOptions {}

interface RestifyPluginOptions extends BaseWebFrameworkPluginOptions {}

interface GraphQLPluginOptions extends BasePluginOptions {
    /**
     * The maximum depth of fields/resolvers to instrument. Set to `0` to only
     * instrument the operation or to -1 to instrument all fields/resolvers.
     */
    depth?: number;

    /**
     * A callback to enable recording of variables. By default, no variables are
     * recorded. For example, using `variables => variables` would record all
     * variables.
     */
    variables?: <T extends { [key: string]: any }>(variables: T) => Partial<T>;
}

interface HTTPPluginOptions extends BasePluginOptions {
    /**
     * Use the remote endpoint host as the service name instead of the default.
     */
    splitByDomain?: boolean;
}

type PluginConfiguration = { [K in Plugin]: BasePluginOptions } & {
    express: ExpressPluginOptions;
    graphql: GraphQLPluginOptions;
    hapi: HapiPluginOptions;
    http: HTTPPluginOptions;
    koa: KoaPluginOptions;
    restify: RestifyPluginOptions;
};
