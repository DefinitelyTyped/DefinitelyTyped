// Type definitions for react-onclickoutside v5.7.0
// Project: https://github.com/Pomax/react-onclickoutside
// Definitions by: Karol Janyst <https://github.com/LKay> and cwmoo740 <https://github.com/cwmoo740>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import * as React from 'react';

declare namespace ClickOut {
    interface HandleClickOutside<T> {
        handleClickOutside: React.MouseEventHandler<T>;
    }

    interface InjectedProps {
        disableOnClickOutside(): void;
        enableOnClickOutside(): void;
    }

    interface Props {
        disableOnClickOutside: boolean;
        eventTypes: string | string[];
        outsideClickIgnoreClass: string;
        preventDefault: boolean;
        stopPropagation: boolean;
    }
}

/**
 * Wraps a React.Stateless component with clickout
 * Must pass handleClickOutside as a prop or implement ClickOut.HandleClickOutside
 * @param component
 * @constructor
 */
declare function ClickOut<OwnProps>(
    component: Stateless<OwnProps> | Component<OwnProps>
): React.ComponentClass<OwnProps & Partial<ClickOut.Props>>;

type Stateless<T> = React.StatelessComponent<T & ClickOut.InjectedProps & ClickOut.HandleClickOutside<any>>;

type Component<T> = React.ComponentClass<T & ClickOut.InjectedProps> |
    React.ComponentClass<T & ClickOut.InjectedProps & ClickOut.HandleClickOutside<any>>;

export = ClickOut;
