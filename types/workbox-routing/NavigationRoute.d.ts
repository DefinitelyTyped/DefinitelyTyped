import { RouteHandler } from "workbox-core/types/RouteHandler";

import { Route } from "./Route";
import { HTTPMethod } from "./types/HTTPMethod";

export class NavigationRoute extends Route {
    constructor(handler: RouteHandler, match?: NavigationRouteMatchOptions);
}

export interface NavigationRouteMatchOptions {
    whitelist?: RegExp[];
    blacklist?: RegExp[];
}

export { HTTPMethod } from "./types/HTTPMethod";
