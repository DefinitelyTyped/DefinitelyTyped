import * as React from "react";
import { ReactAttr, RenderIconProps, SideNavSharedProps, SideNavSizingProps } from '../../../typings/shared';

interface InheritedProps extends RenderIconProps, SideNavSharedProps, SideNavSizingProps {
    children?: Array<NonNullable<React.ReactNode>>,
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
