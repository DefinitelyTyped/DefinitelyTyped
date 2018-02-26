// Type definitions for React Router 4.2
// Project: https://github.com/ReactTraining/react-router
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
//                 Huy Nguyen <https://github.com/huy-nguyen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import { match } from "react-router";
import * as React from 'react';
import * as H from 'history';

export {
    Prompt,
    MemoryRouter,
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

export interface BrowserRouterProps {
    basename?: string;
    getUserConfirmation?: ((message: string, callback: (ok: boolean) => void) => void);
    forceRefresh?: boolean;
    keyLength?: number;
}
export class BrowserRouter extends React.Component<BrowserRouterProps, any> {}

export interface HashRouterProps {
    basename?: string;
    getUserConfirmation?: ((message: string, callback: (ok: boolean) => void) => void);
    hashType?: 'slash' | 'noslash' | 'hashbang';
}
export class HashRouter extends React.Component<HashRouterProps, any> {}

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    to: H.LocationDescriptor;
    replace?: boolean;
}
export class Link extends React.Component<LinkProps, any> {}

export interface NavLinkProps extends LinkProps {
    activeClassName?: string;
    activeStyle?: React.CSSProperties;
    exact?: boolean;
    strict?: boolean;
    isActive?<P>(match: match<P>, location: H.Location): boolean;
    location?: H.Location;
}
export class NavLink extends React.Component<NavLinkProps, any> {}
