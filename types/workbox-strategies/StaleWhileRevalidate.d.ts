import { RouteHandlerCallback, RouteHandlerCallbackOptions, RouteHandlerObject } from "workbox-core/types/RouteHandler";
import { WorkboxPlugin } from "workbox-core/types/WorkboxPlugin";

import { MakeRequestCallback } from "./types/MakeRequestCallback";

export interface StaleWhileRevalidateOptions {
    cacheName?: string;
    fetchOptions?: RequestInit;
    matchOptions?: CacheQueryOptions;
    plugins?: WorkboxPlugin[];
}

export class StaleWhileRevalidate implements RouteHandlerObject {
    constructor(options?: StaleWhileRevalidateOptions);
    handle: RouteHandlerCallback;
    makeRequest: MakeRequestCallback;
}
