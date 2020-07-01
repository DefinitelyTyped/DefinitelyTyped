import * as React from 'react';
import Router from './Router';
import { Location } from 'history';

declare const self: self.Route;
type self = self.Route;
export default self;

declare namespace self {

    interface RouteProps extends React.Props<Route> {
        path?: Router.RoutePattern;
        component?: Router.RouteComponent;
        components?: Router.RouteComponents;
        getComponent?: (nextState: Router.RouterState, cb: (error: any, component?: Router.RouteComponent) => void) => void;
        getComponents?: (nextState: Router.RouterState, cb: (error: any, components?: Router.RouteComponents) => void) => void;
        onEnter?: Router.EnterHook;
        onLeave?: Router.LeaveHook;
        onChange?: Router.ChangeHook;
        getIndexRoute?: (location: Location, cb: (error: any, indexRoute: Router.RouteConfig) => void) => void;
        getChildRoutes?: (location: Location, cb: (error: any, childRoutes: Router.RouteConfig) => void) => void;
    }
    interface Route extends React.ComponentClass<RouteProps> {}
    interface RouteElement extends React.ReactElement<RouteProps> {}
}
