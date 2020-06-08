import Router from './Router';
import * as React from 'react';
import * as H from 'history';

declare const self: self.IndexRedirect;
type self = self.IndexRedirect;
export default self;

declare namespace self {
    interface IndexRedirectProps extends React.Props<self> {
        to: Router.RoutePattern;
        query?: H.Query;
        state?: H.LocationState;
    }
    interface IndexRedirectElement extends React.ReactElement<IndexRedirectProps> { }
    interface IndexRedirect extends React.ComponentClass<self.IndexRedirectProps> { }
}
