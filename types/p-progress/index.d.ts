// Type definitions for p-progress 0.2
// Project: https://github.com/sindresorhus/p-progress#readme
// Definitions by: icopp <https://github.com/icopp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

declare namespace pProgress {
    interface Options {
        /**
         * Number of concurrently pending promises.
         *
         * To run the promises in series, set it to 1.
         *
         * When this option is set, the first argument must be an array of
         * promise-returning functions.
         *
         * Minimum 1.
         *
         * @default {Infinity}
         */
        concurrency?: number;
    }
}

type PromiseFactory<T> = () => Promise<T> | PromiseLike<T>;

declare class PProgress<T> extends Promise<T> {
    /**
     * The current progress percentage of the promise as a number between 0 and
     * 1.
     */
    progress: number;

    /**
     * Convenience method to run multiple promises and get a total progress of
     * all of them. It counts normal promises with progress `0` when pending and
     * progress `1` when resolved. For PProgress type promises, it listens to
     * their onProgress() method for more fine grained progress reporting. You
     * can mix and match normal promises and PProgress promises.
     *
     * @param promises Array of promises or promise-returning functions.
     * @throws {TypeError}
     */
    static all<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
        promises: [
            PromiseFactory<T1>,
            PromiseFactory<T2>,
            PromiseFactory<T3>,
            PromiseFactory<T4>,
            PromiseFactory<T5>,
            PromiseFactory<T6>,
            PromiseFactory<T7>,
            PromiseFactory<T8>,
            PromiseFactory<T9>,
            PromiseFactory<T10>
        ],
        options?: pProgress.Options
    ): PProgress<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;
    static all<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
        promises: [
            PromiseFactory<T1>,
            PromiseFactory<T2>,
            PromiseFactory<T3>,
            PromiseFactory<T4>,
            PromiseFactory<T5>,
            PromiseFactory<T6>,
            PromiseFactory<T7>,
            PromiseFactory<T8>,
            PromiseFactory<T9>
        ],
        options?: pProgress.Options
    ): PProgress<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>;
    static all<T1, T2, T3, T4, T5, T6, T7, T8>(
        promises: [
            PromiseFactory<T1>,
            PromiseFactory<T2>,
            PromiseFactory<T3>,
            PromiseFactory<T4>,
            PromiseFactory<T5>,
            PromiseFactory<T6>,
            PromiseFactory<T7>,
            PromiseFactory<T8>
        ],
        options?: pProgress.Options
    ): PProgress<[T1, T2, T3, T4, T5, T6, T7, T8]>;
    static all<T1, T2, T3, T4, T5, T6, T7>(
        promises: [
            PromiseFactory<T1>,
            PromiseFactory<T2>,
            PromiseFactory<T3>,
            PromiseFactory<T4>,
            PromiseFactory<T5>,
            PromiseFactory<T6>,
            PromiseFactory<T7>
        ],
        options?: pProgress.Options
    ): PProgress<[T1, T2, T3, T4, T5, T6, T7]>;
    static all<T1, T2, T3, T4, T5, T6>(
        promises: [
            PromiseFactory<T1>,
            PromiseFactory<T2>,
            PromiseFactory<T3>,
            PromiseFactory<T4>,
            PromiseFactory<T5>,
            PromiseFactory<T6>
        ],
        options?: pProgress.Options
    ): PProgress<[T1, T2, T3, T4, T5, T6]>;
    static all<T1, T2, T3, T4, T5>(
        promises: [
            PromiseFactory<T1>,
            PromiseFactory<T2>,
            PromiseFactory<T3>,
            PromiseFactory<T4>,
            PromiseFactory<T5>
        ],
        options?: pProgress.Options
    ): PProgress<[T1, T2, T3, T4, T5]>;
    static all<T1, T2, T3, T4>(
        promises: [
            PromiseFactory<T1>,
            PromiseFactory<T2>,
            PromiseFactory<T3>,
            PromiseFactory<T4>
        ],
        options?: pProgress.Options
    ): PProgress<[T1, T2, T3, T4]>;
    static all<T1, T2, T3>(
        promises: [PromiseFactory<T1>, PromiseFactory<T2>, PromiseFactory<T3>],
        options?: pProgress.Options
    ): PProgress<[T1, T2, T3]>;
    static all<T1, T2>(
        promises: [PromiseFactory<T1>, PromiseFactory<T2>],
        options?: pProgress.Options
    ): PProgress<[T1, T2]>;
    static all<T1>(
        promises: [PromiseFactory<T1>],
        options?: pProgress.Options
    ): PProgress<[T1]>;
    static all<TAll>(
        promises: Array<PromiseFactory<TAll>>,
        options?: pProgress.Options
    ): PProgress<TAll>;

    /**
     * Same as the Promise constructor, but with an appended `progress`
     * parameter in `executor`.
     *
     * @param progress
     *  Call this with progress updates. It expects a number between 0 and 1.
     *
     *  Multiple calls with the same number will result in only one
     *  `onProgress()` event.
     *
     *  Progress percentage `1` is reported for you when the promise resolves.
     *  If you set it yourself, it will simply be ignored.
     */
    constructor(
        executor: (
            resolve: (value?: T | PromiseLike<T>) => void,
            reject: (reason?: any) => void,
            progress: (progress: number) => void
        ) => void
    );

    /**
     * Accepts a function that gets `instance.progress` as an argument and is
     * called for every progress event.
     *
     * @throws {TypeError}
     */
    onProgress(cb: (progress: number) => void): void;
}

export = PProgress;
