// https://docs.newrelic.com/docs/agents/nodejs-agent/api-guides/nodejs-agent-api

/**
 * Give the current transaction a custom name.
 *
 * Overrides any New Relic naming rules set in configuration or from New Relic's servers.
 *
 * IMPORTANT: this function must be called when a transaction is active. New
 * Relic transactions are tied to web requests, so this method may be called
 * from within HTTP or HTTPS listener functions, Express routes, or other
 * contexts where a web request or response object are in scope.
 *
 * The `name` will be prefixed with 'Custom/' when sent.
 */
export function setTransactionName(name: string): void;

/**
 * Returns a handle on the currently executing transaction.
 *
 * This handle can then be used to end or ignore a given transaction safely from any context.
 * It is best used with newrelic.startWebTransaction() and newrelic.startBackgroundTransaction().
 */
export function getTransaction(): TransactionHandle;

/**
 * Specify the `Dispatcher` and `Dispatcher Version` environment values.
 *
 * A dispatcher is typically the service responsible for brokering
 * the request with the process responsible for responding to the
 * request.  For example Node's `http` module would be the dispatcher
 * for incoming HTTP requests.
 */
export function setDispatcher(name: string, version?: string): void;

/**
 * Give the current transaction a name based on your own idea of what
 * constitutes a controller in your Node application. Also allows you to
 * optionally specify the action being invoked on the controller. If the action
 * is omitted, then the API will default to using the HTTP method used in the
 * request (e.g. GET, POST, DELETE). Overrides any New Relic naming rules set
 * in configuration or from New Relic's servers.
 *
 * IMPORTANT: this function must be called when a transaction is active. New
 * Relic transactions are tied to web requests, so this method may be called
 * from within HTTP or HTTPS listener functions, Express routes, or other
 * contexts where a web request or response object are in scope.
 *
 * The `name` will be prefixed with 'Controller/' when sent.
 * The `action` defaults to the HTTP method used for the request.
 */
export function setControllerName(name: string, action: string): void;

/**
 * Add a custom attribute to the current transaction.
 *
 * Some attributes are reserved (see CUSTOM_BLACKLIST in the docs for the current, very short list), and
 * as with most API methods, this must be called in the context of an
 * active transaction.
 *
 * Most recently set value wins.
 */
export function addCustomAttribute(key: string, value: string | number | boolean): void;

/**
 * Adds all custom attributes in an object to the current transaction.
 *
 * See documentation for `addCustomAttribute` for more information on setting custom attributes.
 */
export function addCustomAttributes(atts: { [key: string]: string | number | boolean }): void;

/**
 * Add a custom attribute to the the currently executing span.
 *
 * Some attributes are reserved (see CUSTOM_BLACKLIST in the docs for the current, very short list), and
 * as with most API methods, this must be called in the context of an active segment/span.
 *
 * Most recently set value wins.
 */
export function addCustomSpanAttribute(key: string, value: string | number | boolean): void;

/**
 * Adds all custom attributes in an object to the the currently executing span.
 *
 * See documentation for `addCustomSpanAttribute` for more information on setting custom attributes.
 */
export function addCustomSpanAttributes(atts: { [key: string]: string | number | boolean }): void;

/**
 * Send errors to New Relic that you've already handled yourself.
 *
 * NOTE: Errors that are recorded using this method do _not_ obey the `ignore_status_codes` configuration.
 */
export function noticeError(error: Error, expected?: boolean): void;

/**
 * Send errors to New Relic that you've already handled yourself.
 *
 * NOTE: Errors that are recorded using this method do _not_ obey the `ignore_status_codes` configuration.
 *
 *  Optional. Any custom attributes to be displayed in the New Relic UI.
 */
export function noticeError(
    error: Error,
    customAttributes?: { [key: string]: string | number | boolean },
    expected?: boolean,
): void;

/**
 * This method lets you define a custom callback to generate error group names, which will be used by
 * errors inbox to group similar errors together via the error.group.name agent attribute.
 *
 * Calling this function multiple times will replace previously defined versions of this callback function.
 */
export function setErrorGroupCallback(
    callback: (metadata: {
        customAttributes: { [key: string]: string | number | boolean };
        "request.uri": string;
        "http.statusCode": string;
        "http.method": string;
        error?: Error;
        "error.expected": boolean;
    }) => string,
): void;

/**
 * Sends an application log message to New Relic. The agent already
 * automatically does this for some instrumented logging libraries,
 * but in case you are using another logging method that is not
 * already instrumented by the agent, you can use this function
 * instead.
 *
 * If application log forwarding is disabled in the agent
 * configuration, this function does nothing.
 *
 * An example of using this function is
 *
 *    newrelic.recordLogEvent({
 *       message: 'cannot find file',
 *       level: 'ERROR',
 *       error: new SystemError('missing.txt')
 *    })
 */
export function recordLogEvent(logEvent: LogEvent): void;

/**
 * If the URL for a transaction matches the provided pattern, name the
 * transaction with the provided name.
 *
 * If there are capture groups in the pattern (which is a standard JavaScript regular expression,
 * and can be passed as either a RegExp or a string), then the substring matches ($1, $2,
 * etc.) are replaced in the name string. BE CAREFUL WHEN USING SUBSTITUTION.
 * If the replacement substrings are highly variable (i.e. are identifiers,
 * GUIDs, or timestamps), the rule will generate too many metrics and
 * potentially get your application blacklisted by New Relic.
 *
 * An example of a good rule with replacements:
 *
 *   newrelic.addNamingRule('^/storefront/(v[1-5])/(item|category|tag)', 'CommerceAPI/$1/$2')
 *
 * An example of a bad rule with replacements:
 *
 *   newrelic.addNamingRule('^/item/([0-9a-f]+)', 'Item/$1')
 *
 * Keep in mind that the original URL and any query parameters will be sent
 * along with the request, so slow transactions will still be identifiable.
 *
 * Naming rules can not be removed once added. They can also be added via the
 * agent's configuration. See configuration documentation for details.
 */
export function addNamingRule(pattern: RegExp | string, name: string): void;

/**
 * If the URL for a transaction matches the provided pattern, ignore the transaction attached to that URL.
 *
 * Useful for filtering socket.io connections and other long-polling requests out of your agents to keep
 * them from distorting an app's apdex or mean response time.
 *
 * Example:
 *
 *   newrelic.addIgnoringRule('^/socket\\.io/')
 */
export function addIgnoringRule(pattern: RegExp | string): void;

/**
 * Get the <script>...</script> header necessary for Browser Monitoring.
 *
 * This script must be manually injected into your templates, as high as possible
 * in the header, but _after_ any X-UA-COMPATIBLE HTTP-EQUIV meta tags.
 * Otherwise you may hurt IE!
 *
 * This method must be called _during_ a transaction, and must be called every
 * time you want to generate the headers.
 *
 * Do *not* reuse the headers between users, or even between requests.
 */
export function getBrowserTimingHeader(options?: {
    nonce?: string;
    hasToRemoveScriptWrapper?: boolean;
    allowTransactionlessInjection?: boolean;
}): string;

/**
 * Instrument a particular method to improve visibility into a transaction,
 * or optionally turn it into a metric.
 *
 * The name defines a name for the segment. This name will be visible in transaction traces and
 * as a new metric in the New Relic UI.
 * The record flag defines whether the segment should be recorded as a metric.
 * The handler is the function you want to track as a segment.
 * The optional callback is a function passed to the handler to fire after its work is done.
 *
 * The agent begins timing the segment when startSegment is called.
 * The segment is ended when either the handler finishes executing, or callback is fired, if it is provided.
 * If a promise is returned from the handler, the segment's ending will be tied to that promise resolving or rejecting.
 */
export function startSegment<T, C extends (...args: any[]) => any>(
    name: string,
    record: boolean,
    handler: (cb?: C) => T,
    callback?: C,
): T;

/**
 * Instrument a particular callback to improve visibility into a transaction.
 *
 * Use this API call to improve instrumentation of a particular method, or to track work across asynchronous
 * boundaries by calling createTracer() in both the target function and its parent asynchronous function.
 *
 * The name will be visible in transaction traces and as a new metric in the New Relic UI.
 *
 * The agent begins timing the segment when createTracer is called, and ends the segment when the callback
 * defined by the callback argument finishes executing.
 *
 * This method has been deprecated in favor of newrelic.startSegment()
 */
export function createTracer<T extends (...args: any[]) => any>(name: string, handle: T): T;

/**
 * Creates and starts a web transaction to record work done in the handle supplied.
 *
 * This transaction will run until the handle
 * synchronously returns UNLESS:
 * 1. The handle function returns a promise, where the end of the
 *    transaction will be tied to the end of the promise returned.
 * 2. `getTransaction` is called in the handle, flagging the
 *    transaction as externally handled.  In this case the transaction
 *    will be ended when `TransactionHandle#end` is called in the user's code.
 *
 * Example:
 * var newrelic = require('newrelic')
 * newrelic.startWebTransaction('/some/url/path', function() {
 *   var transaction = newrelic.getTransaction()
 *   setTimeout(function() {
 *     // do some work
 *     transaction.end()
 *   }, 100)
 * })
 *
 * The `url` is used to name and group related transactions in APM,
 * so it should be a generic name and not include any variable parameters.
 */
export function startWebTransaction<T>(url: string, handle: Promise<T>): Promise<T>;
export function startWebTransaction<T>(url: string, handle: (...args: any[]) => T): T;

/**
 * Creates and starts a background transaction to record work done in the handle supplied.
 *
 * This transaction will run until the handle
 * synchronously returns UNLESS:
 * 1. The handle function returns a promise, where the end of the
 *    transaction will be tied to the end of the promise returned.
 * 2. `API#getTransaction` is called in the handle, flagging the
 *    transaction as externally handled.  In this case the transaction
 *    will be ended when `TransactionHandle#end` is called in the user's code.
 *
 * Example:
 * var newrelic = require('newrelic')
 * newrelic.startBackgroundTransaction('Red October', 'Subs', function() {
 *   var transaction = newrelic.getTransaction()
 *   setTimeout(function() {
 *     // do some work
 *     transaction.end()
 *   }, 100)
 * })
 *
 * The `url` is used to name and group related transactions in APM,
 * so it should be a generic name and not include any variable parameters.
 *
 * The optional `group can be used for grouping background transactions in APM.
 * For more information see:
 *  https://docs.newrelic.com/docs/apm/applications-menu/monitoring/transactions-page#txn-type-dropdown
 */
export function startBackgroundTransaction<T>(name: string, handle: Promise<T>): Promise<T>;
export function startBackgroundTransaction<T>(name: string, handle: (...args: any[]) => T): T;
export function startBackgroundTransaction<T>(name: string, group: string, handle: Promise<T>): Promise<T>;
export function startBackgroundTransaction<T>(name: string, group: string, handle: (...args: any[]) => T): T;

/**
 * End the current web or background custom transaction.
 *
 * This method requires being in the correct transaction context when called.
 */
export function endTransaction(): void;

/**
 * Record an event-based metric, usually associated with a particular duration.
 *
 * The `name` must be a string following standard metric naming rules. The `value` will
 * usually be a number, but it can also be an object.
 *   * When `value` is a numeric value, it should represent the magnitude of a measurement
 *     associated with an event; for example, the duration for a particular method call.
 *   * When `value` is an object, it must contain count, total, min, max, and sumOfSquares
 *     keys, all with number values. This form is useful to aggregate metrics on your own
 *     and report them periodically; for example, from a setInterval. These values will
 *     be aggregated with any previously collected values for the same metric. The names
 *     of these keys match the names of the keys used by the platform API.
 */
export function recordMetric(name: string, value: number | Metric): void;

/**
 * Update a metric that acts as a simple counter.
 *
 * The count of the selected metric will be incremented by the specified amount, defaulting to 1.
 */
export function incrementMetric(name: string, value?: number): void;

/**
 * Record an event-based metric, usually associated with a particular duration.
 *
 * `eventType` must be an alphanumeric string less than 255 characters.
 * The keys of `attributes` must be shorter than 255 characters.
 */
export function recordCustomEvent(
    eventType: string,
    attributes: { [keys: string]: boolean | number | string },
): undefined | false;

/**
 * Registers an instrumentation function.
 *
 * The provided onRequire callback will be fired when the given module is loaded with require.
 * The moduleName parameter should be the string that will be passed to require;
 * for example, 'express' or 'amqplib/callback_api'.
 *
 * The optional onError callback is called if the onRequire parameters throws an error.
 * This is useful for debugging your instrumentation.
 *
 * Use this method to:
 * - Add instrumentation for modules not currently instrumented by New Relic.
 * - Instrument your own code.
 * - Replace the Node.js agent's built-in instrumentation with your own.
 */
export const instrument: Instrument;

/**
 * Sets an instrumentation callback for a datastore module.
 *
 * This method is just like `instrument`, except it provides a datastore-service-specialized shim.
 */
export const instrumentDatastore: Instrument;

/**
 * The instrumentLoadedModule method allows you to add stock instrumentation to specific modules
 * in situations where it's impossible to have require('newrelic'); as the first line of your app's main module.
 */
export function instrumentLoadedModule(moduleName: string, moduleInstance: any): boolean;

/**
 * Sets an instrumentation callback for a web framework module.
 *
 * This method is just like `instrument`, except it provides a web-framework-specialized  shim.
 */
export const instrumentWebframework: Instrument;

/**
 * Sets an instrumentation callback for a message service client module.
 *
 * This method is just like `instrument`, except it provides a message-service-specialized shim.
 */
export const instrumentMessages: Instrument;

/**
 * This method gives you a way to associate a unique identifier with a transaction event,
 * transaction trace and errors within transaction. A new property, `enduser.id`, will be
 * added to the error and reported to errors inbox.
 */
export function setUserID(userID: string): void;

/**
 * Gracefully shuts down the agent.
 *
 * If `collectPendingData` is true, the agent will send any pending data to the collector
 * before shutting down. Defaults to `false`.
 */
export function shutdown(cb?: (error?: Error) => void): void;
export function shutdown(
    options?: {
        collectPendingData?: boolean | undefined;
        timeout?: number | undefined;
        waitForIdle?: boolean | undefined;
    },
    cb?: (error?: Error) => void,
): void;

/**
 * Returns key/value pairs which can be used to link traces or entities.
 * It will only contain items with meaningful values. For instance, if distributed tracing is disabled,
 * trace.id will not be included.
 */
export function getLinkingMetadata(omitSupportability?: boolean): LinkingMetadata;

/**
 * Returns and object containing the current trace ID and span ID.
 * This API requires distributed tracing to be enabled or an empty object will be returned.
 */
export function getTraceMetadata(): TraceMetadata;

/**
 * Wraps an AWS Lambda function with NewRelic instrumentation and returns the wrapped function.
 *
 * The handler should be an AWS Lambda handler function.
 * Returns a function with identical signature to the provided handler function.
 */
export function setLambdaHandler<T extends (...args: any[]) => any>(handler: T): T;

/**
 * Obfuscates SQL for a given database engine.
 */
export function obfuscateSql(sql: string, dialect?: "mysql" | "postgres" | "cassandra" | "oracle"): string;

export interface Instrument {
    (opts: { moduleName: string; onRequire: () => void; onError?: ((err: Error) => void) | undefined }): void;
    (moduleName: string, onRequire: () => void, onError?: (err: Error) => void): void;
}

export interface Metric {
    count: number;
    total: number;
    min: number;
    max: number;
    sumOfSquares: number;
}

export interface DistributedTracePayload {
    /**
     * The base64 encoded JSON representation of the distributed trace payload.
     */
    text(): string;

    /**
     * The base64 encoded JSON representation of the distributed trace payload.
     */
    httpSafe(): string;
}

export type DistributedTraceHeaders = Record<string, number | string | string[] | undefined>;

export interface TransactionHandle {
    /**
     * End the transaction.
     */
    end(callback?: () => any): void;

    /**
     * Mark the transaction to be ignored.
     */
    ignore(): void;

    /**
     * Modifies the headers map that is passed in by adding W3C Trace Context headers
     * and New Relic Distributed Trace headers.
     */
    insertDistributedTraceHeaders(headers: DistributedTraceHeaders): void;

    /**
     * Used to instrument the called service for inclusion in a distributed trace.
     *
     * Links the spans in a trace by accepting a payload generated by `insertDistributedTraceHeaders`
     * or generated by some other W3C Trace Context compliant tracer. This method accepts the headers
     * of an incoming request, looks for W3C Trace Context headers, and if not found, falls back to
     * New Relic distributed trace headers.
     *
     * Check the docs for valid transport types. If an invalid type is provided, it will fall back to "Unknown".
     */
    acceptDistributedTraceHeaders(transportType: string, headers: DistributedTraceHeaders): void;

    /**
     * Return whether this Transaction is being sampled
     */
    isSampled(): boolean;
}

export interface LinkingMetadata {
    /**
     * The current trace ID
     */
    "trace.id"?: string | undefined;

    /**
     * The current span ID
     */
    "span.id"?: string | undefined;

    /**
     * The application name specified in the connect request as
     * app_name. If multiple application names are specified this will only be
     * the first name
     */
    "entity.name": string;

    /**
     * The string "SERVICE"
     */
    "entity.type": string;

    /**
     * The entity ID returned in the connect reply as entity_guid
     */
    "entity.guid"?: string | undefined;

    /**
     * The hostname as specified in the connect request as
     * utilization.full_hostname. If utilization.full_hostname is null or empty,
     * this will be the hostname specified in the connect request as host.
     */
    hostname: string;
}

export interface LogEvent {
    /**
     * The log message
     */
    message: string;

    /**
     * The log level severity. If this key is missing, it will default to "UNKNOWN"
     */
    level?: string | undefined;

    /**
     * ECMAScript epoch number denoting the time that this log message was produced. If this key is missing, it will default to the output of `Date.now()`
     */
    timestamp?: number | undefined;

    /**
     * Error associated to this log event. Ignored if missing.
     */
    error?: Error | undefined;
}

export interface TraceMetadata {
    /**
     * The current trace ID
     */
    traceId?: string | undefined;

    /**
     * The current span ID
     */
    spanId?: string | undefined;
}
/**
 * Run a function with the passed in LLM context as the active context and return its return value.
 *
 * See documentation for `withLlmCustomAttributes` for more information on setting custom attributes.
 */

export function withLlmCustomAttributes<T>(
    attrs: Record<string, number | string | boolean>,
    cb: (...args: any[]) => T,
): T;

/**
 * Registers a callback which will be used for calculating token counts on Llm events when they are not available.
 *
 * See documentation for `setLlmTokenCountCallback` for more information on setting custom attributes.
 */

export function setLlmTokenCountCallback<T>(
    cb: (...args: any[]) => T,
): T;

/**
 * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration
 */
export interface Config {
    /**
     * @name NEW_RELIC_APP_NAME
     * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#app_name
     */
    app_name: string | string[];

    /**
     * @name NEW_RELIC_LICENSE_KEY
     * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#license
     */
    license_key: string;

    /**
     * @name NEW_RELIC_ENABLED
     * @default true
     * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#agent-enabled
     */
    agent_enabled?: undefined | boolean;

    /**
     * @name NEW_RELIC_ALLOW_ALL_HEADERS
     * @default false
     * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#allow_all_headers
     */
    allow_all_headers?: undefined | boolean;

    /**
     * @name NEW_RELIC_COMPRESSED_CONTENT_ENCODING
     * @default "gzip"
     * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#compressed_content_encoding
     */
    compressed_content_encoding?: undefined | string;

    /**
     * @deprecated
     * @name NEW_RELIC_APDEX_T
     * @default 0.100
     * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#apdex
     */
    apdex_t?: undefined | number;

    /**
     * @name NEW_RELIC_CERTIFICATES
     * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#certificates
     */
    certificates?: undefined | string[];

    /**
     * @name NEW_RELIC_HIGH_SECURITY
     * @default false
     * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#high_security
     */
    high_security?: undefined | boolean;

    /**
     * @name NEW_RELIC_HOST
     * @default "collector.newrelic.com"
     * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#host
     */
    host?: undefined | string;

    /**
     * @name NEW_RELIC_LABELS
     * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#labels
     */
    labels?: undefined | Record<string, string>;

    /**
     * @name NEW_RELIC_PORT
     * @default 443
     * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#port
     */
    port?: undefined | number;

    /**
     * @name NEW_RELIC_PROXY_URL
     * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#proxy
     */
    proxy?: undefined | string;

    /**
     * @name NEW_RELIC_PROXY_HOST
     * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#proxy_host
     */
    proxy_host?: undefined | string;

    /**
     * @name NEW_RELIC_PROXY_PASS
     * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#proxy_pass
     */
    proxy_pass?: undefined | string;

    /**
     * @name NEW_RELIC_PROXY_PORT
     * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#proxy_port
     */
    proxy_port?: undefined | string;

    /**
     * @name NEW_RELIC_PROXY_USER
     * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#proxy_user
     */
    proxy_user?: undefined | string;

    logging?: undefined | {
        /**
         * @name NEW_RELIC_LOG_ENABLED
         * @default true // (false in serverless_mode)
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#log-enabled
         */
        enabled?: boolean;

        /**
         * @name NEW_RELIC_LOG_LEVEL
         * @default "info"
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#log_level
         */
        level?: "fatal" | "error" | "warn" | "info" | "debug" | "trace";

        /**
         * @name NEW_RELIC_LOG
         * @default process.cwd() + "newrelic_agent.log"
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#log
         */
        filepath?: string;
    };

    ai_monitoring?: undefined | {
        /**
         * @name NEW_RELIC_AI_MONITORING_ENABLED
         * @default false
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#ai-monitoring-enabled
         */
        enabled?: boolean;

        streaming?: {
            /**
             * @name NEW_RELIC_AI_MONITORING_STREAMING_ENABLED
             * @default true
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#ai-monitoring-streaming
             */
            enabled?: boolean;
        };

        record_content?: {
            /**
             * @name NEW_RELIC_AI_MONITORING_RECORD_CONTENT_ENABLED
             * @default true
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#ai-monitoring-record-content
             */
            enabled?: boolean;
        };
    };

    cloud?: undefined | {
        aws?: {
            /**
             * @name NEW_RELIC_CLOUD_AWS_ACCOUNT_ID
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#cloud-variables
             */
            account_id?: number;
        };
    };

    audit_log?: undefined | {
        /**
         * @name NEW_RELIC_AUDIT_LOG_ENABLED
         * @default false
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#audit_log-enabled
         */
        enabled?: boolean;

        /**
         * @name NEW_RELIC_AUDIT_LOG_ENDPOINTS
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#endpoints
         */
        endpoints?: (
            | "agent_settings"
            | "analytic_event_data"
            | "connect"
            | "custom_event_data"
            | "error_data"
            | "error_event_data"
            | "metric_data"
            | "preconnect"
            | "shutdown"
            | "span_event_data"
            | "sql_trace_data"
            | "transaction_sample_data"
        )[];
    };

    api?: undefined | {
        /**
         * @name NEW_RELIC_API_CUSTOM_ATTRIBUTES
         * @default true
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#custom-attributes
         */
        custom_attributes_enabled?: boolean;

        /**
         * @name NEW_RELIC_API_CUSTOM_EVENTS
         * @default true
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#custom-events
         */
        custom_events_enabled?: boolean;

        /**
         * @name NEW_RELIC_API_NOTICE_ERROR
         * @default true
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#notice-error
         */
        notice_error_enabled?: boolean;
    };

    attributes?: undefined | {
        /**
         * @name NEW_RELIC_ATTRIBUTES_ENABLED
         * @default true
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#attributes_enabled
         */
        enabled?: boolean;

        /**
         * @name NEW_RELIC_ATTRIBUTES_EXCLUDE
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#attributes_exclude
         */
        exclude?: string[];

        /**
         * @name NEW_RELIC_ATTRIBUTES_INCLUDE
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#attributes_include
         */
        include?: string[];

        /**
         * @name NEW_RELIC_ATTRIBUTES_INCLUDE_ENABLED
         * @default true
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#attributes_include_enabled
         */
        include_enabled?: boolean;
    };

    error_collector?: undefined | {
        /**
         * @name NEW_RELIC_ERROR_COLLECTOR_ENABLED
         * @default true
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#error_collector
         */
        enabled?: boolean;

        /**
         * @name NEW_RELIC_ERROR_COLLECTOR_IGNORE_ERROR_CODES
         * @default [404]
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#error_ignore
         */
        ignore_status_codes?: number[];

        /**
         * @name NEW_RELIC_ERROR_COLLECTOR_IGNORE_ERRORS
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#error_ignore_classes
         */
        ignore_classes?: string[];

        /**
         * @name NEW_RELIC_ERROR_COLLECTOR_IGNORE_MESSAGES
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#error_ignore_messages
         */
        ignore_messages?: Record<string, string[]>;

        /**
         * @name NEW_RELIC_ERROR_COLLECTOR_EXPECTED_ERROR_CODES
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#expected_status_codes
         */
        expected_status_codes?: number[];

        /**
         * @name NEW_RELIC_ERROR_COLLECTOR_EXPECTED_ERRORS
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#expected_classes
         */
        expected_classes?: string[];

        /**
         * @name NEW_RELIC_ERROR_COLLECTOR_EXPECTED_MESSAGES
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#expected_messages
         */
        expected_messages?: Record<string, string[]>;

        attributes?: {
            /**
             * @name NEW_RELIC_ERROR_COLLECTOR_ATTRIBUTES_ENABLED
             * @default true
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#error_attributes_enabled
             */
            enabled?: boolean;

            /**
             * @name NEW_RELIC_ERROR_COLLECTOR_ATTRIBUTES_EXCLUDE
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#error_attributes_exclude
             */
            exclude?: string[];

            /**
             * @name NEW_RELIC_ERROR_COLLECTOR_ATTRIBUTES_INCLUDE
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#error_attributes_include
             */
            include?: string[];
        };

        /**
         * @name NEW_RELIC_ERROR_COLLECTOR_MAX_EVENT_SAMPLES_STORED
         * @default 100
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#error_max_event_samples_stored
         */
        max_event_samples_stored?: number;
    };

    transaction_tracer?: undefined | {
        /**
         * @name NEW_RELIC_TRACER_ENABLED
         * @default true
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#tracer_enabled
         */
        enabled?: boolean;

        /**
         * @name NEW_RELIC_EXPLAIN_THRESHOLD
         * @default 500
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#explain_threshold
         */
        explain_threshold?: number;

        /**
         * @name NEW_RELIC_RECORD_SQL
         * @default "obfuscated"
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#record-sql
         */
        record_sql?: "obfuscated" | "off" | "raw";

        /**
         * @name NEW_RELIC_TRACER_TOP_N
         * @default 20
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#tracer_top
         */
        top_n?: number;

        /**
         * @name NEW_RELIC_TRACER_THRESHOLD
         * @default "apdex_f"
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#tracer_threshold
         */
        transaction_threshold?: number | "apdex_f";

        attributes?: {
            /**
             * @name NEW_RELIC_TRANSACTION_TRACER_ATTRIBUTES_ENABLED
             * @default true
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#hide-attributes-enabled
             */
            enabled?: boolean;

            /**
             * @name NEW_RELIC_TRANSACTION_TRACER_ATTRIBUTES_EXCLUDE
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#hide-attributes-exclude
             */
            exclude?: string[];

            /**
             * @name NEW_RELIC_TRANSACTION_TRACER_ATTRIBUTES_INCLUDE
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#hide-attributes-include
             */
            include?: string[];
        };
    };

    rules?: undefined | {
        /**
         * @name NEW_RELIC_NAMING_RULES
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#rules_names
         */
        name?: Array<{ pattern?: string | RegExp; name?: string }>;

        /**
         * @name NEW_RELIC_IGNORING_RULES
         * @default ['^/socket.io/.*\/xhr-polling/']
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#rules_ignore
         */
        ignore?: (string | RegExp)[];

        /**
         * @name NEW_RELIC_ENFORCE_BACKSTOP
         * @default true
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#enforce_backstop
         */
        enforce_backstop?: boolean;
    };

    transaction_events?: undefined | {
        /**
         * @name NEW_RELIC_TRANSACTION_EVENTS_ENABLED
         * @default true
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#tx_events_enabled
         */
        enabled?: boolean;

        /**
         * @name NEW_RELIC_TRANSACTION_EVENTS_MAX_SAMPLES_STORED
         * @default 10000 // 20000 for v5.x or lower
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#tx_events_max_samples_stored
         */
        max_samples_stored?: number;

        /**
         * @name NEW_RELIC_TRANSACTION_EVENTS_MAX_SAMPLES_PER_MINUTE
         * @default 20000
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#tx_events_max_samples_per_minute
         */
        max_samples_per_minute?: number;

        attributes?: {
            /**
             * @name NEW_RELIC_TRANSACTION_EVENTS_ATTRIBUTES_ENABLED
             * @default true
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#tx-attributes-enabled
             */
            enabled?: boolean;

            /**
             * @name NEW_RELIC_TRANSACTION_EVENTS_ATTRIBUTES_EXCLUDE
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#tx-attributes-exclude
             */
            exclude?: string[];

            /**
             * @name NEW_RELIC_TRANSACTION_EVENTS_ATTRIBUTES_INCLUDE
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#tx-attributes-include
             */
            include?: string[];
        };
    };

    browser_monitoring?: undefined | {
        /**
         * @name NEW_RELIC_BROWSER_MONITOR_ENABLE
         * @default true
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#browser
         */
        enable?: boolean;

        /**
         * @name NEW_RELIC_BROWSER_MONITOR_DEBUG
         * @default false
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#browser-debug
         */
        debug?: boolean;

        attributes?: {
            /**
             * @name NEW_RELIC_BROWSER_MONITORING_ATTRIBUTES_ENABLED
             * @default false
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#browser-debug-enabled
             */
            enabled?: boolean;

            /**
             * @name NEW_RELIC_BROWSER_MONITORING_ATTRIBUTES_EXCLUDE
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#browser-debug-exclude
             */
            exclude?: string[];

            /**
             * @name NEW_RELIC_BROWSER_MONITORING_ATTRIBUTES_INCLUDE
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#browser-debug-include
             */
            include?: string[];
        };
    };

    custom_insights_events?: undefined | {
        /**
         * @name NEW_RELIC_CUSTOM_INSIGHTS_EVENTS_ENABLED
         * @default true
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#custom_events_enabled
         */
        enabled?: boolean;

        /**
         * @name NEW_RELIC_CUSTOM_INSIGHTS_EVENTS_MAX_SAMPLES_STORED
         * @default 3000
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#custom_events_max_samples_stored
         */
        max_samples_stored?: number;
    };

    slow_sql?: undefined | {
        /**
         * @name NEW_RELIC_SLOW_SQL_ENABLED
         * @default false
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#slow-sql-enabled
         */
        enabled?: boolean;

        /**
         * @name NEW_RELIC_MAX_SQL_SAMPLES
         * @default 10
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#slow-sql-max-samples
         */
        max_samples?: number;
    };

    process_host?: undefined | {
        /**
         * @name NEW_RELIC_PROCESS_HOST_DISPLAY_NAME
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#custom-hostnames-display
         */
        display_name?: string;

        /**
         * @name NEW_RELIC_IPV_PREFERENCE
         * @default 4
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#custom-hostnames-ipv
         */
        ipv_preference?: "4" | "6";
    };

    datastore_tracer?: undefined | {
        instance_reporting?: {
            /**
             * @name NEW_RELIC_DATASTORE_INSTANCE_REPORTING_ENABLED
             * @default true
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#datastore-instance-enabled
             */
            enabled?: boolean;
        };

        database_name_reporting?: {
            /**
             * @name NEW_RELIC_DATASTORE_DATABASE_NAME_REPORTING_ENABLED
             * @default true
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#datastore-name-enabled
             */
            enabled?: boolean;
        };
    };

    /**
     * @deprecated
     */
    cross_application_tracer?: undefined | {
        /**
         * @name NEW_RELIC_CROSS_APPLICATION_TRACER_ENABLED
         * @default false
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#cat-enabled
         */
        enabled?: boolean;
    };

    strip_exception_messages?: undefined | {
        /**
         * @name NEW_RELIC_STRIP_EXCEPTION_MESSAGES_ENABLED
         * @default false
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#allow-raw-enabled
         */
        enabled?: boolean;
    };

    distributed_tracing?: undefined | {
        /**
         * @name NEW_RELIC_DISTRIBUTED_TRACING_ENABLED
         * @default true
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#dt-enabled
         */
        enabled?: boolean;

        /**
         * @name NEW_RELIC_DISTRIBUTED_TRACING_EXCLUDE_NEWRELIC_HEADER
         * @default false
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#dt-exclude-newrelic-header
         */
        exclude_newrelic_header?: boolean;
    };

    grpc?: undefined | {
        /**
         * @name NEW_RELIC_GRPC_RECORD_ERRORS
         * @default true
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#record_errors
         */
        record_errors?: boolean;

        /**
         * @name NEW_RELIC_GRPC_IGNORE_STATUS_CODES
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#grpc_error_ignore
         */
        ignore_status_codes?: number[];
    };

    span_events?: undefined | {
        /**
         * @name NEW_RELIC_SPAN_EVENTS_ENABLED
         * @default true
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#span-events-enabled
         */
        enabled?: boolean;

        attributes?: {
            /**
             * @name NEW_RELIC_SPAN_EVENTS_ATTRIBUTES_ENABLED
             * @default true
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#span-events-attributes-enabled
             */
            enabled?: boolean;

            /**
             * @name NEW_RELIC_SPAN_EVENTS_ATTRIBUTES_INCLUDE
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#span-events-attributes-include
             */
            include?: string[];

            /**
             * @name NEW_RELIC_SPAN_EVENTS_ATTRIBUTES_EXCLUDE
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#span-events-attributes-exclude
             */
            exclude?: string[];
        };

        /**
         * @name NEW_RELIC_SPAN_EVENTS_MAX_SAMPLES_STORED
         * @default 2000
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#span-events-max-samples-stored
         */
        max_samples_stored?: number;
    };

    infinite_tracing?: undefined | {
        trace_observer?: {
            /**
             * @name NEW_RELIC_INFINITE_TRACING_TRACE_OBSERVER_HOST
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#infinite-tracing-host
             */
            host?: string;
        };

        span_events?: {
            /**
             * @name NEW_RELIC_INFINITE_TRACING_SPAN_EVENTS_QUEUE_SIZE
             * @default 10000
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#infinite-tracing-queue-size
             */
            queue_size?: number;
        };
    };

    application_logging?: undefined | {
        /**
         * @name NEW_RELIC_APPLICATION_LOGGING_ENABLED
         * @default true
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#application-logging-enabled
         */
        enabled?: boolean;

        metrics?: {
            /**
             * @name NEW_RELIC_APPLICATION_LOGGING_METRICS_ENABLED
             * @default true
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#application-logging-metrics-enabled
             */
            enabled?: boolean;
        };

        forwarding?: {
            /**
             * @name NEW_RELIC_APPLICATION_LOGGING_FORWARDING_ENABLED
             * @default true
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#application-logging-forwarding-enabled
             */
            enabled?: boolean;

            /**
             * @name NEW_RELIC_APPLICATION_LOGGING_FORWARDING_MAX_SAMPLES_STORED
             * @default 10000
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#application-logging-forwarding-max_samples_stored
             */
            max_samples_stored?: number;

            labels?: {
                /**
                 * @name NEW_RELIC_APPLICATION_LOGGING_FORWARDING_LABELS_ENABLED
                 * @default false
                 * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#application-logging-forwarding-labels
                 */
                enabled?: boolean;

                /**
                 * @name NEW_RELIC_APPLICATION_LOGGING_FORWARDING_LABELS_EXCLUDE
                 * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#application-logging-forwarding-labels-exclude
                 */
                exclude?: string[];
            };
        };

        local_decorating?: {
            /**
             * @name NEW_RELIC_APPLICATION_LOGGING_LOCAL_DECORATING_ENABLED
             * @default false
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#application-logging-local_decorating-enabled
             */
            enabled?: boolean;
        };
    };

    code_level_metrics?: undefined | {
        /**
         * @name NEW_RELIC_CODE_LEVEL_METRICS_ENABLED
         * @default true
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#code-level-metrics-enabled
         */
        enabled?: boolean;
    };

    url_obfuscation?: undefined | {
        /**
         * @name NEW_RELIC_URL_OBFUSCATION_ENABLED
         * @default false
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#url-obfuscation-enabled
         */
        enabled?: boolean;

        regex?: {
            /**
             * @name NEW_RELIC_URL_OBFUSCATION_REGEX_PATTERN
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#url-obfuscation-regex-pattern
             */
            pattern?: string | RegExp;

            /**
             * @name NEW_RELIC_URL_OBFUSCATION_REGEX_FLAGS
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#url-obfuscation-regex-flags
             */
            flags?: string;

            /**
             * @name NEW_RELIC_URL_OBFUSCATION_REGEX_REPLACEMENT
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#url-obfuscation-regex-replacement
             */
            replacement?: string;
        };
    };

    security?: undefined | {
        /**
         * @name NEW_RELIC_SECURITY_ENABLED
         * @default false
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#security-enabled
         */
        enabled?: boolean;

        agent?: {
            /**
             * @name NEW_RELIC_SECURITY_AGENT_ENABLED
             * @default false
             * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#security-agent-enabled
             */
            enabled?: boolean;
        };

        /**
         * @name NEW_RELIC_SECURITY_MODE
         * @default "IAST"
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#security-mode
         */
        mode?: "IAST";

        /**
         * @name NEW_RELIC_SECURITY_VALIDATOR_SERVICE_URL
         * @default "wss://csec.nr-data.net"
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#security-validator-url
         */
        validator_service_url?: string;

        detection?: {
            rci?: {
                /**
                 * @name NEW_RELIC_SECURITY_DETECTION_RCI_ENABLED
                 * @default true
                 * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#security-rci-detection
                 */
                enabled?: boolean;
            };

            rxss?: {
                /**
                 * @name NEW_RELIC_SECURITY_DETECTION_RXSS_ENABLED
                 * @default true
                 * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#security-xss-detection
                 */
                enabled?: boolean;
            };

            deserialization?: {
                /**
                 * @name NEW_RELIC_SECURITY_DETECTION_DESERIALIZATION_ENABLED
                 * @default true
                 * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#security-deserialization-detection
                 */
                enabled?: boolean;
            };
        };
    };

    heroku?: undefined | {
        /**
         * @name NEW_RELIC_HEROKU_USE_DYNO_NAMES
         * @default true
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#heroku-dyno
         */
        use_dyno_names?: boolean;
    };

    worker_threads?: undefined | {
        /**
         * @name NEW_RELIC_WORKER_THREADS_ENABLED
         * @default false
         * @see https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#worker-threads
         */
        enabled?: boolean;
    };
}
