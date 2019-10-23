// Type definitions for React (react-addons-css-transition-group) 15.0
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>, AssureSign <http://www.assuresign.com>, Microsoft <https://microsoft.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import 'react-addons-transition-group';
import { ComponentClass, CSSTransitionGroupProps } from 'react';

declare module 'react' {
    interface CSSTransitionGroupTransitionName {
        enter: string;
        enterActive?: string;
        leave: string;
        leaveActive?: string;
        appear?: string;
        appearActive?: string;
    }

    export interface CSSTransitionGroupProps extends HTMLTransitionGroupProps<ReactCSSTransitionGroup> {
        transitionName: string | CSSTransitionGroupTransitionName;
        transitionAppear?: boolean;
        transitionAppearTimeout?: number;
        transitionEnter?: boolean;
        transitionEnterTimeout?: number;
        transitionLeave?: boolean;
        transitionLeaveTimeout?: number;
    }
}

declare var ReactCSSTransitionGroup: ReactCSSTransitionGroup;
type ReactCSSTransitionGroup = ComponentClass<CSSTransitionGroupProps>;
export = ReactCSSTransitionGroup;
