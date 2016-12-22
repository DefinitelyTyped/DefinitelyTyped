// Type definitions for React v0.14 (react-addons-transition-group)
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>, AssureSign <http://www.assuresign.com>, Microsoft <https://microsoft.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ReactElement, ComponentClass, ReactType, TransitionGroupProps } from 'react';

declare module 'react' {
    export interface TransitionGroupProps extends HTMLAttributes<{}> {
        component?: ReactType;
        className?: string;
        childFactory?: (child: ReactElement<any>) => ReactElement<any>;
    }
}

declare var ReactCSSTransitionGroup : ComponentClass<TransitionGroupProps>;
export = ReactCSSTransitionGroup;
