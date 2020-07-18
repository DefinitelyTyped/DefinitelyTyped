import { HTTPMethod } from "./types/HTTPMethod";
import { RouteHandler } from "./types/RouteHandler";
import { RouteMatchCallback } from "./types/RouteMatchCallback";

export class Route<MatchReturn = any> {
    readonly handler: RouteHandler;
    readonly match: RouteMatchCallback<MatchReturn>;
    readonly method: HTTPMethod;
    constructor(match: RouteMatchCallback<MatchReturn>, handler: RouteHandler, method?: HTTPMethod);
}
