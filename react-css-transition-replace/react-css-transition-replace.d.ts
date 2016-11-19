// Type definitions for react-css-transition-replace 2.0.1
// Project: http://marnusw.github.io/react-css-transition-replace/
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts" />
/// <reference path="../react/react-addons-css-transition-group.d.ts" />

declare namespace TransitionReplace {
    import React = __React

    interface CSSTransitionReplaceProps extends React.CSSTransitionGroupProps {
        overflowHidden?: boolean
    }

    type CSSTransitionReplace = React.ComponentClass<CSSTransitionReplaceProps>
}

declare module "react-css-transition-replace" {
    var CSSTransitionReplace: TransitionReplace.CSSTransitionReplace
    type CSSTransitionReplace = TransitionReplace.CSSTransitionReplace
    export = CSSTransitionReplace
}
