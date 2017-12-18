// Type definitions for react-onclickoutside 5.7
// Project: https://github.com/Pomax/react-onclickoutside
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';

declare namespace OnClickOut {
    interface HandleClickOutside<T> {
        handleClickOutside: React.MouseEventHandler<T>;
    }

    interface InjectedOnClickOutProps {
        disableOnClickOutside(): void;
        enableOnClickOutside(): void;
    }

    interface OnClickOutProps {
        disableOnClickOutside?: boolean;
        eventTypes?: string | string[];
        outsideClickIgnoreClass?: string;
        preventDefault?: boolean;
        stopPropagation?: boolean;
    }
}

type ComponentConstructor<P> = React.ComponentClass<P> | React.StatelessComponent<P>;
interface ClickOutComponentClass<P extends OnClickOut.InjectedOnClickOutProps> extends React.ComponentClass<P> {
    new (props?: P, context?: any): React.Component<P, React.ComponentState> & OnClickOut.HandleClickOutside<any>;
}

declare function OnClickOut<P>(
    component: ComponentConstructor<P & OnClickOut.InjectedOnClickOutProps & OnClickOut.HandleClickOutside<any>>
        | ClickOutComponentClass<P & OnClickOut.InjectedOnClickOutProps>
): React.ComponentClass<P & OnClickOut.OnClickOutProps>;

export = OnClickOut;
