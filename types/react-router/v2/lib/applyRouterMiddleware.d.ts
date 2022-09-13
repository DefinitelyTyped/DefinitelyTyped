import * as React from 'react';
import Router from './Router';
import RouterContext from './RouterContext';

export interface Middleware {
    renderRouterContext?: ((previous: RouterContext, props: { children?: React.ReactNode; ref?: React.LegacyRef<{}> | undefined; }) => RouterContext) | undefined;
    renderRouteComponent?: ((previous: Router.RouteComponent, props: { children?: React.ReactNode; ref?: React.LegacyRef<{}> | undefined; }) => Router.RouteComponent) | undefined;
}
export default function applyRouterMiddleware(...middlewares: Middleware[]): (renderProps: { children?: React.ReactNode; ref?: React.LegacyRef<{}> | undefined; }) => RouterContext;
