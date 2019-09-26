// Type definitions for React Router 5.1
// Project: https://github.com/ReactTraining/react-router
// Definitions by: Huy Nguyen <https://github.com/huy-nguyen>
//                 Philip Jackson <https://github.com/p-jackson>
//                 John Reilly <https://github.com/johnnyreilly>
//                 Sebastian Silbermann <https://github.com/eps1lon>
//                 Daniel Nixon <https://github.com/danielnixon>
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
    RouterChildContext,
    useHistory,
    useLocation,
    useParams,
    useRouteMatch,
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

export interface LinkProps<S = H.LocationState> extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    component?: React.ComponentType<any>;
    to: H.LocationDescriptor<S> | ((location: H.Location<S>) => H.LocationDescriptor<S>);
    replace?: boolean;
    innerRef?: React.Ref<HTMLAnchorElement>;
}
export class Link<S = H.LocationState> extends React.Component<
  LinkProps<S>,
  any
> {}

export interface NavLinkProps<S = H.LocationState> extends LinkProps<S> {
  activeClassName?: string;
  activeStyle?: React.CSSProperties;
  exact?: boolean;
  strict?: boolean;
  isActive?<Params extends { [K in keyof Params]?: string }>(
    match: match<Params>,
    location: H.Location<S>,
  ): boolean;
  location?: H.Location<S>;
}
export class NavLink<S = H.LocationState> extends React.Component<
  NavLinkProps<S>,
  any
> {}
