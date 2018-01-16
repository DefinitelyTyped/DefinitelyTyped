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

export interface RouteProps<Props> extends IndexRouteProps<Props> {
    path?: RoutePattern;
}

type Route = ComponentClass<RouteProps<any>>;
declare const Route: Route;

export default Route;

type RouteCallback = (err: any, route: PlainRoute<any>) => void;
type RoutesCallback = (err: any, routesArray: PlainRoute<any>[]) => void;

export interface PlainRoute<Props> extends RouteProps<Props> {
    childRoutes?: PlainRoute<any>[];
    getChildRoutes?(partialNextState: LocationState, callback: RoutesCallback): void;
    indexRoute?: PlainRoute<any>;
    getIndexRoute?(partialNextState: LocationState, callback: RouteCallback): void;
}
