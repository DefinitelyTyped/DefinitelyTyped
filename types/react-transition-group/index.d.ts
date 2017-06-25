// Type definitions for react-transition-group 1.1
// Project: https://github.com/reactjs/react-transition-group
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { HTMLAttributes, ReactElement, ReactType } from "react";

export interface HTMLTransitionGroupProps<T> extends HTMLAttributes<T> {
    component?: ReactType;
    childFactory?(child: ReactElement<any>): ReactElement<any>;
}

import * as TransitionGroup from "./TransitionGroup";
export {
    TransitionGroupProps,
    TransitionGroupChildLifecycle
} from "./TransitionGroup";

import * as CSSTransitionGroup from "./CSSTransitionGroup";
export {
    CSSTransitionGroupProps,
    CSSTransitionGroupTransitionName
} from "./CSSTransitionGroup";

export {
    TransitionGroup,
    CSSTransitionGroup
};
