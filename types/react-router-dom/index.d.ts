// Type definitions for React Router 4.3
// Project: https://github.com/ReactTraining/react-router
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
//                 Huy Nguyen <https://github.com/huy-nguyen>
//                 Philip Jackson <https://github.com/p-jackson>
//                 John Reilly <https://github.com/johnnyreilly>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { match } from "react-router";
import * as React from 'react';
import * as H from 'history';

export {
    generatePath,
    Prompt,
    MemoryRouter,
    RedirectProps,
    Redirect,
    RouteComponentProps,
    RouteProps,
    Route,
    Router,
    StaticRouter,
    Switch,
    match,
    matchPath,
    withRouter,
    RouterChildContext
} from 'react-router';

// only one child is allowed (and required), checked with React.Children.only
export interface BrowserRouterProps extends React.Props<React.ReactChild> {
    basename?: string;
    getUserConfirmation?: ((message: string, callback: (ok: boolean) => void) => void);
    forceRefresh?: boolean;
    keyLength?: number;
}
export class BrowserRouter extends React.Component<BrowserRouterProps, any> {}

export interface HashRouterProps extends React.Props<React.ReactChild> {
    basename?: string;
    getUserConfirmation?: ((message: string, callback: (ok: boolean) => void) => void);
    hashType?: 'slash' | 'noslash' | 'hashbang';
}
export class HashRouter extends React.Component<HashRouterProps, any> {}

// Technically you're allowed to specify href, but only if to is not specified.
// to is already required here so better to not mess with it, just use <a> instead.
export interface LinkProps extends Pick<React.ComponentPropsWithoutRef<'a'>, Exclude<keyof React.ComponentPropsWithoutRef<'a'>, 'href'>> {
    to: H.LocationDescriptor;
    replace?: boolean;
    // only function refs work, not object refs (causes PropTypes warning)
    // PropTypes incorrectly accept string but that'd create a ref in the wrong owner
    innerRef?: (node: HTMLAnchorElement | null) => void;
}
export class Link extends React.Component<LinkProps, any> {}

export interface NavLinkProps extends LinkProps {
    activeClassName?: string;
    activeStyle?: React.CSSProperties;
    exact?: boolean;
    strict?: boolean;
    isActive?<Params extends { [K in keyof Params]?: string }>(match: match<Params>, location: H.Location): boolean;
    location?: H.Location;
}
export class NavLink extends React.Component<NavLinkProps, any> {}
