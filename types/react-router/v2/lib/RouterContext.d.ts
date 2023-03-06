import * as React from 'react';
import * as H from 'history';
import Router from './Router';

declare const self: self.RouterContext;
type self = self.RouterContext;
export default self;

declare namespace self {
    interface RouterContextProps {
        children?: React.ReactNode;
        ref?: React.LegacyRef<RouterContext> | undefined;
        history?: H.History | undefined;
        router: Router;
        createElement: (component: Router.RouteComponent, props: Object) => any;
        location: H.Location;
        routes: Router.RouteConfig;
        params: Router.Params;
        components?: Router.RouteComponent[] | undefined;
    }
    interface RouterContext extends React.ComponentClass<RouterContextProps> {}
    interface RouterContextElement extends React.ReactElement<RouterContextProps> {
        history?: H.History | undefined;
        location: H.Location;
        router?: Router | undefined;
    }
}
