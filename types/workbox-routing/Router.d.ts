import { Route } from "./Route";

import { HTTPMethod } from "./types/HTTPMethod";
import { RouteHandler } from "./types/RouteHandler";

export class Router {
    constructor();
    readonly routes: Map<HTTPMethod, Route[]>;
    addCacheListener(): void;
    addFetchListener(): void;
    findMatchingRoute(options: Router.FindMatchingRouteOptions): {} | Router.FindMatchingRouteReturn;
    handleRequest(options: Router.HandleRequestOptions): Promise<Response | undefined>;
    registerRoute(route: Route): void;
    setCatchHandler(handler: RouteHandler): void;
    setDefaultHandler(handler: RouteHandler): void;
    unregisterRoute(route: Route): void;
}

export namespace Router {
    interface FindMatchingRouteOptions extends HandleRequestOptions {
        url: URL;
    }

    interface FindMatchingRouteReturn<MatchReturn = any> {
        params: any; // Exclude<MatchReturn, Falsy> | undefined; <-- TypeScript 2.8
        route: Route<MatchReturn>;
    }

    interface HandleRequestOptions {
        request: Request;
        event?: FetchEvent;
    }
}

export {};

// type Exclude<T, U> = T extends U ? never : T;

// type Falsy = false | 0 | "" | null | undefined ;
