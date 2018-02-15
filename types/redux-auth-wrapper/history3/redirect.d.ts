import { Action, Store } from "redux";
import { Location, LocationDescriptorObject } from "history";
import { AuthBaseConfig, AuthConfig, AuthWrapperDecorator, StateSelector } from "..";
import { InjectedAuthProps } from "../authWrapper";
import { ConnectedAuthWrapperConfig } from "../connectedAuthWrapper";

export interface InjectedAuthReduxProps extends InjectedAuthProps {
    redirectPath: string;
}

export interface InjectedAuthRouterProps<Redirect = (...args: any[]) => Action> extends InjectedAuthReduxProps {
    redirect: Redirect;
}

export interface ConnectedRouterRedirectConfig<OwnProps = {}, State = {}> extends AuthBaseConfig<OwnProps, State> {
    redirectPath: string | StateSelector<State, OwnProps, string>;
    redirectAction?(location: Location): Action;
    allowRedirectBack?: boolean | StateSelector<State, OwnProps, boolean>;
    redirectQueryParamName?: string;
}

export function connectedRouterRedirect<OwnProps = {}, State = {}>(
    config: ConnectedRouterRedirectConfig<OwnProps, State>
): AuthWrapperDecorator<OwnProps & InjectedAuthRouterProps>;

export type ConnectedReduxRedirectConfig<OwnProps = {}, State = {}> = ConnectedRouterRedirectConfig<OwnProps, State>;

export function connectedReduxRedirect<OwnProps = {}, State = {}>(
    config: ConnectedReduxRedirectConfig<OwnProps, State>
): AuthWrapperDecorator<OwnProps & InjectedAuthReduxProps>;

export type StateMutateSelector<State, R> = (state: State, nextState: State) => R;

export interface CreateOnEnterConfig<State> extends AuthConfig {
    redirectPath: string | StateMutateSelector<State, string>;
    authenticatedSelector: StateMutateSelector<State, boolean>;
    authenticatingSelector?: StateMutateSelector<State, boolean>;
    allowRedirectBack?: boolean | StateMutateSelector<State, boolean>;
    redirectQueryParamName?: string;
}

export function createOnEnter<State = {}>(config: CreateOnEnterConfig<State>):
    (store: Store<any>, nextState: State, redirect: (location: LocationDescriptorObject) => void) => void;
