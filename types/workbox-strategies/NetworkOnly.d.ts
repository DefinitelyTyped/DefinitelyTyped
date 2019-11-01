import { RouteHandlerCallback, RouteHandlerCallbackOptions, RouteHandlerObject } from "workbox-core/types/RouteHandler";
import { WorkboxPlugin } from "workbox-core/types/WorkboxPlugin";

import { MakeRequestCallback } from "./types/MakeRequestCallback";

export interface NetworkOnlyOptions {
    cacheName?: string;
    fetchOptions?: RequestInit;
    plugins?: WorkboxPlugin[];
}

export class NetworkOnly implements RouteHandlerObject {
    constructor(options?: NetworkOnlyOptions);
    handle: RouteHandlerCallback;
    makeRequest: MakeRequestCallback;
}
