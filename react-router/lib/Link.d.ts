import * as React from 'react';
import Router from './Router';
import * as H from 'history';

declare const Link: Link;
type Link = Link.Link;

export default Link;

declare namespace Link {
    interface LinkProps extends React.HTMLAttributes<Link>, React.Props<Link> {
        activeStyle?: React.CSSProperties;
        activeClassName?: string;
        onlyActiveOnIndex?: boolean;
        to: Router.RoutePattern | H.LocationDescriptor;
        query?: H.Query;
        state?: H.LocationState;
    }

    interface Link extends React.ComponentClass<LinkProps> {}
    interface LinkElement extends React.ReactElement<LinkProps> {}
}
