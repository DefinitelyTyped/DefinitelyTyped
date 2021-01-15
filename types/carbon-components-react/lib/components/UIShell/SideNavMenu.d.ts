import * as React from "react";
import { RenderIconProps, SideNavSharedProps, SideNavSizingProps, ForwardRefReturn } from "../../../typings/shared";

export interface SideNavMenuProps extends RenderIconProps, SideNavSharedProps, SideNavSizingProps {
    children?: React.ReactNode,
    className?: string,
    defaultExpanded?: boolean
    isActive?: boolean,
    title: string,
}

export declare class SideNavMenu extends React.Component<SideNavMenuProps> { }

declare const SideNavMenuForwardRef: ForwardRefReturn<HTMLButtonElement, SideNavMenuProps>;

export default SideNavMenuForwardRef;
