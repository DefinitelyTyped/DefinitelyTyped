import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Router from './Router';

declare const Link: Link;
type Link = Link.Link;

export default Link;

declare namespace Link {
    interface LinkProps extends ReactDOM.LinkHTMLAttributes<Link> {
        activeStyle?: ReactDOM.CSSProperties;
        activeClassName?: string;
        onlyActiveOnIndex?: boolean;
        to: Router.RoutePattern | Router.LocationDescriptor | ((...args: any[]) => Router.LocationDescriptor);
    }

    interface Link extends React.ComponentClass<LinkProps> {}
    interface LinkElement extends React.ReactElement<LinkProps> {}
}
