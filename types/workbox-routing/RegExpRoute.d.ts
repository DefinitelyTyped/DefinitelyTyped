import { RouteHandler } from "workbox-core/types/RouteHandler";

import { Route } from "./Route";
import { HTTPMethod } from "./types/HTTPMethod";

export class RegExpRoute extends Route {
    constructor(regExp: RegExp, handler: RouteHandler, method?: HTTPMethod);
}

export { HTTPMethod } from "./types/HTTPMethod";
