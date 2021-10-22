import * as React from 'react';
import Router from './Router';
import * as H from 'history';

declare const self: self.IndexRoute;
type self = self.IndexRoute;
export default self;

declare namespace self {
    interface IndexRouteProps {
        children?: React.ReactNode;
        ref?: React.LegacyRef<IndexRoute> | undefined;
        component?: Router.RouteComponent | undefined;
        components?: Router.RouteComponents | undefined;
        getComponent?: ((location: H.Location, cb: (error: any, component?: Router.RouteComponent) => void) => void) | undefined;
        getComponents?: ((location: H.Location, cb: (error: any, components?: Router.RouteComponents) => void) => void) | undefined;
        onEnter?: Router.EnterHook | undefined;
        onLeave?: Router.LeaveHook | undefined;
    }
    interface IndexRoute extends React.ComponentClass<IndexRouteProps> { }
    interface IndexRouteElement extends React.ReactElement<IndexRouteProps> { }
}
