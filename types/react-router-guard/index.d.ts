// Type definitions for react-router-guard 2.3
// Project: https://github.com/laptransang/react-router-guard#readme
// Definitions by: TSL <https://github.com/laptransang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import * as React from 'react';
import * as H from 'history';

export const history: H.History;

export {
    Loadable
} from 'react-loadable';

export {
    BrowserRouter,
    Link,
    NavLink,
    Route,
    Router,
    Switch,
} from 'react-router-dom';

export {
    Redirect,
} from 'react-router';

export function lazy<T extends React.ComponentType<any>>(
    factory: () => Promise<{ default: T }>
): React.LazyExoticComponent<T>;

export interface RouterGuardConfigProps {
    path: string;
    component: React.LazyExoticComponent<any>;
    canActivate?: Array<() => Promise<any>> | undefined;
    redirect?: string | undefined;
    exact?: boolean | undefined;
    routes?: RouterGuardConfigProps[] | undefined;
}

export interface RouterGuardProps {
    config: RouterGuardConfigProps[];
    history?: H.History | undefined;
    loading?: boolean | React.ReactElement | undefined;
}

export class RouterGuard<T> extends React.Component<RouterGuardProps, any> {}
