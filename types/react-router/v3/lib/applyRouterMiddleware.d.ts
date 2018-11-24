import React = require("react");
import { RouteComponent } from "react-router";
import RouterContext from "react-router/lib/RouterContext";

export type RouterContextElement = React.TypedReactElement<RouterContext>;
export type RouteComponentElement = React.TypedReactElement<RouteComponent>;

export interface Middleware {
    renderRouterContext?(previous: RouterContextElement, props: any): RouterContextElement;
    renderRouteComponent?(previous: RouteComponentElement, props: any): RouteComponentElement;
}

export default function applyRouterMiddleware(...middlewares: Middleware[]): (renderProps: any) => RouterContextElement;
