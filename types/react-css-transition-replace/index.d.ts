/// <reference types="react-addons-css-transition-group" />
import * as React from "react";

declare namespace CSSTransitionReplace {
    interface Props extends React.CSSTransitionGroupProps {
        changeWidth?: boolean | undefined;
        overflowHidden?: boolean | undefined;
    }
}

declare var CSSTransitionReplace: CSSTransitionReplace;
type CSSTransitionReplace = React.ComponentClass<CSSTransitionReplace.Props>;
export = CSSTransitionReplace;
