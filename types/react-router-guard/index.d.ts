// Type definitions for react-router-guard 2.3
// Project: https://github.com/laptransang/react-router-guard#readme
// Definitions by: TSL <https://github.com/laptransang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
    canActivate?: Array<() => Promise<any>>;
    redirect?: string;
    exact?: boolean;
    routes?: RouterGuardConfigProps[];
}

export interface RouterGuardProps {
    config: RouterGuardConfigProps[];
    history?: H.History;
    loading?: boolean | React.ReactElement;
}

export class RouterGuard<T> extends React.Component<RouterGuardProps, any> {}
