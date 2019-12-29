import * as React from "react";
import { ReactAttr, RequiresChildrenProps } from "../../../typings/shared";

interface InheritedProps extends RequiresChildrenProps {
    "aria-label"?: ReactAttr["aria-label"],
    "aria-labelledby"?: ReactAttr["aria-labelledby"],
    className?: ReactAttr["className"],
}

export interface SwitcherProps extends InheritedProps { }

declare const Switcher: React.RefForwardingComponent<HTMLUListElement, SwitcherProps>;

export default Switcher;
