import { Route } from "./Route";

import { HTTPMethod } from "./types/HTTPMethod";
import { RouteHandler } from "./types/RouteHandler";

export class NavigationRoute extends Route<boolean> {
    constructor(handler: RouteHandler, options?: NavigationRouteOptions);
}

export interface NavigationRouteOptions {
    whitelist?: RegExp[];
    blacklist?: RegExp[];
}
