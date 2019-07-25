// Type definitions for React Router 4.3
// Project: https://github.com/ReactTraining/react-router
// Definitions by: Huy Nguyen <https://github.com/huy-nguyen>
//                 Philip Jackson <https://github.com/p-jackson>
//                 John Reilly <https://github.com/johnnyreilly>
//                 Sebastian Silbermann <https://github.com/eps1lon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

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
    SwitchProps,
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
    innerRef?: React.Ref<HTMLAnchorElement>;
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
