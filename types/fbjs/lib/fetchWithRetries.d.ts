/**
 * Makes a POST request to the server with the given data as the payload.
 * Automatic retries are done based on the values in `retryDelays`.
 */
declare function fetchWithRetries(uri: string, initWithRetries?: fetchWithRetries.InitWithRetries | null): Promise<any>;

declare namespace fetchWithRetries {
    export type InitWithRetries = {
        body?: any;
        cache?: string | null;
        credentials?: string | null;
        fetchTimeout?: number | null;
        headers?: any;
        method?: string | null;
        mode?: string | null;
        retryDelays?: Array<number> | null;
    };
}

export = fetchWithRetries;
