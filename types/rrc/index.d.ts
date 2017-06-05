// Type definitions for rrc 0.10
// Project: https://github.com/pshrmn/rrc#readme
// Definitions by: Deividas Bakanas <https://github.com/DeividasBakanas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from "react";
import * as H from "history";
import { RouteProps, RouteComponentProps, match as MatchObject } from "react-router-dom";

export interface ScrollIntoViewProps {
    alignToTop?: boolean;
    id: string;
}

export class ScrollIntoView extends React.Component<ScrollIntoViewProps, void> { }

export interface WithScrollOptions {
    propId?: () => string;
    alignToTop?: boolean;
}

export type ComponentConstructor<Props> = React.ComponentClass<Props> | React.SFC<Props>;

export function withScroll(component: ComponentConstructor<RouteComponentProps<RouteProps> | void>, options?: WithScrollOptions)
    : ComponentConstructor<RouteComponentProps<RouteProps> | void>;


export type RouteConfiguration = RouteProps & { inject?: { [key: string]: any } }

export interface SwitchProps {
    routes: Array<RouteConfiguration>;
    location: H.LocationDescriptorObject & { pathname: H.Pathname };
}

export class ConfigSwitch extends React.Component<SwitchProps, void> { }


export interface OnUpdateProps {
    call: (location: H.Location) => void;
    immediate?: boolean;
}

export class OnUpdate extends React.Component<OnUpdateProps, {}> { }

export interface WhenActiveOptions {
    exact?: boolean;
    strict?: boolean;
    pathProp?: string;
    className?: string;
    style?: React.CSSProperties;
    isActive?: () => boolean;
}

export interface WhenActiveReturnType<Props> {
    (component: ComponentConstructor<Props>): ComponentConstructor<Props>;
}

export function whenActive<Props>(options?: WhenActiveOptions): WhenActiveReturnType<Props>;

export interface StatusProps {
    code: string;
}

export class Status extends React.Component<StatusProps, void> { }


interface GetKeyFunction<Params = {}> {
    (match: MatchObject<Params>, route: RouteConfiguration, location: H.Location): string;
}

export interface WrapSwitchProps extends SwitchProps {
    getKey?: GetKeyFunction;
}

export function wrapSwitch<WrapperProps>(Wrapper: ComponentConstructor<WrapperProps>):
    ComponentConstructor<WrapSwitchProps & WrapperProps>;
