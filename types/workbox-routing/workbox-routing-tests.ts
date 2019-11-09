/* tslint:disable:comment-format no-namespace */

"use strict";

import {
    HTTPMethod,
    NavigationRoute,
    NavigationRouteOptions,
    RegExpRoute,
    RegisterNavigationRouteOptions,
    RegisterRouteCapture,
    Route,
    RouteHandler,
    RouteMatchCallback,
    Router,
    registerNavigationRoute,
    registerRoute,
    setCatchHandler,
    setDefaultHandler
} from "workbox-routing";

declare const findMatchingRouteOptions: Router.FindMatchingRouteOptions;
declare const handleRequestOptions: Router.HandleRequestOptions;
declare const httpMethod: HTTPMethod;
declare const routeHandler: RouteHandler;
declare const routeMatchCallback: RouteMatchCallback;

//==============================================================================
// WorkboxRouting.NavigationRoute
//==============================================================================

export namespace NavigationRouteTest {
    declare const handler: RouteHandler;
    declare const options: NavigationRouteOptions;

    // $ExpectType NavigationRoute
    new NavigationRoute(handler);
    // $ExpectType NavigationRoute
    new NavigationRoute(handler, options);
}

//==============================================================================
// WorkboxRouting.RegExpRoute
//==============================================================================

export namespace RegExpRouteTest {
    declare const handler: RouteHandler;
    declare const method: HTTPMethod;
    declare const regExp: RegExp;

    // $ExpectType RegExpRoute
    new RegExpRoute(regExp, handler);
    // $ExpectType RegExpRoute
    new RegExpRoute(regExp, handler, method);
}

//==============================================================================
// WorkboxRouting.Route
//==============================================================================

export namespace RouteTest {
    declare const handler: RouteHandler;
    declare const match: RouteMatchCallback;
    declare const method: HTTPMethod;

    // $ExpectType Route<any>
    new Route(match, handler);
    // $ExpectType Route<any>
    new Route(match, handler, method);
}

//==============================================================================
// WorkboxRouting.Router
//==============================================================================

export namespace RouterTest {
    // $ExpectType Router
    new Router();

    declare const router: Router;
    declare const findMatchingRouteOptions: Router.FindMatchingRouteOptions;
    declare const handleRequestOptions: Router.HandleRequestOptions;
    declare const route: Route;

    // $ExpectType Map<HTTPMethod, Route<any>[]>
    router.routes;

    // $ExpectType void
    router.addCacheListener();

    // $ExpectType void
    router.addFetchListener();

    // $ExpectType {} | FindMatchingRouteReturn<any>
    router.findMatchingRoute(findMatchingRouteOptions);

    // $ExpectType Promise<Response | undefined>
    router.handleRequest(handleRequestOptions);

    // $ExpectType void
    router.registerRoute(route);

    // $ExpectType void
    router.setCatchHandler(routeHandler);

    // $ExpectType void
    router.setDefaultHandler(routeHandler);

    // $ExpectType void
    router.unregisterRoute(route);
}

//==============================================================================
// WorkboxRouting.registerRoute
//==============================================================================

export namespace RegisterNavigationRouteTest {
    declare const url: string;
    declare const options: RegisterNavigationRouteOptions;

    // $ExpectType NavigationRoute
    registerNavigationRoute(url);
    // $ExpectType NavigationRoute
    registerNavigationRoute(url, options);
}

//==============================================================================
// WorkboxRouting.registerRoute
//==============================================================================

export namespace RegisterRouteTest {
    declare const capture: RegisterRouteCapture;
    declare const handler: RouteHandler;
    declare const method: HTTPMethod;

    // $ExpectType Route<any>
    registerRoute(capture);
    // $ExpectType Route<any>
    registerRoute(capture, handler);
    // $ExpectType Route<any>
    registerRoute(capture, handler, method);
}

//==============================================================================
// WorkboxRouting.setCatchHandler
//==============================================================================

export namespace SetCatchHandler {
    declare const handler: RouteHandler;

    // $ExpectType void
    setCatchHandler(handler);
}

//==============================================================================
// WorkboxRouting.setDefaultHandler
//==============================================================================

export namespace SetDefaultHandler {
    declare const handler: RouteHandler;

    // $ExpectType void
    setDefaultHandler(handler);
}
