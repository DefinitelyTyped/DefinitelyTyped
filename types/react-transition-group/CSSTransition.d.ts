import { Component } from "react";
import { TransitionActions } from "react-transition-group";
import { TransitionProps } from "react-transition-group/Transition";

export interface CSSTransitionClassNames {
    appear?: string;
    appearActive?: string;
    enter?: string;
    enterActive?: string;
    exit?: string;
    exitActive?: string;
}

export interface CSSTransitionProps extends TransitionProps {
    classNames: string | CSSTransitionClassNames;
}

declare class CSSTransition extends Component<CSSTransitionProps> {}

export default CSSTransition;
