import type * as CircuitBreaker from 'opossum';
import type { Registry } from 'prom-client';

export interface OpossumMetricsOptions {
    circuits?: CircuitBreaker[];
    registry?: Registry;
    exposePerformanceMetrics?: boolean;
    metricPrefix?: string;
}

export default class OpossumMetrics {
    constructor(options?: OpossumMetricsOptions);
    add(circuit: CircuitBreaker): void;
}


