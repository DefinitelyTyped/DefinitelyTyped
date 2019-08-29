import * as React from "react";
import { ReactAttr, RenderIconProps } from "../../../typings/shared";

interface InheritedProps extends RenderIconProps {
    children?: ReactAttr["children"],
    className?: ReactAttr["className"],
    title: NonNullable<ReactAttr["title"]>,
}

export interface SideNavMenuProps extends InheritedProps {
    defaultExpanded?: boolean
    isActive?: boolean,
}

export declare class SideNavMenu extends React.Component<SideNavMenuProps> { }

declare const SideNavMenuFC: React.RefForwardingComponent<HTMLButtonElement, SideNavMenuProps>;

export default SideNavMenuFC;
