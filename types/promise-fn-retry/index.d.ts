declare namespace retry {
    interface RetryOptions {
        /**
         * The number of times the lib will retry execute the promiseFn.
         *
         * @default 1
         */
        times?: number;
        /**
         * The first wait time to delay.
         *
         * @default 100
         */
        initialDelayTime?: number;
        /**
         * This callback is executed on each retry. It's useful to log your errors to a log
         * service for example.
         *
         * @default null
         */
        onRetry?: ((err: unknown, optionsParsed: RetryControlOptions) => void) | null;
        /**
         * This callback is executed before each retry to determine if it's necessary retrying.
         * If the function returns true, the next retry will be executed, else the retrying will
         * be canceled.
         *
         * @default null
         */
        shouldRetry?: ((err: unknown) => boolean) | null;
    }

    interface RetryControlOptions extends RetryOptions {
        /**
         * The number of retries that are already made.
         */
        retained: number;
        /**
         * The current delay time that is used in current retry.
         */
        currentDelay: number | null;
    }
}

declare function retry<T>(
    requestFn: () => Promise<T>,
    options?: retry.RetryOptions,
): Promise<T>;

export = retry;
