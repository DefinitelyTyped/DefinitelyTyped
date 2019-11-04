import { RouteHandler } from "workbox-core/types/RouteHandler";
import { RouteMatchCallback } from "workbox-core/types/RouteMatchCallback";

import { HTTPMethod } from "./types/HTTPMethod";

export class Route {
    constructor(match: RouteMatchCallback, handler: RouteHandler, method?: HTTPMethod);
}

export { HTTPMethod } from "./types/HTTPMethod";
