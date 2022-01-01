// Type definitions for react-router-dom 6.2
// Project: https://github.com/ReactTraining/react-router
// Definitions by: Huy Nguyen <https://github.com/huy-nguyen>
//                 Philip Jackson <https://github.com/p-jackson>
//                 John Reilly <https://github.com/johnnyreilly>
//                 Sebastian Silbermann <https://github.com/eps1lon>
//                 Daniel Nixon <https://github.com/danielnixon>
//                 Tony Ward <https://github.com/ynotdraw>
//                 Pirasis Leelatanon <https://github.com/1pete>
//                 Takuya Noguchi <https://github.com/tnir>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import { match } from 'react-router';
import * as React from 'react';
import * as H from 'history';

export {
    IndexRouteProps,
    LayoutRouteProps,
    Location,
    MemoryRouter,
    MemoryRouterProps,
    Navigate,
    NavigateFunction,
    NavigateOptions,
    NavigateProps,
    NavigationType,
    Navigator,
    Outlet,
    OutletProps,
    Params,
    Path,
    PathMatch,
    PathRouteProps,
    Prompt,
    PromptProps,
    Redirect,
    RedirectProps,
    Route,
    RouteChildrenProps,
    RouteComponentProps,
    RouteMatch,
    RouteObject,
    RouteProps,
    Router,
    RouterChildContext,
    RouterProps,
    Routes,
    RoutesProps,
    StaticRouter,
    StaticRouterProps,
    Switch,
    SwitchProps,
    To,
    createRoutesFromChildren,
    generatePath,
    match,
    matchPath,
    matchRoutes,
    renderMatches,
    resolvePath,
    useHistory,
    useHref,
    useInRouterContext,
    useLocation,
    useMatch,
    useNavigate,
    useNavigationType,
    useOutlet,
    useOutletContext,
    useParams,
    useResolvedPath,
    useRouteMatch,
    useRoutes,
    withRouter
} from 'react-router';

export interface BrowserRouterProps {
    basename?: string | undefined;
    children?: React.ReactNode;
    getUserConfirmation?: ((message: string, callback: (ok: boolean) => void) => void) | undefined;
    forceRefresh?: boolean | undefined;
    keyLength?: number | undefined;
}
export class BrowserRouter extends React.Component<BrowserRouterProps, any> {}

export interface HashRouterProps {
    basename?: string | undefined;
    children?: React.ReactNode;
    getUserConfirmation?: ((message: string, callback: (ok: boolean) => void) => void) | undefined;
    hashType?: 'slash' | 'noslash' | 'hashbang' | undefined;
}
export class HashRouter extends React.Component<HashRouterProps, any> {}

export interface LinkProps<S = H.LocationState> extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    component?: React.ComponentType<any> | undefined;
    to: H.LocationDescriptor<S> | ((location: H.Location<S>) => H.LocationDescriptor<S>);
    replace?: boolean | undefined;
    innerRef?: React.Ref<HTMLAnchorElement> | undefined;
}
export function Link<S = H.LocationState>(
    ...params: Parameters<Link<S>>
): ReturnType<Link<S>>;

export interface Link<S = H.LocationState>
    extends React.ForwardRefExoticComponent<
        React.PropsWithoutRef<LinkProps<S>> & React.RefAttributes<HTMLAnchorElement>
    > {}

export interface NavLinkProps<S = H.LocationState> extends Omit<LinkProps<S>, "className" | "style"> {
    activeClassName?: string | undefined;
    activeStyle?: React.CSSProperties | undefined;
    exact?: boolean | undefined;
    strict?: boolean | undefined;
    isActive?<Params extends { [K in keyof Params]?: string }>(match: match<Params> | null, location: H.Location<S>): boolean;
    location?: H.Location<S> | undefined;
    className?: string | ((isActive: boolean) => string) | undefined;
    style?:
        | React.CSSProperties
        | ((isActive: boolean) => React.CSSProperties)
        | undefined;
    sensitive?: boolean | undefined;
}
export function NavLink<S = H.LocationState>(
    // TODO: Define this as ...params: Parameters<NavLink<S>> when only TypeScript >= 3.1 support is needed.
    props: React.PropsWithoutRef<NavLinkProps<S>> & React.RefAttributes<HTMLAnchorElement>,
): ReturnType<NavLink<S>>;
export interface NavLink<S = H.LocationState>
    extends React.ForwardRefExoticComponent<
        React.PropsWithoutRef<NavLinkProps<S>> & React.RefAttributes<HTMLAnchorElement>
    > {}
