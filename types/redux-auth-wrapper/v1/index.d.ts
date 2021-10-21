// Type definitions for redux-auth-wrapper 1.0
// Project: https://github.com/mjrussell/redux-auth-wrapper
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { ComponentClass, FunctionComponent, ElementType } from "react";
import { Action } from "redux";
import { Location } from "history";

export type ComponentConstructor<P> = ComponentClass<P> | FunctionComponent<P>;

export interface InjectedProps<AuthData> {
    authData?: AuthData | undefined;
}

export interface AuthWrapperConfig<State, Props, AuthData> {
    allowRedirectBack?: boolean | ((location: Location, redirectPath: string) => boolean) | undefined;
    authenticatingSelector?(state: State, ownProps?: Props): boolean;
    authSelector(state: State, ownProps?: Props): AuthData;
    FailureComponent?: ElementType | undefined;
    failureRedirectPath?: string | ((state: State, ownProps?: Props) => string) | undefined;
    LoadingComponent?: ElementType | undefined;
    redirectQueryParamName?: string | undefined;
    wrapperDisplayName?: string | undefined;
    predicate?(authData: AuthData): boolean;
    propMapper?(ownProps: Props): InjectedProps<AuthData> & Props;
    redirectAction?(...args: any[]): Action;
}

export type AuthDecorator<Props> = (component: ComponentConstructor<Props>) => ComponentClass<Props>;

export function UserAuthWrapper<State, Props, AuthData>(config: AuthWrapperConfig<State, Props, AuthData>): AuthDecorator<Props>;
