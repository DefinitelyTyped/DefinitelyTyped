interface Benchmark {
    /**
     * Start the benchmark. If not called the bench will be tracked from the beginning of the function.
     */
    start(): void;

    /**
     * End the benchmark. Returns the time elapsed in milliseconds.
     */
    end(): number;

    /**
     * Returns the time elapsed in milliseconds.
     */
    elapsed(): number;

    /**
     * Benchmark failed. Report error.
     */
    error(err: Error): void;

    /**
     * Log out a message.
     */
    log(msg: unknown): void;
}

type RunFn = (b: Benchmark) => unknown;

declare const nanobench: {
    /**
     * Add a new benchmark. `run` is called with a {@link Benchmark} object.
     */
    (name: string, run: RunFn): void;

    /**
     * Skip a benchmark.
     */
    skip: (name: string, run: RunFn) => void;

    /**
     * Only run this benchmark.
     */
    only: (name: string, run: RunFn) => void;
};

export = nanobench;
