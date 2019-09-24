import * as React from "react";
import { ReactAttr, RequiresChildrenProps } from "../../../typings/shared";

interface InheritedProps extends RequiresChildrenProps {
    className?: ReactAttr["className"],
}

export interface SideNavItemsProps extends InheritedProps {
}

declare const SideNavItems: React.FC<SideNavItemsProps>;

export default SideNavItems;
