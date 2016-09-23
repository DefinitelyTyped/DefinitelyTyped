import * as React from 'react';
import Router from './Router';
import * as H from 'history';

declare const self: self.Redirect;
type self = typeof self;
export default self;

declare namespace self {
    interface RedirectProps extends React.Props<Redirect> {
        path?: Router.RoutePattern;
        from?: Router.RoutePattern; // alias for path
        to: Router.RoutePattern;
        query?: H.Query;
        state?: H.LocationState;
    }
    interface Redirect extends React.ComponentClass<RedirectProps> { }
    interface RedirectElement extends React.ReactElement<RedirectProps> { }
}
