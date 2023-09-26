import * as React from "react";
import * as CSSTransitionGroup from "react-addons-css-transition-group";

declare namespace CSSTransitionReplace {
    interface Props extends React.CSSTransitionGroupProps {
        changeWidth?: boolean | undefined;
        overflowHidden?: boolean | undefined;
    }
}

declare var CSSTransitionReplace: CSSTransitionReplace;
type CSSTransitionReplace = React.ComponentClass<CSSTransitionReplace.Props>;
export = CSSTransitionReplace;
