declare module "node:perf_hooks" {
    import { InternalEventTargetEventProperties } from "node:events";
    // #region web types
    type EntryType =
        | "dns" // Node.js only
        | "function" // Node.js only
        | "gc" // Node.js only
        | "http2" // Node.js only
        | "http" // Node.js only
        | "mark" // available on the Web
        | "measure" // available on the Web
        | "net" // Node.js only
        | "node" // Node.js only
        | "quic" // Node.js only
        | "resource"; // available on the Web
    interface ConnectionTimingInfo {
        domainLookupStartTime: number;
        domainLookupEndTime: number;
        connectionStartTime: number;
        connectionEndTime: number;
        secureConnectionStartTime: number;
        ALPNNegotiatedProtocol: string;
    }
    interface FetchTimingInfo {
        startTime: number;
        redirectStartTime: number;
        redirectEndTime: number;
        postRedirectStartTime: number;
        finalServiceWorkerStartTime: number;
        finalNetworkRequestStartTime: number;
        finalNetworkResponseStartTime: number;
        endTime: number;
        finalConnectionTimingInfo: ConnectionTimingInfo | null;
        encodedBodySize: number;
        decodedBodySize: number;
    }
    type PerformanceEntryList = PerformanceEntry[];
    interface PerformanceMarkOptions {
        detail?: any;
        startTime?: number;
    }
    interface PerformanceMeasureOptions {
        detail?: any;
        duration?: number;
        end?: string | number;
        start?: string | number;
    }
    interface PerformanceObserverCallback {
        (entries: PerformanceObserverEntryList, observer: PerformanceObserver): void;
    }
    interface PerformanceObserverInit {
        buffered?: boolean;
        entryTypes?: EntryType[];
        type?: EntryType;
    }
    interface PerformanceEventMap {
        "resourcetimingbufferfull": Event;
    }
    interface Performance extends EventTarget, InternalEventTargetEventProperties<PerformanceEventMap> {
        readonly nodeTiming: PerformanceNodeTiming;
        readonly timeOrigin: number;
        clearMarks(markName?: string): void;
        clearMeasures(measureName?: string): void;
        clearResourceTimings(resourceTimingName?: string): void;
        getEntries(): PerformanceEntryList;
        getEntriesByName(name: string, type?: EntryType): PerformanceEntryList;
        getEntriesByType(type: EntryType): PerformanceEntryList;
        mark(markName: string, markOptions?: PerformanceMarkOptions): PerformanceMark;
        markResourceTiming(
            timingInfo: FetchTimingInfo,
            requestedUrl: string,
            initiatorType: string,
            global: unknown,
            cacheMode: string,
            bodyInfo: unknown,
            responseStatus: number,
            deliveryType?: string,
        ): PerformanceResourceTiming;
        measure(measureName: string, startMark?: string, endMark?: string): PerformanceMeasure;
        measure(measureName: string, options: PerformanceMeasureOptions, endMark?: string): PerformanceMeasure;
        now(): number;
        setResourceTimingBufferSize(maxSize: number): void;
        toJSON(): any;
        addEventListener<K extends keyof PerformanceEventMap>(
            type: K,
            listener: (ev: PerformanceEventMap[K]) => void,
            options?: AddEventListenerOptions | boolean,
        ): void;
        addEventListener(
            type: string,
            listener: EventListener | EventListenerObject,
            options?: AddEventListenerOptions | boolean,
        ): void;
        removeEventListener<K extends keyof PerformanceEventMap>(
            type: K,
            listener: (ev: PerformanceEventMap[K]) => void,
            options?: EventListenerOptions | boolean,
        ): void;
        removeEventListener(
            type: string,
            listener: EventListener | EventListenerObject,
            options?: EventListenerOptions | boolean,
        ): void;
        /**
         * This is an alias of `perf_hooks.eventLoopUtilization()`.
         *
         * _This property is an extension by Node.js. It is not available in Web browsers._
         * @since v14.10.0, v12.19.0
         * @param utilization1 The result of a previous call to
         * `eventLoopUtilization()`.
         * @param utilization2 The result of a previous call to
         * `eventLoopUtilization()` prior to `utilization1`.
         */
        eventLoopUtilization(
            utilization1?: EventLoopUtilization,
            utilization2?: EventLoopUtilization,
        ): EventLoopUtilization;
        /**
         * This is an alias of `perf_hooks.timerify()`.
         *
         * _This property is an extension by Node.js. It is not available in Web browsers._
         * @since v8.5.0
         */
        timerify<T extends (...args: any[]) => any>(fn: T, options?: TimerifyOptions): T;
    }
    var Performance: {
        prototype: Performance;
        new(): Performance;
    };
    interface PerformanceEntry {
        readonly duration: number;
        readonly entryType: EntryType;
        readonly name: string;
        readonly startTime: number;
        toJSON(): any;
    }
    var PerformanceEntry: {
        prototype: PerformanceEntry;
        new(): PerformanceEntry;
    };
    interface PerformanceMark extends PerformanceEntry {
        readonly detail: any;
        readonly entryType: "mark";
    }
    var PerformanceMark: {
        prototype: PerformanceMark;
        new(markName: string, markOptions?: PerformanceMarkOptions): PerformanceMark;
    };
    interface PerformanceMeasure extends PerformanceEntry {
        readonly detail: any;
        readonly entryType: "measure";
    }
    var PerformanceMeasure: {
        prototype: PerformanceMeasure;
        new(): PerformanceMeasure;
    };
    interface PerformanceObserver {
        disconnect(): void;
        observe(options: PerformanceObserverInit): void;
        takeRecords(): PerformanceEntryList;
    }
    var PerformanceObserver: {
        prototype: PerformanceObserver;
        new(callback: PerformanceObserverCallback): PerformanceObserver;
        readonly supportedEntryTypes: readonly EntryType[];
    };
    interface PerformanceObserverEntryList {
        getEntries(): PerformanceEntryList;
        getEntriesByName(name: string, type?: EntryType): PerformanceEntryList;
        getEntriesByType(type: EntryType): PerformanceEntryList;
    }
    var PerformanceObserverEntryList: {
        prototype: PerformanceObserverEntryList;
        new(): PerformanceObserverEntryList;
    };
    interface PerformanceResourceTiming extends PerformanceEntry {
        readonly connectEnd: number;
        readonly connectStart: number;
        /**
         * The content encoding of the fetched resource, such as `'gzip'` or `'br'`.
         * @since v26.9.0
         */
        readonly contentEncoding: string;
        /**
         * The minimized MIME type of the content of the fetched resource, or an empty
         * string if it cannot be determined.
         * @since v26.9.0
         */
        readonly contentType: string;
        readonly decodedBodySize: number;
        readonly domainLookupEnd: number;
        readonly domainLookupStart: number;
        readonly encodedBodySize: number;
        readonly entryType: "resource";
        readonly fetchStart: number;
        /**
         * The high resolution millisecond timestamp representing the time immediately
         * after Node.js receives the first byte of the final response,
         * as opposed to an interim response.
         * @since v26.9.0
         */
        readonly finalResponseHeadersStart: number;
        /**
         * The high resolution millisecond timestamp representing the time immediately
         * after Node.js receives the first byte of the first interim response, such as
         * a `103 Early Hints` response.
         * @since v26.9.0
         */
        readonly firstInterimResponseStart: number;
        readonly initiatorType: string;
        readonly nextHopProtocol: string;
        readonly redirectEnd: number;
        readonly redirectStart: number;
        /**
         * The render blocking status of the resource. It is either `'blocking'` or `'non-blocking'`.
         * @since v26.9.0
         */
        readonly renderBlockingStatus: "blocking" | "non-blocking";
        readonly requestStart: number;
        readonly responseEnd: number;
        readonly responseStart: number;
        readonly responseStatus: number;
        readonly secureConnectionStart: number;
        readonly transferSize: number;
        readonly workerStart: number;
        toJSON(): any;
    }
    var PerformanceResourceTiming: {
        prototype: PerformanceResourceTiming;
        new(): PerformanceResourceTiming;
    };
    var performance: Performance;
    // #endregion
    /**
     * _This class is an extension by Node.js. It is not available in Web browsers._
     *
     * Provides detailed Node.js timing data.
     *
     * The constructor of this class is not exposed to users directly.
     * @since v19.0.0
     */
    class PerformanceNodeEntry extends PerformanceEntry {
        /**
         * Additional detail specific to the `entryType`.
         * @since v16.0.0
         */
        readonly detail: any;
        readonly entryType: "dns" | "function" | "gc" | "http2" | "http" | "net" | "node" | "quic";
    }
    interface UVMetrics {
        /**
         * Number of event loop iterations.
         */
        readonly loopCount: number;
        /**
         * Number of events that have been processed by the event handler.
         */
        readonly events: number;
        /**
         * Number of events that were waiting to be processed when the event provider was called.
         */
        readonly eventsWaiting: number;
    }
    /**
     * _This property is an extension by Node.js. It is not available in Web browsers._
     *
     * Provides timing details for Node.js itself. The constructor of this class
     * is not exposed to users.
     * @since v8.5.0
     */
    interface PerformanceNodeTiming extends PerformanceEntry {
        /**
         * The high resolution millisecond timestamp at which the Node.js process
         * completed bootstrapping. If bootstrapping has not yet finished, the property
         * has the value of -1.
         * @since v8.5.0
         */
        readonly bootstrapComplete: number;
        readonly entryType: "node";
        /**
         * The high resolution millisecond timestamp at which the Node.js environment was
         * initialized.
         * @since v8.5.0
         */
        readonly environment: number;
        /**
         * The high resolution millisecond timestamp of the amount of time the event loop
         * has been idle within the event loop's event provider (e.g. `epoll_wait`). This
         * does not take CPU usage into consideration. If the event loop has not yet
         * started (e.g., in the first tick of the main script), the property has the
         * value of 0.
         * @since v14.10.0, v12.19.0
         */
        readonly idleTime: number;
        /**
         * The high resolution millisecond timestamp at which the Node.js event loop
         * exited. If the event loop has not yet exited, the property has the value of -1\.
         * It can only have a value of not -1 in a handler of the `'exit'` event.
         * @since v8.5.0
         */
        readonly loopExit: number;
        /**
         * The high resolution millisecond timestamp at which the Node.js event loop
         * started. If the event loop has not yet started (e.g., in the first tick of the
         * main script), the property has the value of -1.
         * @since v8.5.0
         */
        readonly loopStart: number;
        /**
         * The high resolution millisecond timestamp at which the Node.js process was initialized.
         * @since v8.5.0
         */
        readonly nodeStart: number;
        /**
         * This is a wrapper to the `uv_metrics_info` function.
         * It returns the current set of event loop metrics.
         *
         * It is recommended to use this property inside a function whose execution was
         * scheduled using `setImmediate` to avoid collecting metrics before finishing all
         * operations scheduled during the current loop iteration.
         * @since v22.8.0, v20.18.0
         */
        readonly uvMetricsInfo: UVMetrics;
        /**
         * The high resolution millisecond timestamp at which the V8 platform was
         * initialized.
         * @since v8.5.0
         */
        readonly v8Start: number;
    }
    namespace constants {
        const NODE_PERFORMANCE_GC_MAJOR: number;
        const NODE_PERFORMANCE_GC_MINOR: number;
        const NODE_PERFORMANCE_GC_MINOR_MARK_SWEEP: number;
        const NODE_PERFORMANCE_GC_INCREMENTAL: number;
        const NODE_PERFORMANCE_GC_WEAKCB: number;
        const NODE_PERFORMANCE_GC_FLAGS_NO: number;
        const NODE_PERFORMANCE_GC_FLAGS_CONSTRUCT_RETAINED: number;
        const NODE_PERFORMANCE_GC_FLAGS_FORCED: number;
        const NODE_PERFORMANCE_GC_FLAGS_SYNCHRONOUS_PHANTOM_PROCESSING: number;
        const NODE_PERFORMANCE_GC_FLAGS_ALL_AVAILABLE_GARBAGE: number;
        const NODE_PERFORMANCE_GC_FLAGS_ALL_EXTERNAL_MEMORY: number;
        const NODE_PERFORMANCE_GC_FLAGS_SCHEDULE_IDLE: number;
    }
    interface EventLoopMonitorOptions {
        /**
         * When `true`, samples are taken once per
         * event loop iteration. **Default:** `false`.
         */
        samplePerIteration?: boolean | undefined;
        /**
         * The sampling rate in milliseconds for interval-based
         * sampling. Must be greater than zero. This option is ignored when
         * `samplePerIteration` is `true`. **Default:** `10`.
         */
        resolution?: number | undefined;
    }
    interface Histogram {
        /**
         * Returns the SLO burn rate: `ewmaErrorRate / (1 - sloTarget)`. A burn rate
         * of 1 means the error budget will be exactly exhausted over the SLO window.
         * A burn rate greater than 1 means it is being consumed faster than allowed.
         * Requires the histogram to have been created with both `halfLife` and
         * `threshold` options.
         *
         * ```js
         * const { createHistogram } = require('node:perf_hooks');
         *
         * // Track latency with a 200ms SLO threshold, half-life of 100 samples
         * const h = createHistogram({ halfLife: 100, threshold: 200_000_000 });
         *
         * // ... record latency values ...
         *
         * // Check burn rate against a 99.9% SLO
         * const rate = h.burnRate(0.999);
         * if (rate > 1) {
         *   console.log(`SLO burn rate: ${rate.toFixed(2)}x — error budget depleting`);
         * }
         * ```
         * @since v26.8.0
         * @param sloTarget The SLO target as a fraction between 0 and 1
         * (exclusive). For example, `0.999` for a 99.9% SLO.
         */
        burnRate(sloTarget: number): number;
        /**
         * Returns the complementary cumulative distribution function (CCDF) value
         * for the given value, representing the probability that a recorded value
         * will exceed `value`. Equivalent to `1 - histogram.cdf(value)`.
         * @since v26.8.0
         * @param value The value to query.
         * @returns A probability between 0.0 and 1.0.
         */
        ccdf(value: number): number;
        /**
         * Returns the cumulative distribution function (CDF) value for the given
         * value, representing the probability that a recorded value will be less
         * than or equal to `value`. This is the inverse operation of
         * `histogram.percentile()`.
         * @since v26.8.0
         * @param value The value to query.
         * @returns A probability between 0.0 and 1.0.
         */
        cdf(value: number): number;
        /**
         * Computes [Cliff's delta](https://en.wikipedia.org/wiki/Effect_size#Cliff's_delta), a non-parametric effect size measure. Returns
         * the probability that a random value from this histogram exceeds a random
         * value from `other`, minus the reverse probability. A value of 1 means every
         * value in this histogram exceeds every value in `other`; -1 means the
         * opposite; 0 means no tendency in either direction.
         * @since v26.8.0
         * @param other The histogram to compare against.
         * @returns A value between -1.0 and 1.0.
         */
        cliffsD(other: Histogram): number;
        /**
         * Computes [Cohen's d](https://en.wikipedia.org/wiki/Effect_size#Cohen's_d) effect size, the standardized difference between the
         * means of this histogram and `other`, using the pooled standard deviation.
         * Positive values indicate this histogram has a higher mean. By convention,
         * |d| < 0.2 is a small effect, 0.5 is medium, and 0.8 or greater is large.
         * Both histograms must have at least 2 recorded values; otherwise returns 0.
         * @since v26.8.0
         * @param other The histogram to compare against.
         * @returns The effect size.
         */
        cohensD(other: Histogram): number;
        /**
         * The number of samples recorded by the histogram.
         * @since v17.4.0, v16.14.0
         */
        readonly count: number;
        /**
         * The number of samples recorded by the histogram.
         * v17.4.0, v16.14.0
         */
        readonly countBigInt: bigint;
        /**
         * Returns the number of recorded values that fall within the equivalent
         * value range of the given value.
         * @since v26.8.0
         * @param value The value to query.
         */
        countAt(value: number): number;
        /**
         * The EWMA-smoothed probability of a recorded value exceeding the configured
         * `threshold`. Only active when the histogram was created with both `halfLife`
         * and `threshold` options. Returns `0` when not enabled or no values have been
         * recorded.
         * @since v26.8.0
         */
        readonly ewmaErrorRate: number;
        /**
         * The exponentially weighted moving average of recorded values. Only active
         * when the histogram was created with a `halfLife` option greater than 0.
         * Returns `0` when EWMA is disabled or no values have been recorded.
         * @since v26.8.0
         */
        readonly ewmaMean: number;
        /**
         * The exponentially weighted moving standard deviation. Only active when the
         * histogram was created with a `halfLife` option greater than 0. Returns `0`
         * when EWMA is disabled or no values have been recorded.
         * @since v26.8.0
         */
        readonly ewmaStddev: number;
        /**
         * The number of times the event loop delay exceeded the maximum 1 hour event
         * loop delay threshold.
         * @since v11.10.0
         */
        readonly exceeds: number;
        /**
         * The number of times the event loop delay exceeded the maximum 1 hour event loop delay threshold.
         * @since v17.4.0, v16.14.0
         */
        readonly exceedsBigInt: bigint;
        /**
         * Serializes the histogram to a [CBOR](https://www.rfc-editor.org/rfc/rfc8949)-encoded (RFC 8949) `Uint8Array`
         * suitable for transmission or persistent storage. The encoding uses a
         * delta-encoded sparse representation of the bucket counts, so the output size
         * scales with the number of distinct recorded values rather than the total
         * bucket count.
         *
         * The output includes all histogram configuration, bucket data, and EWMA
         * state (when enabled). It can be reconstructed into a new histogram using
         * `perf_hooks.importHistogram()`.
         *
         * The CBOR payload is a map with integer keys:
         *
         * | Key | Type    | Field                                         |
         * | --- | ------- | --------------------------------------------- |
         * | 0   | uint    | Format version (currently 1)                  |
         * | 1   | uint    | Lowest discernible value                      |
         * | 2   | uint    | Highest trackable value                       |
         * | 3   | uint    | Significant figures                           |
         * | 4   | uint    | Total count                                   |
         * | 5   | uint    | Min value                                     |
         * | 6   | uint    | Max value                                     |
         * | 7   | uint    | Normalizing index offset                      |
         * | 8   | float64 | Conversion ratio                              |
         * | 9   | uint    | Counts array length                           |
         * | 10  | array   | Delta-encoded sparse counts `[delta, c, ...]` |
         * | 11  | map     | EWMA state (omitted when disabled)            |
         *
         * Any standard CBOR decoder can parse the output.
         * @since v26.9.0
         */
        export(): NodeJS.NonSharedUint8Array;
        /**
         * Computes the Kolmogorov-Smirnov test statistic comparing this histogram's
         * distribution to `other`. A value of 0 indicates identical distributions;
         * values close to 1 indicate completely disjoint distributions. Useful for
         * detecting performance regressions by comparing before/after histograms.
         * @since v26.8.0
         * @param other The histogram to compare against.
         * @returns The KS D-statistic, between 0.0 and 1.0.
         */
        ksTest(other: Histogram): number;
        /**
         * The excess kurtosis of the recorded values. Measures the heaviness of the
         * distribution's tails relative to a normal distribution. Positive values
         * indicate heavier tails (more extreme outliers); negative values indicate
         * lighter tails.
         * @since v26.8.0
         */
        readonly kurtosis: number;
        /**
         * Returns the histogram data rebucketed into linearly-spaced intervals
         * of `stepSize`. Useful for visualization and export.
         * @since v26.8.0
         * @param stepSize The width of each linear bucket.
         * @returns A map of bucket boundary values to counts.
         */
        linearBuckets(stepSize: number): Map<number, number>;
        /**
         * Returns the histogram data rebucketed into logarithmically-spaced
         * intervals, where each bucket's width is multiplied by `base`.
         * Useful for visualization and export.
         * @since v26.8.0
         * @param firstBucket The value of the first bucket boundary.
         * @param base The logarithmic base for bucket width growth. Must be > 1.
         * @returns A map of bucket boundary values to counts.
         */
        logBuckets(firstBucket: number, base: number): Map<number, number>;
        /**
         * Performs a [Mann-Whitney U test](https://en.wikipedia.org/wiki/Mann%E2%80%93Whitney_U_test) comparing whether this histogram tends to
         * produce larger or smaller values than `other`. Unlike `welchTest()`, this is a
         * non-parametric test that makes no assumptions about the shape of the
         * distributions. Uses the normal approximation with tie correction for the
         * p-value.
         * @since v26.8.0
         * @param other The histogram to compare against.
         */
        mannWhitneyTest(other: Histogram): HistogramMannWhitneyTestResult;
        /**
         * The maximum recorded event loop delay.
         * @since v11.10.0
         */
        readonly max: number;
        /**
         * The maximum recorded event loop delay.
         * v17.4.0, v16.14.0
         */
        readonly maxBigInt: number;
        /**
         * The mean of the recorded event loop delays.
         * @since v11.10.0
         */
        readonly mean: number;
        /**
         * Returns a two-sided confidence interval for the mean using Student's
         * t-distribution and the sample standard error. A higher confidence level
         * produces a wider interval. This interval assumes that samples are independent
         * and approximately normally distributed, although the approximation is robust
         * for sufficiently large samples.
         *
         * The result reflects the histogram's configured precision and is calculated
         * from the values represented by its buckets. With fewer than two recorded
         * values, `lower` and `upper` are `NaN`. When all recorded values are equal,
         * `lower` and `upper` equal `mean`.
         *
         * ```js
         * const { createHistogram } = require('node:perf_hooks');
         *
         * const h = createHistogram();
         * for (let i = 1; i <= 100; i++) h.record(i);
         *
         * const { mean, lower, upper } = h.meanCI();
         * console.log(`mean=${mean}, 95% CI=[${lower}, ${upper}]`);
         * ```
         * @since v26.9.0
         */
        meanCI(options?: HistogramConfidenceOptions): HistogramMeanCI;
        /**
         * The minimum recorded event loop delay.
         * @since v11.10.0
         */
        readonly min: number;
        /**
         * The minimum recorded event loop delay.
         * v17.4.0, v16.14.0
         */
        readonly minBigInt: bigint;
        /**
         * Returns the value at the given percentile.
         * @since v11.10.0
         * @param percentile A percentile value in the range (0, 100].
         */
        percentile(percentile: number): number;
        /**
         * Returns the value at the given percentile.
         * @since v17.4.0, v16.14.0
         * @param percentile A percentile value in the range (0, 100].
         */
        percentileBigInt(percentile: number): bigint;
        /**
         * Returns a confidence interval for the given percentile using the exact
         * binomial method. With fewer samples, the interval will be wider, reflecting
         * the greater uncertainty in the percentile estimate. Requires at least 2
         * recorded values; with fewer than 2, `lower` and `upper` will equal `value`.
         *
         * ```js
         * const { createHistogram } = require('node:perf_hooks');
         *
         * const h = createHistogram();
         * for (let i = 0; i < 1000; i++) {
         *   h.record(Math.floor(Math.random() * 100));
         * }
         *
         * const ci = h.percentileCI(99);
         * console.log(ci.value);  // The p99 point estimate
         * console.log(ci.lower);  // The lower bound (95% confidence)
         * console.log(ci.upper);  // The upper bound (95% confidence)
         * ```
         * @since v26.8.0
         * @param percentile A percentile value in the range (0, 100].
         */
        percentileCI(percentile: number, options?: HistogramConfidenceOptions): HistogramPercentileCI;
        /**
         * Returns a `Map` object detailing the accumulated percentile distribution.
         * @since v11.10.0
         */
        readonly percentiles: Map<number, number>;
        /**
         * Returns the values at the specified percentiles, computed in a single
         * efficient pass over the histogram data. More efficient than calling
         * `histogram.percentile()` multiple times.
         * @since v26.8.0
         * @param percentiles An array of percentile values in the range (0, 100].
         * @returns A map of percentile values to their corresponding histogram
         * values.
         */
        percentilesAt(percentiles: readonly number[]): Map<number, number>;
        /**
         * Returns a `Map` object detailing the accumulated percentile distribution.
         * @since v17.4.0, v16.14.0
         */
        readonly percentilesBigInt: Map<bigint, bigint>;
        /**
         * Returns a quantile-respectful density estimate based on the Harrell-Davis
         * quantile estimator. By default, `bins` generates equal probability boundaries.
         * The `probabilities` option can instead focus the estimate on regions such as
         * p90, p99, p99.9, and p99.99. The density for interval `i` contains probability
         * mass `probabilities[i + 1] - probabilities[i]`. The histogram is snapshotted
         * when the method is called. Snapshot expansion and the estimate are calculated
         * in the libuv thread pool. Highly concentrated beta weights use a second-order
         * asymptotic approximation to avoid numerical convergence loss at large sample
         * counts.
         *
         * Setting `cache` to `true` avoids repeating snapshot capture and expansion when
         * several estimates are requested from an unchanged histogram. The retained
         * snapshot uses memory proportional to the number of occupied HDR buckets and is
         * released when the histogram is next modified.
         *
         * HDR histograms aggregate observations into equivalent-value buckets. The
         * `'hdr'` dequantization mode models repeated values in buckets wider than one
         * unit as a continuous uniform distribution over the bucket resolution. This
         * reduces density artifacts introduced by HDR quantization while preserving
         * repeated unit-resolution values as point masses. The `'all'` mode also
         * dequantizes repeated unit-resolution values. Use `'none'` to calculate the
         * grouped Harrell-Davis estimator using bucket midpoints directly.
         *
         * An empty histogram returns the requested `probabilities` but produces empty
         * `quantiles` and `densities` arrays. A non-dequantized interval whose quantile
         * boundaries are equal has an infinite density.
         * @since v26.10.0
         */
        qrde(options?: HistogramQRDEOptions): Promise<HistogramQRDEResult>;
        /**
         * Resets the collected histogram data.
         * @since v11.10.0
         */
        reset(): void;
        /**
         * The skewness of the recorded values. Measures the asymmetry of the
         * distribution. A positive value indicates a right-skewed distribution
         * (longer right tail, common for latency data); a negative value
         * indicates a left-skewed distribution.
         * @since v26.8.0
         */
        readonly skewness: number;
        /**
         * The standard deviation of the recorded event loop delays.
         * @since v11.10.0
         */
        readonly stddev: number;
        /**
         * Performs [Welch's t-test](https://en.wikipedia.org/wiki/Welch%27s_t-test) comparing the means of this histogram and `other`.
         * The p-value indicates the probability of observing a difference at least this
         * extreme under the null hypothesis that the two distributions have the same
         * mean. Both histograms must have at least 2 recorded values; otherwise the
         * result has `pValue` 1 and `tStatistic` 0.
         * @since v26.8.0
         * @param other The histogram to compare against.
         */
        welchTest(other: Histogram, options?: HistogramConfidenceOptions): HistogramWelchTestResult;
    }
    /**
     * A `Histogram` that records event loop delay, returned by
     * `perf_hooks.monitorEventLoopDelay()`.
     */
    interface ELDHistogram extends Histogram {
        /**
         * Disables event loop delay sampling. Returns `true` if sampling was
         * stopped, `false` if it was already stopped.
         * @since v11.10.0
         */
        disable(): boolean;
        /**
         * Enables event loop delay sampling. Returns `true` if sampling was
         * started, `false` if it was already started.
         * @since v11.10.0
         */
        enable(): boolean;
        /**
         * Disables event loop delay sampling when the histogram is disposed.
         *
         * ```js
         * const { monitorEventLoopDelay } = require('node:perf_hooks');
         * {
         *   using hist = monitorEventLoopDelay({ resolution: 20 });
         *   hist.enable();
         *   // The histogram will be disabled when the block is exited.
         * }
         * ```
         * @since v24.2.0
         */
        [Symbol.dispose](): void;
    }
    interface RecordableHistogram extends Histogram {
        /**
         * @since v15.9.0, v14.18.0
         * @param val The amount to record in the histogram.
         */
        record(val: number | bigint): void;
        /**
         * Calculates the amount of time (in nanoseconds) that has passed since the
         * previous call to `recordDelta()` and records that amount in the histogram.
         * @since v15.9.0, v14.18.0
         */
        recordDelta(): void;
        /**
         * Records a value with coordinated omission correction. When a system stall
         * prevents timely recording, this method backfills intermediate values at
         * `expectedInterval` steps between the previously recorded value and `val`.
         * This compensates for measurement gaps that would otherwise underrepresent
         * latency.
         * @since v26.8.0
         * @param val The value to record.
         * @param expectedInterval The expected recording interval.
         */
        recordCorrected(val: number | bigint, expectedInterval: number | bigint): void;
        /**
         * Adds the values from `other` to this histogram.
         * @since v17.4.0, v16.14.0
         */
        add(other: RecordableHistogram): void;
        /**
         * Subtracts the values of `other` from this histogram. Both histograms should
         * have compatible configurations. Bucket counts that would become negative
         * are clamped to zero.
         * @since v26.8.0
         */
        subtract(other: RecordableHistogram): void;
    }
    /**
     * Records values into a lazily rotated ring of histogram chunks. Instances are
     * created using `perf_hooks.createSlidingWindowHistogram()` and cannot be
     * constructed directly. A `SlidingWindowHistogram` does not extend `Histogram`;
     * call `snapshot()` to materialize the current window as a `Histogram`.
     *
     * `SlidingWindowHistogram` instances cannot be cloned or transferred through a
     * `MessagePort`.
     * @since v26.10.0
     */
    interface SlidingWindowHistogram {
        /**
         * Records `val` in the current chunk. For a count-based window, every call that
         * reaches the native histogram counts toward rotation, including values which
         * exceed the configured `highest` value.
         * @since v26.10.0
         * @param val The amount to record.
         */
        record(val: number | bigint): void;
        /**
         * Invalidates all chunks in the current window. Allocated chunks are reset
         * lazily when reused.
         * @since v26.10.0
         */
        reset(): void;
        /**
         * Materializes the current window as a new, independent `Histogram`. Values
         * recorded or expired after this method returns do not change the returned
         * histogram. Materialization allocates one histogram and merges every retained
         * chunk.
         * @since v26.10.0
         */
        snapshot(): Histogram;
    }
    interface HistogramConfidenceOptions {
        /**
         * The confidence level for the interval, between
         * 0 and 1 (exclusive).
         * @default 0.95
         */
        confidence?: number | undefined;
    }
    interface HistogramMeanCI {
        /**
         * The mean estimate, equivalent to `histogram.mean`.
         */
        mean: number;
        /**
         * The lower bound of the confidence interval.
         */
        lower: number;
        /**
         * The upper bound of the confidence interval.
         */
        upper: number;
    }
    interface HistogramPercentileCI {
        /**
         * The point estimate (same as `histogram.percentile()`).
         */
        value: number;
        /**
         * The lower bound of the confidence interval.
         */
        lower: number;
        /**
         * The upper bound of the confidence interval.
         */
        upper: number;
    }
    interface HistogramMannWhitneyTestResult {
        /**
         * The Mann-Whitney U statistic.
         */
        uStatistic: number;
        /**
         * The z-score (normal approximation).
         */
        zScore: number;
        /**
         * Two-tailed p-value.
         */
        pValue: number;
    }
    interface HistogramWelchTestResult {
        /**
         * The Welch t-statistic.
         */
        tStatistic: number;
        /**
         * Welch-Satterthwaite degrees of freedom.
         */
        degreesOfFreedom: number;
        /**
         * Two-tailed p-value.
         */
        pValue: number;
        confidenceInterval: {
            /**
             * Lower bound of the confidence interval on the
             * difference of means.
             */
            lower: number;
            /**
             * Upper bound.
             */
            upper: number;
        };
    }
    interface HistogramQRDEOptions {
        /**
         * The number of equal-probability density bins to return.
         * Must be between 1 and 1000. Cannot be used with `probabilities`.
         * @default 100
         */
        bins?: number | undefined;
        /**
         * Custom probability boundaries. The array must
         * contain between 2 and 1001 strictly increasing values, start with `0`, and
         * end with `1`. Cannot be used with `bins`.
         */
        probabilities?: readonly number[] | undefined;
        /**
         * Controls whether repeated bucket values are spread
         * deterministically over their equivalent-value ranges.
         * @default 'hdr'
         */
        dequantize?: "none" | "hdr" | "all" | undefined;
        /**
         * When `true`, retains the expanded histogram snapshot for
         * reuse by subsequent calls with `cache: true`. The snapshot is invalidated
         * when the histogram is modified.
         * @default false
         */
        cache?: boolean | undefined;
    }
    interface HistogramQRDEResult {
        /**
         * The probability boundaries used by the
         * estimate.
         */
        probabilities: NodeJS.NonSharedFloat64Array;
        /**
         * The quantiles at the probability boundaries.
         */
        quantiles: NodeJS.NonSharedFloat64Array;
        /**
         * The density within each quantile interval.
         */
        densities: NodeJS.NonSharedFloat64Array;
        /**
         * The number of values in the histogram snapshot.
         */
        count: bigint;
        /**
         * The number of occupied HDR buckets.
         */
        bucketCount: number;
        /**
         * The number of non-monotonic floating-point results
         * that were clamped to the preceding quantile.
         */
        corrections: number;
        /**
         * The selected dequantization mode.
         */
        dequantize: "none" | "hdr" | "all";
    }
    interface EventLoopUtilization {
        idle: number;
        active: number;
        utilization: number;
    }
    /**
     * The `eventLoopUtilization()` function returns an object that contains the
     * cumulative duration of time the event loop has been both idle and active as a
     * high resolution milliseconds timer. The `utilization` value is the calculated
     * Event Loop Utilization (ELU).
     *
     * If bootstrapping has not yet finished on the main thread the properties have
     * the value of `0`. The ELU is immediately available on [Worker threads](https://nodejs.org/docs/latest-v26.x/api/worker_threads.html#worker-threads) since
     * bootstrap happens within the event loop.
     *
     * Both `utilization1` and `utilization2` are optional parameters.
     *
     * If `utilization1` is passed, then the delta between the current call's `active`
     * and `idle` times, as well as the corresponding `utilization` value are
     * calculated and returned (similar to `process.hrtime()`).
     *
     * If `utilization1` and `utilization2` are both passed, then the delta is
     * calculated between the two arguments. This is a convenience option because,
     * unlike `process.hrtime()`, calculating the ELU is more complex than a
     * single subtraction.
     *
     * ELU is similar to CPU utilization, except that it only measures event loop
     * statistics and not CPU usage. It represents the percentage of time the event
     * loop has spent outside the event loop's event provider (e.g. `epoll_wait`).
     * No other CPU idle time is taken into consideration. The following is an example
     * of how a mostly idle process will have a high ELU.
     *
     * ```js
     * import { eventLoopUtilization } from 'node:perf_hooks';
     * import { spawnSync } from 'node:child_process';
     *
     * setImmediate(() => {
     *   const elu = eventLoopUtilization();
     *   spawnSync('sleep', ['5']);
     *   console.log(eventLoopUtilization(elu).utilization);
     * });
     * ```
     *
     * Although the CPU is mostly idle while running this script, the value of
     * `utilization` is `1`. This is because the call to
     * `child_process.spawnSync()` blocks the event loop from proceeding.
     *
     * Passing in a user-defined object instead of the result of a previous call to
     * `eventLoopUtilization()` will lead to undefined behavior. The return values
     * are not guaranteed to reflect any correct state of the event loop.
     * @since v25.2.0
     * @param utilization1 The result of a previous call to
     * `eventLoopUtilization()`.
     * @param utilization2 The result of a previous call to
     * `eventLoopUtilization()` prior to `utilization1`.
     */
    function eventLoopUtilization(
        utilization1?: EventLoopUtilization,
        utilization2?: EventLoopUtilization,
    ): EventLoopUtilization;
    /**
     * _This property is an extension by Node.js. It is not available in Web browsers._
     *
     * Creates a histogram object that samples and reports the event loop delay over
     * time. The delays will be reported in nanoseconds.
     *
     * By default, the histogram is updated by a timer using the configured
     * `resolution`. When `samplePerIteration` is `true`, samples are taken once per
     * event loop iteration using `uv_prepare_t` and `uv_check_t` hooks. In that mode,
     * the histogram does not keep the loop alive or force additional iterations when
     * the application is idle.
     * The two sampling modes produce significantly different results and should not
     * be compared directly.
     *
     * ```js
     * import { monitorEventLoopDelay } from 'node:perf_hooks';
     * const h = monitorEventLoopDelay({ resolution: 20 });
     * h.enable();
     * // Do something.
     * h.disable();
     * console.log(h.min);
     * console.log(h.max);
     * console.log(h.mean);
     * console.log(h.stddev);
     * console.log(h.percentiles);
     * console.log(h.percentile(50));
     * console.log(h.percentile(99));
     * ```
     * @since v11.10.0
     */
    function monitorEventLoopDelay(options?: EventLoopMonitorOptions): ELDHistogram;
    interface TimerifyOptions {
        /**
         * A histogram object created using
         * `perf_hooks.createHistogram()` that will record runtime durations in
         * nanoseconds.
         */
        histogram?: RecordableHistogram | undefined;
    }
    /**
     * _This property is an extension by Node.js. It is not available in Web browsers._
     *
     * Wraps a function within a new function that measures the running time of the
     * wrapped function. A `PerformanceObserver` must be subscribed to the `'function'`
     * event type in order for the timing details to be accessed.
     *
     * ```js
     * import { timerify, performance, PerformanceObserver } from 'node:perf_hooks';
     *
     * function someFunction() {
     *   console.log('hello world');
     * }
     *
     * const wrapped = timerify(someFunction);
     *
     * const obs = new PerformanceObserver((list) => {
     *   console.log(list.getEntries()[0].duration);
     *
     *   performance.clearMarks();
     *   performance.clearMeasures();
     *   obs.disconnect();
     * });
     * obs.observe({ entryTypes: ['function'] });
     *
     * // A performance timeline entry will be created
     * wrapped();
     * ```
     *
     * If the wrapped function returns a promise, a finally handler will be attached
     * to the promise and the duration will be reported once the finally handler is
     * invoked.
     * @since v25.2.0
     */
    function timerify<T extends (...args: any[]) => any>(fn: T, options?: TimerifyOptions): T;
    interface CreateHistogramOptions {
        /**
         * The minimum recordable value. Must be an integer value greater than 0.
         * @default 1
         */
        lowest?: number | bigint | undefined;
        /**
         * The maximum recordable value. Must be an integer value greater than min.
         * @default Number.MAX_SAFE_INTEGER
         */
        highest?: number | bigint | undefined;
        /**
         * The number of accuracy digits. Must be a number between 1 and 5.
         * @default 3
         */
        figures?: number | undefined;
        /**
         * The EWMA half-life in number of samples. When set to
         * a value greater than 0, the histogram tracks an exponentially weighted
         * moving average and standard deviation, accessible via
         * `histogram.ewmaMean` and `histogram.ewmaStddev`. After `halfLife`
         * recordings, a value's influence has decayed to 50%.
         * @default 0
         */
        halfLife?: number | undefined;
        /**
         * An SLO threshold value. When set together with
         * `halfLife`, the histogram tracks a smoothed error rate for values
         * exceeding this threshold, accessible via `histogram.ewmaErrorRate` and
         * `histogram.burnRate()`.
         * @default 0
         */
        threshold?: number | undefined;
    }
    /**
     * Returns a `RecordableHistogram`.
     * @since v15.9.0, v14.18.0
     */
    function createHistogram(options?: CreateHistogramOptions): RecordableHistogram;
    interface CreateSlidingWindowHistogramBaseOptions {
        /**
         * The number of histogram chunks retained. Must be an
         * integer between `1` and `1024`.
         */
        chunks: number;
        /**
         * The lowest discernible value. Must be an integer
         * value greater than `0`.
         * @default 1
         */
        lowest?: number | bigint | undefined;
        /**
         * The highest recordable value. Must be an integer
         * value that is equal to or greater than two times `lowest`.
         * @default Number.MAX_SAFE_INTEGER
         */
        highest?: number | bigint | undefined;
        /**
         * The number of accuracy digits. Must be an integer between
         * `1` and `5`.
         * @default 3
         */
        figures?: number | undefined;
    }
    interface CreateTimeBasedSlidingWindowHistogramOptions extends CreateSlidingWindowHistogramBaseOptions {
        /**
         * The duration of each chunk in milliseconds. Must
         * be an integer between `1` and `18_446_744_073_709`. Exactly one of
         * `chunkDuration` and `recordsPerChunk` must be specified.
         */
        chunkDuration: number;
        recordsPerChunk?: undefined;
    }
    interface CreateCountBasedSlidingWindowHistogramOptions extends CreateSlidingWindowHistogramBaseOptions {
        chunkDuration?: undefined;
        /**
         * The number of calls to `record()` assigned to
         * each chunk. Must be an integer between `1` and `Number.MAX_SAFE_INTEGER`.
         * Exactly one of `chunkDuration` and `recordsPerChunk` must be specified.
         */
        recordsPerChunk: number;
    }
    /**
     * Options for `perf_hooks.createSlidingWindowHistogram()`.
     *
     * Typing quirk: modeled as a union so that exactly one of `chunkDuration` and
     * `recordsPerChunk` is accepted, as required by the documentation.
     */
    type CreateSlidingWindowHistogramOptions =
        | CreateTimeBasedSlidingWindowHistogramOptions
        | CreateCountBasedSlidingWindowHistogramOptions;
    /**
     * Creates a `SlidingWindowHistogram` that retains the latest `chunks` histogram
     * chunks. Rotation is lazy and does not create a timer. Time-based rotation is
     * evaluated when `record()` or `snapshot()` is called. Count-based rotation is
     * evaluated when `record()` is called.
     *
     * One histogram chunk is allocated during construction. Additional chunks are
     * allocated lazily. The maximum native memory used by the window scales with
     * `chunks` and with the `lowest`, `highest`, and `figures` histogram options.
     *
     * The window boundary has chunk-level precision. With `N` chunks of duration
     * `D`, a recorded value is retained for between `(N - 1) * D` and `N * D`
     * milliseconds. Once a count-based window is populated, it retains between
     * `(N - 1) * C + 1` and `N * C` recording attempts, where `C` is
     * `recordsPerChunk`. Recording attempts which exceed `highest` are included when
     * determining count-based rotation.
     *
     * ```js
     * const { createSlidingWindowHistogram } = require('node:perf_hooks');
     *
     * const window = createSlidingWindowHistogram({
     *   chunks: 6,
     *   chunkDuration: 10_000,
     * });
     *
     * window.record(20_000_000);
     *
     * // Materialize the current window as an independent Histogram.
     * const snapshot = window.snapshot();
     * console.log(snapshot.percentile(99));
     * ```
     * @since v26.10.0
     */
    function createSlidingWindowHistogram(options: CreateSlidingWindowHistogramOptions): SlidingWindowHistogram;
    /**
     * Reconstructs a histogram from a CBOR-encoded `Uint8Array`. The returned
     * histogram is a full `RecordableHistogram` with all bucket data, configuration,
     * and EWMA state restored. New values can be recorded into it.
     *
     * ```js
     * const { createHistogram, importHistogram } = require('node:perf_hooks');
     *
     * const h = createHistogram();
     * for (let i = 1; i <= 1000; i++) h.record(i);
     *
     * // Serialize and reconstruct
     * const data = h.export();
     * const h2 = importHistogram(data);
     *
     * console.log(h2.count);          // 1000
     * console.log(h2.percentile(99)); // Same as h.percentile(99)
     * ```
     * @since v26.9.0
     * @param data A CBOR-encoded histogram previously produced by
     * `histogram.export()`.
     */
    function importHistogram(data: Uint8Array): RecordableHistogram;
}
declare module "perf_hooks" {
    export * from "node:perf_hooks";
}
