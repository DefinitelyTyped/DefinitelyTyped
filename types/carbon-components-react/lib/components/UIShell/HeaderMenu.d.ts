import * as React from "react";
import { ReactAttr, ForwardRefRefType, FCReturn, FCProps } from "../../../typings/shared";

interface InheritedProps {
    "aria-label"?: ReactAttr["aria-label"],
    "aria-labelledby"?: ReactAttr["aria-labelledby"],
    children?: ReactAttr["children"],
    className?: ReactAttr["className"],
    tabIndex?: ReactAttr["tabIndex"],
}

export interface HeaderMenuProps<RP = {}> extends InheritedProps {
    menuLinkName: string,
    renderMenuContent?: React.ComponentType<RP>,
}

declare class HeaderMenu extends React.Component<HeaderMenuProps> { }

declare function HeaderMenuForwardRef<RP = {}>(
    props: FCProps<HeaderMenuProps<RP>>,
    ref: ForwardRefRefType<HTMLAnchorElement>
): FCReturn;

export default HeaderMenuForwardRef;
