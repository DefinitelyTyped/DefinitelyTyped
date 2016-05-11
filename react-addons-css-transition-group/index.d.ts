// Type definitions for React v0.14 (react-addons-css-transition-group)
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>, AssureSign <http://www.assuresign.com>, Microsoft <https://microsoft.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ComponentClass } from 'react';
import { TransitionGroupProps } from 'react-addons-transition-group';

declare var CSSTransitionGroup: CSSTransitionGroup;
type CSSTransitionGroup = ComponentClass<CSSTransitionGroupProps>;
export = CSSTransitionGroup;

interface CSSTransitionGroupTransitionName {
    enter: string;
    enterActive?: string;
    leave: string;
    leaveActive?: string;
    appear?: string;
    appearActive?: string;
}

interface CSSTransitionGroupProps extends TransitionGroupProps {
    transitionName: string | CSSTransitionGroupTransitionName;
    transitionAppear?: boolean;
    transitionAppearTimeout?: number;
    transitionEnter?: boolean;
    transitionEnterTimeout?: number;
    transitionLeave?: boolean;
    transitionLeaveTimeout?: number;
}
