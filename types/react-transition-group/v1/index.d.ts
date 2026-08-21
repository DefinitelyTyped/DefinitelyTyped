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
