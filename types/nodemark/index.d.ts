// Type definitions for nodemark 0.3
// Project: https://github.com/JoshuaWise/nodemark
// Definitions by: Beeno Tung <https://github.com/beenotung>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace benchmark {
    type SyncFn = () => void;

    type AsyncFn = (cb: DoneCallback) => void;

    type DoneCallback = () => void;

    type Unit = 'nanoseconds' | 'microseconds' | 'milliseconds' | 'seconds' | 'hz';

    interface BenchmarkResult {
        mean: number; // the average measured time in nanoseconds
        error: number; // the margin of error as a ratio of the mean
        max: number; // the fastest measured time in nanoseconds
        min: number; // the slowest measured time in nanoseconds
        count: number; // the number of times the subject was invoked and measured

        nanoseconds(
            precision?: number, // default to 0
        ): number;

        microseconds(
            precision?: number, // default to 0
        ): number;

        milliseconds(
            precision?: number, // default to 0
        ): number;

        seconds(
            precision?: number, // default to 0
        ): number;

        hz(
            precision?: number, // default to 0
        ): number;

        sd(
            precision?: number, // default to 0
        ): number;

        toString(
            format?: Unit, // default to 'hz'
        ): string;

        // [util.inspect.custom]: () => string;
    }
}

declare function benchmark(
    subjectFn: benchmark.SyncFn,
    setupFn?: benchmark.SyncFn, // optional, will be invoked before every execution of subjectFn
    duration?: number, // default to 3300
): benchmark.BenchmarkResult;
declare function benchmark(
    subjectFn: benchmark.SyncFn,
    setupFn?: benchmark.AsyncFn, // optional, will be invoked before every execution of subjectFn
    duration?: number, // default to 3300
): Promise<benchmark.BenchmarkResult>;
declare function benchmark(
    subjectFn: benchmark.AsyncFn,
    setupFn?: benchmark.SyncFn | benchmark.AsyncFn, // optional, will be invoked before every execution of subjectFn
    duration?: number, // default to 3300
): Promise<benchmark.BenchmarkResult>;

export = benchmark;
