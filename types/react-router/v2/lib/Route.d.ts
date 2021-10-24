import * as React from 'react';
import Router from './Router';
import { Location } from 'history';

declare const self: self.Route;
type self = self.Route;
export default self;

declare namespace self {

    interface RouteProps {
        children?: React.ReactNode;
        ref?: React.LegacyRef<Route> | undefined;
        path?: Router.RoutePattern | undefined;
        component?: Router.RouteComponent | undefined;
        components?: Router.RouteComponents | undefined;
        getComponent?: ((nextState: Router.RouterState, cb: (error: any, component?: Router.RouteComponent) => void) => void) | undefined;
        getComponents?: ((nextState: Router.RouterState, cb: (error: any, components?: Router.RouteComponents) => void) => void) | undefined;
        onEnter?: Router.EnterHook | undefined;
        onLeave?: Router.LeaveHook | undefined;
        onChange?: Router.ChangeHook | undefined;
        getIndexRoute?: ((location: Location, cb: (error: any, indexRoute: Router.RouteConfig) => void) => void) | undefined;
        getChildRoutes?: ((location: Location, cb: (error: any, childRoutes: Router.RouteConfig) => void) => void) | undefined;
    }
    interface Route extends React.ComponentClass<RouteProps> {}
    interface RouteElement extends React.ReactElement<RouteProps> {}
}
