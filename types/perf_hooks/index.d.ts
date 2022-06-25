export interface Histogram {
    /**
     * Returns a `Map` object detailing the accumulated percentile distribution.
     * @since v11.10.0
     */
    readonly percentiles: Map<number, number>;
    /**
     * The number of times the event loop delay exceeded the maximum 1 hour event
     * loop delay threshold.
     * @since v11.10.0
     */
    readonly exceeds: number;
    /**
     * The minimum recorded event loop delay.
     * @since v11.10.0
     */
    readonly min: number;
    /**
     * The maximum recorded event loop delay.
     * @since v11.10.0
     */
    readonly max: number;
    /**
     * The mean of the recorded event loop delays.
     * @since v11.10.0
     */
    readonly mean: number;
    /**
     * The standard deviation of the recorded event loop delays.
     * @since v11.10.0
     */
    readonly stddev: number;
    /**
     * Resets the collected histogram data.
     * @since v11.10.0
     */
    reset(): void;
    /**
     * Returns the value at the given percentile.
     * @since v11.10.0
     * @param percentile A percentile value in the range (0, 100].
     */
    percentile(percentile: number): number;
}

export interface RecordableHistogram extends Histogram {
    /**
     * @since v15.9.0, v14.18.0
     * @param val The amount to record in the histogram.
     */
    record(val: number | bigint): void;
    /**
     * Calculates the amount of time (in nanoseconds) that has passed since the
     * previous call to `recordDelta()` and records that amount in the histogram.
     *
     * ## Examples
     * @since v15.9.0, v14.18.0
     */
    recordDelta(): void;
    /**
     * Combines other histograms into a single one
     *
     * @since v17.4.0, v16.14.0
     */
     add(other: RecordableHistogram): RecordableHistogram;
}
