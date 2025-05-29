import type * as CircuitBreaker from 'opossum';
import type { Registry } from 'prom-client';

/**
    * Options for configuring OpossumMetrics.
    */
interface OpossumMetricsOptions {
    /**
     * Array of circuit breakers to monitor.
     */
    circuits?: CircuitBreaker[];

    /**
     * Prometheus registry to use for metrics.
     */
    registry?: Registry;

    /**
     * Whether to expose performance metrics.
     * @default false
     */
    exposePerformanceMetrics?: boolean;

    /**
     * Prefix to add to all metric names.
     * @default 'opossum_'
     */
    metricPrefix?: string;
}

/**
 * Class for integrating Opossum circuit breakers with Prometheus metrics.
 */
declare class OpossumMetrics {

    /**
     * Creates an instance of OpossumMetrics.
     * @param options - Configuration options for the metrics.
     */
    constructor(options ?: OpossumMetricsOptions);

    /**
     * Adds a circuit breaker to be monitored.
     * @param circuit - The circuit breaker to add.
     */
    add(circuit: CircuitBreaker): void;
}

export = OpossumMetrics;

