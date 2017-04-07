// Type definitions for React (react-addons-css-transition-group) 15.0
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>, AssureSign <http://www.assuresign.com>, Microsoft <https://microsoft.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import 'react-addons-transition-group';
import { ComponentClass, ReactCSSTransitionGroupProps } from 'react';

declare module 'react' {
    interface ReactCSSTransitionGroupTransitionName {
        enter: string;
        enterActive?: string;
        leave: string;
        leaveActive?: string;
        appear?: string;
        appearActive?: string;
    }

    export interface ReactCSSTransitionGroupProps extends TransitionGroupProps<ReactCSSTransitionGroup> {
        transitionName: string | ReactCSSTransitionGroupTransitionName;
        transitionAppear?: boolean;
        transitionAppearTimeout?: number;
        transitionEnter?: boolean;
        transitionEnterTimeout?: number;
        transitionLeave?: boolean;
        transitionLeaveTimeout?: number;
    }
}

declare var ReactCSSTransitionGroup: ReactCSSTransitionGroup;
type ReactCSSTransitionGroup = ComponentClass<ReactCSSTransitionGroupProps>;
export = ReactCSSTransitionGroup;
