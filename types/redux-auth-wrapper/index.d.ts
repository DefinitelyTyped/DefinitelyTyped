import { ComponentClass, ComponentType, ElementType, FunctionComponent } from "react";

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
