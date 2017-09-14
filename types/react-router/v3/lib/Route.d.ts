import { ComponentClass, ClassAttributes } from "react";
import { LocationState } from "history";
import {
    EnterHook,
    ChangeHook,
    LeaveHook,
    RouteComponent,
    RouteComponents,
    RoutePattern,
    RouterState
} from "react-router";
import { IndexRouteProps } from "react-router/lib/IndexRoute";

export interface RouteProps extends IndexRouteProps {
    path?: RoutePattern;
}

type Route = ComponentClass<RouteProps>;
declare const Route: Route;

export default Route;

type RouteCallback = (err: any, route: PlainRoute) => void;
type RoutesCallback = (err: any, routesArray: PlainRoute[]) => void;

export interface PlainRoute extends RouteProps {
    childRoutes?: PlainRoute[];
    getChildRoutes?(partialNextState: LocationState, callback: RoutesCallback): void;
    indexRoute?: PlainRoute;
    getIndexRoute?(partialNextState: LocationState, callback: RouteCallback): void;
}
