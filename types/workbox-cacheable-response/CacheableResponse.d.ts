export class CacheableResponse {
    constructor(config?: CacheableResponseConfig);
    isResponseCacheable(response: Response): boolean;
}

export interface CacheableResponseConfig {
    headers?: Record<string, string>;
    statuses?: number[];
}
