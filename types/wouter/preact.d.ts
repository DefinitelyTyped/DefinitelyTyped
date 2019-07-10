import {
    ComponentChildren,
    ComponentType,
    FunctionComponent,
    VNode
} from "preact";

export type Params = { [paramName: string]: string } | null;
export type Path = string;
export type PushCallback = (to: string) => void;
export type LocationTuple = [Path, PushCallback];
export type Match = [boolean, Params];
export type MatcherFn = (pattern: string, path: Path) => Match;

export interface RouteProps {
    children?: ((params: Params) => ComponentChildren) | ComponentChildren;
    path: Path;
    component?: ComponentType<any>;
    match?: boolean;
}
export const Route: FunctionComponent<RouteProps>;

export interface LinkProps {
    to?: string;
    href?: string;
    children: ComponentChildren;
    onClick?: () => void;
}
export const Link: FunctionComponent<LinkProps>;

export interface RedirectProps {
    to?: string;
    href?: string;
}
export const Redirect: FunctionComponent<RedirectProps>;

export interface SwitchProps {
    location?: string;
    children: Array<VNode<RouteProps>>;
}
export const Switch: FunctionComponent<SwitchProps>;

export interface RouterProps {
    hook: () => LocationTuple;
    matcher: MatcherFn;
}
export const Router: FunctionComponent<
    Partial<RouterProps> & {
        children: ComponentChildren;
    }
>;

export function useRouter(): RouterProps;

export function useRoute(pattern: string): Match;

export function useLocation(): LocationTuple;
