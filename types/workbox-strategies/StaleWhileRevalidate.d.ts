import { WorkboxPlugin } from "workbox-core/types/WorkboxPlugin";
import {
    RouteHandlerCallback,
    RouteHandlerObject,
} from "workbox-routing";

import { MakeRequestCallback } from "./types/MakeRequestCallback";

export class StaleWhileRevalidate implements RouteHandlerObject {
    constructor(options?: StaleWhileRevalidateOptions);
    handle: RouteHandlerCallback;
    makeRequest: MakeRequestCallback;
}

export interface StaleWhileRevalidateOptions {
    cacheName?: string;
    fetchOptions?: RequestInit;
    matchOptions?: CacheQueryOptions;
    plugins?: WorkboxPlugin[];
}
