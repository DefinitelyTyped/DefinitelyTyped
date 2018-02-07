// Type definitions for react-onclickoutside 6.0
// Project: https://github.com/Pomax/react-onclickoutside
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react";

export interface HandleClickOutside<T> {
    handleClickOutside: React.MouseEventHandler<T>;
}

export interface InjectedOnClickOutProps {
    disableOnClickOutside(): void;
    enableOnClickOutside(): void;
}

export interface OnClickOutProps {
    disableOnClickOutside?: boolean;
    eventTypes?: string | string[];
    outsideClickIgnoreClass?: string;
    preventDefault?: boolean;
    stopPropagation?: boolean;
}

export type ComponentConstructor<P> = React.ComponentClass<P> | React.StatelessComponent<P>;

export interface ClickOutComponentClass<P extends InjectedOnClickOutProps> extends React.ComponentClass<P> {
    new (props: P, context?: any): React.Component<P, React.ComponentState> & HandleClickOutside<any>;
}

export default function OnClickOut<P>(
    component: ComponentConstructor<P & InjectedOnClickOutProps & HandleClickOutside<any>>
        | ClickOutComponentClass<P & InjectedOnClickOutProps>
): React.ComponentClass<P & OnClickOutProps>;
