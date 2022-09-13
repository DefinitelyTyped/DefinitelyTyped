import * as React from 'react';
import Router from './Router';

declare const Link: Link;
type Link = Link.Link;

export default Link;

declare namespace Link {
    interface LinkProps extends React.LinkHTMLAttributes<Link> {
        activeStyle?: React.CSSProperties | undefined;
        activeClassName?: string | undefined;
        onlyActiveOnIndex?: boolean | undefined;
        to: Router.RoutePattern | Router.LocationDescriptor | ((...args: any[]) => Router.LocationDescriptor);
    }

    interface Link extends React.ComponentClass<LinkProps> {}
    interface LinkElement extends React.ReactElement<LinkProps> {}
}
