// Type definitions for react-transition-group 2.0
// Project: https://github.com/reactjs/react-transition-group
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export { default as CSSTransition, CSSTransitionProps, CSSTransitionClassNames } from "react-transition-group/CSSTransition";
export { default as Transition, TransitionProps } from "react-transition-group/Transition";
export { default as TransitionGroup, TransitionGroupProps } from "react-transition-group/TransitionGroup";

export interface TransitionActions {
    appear?: boolean;
    enter?: boolean;
    exit?: boolean;
}
