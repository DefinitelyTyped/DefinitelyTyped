import * as React from 'react';

export interface Middleware {
    renderRouterContext: (previous: React.Props<{}>[], props: React.Props<{}>) => React.Props<{}>[];
    renderRouteComponent: (previous: React.Props<{}>[], props: React.Props<{}>) => React.Props<{}>[];
}
export default function applyRouterMiddleware(...middlewares: Middleware[]): (renderProps: React.Props<{}>) => React.Props<{}>[];
