import { ComponentClass, TransitionGroupProps } from "react";

declare module "react" {
    export interface HTMLTransitionGroupProps<T> extends HTMLAttributes<T> {
        component?: ElementType | undefined;
        childFactory?: ((child: ReactElement) => ReactElement) | undefined;
    }

    export interface TransitionGroupProps extends HTMLTransitionGroupProps<ReactTransitionGroup> {
    }
}

declare var ReactTransitionGroup: ReactTransitionGroup;
type ReactTransitionGroup = ComponentClass<TransitionGroupProps>;
export = ReactTransitionGroup;
