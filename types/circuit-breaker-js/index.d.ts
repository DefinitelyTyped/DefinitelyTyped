// Type definitions for circuit-breaker-js 0.0
// Project: http://yammer.github.io/circuit-breaker-js/
// Definitions by: Timur Amirov <https://github.com/DeTeam>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = CircuitBreaker;

declare namespace CircuitBreaker {
    interface Options {
        windowDuration?: number;
        numBuckets?: number;
        timeoutDuration?: number;
        errorThreshold?: number;
        volumeThreshold?: number;

        onCircuitOpen?: (m: Metrics) => void;
        onCircuitClose?: (m: Metrics) => void;
    }

    interface Metrics {
        totalCount: number;
        errorCount: number;
        errorPercentage: number;
    }
}

declare class CircuitBreaker {
    static OPEN: 0;
    static HALF_OPEN: 1;
    static CLOSED: 2;

    constructor(options?: CircuitBreaker.Options);
    run(
        command: (
            success: () => void,
            failure: () => void,
        ) => void,
        fallback?: () => void
    ): void;
    forceClose(): void;
    forceOpen(): void;
    unforce(): void;
    isOpen(): boolean;
}
