import { RouteHandlerCallback, RouteHandlerCallbackOptions, RouteHandlerObject } from "workbox-core/types/RouteHandler";
import { WorkboxPlugin } from "workbox-core/types/WorkboxPlugin";

import { MakeRequestCallback } from "./types/MakeRequestCallback";

export interface NetworkFirstOptions {
    cacheName?: string;
    fetchOptions?: RequestInit;
    matchOptions?: CacheQueryOptions;
    networkTimeoutSeconds?: number;
    plugins?: WorkboxPlugin[];
}

export class NetworkFirst implements RouteHandlerObject {
    constructor(options?: NetworkFirstOptions);
    handle: RouteHandlerCallback;
    makeRequest: MakeRequestCallback;
}
