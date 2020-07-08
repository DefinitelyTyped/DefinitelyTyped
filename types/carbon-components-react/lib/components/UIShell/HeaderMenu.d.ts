import * as React from "react";
import { ReactAttr, FCReturn } from '../../../typings/shared';

interface InheritedProps {
    "aria-label"?: ReactAttr["aria-label"],
    "aria-labelledby"?: ReactAttr["aria-labelledby"],
    children?: ReactAttr["children"],
    className?: ReactAttr["className"],
    tabIndex?: ReactAttr["tabIndex"],
}

export interface HeaderMenuProps<RP = {}> extends InheritedProps {
    menuLinkName: string,
    ref?(element: HTMLElement): void;
    renderMenuContent?: React.ComponentType<RP>,
}

declare class HeaderMenu extends React.Component<HeaderMenuProps> { }

declare function HeaderMenuForwardRef<RP = {}>(props: HeaderMenuProps<RP>): FCReturn;

export default HeaderMenuForwardRef;
