import * as React from "react";
import { ReactAttr, RenderIconProps, SideNavSharedProps } from '../../../typings/shared';

interface InheritedProps extends SideNavSharedProps {
    children?: ReactAttr["children"],
    className?: ReactAttr["className"],
    renderIcon: NonNullable<RenderIconProps["renderIcon"]>,
}

export interface SideNavHeaderProps extends InheritedProps { }

declare const SideNavHeader: React.FC<SideNavHeaderProps>;

export default SideNavHeader;
