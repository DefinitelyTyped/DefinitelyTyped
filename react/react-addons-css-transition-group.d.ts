// Type definitions for React v0.14 (react-addons-css-transition-group)
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>, AssureSign <http://www.assuresign.com>, Microsoft <https://microsoft.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="react.d.ts" />
/// <reference path="react-addons-transition-group.d.ts" />

declare namespace __React {
    interface CSSTransitionGroupProps extends TransitionGroupProps {
        transitionName: string;
        transitionAppear?: boolean;
        transitionEnter?: boolean;
        transitionLeave?: boolean;
    }
    
    type CSSTransitionGroup = ComponentClass<CSSTransitionGroupProps>;
    
    namespace __Addons {
        export var CSSTransitionGroup: __React.CSSTransitionGroup;
    }
}

declare module "react-addons-css-transition-group" {
    var CSSTransitionGroup: __React.CSSTransitionGroup;
    type CSSTransitionGroup = __React.CSSTransitionGroup;
    export = CSSTransitionGroup;
}
