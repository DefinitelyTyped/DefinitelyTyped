import * as React from 'react';
import Router from './Router';
import * as H from 'history';

declare const self: self.Redirect;
type self = typeof self;
export default self;

declare namespace self {
    interface RedirectProps {
        children?: React.ReactNode;
        ref?: React.LegacyRef<Redirect> | undefined;
        path?: Router.RoutePattern | undefined;
        from?: Router.RoutePattern | undefined; // alias for path
        to: Router.RoutePattern;
        query?: H.Query | undefined;
        state?: H.LocationState | undefined;
    }
    interface Redirect extends React.ComponentClass<RedirectProps> { }
    interface RedirectElement extends React.ReactElement<RedirectProps> { }
}
