import { RouteHandlerCallback, RouteHandlerCallbackOptions, RouteHandlerObject } from "workbox-core/types/RouteHandler";
import { WorkboxPlugin } from "workbox-core/types/WorkboxPlugin";

import { MakeRequestCallback } from "./types/MakeRequestCallback";

export class CacheFirst implements RouteHandlerObject {
    constructor(options?: CacheFirstOptions);
    handle: RouteHandlerCallback;
    makeRequest: MakeRequestCallback;
}

export interface CacheFirstOptions {
    cacheName?: string;
    fetchOptions?: RequestInit;
    matchOptions?: CacheQueryOptions;
    plugins?: WorkboxPlugin[];
}
