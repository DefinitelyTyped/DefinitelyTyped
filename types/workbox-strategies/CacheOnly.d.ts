import { RouteHandlerCallback, RouteHandlerCallbackOptions, RouteHandlerObject } from "workbox-core/types/RouteHandler";
import { WorkboxPlugin } from "workbox-core/types/WorkboxPlugin";

import { MakeRequestCallback } from "./types/MakeRequestCallback";

export class CacheOnly implements RouteHandlerObject {
    constructor(options?: CacheOnlyOptions);
    handle: RouteHandlerCallback;
    makeRequest: MakeRequestCallback;
}

export interface CacheOnlyOptions {
    cacheName?: string;
    matchOptions?: CacheQueryOptions;
    plugins?: WorkboxPlugin[];
}
