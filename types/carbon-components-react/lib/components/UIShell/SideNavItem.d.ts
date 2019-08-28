import * as React from "react";
import { ReactAttr, RequiresChildrenProps } from "../../../typings/shared";

interface InheritedProps extends RequiresChildrenProps {
    className?: ReactAttr["className"],
}

export interface SideNavItemProps extends InheritedProps { }

declare const SideNavItem: React.FC<SideNavItemProps>;

export default SideNavItem;
