export interface WorkboxPlugin {
    cacheDidUpdate?: CacheDidUpdateCallback | undefined;
    cacheKeyWillBeUsed?: CacheKeyWillBeUsedCallback | undefined;
    cacheWillUpdate?: CacheWillUpdateCallback | undefined;
    cachedResponseWillBeUsed?: CachedResponseWillBeUsedCallback | undefined;
    fetchDidFail?: FetchDidFailCallback | undefined;
    fetchDidSucceed?: FetchDidSucceedCallback | undefined;
    requestWillFetch?: RequestWillFetchCallback | undefined;
}

export interface CacheDidUpdateCallback {
    (param: CacheDidUpdateCallbackParam): Promise<void>;
}

export interface CacheDidUpdateCallbackParam {
    cacheName: string;
    newResponse: Response;
    oldResponse?: Response | null | undefined;
    request: Request;
    event?: Event | undefined;
}

export interface CacheKeyWillBeUsedCallback {
    (param: CacheKeyWillBeUsedCallbackParam): Promise<Request | string>;
}

export interface CacheKeyWillBeUsedCallbackParam {
    request: Request;
    mode: string;
}

export interface CacheWillUpdateCallback {
    (param: CacheWillUpdateCallbackParamParam): Promise<Response | undefined>;
}

export interface CacheWillUpdateCallbackParamParam {
    request: Request;
    response: Response;
    event?: ExtendableEvent | undefined;
}

export interface CachedResponseWillBeUsedCallback {
    (param: CachedResponseWillBeUsedCallbackParam): Promise<Response | undefined>;
}

export interface CachedResponseWillBeUsedCallbackParam {
    cacheName: string;
    cachedResponse?: Response | undefined;
    matchOptions?: CacheQueryOptions | undefined;
    request: Request;
    event?: ExtendableEvent | undefined;
}

export interface FetchDidFailCallback {
    (param: FetchDidFailCallbackParam): Promise<void>;
}

export interface FetchDidFailCallbackParam {
    error: Error;
    originalRequest: Request;
    request: Request;
    event?: ExtendableEvent | undefined;
}

export interface FetchDidSucceedCallback {
    (param: FetchDidSucceedCallbackParam): Promise<Response>;
}

export interface FetchDidSucceedCallbackParam {
    request: Request;
    response: Response;
}

export interface RequestWillFetchCallback {
    (param: RequestWillFetchCallbackParam): Promise<Request | undefined>;
}

export interface RequestWillFetchCallbackParam {
    request: Request;
}
