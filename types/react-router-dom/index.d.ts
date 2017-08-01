// Type definitions for React Router 4.0
// Project: https://github.com/ReactTraining/react-router
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
//                 Huy Nguyen <https://github.com/huy-nguyen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare module 'react-router-dom' {
  import {
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
  import * as React from 'react';
  import * as H from 'history';

  interface BrowserRouterProps {
    basename?: string;
    getUserConfirmation?(): void;
    forceRefresh?: boolean;
    keyLength?: number;
  }
  class BrowserRouter extends React.Component<BrowserRouterProps> {}

  interface HashRouterProps {
    basename?: string;
    getUserConfirmation?(): void;
    hashType?: 'slash' | 'noslash' | 'hashbang';
  }
  class HashRouter extends React.Component<HashRouterProps> {}

  interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    to: H.LocationDescriptor;
    replace?: boolean;
  }
  class Link extends React.Component<LinkProps> {}

  interface NavLinkProps extends LinkProps {
    activeClassName?: string;
    activeStyle?: React.CSSProperties;
    exact?: boolean;
    strict?: boolean;
    isActive?<P>(match: match<P>, location: H.Location): boolean;
  }
  class NavLink extends React.Component<NavLinkProps> {}

  export {
    BrowserRouter,
    BrowserRouterProps, // TypeScript specific, not from React Router itself
    HashRouter,
    HashRouterProps, // TypeScript specific, not from React Router itself
    LinkProps, // TypeScript specific, not from React Router itself
    NavLinkProps, // TypeScript specific, not from React Router itself
    Link,
    NavLink,
    Prompt,
    MemoryRouter,
    Redirect,
    RouteComponentProps, // TypeScript specific, not from React Router itself
    RouteProps, // TypeScript specific, not from React Router itself
    Route,
    Router,
    StaticRouter,
    Switch,
    match, // TypeScript specific, not from React Router itself
    matchPath,
    withRouter,
    RouterChildContext
  };
}
