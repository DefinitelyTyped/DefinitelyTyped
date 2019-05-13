// Type definitions for wouter 1.2
// Project: https://github.com/molefrog/wouter#readme
// Definitions by: Tolkunov Alexander <https://github.com/StrayFromThePath>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export type Params = { [paramName: string]: string } | null;
export type Path = string;
export type PushCallback = (to: string) => void;
export type Match = [boolean, Params];

export interface RouteProps {
    children?: ((params: Params) => React.ReactNode) | React.ReactNode;
    path: Path;
    component?: React.ComponentType<any>;
    match?: boolean;
}
export const Route: React.FunctionComponent<RouteProps>;

export interface LinkProps {
    to?: string;
    href?: string;
    children: React.ReactElement;
    onClick?: () => void;
}
export const Link: React.FunctionComponent<LinkProps>;

export interface RedirectProps {
    to?: string;
    href?: string;
}
export const Redirect: React.FunctionComponent<RedirectProps>;

export interface SwitchProps {
    location?: string;
    children: Array<React.ReactElement<RouteProps>>;
}
export const Switch: React.FunctionComponent<SwitchProps>;

export interface History {
    path: () => Path;
    push: PushCallback;
    subscribe: (cb: PushCallback) => () => void;
}

export interface RouterProps {
    history: History;
    matcher: (pattern: string, path: Path) => Match;
}
export const Router: React.FunctionComponent<Partial<RouterProps>>;

export function useRouter(): RouterProps;

export function useRoute(pattern: string): Match;

export function useLocation(): [Path, PushCallback];
