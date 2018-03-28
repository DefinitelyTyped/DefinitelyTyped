// Type definitions for redux-auth-wrapper 1.0
// Project: https://github.com/mjrussell/redux-auth-wrapper
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { ComponentClass, StatelessComponent, ReactType } from "react";
import { Action } from "redux";
import { Location } from "history";

export type ComponentConstructor<P> = ComponentClass<P> | StatelessComponent<P>;

export interface InjectedProps<AuthData> {
    authData?: AuthData;
}

export interface AuthWrapperConfig<State, Props, AuthData> {
    allowRedirectBack?: boolean | ((location: Location, redirectPath: string) => boolean);
    authenticatingSelector?(state: State, ownProps?: Props): boolean;
    authSelector(state: State, ownProps?: Props): AuthData;
    FailureComponent?: ReactType;
    failureRedirectPath?: string | ((state: State, ownProps?: Props) => string);
    LoadingComponent?: ReactType;
    redirectQueryParamName?: string;
    wrapperDisplayName?: string;
    predicate?(authData: AuthData): boolean;
    propMapper?(ownProps: Props): InjectedProps<AuthData> & Props;
    redirectAction?(...args: any[]): Action;
}

export type AuthDecorator<Props> = (component: ComponentConstructor<Props>) => ComponentClass<Props>;

export function UserAuthWrapper<State, Props, AuthData>(config: AuthWrapperConfig<State, Props, AuthData>): AuthDecorator<Props>;
