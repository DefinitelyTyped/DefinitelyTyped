// Type definitions for backo2 1.0
// Project: https://github.com/mokesmokes/backo
// Definitions by: Retsam <https://github.com/Retsam>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

type BackoffOptions = Partial<{
    min: number,
    max: number,
    jitter: number,
    factor: number,
}>;

declare class Backoff {
    constructor(opts?: BackoffOptions);

    duration(): number;
    /**
     * Reset the number of attempts.
     */
    reset(): void;
    /**
     * Set the minimum duration
     */
    setMin(min: number): void;
    /**
     * Set the maximum duration
     */
    setMax(max: number): void;
    /**
     * Set the jitter
     */
    setJitter(jitter: number): void;
}

export = Backoff;
