// Type definitions for dd-trace-js 0.2
// Project: https://github.com/DataDog/dd-trace-js
// Definitions by: Colin Bradley <https://github.com/ColinBradley>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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

interface SpanOptions {
    /**
     * a parent SpanContext (or Span, for convenience) that the newly-started
     * span will be the child of (per REFERENCE_CHILD_OF). If specified,
     * `references` must be unspecified.
     */
    childOf?: Span | SpanContext;

    /**
     * an array of Reference instances, each pointing to a causal parent
     * SpanContext. If specified, `fields.childOf` must be unspecified.
     */
    references?: Reference[];

    /**
     * set of key-value pairs which will be set as tags on the newly created
     * Span. Ownership of the object is passed to the created span for
     * efficiency reasons (the caller should not modify this object after
     * calling startSpan).
     */
    tags?: {
        [key: string]: any;
    };

    /**
     * a manually specified start time for the created Span object. The time
     * should be specified in milliseconds as Unix timestamp. Decimal value are
     * supported to represent time values with sub-millisecond accuracy.
     */
    startTime?: number;
}

/**
 * Tracer is the entry-point between the instrumentation API and the tracing
 * implementation.
 */
declare class Tracer {
    /**
     * Starts and returns a new Span representing a logical unit of work.
     *
     * For example:
     *
     *     // Start a new (parentless) root Span:
     *     var parent = Tracer.startSpan('DoWork');
     *
     *     // Start a new (child) Span:
     *     var child = Tracer.startSpan('load-from-db', {
     *         childOf: parent.context(),
     *     });
     *
     *     // Start a new async (FollowsFrom) Span:
     *     var child = Tracer.startSpan('async-cache-write', {
     *         references: [
     *             opentracing.followsFrom(parent.context())
     *         ],
     *     });
     *
     * @param name - the name of the operation (REQUIRED).
     * @param options - options for the newly created span.
     * @return A new Span object.
     */
    startSpan(name: string, options?: SpanOptions): Span;

    /**
     * Injects the given SpanContext instance for cross-process propagation
     * within `carrier`. The expected type of `carrier` depends on the value of
     * `format.
     *
     * OpenTracing defines a common set of `format` values (see
     * FORMAT_TEXT_MAP, FORMAT_HTTP_HEADERS, and FORMAT_BINARY), and each has
     * an expected carrier type.
     *
     * Consider this pseudocode example:
     *
     *     var clientSpan = ...;
     *     ...
     *     // Inject clientSpan into a text carrier.
     *     var headersCarrier = {};
     *     Tracer.inject(clientSpan.context(), Tracer.FORMAT_HTTP_HEADERS, headersCarrier);
     *     // Incorporate the textCarrier into the outbound HTTP request header
     *     // map.
     *     Object.assign(outboundHTTPReq.headers, headersCarrier);
     *     // ... send the httpReq
     *
     * @param  spanContext - the SpanContext to inject into the
     *         carrier object. As a convenience, a Span instance may be passed
     *         in instead (in which case its .context() is used for the
     *         inject()).
     * @param  format - the format of the carrier.
     * @param  carrier - see the documentation for the chosen `format`
     *         for a description of the carrier object.
     */
    inject(spanContext: SpanContext | Span, format: string, carrier: any): void;

    /**
     * Returns a SpanContext instance extracted from `carrier` in the given
     * `format`.
     *
     * OpenTracing defines a common set of `format` values (see
     * FORMAT_TEXT_MAP, FORMAT_HTTP_HEADERS, and FORMAT_BINARY), and each has
     * an expected carrier type.
     *
     * Consider this pseudocode example:
     *
     *     // Use the inbound HTTP request's headers as a text map carrier.
     *     var headersCarrier = inboundHTTPReq.headers;
     *     var wireCtx = Tracer.extract(Tracer.FORMAT_HTTP_HEADERS, headersCarrier);
     *     var serverSpan = Tracer.startSpan('...', { childOf : wireCtx });
     *
     * @param  format - the format of the carrier.
     * @param  carrier - the type of the carrier object is determined by
     *         the format.
     * @return The extracted SpanContext, or null if no such SpanContext could
     *         be found in `carrier`
     */
    extract(format: string, carrier: any): SpanContext | null;
}

declare class Span {
    /**
     * Returns the SpanContext object associated with this Span.
     */
    context(): SpanContext;

    /**
     * Returns the Tracer object used to create this Span.
     */
    tracer(): Tracer;

    /**
     * Sets the string name for the logical operation this span represents.
     */
    setOperationName(name: string): this;

    /**
     * Sets a key:value pair on this Span that also propagates to future
     * children of the associated Span.
     *
     * setBaggageItem() enables powerful functionality given a full-stack
     * opentracing integration (e.g., arbitrary application data from a web
     * client can make it, transparently, all the way into the depths of a
     * storage system), and with it some powerful costs: use this feature with
     * care.
     *
     * IMPORTANT NOTE #1: setBaggageItem() will only propagate baggage items to
     * *future* causal descendants of the associated Span.
     *
     * IMPORTANT NOTE #2: Use this thoughtfully and with care. Every key and
     * value is copied into every local *and remote* child of the associated
     * Span, and that can add up to a lot of network and cpu overhead.
     */
    setBaggageItem(key: string, value: string): this;

    /**
     * Returns the value for a baggage item given its key.
     *
     * @param  key
     *         The key for the given trace attribute.
     * @return String value for the given key, or undefined if the key does not
     *         correspond to a set trace attribute.
     */
    getBaggageItem(key: string): string | undefined;

    /**
     * Adds a single tag to the span.  See `addTags()` for details.
     */
    setTag(key: string, value: any): this;

    /**
     * Adds the given key value pairs to the set of span tags.
     *
     * Multiple calls to addTags() results in the tags being the superset of
     * all calls.
     *
     * The behavior of setting the same key multiple times on the same span
     * is undefined.
     *
     * The supported type of the values is implementation-dependent.
     * Implementations are expected to safely handle all types of values but
     * may choose to ignore unrecognized / unhandle-able values (e.g. objects
     * with cyclic references, function objects).
     */
    addTags(keyValueMap: {
        [key: string]: any;
    }): this;

    /**
     * Add a log record to this Span, optionally at a user-provided timestamp.
     *
     * For example:
     *
     *     span.log({
     *         size: rpc.size(),  // numeric value
     *         URI: rpc.URI(),  // string value
     *         payload: rpc.payload(),  // Object value
     *         "keys can be arbitrary strings": rpc.foo(),
     *     });
     *
     *     span.log({
     *         "error.description": someError.description(),
     *     }, someError.timestampMillis());
     *
     * @param keyValuePairs
     *        An object mapping string keys to arbitrary value types. All
     *        Tracer implementations should support bool, string, and numeric
     *        value types, and some may also support Object values.
     * @param timestamp
     *        An optional parameter specifying the timestamp in milliseconds
     *        since the Unix epoch. Fractional values are allowed so that
     *        timestamps with sub-millisecond accuracy can be represented. If
     *        not specified, the implementation is expected to use its notion
     *        of the current time of the call.
     */

    log(keyValuePairs: {
        [key: string]: any;
    }, timestamp?: number): this;

    /**
     * Sets the end timestamp and finalizes Span state.
     *
     * With the exception of calls to Span.context() (which are always allowed),
     * finish() must be the last call made to any span instance, and to do
     * otherwise leads to undefined behavior.
     *
     * @param  finishTime
     *         Optional finish time in milliseconds as a Unix timestamp. Decimal
     *         values are supported for timestamps with sub-millisecond accuracy.
     *         If not specified, the current time (as defined by the
     *         implementation) will be used.
     */
    finish(finishTime?: number): void;
}

declare class Reference {
    /**
     * @return The Reference type (e.g., REFERENCE_CHILD_OF or
     *         REFERENCE_FOLLOWS_FROM).
     */
    type(): string;

    /**
     * @return The SpanContext being referred to (e.g., the
     *         parent in a REFERENCE_CHILD_OF Reference).
     */
    referencedContext(): SpanContext;

    /**
     * Initialize a new Reference instance.
     *
     * @param type - the Reference type constant (e.g.,
     *        REFERENCE_CHILD_OF or REFERENCE_FOLLOWS_FROM).
     * @param referencedContext - the SpanContext being referred
     *        to. As a convenience, a Span instance may be passed in instead
     *        (in which case its .context() is used here).
     */
    constructor(type: string, referencedContext: SpanContext | Span);
}

/**
 * SpanContext represents Span state that must propagate to descendant Spans
 * and across process boundaries.
 *
 * SpanContext is logically divided into two pieces: the user-level "Baggage"
 * (see setBaggageItem and getBaggageItem) that propagates across Span
 * boundaries and any Tracer-implementation-specific fields that are needed to
 * identify or otherwise contextualize the associated Span instance (e.g., a
 * <trace_id, span_id, sampled> tuple).
 */
declare class SpanContext {
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
