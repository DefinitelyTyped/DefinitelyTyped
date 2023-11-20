import * as React from "react";

export {};

export interface HandleClickOutside<T> {
    handleClickOutside: React.MouseEventHandler<T>;
}

export interface ConfigObject {
    handleClickOutside?: HandleClickOutside<any>["handleClickOutside"] | undefined;
    excludeScrollbar?: boolean | undefined;
}

export interface InjectedOnClickOutProps {
    disableOnClickOutside(): void;
    enableOnClickOutside(): void;
}
export type WithoutInjectedClickOutProps<P> = Pick<P, Exclude<keyof P, keyof InjectedOnClickOutProps>>;

export interface AdditionalProps extends ConfigObject {
    disableOnClickOutside?: boolean | undefined;
    eventTypes?: string | string[] | undefined;
    outsideClickIgnoreClass?: string | undefined;
    preventDefault?: boolean | undefined;
    stopPropagation?: boolean | undefined;
}

export type ComponentConstructor<P> = React.ComponentType<P>;

export interface ClickOutComponentClass<P> extends React.ComponentClass<P> {
    new(props: P, context?: any): React.Component<P, React.ComponentState> & HandleClickOutside<any>;
}

export type OnClickOutProps<P> = WithoutInjectedClickOutProps<P> & AdditionalProps;

export interface WrapperClass<P, C> {
    new(): WrapperInstance<P, C>;
}

export interface WrapperInstance<P, C> extends React.Component<OnClickOutProps<JSX.LibraryManagedAttributes<C, P>>> {
    getInstance(): C extends typeof React.Component ? InstanceType<C> : never;
}

type PropsOf<T> = T extends (
    props: infer P,
    context?: any,
) => React.ReactElement | null // Try to infer for SFCs
    ? P
    : T extends new(props: infer P, context?: any) => React.Component // Otherwise try to infer for classes
        ? P
    : never;

export default function OnClickOut<
    C extends ComponentConstructor<P> | ClickOutComponentClass<P>,
    P = PropsOf<C>,
>(component: C, config?: ConfigObject): WrapperClass<P, C>;
