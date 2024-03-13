export = CircuitBreaker;

declare namespace CircuitBreaker {
    interface Options {
        windowDuration?: number | undefined;
        numBuckets?: number | undefined;
        timeoutDuration?: number | undefined;
        errorThreshold?: number | undefined;
        volumeThreshold?: number | undefined;

        onCircuitOpen?: ((m: Metrics) => void) | undefined;
        onCircuitClose?: ((m: Metrics) => void) | undefined;
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
        fallback?: () => void,
    ): void;
    forceClose(): void;
    forceOpen(): void;
    unforce(): void;
    isOpen(): boolean;
}
