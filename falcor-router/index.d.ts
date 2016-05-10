// Type definitions for falcor-router 0.4.0
// Project: https://github.com/Netflix/falcor-router
// Definitions by: Quramy <https://github.com/Quramy/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../falcor/falcor.d.ts" />
declare namespace FalcorRouter {

    import DataSource = FalcorModel.DataSource;

    class Router extends DataSource {

        constructor(routes: Array<RouteDefinition>, options?: RouterOptions);

        /**
         * When a route misses on a call, get, or set the unhandledDataSource will
         * have a chance to fulfill that request.
         **/
        routeUnhandledPathsTo(dataSource: DataSource): void;

        static createClass(routes?: Array<RouteDefinition>): typeof CreatedRouter;
    }

    class CreatedRouter extends Router {
        constructor(options?: RouterOptions);
    }

    interface Route {
        route: string;
    }

    type RoutePathSet = FalcorJsonGraph.PathSet;

    interface CallRoute extends Route {
        call(callPath: RoutePathSet, args: Array<any>): RouteResult | Promise<RouteResult>;
    }

    interface GetRoute extends Route {
        get(pathset: RoutePathSet): RouteResult | Promise<RouteResult>;
    }

    interface SetRoute extends Route {
        set(jsonGraph: FalcorJsonGraph.JSONGraph): RouteResult | Promise<RouteResult>;
    }

    type RouteDefinition = GetRoute | SetRoute | CallRoute;
    type RouteResult = FalcorJsonGraph.PathValue | Array<FalcorJsonGraph.PathValue> | FalcorJsonGraph.JSONEnvelope<any>;

    interface RouterOptions {
        debug?: boolean;
        maxPaths?: number;
        maxRefFollow?: number;
    }
}

declare module 'falcor-router' {
    export = FalcorRouter.Router;
}

