// Type definitions for react-transition-group 1.1
// Project: https://github.com/reactjs/react-transition-group
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { ElementType, HTMLAttributes, ReactElement } from "react";

export interface HTMLTransitionGroupProps<T> extends HTMLAttributes<T> {
    component?: ElementType | undefined;
    childFactory?(child: ReactElement): ReactElement;
}

import TransitionGroup = require("./TransitionGroup");
export { TransitionGroupChildLifecycle, TransitionGroupProps } from "./TransitionGroup";

import CSSTransitionGroup = require("./CSSTransitionGroup");
export { CSSTransitionGroupProps, CSSTransitionGroupTransitionName } from "./CSSTransitionGroup";

export { CSSTransitionGroup, TransitionGroup };
