import { WorkboxPlugin } from "workbox-core/types/WorkboxPlugin";
import {
    RouteHandlerCallback,
    RouteHandlerObject,
} from "workbox-routing";

import { MakeRequestCallback } from "./types/MakeRequestCallback";

export class NetworkOnly implements RouteHandlerObject {
    constructor(options?: NetworkOnlyOptions);
    handle: RouteHandlerCallback;
    makeRequest: MakeRequestCallback;
}

export interface NetworkOnlyOptions {
    cacheName?: string | undefined;
    fetchOptions?: RequestInit | undefined;
    plugins?: WorkboxPlugin[] | undefined;
}
