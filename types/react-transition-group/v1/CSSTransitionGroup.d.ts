import { Component } from "react";
import { HTMLTransitionGroupProps } from "./index";

declare namespace CSSTransitionGroup {
    interface CSSTransitionGroupTransitionName {
        enter: string;
        enterActive?: string | undefined;
        leave: string;
        leaveActive?: string | undefined;
        appear?: string | undefined;
        appearActive?: string | undefined;
    }

    interface CSSTransitionGroupProps extends HTMLTransitionGroupProps<CSSTransitionGroup> {
        transitionName: string | CSSTransitionGroupTransitionName;
        transitionAppear?: boolean | undefined;
        transitionAppearTimeout?: number | undefined;
        transitionEnter?: boolean | undefined;
        transitionEnterTimeout?: number | undefined;
        transitionLeave?: boolean | undefined;
        transitionLeaveTimeout?: number | undefined;
    }
}

declare class CSSTransitionGroup extends Component<CSSTransitionGroup.CSSTransitionGroupProps> {}

export = CSSTransitionGroup;
