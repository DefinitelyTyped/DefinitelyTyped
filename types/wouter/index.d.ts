// Type definitions for wouter 2.0
// Project: https://github.com/molefrog/wouter#readme
// Definitions by: Tolkunov Alexander <https://github.com/StrayFromThePath>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import {
    FunctionComponent,
    ComponentType,
    ReactElement,
    ReactNode
} from "react";

export type Params = { [paramName: string]: string } | null;
export type Path = string;
export type PushCallback = (to: string) => void;
export type LocationTuple = [Path, PushCallback];
export type Match = [boolean, Params];
export type MatcherFn = (pattern: string, path: Path) => Match;

export interface RouteProps {
    children?: ((params: Params) => ReactNode) | ReactNode;
    path: Path;
    component?: ComponentType<any>;
    match?: boolean;
}
export const Route: FunctionComponent<RouteProps>;

export interface LinkProps {
    to?: string;
    href?: string;
    children: ReactElement;
    onClick?: () => void;
}
export const Link: FunctionComponent<LinkProps>;

export interface RedirectProps {
    to?: string;
    href?: string;
}
export const Redirect: React.FunctionComponent<RedirectProps>;

export interface SwitchProps {
    location?: string;
    children: Array<ReactElement<RouteProps>>;
}
export const Switch: FunctionComponent<SwitchProps>;

export interface RouterProps {
    hook: () => LocationTuple;
    matcher: MatcherFn;
}
export const Router: FunctionComponent<
    Partial<RouterProps> & {
        children: ReactElement | ReactElement[];
    }
>;

export function useRouter(): RouterProps;

export function useRoute(pattern: string): Match;

export function useLocation(): LocationTuple;
