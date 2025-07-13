import type * as CircuitBreaker from "opossum";
import type { Registry } from "prom-client";

/**
 * Options for configuring OpossumMetrics.
 */
interface OpossumMetricsOptions {
    /**
     * A list or individual circuit breaker to create metrics for.
     * @default undefined - No circuits.
     */
    circuits?: CircuitBreaker[] | undefined;

    /**
     * An existing registry to use for prometheus metrics.
     * @default undefined  - The default prometheus registry will be used and default system metrics will be collected
     */
    registry?: Registry | undefined;

    /**
     * Measure the performance of breakers and report them through the registry.
     * @default true
     */
    exposePerformanceMetrics?: boolean | undefined;

    /**
     * Prefix for circuit breakers metrics name.
     */
    metricPrefix?: string | undefined;
}

/**
 * Class for integrating Opossum circuit breakers with Prometheus metrics.
 */
declare class OpossumMetrics {
    /**
     * Creates an instance of OpossumMetrics.
     * @param options - Configuration options for the metrics.
     */
    constructor(options?: OpossumMetricsOptions);

    /**
     * Adds a circuit breaker to be monitored.
     * @param circuit - The circuit breaker to add.
     */
    add(circuit: CircuitBreaker): void;
}

export = OpossumMetrics;
