// Type definitions for datadog-metrics 0.4
// Project: https://github.com/dbader/node-datadog-metrics
// Definitions by: Jeffery Grajkowski <https://github.com/pushplay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface BufferedMetricsLoggerOptions {
    /**
     * Sets the DataDog API key.
     */
    apiKey?: string;

    /**
     * Sets the DataDog APP key.
     */
    appKey?: string;

    /**
     * Default tags used for all metric reporting.
     */
    defaultTags?: string[];

    /**
     * How often to send metrics to DataDog.
     */
    flushIntervalSeconds?: number;

    /**
     * Sets the hostname reported with each metric.
     */
    host?: string;

    /**
     * Sets a default prefix for all metrics.
     */
    prefix?: string;
}

export class BufferedMetricsLogger {
    constructor(options: BufferedMetricsLoggerOptions);

    /**
     * Record the current value of a metric. They most recent value in a given flush
     * interval will be recorded. Optionally, specify a set of tags to associate with
     * the metric. This should be used for sum values such as total hard disk space,
     * process uptime, total number of active users, or number of rows in a database table.
     */
    gauge(key: string, value: number, ...tags: string[]): void;

    /**
     * Increment the counter by the given value (or 1 by default). Optionally, specify a
     * list of tags to associate with the metric. This is useful for counting things such
     * as incrementing a counter each time a page is requested.
     */
    increment(key: string, value?: number, ...tags: string[]): void;

    /**
     * Sample a histogram value. Histograms will produce metrics that describe the distribution
     * of the recorded values, namely the minimum, maximum, average, count and the 75th, 85th,
     * 95th and 99th percentiles. Optionally, specify a list of tags to associate with the metric.
     */
    histogram(key: string, value: number, ...tags: string[]): void;

    /**
     * Calling flush sends any buffered metrics to DataDog. Unless you set flushIntervalSeconds
     * to 0 it won't be necessary to call this function.
     * It can be useful to trigger a manual flush by calling if you want to make sure pending
     * metrics have been sent before you quit the application process, for example.
     */
    flush(onSuccess?: () => void, onError?: (err: Error) => void): void;
}

export function init(options: BufferedMetricsLoggerOptions): void;

/**
 * Record the current value of a metric. They most recent value in a given flush
 * interval will be recorded. Optionally, specify a set of tags to associate with
 * the metric. This should be used for sum values such as total hard disk space,
 * process uptime, total number of active users, or number of rows in a database table.
 */
export function gauge(key: string, value: number, ...tags: string[]): void;

/**
 * Increment the counter by the given value (or 1 by default). Optionally, specify a
 * list of tags to associate with the metric. This is useful for counting things such
 * as incrementing a counter each time a page is requested.
 */
export function increment(key: string, value?: number, ...tags: string[]): void;

/**
 * Sample a histogram value. Histograms will produce metrics that describe the distribution
 * of the recorded values, namely the minimum, maximum, average, count and the 75th, 85th,
 * 95th and 99th percentiles. Optionally, specify a list of tags to associate with the metric.
 */
export function histogram(key: string, value: number, ...tags: string[]): void;

/**
 * Calling flush sends any buffered metrics to DataDog. Unless you set flushIntervalSeconds
 * to 0 it won't be necessary to call this function.
 * It can be useful to trigger a manual flush by calling if you want to make sure pending
 * metrics have been sent before you quit the application process, for example.
 */
export function flush(onSuccess?: () => void, onError?: (err: Error) => void): void;
