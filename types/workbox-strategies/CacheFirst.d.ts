import { WorkboxPlugin } from "workbox-core/types/WorkboxPlugin";
import {
    RouteHandlerCallback,
    RouteHandlerObject,
} from "workbox-routing";

import { MakeRequestCallback } from "./types/MakeRequestCallback";

export class CacheFirst implements RouteHandlerObject {
    constructor(options?: CacheFirstOptions);
    handle: RouteHandlerCallback;
    makeRequest: MakeRequestCallback;
}

export interface CacheFirstOptions {
    cacheName?: string | undefined;
    fetchOptions?: RequestInit | undefined;
    matchOptions?: CacheQueryOptions | undefined;
    plugins?: WorkboxPlugin[] | undefined;
}
