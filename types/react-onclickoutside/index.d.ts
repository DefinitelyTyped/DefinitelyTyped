// Type definitions for react-onclickoutside 6.7
// Project: https://github.com/Pomax/react-onclickoutside
// Definitions by: Karol Janyst <https://github.com/LKay>
//                 Boris Sergeyev <https://github.com/surgeboris>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export interface HandleClickOutside<T> {
    handleClickOutside: React.MouseEventHandler<T>;
}

export interface ConfigObject {
    handleClickOutside?: HandleClickOutside<any>['handleClickOutside'];
    excludeScrollbar?: boolean;
}

export interface InjectedOnClickOutProps {
    disableOnClickOutside(): void;
    enableOnClickOutside(): void;
}
export type WithoutInjectedClickOutProps<P> = Pick<P, Exclude<keyof P, keyof InjectedOnClickOutProps>>;

export interface AdditionalProps extends ConfigObject {
    disableOnClickOutside?: boolean;
    eventTypes?: string | string[];
    outsideClickIgnoreClass?: string;
    preventDefault?: boolean;
    stopPropagation?: boolean;
}

export type ComponentConstructor<P> = React.ComponentType<P>;

export interface ClickOutComponentClass<P> extends React.ComponentClass<P> {
    new (props: P, context?: any): React.Component<P, React.ComponentState> & HandleClickOutside<any>;
}

export type OnClickOutProps<P> = WithoutInjectedClickOutProps<P> & AdditionalProps;

export default function OnClickOut<P>(
    component: ComponentConstructor<P> | ClickOutComponentClass<P>,
    config?: ConfigObject
): React.ComponentClass<OnClickOutProps<P>>;
