import { WorkboxPlugin } from "workbox-core/types/WorkboxPlugin";
import {
    RouteHandlerCallback,
    RouteHandlerObject,
} from "workbox-routing";

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
