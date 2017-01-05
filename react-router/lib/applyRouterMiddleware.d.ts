import * as React from 'react';
import Router from './Router';
import RouterContext from './RouterContext';

export interface Middleware {
    renderRouterContext?: (previous: RouterContext, props: React.Props<{}>) => RouterContext;
    renderRouteComponent?: (previous: Router.RouteComponent, props: React.Props<{}>) => Router.RouteComponent;
}
export default function applyRouterMiddleware(...middlewares: Middleware[]): (renderProps: React.Props<{}>) => RouterContext;
