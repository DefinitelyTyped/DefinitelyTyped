import * as React from 'react';
import Router from './Router';
import * as H from 'history';

declare const self: self.IndexRoute;
type self = self.IndexRoute;
export default self;

declare namespace self {
    interface IndexRouteProps extends React.Props<IndexRoute> {
        component?: Router.RouteComponent;
        components?: Router.RouteComponents;
        getComponent?: (location: H.Location, cb: (error: any, component?: Router.RouteComponent) => void) => void;
        getComponents?: (location: H.Location, cb: (error: any, components?: Router.RouteComponents) => void) => void;
        onEnter?: Router.EnterHook;
        onLeave?: Router.LeaveHook;
    }
    interface IndexRoute extends React.ComponentClass<IndexRouteProps> { }
    interface IndexRouteElement extends React.ReactElement<IndexRouteProps> { }
}