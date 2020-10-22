import { WorkboxPlugin } from "workbox-core/types/WorkboxPlugin";
import {
    RouteHandlerCallback,
    RouteHandlerObject,
} from "workbox-routing";

import { MakeRequestCallback } from "./types/MakeRequestCallback";

export class NetworkFirst implements RouteHandlerObject {
    constructor(options?: NetworkFirstOptions);
    handle: RouteHandlerCallback;
    makeRequest: MakeRequestCallback;
}

export interface NetworkFirstOptions {
    cacheName?: string;
    fetchOptions?: RequestInit;
    matchOptions?: CacheQueryOptions;
    networkTimeoutSeconds?: number;
    plugins?: WorkboxPlugin[];
}
