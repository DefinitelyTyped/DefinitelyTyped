import * as H from "history";
import * as React from "react";
import { match as MatchObject, RouteComponentProps, RouteProps } from "react-router-dom";

export interface ScrollIntoViewProps {
    alignToTop?: boolean | undefined;
    children?: React.ReactNode;
    id: string;
}

export class ScrollIntoView extends React.Component<ScrollIntoViewProps> {}

export type PropIdCallback = () => string;

export interface WithScrollOptions {
    propId?: PropIdCallback | undefined;
    alignToTop?: boolean | undefined;
}

export type ComponentConstructor<Props> = React.ComponentType<Props>;

export function withScroll(
    component: ComponentConstructor<RouteComponentProps<any> | {}>,
    options?: WithScrollOptions,
): ComponentConstructor<RouteComponentProps<any> | {}>;

export type RouteConfiguration = RouteProps & { inject?: { [key: string]: any } | undefined };

export interface SwitchProps {
    routes: RouteConfiguration[];
    location: H.LocationDescriptorObject & { pathname: H.Pathname };
}

export class ConfigSwitch extends React.Component<SwitchProps> {}

export type OnUpdateCall = (location: H.Location) => void;

export interface OnUpdateProps {
    call: OnUpdateCall;
    immediate?: boolean | undefined;
}

export class OnUpdate extends React.Component<OnUpdateProps> {}

export type IsActiveCallback = () => boolean;

export interface WhenActiveOptions {
    exact?: boolean | undefined;
    strict?: boolean | undefined;
    pathProp?: string | undefined;
    className?: string | undefined;
    style?: React.CSSProperties | undefined;
    isActive?: IsActiveCallback | undefined;
}

export type WhenActiveReturnType<Props> = (component: ComponentConstructor<Props>) => ComponentConstructor<Props>;

export function whenActive<Props>(options?: WhenActiveOptions): WhenActiveReturnType<Props>;

export interface StatusProps {
    code: string;
}

export class Status extends React.Component<StatusProps> {}

export type GetKeyFunction<Params extends { [K in keyof Params]?: string } = {}> = (
    match: MatchObject<Params>,
    route: RouteConfiguration,
    location: H.Location,
) => string;

export interface WrapSwitchProps<Params extends { [K in keyof Params]?: string } = {}> extends SwitchProps {
    getKey?: GetKeyFunction<Params> | undefined;
}

export function wrapSwitch<WrapperProps, Params extends { [K in keyof Params]?: string } = {}>(
    Wrapper: ComponentConstructor<WrapperProps>,
): ComponentConstructor<WrapSwitchProps<Params> & WrapperProps>;
