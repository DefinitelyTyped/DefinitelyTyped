// Type definitions for react-onclickoutside v5.7.0
// Project: https://github.com/Pomax/react-onclickoutside
// Definitions by: Karol Janyst <https://github.com/LKay> and cwmoo740 <https://github.com/cwmoo740>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

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

type DecoratedComponent<P> = React.ComponentClass<P & OnClickOut.OnClickOutProps>;

declare function OnClickOut<P>(
    component: React.StatelessComponent<P & OnClickOut.InjectedOnClickOutProps & OnClickOut.HandleClickOutside<any>>
): DecoratedComponent<P>;

declare function OnClickOut<P>(
    component: React.ComponentClass<P & OnClickOut.InjectedOnClickOutProps & Partial<OnClickOut.HandleClickOutside<any>>>
): DecoratedComponent<P>;

export = OnClickOut;
