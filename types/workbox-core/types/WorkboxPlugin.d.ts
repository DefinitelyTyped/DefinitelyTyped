export interface WorkboxPlugin {
    cacheDidUpdate?: CacheDidUpdateCallback;
    cacheKeyWillBeUsed?: CacheKeyWillBeUsedCallback;
    cacheWillUpdate?: CacheWillUpdateCallback;
    cachedResponseWillBeUsed?: CachedResponseWillBeUsedCallback;
    fetchDidFail?: FetchDidFailCallback;
    fetchDidSucceed?: FetchDidSucceedCallback;
    requestWillFetch?: RequestWillFetchCallback;
}

export interface CacheDidUpdateCallback {
    (param: CacheDidUpdateCallbackParam): Promise<void>;
}

export interface CacheDidUpdateCallbackParam {
    cacheName: string;
    newResponse: Response;
    oldResponse?: Response | null;
    request: Request;
    event?: Event;
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
    event?: ExtendableEvent;
}

export interface CachedResponseWillBeUsedCallback {
    (param: CachedResponseWillBeUsedCallbackParam): Promise<Response | undefined>;
}

export interface CachedResponseWillBeUsedCallbackParam {
    cacheName: string;
    cachedResponse?: Response;
    matchOptions?: CacheQueryOptions;
    request: Request;
    event?: ExtendableEvent;
}

export interface FetchDidFailCallback {
    (param: FetchDidFailCallbackParam): Promise<void>;
}

export interface FetchDidFailCallbackParam {
    error: Error;
    originalRequest: Request;
    request: Request;
    event?: ExtendableEvent;
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
