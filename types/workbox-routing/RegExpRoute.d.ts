import { Route } from "./Route";

import { HTTPMethod } from "./types/HTTPMethod";
import { RouteHandler } from "./types/RouteHandler";

export class RegExpRoute extends Route<string[]> {
    constructor(regExp: RegExp, handler: RouteHandler, method?: HTTPMethod);
}
