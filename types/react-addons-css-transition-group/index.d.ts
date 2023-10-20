import "react-addons-transition-group";
import { ComponentClass, CSSTransitionGroupProps } from "react";

declare module "react" {
    interface CSSTransitionGroupTransitionName {
        enter: string;
        enterActive?: string | undefined;
        leave: string;
        leaveActive?: string | undefined;
        appear?: string | undefined;
        appearActive?: string | undefined;
    }

    export interface CSSTransitionGroupProps extends HTMLTransitionGroupProps<ReactCSSTransitionGroup> {
        transitionName: string | CSSTransitionGroupTransitionName;
        transitionAppear?: boolean | undefined;
        transitionAppearTimeout?: number | undefined;
        transitionEnter?: boolean | undefined;
        transitionEnterTimeout?: number | undefined;
        transitionLeave?: boolean | undefined;
        transitionLeaveTimeout?: number | undefined;
    }
}

declare var ReactCSSTransitionGroup: ReactCSSTransitionGroup;
type ReactCSSTransitionGroup = ComponentClass<CSSTransitionGroupProps>;
export = ReactCSSTransitionGroup;
