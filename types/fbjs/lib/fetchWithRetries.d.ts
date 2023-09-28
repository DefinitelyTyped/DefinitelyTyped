/**
 * Makes a POST request to the server with the given data as the payload.
 * Automatic retries are done based on the values in `retryDelays`.
 */
declare function fetchWithRetries(uri: string, initWithRetries?: fetchWithRetries.InitWithRetries | null): Promise<any>;

declare namespace fetchWithRetries {
    interface InitWithRetries {
        body?: any;
        cache?: string | null | undefined;
        credentials?: string | null | undefined;
        fetchTimeout?: number | null | undefined;
        headers?: any;
        method?: string | null | undefined;
        mode?: string | null | undefined;
        retryDelays?: number[] | null | undefined;
    }
}

export = fetchWithRetries;
