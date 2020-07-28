import * as React from "react";
import { ReactAttr, RequiresChildrenProps, SizingProps } from "../../../typings/shared";

interface InheritedProps extends
    RequiresChildrenProps,
    SizingProps
{
    className?: ReactAttr["className"],
}

export interface SideNavIconProps extends InheritedProps { }

declare const SideNavIcon: React.FC<SideNavIconProps>;

export default SideNavIcon;
