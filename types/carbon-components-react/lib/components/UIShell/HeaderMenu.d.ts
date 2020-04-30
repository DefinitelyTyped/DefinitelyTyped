import * as React from "react";
import { ReactAttr, ForwardRefReturn } from "../../../typings/shared";

interface InheritedProps {
    "aria-label"?: ReactAttr["aria-label"],
    "aria-labelledby"?: ReactAttr["aria-labelledby"],
    children?: ReactAttr["children"],
    className?: ReactAttr["className"],
    tabIndex?: ReactAttr["tabIndex"],
}

export interface HeaderMenuProps extends InheritedProps {
    menuLinkName: string,
    renderMenuContent?: React.ComponentType,
}

declare class HeaderMenu extends React.Component<HeaderMenuProps> { }

declare const HeaderMenuForwardRef: ForwardRefReturn<HTMLAnchorElement, HeaderMenuProps>;

export default HeaderMenuForwardRef;
