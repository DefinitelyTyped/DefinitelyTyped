/// <reference types="falcor" />
import * as FalcorModel from "falcor";
import * as FalcorJsonGraph from "falcor-json-graph";
import DataSource = FalcorModel.DataSource;
import { Observable } from "rx";

declare class FalcorRouter extends DataSource {
    constructor(routes: Array<FalcorRouter.RouteDefinition>, options?: FalcorRouter.RouterOptions);

    /**
     * When a route misses on a call, get, or set the unhandledDataSource will
     * have a chance to fulfill that request.
     */
    routeUnhandledPathsTo(dataSource: DataSource): void;

    static createClass(routes?: Array<FalcorRouter.RouteDefinition>): typeof FalcorRouter.CreatedRouter;
}

declare namespace FalcorRouter {
    class CreatedRouter extends FalcorRouter {
        constructor(options?: RouterOptions);
    }

    interface Route {
        route: string;
    }

    type RoutePathSet = FalcorJsonGraph.PathSet;

    interface CallRoute extends Route {
        call(
            callPath: RoutePathSet,
            args: Array<any>,
        ): CallRouteResult | Promise<CallRouteResult> | Observable<CallRouteResult>;
    }

    interface GetRoute extends Route {
        get(pathset: RoutePathSet): RouteResult | Promise<RouteResult> | Observable<RouteResult>;
    }

    interface SetRoute extends Route {
        set(jsonGraph: FalcorJsonGraph.JSONGraph): RouteResult | Promise<RouteResult> | Observable<RouteResult>;
    }

    type RouteDefinition = GetRoute | SetRoute | CallRoute;
    type RouteResult = FalcorJsonGraph.PathValue | Array<FalcorJsonGraph.PathValue> | FalcorJsonGraph.JSONEnvelope<any>;
    type CallRouteResult =
        | FalcorJsonGraph.PathValue
        | FalcorJsonGraph.InvalidPath
        | Array<FalcorJsonGraph.PathValue | FalcorJsonGraph.InvalidPath>
        | FalcorJsonGraph.JSONGraphEnvelope;

    interface RouterOptions {
        debug?: boolean | undefined;
        maxPaths?: number | undefined;
        maxRefFollow?: number | undefined;
    }
}

export = FalcorRouter;
