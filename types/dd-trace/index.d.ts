// Type definitions for dd-trace-js 0.2
// Project: https://github.com/DataDog/dd-trace-js
// Definitions by: Colin Bradley <https://github.com/ColinBradley>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import Tracer = require('./src/opentracing/tracer');
import Span = require('./src/opentracing/span');
import SpanContext = require('./src/opentracing/span_context');

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
    use(plugin: string, config: PluginOptions): this;

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
}

interface ExperimentalOptions {
    /**
     * Whether to use Node's experimental async hooks.
     * @default false
     */
    asyncHooks?: boolean;
}

interface PluginOptions {
    /**
     * The service name to be used for this plugin.
     */
    service: string;
}

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
     */
    childOf?: Span | SpanContext;

    /**
     * Global tags that should be assigned to every span.
     */
    tags?: { [key: string]: any; } | string;
}
