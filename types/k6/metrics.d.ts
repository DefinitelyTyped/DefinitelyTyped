/*
 * Custom metrics.
 * https://docs.k6.io/docs/k6metrics
 */

/**
 * Custom metric.
 * @public
 */
export abstract class Metric {
    protected __brand: never;

    /**
     * @param name - Metric name.
     * @param isTime - Whether values are time values.
     */
    constructor(name: string, isTime?: boolean);

    /**
     * Add value.
     * @param value - Value to add.
     * @param tags - Tags to attach to data point.
     */
    add(value: number | boolean, tags?: { [name: string]: string }): void;
}

/**
 * Cumulative counter.
 * https://docs.k6.io/docs/counter-k6metrics
 * @public
 */
export class Counter extends Metric {
    protected __brand: never;
}

/**
 * Gauge. Holds only latest value.
 * https://docs.k6.io/docs/gauge-k6metrics
 * @public
 */
export class Gauge extends Metric {
    protected __brand: never;
}

/**
 * Tracks percentage of nonzero values.
 * https://docs.k6.io/docs/rate-k6metrics
 * @public
 */
export class Rate extends Metric {
    protected __brand: never;
}

/**
 * Calculates summary statistics.
 * https://docs.k6.io/docs/trend-k6metrics
 * @public
 */
export class Trend extends Metric {
    protected __brand: never;
}
