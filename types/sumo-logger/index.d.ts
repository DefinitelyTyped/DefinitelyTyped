declare namespace SumoLogger {
    interface SumoLoggerOptions {
        /**
         * To send your logs, the script must know which HTTP Source to use.
         * Pass this value (which you can get from the Collectors page) in
         * the `endpoint` parameter.
         */
        endpoint: string;

        /**
         * A number of milliseconds. Messages will be batched and sent at the interval specified.
         * Default value is zero, meaning messages are sent each time `log()` is called.
         */
        interval?: number | undefined;

        /**
         * You can provide a function that is executed only when logs are successfully sent.
         * The only information you can be sure of in the callback is that the call succeeded.
         * There is no other response information.
         */
        onSuccess?(): void;

        /**
         * You can provide a function that is executed if an error
         * occurs when the logs are sent.
         */
        onError?(): void;

        /**
         * You can provide a URL, in the Node version of this SDK only,
         * which will be sent as the `url` field of the log line.
         * In the vanilla JS version, the URL is detected from the browser's
         * `window.location` value.
         */
        clientUrl?: string | undefined;

        /**
         * Setting `sendErrors` to `true` will send all the unhandled errors to Sumo Logic
         * with the error message, URL, line number, and column number.
         * This attribute plays well with any other `window.onerror` functions that
         * have been defined.
         */
        sendErrors?: boolean | undefined;

        /** To identify specific user sessions, set a value for this field. */
        sessionKey?: string | undefined;

        /**
         * This value identifies the host from which the log is being sent.
         */
        hostName?: string | undefined;

        /**
         * This value sets the Source Category for the logged message.
         */
        sourceCategory?: string | undefined;

        /**
         * This value sets the Source Name for the logged message.
         */
        sourceName?: string | undefined;

        /**
         * This value enables and disables sending data as graphite metrics
         */
        graphite?: boolean | undefined;

        /**
         * This value enables and disables sending data as a raw string
         */
        raw?: boolean | undefined;

        /**
         * An integer specifying total log length.
         * This can be used by itself or in addition to interval but is ignored when useIntervalOnly is true.
         * For higher volume applications, Sumo Logic recommends using between 100000 and 1000000 to optimize the tradeoff between network calls and load.
         * If both batchSize and interval are configured sending will be triggered when the pending logs' aggregate message length
         * is reached or when the specified interval is hit, and in either case the interval will be reset on send.
         */
        batchSize?: number | undefined;

        /**
         * If enabled batchSize is ignored and only interval is used to trigger when the pending logs will be sent.
         */
        useIntervalOnly?: boolean | undefined;
    }

    interface PerMessageOptions {
        /**
         * Defaults to `new Date()` called when processing the log call.
         * Use this when the event being logged occurred
         * at a different time than when the log was sent.
         */
        timestamp?: Date | undefined;

        /** Override a session key set in the `config` call. */
        sessionKey?: string | undefined;

        /** Override client URL set in the config call. (Node version only) */
        url?: string | undefined;
    }
}

/**
 * You must have an HTTP source created in your Sumo Logic account to use this SDK.
 * To create one, log into Sumo Logic, go to the Collectors page and either create
 * a new Hosted Collector or add a new HTTP source to an existing Hosted Collector.
 */
declare class SumoLogger {
    constructor(options: SumoLogger.SumoLoggerOptions);

    /**
     * **(Vanilla JS lib only)**
     * Set the configuration for sending logs. Options are listed in the next section.
     * In the Node.js module, configuration options are sent when instantiating the object.
     */
    config?(options: SumoLogger.SumoLoggerOptions): void;

    /**
     * Set a log message to be sent.
     * All logs are sent as JSON objects.
     * If you call `log()` with just a string, the string is included as a field called msg.
     * If you call the function with a JSON object, each field in the object is included as a separate field.
     * Fields called `sessionId`, `url`, and `timestamp` are sent in both cases.
     */
    log(message: string, options?: SumoLogger.PerMessageOptions): boolean | Promise<any>;

    /**
     * Set a log message to be sent.
     * All logs are sent as JSON objects.
     * If you call `log()` with just a string, the string is included as a field called msg.
     * If you call the function with a JSON object, each field in the object is included as a separate field.
     * Fields called `sessionId`, `url`, and `timestamp` are sent in both cases.
     */
    log<T extends object>(event: Partial<SumoLogger.PerMessageOptions> & T): boolean | Promise<any>;

    /**
     * Force any pending logs to be sent immediately. This is mainly for use in a
     * logOut/`window.onBeforeUnload` flow to ensure that any remaining queued
     * messages are sent to Sumo Logic.
     */
    flushLogs(): void;

    /**
     * Stop sending batched logs
     */
    stopLogSending(): void;

    /**
     * Start sending batched logs at the preconfigured interval
     */
    startLogSending(): void;

    /**
     * Empty the current queue of logs
     */
    emptyLogQueue(): void;
}

export = SumoLogger;
