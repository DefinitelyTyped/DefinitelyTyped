import { Component } from "react";
import { HTMLTransitionGroupProps } from "./index";

declare namespace CSSTransitionGroup {
    interface CSSTransitionGroupTransitionName {
        enter: string;
        enterActive?: string;
        leave: string;
        leaveActive?: string;
        appear?: string;
        appearActive?: string;
    }

    interface CSSTransitionGroupProps extends HTMLTransitionGroupProps<CSSTransitionGroup> {
        transitionName: string | CSSTransitionGroupTransitionName;
        transitionAppear?: boolean;
        transitionAppearTimeout?: number;
        transitionEnter?: boolean;
        transitionEnterTimeout?: number;
        transitionLeave?: boolean;
        transitionLeaveTimeout?: number;
    }
}

declare class CSSTransitionGroup extends Component<CSSTransitionGroup.CSSTransitionGroupProps> {}

export = CSSTransitionGroup;
