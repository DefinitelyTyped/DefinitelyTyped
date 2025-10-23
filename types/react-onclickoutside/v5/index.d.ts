import * as React from "react";

declare namespace OnClickOut {
    interface HandleClickOutside<T> {
        handleClickOutside: React.MouseEventHandler<T>;
    }

    interface InjectedOnClickOutProps {
        disableOnClickOutside(): void;
        enableOnClickOutside(): void;
    }

    interface OnClickOutProps {
        disableOnClickOutside?: boolean | undefined;
        eventTypes?: string | string[] | undefined;
        outsideClickIgnoreClass?: string | undefined;
        preventDefault?: boolean | undefined;
        stopPropagation?: boolean | undefined;
    }
}

type ComponentConstructor<P> = React.ComponentClass<P> | React.FunctionComponent<P>;
interface ClickOutComponentClass<P extends OnClickOut.InjectedOnClickOutProps> extends React.ComponentClass<P> {
    new(props?: P, context?: any): React.Component<P, React.ComponentState> & OnClickOut.HandleClickOutside<any>;
}

declare function OnClickOut<P>(
    component:
        | ComponentConstructor<P & OnClickOut.InjectedOnClickOutProps & OnClickOut.HandleClickOutside<any>>
        | ClickOutComponentClass<P & OnClickOut.InjectedOnClickOutProps>,
): React.ComponentClass<P & OnClickOut.OnClickOutProps>;

export = OnClickOut;
