// Type definitions for redux-auth-wrapper 2.0
// Project: https://github.com/mjrussell/redux-auth-wrapper
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { ComponentClass, FunctionComponent, ComponentType, ElementType } from "react";

export type StateSelector<State, OwnProps, R> = (state: State, props: OwnProps) => R;

export type AuthWrapperDecorator<Props> = (component: ComponentType<Props>) => ComponentClass<Props>;

export interface AuthConfig {
    AuthenticatingComponent?: ElementType | undefined;
    wrapperDisplayName?: string | undefined;
}

export interface AuthBaseConfig<OwnProps = {}, State = {}> extends AuthConfig {
    authenticatedSelector: StateSelector<State, OwnProps, boolean>;
    authenticatingSelector?: StateSelector<State, OwnProps, boolean> | undefined;
}
