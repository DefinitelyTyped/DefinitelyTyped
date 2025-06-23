declare namespace ThreadLoader {
    interface Options {
        /** @default '' */
        name?: string | undefined;

        numberOfWorkers?: number | undefined;

        workerNodeArgs?: any[] | undefined;

        /** @default 20 */
        workerParallelJobs?: number | undefined;

        /** @default 500 */
        poolTimeout?: number | undefined;

        /** @default 200 */
        poolParallelJobs?: number | undefined;

        /** @default false */
        poolRespawn?: boolean | undefined;
    }
}

interface ThreadLoader {
    pitch(): void;
    warmup(options: ThreadLoader.Options, requires: string[]): void;
}

declare const ThreadLoader: ThreadLoader;

export = ThreadLoader;
