import { RouteHandler } from "workbox-core/types/RouteHandler";

import { Route } from "./Route";
import { HTTPMethod } from "./types/HTTPMethod";

export class Router {
    constructor();
    readonly routes: Map<HTTPMethod, Route[]>;
    addCacheListener(): void;
    addFetchListener(): void;
    findMatchingRoute<R = void>(options: FindMatchingRoute): Promise<R>;
    handleRequest(options: HandleRequestOptions): Promise<Response | undefined>;
    registerRoute(route: Route): void;
    setCatchHandler(handler: RouteHandler): void;
    setDefaultHandler(handler: RouteHandler): void;
    unregisterRoute(route: Route): void;
}

export interface FindMatchingRoute extends HandleRequestOptions {
    url: URL;
}

export interface HandleRequestOptions {
    request: Request;
    event?: FetchEvent;
}
