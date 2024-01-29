type BackoffOptions = Partial<{
    min: number;
    max: number;
    jitter: number;
    factor: number;
}>;

declare class Backoff {
    constructor(opts?: BackoffOptions);

    /**
     * The number of previous attempts
     */
    attempts: number;
    /**
     * A lower bound on the duration between attempts
     */
    ms: number;
    /**
     * An upper bound on the duration between attempts
     */
    max: number;
    /**
     * An upper bound on the variance around the duration between attempts
     */
    jitter: number;
    /**
     * The base to which the attempt is raised as an exponent
     */
    factor: number;
    /**
     * Compute the backoff duration and increment the number of attempts
     */
    duration(): number;
    /**
     * Reset the number of attempts
     */
    reset(): void;
    /**
     * Set the minimum duration between attempts
     */
    setMin(min: number): void;
    /**
     * Set the maximum duration between attempts
     */
    setMax(max: number): void;
    /**
     * Set the jitter
     */
    setJitter(jitter: number): void;
}

export = Backoff;
