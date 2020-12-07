import { IHttpClientImpl } from "../../common";
/**
 * Fetch client that encapsulates the node-fetch library and also adds retry logic
 * when encountering transient errors.
 */
export declare class NodeFetchClient implements IHttpClientImpl {
    private retryCount;
    private retryInterval;
    private minRetryInterval;
    private maxRetryInterval;
    /**
     *
     * @param retryCount: number - Maximum number of transient failure retries before throwing the error
     * @param retryInterval: number - Starting interval to delay the first retry attempt
     * @param minRetryInterval: number - Minimum retry delay boundary as retry intervals are randomly recalculated
     * @param maxRetryInterval: number - Maximum retry delay boundary as retry intervals are radnomaly recalculated
     */
    constructor(retryCount?: number, retryInterval?: number, minRetryInterval?: number, maxRetryInterval?: number);
    fetch(url: string, options?: any): Promise<Response>;
    private delay;
    private updateRetryData;
    private shouldRetry;
}
//# sourceMappingURL=nodefetchclient.d.ts.map