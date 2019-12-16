import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

interface InheritedProps {
    "aria-label"?: ReactAttr["aria-label"],
    "aria-labelledby"?: ReactAttr["aria-labelledby"],
    children?: ReactAttr["children"],
    className?: ReactAttr["className"],
    tabIndex?: ReactAttr["tabIndex"],
}

export interface HeaderMenuProps extends InheritedProps {
    menuLinkName?: string,
    renderMenuContent?: React.FC,
}

declare const HeaderMenu: React.RefForwardingComponent<HTMLAnchorElement, HeaderMenuProps>;

export default HeaderMenu;
