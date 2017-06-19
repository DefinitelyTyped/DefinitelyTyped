// Type definitions for rrc 0.10
// Project: https://github.com/pshrmn/rrc#readme
// Definitions by: Deividas Bakanas <https://github.com/DeividasBakanas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react";
import * as H from "history";
import { RouteProps, RouteComponentProps, match as MatchObject } from "react-router-dom";

export interface ScrollIntoViewProps {
    alignToTop?: boolean;
    id: string;
}

export class ScrollIntoView extends React.Component<ScrollIntoViewProps> { }

export type PropIdCallback = () => string;

export interface WithScrollOptions {
    propId?: PropIdCallback;
    alignToTop?: boolean;
}

export type ComponentConstructor<Props> = React.ComponentClass<Props> | React.SFC<Props>;

export function withScroll(component: ComponentConstructor<RouteComponentProps<any> | undefined>, options?: WithScrollOptions)
    : ComponentConstructor<RouteComponentProps<any> | undefined>;

export type RouteConfiguration = RouteProps & { inject?: { [key: string]: any } };

export interface SwitchProps {
    routes: RouteConfiguration[];
    location: H.LocationDescriptorObject & { pathname: H.Pathname };
}

export class ConfigSwitch extends React.Component<SwitchProps> { }

export type OnUpdateCall = (location: H.Location) => void;

export interface OnUpdateProps {
    call: OnUpdateCall;
    immediate?: boolean;
}

export class OnUpdate extends React.Component<OnUpdateProps> { }

export type IsActiveCallback = () => boolean;

export interface WhenActiveOptions {
    exact?: boolean;
    strict?: boolean;
    pathProp?: string;
    className?: string;
    style?: React.CSSProperties;
    isActive?: IsActiveCallback;
}

export type WhenActiveReturnType<Props> = (component: ComponentConstructor<Props>) => ComponentConstructor<Props>;

export function whenActive<Props>(options?: WhenActiveOptions): WhenActiveReturnType<Props>;

export interface StatusProps {
    code: string;
}

export class Status extends React.Component<StatusProps> { }

export type GetKeyFunction<Params> = (match: MatchObject<Params>, route: RouteConfiguration, location: H.Location) => string;

export interface WrapSwitchProps<Params> extends SwitchProps {
    getKey?: GetKeyFunction<Params>;
}

export function wrapSwitch<WrapperProps, Params>(Wrapper: ComponentConstructor<WrapperProps>):
    ComponentConstructor<WrapSwitchProps<Params> & WrapperProps>;
