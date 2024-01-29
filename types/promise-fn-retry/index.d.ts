export interface RetryOptions {
    times?: number;
    initialDelayTime?: number;
    onRetry?: (err: unknown, optionsParsed: RetryControlOptions) => void;
    shouldRetry?: (err: unknown) => boolean;
}

export interface RetryControlOptions extends RetryOptions {
    retained: number;
    currentDelay?: number;
}

declare function retry<T>(
    requestFn: () => Promise<T>,
    options?: RetryOptions,
): Promise<T>;

export default retry;
