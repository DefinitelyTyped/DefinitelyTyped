import * as React from "react";
import { SideNavSharedProps, RequiresChildrenProps } from "../../../typings/shared";

export interface SideNavItemsProps extends SideNavSharedProps, RequiresChildrenProps {
    className?: string,
}

declare const SideNavItems: React.FC<SideNavItemsProps>;

export default SideNavItems;
